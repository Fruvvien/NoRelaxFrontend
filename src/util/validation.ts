export function isEmail(value: string){
    return value.includes("@")
}

export function isNotEmpty(value: string){
    return value.trim() !== "";
}

export function hasMinLength(value:string, minLength: number){
    return value.length >= minLength;
}


export function allIsNotEmpty(...values: string[]){
    return values.every(isNotEmpty);
}

export function notValidPhoneNumber(value: string): boolean{
     const trimmedValue = value.trim();
     const isNumeric = /^\d$/.test(trimmedValue);
     const isValidLength = trimmedValue.length >= 10 && trimmedValue.length <= 15;
     return !(isNumeric && isValidLength);
}