import { Button, Card, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { addFoodCart, RemoveFoodCart } from "./script";
import { CountContainer, Image, InfoContainer } from "./styled";

export default function CartItem(props) {
  const [display, setDisplay] = useState(true);
  const [showCount, setShowCount] = useState(false);
  const [count, setCount] = useState(0);
  const [select, setSelect] = useState(false);

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  useEffect(() => {
    if (count > 0) {
      setShowCount(true);
      setDisplay(false);
    } else {
      setShowCount(false);
      setDisplay(true);
    }
    if (props.onClick) {
      setShowCount(true);
      setDisplay(false);
    }
  }, [count, props.onClick]);

  return (
    <Card elevation={3}>
      <CountContainer display={showCount}>
        {props.count ? props.count : count}
      </CountContainer>
      <Image src={props.image} />
      <InfoContainer>
        <Typography color="secondary">{props.name}</Typography>
        <Typography>{props.description}</Typography>
        <Typography color="primary">R${props.price}</Typography>
      </InfoContainer>
      <Button
        onClick={() => setSelect(true)}
        variant="outlined"
        color="secondary"
        // display={display}
      >
        Adicionar
      </Button>
      <Button
        variant="outlined"
        color="warning"
        onClick={
          props.onClick
            ? props.onClick
            : () => RemoveFoodCart(props.food, setCount)
        }
        display={display}
      >
        Remover
      </Button>

      <dialog open={select}>
        <TextField
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            addFoodCart(
              props.food,
              setSelect,
              setCount,
              props.restaurant,
              count
            )
          }
        >
          Adicionar pedido
        </Button>
      </dialog>
    </Card>
  );
}
