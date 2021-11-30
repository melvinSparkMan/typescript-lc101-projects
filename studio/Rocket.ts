import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket {
   // properties and methods
   name: string;
   totalCapacityKg: number;
   cargoItems: string[] = [];
   astronautKg: number;
   cargoKg: number;
   currentCapacityKg: number;
   interimKg: number;
   payloadKg: number;
   
   

   constructor(name: string, totalCapacityKg: number) {
      this.name = name;
      this.totalCapacityKg = totalCapacityKg;
      this.cargoItems = [];
      this.astronautKg = 0;
      this.cargoKg = 0;
      this.currentCapacityKg;
      this.interimKg = 0;
      this.payloadKg = this.payloadKg;
      
      
   }
   sumMass( item: Payload[] = []): number {
       let index: number;
        let massKg: number = 0;
       for (index = 0; index < item.length; index++) {
           massKg =+ item[index];
       }
       return massKg;
   }
   currentMassKg( ): number {
        this.currentCapacityKg = this.astronautKg + this.cargoKg;
            return this.currentCapacityKg;
   }
   canAdd(cargo: Cargo): boolean {
   
        this.interimKg = this.astronautKg + this.cargoKg + cargo.massKg;
        if (this.currentCapacityKg > this.totalCapacityKg) {
            return false;
        } 
        else
        {
            return true;
        }
   }
   addCargo(cargo: Cargo): boolean {
       if (this.currentCapacityKg + cargo.massKg < this.totalCapacityKg === true) {
            this.cargoKg = this.cargoKg + cargo.massKg;
                return true;
       } else {
                return false;
       }
   }
   addAstronaut(astronaut: Astronaut): boolean {
       if (this.canAdd ) {
           this.astronautKg = this.astronautKg + astronaut.massKg;
                return true;
       } else {
                return false;
       }
   }
   debugAndInspect(): string {
       console.log("\n        astronautKg: ", this.astronautKg);

       console.log("            payloadKg: ", this.payloadKg);       
       console.log("            cargoKg: ", this.cargoKg);
       console.log("      totalCapacityKg: ", this.totalCapacityKg);
       console.log("      currentMassKg: ", this.currentMassKg());
       console.log("      currentCapacityKg: ", this.currentCapacityKg);

       return "End of Debug";
   }
}