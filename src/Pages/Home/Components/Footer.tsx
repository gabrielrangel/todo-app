import styled from "styled-components";
import {IoIosHeartEmpty} from "react-icons/io"

const Style = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vh 0 5vh 0;

  &, * {
    font-weight: 400;
    color: ${({theme}) => theme.contrast}99;
    cursor: default;
    font-size: .8rem;
    vertical-align: center;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
`

export function Footer() {
    return (
        <Style>
            <div>Designed with <IoIosHeartEmpty/> by Gabriel Rangel</div>
            <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26"
                                  title="Icongeek26"
                                  target="_blank">Icongeek26</a> from <a href="https://www.flaticon.com/"
                                                                         title="Flaticon">www.flaticon.com</a></div>
        </Style>
    )
}