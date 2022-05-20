import { Typography } from "@material-ui/core";
import React from "react";

export default function OrderCard(props) {
  const date = new Date(props.date);
  let options = { day: "numeric", month: "long", year: "numeric" };
  const newDate = date.toLocaleDateString("pt-PT", options);
  const formatDate = newDate.split("de ");

  return (
    <div>
      <Typography variant="body1" color="secondary">
        {props.restaurantName}
      </Typography>
      <Typography variant="body1">{formatDate}</Typography>
      <Typography variant="body1">
        SUBTOTAL R${props.totalPrice.toFixed(2)}
      </Typography>
    </div>
  );
}
