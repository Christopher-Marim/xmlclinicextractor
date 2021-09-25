import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  display: flex;
  margin-top: 140px;
  justify-content: space-between;
  flex-direction: column;
  padding: ${px2vw(10)};;
  border: 2px solid gray;
  width: ${px2vw(350)};
  align-items: center;
  background: white;
  
`;
    
export const Form = styled.div`
    .groupInput{
      display:flex;   
      flex-direction:column;
      justify-content:center;
      align-items: stretch;
    }
 
    .containerInput{
      display: flex;
      justify-content:flex-end;
      align-items: stretch;
      padding: ${px2vw(10)} 0px;
      margin-top: ${px2vw(5)};;
      flex-direction: column;      
     }
`;

export const Text = styled.p`
 
  
`;


export const Button = styled.button`
    font-size: ${px2vw(12)};
    width: ${px2vw(250)};
    margin: ${px2vw(20)};
    padding: ${px2vw(8)};
    border-radius: ${px2vw(50)};
    border-width: 0px;
    background-color: #9C1111;
    color: #fff;

    &:hover{
        filter:grayscale(0.2)
    }

`;