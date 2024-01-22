package org.example.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.stream.Constraint;
import ai.timefold.solver.core.api.score.stream.ConstraintFactory;
import ai.timefold.solver.core.api.score.stream.ConstraintProvider;
import ai.timefold.solver.core.api.score.stream.Joiners;
import org.example.domain.Doctor;
import org.example.domain.Visit;

import static ai.timefold.solver.core.api.score.stream.Joiners.equal;

public class StreamCalculator implements ConstraintProvider {
    @Override
    public Constraint[] defineConstraints(ConstraintFactory constraintFactory) {
        return new Constraint[]{
                //everyVisit(constraintFactory),
                //totalDistance(constraintFactory),
                //docPower(constraintFactory),
                //isGoodsConstraintBroken(constraintFactory),
                visit2visit(constraintFactory),
                depot2visit(constraintFactory),
                visit2depot(constraintFactory),
                capacityOverflow(constraintFactory),
                notEnoughGoods(constraintFactory),
                pickedNotInStock(constraintFactory),
                docPowerMiss(constraintFactory), // Doc Power miss match
                docQualificationMiss(constraintFactory), // Doc Qualification miss match
                vehicleUsage(constraintFactory),
                worktimeCost(constraintFactory),
                visitOutsideTw(constraintFactory),
                worktimeOverflow(constraintFactory),
                vehicleOutsideTw(constraintFactory),
                returnOutsideTw(constraintFactory),
        };
    }

