import { useState } from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useHistory } from "react-router";
import { Header } from "../components/Header";
import { ItemXmlType } from "../components/ItemXml";
import { ListXmls } from "../components/ListXmls";
import { SelectDate } from "../components/SelectDate";
import { useCurrent } from "../hooks/state";
import api from "../services/api";
import { Container } from "../styles/currentCompanyXML";

interface Response {
  id:string,
  cliente_id:string;
  datacriacao:string;
  versao:string;
  solicitante:string;
  dataconsultainicio:string;
  dataconsultafim:string;
  xml:string;
}


export function CurrentCompanyXML(){

  const [listXmls,setlistXmls] = useState<ItemXmlType[]>([]);

    const history = useHistory();

    const { currentCompany }=useCurrent()

    async function GetXML(){
      const {data} = await api.get('/xmlestruturado')

      let date = new Date();
    let dataFormatada = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();

      const auxList = data.data.map((item:Response)=>{
         const obj:ItemXmlType = {
            id:item.id,
            company:currentCompany?.nome?currentCompany?.nome:'',
            dateSolicitation:dataFormatada,
            dateFinish:item.dataconsultafim,
            dateBegin:item.dataconsultainicio,
            responsable:item.solicitante,
            version: item.versao,
            xml:item.xml
         }
         return obj;
       })

       setlistXmls(auxList);
    }

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
            <SelectDate callback={GetXML}></SelectDate>     
            <h1>Lista de Xmls</h1>  
            <ListXmls array={listXmls}></ListXmls>    
        </Container>
    );
}