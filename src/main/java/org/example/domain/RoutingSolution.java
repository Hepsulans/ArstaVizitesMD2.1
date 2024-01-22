package org.example.domain;

import ai.timefold.solver.core.api.domain.solution.PlanningEntityCollectionProperty;
import ai.timefold.solver.core.api.domain.solution.PlanningScore;
import ai.timefold.solver.core.api.domain.solution.PlanningSolution;
import ai.timefold.solver.core.api.domain.solution.ProblemFactCollectionProperty;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeProvider;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.example.Main;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@PlanningSolution
@Getter @Setter @NoArgsConstructor
public class RoutingSolution {

    private static final Logger LOGGER = LoggerFactory.getLogger(RoutingSolution.class);

    private static final Integer HOUR = 3600;
    private static final Integer TIME8AM = 8 * HOUR;

    private String solutionId;
    @PlanningScore
    private HardSoftScore score;

    // Mainisies ārstiem kuru pacientu tie apmekles un kadā secībā
    // Potenciali arī šis objeckts varbūt nemainās... Varbut vajag to kā @ProblemFactCollectionProperty
    @PlanningEntityCollectionProperty
    private List<Doctor> doctorList = new ArrayList<>();

    // Lietas kas planošanas laikā nemainīsies.
    @ProblemFactCollectionProperty
    @ValueRangeProvider
    private List<Visit> visitList = new ArrayList<>();

    @ProblemFactCollectionProperty
    private List<Location> locationList = new ArrayList<>();

    public void print(){
        this.getDoctorList().forEach(doctor -> {
            LOGGER.info(doctor.getRegNrAuto() + " Cap:" + doctor.getCapacity() +  " ( Power: " + doctor.getDocPower() + "| Speciality: " + doctor.getDocSpeciality() + " )");
            doctor.getVisits().forEach(visit -> {
                LOGGER.info("   " + visit.getName() + " " + visit.getVisitType() + "(" + visit.getVolume() +  ") | " + visit.getReqPower() + " " + visit. getReqSpeciality() + " | " + visit.getDoctor().getRegNrAuto()
                + " und=" + visit.getUndelivered() + " pick=" + visit.getVolumePicked()
                        + " | arrT=" + formatTime(visit.getArrivalTime())
                        + " depT=" + formatTime(visit.getDepartureTime()));
            });
        });
    }

