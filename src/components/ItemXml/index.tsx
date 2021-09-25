
import {Container, Form, Info, NameCompany, Version, Wrapper } from "./styles";
import { BsDownload } from "react-icons/bs";
import px2vw from "../../utils/px2vw";

export interface ItemXmlType{
    id:string;
    company:string;
    dateSolicitation:string;
    responsable:string;
    dateBegin:string;
    dateFinish:string;
    version:string;
    xml:string
}

export function ItemXml({dateSolicitation,responsable, dateBegin, dateFinish, version, xml,company}:ItemXmlType) {

  return (
   <Container>
      <Wrapper>
        <NameCompany>{company}</NameCompany>
        <Form>
          <Info className={"colorRed"}>
            <strong>Solicitado</strong> {dateSolicitation}
          </Info>
          <Info>
            <strong>Solicitante</strong> {responsable}
          </Info>
          <Info>
            <strong>Periodo</strong> {dateBegin} - {dateFinish}
          </Info>
        </Form>
        <div>
          <button>
            <BsDownload size={px2vw(25)} />
          </button>
          <Version>v{version}</Version>
        </div>
      </Wrapper>
      </Container>
  );
}
