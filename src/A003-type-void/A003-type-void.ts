//o type void é usado para funções q não tem return.
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
semRetorno('Luiz', 'Gomes');

const pessoa = {
  nome: 'Bruno',
  sobrenome: 'Alexandre',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };
