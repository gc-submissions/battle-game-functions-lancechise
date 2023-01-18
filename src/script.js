"use strict";

// TODO - write your code here.
const randomDamage = () => Math.floor(Math.random() * 10 + 1);

const chooseOption = (opt1, opt2) => {
  const randNum = Math.round(Math.random());
  return randNum === 0 ? opt1 : opt2;
};

const attackPlayer = function (health) {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
  return health <= 0 ? true : false;
};

function fight(player1, player2, player1Health, player2Health) {
  let attacker = chooseOption(player1, player2);
  while (player2 === player1) {
    return player2Health === player1Health;
    logHealth(player2, player2Health);
    if (player2Health === isDead) return logDeath(player1, player2);
    break;
  }
}
