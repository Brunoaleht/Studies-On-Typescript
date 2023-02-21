//tuple acontece com um array de tamanho definido, e tipos específicos para cada index, pode ser alterado porém uma tuple é imudável logo é necessário do readonly
const dadosClient1: readonly [number, string] = [1, 'joão'];
const dadosClient2: readonly [number, string, string] = [10, 'joão', 'miguel'];
const dadosClient3: readonly [number, string, string?] = [1, 'joão'];
//aqui vai ficar proximo a um array:
const dadosClient4: readonly [number, string, ...string[]] = [
  1,
  'joão',
  'luiz',
  'miguel',
];
console.log(dadosClient1);
console.log(dadosClient2);
console.log(dadosClient3);
console.log(dadosClient4);
