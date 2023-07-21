interface Player {
  name: string;
  hp: number;
  damage: number;
}

let player1: Player = {
  name: 'Lilith',
  damage: parseInt(Math.random() * 100),
  hp: 100,
};
let player2: Player = {
  name: 'Mefisto',
  damage: parseInt(Math.random() * 100),
  hp: 100,
};

const userChoice: string = prompt('do you wanna play? y), n)');
const players: object = [player1, player2];

if (userChoice.toLowerCase() === 'y') {
  game(player1, player2);
  console.log(players);
}

function game(player1: Player, player2: Player): void {
  while (player1.hp > 0 && player2.hp > 0) {
    console.log(
      `${player1.name} dealt ${player1.damage} damage to ${player2.name}`
    );
    player2.hp -= player1.damage;

    if (player2.hp <= 0) {
      endOfGame(player2);
      break;
    }

    console.log(
      `${player2.name} dealt ${player2.damage} damage to ${player1.name}`
    );
    player1.hp -= player2.damage;

    if (player1.hp <= 0) {
      endOfGame(player1);
      break;
    }
  }
}

function endOfGame(loser): void {
  console.log(`${loser.name} defeated`);
}

// const userChoice = prompt('do you wanna play?  y) ,  n)');

// if (userChoice.toLowerCase() === 'y') {
//   game(player1, player2);
//   game(player2, player1);
// }
// if (userChoice.toLowerCase() === 'n') {
//   false;
// }

// function game(player1, player2) {
//   while (player2.hp || player1.hp <= 0) {
//     console.log(
//       `${player1.name} dealt ${player1.damage} damage to ${player2.name}   `
//     );
//     console.log(attack(player2.hp, player1.damage));

//     if (player1.hp || player2.hp <= 0) {
//       endOfGame();
//     }
//     break;
//   }
// }

// function endOfGame() {
//   if (player2.hp <= 0) {
//     console.log('Mefisto defeated ');
//   }
//   if (player1.hp <= 0) {
//     console.log('Lilith defeated ');
//   } else {
//     false;
//   }
// }

// function attack(obj1: number, obj2: number) {
//   const damage: number = obj1 - obj2;
//   player1.hp = damage;

//   const result = [player1, player2];
//   return result;
// }
