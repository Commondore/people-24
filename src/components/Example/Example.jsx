import { Container, Text, Title } from "./Example.styled";

const Example = () => {
  return (
    <Container>
      <Title $darken>Hello styled components</Title>
      <Text>Amazing CSS in JS library</Text>
    </Container>
  );
};

export default Example;
