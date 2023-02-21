//forma mais segura de criar object no typescript é deixando ele inferir o type
//essa forma o type lhe auxilia com auto complete
const objectA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
objectA.chaveA = 'Mudando o valor da chave A';
//objectA.chaveC = 'Nova chave'; //No caso ele não deixa eu colocar outra chave no meu object, pois ela não foi declarada na criação do objectA

//com o Record<string, unknown> fica um object menos seguro, pois agora o type não consegue mais inferir qal tipo é o nosso object
const objectB: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
objectB.chaveC = 'Nova Chave'; //Agora é permitido eu criar novas chaves
objectB.chaveA = 1; //e agora posso mudar o valor da chave para qualquer tipo

//uma maneira mais segura de usar as ferramentas do do objectB no object A é:
//sempre tem q analisar se vc realmente precisa de um object aberto, pois vc pode corrigir por meio do design do seu object, ou caso vc esteja recebendo dados de uma api q vc não sabe quais dados vc ira receber
//porém não é uma boa pratica deixar um object tão aberto a modificações
const objectC: {
  chaveA: string;
  chaveB: string;
  chaveC?: string; //essa chave fica opcional
  readonly chaveD: string; //isso não vai permitir alterações no valor da chave
  //usando aqui index signature na proxima chave:
  [key: string]: unknown;
} = {
  chaveA: 'Bruno',
  chaveB: 'Alexandre',
  chaveD: 'Endller',
};
objectC.chaveC = 'uma chave opcional';
//objectC.chaveD = 'Uma chave completamente nova';
console.log(objectA);
console.log(objectB);
console.log(objectC);
