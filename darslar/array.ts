const cars: string[] = ["BMW", "AUDI", "Ferrari", "Bugatti", "Rolls Roys"]
const age: number[] = [22, 10, 4, 12]
const nameAndAge: (string | number)[] = [2, "John", 11, 3, "Lara"]

const result = cars.filter(car => car.length > 4 && car.includes("a"))
const ourCars = cars.map((car, index) => `${index + 1}. ${car}`).join("  ")
console.log(result)
console.log(`Our cars: ${ourCars}`)

function getNames(data: (string | number)[]) : string[] {
    return data.filter(item => typeof item === "string")
}

console.log(getNames(nameAndAge))





