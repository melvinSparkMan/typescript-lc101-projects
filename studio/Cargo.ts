export class Cargo {
   // properties and methods
   massKg: number;
   material: string;
   payloadKg: number;

   constructor(massKg: number, material: string) {
      this.material = material;
      this.massKg = massKg;
      this.payloadKg = this.massKg;
   }
 
}