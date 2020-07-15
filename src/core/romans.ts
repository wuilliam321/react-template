const conversions: [number, string][] = [
    [5000, '(V)'],
    [4000, 'M(V)'],
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
];

function validateNumber (number: number) {
    const [maxConvertion] = conversions;
    const [maxArabic] = maxConvertion;
    if (number > maxArabic) {
        throw new Error(`arabic should be <= ${maxArabic}`);
    }
}


function findBestConversion (number: number) {
    return conversions.find(([arabic]) => arabic <= number);
}

export function convert (number: number) {
    validateNumber(number);
    const conversion = findBestConversion(number);
    if (!conversion || number <= 0) {
        return '';
    }

    const arabic = conversion[0];
    let roman = conversion[1];
    roman += convert(number - arabic);
    return roman;
}
