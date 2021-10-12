import styled from "styled-components";

type CardProps = {
    alpha?: string,
    divider?: boolean
}

export default styled.div<CardProps>`
  background-color: ${({theme}) => theme.secondaryColor}DD;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap !important;

  content: "";

  ${({divider, theme}) => divider && `
    * + *:not(:last-child) {:
      after {
        content: "";
        width: 100%;
        border: solid 1px ${theme.primaryColor};
      }
    }
  `}
}
`