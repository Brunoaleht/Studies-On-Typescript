/*eslint-disable*/
//Type annotation-- : type-ref
//nunca colocar tipo antes, pois a interferência de type
//types básicos --lembrar q na maioria ds casos o type aqui começa com letras minusculas
let nome: string = 'Bruno'; //qualquer tipo de string
let idade: number = 25; //10, 2.5, 0df004, -5.55
let adulto: boolean = true; //true or false
let simbolo: symbol = Symbol('qualquer simbolo'); //symbol
let big: bigint = 10n; //10n,

//Array
let arrayOfNumber: number[] = [1, 2, 3];
let arrayOfNumber2: Array<number> = [1, 2, 3];
let arrayOfString: string[] = ['a', 'b', 'c'];
let arrayOfString2: Array<string> = ['a', 'b', 'c'];
let arrayOfObjects: object[] = [{ a: 'a' }, { b: 'b' }, { c: 'c' }];
let arrayOfObjects2: Array<object> = [{ a: 'a' }, { b: 'b' }, { c: 'c' }];

//Object
let pessoa: { name: string; idade: number; adulto?: boolean } = {
  name: 'bruno',
  idade: 25,
};

//funções
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;
export const result = soma2(2, 2);

