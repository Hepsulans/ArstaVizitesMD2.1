package org.example;

import ai.timefold.solver.test.api.score.stream.ConstraintVerifier;
import org.example.domain.Location;
import org.example.domain.RoutingSolution;
import org.example.domain.Doctor;
import org.example.domain.Visit;
import org.example.solver.StreamCalculator;
import org.junit.jupiter.api.Test;

import java.util.List;

public class ConstraintTest {
    Doctor DOCTOR = new Doctor();
    Visit VISIT1 = new Visit();
    Visit VISIT2 = new Visit();
    Location DEPOT = new Location(0.0,0.0);
    Location locVisit1 = new Location(4.0, 0.0);
    Location locVisit2 = new Location(4.0, 4.0);
    public ConstraintTest() {
        VISIT1.setDoctor(DOCTOR);
        VISIT1.setLocation(locVisit1);
        VISIT2.setDoctor(DOCTOR);
        VISIT2.setLocation(locVisit2);

        VISIT1.setNext(VISIT2);
        VISIT2.setPrev(VISIT1);
        DOCTOR.getVisits().addAll(List.of(VISIT1, VISIT2));
        DOCTOR.setDepot(DEPOT);
        DOCTOR.setCostDistance(1.0);
    }
    ConstraintVerifier<StreamCalculator, RoutingSolution> constraintVerifier = ConstraintVerifier.build(
            new StreamCalculator(), RoutingSolution.class, Doctor.class, Visit.class);
    @Test
    void distanceTest1() {
        constraintVerifier.verifyThat(StreamCalculator::depot2visit)
                .given(DOCTOR, VISIT1)
                .penalizesBy(400);
    }
    @Test
    void distanceTest2() {
        constraintVerifier.verifyThat(StreamCalculator::visit2visit)
                .given(VISIT2, VISIT1, DOCTOR)
                .penalizesBy(400);
    }
}
