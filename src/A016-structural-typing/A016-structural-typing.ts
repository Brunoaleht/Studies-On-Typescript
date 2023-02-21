//no structural typing ele não precisa q o seja exatamente igual ao type User, apenas q tenha as chaves especificadas com o tipo correto
//o typescript so liga para o conteúdo no type, e não para o nome do type em si

type VerifyUserFn = (user: User, sendValue: User) => boolean;
type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUserFn = (user, sendValue) => {
  return (
    user.username === sendValue.username && user.password === sendValue.password
  );
};
const dbUser = {
  username: 'bruno',
  password: '123',
};
const sendUser = {
  username: 'bruno',
  password: '123',
  permission: '', //aqui deixando exibível q não precisa ser exatamente igual ao type User
};
const loggedIn = verifyUser(dbUser, sendUser);
console.log(loggedIn);
