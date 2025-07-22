let processType: "success" | "loading" | "error" 
type ProcessType = "success" | "loading" | "error" 

function resultOfPayment(process: ProcessType): string {

    if(process == "success") {
        return "Payment is succesfully"
    }
    else if(process == "loading") {
        return "Payment is loading"
    }
    else {
        return "Payment error occurred."
    }
}

console.log(resultOfPayment("success"));

