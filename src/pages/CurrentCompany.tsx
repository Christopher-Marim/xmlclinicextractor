

import React, { useCallback, useState } from "react";
import { AiOutlineCheckCircle, AiFillDiff } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import {
  Container,
  FormButton,
  FormInput,
  FormP,
  FormWrapper,
} from "../styles/currentCompany";
import { Header } from "./../components/Header";

export function CurrentCompany() {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [classNameForm, setClassNameForm] = useState<string>("header");
  const [classNameP, setClassNameP] = useState<string>("header");
  const [columns, setColumns] = useState<any>([]);
  const [data, setData] = useState<any>([]);

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
      setFile(data);
      console.log(data);
    };
    reader.readAsBinaryString(file);
  };

  const onDrop = useCallback(
    (files) => {
      console.log(files);
      setFileName(files[0].name);
      setClassNameForm('complete')
      setClassNameP('completeP')
      handleFileUpload(files[0]);
    },
    [handleFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
    });

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
    setColumns(columns);
  };

  return (
    <Container>
      <Header />
      <FormWrapper className={classNameForm} {...getRootProps()} action="upload.php" method="POST">
        <FormInput {...getInputProps()} type="file" />
        {!file ? (
          <div className="wrapper">
          <AiFillDiff color={'#7d7d7d'} size={70}/>
          <FormP>Arraste o arquivo CSV para essa área ou click nela.</FormP>
          </div>
        ) : (
          <div className="wrapper">
          <AiOutlineCheckCircle color="#117A60" size={70}/>
          <FormP className={classNameP}>{`Arquivo ${fileName} carregado com sucesso!!`}</FormP>
          </div>
        )}
        <FormButton type="submit">Upload</FormButton>
      </FormWrapper>
      {/*  <DataTable
          pagination
          highlightOnHover
          columns={columns}
          data={data}
        /> */}
    </Container>
  );
}
