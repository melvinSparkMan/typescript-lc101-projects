"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spacecraftName = "Determination";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToMercury = 155000000;
var kilometersToVenus = 170000000;
var kilometersToJupiter = 787000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
var milesToMars = (kilometersToMars * milesPerKilometer);
var hoursToMars = (milesToMars / speedMph);
var daysToMars = (hoursToMars / 24);
// Part 2: Print Days to Mars
daysToMars = Math.round(daysToMars);
// Code an output statement here (use a template literal):
// console.log("Days to Mars: ", `${daysToMars}`);
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersToMars, milesPerKilometer, speedMph) {
    daysToMars = Math.round(((kilometersToMars * milesPerKilometer) / speedMph) / 24);
    return daysToMars;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log("".concat(spacecraftName), "would take", "".concat(getDaysToLocation(kilometersToMars, milesPerKilometer, speedMph)), "days to get to Mars.");
console.log("".concat(spacecraftName), "would take", "".concat(getDaysToLocation(kilometersToTheMoon, milesPerKilometer, speedMph)), "days to get to the Moon.");
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersToLocation) {
        daysToMars = Math.round(((kilometersToLocation * this.milesPerKilometer) / this.speedMph) / 24);
        return daysToMars;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
var spaceShuttle = new Spacecraft('Atlantis', 15500);
console.log("".concat(spaceShuttle.name), "would take", "".concat(spaceShuttle.getDaysToLocation(kilometersToMars)), "days to get to Mars.");
console.log("".concat(spaceShuttle.name), "would take", "".concat(spaceShuttle.getDaysToLocation(kilometersToTheMoon)), "days to get to the Moon.");
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
spaceShuttle = new Spacecraft('Discovery', 17500);
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mercury', kilometersToMercury));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Venus', kilometersToVenus));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Jupiter', kilometersToJupiter));
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
