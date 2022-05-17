import { FeedItem } from "../../components/FeedItem/FeedItem";
import styled from "styled-components";
import Input from "../../components/Input/Input";
import NavMenu from "../../components/NavMenu/NavMenu";
import { NavIcons } from "../../components/NavIcons/NavIcons";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function FeedPage() {
  return (
    <StyledContainer>
      <Input />

      <NavMenu />

      <FeedItem />
      <FeedItem />
      <FeedItem />

      <NavIcons />
    </StyledContainer>
  );
}
