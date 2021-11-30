"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronautKg = 0;
        this.cargoKg = 0;
        this.currentCapacityKg;
        this.interimKg = 0;
        this.payloadKg = this.payloadKg;
    }
    Rocket.prototype.sumMass = function (item) {
        if (item === void 0) { item = []; }
        var index;
        var massKg = 0;
        for (index = 0; index < item.length; index++) {
            massKg = +item[index];
        }
        return massKg;
    };
    Rocket.prototype.currentMassKg = function () {
        this.currentCapacityKg = this.astronautKg + this.cargoKg;
        return this.currentCapacityKg;
    };
    Rocket.prototype.canAdd = function (cargo) {
        this.interimKg = this.astronautKg + this.cargoKg + cargo.massKg;
        if (this.currentCapacityKg > this.totalCapacityKg) {
            return false;
        }
        else {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.currentCapacityKg + cargo.massKg < this.totalCapacityKg === true) {
            this.cargoKg = this.cargoKg + cargo.massKg;
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd) {
            this.astronautKg = this.astronautKg + astronaut.massKg;
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.debugAndInspect = function () {
        console.log("\n        astronautKg: ", this.astronautKg);
        console.log("            payloadKg: ", this.payloadKg);
        console.log("            cargoKg: ", this.cargoKg);
        console.log("      totalCapacityKg: ", this.totalCapacityKg);
        console.log("      currentMassKg: ", this.currentMassKg());
        console.log("      currentCapacityKg: ", this.currentCapacityKg);
        return "End of Debug";
    };
    return Rocket;
}());
exports.Rocket = Rocket;
