package org.example.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.variable.*;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.example.solver.VolumeUndeliveredListener;
// import org.example.solver.VolumeUndeliveredListener;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.List;

@PlanningEntity
@Getter @Setter @NoArgsConstructor
@JsonIdentityInfo(scope = Visit.class,
        property = "name",
        generator = ObjectIdGenerators.PropertyGenerator.class)
public class Visit {

    // Delivery is how many drugs will be given to the patient.
    // Pickup is taking samples from the patient. Urine/blood etc...
    // Stock is stocking up on new medicines and dropping off all picked up samples.
    public enum VisitType {DELIVERY, PICKUP, STOCK}
    private VisitType visitType;
    private Integer volume; // How much will the samples take space.

    private String name;
    private Integer reqSpeciality; //@PlanningVariable // Jo šo mēs mēģināsim piekārtot?
    private Integer reqPower; //@PlanningVariable // Jo šo mēs mēģināsim piekārtot?

    // This should not be here... For now its a comment because i dont know how it got here.
    //@PlanningListVariable
    //private List<Visit> visits = new ArrayList<>();

    private Location location;

    @InverseRelationShadowVariable(sourceVariableName = "visits")
    @JsonIdentityReference(alwaysAsId = true)
    private Doctor doctor;

    @NextElementShadowVariable(sourceVariableName = "visits") // Atlauj aplukot nakamo "visit"
    @JsonIdentityReference(alwaysAsId = true)
    private Visit next;

    @PreviousElementShadowVariable(sourceVariableName = "visits") // Atlauj aplukot iepriekšejo "visit"
    @JsonIdentityReference(alwaysAsId = true)
    private Visit prev;

    @JsonIgnore
    public Integer getUndelivered() {
        Integer undelivered = 0;
        if(this.getPrev() != null){
            undelivered = this.getPrev().getUndelivered();
        }
        if(this.getDoctor() == null) return 0;

        switch (this.getVisitType()){
            case DELIVERY -> {
                undelivered = undelivered - this.getVolume();
            }
            case PICKUP -> {
                // nothing
            }
            case STOCK -> {
                undelivered = this.getDoctor().getCapacity();
            }
        }
        return undelivered;
    }

    @JsonIgnore
    public Integer getPicked() {
        Integer picked = 0;
        if(this.getPrev() != null){
            picked = this.getPrev().getPicked();
        }
        if(this.getDoctor() == null) return 0;

        switch (this.getVisitType()){
            case DELIVERY -> {
                // nothing
            }
            case PICKUP -> {
                picked = picked + this.getVolume();
            }
            case STOCK -> {
                picked = 0; // Visus samples nododam slimnicai
            }
        }
        return picked;
    }

    // Relocated to Doctor because it was the only way i could access both Visit and Doctor data that i knew of.
    /*
    public Integer getPowerMiss(){ // Returns a value of by how much the doctor was lacking in power
        int powerMiss = 0;
        if (this.getDoctor() == null) return 0; // AR SO RINDU VEL NAV BIJIS TESTS!!!
        if(this.getReqPower() > this.getDoctor().getDocPower())
            powerMiss = powerMiss + this.getReqPower() - this.getDoctor().getDocPower();
        return powerMiss;
    }

    public Integer getQualificationMiss(){ // Returns a value of by how much the doctor was lacking in qualification
        int qualMiss = 0;
        if(this.getReqSpeciality() > this.getDoctor().getDocSpeciality())
            qualMiss = this.getReqSpeciality() - this.getDoctor().getDocSpeciality();
        return qualMiss;
    }
     */


    // Isti nezinu vai man so vajag, jo man nav nekas japarvada tieši. Bet es to rakstu, jo tas teorētiski meklē kļūdas?
    @ShadowVariable(variableListenerClass = VolumeUndeliveredListener.class, sourceVariableName = "doctor")
    @ShadowVariable(variableListenerClass = VolumeUndeliveredListener.class, sourceVariableName = "prev")
    private Integer volumeUndelivered = 0;

    @PiggybackShadowVariable(shadowVariableName = "volumeUndelivered")
    private Integer volumePicked = 0;

    private Integer srvTime; // Laiks kas vajadzigs lai apkalpotu notekto pacientu
    private Integer twStart; // Laika loga sākums
    private Integer twFinish; // Laika loga beigas

    @PiggybackShadowVariable(shadowVariableName = "volumeUndelivered")
    private Integer arrivalTime = null; // Ierašanās laiks

    @JsonIgnore
    public Integer getDepartureTime() {
        return this.getArrivalTime() != null ?
                Math.max(this.getArrivalTime(), this.getTwStart()) + this.getSrvTime() : // 2 varianti: Atbrauc par atru Vai atbrauc laika loga vidū
                null;
    }


    @Override
    public String toString() {
        return this.getName() + " arrT=" + RoutingSolution.formatTime(this.getArrivalTime())
                + " depT=" + RoutingSolution.formatTime(this.getDepartureTime());
    }
}
