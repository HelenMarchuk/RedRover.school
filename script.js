// Part-1
// 1.1 Объявите две переменные: firstName и lastName.
// 1.2 Передайте значение “John”в переменную firstName и значение “Adams”  в переменную lastName.
// 1.3 Выведите на страницу значение firstName и lastName (должно показать John Adams).
// 1.4 Используйте те же переменные (перезапишите) firstName и lastName для того, чтобы вывести новое значение (Anna Karenina).
// В итоге на экране должно быть две строки:
// John Adams
// Anna Karenina

let firstName
let lastName
firstName = "John"
lastName = "Adams"
document.write(firstName + " " + lastName,"<br>")

firstName = "Anna"
lastName = "Karenina"
document.write(firstName + " " + lastName,"<br><br>")

// Part-2
// 2  Выведите в консоль тип данных следующих переменных:
// let a,
// let c = 9,
// let str = “Hi 5!”,
// let b = true,
// let y = 9 + ‘1’,
// let x =  'a' / 6

let a
let c = 9
let str = "Hi 5"
let b = true
let y = 9+'1'
let x = 'a'/6
console.log(typeof a)
console.log(typeof c)
console.log(typeof str)
console.log(typeof b)
console.log(typeof y)
console.log(typeof x)

// Part-3
// 3 Подумайте, какие переменные логично объявить через const. Придумайте 3 разных,  объявите их и  выведите на экран

const lion = "animal"
const blackColor = "000"
const myBirthday = "04.01.1988"
document.write(lion + "<br>" + blackColor + "<br>" + myBirthday + "<br><br>")

// Creative task
// 4 Напишите пошаговый алгоритм приготовления кофе и выведите его на экран (страницу).
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
// Задача 1 Напишите формулу, которая вычисляет BMI (Body Mass Index), 
// BMI = вес (кг)/ рост (м) в квадрате. Напечатайте результат в консоли. Выведите вместе сo своим именем на страницу

let weight = 64
let height = 1.74
document.write("Olena's BMI = ", weight/height**2, "<br><br>")
console.log(weight/(height**2))

// Review1-part2
// Задача 2. Создайте две переменные с любыми значениями. Напишите программу, которая поменяет эти значения местами. Update. То же задание с числовыми переменными. Будет ли разница?
  
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
