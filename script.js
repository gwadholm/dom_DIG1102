const main = document.querySelector('main');
const joke1 = "What is the smartest insect? A spelling bee!";
const joke2 = "Why did the teddy bear say no to dessert? Because she was stuffed.";
const joke3 = "What kind of tree can you hold in your hand? A palm tree!";

const template = `
  <h1>My Jokes</h1>
  <ul>
    <li>${joke1}</li>
    <li>${joke2}</li>
    <li>${joke3}</li>
  </ul>
`;

const para = document.createElement('p');
para.textContent = "That's all folks!";
main.innerHTML = template;
document.body.appendChild(para);