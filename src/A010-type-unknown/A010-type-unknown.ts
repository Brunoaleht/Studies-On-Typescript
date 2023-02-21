// o tipo unknown é um tipo mais geral parecido com o any, porém ele é mais seguro, pois ele não deixa vc realizar uma operação sem antes chegar
let x: unknown;
x = 10;
x = '100';
x = 100;
x = '10';
x = 10;

const y = 800;
if (typeof x === 'number') console.log(x + y);
