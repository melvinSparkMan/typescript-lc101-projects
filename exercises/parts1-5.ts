// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

import { SpaceLocation } from './SpaceLocation';

// Part 1: Declare (5) Variables With Type


let spacecraftName:	        string = "Determination";
let speedMph:	            number = 17500;
let kilometersToMars:	    number = 225000000;
let kilometersToMercury:    number = 155000000;
let kilometersToVenus:      number = 170000000;
let kilometersToJupiter:    number = 787000000;
let kilometersToTheMoon:	number = 384400;
let milesPerKilometer:	    number = 0.621;
let milesToMars:            number = (kilometersToMars * milesPerKilometer);
let hoursToMars:            number = (milesToMars / speedMph);
let daysToMars:             number = (hoursToMars / 24);

// Part 2: Print Days to Mars


daysToMars = Math.round(daysToMars);

// Code an output statement here (use a template literal):

// console.log("Days to Mars: ", `${daysToMars}`);

// Part 3: Create a Function ("getDaysToLocation")

function getDaysToLocation(kilometersToMars: number, milesPerKilometer: number, speedMph: number): number {
    daysToMars = Math.round(((kilometersToMars * milesPerKilometer)/speedMph)/24);
    return daysToMars;
 }

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.

console.log(`${spacecraftName}`,"would take", `${getDaysToLocation(kilometersToMars, milesPerKilometer, speedMph)}`, "days to get to Mars.");
console.log(`${spacecraftName}`,"would take", `${getDaysToLocation(kilometersToTheMoon, milesPerKilometer, speedMph)}`, "days to get to the Moon.");


// Part 4: Create a Spacecraft Class

class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
        constructor(name: string, speedMph: number) {
            this.name =  name;
            this.speedMph = speedMph;
        }

        getDaysToLocation(kilometersToLocation: number): number {
            daysToMars = Math.round(((kilometersToLocation * this.milesPerKilometer)/this.speedMph)/24);
            return daysToMars;
         }

        printDaysToLocation(location: SpaceLocation) {
            console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
        }
        
}

let spaceShuttle = new Spacecraft('Atlantis', 15500);

console.log(`${spaceShuttle.name}`, "would take", `${spaceShuttle.getDaysToLocation(kilometersToMars)}`, "days to get to Mars.");
console.log(`${spaceShuttle.name}`, "would take", `${spaceShuttle.getDaysToLocation(kilometersToTheMoon)}`, "days to get to the Moon.");

 


// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.

spaceShuttle = new Spacecraft('Discovery', 17500);

spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('Mercury', kilometersToMercury));
spaceShuttle.printDaysToLocation(new SpaceLocation('Venus', kilometersToVenus));
spaceShuttle.printDaysToLocation(new SpaceLocation('Jupiter', kilometersToJupiter));

// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
