package org.example.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.calculator.EasyScoreCalculator;
import org.example.domain.Doctor;
import org.example.domain.Location;
import org.example.domain.RoutingSolution;
import org.example.domain.Visit;

import javax.print.Doc;

public class ScoreCalculator implements EasyScoreCalculator<RoutingSolution, HardSoftScore> {
    @Override
    public HardSoftScore calculateScore(RoutingSolution routingSolution) {
        int hard = 0, soft = 0;

        // Iegusim cik daudz ir nobraucis Ārsts kopumā.
        Double totalDistance = 0.0; // For soft scores
        Integer FailedPower = 0; // For hard scores
        for(Doctor doctor: routingSolution.getDoctorList()) {
            // Hard score. Pickups/deliveries/stocks
            Integer undelivered = 0, picked = 0;
            for(Visit visit: doctor.getVisits()){
                switch (visit.getVisitType()){
                    case DELIVERY -> {
                        undelivered = undelivered - visit.getVolume();
                    }
                    case PICKUP -> {
                        picked = picked + visit.getVolume();
                    }
                    case STOCK -> {
                        undelivered = doctor.getCapacity();
                        picked = 0;
                    }
                    default -> throw new IllegalStateException("Unexpected value: " + visit.getVisitType());
                }
                if(undelivered + picked > doctor.getCapacity()) hard = hard + (undelivered + picked - doctor.getCapacity()); // Esam parpildijusi masinu
                if(undelivered < 0) hard = hard - undelivered; // Esam atdevusi vairak ka drikstejam.
            }
            if(picked > 0) hard = hard + picked; // Nenodevam samples

            // Soft score. Distance calculation
            totalDistance = totalDistance + doctor.getTotalDistance();

            // Hard score. Doctors power and qualification checks. This used to work while the doctor.docQualification() reuturned an integer
            // FailedPower = FailedPower + doctor.docQualification();

            /* // This used to be docQualification. It got moved for the sake of streams.
            for(Visit visit: doctor.getVisits()){
                if(doctor.getDocPower() < visit.getReqPower()){
                    FailedPower = FailedPower + visit.getReqPower() - doctor.getDocPower();
                }
                if(doctor.getDocSpeciality() < visit.getReqSpeciality()) {
                    FailedPower = FailedPower + visit.getReqSpeciality() - doctor.getDocSpeciality();
                }
            }

             */
        }
        soft = (int)Math.round(totalDistance * 1000);
        hard = hard + FailedPower;

        // Seit jaimplemente HARD nosacijums par to vai var vai nevar apciemot klientu

        return HardSoftScore.of(- hard, - soft); // Timefold maximize nevis minimize, tapec ir ar "-"
    }
}
