import styled from "styled-components";
import Card from "../../../Components/Card";
import {useUserData} from "../../../Hooks/useUserData";
import {ListField} from "./ListField";

const MainStyle = styled.main`
  grid-area: main;
  margin: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;

  > * {
    flex: 0;
    flex-basis: 100%;
  }

  @media (min-width: 660px) {
    > * {
      flex-basis: calc((100% - 10px) / 2);
    }
  }

  @media (min-width: 760px) {
    > * {
      flex-basis: calc((100% - 20px) / 3);
    }
  }

  @media (min-width: 1024px) {
    > * {
      flex-basis: calc((100% - 30px) / 4);
    }
  }
`

export function Main() {
    const {state} = useUserData()
    return (
        <MainStyle>
            {state && state.map(({id, title}) => (
                <Card key={id}>
                    <ListField key={id} type={"list"} value={{title}}/>
                </Card>
            ))}
        </MainStyle>
    )
}