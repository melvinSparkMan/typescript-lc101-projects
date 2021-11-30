"use strict";
exports.__esModule = true;
exports.Cargo = void 0;
var Cargo = /** @class */ (function () {
    function Cargo(massKg, material) {
        this.material = material;
        this.massKg = massKg;
        this.payloadKg = this.massKg;
    }
    return Cargo;
}());
exports.Cargo = Cargo;
