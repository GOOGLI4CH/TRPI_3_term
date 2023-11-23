function rectangleSquare(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}

console.log('Задание 2')
let square = rectangleSquare(1)(2)(3)
console.log(square)

let x = 0, y = 0;

function* doMove(type) {
    for (let i = 0; i < 10; i++) {
        switch (type) {
            case 'left':
                x -= 1
                break
            case 'right':
                x += 1
                break
            case 'up':
                y += 1
                break
            case 'down':
                y -= 1
                break
            default:
                console.log("Неправильная команда!")
                return
        }
        yield [x, y]
    }
}

console.log('Задание 3')

for (let i = 0; i < 10; i++) {
    const direction = prompt(`Введите команду (up, down, left, right) - текущие координаты: [${x},${y}] `)
    let iterator = doMove(direction).next();
}

console.log('Задание 4')
var varVariable = 5
console.log(window)