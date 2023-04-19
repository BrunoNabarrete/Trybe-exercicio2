const unitsD = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function convertD(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = unitsD.indexOf(fromUnit);
    const toIndex = unitsD.indexOf(toUnit);
    const exponent = toIndex - fromIndex;

    return value * Math.pow(10, exponent);
}