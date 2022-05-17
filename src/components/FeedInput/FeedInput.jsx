import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton, InputAdornment, OutlinedInput } from "@material-ui/core";

import styled from "styled-components";

const StyleOutlinedInput = styled(OutlinedInput)`
  && {
    margin-top: 0.2rem;
  }
`;

export default function FeedInput() {
  return (
    <StyleOutlinedInput
      placeholder="Restaurante"
      startAdornment={
        <InputAdornment position="start">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
}
