// interface IFormData {
//     email: string,
//     password: string,
//     name: string
// }

// interface IFormError {
//     email?: string,
//     password?: string,
//     name?: string
// }

// interface IBigFormData extends IFormData {
//     phone: number,
//     address: string
// }


// function validateForm<T extends IFormData>(form: T): IFormError {

//     const errors: IFormError = {}

//     if(!form.email.includes("@")) {
//         errors.email = "Email is invalid"
//     } else if(!form.email) {
//         errors.email = "Email is required"
//     }


//     if(form.password.length < 6) {
//         errors.password = "Password must be at least 6 characters"
//     } else if (!form.password) {
//         errors.password = "Password is required"
//     }

//     if(!form.name) {
//         errors.name = "Name is required"
//     }

//     return errors
// }

// const form: IFormData = {
//     name: "Islombek",
//     password: "",
//     email: "islombek@gmail.com"
// }

// const bigForm: IBigFormData = {
//     name: "Islombek",
//     password: "",
//     email: "islombek@gmail.com",
//     phone: 940132505,
//     address: "Tashkent"
// }

// const errors = validateForm(form)
// console.log(errors)





// // conditional type

// type IsEmailValid<T> = T extends { age: number } ? boolean : never

// type test1 = IsEmailValid<IFormData>
// type test2 = IsEmailValid<IFormData & {age : number}>

// function isEmailValid<T extends IFormData>(form: T, callback: (param: T) => void): IsEmailValid<T> {
//     callback(form)
//     return form.email.includes("@") as IsEmailValid<T>
// }

// function isEmailValid2(form: IFormData, callback: (param: IFormData) => void): boolean {
//     callback(form)
//     return form.email.includes("@")
// }

// isEmailValid(bigForm, (bigForm) => {
//     bigForm.address
// })

// isEmailValid2(bigForm, (bigForm) => {
//     bigForm.email
// })

// // generic ning asosiy farqi extends da ularni tiplari funksiya ichiga ham 
// // o'tadi va ular olgan tip bo'yicha ishlatiladi. asosiy farqi callbackda korish mumkin





// function isAgeHas<T extends IFormData>(form: T): form is T & { age: number } {
//     return "age" in form && typeof form.age === "number"
// }

// if(isAgeHas(form)) { 
//     console.log(form.age)
// } else {
//     console.log("Age don't exist")
// }
