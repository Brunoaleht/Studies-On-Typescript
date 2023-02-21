enum Cores {
  azul = 10, // 0
  vermelho = 100, //1
  verde = 1000, //2
}
enum Cores {
  amarelo = 'amarelo', // 0
  roxo = 201, //1
  rosa, //2
}

// console.log(Cores);

// console.log(Cores.azul);
// console.log(Cores[10]);
export function escolherCor(cor: Cores): void {
  console.log(Cores[cor]);
}
escolherCor(Cores.amarelo);
