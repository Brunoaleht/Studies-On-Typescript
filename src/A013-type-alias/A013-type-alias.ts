//type alias é uma forma de criar um apelido para os nosso types, cria a partir da palavra type
//Quando criamos nossos próprios types usamos a primeira letra Maiúscula
type Idade = number;
//Observa q person está sendo um shape, de um objeto.
type Person = {
  firstName: string;
  lastName: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul'; //Or
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Black';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Person = {
  firstName: 'Bruno',
  lastName: 'Alexandre',
  idade: 25,
  salario: 100_000, //100000
};

export function setCorPreferida(pessoa: Person, cor: CorPreferida): Person {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Ciano'));

console.log(pessoa); //observando aqui q não muda o object original
