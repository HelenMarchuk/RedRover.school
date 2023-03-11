// Part-1
let firstName
let lastName
firstName = "John"
lastName = "Adams"
document.write(firstName + " " + lastName,"<br>")

firstName = "Anna"
lastName = "Karenina"
document.write(firstName + " " + lastName,"<br><br>")

// Part-2
let a
let c = 9
let str = "Hi 5"
let b = true
let y = 9+'1'
let x = 'a'/6
console.log(a)
console.log(c)
console.log(str)
console.log(b)
console.log(y)
console.log(x)

// Part-3
const lion = "animal"
const blackColor = "000"
const myBirthday = "04.01.1988"
document.write(lion + "<br>" + blackColor + "<br>" + myBirthday + "<br><br>")

// Creative task
document.write("Instruction of making a coffee"+ "<br><br>" + "What do you need:"+ "<br>")

let machine = "coffee machine"
let container = "cup"
let beans = "unground coffee beans"
let liquid = "water"
document.write("- " + machine + "<br>" + "- " + beans + "<br>" + "- " + liquid  + "<br>" + "- " +               container+ "<br><br>")
document.write("How to make a coffee:"+ "<br>")
let step1 = `1.Turn on ${machine}`
let step2 = `2.Add ${liquid} to ${machine}`
let step3 = `3.Add ${beans} to ${machine}`
let step4 = `4.Put ${container} to ${machine}`
let step5 = `5.Push a button to make a coffee`
let step6 = `6.Take delicious coffee`
let step7 = `7.Turn off ${machine}`
document.write(step1 + "<br>" + step2 + "<br>" + step3 + "<br>" + step4 + "<br>" + step5 + "<br>"               + step6 + "<br>" + step7 + "<br><br>")

// Review1-part1
let weight = 64
let height = 1.74
document.write("Olena's BMI = ", weight/height**2, "<br><br>")
console.log(weight/(height**2))

// Review1-part2
let berry = "strawberry"
let fruit = "lemon"
let food = berry
berry = fruit
fruit = food
document.write(berry, " ", fruit, "<br>")
console.log(berry, fruit)

let ticketNumber1 = 44
let ticketNumber2 = 101
let ticketNumber3 = ticketNumber1
ticketNumber1 = ticketNumber2
ticketNumber2 = ticketNumber3
document.write(ticketNumber1, " ", ticketNumber2, "<br>")
console.log(ticketNumber1, ticketNumber2)

let toys = 99
let games = 7
console.log(toys, games)
games = [toys, toys=games][0]
document.write(toys, " ", games)
console.log(toys, games)