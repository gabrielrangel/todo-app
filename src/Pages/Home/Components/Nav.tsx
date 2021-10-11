import styled from "styled-components";
import Card from "../../../Components/Card";
import Logo from "../../../Components/Logo";

const NavStyle = styled.nav`
  grid-area: nav;
  margin: 10px;

  ${Card} {
    height: 100%;
    background-color: transparent;
  }

  @media (min-width: 760px) {
    margin: 0;
    
    ${Card}{
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`

export function Nav() {
    return (
        <NavStyle>
            <Card>
                <Logo/>
            </Card>
        </NavStyle>
    )
}