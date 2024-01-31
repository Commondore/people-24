import { Container, Text, Title } from "./Example.styled";

import ReactLogo from "../../assets/react.svg?react";
import { DollarIcon, HatIcon } from "../Icons";

const Example = () => {
  return (
    <Container>
      <ReactLogo width={200} height={200} />
      <DollarIcon />
      <HatIcon />
      <Title $darken>Hello styled components</Title>
      <Text>Amazing CSS in JS library</Text>
    </Container>
  );
};

export default Example;
