import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #e3e3e3;

  .wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  .icon{
    margin-left: 20px;

    &:hover{
      background-color: #ddd;
      border-width: 2px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
      border-radius: 100px;
      transition: ease-in-out 400ms;
    }
  }
`;
export const NameCompany = styled.h1`
  font-size:20px;
  font-weight: bold;
  font-family: 'Lato', Times, serif;
  margin: 20px;
`;
