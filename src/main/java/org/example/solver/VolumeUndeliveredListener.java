
package org.example.solver;

import ai.timefold.solver.core.api.domain.variable.VariableListener;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.director.ScoreDirector;
import org.example.domain.RoutingSolution;
import org.example.domain.Visit;


public class VolumeUndeliveredListener implements VariableListener<RoutingSolution, Visit> {
    @Override
    public void beforeVariableChanged(ScoreDirector<RoutingSolution> scoreDirector, Visit visit) {

    }

    @Override
    public void afterVariableChanged(ScoreDirector<RoutingSolution> scoreDirector, Visit visit) {
        if (visit.getDoctor() == null) {
            scoreDirector.beforeVariableChanged(visit, "volumeUndelivered");
            visit.setVolumeUndelivered(0);
            scoreDirector.afterVariableChanged(visit, "volumeUndelivered");
            scoreDirector.beforeVariableChanged(visit, "volumePicked");
            visit.setVolumePicked(0);
            scoreDirector.afterVariableChanged(visit, "volumePicked");
            scoreDirector.beforeVariableChanged(visit, "arrivalTime"); // Laika pārēkināšanas sākums
            visit.setArrivalTime(null); // Laiks ir nulle
            scoreDirector.afterVariableChanged(visit, "arrivalTime"); // Laika pārēķināšanas beigas

        } else {
            Integer undelivered = visit.getPrev() != null ? visit.getPrev().getVolumeUndelivered() : 0; // Iegustam vertibu no iepriekseja, ja tada nav nemam 0
            Integer picked = visit.getPrev() != null ? visit.getPrev().getVolumePicked() : 0;
            Integer arrival = visit.getPrev() != null && visit.getPrev().getArrivalTime() != null ?
                    visit.getPrev().getDepartureTime() + visit.getPrev().getLocation().timeTo(visit.getLocation()) :
                    visit.getDoctor().getTwStart() + visit.getDoctor().getSrvSTime() +
                            visit.getDoctor().getDepot().timeTo(visit.getLocation());

            Visit shadowVisit = visit;
            while (shadowVisit != null) {
                switch (shadowVisit.getVisitType()) {
                    case DELIVERY -> undelivered = undelivered - shadowVisit.getVolume();
                    case PICKUP -> picked = picked + shadowVisit.getVolume();
                    case STOCK -> {undelivered = shadowVisit.getDoctor().getCapacity();picked = 0;}
                }
                //if (undelivered.equals(shadowVisit.getVolumeUndelivered()) &&
                //        picked.equals(shadowVisit.getVolumePicked())) break;
                scoreDirector.beforeVariableChanged(shadowVisit, "volumeUndelivered");
                shadowVisit.setVolumeUndelivered(undelivered);
                scoreDirector.afterVariableChanged(shadowVisit, "volumeUndelivered");
                scoreDirector.beforeVariableChanged(shadowVisit, "volumePicked");
                shadowVisit.setVolumePicked(picked);
                scoreDirector.afterVariableChanged(shadowVisit, "volumePicked");
                scoreDirector.beforeVariableChanged(shadowVisit, "arrivalTime");
                shadowVisit.setArrivalTime(arrival);
                scoreDirector.afterVariableChanged(shadowVisit, "arrivalTime");

                shadowVisit = shadowVisit.getNext();

                if (shadowVisit != null) {
                    arrival = shadowVisit.getPrev().getDepartureTime() +
                            shadowVisit.getPrev().getLocation().timeTo(shadowVisit.getLocation());
                }
            }
        }
    }

    @Override
    public void beforeEntityAdded(ScoreDirector<RoutingSolution> scoreDirector, Visit visit) {

    }

    @Override
    public void afterEntityAdded(ScoreDirector<RoutingSolution> scoreDirector, Visit visit) {

    }

    @Override
    public void beforeEntityRemoved(ScoreDirector<RoutingSolution> scoreDirector, Visit visit) {

    }

    @Override
    public void afterEntityRemoved(ScoreDirector<RoutingSolution> scoreDirector, Visit visit) {

    }
}
