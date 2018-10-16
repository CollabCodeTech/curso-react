// function pegaNome() {
//   const nome = "Henri";

//   return nome;
// }

// const pegaNome = () => {
//   const nome = "Henri";

//   return nome;
// };

// const pegaNome = () => {
//   return "Henri";
// };

// Template String
const pegaNome = () => `
  <article>
    <h1>Henri</h1>
  </article>
`;

const nome = pegaNome();

console.log("Nome:", nome);
