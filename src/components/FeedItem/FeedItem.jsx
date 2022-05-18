import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";

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

export function FeedItem(props) {
  return (
    <StyleCard onClick={props.onClick}>
      <CardMedia component="img" height="140" image={props.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="p" color={"secondary"}>
          {props.restaurant}
        </Typography>
        {props.category && <>{props.category}</>}
      </CardContent>

      <StyleCardActions>
        <Typography>{props.deliveryTime}</Typography>
        <Typography>{props.deliveryPrice}</Typography>
      </StyleCardActions>
      {props.adress && (
        <>
          <Typography>{props.adress}</Typography>
        </>
      )}
    </StyleCard>
  );
}
