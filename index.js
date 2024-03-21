// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }
  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      debugger;
    }

    return gifts;
  }

  wrapGifts(gifts);

function writeCards(names, event) {
   const cards = []; for (let i = 0; i < names.length; i++) {
     const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
     cards.push(message); } return cards;
}

const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";

const invitationCards = writeCards(names, event);
console.log(invitationCards);
function plantGarden() {
    let keepWorking = true;
    while (keepWorking) {
      chooseSeedLocation();
      plantSeed();
      waterSeed();
      keepWorking = checkForMoreSeeds();
    }
  }
  function countDown(number) {
    for (let i = number; i >= 0; i--)
    { console.log(i); }
}

countDown(5);