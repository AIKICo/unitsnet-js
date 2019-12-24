"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AreaUnits;
(function (AreaUnits) {
    AreaUnits[AreaUnits["SquareKilometers"] = 0] = "SquareKilometers";
    AreaUnits[AreaUnits["SquareMeters"] = 1] = "SquareMeters";
    AreaUnits[AreaUnits["SquareDecimeters"] = 2] = "SquareDecimeters";
    AreaUnits[AreaUnits["SquareCentimeters"] = 3] = "SquareCentimeters";
    AreaUnits[AreaUnits["SquareMillimeters"] = 4] = "SquareMillimeters";
    AreaUnits[AreaUnits["SquareMicrometers"] = 5] = "SquareMicrometers";
    AreaUnits[AreaUnits["SquareMiles"] = 6] = "SquareMiles";
    AreaUnits[AreaUnits["SquareYards"] = 7] = "SquareYards";
    AreaUnits[AreaUnits["SquareFeet"] = 8] = "SquareFeet";
    AreaUnits[AreaUnits["UsSurveySquareFeet"] = 9] = "UsSurveySquareFeet";
    AreaUnits[AreaUnits["SquareInches"] = 10] = "SquareInches";
    AreaUnits[AreaUnits["Acres"] = 11] = "Acres";
    AreaUnits[AreaUnits["Hectares"] = 12] = "Hectares";
    AreaUnits[AreaUnits["SquareNauticalMiles"] = 13] = "SquareNauticalMiles";
})(AreaUnits = exports.AreaUnits || (exports.AreaUnits = {}));
class Area {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get SquareKilometers() {
        return this.convertFromBase(AreaUnits.SquareKilometers);
    }
    get SquareMeters() {
        return this.convertFromBase(AreaUnits.SquareMeters);
    }
    get SquareDecimeters() {
        return this.convertFromBase(AreaUnits.SquareDecimeters);
    }
    get SquareCentimeters() {
        return this.convertFromBase(AreaUnits.SquareCentimeters);
    }
    get SquareMillimeters() {
        return this.convertFromBase(AreaUnits.SquareMillimeters);
    }
    get SquareMicrometers() {
        return this.convertFromBase(AreaUnits.SquareMicrometers);
    }
    get SquareMiles() {
        return this.convertFromBase(AreaUnits.SquareMiles);
    }
    get SquareYards() {
        return this.convertFromBase(AreaUnits.SquareYards);
    }
    get SquareFeet() {
        return this.convertFromBase(AreaUnits.SquareFeet);
    }
    get UsSurveySquareFeet() {
        return this.convertFromBase(AreaUnits.UsSurveySquareFeet);
    }
    get SquareInches() {
        return this.convertFromBase(AreaUnits.SquareInches);
    }
    get Acres() {
        return this.convertFromBase(AreaUnits.Acres);
    }
    get Hectares() {
        return this.convertFromBase(AreaUnits.Hectares);
    }
    get SquareNauticalMiles() {
        return this.convertFromBase(AreaUnits.SquareNauticalMiles);
    }
    static FromSquareKilometers(value) {
        return new Area(value, AreaUnits.SquareKilometers);
    }
    static FromSquareMeters(value) {
        return new Area(value, AreaUnits.SquareMeters);
    }
    static FromSquareDecimeters(value) {
        return new Area(value, AreaUnits.SquareDecimeters);
    }
    static FromSquareCentimeters(value) {
        return new Area(value, AreaUnits.SquareCentimeters);
    }
    static FromSquareMillimeters(value) {
        return new Area(value, AreaUnits.SquareMillimeters);
    }
    static FromSquareMicrometers(value) {
        return new Area(value, AreaUnits.SquareMicrometers);
    }
    static FromSquareMiles(value) {
        return new Area(value, AreaUnits.SquareMiles);
    }
    static FromSquareYards(value) {
        return new Area(value, AreaUnits.SquareYards);
    }
    static FromSquareFeet(value) {
        return new Area(value, AreaUnits.SquareFeet);
    }
    static FromUsSurveySquareFeet(value) {
        return new Area(value, AreaUnits.UsSurveySquareFeet);
    }
    static FromSquareInches(value) {
        return new Area(value, AreaUnits.SquareInches);
    }
    static FromAcres(value) {
        return new Area(value, AreaUnits.Acres);
    }
    static FromHectares(value) {
        return new Area(value, AreaUnits.Hectares);
    }
    static FromSquareNauticalMiles(value) {
        return new Area(value, AreaUnits.SquareNauticalMiles);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case AreaUnits.SquareKilometers:
                return this.value / 1e6;
            case AreaUnits.SquareMeters:
                return this.value;
            case AreaUnits.SquareDecimeters:
                return this.value / 1e-2;
            case AreaUnits.SquareCentimeters:
                return this.value / 1e-4;
            case AreaUnits.SquareMillimeters:
                return this.value / 1e-6;
            case AreaUnits.SquareMicrometers:
                return this.value / 1e-12;
            case AreaUnits.SquareMiles:
                return this.value / 2.59e6;
            case AreaUnits.SquareYards:
                return this.value / 0.836127;
            case AreaUnits.SquareFeet:
                return this.value / 0.092903;
            case AreaUnits.UsSurveySquareFeet:
                return this.value / 0.09290341161;
            case AreaUnits.SquareInches:
                return this.value / 0.00064516;
            case AreaUnits.Acres:
                return this.value / 4046.85642;
            case AreaUnits.Hectares:
                return this.value / 1e4;
            case AreaUnits.SquareNauticalMiles:
                return this.value / 3429904;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case AreaUnits.SquareKilometers:
                return value * 1e6;
            case AreaUnits.SquareMeters:
                return value;
            case AreaUnits.SquareDecimeters:
                return value * 1e-2;
            case AreaUnits.SquareCentimeters:
                return value * 1e-4;
            case AreaUnits.SquareMillimeters:
                return value * 1e-6;
            case AreaUnits.SquareMicrometers:
                return value * 1e-12;
            case AreaUnits.SquareMiles:
                return value * 2.59e6;
            case AreaUnits.SquareYards:
                return value * 0.836127;
            case AreaUnits.SquareFeet:
                return value * 0.092903;
            case AreaUnits.UsSurveySquareFeet:
                return value * 0.09290341161;
            case AreaUnits.SquareInches:
                return value * 0.00064516;
            case AreaUnits.Acres:
                return value * 4046.85642;
            case AreaUnits.Hectares:
                return value * 1e4;
            case AreaUnits.SquareNauticalMiles:
                return value * 3429904;
            default:
                break;
        }
        return NaN;
    }
}
exports.Area = Area;
//# sourceMappingURL=area.g.js.map