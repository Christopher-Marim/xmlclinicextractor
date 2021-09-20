import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Loader } from "../components/Loader";
import { useAuth } from "../hooks/auth";
import api from "../services/api";
import {
  Button,
  Container,
  FormContainer,
  Image,
  Input,
  Link,
  Logo,
  MainContainer,
  Titulo,
} from "../styles/login";

interface InputProps extends React.ChangeEvent<HTMLInputElement> {}

interface RequestSignIn {
  login: string;
  senha: string;
}

export function Login() {
  const [loginText, setLoginText] = useState<string>("");
  const [passwordText, setPasswordText] = useState<string>("");

  const history = useHistory();
  const { signIn, user, loading } = useAuth();

  function ChangeTextLogin(event: InputProps) {
    const text = event.target.value;
    setLoginText(text);
  }
  function ChangeTextPassoword(event: InputProps) {
    const text = event.target.value;
    setPasswordText(text);
  }

  useEffect(() => {
    if (user) {
      history.push("/pages/home");
    }
  }, []);

  async function HandleClickLogin() {
    const login = {
      login: loginText,
      senha: passwordText,
    };
    await signIn(login);
    history.push("/pages/home");
  }

  return (
    <>
      {loading && <Loader />}

      <Container>
        <Image></Image>
        <MainContainer>
          <Logo src={`https://www.redflag.com.br/images/logo-wide@2x.png`} />
          <FormContainer>
            <Titulo>Login</Titulo>
            <Input
              onChange={ChangeTextLogin}
              value={loginText}
              type="text"
              placeholder="Email"
            />
            <Input
              onChange={ChangeTextPassoword}
              value={passwordText}
              type="text"
              placeholder="Senha"
            />
            <Button type="button" onClick={HandleClickLogin}>
              Entrar
            </Button>
            <Link href="http://www.etm.srv.br/" target="_blank">
              Preciso de ajuda
            </Link>
          </FormContainer>
          <div></div>
          <div></div>
        </MainContainer>
      </Container>
    </>
  );
}
