const numbers = [1, 2, 3, 4, 5]

console.log('Задание №1')
const [num] = numbers
console.log(`Первый элемент: ${num}`)


console.log('Задание №2')
const user = {
    name: 'User',
    age: 5
}

const admin = {
    ...user,
    admin: true
}

console.log(user)
console.log(admin)


console.log('Задание №3')
const store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1},
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Victor'},
            ],
            messages: [
                {id: 1, messages: 'hi'},
                {id: 2, messages: 'hi hi'},
                {id: 3, messages: 'hi hi hi'}
            ],
        },
        sidebar: []
    },
}

const {
    state: {
        profilePage: {posts},
    },
} = store;

posts.forEach(post => console.log(post))

const {
    state: {
        dialogsPage: {dialogs, messages},
    },
} = store;

const onlyEvenIDS = dialogs.filter(dialog => dialog.id % 2)

messages.map(message => message.message = "Hello user")

console.log(onlyEvenIDS);
console.log(messages);


console.log('Задание №4')
let tasks = [
    {id: 1, title: "HTML & CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: true},
    {id: 4, title: "REST API", isDone: false},
    {id: 5, title: "GraphQL", isDone: false},
]

console.log(tasks)

tasks = [...tasks, {id: 6, title: "Redux", isDone: false}]

console.log(tasks)


console.log('Задание №5')

function sumValues(x, y, z) {
    return x + y + z
}

console.log(sumValues(...[1, 2, 3]))
