const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// --- Initialization ---

let player1 = {
    name: 'Joaquim',
    color: 'red',
    position: 0,
    cash: 1000,
    move: function () {
        // console.log(this);
        let dice = 1 + Math.floor(Math.random() * 6);
        this.position += (this.position + dice) % squares.length;
        this.cash += squares[this.position];
        if (this.cash < 0) {
            console.log(`Game over for ${this.name}.`);
        }
    },
    displayInfo: function () {
        console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
    }
}

let player2 = {
    name: 'Maxence',
    color: 'blue',
    position: 0,
    cash: 1000
}

let player3 = {
    name: 'Mostafa',
    color: 'black',
    position: 0,
    cash: 1000
}

let dice;

dice = 1 + Math.floor(Math.random() * 6);

// if ((player1.position + dice) > 15) {
//     player1.position = player1.position + dice - squares.length;
// } else {
//     player1.position += dice;
// }

// move the player
player1.position = (player1.position + dice) % squares.length;

// update the cash
player1.cash += squares[player1.position];

if (player1.cash < 0) {
    console.log(`Game over for ${player1.name}`);
}

// now make the other moves and display the info:

/*
// --- Turn of Player 2 --- 
dice = 1 + Math.floor(6 * Math.random());
player2.position = (player2.position + dice) % squares.length;
player2.cash += squares[player2.position];
if (player2.cash < 0) {
    console.log(`Game over for ${player2.name}.`);
}

// --- Turn of Player 3 --- 
dice = 1 + Math.floor(6 * Math.random());
player3.position = (player3.position + dice) % squares.length;
player3.cash += squares[player3.position];
if (player3.cash < 0) {
    console.log(`Game over for ${player3.name}.`);
}

// --- Display info  ---
console.log(player1);
console.log(player2);
console.log(player3);
*/

player1.move();
player1.displayInfo();