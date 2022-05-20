import { GlobalStateContext } from "./GlobalStateContext";
import React, { useState } from "react";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/url";

const GlobalState = (props) => {
  const [restaurants, getRestaurants, isLoading, error] = useRequestData(
    [],
    `${BASE_URL}/restaurants`
  );
  const [addressData, getDataAddress, isLoadingAddress, errorAddress] =
    useRequestData("", `${BASE_URL}/profile/address`);
  const [userData, getUserData, isLoadingUserData] = useRequestData(
    [],
    `${BASE_URL}/profile`
  );
  const [productsInCart, setProductsInCart] = useState([]);
  const [restaurantId, setRestaurantId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [activeOrder, getActiveOrder] = useRequestData(
    [],
    `${BASE_URL}/active-order`
  );

  const dataAdressDown = addressData;

  const data = {
    restaurants,
    getRestaurants,
    isLoading,
    error,
    productsInCart,
    setProductsInCart,
    addressData,
    getDataAddress,
    isLoadingAddress,
    errorAddress,
    dataAdressDown,
    userData,
    getUserData,
    isLoadingUserData,
    restaurantId,
    setRestaurantId,
    activeOrder,
    getActiveOrder,
    setCpf,
    cpf,
    setEmail,
    email,
    setName,
    name,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;