//o tipo never quer dizer q vou ter uma função ou algo que nunca vai retorna nada
//pois essa função eu tenho certeza q nunca vai retornar nada
//muito utilizada em loop infinito tbm
export function criarErro(): never {
  throw new Error('Qualquer erro');
}

criarErro();
