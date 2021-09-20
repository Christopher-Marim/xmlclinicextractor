import { useState } from "react";
import {
  HeaderContainer,
  HeaderName,
  Logo,
} from "../styles/header";

export function Header() {
  window.onscroll = () => navbarScroll();

  const [classNameText, setClassNameText] = useState<string>("header");

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
      <HeaderName>
        <Logo
          className="headerLogo"
          src={`https://www.redflag.com.br/images/logo-wide@2x.png`}
        ></Logo>
      </HeaderName>
    </HeaderContainer>
  );
}
