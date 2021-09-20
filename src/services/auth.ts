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

  const { data } = await api.get(`/Acessoappcoleta?method=loadAll&usuarioApp=${login}&senhaApp=${senha}`)
  const user = data.data[0]
  console.log(user)
  return new Promise((resolve) => {
    resolve({
      token: `${user?.chave}`,
      user: {
        nome: `${user?.nomeusuario}`,
        login: `${login}`,
        senha: `${senha}`,
      }

    });

  });
}