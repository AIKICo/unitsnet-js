"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoefficientOfThermalExpansionUnits;
(function (CoefficientOfThermalExpansionUnits) {
    CoefficientOfThermalExpansionUnits[CoefficientOfThermalExpansionUnits["InverseKelvin"] = 0] = "InverseKelvin";
    CoefficientOfThermalExpansionUnits[CoefficientOfThermalExpansionUnits["InverseDegreeCelsius"] = 1] = "InverseDegreeCelsius";
    CoefficientOfThermalExpansionUnits[CoefficientOfThermalExpansionUnits["InverseDegreeFahrenheit"] = 2] = "InverseDegreeFahrenheit";
})(CoefficientOfThermalExpansionUnits = exports.CoefficientOfThermalExpansionUnits || (exports.CoefficientOfThermalExpansionUnits = {}));
class CoefficientOfThermalExpansion {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get InverseKelvin() {
        return this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseKelvin);
    }
    get InverseDegreeCelsius() {
        return this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseDegreeCelsius);
    }
    get InverseDegreeFahrenheit() {
        return this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit);
    }
    static FromInverseKelvin(value) {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.InverseKelvin);
    }
    static FromInverseDegreeCelsius(value) {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.InverseDegreeCelsius);
    }
    static FromInverseDegreeFahrenheit(value) {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case CoefficientOfThermalExpansionUnits.InverseKelvin:
                return this.value;
            case CoefficientOfThermalExpansionUnits.InverseDegreeCelsius:
                return this.value;
            case CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit:
                return this.value * 9 / 5;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case CoefficientOfThermalExpansionUnits.InverseKelvin:
                return value;
            case CoefficientOfThermalExpansionUnits.InverseDegreeCelsius:
                return value;
            case CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit:
                return value * 5 / 9;
            default:
                break;
        }
        return NaN;
    }
}
exports.CoefficientOfThermalExpansion = CoefficientOfThermalExpansion;
//# sourceMappingURL=coefficientofthermalexpansion.g.js.map