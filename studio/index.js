"use strict";
// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html
exports.__esModule = true;
// TODO: 
// * Code the Astronaut, Cargo, and Rocket classes in new files.
// * Import the three classes into this file.
var Astronaut_1 = require("./Astronaut");
var Cargo_1 = require("./Cargo");
var Rocket_1 = require("./Rocket");
var Payload_1 = require("./Payload");
var falcon9 = new Rocket_1.Rocket('Falcon 9', 7500);
var astronauts = [
    new Astronaut_1.Astronaut(75, 'Mae'),
    new Astronaut_1.Astronaut(81, 'Sally'),
    new Astronaut_1.Astronaut(99, 'Charles'),
    new Astronaut_1.Astronaut(54, 'Sunita')
];
for (var i = 0; i < astronauts.length; i++) {
    var astronaut = astronauts[i];
    var status_1 = '';
    if (falcon9.addAstronaut(astronaut)) {
        status_1 = "On board";
    }
    else {
        status_1 = "Not on board";
    }
    console.log("".concat(astronaut.name, ": ").concat(status_1));
    // console.log(`${astronaut.name}: ${astronaut.massKg}`);
}
var cargo = [
    new Cargo_1.Cargo(3107.39, "Satellite"),
    new Cargo_1.Cargo(1000.39, "Space Probe"),
    new Cargo_1.Cargo(753, "Water"),
    new Cargo_1.Cargo(541, "Food"),
    new Cargo_1.Cargo(2107.39, "Tesla Roadster")
];
var finalPayload = new Payload_1.Payload(falcon9.payloadKg);
for (var i = 0; i < cargo.length; i++) {
    var c = cargo[i];
    var loaded = '';
    falcon9.currentMassKg();
    if (falcon9.addCargo(c)) {
        loaded = "Loaded";
    }
    else {
        loaded = "Not loaded";
    }
    console.log("".concat(c.material, ": ").concat(c.massKg, " Kg ").concat(loaded));
    // console.log(`${c.material}: ${c.massKg}`);
    // console.log(`${falcon9.currentCapacityKg} ${falcon9.astronautKg} ${falcon9.cargoKg} ${c.massKg}`);
}
// finalPayload.massKg;
console.log("Final cargo and astronaut mass: ".concat(falcon9.currentMassKg(), " kg."));
// console.log("canAdd ",falcon9.canAdd(cargo[4]), "addCargo ", falcon9.addCargo(cargo[4]));
// falcon9.debugAndInspect();
