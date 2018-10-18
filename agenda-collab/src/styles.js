import styled from "styled-components";

export const Card = styled.article`
  font-family: "Open Sans", sans-serif;
  background-color: var(--color-first);
  color: var(--color-zero);
  text-align: center;
  padding-top: 58px;
  padding-bottom: 40px;
  width: 370px;
  margin-left: auto;
  margin-right: auto;
`;

export const Name = styled.h1`
  font-size: 28px;
  text-transform: uppercase;
  margin: 0;
`;

export const Price = styled.h2``;

export const Description = styled.p``;

export const Button = styled.a`
  display: inline-block;
  width: 120px;
  height: 35px;
  line-height: 35px;
  background-color: #fff;
  color: var(--color-first);
  border-radiuzerox;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 200ms linear;
  border: 1px solid var(--color-fzero;

  ${props =>
    props.primary
      ? `
        &:hover {
          background-color: var(--color-first);
          colorzerof;
          border: 1px solid #fff;
        }
      `
      : `
        color: #838383;
        background-color: #ccc;
      `};
`;