    public static RoutingSolution generateData() {
        RoutingSolution problem = new RoutingSolution();
        problem.setSolutionId("P1");

        Doctor v1 = new Doctor();
        v1.setRegNrAuto("AA0000");
        v1.setDocPower(5);
        v1.setDocSpeciality(5);
        v1.setCapacity(5);
        v1.setTwStart(TIME8AM); // Darba laika sakums
        v1.setTwFinish(TIME8AM + 8 * HOUR);
        v1.setSrvSTime(900); // Servissa laiks
        v1.setSrvFTime(900);
        v1.setMaxWorkTime(HOUR * 10); // Maksimalais darba laiks ar virstudnam
        Location depotLoc = new Location(0.0 , 0.0); // Location of the Hospital.
        v1.setDepot(depotLoc); // v1 is at the Hospital at the begining.
        v1.setCostDistance(0.1); // Auto braukšanas cena km
        v1.setCostWorkTime(7.0); // Ārsta darba cena
        v1.setCostUsage(30.0); // Mašinas iesaistes cena

        Doctor v2 = new Doctor();
        v2.setRegNrAuto("BB1111");
        v2.setDocPower(5);
        v2.setDocSpeciality(5);
        v2.setCapacity(5);
        v2.setTwStart(TIME8AM);
        v2.setTwFinish(TIME8AM + 14 * HOUR);
        v2.setSrvSTime(900);
        v2.setSrvFTime(900);
        v2.setMaxWorkTime(HOUR * 10);
        v2.setDepot(depotLoc); // v2 is at the Hospital at the begining.
        v2.setCostDistance(0.1);
        v2.setCostWorkTime(10.0);
        v2.setCostUsage(25.0);

        Visit a1 = new Visit();
        a1.setName("Klients1");
        a1.setReqPower(2);
        a1.setReqSpeciality(3);
        a1.setVolume(3);
        a1.setVisitType(Visit.VisitType.DELIVERY);
        Location a1Loc = new Location(0.0 , 400.0); // Location of the Hospital.
        a1.setLocation(a1Loc);
        a1.setSrvTime(600); // Cik ilgi šis pacients būs jaapkalpo
        a1.setTwStart(TIME8AM); // Laika loga sākums
        a1.setTwFinish(TIME8AM + 12 * HOUR); // Laika loga beigas

        Visit a2 = new Visit();
        a2.setName("Klients2");
        a2.setReqPower(1);
        a2.setReqSpeciality(1);
        a2.setVolume(1);
        a2.setVisitType(Visit.VisitType.DELIVERY);
        Location a2Loc = new Location(400.0 , 400.0); // Location of the Hospital.
        a2.setLocation(a2Loc);
        a2.setSrvTime(600);
        a2.setTwStart(TIME8AM);
        a2.setTwFinish(TIME8AM + 12 * HOUR);

        //LOGGER.info(a1Loc.distanceTo(a2Loc).toString());

        Visit a3 = new Visit();
        a3.setName("Klients3");
        a3.setReqPower(3);
        a3.setReqSpeciality(3);
        a3.setVolume(1);
        a3.setVisitType(Visit.VisitType.DELIVERY);
        Location a3Loc = new Location(400.0 , 0.0); // Location of the Hospital.
        a3.setLocation(a3Loc);
        a3.setSrvTime(600);
        a3.setTwStart(TIME8AM);
        a3.setTwFinish(TIME8AM + 12 * HOUR);

        //Pievienot so klientu prieks HARD testa.
        Visit a4 = new Visit();
        a4.setName("Klients4");
        a4.setReqPower(5);
        a4.setReqSpeciality(5);
        a4.setVolume(1);
        a4.setVisitType(Visit.VisitType.PICKUP);
        Location a4Loc = new Location(600.0 , 0.0); // Location of the Hospital.
        a4.setLocation(a4Loc);
        a4.setSrvTime(600);
        a4.setTwStart(TIME8AM);
        a4.setTwFinish(TIME8AM + 12 * HOUR);

        // Slimnicu apmeklejumi prieks uzbildes
        Visit a5 = new Visit();
        a5.setName("Slimniica1");
        a5.setReqPower(0); // Slimnicas apmeklejums prasa 0
        a5.setReqSpeciality(0); // Slimnicas apmeklejums prasa 0
        a5.setVolume(0); // Drosibas pec volume ir 0
        a5.setVisitType(Visit.VisitType.STOCK);
        // Location stockLock = new Location(0.0 , 0.0); // Location of the Hospital aka Depot location.
        a5.setLocation(depotLoc);
        a5.setSrvTime(900); // Slimnicas apkalpošanas laiks.
        a5.setTwStart(TIME8AM - 2 * HOUR); // Laika loga sakums
        a5.setTwFinish(TIME8AM + 16 * HOUR); // Laika loga beigas

        Visit a6 = new Visit();
        a6.setName("Slimniica2");
        a6.setReqPower(0); // Slimnicas apmeklejums prasa 0
        a6.setReqSpeciality(0); // Slimnicas apmeklejums prasa 0
        a6.setVolume(0);
        a6.setVisitType(Visit.VisitType.STOCK);
        a6.setLocation(depotLoc);
        a6.setSrvTime(900);
        a6.setTwStart(TIME8AM - 2 * HOUR);
        a6.setTwFinish(TIME8AM + 16 * HOUR);



        // Atrodam problēmu -> Atrod sarakstu ar ārstiem -> Pievieno ārstus
        problem.getDoctorList().addAll(List.of(v1,v2)); // problem.getVehicleList()
        problem.getLocationList().addAll(List.of(depotLoc, a1Loc, a2Loc, a3Loc, a4Loc)); // Using addAll and not add because there WILL be others
        problem.getVisitList().addAll(List.of(a1, a2, a3, a4, a5, a6)); // Using addAll and not add because there WILL be others

        return problem;
    }

    private static int problemId = 0;
    private static Integer getProblemId() { problemId++; return problemId;}

