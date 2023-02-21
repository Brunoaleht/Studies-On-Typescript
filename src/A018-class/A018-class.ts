//Observação typescript se um object tiver as mesmas chaves que um outro object eu os considero da mesma forma
//forma longa de class:
export class Empresa {
  public readonly nome: string; //public não é necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  showColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

//Ao criar class eu posso usar elas como types tbm
//forma como atalho de class:
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/001-11');
const colaborador1 = new Colaborador('Bruno', 'Alexandre');
const colaborador2 = new Colaborador('Luis', 'Alexandre');
const colaborador3 = new Colaborador('Carlos', 'Gomes');
empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.addColaborador(colaborador3);
//aqui é o exemplo da observação, pois ele cumpri com as regras do object em referencia:
empresa1.addColaborador({
  nome: 'João',
  sobrenome: 'Lucas',
});
console.log(empresa1);
empresa1.showColaboradores();
