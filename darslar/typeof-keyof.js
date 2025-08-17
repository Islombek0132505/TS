"use strict";
// typeof
const user = {
    name: "Islombek",
    age: 22,
    education: {
        univer: "TATU",
        course: 3
    }
};
function getType(user) {
    console.log(user);
}
getType(user);
function getValue(key) {
    console.log(user[key]);
}
getValue("name");
// practice
const config = {
    host: "https://2000/1231",
    api: "api-success",
    port: 3001,
    deploy: true
};
function getConfigValue(keys) {
    console.log(config[keys]);
}
getConfigValue("port");