    public static RoutingSolution generateData(int scale) { // scale number of clients
        RoutingSolution problem = new RoutingSolution();
        problem.setSolutionId(RoutingSolution.getProblemId().toString());

        Random random = new Random();

        // vehicles: scale / 20 + 1
        for (int i = 1; i <= scale / 20 + 1; i++) {
            Doctor v1 = new Doctor();
            v1.setRegNrAuto("AA" + i);
            v1.setDocPower(5); // Max power
            v1.setDocSpeciality(5); // Max speciality
            v1.setCapacity(499 + random.nextInt(100) - 50);
            v1.setTwStart(TIME8AM);
            v1.setTwFinish(TIME8AM + 8 * HOUR);
            v1.setSrvSTime(900);
            v1.setSrvFTime(900);
            v1.setMaxWorkTime(HOUR * 8);
            Location depotLoc = new Location(0.0, 0.0); // The hospital is the depo
            //Location depotLoc = new Location(LOWER_RIGHT_COORD_LAT + (UPPER_LEFT_COORD_LAT - LOWER_RIGHT_COORD_LAT) * random.nextDouble(),
            //        UPPER_LEFT_COORD_LON + (LOWER_RIGHT_COORD_LON - UPPER_LEFT_COORD_LON) * random.nextDouble());

            v1.setDepot(depotLoc);
            v1.setCostDistance(0.1);
            v1.setCostWorkTime(7.0);
            v1.setCostUsage(30.0);

            problem.getDoctorList().add(v1);
            problem.getLocationList().add(depotLoc);
        }

        for (int i = 1; i <= scale; i++) {
            Visit a1 = new Visit();
            a1.setName("Client" + i);
            a1.setReqPower(random.nextInt(5));
            a1.setReqSpeciality(random.nextInt(5));
            Location a1Loc = new Location(random.nextDouble(100), random.nextDouble(100));
            //Location a1Loc = new Location(LOWER_RIGHT_COORD_LAT + (UPPER_LEFT_COORD_LAT - LOWER_RIGHT_COORD_LAT) * random.nextDouble(),
            //        UPPER_LEFT_COORD_LON + (LOWER_RIGHT_COORD_LON - UPPER_LEFT_COORD_LON) * random.nextDouble());
            a1.setLocation(a1Loc);
            a1.setSrvTime(600);
            a1.setTwStart(TIME8AM + random.nextInt(HOUR * 2));
            a1.setTwFinish(TIME8AM + 8 * HOUR - random.nextInt(HOUR * 2));

            problem.getVisitList().add(a1);
            problem.getLocationList().add(a1Loc);

            if (i <= (0.1 * scale)) {
                // delivery
                a1.setVolume(100);
                a1.setVisitType(Visit.VisitType.DELIVERY);
            } else {
                // pickup
                a1.setVolume(1);
                a1.setVisitType(Visit.VisitType.PICKUP);
            }
        }

        for (int i = 1; i <= scale / 50 + 1; i++) {
            Location stockLoc = new Location(0.0, 0.0); // Location of the Hospital
            //Location stockLoc = new Location(LOWER_RIGHT_COORD_LAT + (UPPER_LEFT_COORD_LAT - LOWER_RIGHT_COORD_LAT) * random.nextDouble(),
            //        UPPER_LEFT_COORD_LON + (LOWER_RIGHT_COORD_LON - UPPER_LEFT_COORD_LON) * random.nextDouble());
            problem.getLocationList().add(stockLoc);
            for (int j = 1; j <= 10; j++) {
                Visit a5 = new Visit();
                a5.setLocation(stockLoc);
                a5.setName("Stock" + i + ":" + j);
                a5.setReqPower(0); // Slimnicas apmeklejums prasa 0
                a5.setReqSpeciality(0); // Slimnicas apmeklejums prasa 0
                a5.setVolume(0); // Drosibas pec volume ir 0
                a5.setVisitType(Visit.VisitType.STOCK);
                a5.setLocation(stockLoc);
                a5.setSrvTime(900);
                a5.setTwStart(TIME8AM - 2 * HOUR);
                a5.setTwFinish(TIME8AM + 16 * HOUR);
                problem.getVisitList().add(a5);
            }
        }

        return problem;
    }

    public static String formatTime(Integer timeInSeconds) {
        if (timeInSeconds != null) {
            long HH = timeInSeconds / 3600;
            long MM = (timeInSeconds % 3600) / 60;
            long SS = timeInSeconds % 60;
            return String.format("%02d:%02d:%02d", HH, MM, SS);
        } else return "null";

    }
}
