"use strict";
let processType;
function resultOfPayment(process) {
    if (process == "success") {
        return "Payment is succesfully";
    }
    else if (process == "loading") {
        return "Payment is loading";
    }
    else {
        return "Payment error occurred.";
    }
}
console.log(resultOfPayment("success"));
