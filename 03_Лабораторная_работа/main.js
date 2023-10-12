function flatArray(array) {
    if (!Array.isArray(array)) {
        return []
    }

    return array.reduce((accumulator, currentValue) => {
        return accumulator.concat(
            Array.isArray(currentValue) ? currentValue.reduce((a, b) => a.concat(b), []) : currentValue
        )}, []);
}

const startArray = [1, [1, 2, [3, 4]], [2, 4]];
console.log('Задание 1')
console.log(startArray)
console.log(flatArray(startArray))

const sum = flatArray(startArray).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log('Задание 2')
console.log(`Сумма элементов: ${sum}`)

const students = [
    {
        name: 'Иван',
        age: 17,
        groupNumber: 6
    },
    {
        name: 'Андрей',
        age: 19,
        groupNumber: 5
    },
    {
        name: 'Василий',
        age: 20,
        groupNumber: 5
    },
    {
        name: 'Николай',
        age: 18,
        groupNumber: 4
    }
]

function getStudentsInRangeByAge(students) {
    if (!Array.isArray(students)) {
        return {}
    }

    return students.reduce((result, student) => {
        if (student.age > 17) {
            if (!result[student.groupNumber]) {
                result[student.groupNumber] = [];
            }
            result[student.groupNumber].push(student);
        }
        return result;
    }, {});
}

console.log('Задание 3')
console.log(getStudentsInRangeByAge(students))

function getDifferenceCodes(str) {
    if (typeof str !== 'string') {
        return 0
    }

    let total1 = ''

    for (let i = 0; i < str.length; i++) {
        total1 += str.charCodeAt(i)
    }

    let total2 = total1.replaceAll('7', '1')

    return total1 - total2
}

console.log('Задание 4')
console.log(`Разница между total1 и total2: ${getDifferenceCodes('ABC')}`)

function joinObjects(...objects) {
    return objects.reduce((accumulator, currentValue) => Object.assign(accumulator, currentValue), {})
}

const object1 = {
    name: 'SomeName',
    surname: 'SomeSurname'
}

const object2 = {
    age: 'SomeAge'
}

const object3 = {
    someParm: 'someParm'
}

console.log('Задание 5')
console.log(joinObjects(object1, object2, object3))

function buildTower(numFloors) {
    const tower = []
    for (let i = 0; i < numFloors; i++) {
        const spaces = ' '.repeat(numFloors - i - 1)
        const stars = '*'.repeat(2 * i + 1)
        const row = spaces + stars + spaces
        tower.push(row)
    }
    return tower;
}

console.log('Задание 6')
const tower = buildTower(5)
tower.forEach(row => console.log(row))
