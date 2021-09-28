import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  flex:1;
  display: flex;
  height: 100vh;
  width:100%;
  align-items: stretch;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Image = styled.aside`
  flex:0; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  height: 100vh;
  max-width: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0.6), rgba(0, 0, 0, 0.5)),
    repeating-linear-gradient(
      0,
      transparent,
      transparent 2px,
      black 3px,
      black 3px
    ),
    url("https://www.redflag.com.br/images/about/01.jpg");
  background-size: cover;
  background-position: center;
  z-index: 1;

  @media (min-width: 1024px) {
    flex: 7;
  }
`;

export const Logo = styled.img`
  margin: 90px;
 
`

export const MainContainer = styled.main`
  flex:8; 
  display: flex;
  background-color:#fff;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  max-width: 100%;
 
 
  @media (min-width: 1024px) {
    flex: 8;
    background-color:#fff;
  }
  @media (max-width: 1024px) {
    flex: 8;
    background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.2)),
   
    url("https://www.redflag.com.br/images/about/01.jpg");
  background-size: cover;
  background-position: center;
  
  }
`;

export const FormContainer = styled.form`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width: 100%;
 
`;

export const Input = styled.input`
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      margin:5px;
      background-color: #fff;
      width: 100%;
      max-width:320px;
      border: 2px solid #a8a8b3;
`;
export const Titulo = styled.p`
      font-family: "MuseoModerno", sans-serif;
      color: black;
      font-size: 1.5em;
      letter-spacing: 0.15em;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;
export const Button = styled.button`
      width: 100%;
      max-width:320px;
      border-radius: 8px;
      height: 50px;
      margin-top: 20px;
      color: #fff;
      background-color: #9c0000;
      border: 1px solid #9c0000;

      &:hover {
        filter:brightness(0.8);
      }

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

export const Link = styled.a`
      display: flex;
      font-size: ${px2vw(11)};
      margin-top: 10px;
      width: 100%;
      justify-content: center;
      color:grey;

`;

