//interfaces é para modelar os types de um object
interface TypeName {
  name: string;
}
interface TypeLastName {
  lastName: string;
}
interface TypeNameComplete {
  nameComplete(): string;
}
//Isso aqui eu não consigo fazer por interface, pois ele não está modelando um object:
type TypePerson = TypeName & TypeLastName & TypeNameComplete;

//Mas é possível extender um interface:
interface TypePerson2 extends TypeName, TypeLastName, TypeNameComplete {} //E isso funciona da mesma maneira q o TypePerson

//Para por um type ou um interface em uma class se usa "implements"
export class Pessoa implements TypePerson2 {
  constructor(public name: string, public lastName: string) {}
  nameComplete(): string {
    return this.name + ' ' + this.lastName;
  }
}

const pessoaObj: TypePerson2 = {
  name: 'Bruno',
  lastName: 'Lucas',
  nameComplete(): string {
    return this.name + ' ' + this.lastName;
  },
};
const pessoa1 = new Pessoa('Bruno', 'Alexandre');
console.log(pessoa1.nameComplete());
console.log(pessoaObj.nameComplete());
