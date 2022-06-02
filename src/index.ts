// Basic Types
let id: number = 5
let company: string = 'Company'
let isPublished: boolean = true
let x: any = 'Hello'
let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']


// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]

// Tuple Array
let employee: [number, string][]
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
]

// Union
let pid: string | number
pid = 22
pid = '22'

// Enum
enum Direction1 {
    Up = 'Up', 
    Down = 'Down', 
    Left = 'Left', 
    Right = 'Right'
}

// Object
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
let customerId1 = <number>cid
let customerId2 = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

// A function with no return returns void
function log(message: string | number): void {
    console.log(message)
}

// Interfaces
interface UserInterface {
    readonly id: number, // readonly fields can't be assigned values after the first initialization
    name: string,
    age?: number // ? makes the field optional
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes
class Person implements PersonInterface {
    id: number // private makes it only accessable from within the class 
    name: string // Can only be accessed from within the class or extending classes

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    // Method - Can be called with for example "brad.register()"
    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad')
const mike = new Person(2, 'Mike')

// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Sean', 'Developer')

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['Brad', 'John', 'Jill'])

