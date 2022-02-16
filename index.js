/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/
let sity = {
    name: "Череповец",
    country: "Россия",
    number: 315000,
    stadium: false
}
console.log(sity)
/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/
let a = 40
let b = 70
let square = a * b
console.log(`Площадь: ${square} см2`)

/* 
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/
let time = 2;
let    speedOfFirst = 95;
let    speedOfSecond = 114;
let distance;
distance = (time * speedOfFirst) + (time* speedOfSecond)
console.log(distance)
/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/
const randomNumber = Math.floor(Math.random() * 100);
if(randomNumber < 20){
    console.log("randomNumber меньше 20")
} else if(randomNumber > 50) {
    console.log("randomNumber больше 50")
} else {
    console.log("randomNumber больше 20, и меньше 50")
}
/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/

switch (randomNumber) {
    case 1:
    case 2: 
    case 3:
    case 4:
    case 5: 
    case 6:
    case 7:
    case 8: 
    case 9:
    case 10:
    case 11: 
    case 12:
    case 13:
    case 14:
    case 15: 
    case 16:
    case 17:
    case 18: 
    case 19:
    console.log("randomNumber меньше 20")
    break;

    case 51:
    case 52: 
    case 53:
    case 54:
    case 55: 
    case 56:
    case 57:
    case 58: 
    case 59:
    case 60:
    case 61: 
    case 62:
    case 63:
    case 64:
    case 65: 
    case 66:
    case 67:
    case 68: 
    case 69:
    case 70:
    case 71:
    case 72: 
    case 73:
    case 74:
    case 75: 
    case 76:
    case 77:
    case 78: 
    case 79:
    case 80:
    case 81:
    case 82: 
    case 83:
    case 84:
    case 85: 
    case 86:
    case 87:
    case 88: 
    case 89:
    case 90:
    case 91:
    case 92: 
    case 93:
    case 94:
    case 95: 
    case 96:
    case 97:
    case 98: 
    case 99:
    console.log("randomNumber больше 50")
    break;

  default:
    console.log("randomNumber больше 20, и меньше 50")
}



