package org.example.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeProvider;
import ai.timefold.solver.core.api.domain.variable.PlanningListVariable;
import ai.timefold.solver.core.api.domain.variable.PlanningVariable;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@PlanningEntity
@Getter @Setter @NoArgsConstructor
@JsonIdentityInfo(scope = Doctor.class,
        property = "regNrAuto",
        generator = ObjectIdGenerators.PropertyGenerator.class)
public class Doctor {

    private String regNrAuto;
    private Integer docSpeciality; //@PlanningVariable // Jo šo mēs mēģināsim piekārtot?
    private Integer docPower; //@PlanningVariable // Jo šo mēs mēģināsim piekārtot?

    private Integer capacity; // How much medicine the doctor has.

    @PlanningListVariable
    @JsonIdentityReference(alwaysAsId = true)
    private List<Visit> visits = new ArrayList<>();

    private Location depot; // Mašinas sobrīdējā lokācija?

    private Integer twStart; // Laika logs kad pieejams auto/Ārsts - Sākums
    private Integer twFinish; // Laika logs kad pieejams auto/Ārsts - Beigas

    private Integer srvSTime; // Laiks kas vajadzigs lai sagatavotu ārsts auto dienas sakuma
    private Integer srvFTime; // Laiks kas vajadzigs lai sagatavotu ārsts atuo dienas beigas

    private Integer maxWorkTime; // Ārsta darba laika maksimums

    private Double costWorkTime; // Cik dārgi maksā šī arsta laiks
    private Double costDistance; // Cik dārgi ir braukt ar so mašīnu
    private Double costUsage; // Iesaistes cena / Apkopes cena

    @JsonIgnore
    public Double getTotalDistance(){
        double totalDistance = 0.0;
        Location prevLoc = this.getDepot();
        for(Visit visit: this.getVisits()) {
            totalDistance = totalDistance +
                    prevLoc.distanceTo(visit.getLocation());
            prevLoc = visit.getLocation();
        }
        // Atpakal uz slimnicu braucamais attalums
        totalDistance = totalDistance +
                prevLoc.distanceTo(this.getDepot());
        return totalDistance;
    }

    @JsonIgnore
    public Boolean isGoodsConstraintsBroken(){
        Integer undelivered = 0, picked = 0;
        for(Visit visit: this.getVisits()) {
            switch (visit.getVisitType()) {
                case DELIVERY -> {
                    undelivered = undelivered - visit.getVolume();
                }
                case PICKUP -> {
                    picked = picked + visit.getVolume();
                }
                case STOCK -> {
                    undelivered = this.getCapacity();
                    picked = 0;
                }
                default -> throw new IllegalStateException("Unexpected value: " + visit.getVisitType());
            }
            if(undelivered + picked > this.getCapacity() || undelivered < 0) return true;
        }
        return (picked > 0);
    }

    @JsonIgnore
    public Boolean docQualification(){ // This used to be a Integer function. It was made into a Boolean because of how the professor was doing his car package checks.
        int FailedPower = 0;
        for(Visit visit: this.getVisits()){
            if(this.getDocPower() < visit.getReqPower()){
                FailedPower = FailedPower + visit.getReqPower() - this.getDocPower();
            }
            if(this.getDocSpeciality() < visit.getReqSpeciality()) {
                FailedPower = FailedPower + visit.getReqSpeciality() - this.getDocSpeciality();
            }
        }
        return (FailedPower > 0); // This used to return the FailedPower
    }

    @JsonIgnore
    public Integer getPowerMiss(){ // Returns a value of by how much the doctor was lacking in power
        int powerMiss = 0;
        for(Visit visit: this.getVisits()) {
            if (visit.getReqPower() > this.getDocPower())
                powerMiss = powerMiss + visit.getReqPower() - this.getDocPower();
        }
        return powerMiss;
    }

    @JsonIgnore
    public Integer getQualificationMiss(){ // Returns a value of by how much the doctor was lacking in qualification
        int qualMiss = 0;
        for(Visit visit: this.getVisits()) {
            if (visit.getReqSpeciality() > this.getDocSpeciality())
                qualMiss = visit.getReqSpeciality() - this.getDocSpeciality();
        }
        return qualMiss;
    }

    @Override
    public String toString() {
        return this.getRegNrAuto();
    }
}
