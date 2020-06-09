// The whole game again but with classes
let squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10]

class Player {
    // the constructor gets called when we instantiate a class with the 'new' keyoword
    constructor(name, color) {
        // console.log(color);
        this.name = name;
        this.color = color;
        this.position = 0;
        this.cash = 1000;
    }

    move() {
        console.log('i am moving');
    }

    displayInfo() {
        console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
    }
}

const player1 = new Player('Alice');
// const player2 = new Player('Bob');
// console.log(player1.cash);
// player1.name = 'Joe'

// player1.move();
// console.log(player1);


// Inheritance - using the extends keyword

class Animal {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Food {

}

// Cat is inheriting from Animal - this is done with the 'extends' keyword
class Cat extends Animal {
    constructor(name, color, sound, numberOfLives) {
        // in the child condtructor we have to use super()
        // to call the parent constructor
        super(name, color, sound);
        this.lives = numberOfLives;
    }
    // when cat uses the makeSound() method then this gets used - if we don't have this method 
    // here than the definition of makeSound() in Animal is used
    makeSound() {
        console.log(this.sound + '!!!!')
    }

}

class Bird extends Animal {
    constructor() {
        super(name, color, sound);
    }

    fly() {
        console.log('i am flying');
    }
}


const kitten = new Cat('Kitty', 'black', 'meow', 7);
kitten.makeSound();

const bird = new Bird();
bird.fly();
