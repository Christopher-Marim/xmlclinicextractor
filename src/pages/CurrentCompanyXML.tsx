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
import { Loader } from './../components/Loader';

interface Response {
  id: string;
  cliente_id: string;
  datacriacao: string;
  versao: string;
  solicitante: string;
  dataconsultainicio: string;
  dataconsultafim: string;
  xml: string;
}

export function CurrentCompanyXML() {
  const [listXmls, setlistXmls] = useState<ItemXmlType[]>([]);
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const { currentCompany } = useCurrent();
  const history = useHistory();

  useEffect(() => {
    if (!currentCompany) {
      history.push("/pages/home");
    }
    GetXML();
  }, []);

  function reformatDate(dateStr: string) {
    var dArr = dateStr.split("-"); //  "2020-01-18"
    return dArr[2] + "/" + dArr[1] + "/" + dArr[0]; // "18/01/2020"
  }

  async function GetXML() {
    setLoading(true);
    try {
      let date = new Date();

      const { data } = await api.get(
        `/xmlestruturado?method=loadXmlClienteId&clienteId=${currentCompany?.id}`
      );

      if (data.data) {
        let dataFormatada =
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear();

        const auxList: ItemXmlType[] = await data.data.map((item: Response) => {
          
          const obj: ItemXmlType = {
            id: item.id,
            company: currentCompany?.nome ? currentCompany?.nome : "",
            dateSolicitation: reformatDate(item.datacriacao),
            dateFinish: reformatDate(item.dataconsultafim),
            dateBegin: reformatDate(item.dataconsultainicio),
            responsable: item.solicitante,
            version: item.versao,
            xml: item.xml,
          };
          return obj;
        });

        setlistXmls(auxList.reverse());
      }
    } catch (error) {
      console.error(error);
    }
    finally{
      setLoading(false)
    }
  }

  async function PostXML(dateStart: Date, dateFinish: Date) {
    setLoading(true);
    let date = new Date();

    const dataFormatadaStart =
      dateStart.getFullYear() +
      "-" +
      (dateStart.getMonth() + 1) +
      "-" +
      dateStart.getDate();
    const dataFormatadaFinish =
      dateFinish.getFullYear() +
      "-" +
      (dateFinish.getMonth() + 1) +
      "-" +
      dateFinish.getDate();
    const DateNow =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    try {
      await api.post(
        `/xmlestruturado?cliente_id=${currentCompany?.id}&datacriacao=${DateNow}&versao=1&solicitante=${user?.nome}&dataconsultainicio=${dataFormatadaStart}&dataconsultafim=${dataFormatadaFinish}&processado=0`
      );
      GetXML();
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  return (
    <>
    {loading && <Loader />}
    <Container style={{display:loading? 'none':'flex'}}>
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
      <SelectDate callback={PostXML}></SelectDate>
      <h1>Lista de Xmls</h1>
      <ListXmls array={listXmls}></ListXmls>
    </Container>
    </>
  );
}
