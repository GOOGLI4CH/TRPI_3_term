function isSet(obj) {
    return obj instanceof Set
}

function addInSet(set, item) {
    if (!isSet(set)) {
        return
    }
    set.add(item)
}

function removeFromSet(set, item) {
    if (!isSet(set)) {
        return
    }
    if (set.has(item)) {
        set.delete(item)
    }
}

function hasInSet(set, item) {
    if (!isSet(set)) {
        return false
    }
    return set.has(item)
}

function getSetSize(set) {
    if (!isSet(set)) {
        return
    }
    return set.size
}

function showSetItems(set) {
    if (!isSet(set)) {
        return
    }
    set.forEach(item => console.log(item))
}

console.log('Задание 1')
let products = new Set()

console.log('Коллекция')
addInSet(products, 'Мышь')
addInSet(products, 'Клавиатура')
addInSet(products, 'Монитор')
addInSet(products, 'Звуковая система')
addInSet(products, 'Ноутбук')
showSetItems(products)

console.log(`Количество продуктов = ${getSetSize(products)}`)

console.log('Коллекция после удаления элемента "Мышь"')
removeFromSet(products, 'Мышь')
showSetItems(products)

console.log(`Элемент "Мышь" в множестве: ${hasInSet(products, "Мышь")}`)
console.log(`Элемент "Клавиатура" в множестве: ${hasInSet(products, "Клавиатура")}`)

function removeStudentByNum(set, regNum) {
    if (!isSet(set)) {
        return
    }
    for (let item of set) {
        if (item.registrationNumber === regNum) {
            set.delete(item)
            return
        }
    }
}

function filterStudentsByGroup(set, group) {
    if (!isSet(set)) {
        return new Set()
    }
    const filteredStudents = [...set].filter(student => student.group === group)
    return new Set(filteredStudents)
}

function sortStudentsByNum(set) {
    if (!isSet(set)) {
        return new Set()
    }
    const sortedStudents = [...set].sort((a, b) => a.registrationNumber - b.registrationNumber)
    return new Set(sortedStudents)
}

class Student {
    constructor(registrationNumber, group, fullName) {
        this.registrationNumber = registrationNumber
        this.group = group
        this.fullName = fullName
    }
}



console.log('Задание 2')
const student1 = new Student(123, 1, 'Иван Иванов')
const student2 = new Student(456, 2, 'Петр Петров')
const student3 = new Student(789, 3, 'Мария Сидорова')
const student4 = new Student(101, 3, 'Анна Козлова')

let students = new Set()

addInSet(students, student1)
addInSet(students, student2)
addInSet(students, student3)
addInSet(students, student4)
showSetItems(students)
removeStudentByNum(students, 123)

console.log('Коллекция после удаления студента (номер - 123)')
showSetItems(students)

console.log('Студенты 3 группы')
showSetItems(filterStudentsByGroup(students, 3))

console.log('Студенты в отсортированном порядке')
showSetItems(sortStudentsByNum(students))



class Product {
    constructor(name, count, price) {
        this.name = name
        this.count = count
        this.price = price
    }
}

function isMap(obj) {
    return obj instanceof Map
}

function addItemToBasket(basket, key, value) {
    if (!isMap(basket)) {
        return
    }
    basket.set(key, value)
}

function removeItemById(basket, id) {
    if (!isMap(basket)) {
        return
    }
    if (basket.has(id)) {
        basket.delete(id)
    }
}

function removeItemByName(basket, name) {
    if (!isMap(basket)) {
        return
    }
    basket.forEach(item => {
        if (item.name === name) {
            basket.delete(item)
        }
    })
}

function changeCountProducts(basket, id, count) {
    if (!isMap(basket)) {
        return
    }
    if (basket.has(id)) {
        const item = basket.get(id)
        item.count = count
    }
}

function changePriceProducts(basket, id, price) {
    if (!isMap(basket)) {
        return
    }
    if (basket.has(id)) {
        const item = basket.get(id)
        item.price = price
    }
}

function getCountAndPriceProducts(basket) {
    if (!isMap(basket)) {
        return
    }

    let priceAllProducts = 0

    for (const item of basket) {
        priceAllProducts += item[1].price
    }

    let count = basket.size

    return [priceAllProducts, count]
}

function showBasket(basket) {
    if (!isMap(basket)) {
        return
    }
    basket.forEach(item => {
        console.log(item)
    })
}

console.log('Задание 3');
let basket = new Map()

const product1 = new Product('Товар 1', 3, 10.99)
const product2 = new Product('Товар 2', 2, 5.99)

addItemToBasket(basket, 1, product1)
addItemToBasket(basket, 2, product2)

console.log('Корзина')
showBasket(basket)

const [totalPrice, totalItemCount] = getCountAndPriceProducts(basket);
console.log('Общая стоимость товаров в корзине:', totalPrice);
console.log('Общее количество товаров в корзине:', totalItemCount);

console.log('Корзина после удаления товара с ключом 1')
removeItemById(basket, 1)
showBasket(basket)

console.log('Обновление стоимости и кол-ва товара')
changeCountProducts(basket, 2, 4)
changePriceProducts(basket, 2, 7.49)
showBasket(basket)

console.log('Корзина после удаления товара с ключом 2')
removeItemByName(basket, 'Товар 2')
showBasket(basket)



function caching(cache, args) {
    if(!cache.has(args)) {
        console.log('Функция с такими аргументами используется впервые')
        let result = sum(args[0], args[1])
        cache.set(args, result)
        return cache.get(args)
    }
    console.log('Функция с такими аргументами уже использовалась')
    return cache.get(args)
}

function sum(a, b) {
    return a + b
}


console.log('Задание 4')
let cache = new WeakMap()

let A = [1, 2]
let B = [1, 3]
console.log(caching(cache, A))
console.log(caching(cache, A))
console.log(caching(cache, B))