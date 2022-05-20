import React, { useContext, useState } from "react";

import GlobalStateContext from "../../global/GlobalStateContext";
import useAuthorization from "../../hooks/useAuthorization";
import { BASE_URL } from "../../constants/url";
import {
  AppBar,
  Button,
  Card,
  FormControlLabel,
  Radio,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";

import styled from "styled-components";
import axios from "axios";

export const StyleCard = styled(Card)`
  width: "100%";
  height: 120px;
  padding: 1;
`;

export const StyleToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
`;

export default function CartPage() {
  useAuthorization();
  //ANCHOR Contador subtotal
  let subTotal = 0;
  const navigate = useNavigate();
  const [buyFood, setBuyFood] = useState(
    JSON.parse(localStorage.getItem("buyFood"))
  );
  //ANCHOR Contador de frete
  let shipping = 0;
  const [paymentMethod, setPaymentMethod] = useState("");
  const { setDisplay } = useContext(GlobalStateContext);
  const adress = JSON.parse(localStorage.getItem("user"));

  buyFood &&
    buyFood.products &&
    buyFood.products.forEach((food) => {
      //ANCHOR Calculo para a subtotal e frete
      shipping = buyFood.restaurant.shipping;
      subTotal += food.price * food.count;
    });

  const removeFoodCart = (foodRemoving) => {
    //ANCHOR Remove o produto do carrinho/state/localStorage
    if (localStorage.getItem("buyFood")) {
      const arrayBuyFood = JSON.parse(localStorage.getItem("buyFood"));
      const valueFood = arrayBuyFood.products.findIndex(
        (food) => food.id === foodRemoving.id
      );
      if (valueFood > -1) {
        if (arrayBuyFood.products[valueFood].count <= 1) {
          arrayBuyFood.products.splice(valueFood, 1);
          localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood));
          if (arrayBuyFood.products.length <= 0) {
            localStorage.removeItem("buyFood");
          }
          setBuyFood(arrayBuyFood);
        } else {
          arrayBuyFood.products[valueFood].count -= 1;
          localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood));
          setBuyFood(arrayBuyFood);
        }
      }
    }
  };

  const onSubmitBuyFood = (event) => {
    event.preventDefault();

    //ANCHOR Array de produtos para fazer requisição
    if (buyFood && paymentMethod) {
      const body = {
        products: buyFood.products.map((food) => {
          return { id: food.id, quantity: food.count };
        }),
        paymentMethod: paymentMethod,
      };

      //ANCHOR POST
      axios
        .post(`${BASE_URL}/restaurants/${buyFood.restaurant.id}/order`, body)
        .then((response) => {
          localStorage.removeItem("buyFood");
          setBuyFood(undefined);
          setDisplay(true);
          alert("Pedido Realizado! Bom apetite!");
          navigate("/home");
        })
        .catch((error) => {
          alert(error.response.data);
        });
    }
  };

  return (
    <>
      {/*ANCHOR HEADER */}
      <AppBar color="inherit" position="static">
        <StyleToolbar>
          <Typography variant="h6" color="primary">
            Meu Carrinho
          </Typography>
        </StyleToolbar>
      </AppBar>

      {/*ANCHOR HEADER */}
      <StyleCard onClick={() => navigate("/adress_from")} elevation={3}>
        <Typography variant="body1">Endereço de entrega</Typography>
        {adress && <Typography>{adress.address}</Typography>}
      </StyleCard>

      {/*ANCHOR SE HOUVER APAREÇA CARD DA COMIDA */}
      <StyleCard>
        <Typography variant="body1">
          {buyFood && buyFood.restaurant.name}
        </Typography>
        <Typography variant="body1">
          {buyFood && buyFood.restaurant.address}
        </Typography>
        <Typography variant="h4">
          {buyFood &&
            buyFood.restaurant.deliveryTime -
              10 +
              " - " +
              buyFood.restaurant.deliveryTime +
              " Min"}
        </Typography>
      </StyleCard>

      {buyFood &&
        buyFood.products &&
        buyFood.products.map((food) => {
          return (
            <CartItem
              restaurant={buyFood.restaurant}
              id={food.category}
              key={food.id}
              food={food}
              name={food.name}
              image={food.photoUrl}
              description={food.description}
              price={food.price.toFixed(2)}
              onClick={() => removeFoodCart(food)}
              count={food.count}
            />
          );
        })}

      {/*ANCHOR PREÇO DO FRETE E VALOR DA COMIDA*/}
      <Typography variant="body1">Frete R$ {shipping.toFixed(2)}</Typography>
      <>
        <Typography variant="h3">SUBTOTAL </Typography>
        <Typography variant="h3">R$ {subTotal.toFixed(2)} </Typography>
      </>

      <>
        {/*ANCHOR FORMA DE PAGAMENTO*/}
        <Typography variant="h3">Forma de pagamento </Typography>
        <form onSubmit={onSubmitBuyFood}>
          <div>
            <TextField
              id="dinheiro"
              onChange={() => setPaymentMethod("money")}
              type="radio"
              name="pagamento"
            />
            <FormControlLabel
              id="dinheiro"
              onChange={() => setPaymentMethod("money")}
              name="pagamento"
              value="dinheiro"
              control={<Radio />}
              label="Dinheiro"
            />
            <FormControlLabel
              id="cartão de crédito"
              onChange={() => setPaymentMethod("creditcard")}
              name="pagamento"
              value="dinheiro"
              control={<Radio />}
              label="Cartão de crédito"
            />
          </div>

          {/*ANCHOR Botão só funciona se houver produto no cart*/}
          {subTotal !== 0 && paymentMethod && (
            <Button color={"secondary"}>Confirmar pedido</Button>
          )}
        </form>

        {(!subTotal || !paymentMethod) && (
          <Button color={"warning"}>Confirmar pedido</Button>
        )}
      </>
    </>
  );
}
