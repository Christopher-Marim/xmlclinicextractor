import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top:200px;
  max-width: 100%;
  background-color: #e3e3e3;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const Box = styled.button`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  border-width: 0px;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  padding: ${px2vw(10)};
  margin: ${px2vw(20)};
  background-color: white;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(300)};
    min-height: ${px2vw(300)};
  }
  &:hover{
    border-width: 1.5px;
    border-color:red;
  }
`;

export const BoxImage = styled.img`
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: white;
  object-fit: contain;


  
`;

export const NameCompany = styled.p`
  display: block;
  position: absolute;
  color:black;
  font-size: ${px2vw(18)};

`;