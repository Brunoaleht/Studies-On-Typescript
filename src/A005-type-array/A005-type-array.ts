//Array<T> or T[] onde T é o type
//Exemple Array<T>:
export function multiArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

//Exemple T[]:
export function concatStrings(...args: string[]): string {
  return args.reduce((acc, value) => acc + value);
}
export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

//resultados das chamadas:
export const resultado = multiArgs(1, 2, 3, 4);
console.log(resultado);

export const concatResult = concatStrings('B', 'r', 'u', 'n', 'o');
console.log(concatResult);

export const upperCaseResult = toUpperCase('B', 'r', 'u', 'n', 'o');
console.log(upperCaseResult);

//readonly array:
const array1: readonly string[] = ['Bruno', 'Alexandre'];
const array2: ReadonlyArray<string> = ['Luiz', 'Carlos'];
console.log(array1);
console.log(array2);
