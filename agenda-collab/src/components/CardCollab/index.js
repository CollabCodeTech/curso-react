import React from "react";

import Name from "../../objects/Name";
import Price from "../../objects/Price";
import Description from "../../objects/Description";

import ButtonCollab from "../ButtonCollab";

import Card from "./styles";

const CardCollab = () => (
  <Card>
    <Name>Curso React</Name>
    <Price>$25</Price>
    <Description>Professional features for your business to grow.</Description>
    <ButtonCollab primary>Buy</ButtonCollab>
  </Card>
);

export default CardCollab;
