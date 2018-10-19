import styled from "styled-components";

const Price = styled.h2`
  font-size: 100px;
  margin-bottom: var(--spacing-medium);
  & > small {
    font-weight: 300;
    font-size: 0.5em;
  }
`;

export default Price;
