// function type yani funksiyani qaytaruvchi qiymati

function addTwoNumber(num1: number, num2: number): number {
    return num1 + num2
}

const checkAdult = (age: number): boolean => {
    return age >= 18
}

console.log(checkAdult(15))
console.log(addTwoNumber(22, 19))
