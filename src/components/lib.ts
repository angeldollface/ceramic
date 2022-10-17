/*
CERAMIC by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Checks whether the supplied character is
// an integer. Returns a boolean depending on this. 
export function isInt(subject: string): boolean {
    let result: boolean = false;
    if (
        isNaN(parseInt(subject))
    ){
        // Do nothing.
    }
    else {
       result = true;
    }
    return result;
}

// Checks whether the supplied IMEI string
// only contains integers.
// Returns a boolean depending on this. 
export function isNumberSequence(imei: string): boolean {
    let result: boolean = true;
    let charList: Array<string> = imei.split('');
    for (let i = 0; i < charList.length; i++){
        if (isInt(charList[i]) === false){
            result = false;
        }
        else {
            // Do nothing.
        }
    }
    return result;
}

// Gets every second number starting from the left.
export function getImportantNumbers(number: String): Array<string>{
    let result = Array<string>();
    let charList: Array<string> = number.split('');
    for (let i = 0; i < charList.length; i++){
        let currIndex: number = i + 1;
        if (currIndex % 2 == 0){
           result.push(charList[i]);
        }
        else {
            // Do nothing.
        }
    }
    return result;
}

// Gets all the numbers that remain.
// Removes the check digit because this is not allowed when
// adding all the remaining numbers together.
export function getTrashNumbers(number: String): Array<string>{
    let result = Array<string>();
    let charList: Array<string> = number.split('');
    for (let i = 0; i < charList.length; i++){
        let currIndex: number = i + 1;
        if (currIndex % 2 == 0){
            // Do nothing.
        }
        else {
            result.push(charList[i]);
        }
    }
    result.pop();
    return result;
}

// Converts all the "important" numbers, doubles them, and returns them
// in an array.
export function doubleImportantNumbers(imei: string): Array<number>{
    let impNums: Array<string> = getImportantNumbers(imei);
    let result = Array<number>();
    for (let i = 0; i < impNums.length; i++){
        result.push(parseInt(impNums[i]) * 2);
    }
    return result;
}

// Adds all the remaining numbers in a lump sum.
export function addTrashNumbers(imei: string): number{
    let impNums: Array<string> = getTrashNumbers(imei);
    let result: number = 0;
    for (let i = 0; i < impNums.length; i++){
        result = result + parseInt(impNums[i]);
    }
    return result;
}

// Because this is Typescript and we can't play fast and loose with types
// we need to convert between the arrays' types. 
export function convertNumberArrayToStringArray(arr: Array<number>): Array<string> {
    let result = Array<string>();
    for (let i = 0; i < arr.length; i++){
        let num: string = arr[i].toString();
        let nums: Array<string> = num.split('');
        for (let x = 0; x < nums.length;x++) {
            result.push(nums[x]);
        }
    }
    return result;
}

// Splits all the characters in the "important" numbers and adds them all
// together in a lump sum.
export function addImportantDoubleDigits(imei: string): number {
    let result: number = 0;
    let doubles: Array<number> = doubleImportantNumbers(imei);
    let digitArr: Array<string> = convertNumberArrayToStringArray(doubles);
    for (let i = 0; i < digitArr.length; i++){
        result = result + parseInt(digitArr[i]);
    }
    return result;
}

// Gets the last item of a string array and returns it.
export function getLastItem(arr: Array<string>): string {
    let arrayLength: number = arr.length;
    let lastItemIndex: number = arrayLength -1;
    return arr[lastItemIndex];
}

// Gets the check digit of your IMEI, adds the "important" and the
// "other" numbers together, subtracts the "mod 10" from 10 of that sum, makes
// a type conversion, compares the check digit and the calculated check digit,
// and returns true or false depending on whether they are equal or not.
export function validateIMEI(imei: string): boolean {
    let imeiChars: Array<string> = imei.split('');
    let checkDigit: string = getLastItem(imeiChars);
    let result: boolean = false;
    let sum: number = addImportantDoubleDigits(imei) + addTrashNumbers(imei);
    let computedCheckDigit: number = (10 - (sum%10));
    let computedConvertedCD: string = computedCheckDigit.toString();
    if (checkDigit === computedConvertedCD && imeiChars.length === 15){
        result = true;
    }
    else {
        // Do nothing.
    }
    return result;
}

// Exports everything so
// that we can use it.
export default {
    isInt,
    getLastItem,
    validateIMEI,
    getTrashNumbers,
    addTrashNumbers,
    isNumberSequence,
    getImportantNumbers,
    doubleImportantNumbers,
    addImportantDoubleDigits,
    convertNumberArrayToStringArray,
};