function basicOperation(operation, leftNum, rightNum) {
    switch (operation) {
        case "+":
            return Number(leftNum) + Number(rightNum)
        case "-":
            return Number(leftNum) - Number(rightNum)
        case "*":
            return Number(leftNum) * Number(rightNum)
        case "/":
            return Number(leftNum) / Number(rightNum)
    }
}

function result(n) {
    let result = 0

    for (let i = 1; i <= n; i++) {
        result += Math.pow(i, 3)
    }

    return result
}

function averageSum(list) {
    let sum = 0
    list.forEach(element => sum += element)
    return sum / list.length
}

function convertStr(inputStr) {
    const reversedStr = inputStr.split("").reverse().join("")
    return reversedStr.replace(/[а-яА-ЯёЁ~!?`'";:./,]/g, '')
}

function showStr(n, inputStr) {
    let result = ''

    for (let i = 0; i < n; i++) {
        result += inputStr
    }

    alert(`Результат: ${result}`)
}

function joinLists(firstArray, secondArray) {
    let resultArray = []

    for (const firstArrayStr of firstArray) {
        for (const secondArrayStr of secondArray) {
            if (firstArrayStr === secondArrayStr) { continue }

            resultArray.push(firstArrayStr)
        }
    }

    return resultArray
}


alert("Задание №1")
const inputOperation = prompt("Введите операцию (+, -, *, /): ")
const inputLeftNum = prompt("Введите левое число: ")
const inputRightNum = prompt("Введите правое число: ")
const operationResult = basicOperation(inputOperation, inputLeftNum, inputRightNum)
alert(`Результат: ${operationResult}`)

alert("Задание №2")
alert(`Результат ${result(5)}`)

alert("Задание №3")
alert(`Среднее арифметическое ${averageSum([1, 2, 3, 4, 5])}`)

alert("Задание №4")
let str = prompt("Введите строку: ")
alert(`Результат: ${convertStr(str)}`)

alert("Задание №5")
str = prompt("Введите строку: ")
const n = prompt("Введите n: ")
showStr(n, str)

alert("Задание №6")
alert(`Результат: ${joinLists(["Hello", "world", "!"], ["world"])}`)