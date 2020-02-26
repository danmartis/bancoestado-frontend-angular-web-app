const ftuName : string = 'ftu-background';

function toArray(obj : any) : Array<any> {
    const array = [];
    // iterate backwards ensuring that length is an UInt32
    for (let i = obj.length >>> 0; i--;) { 
        array.push(obj[i]);
    }
    return array;
}

export const open = () => {
    toArray(document.getElementsByClassName(ftuName))
        .forEach(e => e.className = `${ftuName} open`);
}

export const close = () => {
    toArray(document.getElementsByClassName(ftuName))
        .forEach(e => e.className = `${ftuName} close`);
}

export const toggle = () => {
    toArray(document.getElementsByClassName(ftuName))
        .forEach(e =>
            e.className === `${ftuName} close`
                ? e.className = `${ftuName} open`
                : e.className = `${ftuName} close`
        );
}
