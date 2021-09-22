import { IoReturnUpBackOutline } from "react-icons/io5";
import { useHistory } from "react-router";
import { Header } from "../components/Header";
import { Container } from "../styles/currentCompanyXML";


export function CurrentCompanyXML(){

    const history = useHistory();

    return(
        <Container>
            <Header>
            <IoReturnUpBackOutline
              className={"icon"}
              size={50}
              color={"#000"}
              onClick={() => {
                history.goBack();
              }}
            ></IoReturnUpBackOutline>
            </Header>
        </Container>
    );
}