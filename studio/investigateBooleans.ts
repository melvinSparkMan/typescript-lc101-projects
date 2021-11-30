import { Cargo } from './Cargo';

let interimKg: number
let astronautKg: number
let cargoKg: number
let totalCapacityKg: number = 7500;
let cargoMassKg: number
let massKg: number
let material: number

let cargo: Cargo[] = [
    new Cargo (3107.39, "Satellite"),
    new Cargo (1000.39, "Space Probe"),
    new Cargo (753, "Water"), 
    new Cargo (541, "Food"), 
    new Cargo (2107.39, "Tesla Roadster"),
        ]

 
 for (let i = 0; i < cargo.length; i++) {
    let c = cargo[i];
    let loaded = '';
    if (addCargo(c)) {
       loaded = "Loaded"
    } else {
       loaded = "Not loaded"
    }
    console.log(`${c.material}: ${loaded}`);
    console.log(`${c.material}: ${c.massKg}`);
    console.log(`${cargo.length}`);
 }
 function canAdd(cargoMassKg): boolean {
 
    let interimKg: number = astronautKg + cargoKg + cargoMassKg;
    if (interimKg >= totalCapacityKg) {
        return true;
    } else {
        return false;
    }
}
function addCargo(cargoMassKg): boolean {
   if (canAdd(cargoMassKg)) {
        cargoKg = cargoKg + cargoMassKg;
            return true;
   } else {
            return false;
   }
}
