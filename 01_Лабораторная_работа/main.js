function task1() {
    let a = 5;  // number
    let name = "name";  // string
    let i = 0;  // number
    let double = 0.23;  // number
    let result = 1 / 0;   // number
    let answer = true;  // boolean
    let no = null;  // null
}

function task2() {
    console.log("Задание №2")

    let length = 45;
    let width = 21;
    let rectangleSquare = length * width

    console.log(`Площадь четырёхугольника: ${rectangleSquare}`)
}

function task3() {
    console.log("Задание №3")

    const length = 45;
    const width = 21;
    const squareLen = 5
    let countSquaresX = Math.floor(length / squareLen)
    let countSquaresY = Math.floor(width / squareLen)
    let countSquares = countSquaresX * countSquaresY

    console.log(`Количество квадратов, которое поместится в четырёхугольник: ${countSquares}`)
}

function task4() {
    console.log("Задание №4")

    let i = 2
    let a = ++i
    let b = i++

    if (a == b) {
        console.log(`a равно b: ${a} == ${b}`)
        return
    }

    console.log(`a не равно b: ${a} != ${b}`)
}

function task5() {
    console.log("Задание №5")

    "Котик" == "котик" ? console.log(`Котик == котик`) : console.log(`Котик != котик`)
    "Котик" == "китик" ? console.log(`Котик == китик`) : console.log(`Котик != китик`)
    "Кот" == "Котик" ? console.log(`Кот == Котик`) : console.log(`Кот != Котик`)
    "Привет" == "Пока" ? console.log(`Привет == Пока`) : console.log(`Привет != Пока`)
    73 == "53" ? console.log(`73 == "53"`) : console.log(`73 != "53"`)
    false == 0 ? console.log(`false == 0`) : console.log(`false != 0`)
    54 == true ? console.log(`54 == true`) : console.log(`54 != true`)
    123 == false ? console.log(`123 == false`) : console.log(`123 != false`)
    true == "3" ? console.log(`true == "3"`) : console.log(`true != "3"`)
    3 == "5мм" ? console.log(`3 == "5мм"`) : console.log(`3 != "5мм"`)
    8 == "-2" ? console.log(`8 == "-2"`) : console.log(`8 != "-2"`)
    34 == "34" ? console.log(`34 == "34"`) : console.log(`34 != "34"`)
    null == undefined ? console.log(`null == undefined`) : console.log(`null != undefined`)
}

function task6() {
    alert("Задание №6")

    const teacherFullName = "Иванов Иван Иванович"
    const inputFullName = prompt("Введите имя: ").toLowerCase()

    if (teacherFullName.toLowerCase().includes(inputFullName)) {
        alert("Введены верные данные")
        return
    }

    alert("Введённые данные неверны")
}

function task7() {
    alert("Задание №7")

    const passedRussian = prompt("Сдал ли студент русский? (true / false)") === "true"
    const passedMath = prompt("Сдал ли студент математику? (true / false)") === "true"
    const passedEnglish = prompt("Сдал ли студент английский? (true / false)") === "true"

    if (passedRussian && passedMath && passedEnglish) {
        alert("Студент сдал все экзамены")
    } else if (!passedRussian && !passedMath && !passedEnglish) {
        alert("Студент отчислен")
    } else {
        alert("Студента ожидает пересдача")
    }
}

function task8() {
    alert("Задание №8")

    const a = Number(prompt("Введите a: "))
    const b = Number(prompt("Введите b: "))
    const n = Number(prompt("Введите n: "))

    alert(`Сумма: ${a + b}`)
    alert(`Разность: ${a - b}`)
    alert(`Деление: ${a / b}`)
    alert(`Умножение: ${a * b}`)
    alert(`Возведение в степень a: ${a ** n}`)
    alert(`Возведение в степень b: ${b ** n}`)
    alert(`Остаток от деления: ${a % b}`)
    alert(`Корень a: ${Math.sqrt(a)}`)
    alert(`Корень b: ${Math.sqrt(b)}`)
}

function task9() {
    alert("Задание №9")
    alert(`true + true = ${true + true}`)
    alert(`0 + "5" = ${0 + "5"}`)
    alert(`5 + "мм" = ${5 + "мм"}`)
    alert(`8 / Infinity = ${8 / Infinity}`)
    alert(`9 * "\n9" = ${9 * "\n9"}`)
    alert(`null - 1 = ${null - 1}`)
    alert(`"5" - 2 = ${"5" - 2}`)
    alert(`"5px" - 3 = ${"5px" - 2}`)
    alert(`true - 3 = ${true - 3}`)
    alert(`7 || 0 = ${7 || 0}`)
}

function task10() {
    console.log("Задание №10")

    for(let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i + 2)
            continue
        }

        console.log(`${i}мм`)
    }
}

function task11() {
    alert("Задание №11")

    const numDay = Number(prompt("Введите номер дня недели: "))

    if (numDay < 1 || numDay > 7) {
        alert("Некорректные данные")
        return
    }

    alert("Через объект")
    const days = {
        1: "Понедельник",
        2: "Вторник",
        3: "Среда",
        4: "Четверг",
        5: "Пятница",
        6: "Суббота",
        7: "Воскресенье"
    }
    alert(`День: ${days[numDay]}`)

    alert("Через массив")
    const arrayDays = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье"
    ]
    alert(`День: ${arrayDays[numDay - 1]}`)
}

task1()
task2()
task3()
task4()
task5()
task6()
task7()
task8()
task9()
task10()
task11()