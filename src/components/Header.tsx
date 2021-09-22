import { useState } from "react";
import {
  HeaderContainer,
  HeaderName,
  Logo,
} from "../styles/header";

interface Props {
  children?:JSX.Element
}

export function Header({children}:Props) {
  window.onscroll = () => navbarScroll();

  const [classNameText, setClassNameText] = useState<string>("small");

  function navbarScroll() {
    var y = window.scrollY;
    if (y > 10 && y < 20) {
      setClassNameText("none");
    } else if (y < 10) {
      setClassNameText("small");
    }
  }

  return (
    <HeaderContainer className={classNameText}>
      {classNameText=='small'?children?children:<div></div>:<div></div>}
      <HeaderName>
        <Logo
          className="headerLogo"
          src={`https://www.redflag.com.br/images/logo-wide@2x.png`}
        ></Logo>
      </HeaderName>
      <div/>
    </HeaderContainer>
  );
}