    public Constraint everyVisit(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Visit.class) // Jaatrod sodāmais fragments
                .penalize(HardSoftScore.ONE_SOFT, visit -> 1) // Cik daudz sodam | -> vita var rakstit funkciju
                .asConstraint("everyVisit"); // Nosaukums sodam
    }

    public Constraint totalDistance(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Doctor.class)
                .filter(doctor -> doctor.getTotalDistance() > 0) // Nofiltrē mašinas, kas nobraukušas 0 vai mazak
                .penalize(HardSoftScore. ONE_SOFT, doctor -> (int)Math.round(doctor.getTotalDistance()*1000))
                .asConstraint("totalDistance");
    }

    // docQualification looked like this while it had the Integer return value:
    /*
    public Constraint docPower(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Doctor.class)
                .penalize(HardSoftScore. ONE_HARD, Doctor::docQualification) // doctor -> doctor.docQualification() | The original.
                .asConstraint("totalQualification");
    }
     */
    public Constraint docPower(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Doctor.class)
                .filter(Doctor::docQualification)
                .penalize(HardSoftScore. ONE_HARD) // doctor -> doctor.docQualification() | The original.
                .asConstraint("totalQualificationUnmatched");
    }

    public Constraint isGoodsConstraintBroken(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Doctor.class)
                .filter(Doctor::isGoodsConstraintsBroken) // Nofiltrē mašinas, kas nobraukušas 0 vai mazak
                .penalize(HardSoftScore. ONE_HARD)
                .asConstraint("isGoodsConstraintBroken");
    }

    public Constraint visit2visit(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Visit.class)
                .filter(visit -> visit.getNext() != null)
                .join(Doctor.class, Joiners.equal(Visit::getDoctor, v->v))
                .penalize(HardSoftScore.ONE_SOFT, (visit, vehicle) ->
                        (int) Math.round(visit.getLocation().distanceTo(visit.getNext().getLocation())
                                * vehicle.getCostDistance() * 100))
                .asConstraint("visit2visit");
    }

    public Constraint depot2visit(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Visit.class)
                .filter(visit -> visit.getPrev() == null)
                .join(Doctor.class, equal(Visit::getDoctor, v -> v))
                .penalize(HardSoftScore.ONE_SOFT, (visit, vehicle) ->
                        (int) Math.round(vehicle.getDepot().distanceTo(visit.getLocation()) * vehicle.getCostDistance() * 100))
                .asConstraint("depot2visit");
    }

    public Constraint visit2depot(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Visit.class)
                .filter(visit -> visit.getNext() == null)
                .join(Doctor.class, equal(Visit::getDoctor, v -> v))
                .penalize(HardSoftScore.ONE_SOFT, (visit, vehicle) ->
                        (int) Math.round(visit.getLocation().distanceTo(vehicle.getDepot()) * vehicle.getCostDistance() * 100))
                .asConstraint("visit2depot");
    }

    public Constraint capacityOverflow(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Visit.class)
                .join(Doctor.class, equal(Visit::getDoctor, v->v))
                .filter((visit, doctor) ->
                        visit.getVolumeUndelivered() + visit.getVolumePicked() > doctor.getCapacity())
                .penalize(HardSoftScore.ONE_HARD, (vi,ve) -> 100)
                .asConstraint("capacityOverflow");
    }

    public Constraint notEnoughGoods(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Visit.class)
                .filter(visit -> visit.getVolumeUndelivered() < 0)
                .penalize(HardSoftScore.ONE_HARD, v -> 100)
                .asConstraint("notEnoughGoods");
    }

    public Constraint pickedNotInStock(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Visit.class)
                .filter(visit -> visit.getNext() == null && visit.getVolumePicked() > 0)
                .penalize(HardSoftScore.ONE_HARD, v -> 10)
                .asConstraint("pickedNotInStock");
    }

    public Constraint docPowerMiss(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Doctor.class)
                //.join(Doctor.class, equal(Visit::getDoctor, v -> v))
                .penalize(HardSoftScore.ONE_HARD, Doctor -> Doctor.getPowerMiss() * 10) // In case of Error -> Doctor::getPowerMiss
                .asConstraint("powerMissedBy");
    }

    public Constraint docQualificationMiss(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Doctor.class)
                //.join(Doctor.class, equal(Visit::getDoctor, v -> v))
                .penalize(HardSoftScore.ONE_HARD, Doctor -> Doctor.getQualificationMiss() * 10) // In case of Error | Doctor::getQualificationMiss
                .asConstraint("QualificationMissedBy");
    }

    //Remains as vehicleUsage. Because the vehicle cost is what we are getting here
    public Constraint vehicleUsage(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Doctor.class)
                .filter(doctor -> !doctor.getVisits().isEmpty())
                .penalize(HardSoftScore.ONE_SOFT, doctor -> (int) Math.round(doctor.getCostUsage() * 100))
                .asConstraint("vehicleUsage");
    }

    public Constraint worktimeCost(ConstraintFactory constraintFactory) { // Darba cena. Seit varetu virstundu maksu ielikt!
        return constraintFactory
                .forEach(Doctor.class)
                .filter(doctor -> !doctor.getVisits().isEmpty())
                .join(Visit.class, Joiners.equal(v->v, Visit::getDoctor))
                .filter((doctor, last) -> last.getNext() == null)
                .penalize(HardSoftScore.ONE_SOFT, (doctor, last) ->
                {
                    return (int) Math.round((last.getDepartureTime() + last.getLocation().timeTo(doctor.getDepot()) + doctor.getSrvFTime() -
                            doctor.getTwStart()) / 3600.0 * doctor.getCostWorkTime() * 100);
                })
                .asConstraint("worktimeCost");
    }

    public Constraint visitOutsideTw(ConstraintFactory constraintFactory) { // Arpus laika loga apmeklejums
        return constraintFactory
                .forEach(Visit.class)
                .filter(visit -> visit.getDepartureTime() != null && visit.getDepartureTime() > visit.getTwFinish())
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("visitOutsideTw");
    }

    public Constraint worktimeOverflow(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Doctor.class)
                .filter(doctor -> !doctor.getVisits().isEmpty())
                .join(Visit.class, Joiners.equal(v->v, Visit::getDoctor))
                .filter((doctor, last) -> last.getNext() == null)
                .filter(((doctor, last) ->
                        last.getDepartureTime() + last.getLocation().timeTo(doctor.getDepot()) + doctor.getSrvFTime() -
                                doctor.getTwStart() > doctor.getMaxWorkTime()))
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("worktimeOverflow");
    }

    public Constraint vehicleOutsideTw(ConstraintFactory constraintFactory) { // Auto ārpus laika loga pielietojums
        return constraintFactory
                .forEach(Visit.class)
                .join(Doctor.class, equal(Visit::getDoctor, v->v))
                .filter((visit, doctor) -> visit.getDepartureTime() > doctor.getTwFinish())
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("vehicleOutsideTw");
    }

    public Constraint returnOutsideTw(ConstraintFactory constraintFactory) { // Mašina ir atgriezusies depo BET ārpus darba laika
        return constraintFactory
                .forEach(Doctor.class)
                .filter(doctor -> !doctor.getVisits().isEmpty())
                .join(Visit.class, Joiners.equal(v->v, Visit::getDoctor))
                .filter((doctor, last) -> last.getNext() == null)
                .filter(((doctor, last) -> last.getDepartureTime() +
                        last.getLocation().timeTo(doctor.getDepot()) +
                        doctor.getSrvFTime() > doctor.getTwFinish()))
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("returnOutsideTw");
    }

    /*
    public Constraint catcat(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Visit.class) // Jaatrod sodāmais fragments
                .penalize(HardSoftScore.ONE_SOFT, visit -> 1) // Cik daudz sodam | -> vita var rakstit funkciju
                .asConstraint("everyVisit"); // Nosaukums sodam
    }

    public Constraint docPowerMiss(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Visit.class)
                .join(Doctor.class, equal(Visit::getDoctor, v -> v))
                .filter((visit, doctor) -> visit.getPowerMiss() > doctor.getDocPower())
                .penalize();
    }
    These are references
     */
}
