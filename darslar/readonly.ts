const admins: readonly ([string, number])[] = [["John", 22], ["Lara", 19], ["Serger", 35], ["Anton", 45]]


const yungAdmins = admins.filter(admin => admin[1] < 25).map(admin => `${admin[0]}`).join(", ")

console.log("yung admins: ", yungAdmins)
