"use strict";
// Static
// class Auth {
//     static signIn(username: string, password: string) {
//         if(username == "admin" && password == "admin123") {
//             console.log("You have entered to dashboard successfully!!!")
//         } else {
//             console.log("Wrong password or username")
//         }
//     }
//     static signUp(username: string, password: string, confirmPassword: string) {
//         if(username == "" || password == "" || confirmPassword == "") {
//             console.log("Required to fill all place")
//             return
//         }
//         if(password !== confirmPassword) {
//             console.log("Confirm password do not match to password")   
//             return
//         }
//         if(password == confirmPassword) {
//             console.log("Created new account!!!")
//         }
//     }
// }
// Auth.signIn("admin", "admin1232")
// Auth.signUp("Islombek", "1234", "1234")
// Auth.signIn("admin", "admin123")
// Auth.signUp("", "1234", "1234")
// Auth.signIn("", "admin1232")
// Auth.signUp("Islombek", "12342", "1234")
//---------------------------------------------------------------------------------------------------------------------------------------------
// Abstract class
// interface Course {
//     name: string
//     desc: string
//     price: string
//     duration: number
// }
// abstract class CourseManagerCreator {
//     protected course: Course[]
//     constructor(course: Course[]) {
//         this.course = course
//     }
//     abstract watchAllCourse(): Course[] 
//     abstract addNewCourse(newCourse: Course): void
// }
// class CourseManager extends CourseManagerCreator {
//     watchAllCourse(): Course[] {
//         return this.course
//     }
//     addNewCourse(newCourse: Course): void {
//         this.course.push(newCourse)
//     }
// }
// const courseList: Course[] = [
//     { name: "React", desc: "Frontend framework", price: "$99", duration: 10 },
//     { name: "Node.js", desc: "Backend", price: "$89", duration: 8 },
// ]
// const manager = new CourseManager(courseList)
// console.log(manager.watchAllCourse())
// manager.addNewCourse({ name: "TypeScript", desc: "Superset of JS", price: "$79", duration: 6 })
// console.log(manager.watchAllCourse())
