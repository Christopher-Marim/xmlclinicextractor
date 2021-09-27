import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  flex-direction: column;
  padding: ${px2vw(10)};;
  border: 2px solid gray;
  border-radius:5px;
  width: ${px2vw(500)};
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
   margin: ${px2vw(10)};

   .colorRed{
     color:#9C1111 
    }

    button {
        padding: ${px2vw(7)};
        border-radius: ${px2vw(50)};
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
    font-size: ${px2vw(24)};
    max-width: 200px;
    padding: ${px2vw(15)};
    border-right: ${px2vw(1)} solid gray;
    margin-right: ${px2vw(-60)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
 `;
 export const Form = styled.form`
 display:flex;
 flex-direction: column;
  align-items: stretch;
   
 `;
    
export const Info = styled.p`
  font-size: ${px2vw(15)};
  padding: ${px2vw(2)};
  
  
`;
    
export const Version = styled.p`

 color:gray;
 font-size: ${px2vw(12)};
`;
    
