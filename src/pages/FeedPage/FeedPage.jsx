import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import { FeedItem } from "../../components/FeedItem/FeedItem";
import styled from "styled-components";
import NavMenu from "../../components/NavMenu/NavMenu";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import { useNavigate } from "react-router-dom";
import useAuthorization from "../../hooks/useAuthorization";
import { goToRestaurantPage } from "../../routes/coordinator";
import useRequestData from "../../hooks/useRequestData";
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyleBorder = styled.div`
  width: 100%;
  border-top: 1px solid #b8b8b8;
`;

export const StyleOutlinedInput = styled(OutlinedInput)`
  margin-top: 32px;
`;

export default function FeedPage() {
  useAuthorization();

  const navigate = useNavigate();
  const {
    Categorys,
    restaurantList,
    setRestaurantList,
    filterList,
    setFilterList,
  } = useContext(GlobalStateContext);

  const getCategory = (category) => {
    const restaurants = restaurantList.filter((restaurant) => {
      if (category === "Todos") {
        return restaurant.category;
      } else {
        return restaurant.category === category;
      }
    });
    setFilterList(restaurants);
  };

  const [data] = useRequestData("/restaurants");

  useEffect(() => {
    if (data) {
      setRestaurantList(data.restaurants);
    }
  }, [data, setRestaurantList]);

  const filterName = (event) => {
    const restaurants = restaurantList.filter((restaurant) => {
      if (event.target.value === "") {
        return restaurant.name === restaurant.name;
      } else {
        let nameLowerCase = restaurant.name.toLowerCase();
        return nameLowerCase.includes(event.target.value.toLowerCase());
      }
    });
    setFilterList(restaurants);
  };

  return (
    <StyledContainer>
      {/* ANCHOR INPUT SEARCH */}
      <StyleOutlinedInput
        onChange={filterName}
        placeholder="Restaurante"
        startAdornment={
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      {/* ANCHOR NAVMENU */}
      <NavMenu arrayCategory={Categorys} getCategory={getCategory} />

      {filterList.length > 0 ? (
        filterList.map((restaurant) => {
          return (
            <FeedItem
              key={restaurant.id}
              onClick={() => goToRestaurantPage(navigate, restaurant.id)}
              restaurant={restaurant.name}
              image={restaurant.logoUrl}
              deliveryTime={
                restaurant.deliveryTime -
                10 +
                " - " +
                restaurant.deliveryTime +
                "Min"
              }
              deliveryPrice={
                "Frete" + " " + "R$" + " " + restaurant.shipping.toFixed(2)
              }
            />
          );
        })
      ) : (
        <>
          <Typography>Não encontramos :(</Typography>
        </>
      )}

      {/* <StyleBorder /> */}
    </StyledContainer>
  );
}
