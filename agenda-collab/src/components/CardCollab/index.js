import React from "react";

import Name from "../../objects/Name";
import Price from "../../objects/Price";
import Description from "../../objects/Description";

import ButtonCollab from "../ButtonCollab";

import Card from "./styles";

const CardCollab = props => (
  <Card>
    <Name>{props.name}</Name>
    <Price>
      <small>c$</small>
      {props.price}
    </Price>
    <Description>{props.description}</Description>
    <ButtonCollab primary>Comprar</ButtonCollab>
  </Card>
);

export default CardCollab;
