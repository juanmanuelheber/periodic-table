export const roundOneDecimal = (string) => {
    const value = string.length===1 ? string[0] : string.split('(')[0]
    return parseFloat(value).toFixed(1)
}

export const capitalizeString = (string) => {
    const aux = string.split('')
    aux.forEach((letter,index)=>{
        if (letter===letter.toUpperCase()){
            aux[index] = ` ${letter}`
        }
    })
    return aux.join('')
}