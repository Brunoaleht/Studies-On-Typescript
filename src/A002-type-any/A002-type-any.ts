//Vc não vai querer em seu código coisas com o type any, pois abri a possibilidade de alguns erros
//quando se passa um tipo any é importante explicitar.
//Utilize any apenas em ultimo caso
function showMsg(msg: any) {
  return msg;
}
console.log(showMsg([1, 2, 3]));
console.log(showMsg({ A: 1, B: 2, C: 3 }));
console.log(showMsg('Ola mundo'));
console.log(showMsg(1));
