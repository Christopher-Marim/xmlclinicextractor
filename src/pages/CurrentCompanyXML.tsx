import { useEffect, useState } from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useHistory } from "react-router";
import { Header } from "../components/Header";
import { ItemXmlType } from "../components/ItemXml";
import { ListXmls } from "../components/ListXmls";
import { SelectDate } from "../components/SelectDate";
import { useAuth } from "../hooks/auth";
import { useCurrent } from "../hooks/state";
import api from "../services/api";
import { Container, NameCompany } from "../styles/currentCompanyXML";

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

  const { user } = useAuth();
    const history = useHistory();

    const { currentCompany }=useCurrent();
    
    useEffect(() => {
      console.log(user)
       if (!user) {      
        history.push("/");
      }
    },[]);

    async function GetXML(dateStart:Date, dateFinish:Date,){
      const {data} = await api.get('/xmlestruturado')

      console.log(dateStart, dateFinish)

      //Perguntar como devo mandar a data 
      const dataFormatadaStart = ((dateStart.getDate() )) + "/" + ((dateStart.getMonth() + 1)) + "/" + dateStart.getFullYear();
      const dataFormatadaFinish = ((dateFinish.getDate() )) + "/" + ((dateFinish.getMonth() + 1)) + "/" + dateFinish.getFullYear();

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
            <NameCompany>{currentCompany?.nome}</NameCompany>
            <SelectDate callback={GetXML}></SelectDate>     
            <h1>Lista de Xmls</h1>  
            <ListXmls array={listXmls}></ListXmls>    
        </Container>
    );
}