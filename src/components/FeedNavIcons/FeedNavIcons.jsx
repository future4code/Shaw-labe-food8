import { Tab, Tabs } from "@material-ui/core";
import * as React from "react";

import HomeOutlinedIcon from "@material-ui/icons/Home";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCart";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentity";

export function FeedNavIcons() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab icon={<HomeOutlinedIcon />} />
      <Tab icon={<ShoppingCartOutlinedIcon />} />
      <Tab icon={<PermIdentityOutlinedIcon />} />
    </Tabs>
  );
}
