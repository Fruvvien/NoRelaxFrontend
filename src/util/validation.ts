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