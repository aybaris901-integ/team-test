
const teamName = "Team Te

const members = [
  "Alex",
  "Diana",
  "John"
];

console.log("Welcome to " + teamName + "!");
console.log("Team members:");

members.forEach((member, index) => {
  console.log(`${index + 1}. ${member}`);
});

console.log("Total members: " + members.length);
