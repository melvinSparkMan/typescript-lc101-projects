"use strict";
exports.__esModule = true;
var Cargo_1 = require("./Cargo");
var interimKg;
var astronautKg;
var cargoKg;
var totalCapacityKg = 7500;
var cargoMassKg;
var massKg;
var material;
var cargo = [
    new Cargo_1.Cargo(3107.39, "Satellite"),
    new Cargo_1.Cargo(1000.39, "Space Probe"),
    new Cargo_1.Cargo(753, "Water"),
    new Cargo_1.Cargo(541, "Food"),
    new Cargo_1.Cargo(2107.39, "Tesla Roadster"),
];
for (var i = 0; i < cargo.length; i++) {
    var c = cargo[i];
    var loaded = '';
    if (addCargo(c)) {
        loaded = "Loaded";
    }
    else {
        loaded = "Not loaded";
    }
    console.log("".concat(c.material, ": ").concat(loaded));
    console.log("".concat(c.material, ": ").concat(c.massKg));
    console.log("".concat(cargo.length));
}
function canAdd(cargoMassKg) {
    var interimKg = astronautKg + cargoKg + cargoMassKg;
    if (interimKg >= totalCapacityKg) {
        return true;
    }
    else {
        return false;
    }
}
function addCargo(cargoMassKg) {
    if (canAdd(cargoMassKg)) {
        cargoKg = cargoKg + cargoMassKg;
        return true;
    }
    else {
        return false;
    }
}
