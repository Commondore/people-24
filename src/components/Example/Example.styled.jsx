import styled, { css } from "styled-components";

// CSS in JS
export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  color: tomato;
  ${(props) =>
    props.$darken &&
    css`
      color: white;
    `}
  font-size: 3rem;
`;

export const Text = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #444;
`;
