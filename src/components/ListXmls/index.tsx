import { useState } from "react";
import { Container } from "./styles";
import { BsDownload } from "react-icons/bs";
import px2vw from "../../utils/px2vw";
import { ItemXml, ItemXmlType } from "../ItemXml";

interface Props {
  array: ItemXmlType[];
}

export function ListXmls({ array }: Props) {
  return (
    <Container>
      {array.map((item) => (
        <ItemXml key={item.id} {...item}></ItemXml>
      ))}
    </Container>
  );
}
