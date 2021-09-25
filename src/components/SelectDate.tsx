import { useState } from "react";
import { Button, Container, Form, Text,  } from "../styles/selectDate";
import { DatePicker } from "react-rainbow-components";

export function SelectDate() {
  const [startDate, setStartDate] = useState<Date>();
  const [finishDate, setFinishDate] = useState<Date>();

  return (
    <Container>
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
      <Button>Importar XML</Button>
    </Container>
  );
}
