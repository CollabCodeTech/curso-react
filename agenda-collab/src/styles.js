import styled from "styled-components";

import { center } from "./styles/tools";

export const Card = styled.article`
  background-color: var(--color-first);
  color: var(--color-zero);
  text-align: center;
  padding-top: 58px;
  padding-bottom: 40px;
  width: 370px;
  ${center};
`;
