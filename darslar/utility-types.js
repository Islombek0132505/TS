"use strict";
// Readonly - o'qiladi, o'zgartirib bolmaydi ------------------------------------------------------------------------------------
const course1 = {
    id: "12342",
    createAt: new Date(),
    price: 300,
    students: 77
};
const user = {
    id: "uniqid",
    createAt: new Date(),
    name: "John",
    age: 22,
    password: "john123"
};
const user1 = {
    id: "12312",
    createAt: new Date(),
    name: "Name1",
    age: 22,
    password: "123412"
};
// user.name = "Don" // o'zgaradi
// user.id = "asduh" // xato beradi
// user1.name = "asdbajksbd" // xato beradi
// console.log(user)
// Partial - hammasini optional qiladi ------------------------------------------------------------------------------------
// type TUserPartial = Partial<IUser>
// const user2: IUser = {
//     id: "asdasd",
//     createAt: new Date(),
//     name: "Lara",
//     password: "password123",
//     age: 24,
// }
// function updateUser(id: string, data: Partial<IUser>) {
//     console.log("uppated", id, data);    
// }
// updateUser("123", {name: "Islombek"})
// Required - hamma property ni talab qiladi ------------------------------------------------------------------------------------
// function createUser<T>(user: Required<T>, callback: (user: Required<T>) => void): void {
//     console.log("Created new user: ", user)
//     callback(user)
// }
// createUser<IUser>({id: "asd", password: "asd", name: "asdasd", age: 22, createAt: new Date()}, (user => {
//     // user.id = "asdasd" // o'zgartirib bo'lmaydi
//     user.name = "asdasda" // o'zgaradi
// }))
// Pick - obj dan kerakli property ni tanlab oladi va type yaratadi ------------------------------------------------------------------------------------
// Omit - obj dan belgilangan property ni chiqarib tashlaydi va type yaratadi ------------------------------------------------------------------------------------
// type TUserSecrets = Required<Pick<IUser, "id" | "password">>
// type TUserPublic = Omit<IUser, "id">
// type TCoursePublic = Omit<ICourse, "id">
// ishlash kerak --------------------------------------------------------------------------------
// function getValuesObject<T extends object, K extends T>(obj: K): T {
//     type Keys = Extract<keyof T, keyof K>
//     Object.keys(obj).map(key => {
//     })
//     return obj 
// }
// getValuesObject<TUserSecrets, IUser>(user1)
// console.log(getValuesObject<TUserPublic, IUser>(user1))
// console.log(getValuesObject<TCoursePublic, ICourse>(course1))
//--------------------------------------------------------------------------------------------------------------
// function getOjectWithPick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {    
//     const result = {} as Pick<T, K>
//     for(const key of keys) {
//         result[key] = obj[key]
//     }
//     return result
// }
// const usersecrets = getOjectWithPick(user1, ["id", "password"])
// console.log(usersecrets)
