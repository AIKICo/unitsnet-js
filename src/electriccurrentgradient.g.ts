export enum ElectricCurrentGradientUnits {
    AmperesPerSecond
}

export class ElectricCurrentGradient {
    private value: number;

    public constructor(value: number, fromUnit: ElectricCurrentGradientUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get AmperesPerSecond(): number {
        return this.convertFromBase(ElectricCurrentGradientUnits.AmperesPerSecond);
    }

    public static FromAmperesPerSecond(value: number): ElectricCurrentGradient {
        return new ElectricCurrentGradient(value, ElectricCurrentGradientUnits.AmperesPerSecond);
    }

    private convertFromBase(toUnit: ElectricCurrentGradientUnits): number {

            switch (toUnit) {
                
                case ElectricCurrentGradientUnits.AmperesPerSecond:
                    return this.value;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ElectricCurrentGradientUnits): number {

                switch (fromUnit) {
                    
                case ElectricCurrentGradientUnits.AmperesPerSecond:
                    return value;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
