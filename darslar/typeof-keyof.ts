// // typeof

// const user = {
//     name: "Islombek",
//     age: 22,
//     education: {
//         univer: "TATU",
//         course: 3
//     }
// }

// type UserType = typeof user

// function getType(user: UserType) {
//     console.log(user)
// }

// getType(user)

// // keyof

// type UserKeys = keyof typeof user

// function getValue(key: UserKeys) {
//     console.log(user[key])
// }

// getValue("name")


// // practice

// const config = {
//     host: "https://2000/1231",
//     api: "api-success",
//     port: 3001,
//     deploy: true
// }

// function getConfigValue(keys: keyof typeof config) {
//     console.log(config[keys]);
// }

// getConfigValue("port")