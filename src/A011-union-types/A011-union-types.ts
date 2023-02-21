//neste caso a e b pode ser number ou string
function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  //desta maneira eu pego todas as possibilidades de retorno
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat('br', 20));
console.log(addOrConcat(20, '20'));
