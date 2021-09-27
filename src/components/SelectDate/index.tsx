import { useState } from "react";
import { Button, Container, Form, Text,  } from "./styles";
import { DatePicker } from "react-rainbow-components";

interface Props {
  callback(startDate:Date, finishDate:Date):void;
}

export function SelectDate({callback}:Props) {
  const [startDate, setStartDate] = useState<Date>();
  const [finishDate, setFinishDate] = useState<Date>();

  function CallbackResponse(){
    if(startDate&&finishDate){
      callback(startDate, finishDate)
    }
    else{
      alert('Preencha todos os campos de data')
    }
  }

  return (
    <Container>
      <h1>Buscar por Xmls</h1>  
      <Form>
        <div className="groupInput">
          <div className="containerInput">           
            <DatePicker
              id="datePicker-1"
              value={startDate}
              onChange={setStartDate}
              placeholder="Selecione uma data"
              label="Data inicial"
              formatStyle="medium"
            />
          </div>
          <div className="containerInput">           
            <DatePicker
              id="datePicker-1"
              value={finishDate}
              placeholder="Selecione uma data"
              onChange={setFinishDate}
              label="Data final"
              formatStyle="medium"
            />
          </div>
        </div>
      </Form>
      <Button onClick={CallbackResponse}>Importar XML</Button>
    </Container>
  );
}
