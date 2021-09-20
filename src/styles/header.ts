import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const HeaderContainer = styled.div`
display: flex;
justify-content: center;
    position: fixed;
    width: 100%;
    height: 250px;
    font-weight: bold;
    align-items: center;
    text-align: center;
    background: white;
    transition: .3s;
    // header shrinks when .small added to .header
    &.small {
      height: 100px;
      box-shadow: 0 10px 10px rgba(black, .2);
      // when header.small also change page offset
      & ~ .offset {
        padding-top: 140px;
      }
      .headerLogo {
        height: 60px;
        text-shadow: none;
        
      }
      }

      &.none {
      height: 0px;

      .headerLogo {
        height: 0px;
        text-shadow: none;
        
      }
      }
 
`;
export const HeaderName = styled.h1`
    margin: 0;
    font-size: 50px;
    text-shadow: 3px 4px rgba(black, .1);
    transition: .3s;
 
`;
export const Logo = styled.img`
    
`;
