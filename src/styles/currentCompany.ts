import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #e3e3e3;

  .wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  
`;


export const FormP = styled.p`
  
    width: 100%;
    margin-top: -50px;
    height: 100%;
    text-align: center;
    line-height: 170px;
    color: gray;
    font-family: Arial;
    font-size: 18px;

    &.completeP {
        color:#117A60;
        font-size: 18px;
      }
  
`;
export const FormInput = styled.input`
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
  
`;
export const FormButton = styled.button`
    margin: 0;
    color: #fff;
    background: #9c0000;
    border: none;
    width: 508px;
    height: 35px;
    margin-top: -20px;
    margin-left: -4px;
    border-radius: 4px;
    border-bottom: 4px solid #9c0000;
    transition: all .2s ease;
    outline: none;

    &:hover{
    filter: brightness(0.8);
  }
  
  &:active{
    border:0;
  }
`;

export const FormWrapper = styled.form`
  background-color: #fff;
    margin-top: 140px;
    width: 500px;
    height: 200px;
    border: 4px dashed gray;

    &.complete {
        border: 4px dashed #117A60;
      }
`;
