"use strict";
var Operation;
(function (Operation) {
    Operation[Operation["Add"] = 0] = "Add";
    Operation[Operation["Divide"] = 1] = "Divide";
    Operation[Operation["Multiply"] = 2] = "Multiply";
    Operation[Operation["Subtract"] = 3] = "Subtract";
})(Operation || (Operation = {}));
function cacl(num1, num2, action) {
    if (action == Operation.Add) {
        return num1 + num2;
    }
    if (action == Operation.Divide) {
        if (num1 == 0 && num2 != 0) {
            return 0;
        }
        if (num2 == 0) {
            return `Devide ${num1} to ${num2} is not possible`;
        }
        return num1 / num2;
    }
    if (action == Operation.Subtract) {
        return num1 - num2;
    }
    else {
        return num1 * num2;
    }
}
const result1 = cacl(12, 23, Operation.Add);
const result2 = cacl(23, 12, Operation.Divide);
const result3 = cacl(13, 203, Operation.Multiply);
const result4 = cacl(122, 7, Operation.Subtract);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
