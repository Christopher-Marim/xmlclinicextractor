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

export function Login() {
  return (
    <Container>
      <Image>
      </Image>
      <MainContainer>
      <Logo src={`https://www.redflag.com.br/images/logo-wide@2x.png`}/>
      <FormContainer>
        <Titulo>Login</Titulo>
        <Input
          type="text"
          placeholder="Email"
        />
        <Input
          type="text"
          placeholder="Senha"
        />
        <Button>Entrar</Button>
      <Link href="http://www.etm.srv.br/" target="_blank">Preciso de ajuda</Link>
      </FormContainer>
      <div></div>
      <div></div>
      </MainContainer>
    </Container>
  );
}
