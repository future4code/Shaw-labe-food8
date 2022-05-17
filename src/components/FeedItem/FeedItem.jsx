import React from "react";
import sandwich from "../../assets/sandwich.jpeg";
import styled from "styled-components";
import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from "@material-ui/core";

const StyleCard = styled(Card)`
  && {
    width: 30%;
    min-width: 320px;
    border: 1px solid #b8b8b8;
    margin-top: 1rem;
  }
`;

const StyleCardActions = styled(CardActions)`
  && {
    display: "flex";
    justify-content: "space-between";
  }
`;

export function FeedItem() {
  return (
    <StyleCard>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={sandwich}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color={"secondary"}
        >
          Vinil Butantã
        </Typography>
      </CardContent>
      <StyleCardActions>
        <Typography>50 - 60 min</Typography>
        <Typography>Frete R$6,00</Typography>
      </StyleCardActions>
    </StyleCard>
  );
}
