package org.example;


import ai.timefold.solver.core.api.score.Score;
import ai.timefold.solver.core.api.score.ScoreExplanation;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.solver.SolutionManager;
import ai.timefold.solver.core.api.solver.Solver;
import ai.timefold.solver.core.api.solver.SolverFactory;
import ai.timefold.solver.core.config.solver.EnvironmentMode;
import ai.timefold.solver.core.config.solver.SolverConfig;
import ai.timefold.solver.core.config.solver.termination.TerminationConfig;
import org.example.domain.Doctor;
import org.example.domain.Location;
import org.example.domain.RoutingSolution;
import org.example.domain.Visit;
import org.example.solver.ScoreCalculator;
import org.example.solver.StreamCalculator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.print.Doc;
import java.util.List;

public class Main {
    // Logger allows us to look over info on our program as it executes
    private static final Logger LOGGER = LoggerFactory.getLogger(Main.class);
    public static void main(String[] args) {
        System.out.print("Hello and welcome! But did you steal my cat again? :<" + "\n");
        LOGGER.info("Hellow from logger!");
        LOGGER.debug(("Debugg logger"));
        RoutingSolution problem = RoutingSolution.generateData();
        // LOGGER.info(problem.toString());
        problem.print();

        SolverFactory<RoutingSolution> solverFactoryFromXML = SolverFactory
                .createFromXmlResource("SolverConfig.xml");

        // Optimizatora konfigurācija
        SolverFactory<RoutingSolution> solverFactory = SolverFactory.create(new SolverConfig()
                .withSolutionClass(RoutingSolution.class)
                .withEntityClasses(Doctor.class, Visit.class)
                //.withEasyScoreCalculatorClass(ScoreCalculator.class)
                .withConstraintProviderClass(StreamCalculator.class)
                .withTerminationConfig(new TerminationConfig().withSecondsSpentLimit(10L))
                .withEnvironmentMode(EnvironmentMode.FULL_ASSERT) // Pazino ja ir sabojajušās izmaksas
        );

        // Optimizatora palaišana
        Solver<RoutingSolution> solver = solverFactoryFromXML.buildSolver();
        RoutingSolution solution = solver.solve(problem);

        SolutionManager<RoutingSolution, HardSoftScore> solutionManager = SolutionManager.create(solverFactory);
        ScoreExplanation<RoutingSolution, HardSoftScore> scoreExplanation = solutionManager.explain(solution);
        LOGGER.info(scoreExplanation.getSummary());

        solution.print();
    }
}


// These tips are kind of useful for now.
//TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
// to see how IntelliJ IDEA suggests fixing it.

// TIP Press <shortcut actionId="Debug"/> to start debugging your code. We have set one <icon src="AllIcons.Debugger.Db_set_breakpoint"/> breakpoint
// for you, but you can always add more by pressing <shortcut actionId="ToggleLineBreakpoint"/>.
