import React, { useCallback, useEffect, useState } from "react";
import {
  AiOutlineCheckCircle,
  AiFillDiff,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import {
  Container,
  FormButton,
  FormInput,
  FormP,
  FormWrapper,
  NameCompany,
  Table,
  Wrapper,
} from "../styles/currentCompanyCSV";
import { Header } from "../components/Header";

import DataTable from "react-data-table-component";
import { FilterComponent } from "../components/FilterComponent";
import { useCurrent } from "../hooks/state";
import { Cliente } from "../components/ListClients";
import { exit } from "process";
import api from "../services/api";
import { Loader } from "../components/Loader";
import { useHistory } from "react-router";
import { useAuth } from "../hooks/auth";

interface ResponseCSV {
  cpf: string;
  nome: string;
  codPessoa: string;
  chapa: string;
}

export function CurrentCompanyCSV() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState<Cliente | null>();
  const [fileName, setFileName] = useState("");
  const [classNameForm, setClassNameForm] = useState<string>("header");
  const [classNameP, setClassNameP] = useState<string>("header");
  const [columns, setColumns] = useState<any>([]);
  const [data, setData] = useState<ResponseCSV[]>([]);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const { currentCompany } = useCurrent();

  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    setCompany(currentCompany);
  }, []);


  useEffect(() => {
    if (!user) {      
      history.push("/");
    }
    if (!currentCompany) {      
      history.push("/pages/home");
    }
  },[]);

  // handle file upload
  const handleFileUpload = (file: any) => {
    const reader = new FileReader();
    reader.onload = (evt: any) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws);
      processData(data);
    };
    reader.readAsBinaryString(file);
  };

  const onDrop = useCallback(
    (files) => {
      setError(false);
      setFileName(files[0].name);
      setClassNameForm("complete");
      setClassNameP("completeP");
      handleFileUpload(files[0]);
    },
    [handleFileUpload]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // process CSV data
  const processData = (dataString: string) => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(
      /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
    );

    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(
        /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
      );
      if (headers && row.length == headers.length) {
        const obj: any = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] == '"') d = d.substring(1, d.length - 1);
            if (d[d.length - 1] == '"') d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter((x) => x).length > 0) {
          list.push(obj);
        }
      }
    }

    // prepare columns list from headers
    const columns = headers.map((c) => ({
      name: c,
      selector: c,
    }));

    setData(list);
    list.map((item: ResponseCSV) => {
      if (
        item.nome.trim().length == 0 ||
        item.chapa.trim().length == 0 ||
        item.codPessoa.trim().length == 0 ||
        item.cpf.trim().length == 0
      ) {
        setError(true);
        return;
      }
    });
    setColumns(columns);
  };
  const filteredItems = data.filter(
    (item: ResponseCSV) =>
      item.nome && item.nome.toLowerCase().includes(filterText.toLowerCase())
  );
  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    }
  };

  async function HandleClickUpload() {
    if (error) {
      alert("Upload negado! Existem valores nulos na tabela, favor verificar.");
    } else {
      setLoading(true);
      for (const pessoa of data) {
        try {
          const response = await api.post(
            `/funcionario?cpf=${pessoa.cpf}&nome=${pessoa.nome}&codpessoa=${pessoa.codPessoa}&chapa=${pessoa.chapa}&cliente_id=${company?.id}`
          );
        } catch (error) {
          alert("Erro ao fazer Upload");
          setLoading(false);
          throw "exit";
        }
      }
      setLoading(false);
    }
  }

  const conditionalRowStyles = [
    {
      when: (row: ResponseCSV) =>
        row.nome.length == 0 ||
        row.cpf.length == 0 ||
        row.codPessoa.length == 0 ||
        row.chapa.length == 0,
      style: {
        backgroundColor: "rgba(242, 38, 19, 0.9)",
        color: "white",
        "&:hover": {
          cursor: "not-allowed",
        },
      },
    },
  ];

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
          <Wrapper>
            <NameCompany>{company?.nome}</NameCompany>
            <FormWrapper
              className={classNameForm}
              {...getRootProps()}
              action="upload.php"
              method="POST"
            >
              <FormInput {...getInputProps()} type="file" />
              {data.length == 0 ? (
                <div className="wrapper">
                  <AiFillDiff color={"#7d7d7d"} size={70} />
                  <FormP>
                    Arraste o arquivo CSV para essa área ou click nela.
                  </FormP>
                </div>
              ) : (
                <div className="wrapper">
                  <AiOutlineCheckCircle color="#117A60" size={70} />
                  <FormP
                    className={classNameP}
                  >{`Arquivo ${fileName} carregado com sucesso!!`}</FormP>
                </div>
              )}
            </FormWrapper>
            {data.length > 0 && (
              <>
                <FilterComponent
                  onFilter={(e: any) => setFilterText(e.target.value)}
                  onClear={handleClear}
                  filterText={filterText}
                />
                <span>
                  {error
                    ? "Existem valores nulo na tabela, favor verificar!"
                    : ""}
                </span>
                <Table>
                  <p className="titulo">Tabela de {fileName}</p>
                  <DataTable
                    highlightOnHover
                    columns={columns}
                    data={filteredItems}
                    paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                    subHeader
                    conditionalRowStyles={conditionalRowStyles}
                    persistTableHead
                  />
                </Table>
                <FormButton
                  style={{
                    background: error ? "#9c0000" : "#117A60",
                  }}
                  onClick={HandleClickUpload}
                  type="submit"
                >
                  {error ? "CSV inválido" : "Fazer upload"}
                </FormButton>
              </>
            )}
          </Wrapper>
        </Container>
      )}
    </>
  );
}
