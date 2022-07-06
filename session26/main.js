// let user = {
//     username: 'Mike'
//     password: 'mk123'
// };

class Person{
    username;
    password;

    constructor(user, pass) {
        this.username = user;
        this.password = pass;
    }

    displayName(){
        console.log('username = ' + this.username);
    }

    displayPassword(){
        console.log(`password = ${this.password}`);
    }

    displayInformation(){
        this.displayName();
        this.displayPassword();
    }
}

let user = new Person();
user.username = 'mike'
user.password = 'mk123'

console.log(user);
console.log(user.password);

let user2 = new Person();
user2.username = 'jack'
user2.password = 'jk456'

console.log('-----------------');

user.displayName()
user.displayInformation()


// Constructors
let user3 = new Person('Peter', 'pt123')
user3.displayInformation()






console.log('-------------Inheritance----------------');

class Shape{
    area;
    displayArea() {
        console.log('Area(shape) = ' + this.area);
    }
}

class Rectangle extends Shape {
    length;
    width;
    calculateArea() {

    }
}

class Circle extends Shape {
    radius;
    calculateArea() {

    }
}

class Square extends Shape{
    displayArea(param) {
        console.log('Area(square) 2 = ' + this.area);
    }

    displayArea() {
        console.log('Area(square) 1 = ' + this.area);
    }
}

let r = new Rectangle();
r.area = 45
r.displayArea()

let square = new Square();
square.area = 100;
// JS always calls last function, overloading.  Even param doesn't help. 
// You should not have more than one method/function with the same name. 
square.displayArea('param'); 