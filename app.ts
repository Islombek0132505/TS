
function auth(authType: {register: string, newUserId: number} | {login: string, userId: number}) {
    if("register" in authType) {
        console.log(`You succesfull registed and your id { ${authType.newUserId} }`)
    }
    else {
        console.log(`You succesfully log in with id { ${authType.userId} }`)   
    }
}

auth({login: "login", userId: 23144123})

