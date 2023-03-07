//Create the arrays to iterated over - an object
const mirrorMsg = {
  introMsg: [
    "I am the mirror on the wall and I see everything, big and small. How do YOU rank amongst them all?",
  ],
  helloMsg: [
    "hi",
    "hello",
    "good day",
    "welcome",
    "aloha",
    "hey",
    "what's up",
  ],
  compliment: [
    "attractive",
    "sexy",
    "bloody fantastic",
    "magnificent",
    "positively glorious",
    "beautiful, inside and out",
    "amazing",
    "cool",
  ],
  // I used AI in Notion to create these so/so funny compliments
  superCompliment: [
    "Your smile is like a ray of sunshine, but with teeth",
    "Your personality is so warm and welcoming, it makes me feel like I'm wrapped in a cozy blanket",
    "Your positive attitude is so infectious, it's like you have a PhD in happiness",
    "You are so kind and thoughtful, you make Mother Teresa look like a grump",
    "Your perspective is so unique and creative, it's like you have a secret dimension in your brain only you know about",
    "You are such a great listener, it's like you have a built-in lie detector",
    "Your sense of style is so on point, it's like you were born with a fashion gene",
    "Your work ethic is so strong, it's like you have a personal trainer for motivation",
    "You are such a natural leader, it's like you were born with a megaphone",
    "Your voice is so beautiful, it could make a siren jealous",
    "Your quick and sharp mind is so impressive, you should consider applying to Mensa",
    "You are always up for trying new things, it's like you have a perpetual case of FOMO",
    "Your aesthetic eye is so great, it's like you could design a museum-worthy exhibit in your sleep",
    "Your sense of humor is so great, you should consider starting a stand-up comedy career",
    "Your communication skills are so excellent, you could sell a ketchup popsicle to a woman in white gloves",
    "Your magnetic personality is so strong, it's like you have a real-life human tractor beam",
  ],
  fortune: ["good", "grand", "lucky", "interesting", "fantastic", "meh"],
};

// We need a random number to generate
function getRandomInt(num) {
  return Math.floor(Math.random() * num);
}
// Store the messages in an array
let yourMsg = [];

// Iterate over the object
for (let msg in mirrorMsg) {
  let todaysMsg = getRandomInt(mirrorMsg[msg].length);

// use a switch statement to push the messages together, don't forget to break so they don't run together
  switch (msg) {
    case "introMsg":
      yourMsg.push(`${mirrorMsg[msg][todaysMsg]}`);
      break;

    case "helloMsg":
      yourMsg.push(
        `Excited to see you, ${mirrorMsg[msg][todaysMsg]}! One moment while I search the Universe.`
      );
      break;

    case "compliment":
      yourMsg.push(
        `In all of the Universe, you are indeed the most ${mirrorMsg[msg][todaysMsg]} by far. `
      );
      break;

    case "superCompliment":
      yourMsg.push(`I think ${mirrorMsg[msg][todaysMsg]}.`);
      break;

    case "fortune":
      yourMsg.push(`Your day will be ${mirrorMsg[msg][todaysMsg]}.`);
  }
}
// Put it all together and add a line break
function putTogether(yourMsg) {
  const looksGood = yourMsg.join("\n");
  console.log(looksGood);
}

// call the function
putTogether(yourMsg);
