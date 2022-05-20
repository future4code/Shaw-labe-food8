import React from "react";
import { AppBar, Tabs } from "@material-ui/core";

import styled from "styled-components";

const StyleAppBar = styled(AppBar)`
  && {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    max-width: 100%;
  }
`;

export default function NavMenu(props) {
  return (
    <StyleAppBar>
      {props.arryCategory.map((category, idx) => {
        return (
          <Tabs
            key={idx}
            href={`#${category}`}
            onClick={() => props.getCategory(category)}
            variant="scrollable"
            textColor="secondary"
            indicatorColor="none"
          >
            {category}
          </Tabs>
        );
      })}
    </StyleAppBar>
  );
}
