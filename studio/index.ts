// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html

// TODO: 
// * Code the Astronaut, Cargo, and Rocket classes in new files.
// * Import the three classes into this file.

import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Rocket } from './Rocket';
import { Payload } from './Payload';

let falcon9: Rocket = new Rocket('Falcon 9', 7500);

let astronauts: Astronaut[] = [
   new Astronaut(75, 'Mae'),
   new Astronaut(81, 'Sally'),
   new Astronaut(99, 'Charles'),
   new Astronaut(54, 'Sunita')
];

for (let i = 0; i < astronauts.length; i++) {
   let astronaut = astronauts[i];
   let status = '';
   if (falcon9.addAstronaut(astronaut)) {
      status = "On board";
   } else {
      status = "Not on board";
   }
   console.log(`${astronaut.name}: ${status}`);
   // console.log(`${astronaut.name}: ${astronaut.massKg}`);
}

let cargo: Cargo[] = [
   new Cargo(3107.39, "Satellite"),
   new Cargo(1000.39, "Space Probe"),
   new Cargo(753, "Water"),
   new Cargo(541, "Food"),
   new Cargo(2107.39, "Tesla Roadster")

];

let finalPayload: Payload = new Payload(falcon9.payloadKg);

for (let i = 0; i < cargo.length; i++) {
   let c = cargo[i];
   let loaded = '';
   falcon9.currentMassKg();  
   if (falcon9.addCargo(c)) {
      loaded = "Loaded"
   } else {
      loaded = "Not loaded"
   }

   console.log(`${c.material}: ${c.massKg} Kg ${loaded}`);
   // console.log(`${c.material}: ${c.massKg}`);
   // console.log(`${falcon9.currentCapacityKg} ${falcon9.astronautKg} ${falcon9.cargoKg} ${c.massKg}`);
}


// finalPayload.massKg;

console.log(`Final cargo and astronaut mass: ${falcon9.currentMassKg()} kg.`);
// console.log("canAdd ",falcon9.canAdd(cargo[4]), "addCargo ", falcon9.addCargo(cargo[4]));
// falcon9.debugAndInspect();