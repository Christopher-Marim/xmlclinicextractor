import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useCurrent } from "../hooks/state";
import api from "../services/api";
import { Box,  Container,   } from "../styles/listClients";

export interface Cliente {
  id: string;
  nome: string;
  cnpj_cpf: string;
  logocliente: string;
}

export function ListClients() {
  const history = useHistory();
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const { setCompany } = useCurrent();


  useEffect(() => {
    async function getClients() {
      const response = await api.get("/cliente");
      const clientes = response.data.data;
      setClientes(clientes);
    }
    getClients();
  }, []);

  function handleClik(cliente:Cliente) {
    setCompany(cliente);
    history.push("/pages/currentCompany");
  }
  return (
    <Container>
      {clientes.map((cliente) => (
        <Box key={cliente.id} >
           <div className="post">
        <div className="header_post">
            <img src={cliente.logocliente?cliente.logocliente:'https://www.redflag.com.br/images/about/01.jpg'} alt=""/>
        </div>

        <div className="body_post">
            <div className="post_content">

                <h1>{cliente.nome}</h1>
                <p>{`CNPJ: ${cliente.cnpj_cpf}`}</p>

                <div className="container_infos">
                    <div className="postedBy">
                        <button onClick={()=>handleClik(cliente)}>Enviar CSV</button>
                    </div>

                    <div className="container_tags">
                        <div className="postedBy">
                        <button>Visualizar XML</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
        </Box>
      ))}

    </Container>
  );
}
