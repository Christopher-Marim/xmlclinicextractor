import api from "./api";

interface Response {
  token: string;
  user: {
    nome: string,
    login: string,
    senha: string,
  };
}
interface RequestSignIn {
  login: string,
  senha: string
}

export async function signIn({ login, senha }: RequestSignIn): Promise<Response> {
  console.log(login, senha)

  //const { data } = await api.get(`/acessoapp?method=loadAll&usuarioApp=${login}&senhaApp=${senha}`)
  //const user = data.data[0]
  //console.log(user)
  return new Promise((resolve) => {
    setTimeout(() => {resolve({
     // token: `${user?.chave}`,
     token:'12345698asdas51d6a5s4d',
      /* user: {
        nome: `${user?.nome}`,
        login: `${login}`,
        senha: `${senha}`,
      } */
      user:{
        nome: 'Christopher marim',
        login: `${login}`,
        senha: `${senha}`,
      }
    });}, 2000)
    
  });
}