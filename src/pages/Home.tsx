import { useEffect } from "react";
import { useHistory } from "react-router";
import { Header } from "../components/Header";
import { ListClients } from "../components/ListClients";
import { useAuth } from "../hooks/auth";
import { Container } from "../styles/home";

export function Home() {
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    console.log(user)
     if (!user) {      
      history.push("/");
    }
  },[]);

  return (
    <Container>
      <Header />
      <ListClients />
    </Container>
  );
}
