import * as React from "react";
import { Tab, Tabs } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import HomeOutlinedIcon from "@material-ui/icons/Home";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCart";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentity";

import styled from "styled-components";

export const StyleBorder = styled.div`
  width: 100%;
  border-top: 1px solid #b8b8b8;
`;

export default function FooterMenu() {
  const navigate = useNavigate();

  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    // <Tabs value={value} onChange={handleChange}>
    <>
      {/* <StyleBorder /> */}
      <Tabs>
        <Tab icon={<HomeOutlinedIcon />} onClick={() => navigate("/home")} />
        <Tab
          icon={<ShoppingCartOutlinedIcon />}
          onClick={() => navigate("/cart")}
        />
        <Tab
          icon={<PermIdentityOutlinedIcon />}
          onClick={() => navigate("/perfil")}
        />
      </Tabs>
    </>
  );
}
