package org.example;

import ai.timefold.solver.benchmark.api.PlannerBenchmark;
import ai.timefold.solver.benchmark.api.PlannerBenchmarkFactory;
import org.example.domain.RoutingSolution;
import org.example.domain.RoutingSolutionJsonIO;

import java.io.File;

public class BenchmarkerRunner {
    public static void main(String[] args) {
        //PlannerBenchmarkFactory benchmarkFactory = PlannerBenchmarkFactory
        //        .createFromSolverConfigXmlResource("SolverConfig.xml");

        PlannerBenchmarkFactory benchmarkFactoryFromXML = PlannerBenchmarkFactory
                .createFromXmlResource("BenchmarkConfig.xml");

        //RoutingSolution problem = RoutingSolution.generateData();

        RoutingSolutionJsonIO routingSolutionJsonIO = new RoutingSolutionJsonIO();
        // Funkcijas ar kuram tika genereti random dati.
        //routingSolutionJsonIO.write(RoutingSolution.generateData(10), new File("data/classExample10.json"));
        //routingSolutionJsonIO.write(RoutingSolution.generateData(25), new File("data/classExample25.json"));
        //routingSolutionJsonIO.write(RoutingSolution.generateData(50), new File("data/classExample50.json"));
        //routingSolutionJsonIO.write(RoutingSolution.generateData(100), new File("data/classExample100.json"));

        // Aizstaj aiz "=" zimes to plannerBenchmakrFactory tipu kuru velies lietot
        PlannerBenchmark benchmark = benchmarkFactoryFromXML.buildPlannerBenchmark();
        /*PlannerBenchmark benchmark = benchmarkFactoryFromXML.buildPlannerBenchmark(
                RoutingSolution.generateData(5),
                RoutingSolution.generateData(10),
                RoutingSolution.generateData(25),
                RoutingSolution.generateData(50),
                RoutingSolution.generateData(100)
        );*/
        benchmark.benchmarkAndShowReportInBrowser();
    }
}
