// Implements

// interface ICourse {
//     id: number
//     courseName: string
//     students: number
//     reating: number
//     price: number

//     changePrice(newPrice: number): void
//     addStudent(): void
// }

// class Course implements ICourse {
//     id: number
//     courseName: string
//     students: number
//     reating: number
//     price: number

//     constructor(id: number, courseName: string, students: number, reating: number, price: number) {
//         this.courseName = courseName
//         this.id = id
//         this.students = students
//         this.reating = reating
//         this.price = price
//     }

//     addStudent(): void {
//         this.students += 1
//     }

//     changePrice(newPrice: number): void {
//         this.price = newPrice
//     }

//     makeFree(): void {
//         this.price = 0
//     }

//     coursePrice(): void {
//         if(this.price == 0) {
//             console.log("This course is free!!!")
//             return
//         }
//         console.log(`Course price: ${this.price}$`)
//     }

//     courseReating(): void {
//         console.log(`Course reating: ${this.reating}/10`)
//     }

//     courseStudents(): void {
//         console.log(`Learning students count: ${this.students}`)
//     }
// }

// const phyton = new Course(1, "Phyton Backend", 20, 7.8, 129)


// phyton.courseStudents()
// phyton.addStudent()
// phyton.courseStudents()

// phyton.coursePrice()
// phyton.changePrice(79)
// phyton.coursePrice()

// phyton.makeFree()
// phyton.coursePrice()

// phyton.courseReating()

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Extends

// class User {
//     name: string
//     surname: string
//     age: number
//     constructor(name: string, surname: string, age: number) {
//         this.name = name
//         this.surname = surname
//         this.age = age
//     }

//     showNameSurname() {
//         console.log(`User name and surname: ${this.surname} ${this.name}`)
//     }
// }

// class BankUser extends User {
//     private money: number

//     constructor(name: string, surname: string, age: number) {
//         super(name, surname, age)
//         this.money = 0
//     }

//     deposit(amount: number) {
//         this.money += amount
//     }

//     withdraw(amount: number) {
//         if(amount > this.money) {
//             console.log("Your deposit isn't enought to withdraw!!!")
//             return
//         }
//         this.money -= amount
//     }

//     showMoney() {
//         console.log(`Your bank shot: ${this.money} $`)
//     }
// }

// const user1 = new BankUser("Islombek", "Abdurazzoqov", 22)

// user1.showNameSurname()
// user1.showMoney()
// user1.deposit(1000)
// user1.showMoney()
// user1.withdraw(1200)
// user1.showMoney()
// user1.withdraw(580)
// user1.showMoney()

