import { Container, Form, Info, NameCompany, Version, Wrapper } from "./styles";
import { BsDownload } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import px2vw from "../../utils/px2vw";
import { useEffect, useRef, useState } from "react";

export interface ItemXmlType {
  id: string;
  company: string;
  dateSolicitation: string;
  responsable: string;
  dateBegin: string;
  dateFinish: string;
  version: string;
  xml: string | null;
}

export function ItemXml({
  dateSolicitation,
  responsable,
  dateBegin,
  dateFinish,
  version,
  xml,
  company,
}: ItemXmlType) {
  const [file, setFile] = useState<string>();

  let refA = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    refA.current?.click();
  }, [file]);

  function downloadFile() {
    if(xml!=null){
      const fileDownloadUrl = URL.createObjectURL(new Blob([xml]));
      setFile(fileDownloadUrl);
    }
  }

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
          {xml?(
            <>
            <button onClick={downloadFile}>
              <BsDownload size={25} />
            </button>
            <a download={"ExportXML.xml"} href={file} ref={refA}></a>
            </>
          ):(
            <>
            <FiAlertTriangle className='iconAlert' size={25}  color={'#888'}/>
            <p className='hide'>Esperando retorno do XML!</p>
            </>
          )}
          <Version>v{version}</Version>
        </div>
      </Wrapper>
    </Container>
  );
}
