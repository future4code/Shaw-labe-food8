import React, { useState } from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core";

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
  // const [value, setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <StyleAppBar>
      {props.arryCategory.map((category, idx) => {
        return (
          <Tabs
            key={idx}
            href={`#${category}`}
            onClick={() => props.getCategory(category)}
            variant="scrollable"
            indicatorColor="none"
            textColor="secondary"
          >
            {category}
          </Tabs>
        );
      })}
      {/* <Tabs value={value} onChange={handleChange} variant="scrollable">
        <Tab label="Burguer" />
        <Tab label="Asiatica" />
        <Tab label="Massas" />
        <Tab label="Saudaveis" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs> */}
    </StyleAppBar>
  );
}
