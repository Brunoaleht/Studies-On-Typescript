let x = 10; //eslint-disable-line
x = 0b1010;

const y = 10; //tipo literal pois ele só pode ser 10

//neste caso a só pode ser 20
//let a: 20 = 20;//esta maneira não é o aconselhável
let a = 20 as const; //eslint-disable-line

const person = {
  firstName: 'Bruno' as const,
  lastName: 'Alexandre',
};

//person.firstName = 'Carlos';//pois o firstName é do tipo Bruno constante, vai se comportar como uma constante sem poder ser mudada

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Azul'));

export default 1;
