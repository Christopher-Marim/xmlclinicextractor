import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  margin: 10px 0px;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  border: 2px solid gray;
  border-radius:5px;
  width:${px2vw(500)};
  min-width: 450px;
  align-items: center;
  background: white;
 
  &:hover{
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            transition: ease-in-out 100ms;
        }
  
`;


export const Wrapper = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
   margin: 10px;

   .colorRed{
     color:#9C1111 
    }

    .hide {
    display: none;
    font-size: 14px;

  &:hover {
        display: block;
        position: absolute;
        background-color: white;
        padding: 5px;
        border: 1px solid gray;
        border-radius: 10px;
        color:gray;
        transition: ease-in 1000ms;
      
      } 
}

    .iconAlert{
      height: auto;
      &:hover  + .hide{
        display: block;
        position: absolute;
        background-color: white;
        padding: 5px;
        border: 1px solid gray;
        border-radius: 10px;
        color:gray;
        transition: ease-in 1000ms;
      
      } 
    }

    button {
        border-radius:50px;
        background-color: transparent;
        border-width: 0px;
        cursor: pointer;
        
        &:hover{
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            transition: ease-in-out 350ms;
        }
    }

    div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    }
 
  
`;
export const NameCompany = styled.p`
    font-size: 25px;
    min-width:100px;
    width: ${px2vw(200)};
    max-width: 200px;
    padding: 13px;
    border-right: ${px2vw(1)} solid gray;
    margin-right: -20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 1024px) {
    font-size: 18px;
    margin-right: -40px;
    }
    @media (min-width: 1600px) {
      font-size: 25px;
    margin-right: -100px;
  }
 `;
export const Form = styled.form`
 display:flex;
 flex-direction: column;
  align-items: stretch;
   
 `;

export const Info = styled.p`
  font-size: 15px;
  padding: 2px;
  
  
`;

export const Version = styled.p`

 color:gray;
 font-size: 14px;
`;

