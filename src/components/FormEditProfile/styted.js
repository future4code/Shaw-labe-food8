import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { primaryColor } from "../../constants/color";

export const StyledTextField = styled(TextField)`
  width: 20.5rem;
  height: 3.5rem;
  margin: 0.5rem 0 0;
  padding: 1.188rem 3rem 1.188rem 1rem;
  border-radius: 2px;
`;
export const StyledButton = styled.button`
  width: 20.5rem;
  height: 2.625rem;
  padding: 0.75rem 1rem;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  background-color: ${primaryColor};
  cursor: pointer;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 70px 0;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;
