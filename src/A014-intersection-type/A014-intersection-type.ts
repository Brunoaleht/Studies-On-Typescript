// no caso do intersection ele é o & muitas vezes pode se ler como AND diferente do | do union type
type HaveName = { name: string };
type HaveLastName = { lastName: string };
type HaveAge = { age: number };
//exemplo de um object bem relaxado Person1
type Person1 = HaveName | HaveLastName | HaveAge; //tem q ter apenas uma das 3 chaves

const pessoa1: Person1 = {
  name: 'Bruno',
  lastName: 'Alexandre',
};
console.log(pessoa1);

//exemplo de um object mais definido
type Person2 = HaveName & HaveLastName & HaveAge; // ler como AND, tem q ter as 3 chaves
//HaveName & HaveLastName & HaveAge isso é o intersection type em si, é uma das maneiras de se utilizar
const pessoa2: Person2 = {
  name: 'Bruno',
  lastName: 'Alexandre',
  age: 25,
};
console.log(pessoa2);

//Ou eu posso utilizar para pegar a interseção de dois conjuntos de types:
//as vezes pode não haver tanto uso, mas é importante ler mais sobre
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';

type Intersection = AB & AC & AD; //observa q o type Intersection é igual mao type A
