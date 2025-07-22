enum PaymentProvider {
    Uzum,
    Click,
    Payme
}

enum PaymentProcess {
    Pending,
    Approved,
    Rejected
}

class Student {
    name: string
    surname: string
    age: number
    univer: string

    constructor(name: string, surname: string, age: number, univer: string) {
        this.age = age
        this.name = name
        this.surname = surname
        this.univer = univer
    }
}

class Payment {
    student: Student
    paymentProcess: PaymentProcess
    paymentProvider: PaymentProvider

    constructor(
        student: Student, 
        paymentProcess: PaymentProcess, 
        paymentProvider: PaymentProvider
    ) {
        this.student = student
        this.paymentProcess = paymentProcess
        this.paymentProvider = paymentProvider
    }

    paymentApprove() {
        if(this.paymentProcess == PaymentProcess.Approved) {
            throw new Error("Payment already approved");
        }
        if(this.paymentProcess == PaymentProcess.Rejected) {
            throw new Error("Payment rejected and cann't approve it")
        }
        this.paymentProcess = PaymentProcess.Approved
    }
    paymentReject() {
        if(this.paymentProcess == PaymentProcess.Approved) {
            throw new Error("Payment already approved and cann't reject it");
        }
        if(this.paymentProcess == PaymentProcess.Rejected) {
            throw new Error("Payment already rejected");
        }
        this.paymentProcess = PaymentProcess.Rejected
    }
}

class PaymentsData {
    payments: Payment[]
    constructor(payments: Payment[]) {
        this.payments = payments
    }

    getRejectedStudents() {
        const rejectedStudents = this.payments.filter(payment => payment.paymentProcess == PaymentProcess.Rejected).map((payment, index) => `${index+1}. ${payment.student.name} ${payment.student.surname}`).join("\n")
        console.log("There are students, payments are rejected:\n", rejectedStudents)
    }

    getPendingStudents() {
        const pendingStudents = this.payments.filter(payment => payment.paymentProcess == PaymentProcess.Pending).map((payment, index) => `${index+1}. ${payment.student.name} ${payment.student.surname}`).join("\n")
        console.log("There are students, payments are pending:\n", pendingStudents)
    }

    getApprovedStudents() {
        const approvedStudents = this.payments.filter(payment => payment.paymentProcess == PaymentProcess.Approved).map((payment, index) => `${index+1}. ${payment.student.name} ${payment.student.surname}`).join("\n")
        console.log("There are students, payments are approved:\n", approvedStudents)
    }

    getStudentsWithProvider(provider: PaymentProvider) {
        const students = this.payments.filter(payment => payment.paymentProvider == provider).map((payment, index) => `${index+1}. ${payment.student.name} ${payment.student.surname}`).join("\n")
        console.log(`There are students which payment provider is ${provider}:\n`, students);
        
    }
}


const student1 = new Student("Islombek", "Abdurazzoqov", 22, "TATU")
const student2 = new Student("Kamron", "Safarov", 22, "TATU")
const student3 = new Student("Bekzod", "Joraboyev", 32, "TIMU")
const student4 = new Student("Sarvar", "Ismailov", 27, "GulDU")

const payment1 = new Payment(student1, PaymentProcess.Pending, PaymentProvider.Payme)
const payment2 = new Payment(student2, PaymentProcess.Approved, PaymentProvider.Uzum)
const payment3 = new Payment(student3, PaymentProcess.Rejected, PaymentProvider.Click)
const payment4 = new Payment(student4, PaymentProcess.Pending, PaymentProvider.Uzum)

const paymentsData: PaymentsData = new PaymentsData([payment1, payment2, payment3, payment4])

paymentsData.getRejectedStudents()
paymentsData.getStudentsWithProvider(PaymentProvider.Uzum)






