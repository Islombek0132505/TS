enum Operation {
    Add,
    Divide,
    Multiply,
    Subtract
}

function cacl(num1: number, num2: number, action: Operation): number | string {

    if(action == Operation.Add) {
        return num1 + num2
    }

    if(action == Operation.Divide) {
        if(num1 == 0 && num2 != 0) {
            return 0
        }
        if (num2 == 0) {
            return `Devide ${num1} to ${num2} is not possible`
        }
        return num1 / num2
    }

    if(action == Operation.Subtract) {
        return num1 - num2
    }

    else {
        return num1 * num2
    }
}

const result1 = cacl(12, 23, Operation.Add)
const result2 = cacl(23, 12, Operation.Divide)
const result3 = cacl(13, 203, Operation.Multiply)
const result4 = cacl(122, 7, Operation.Subtract)

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);


