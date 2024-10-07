import { StyleSheet, Text, View } from 'react-native';
import { Container, Title } from './styles';

export default function Groups() {
  return (
    <Container>
      <Container>
        <Title>
          Group 01
        </Title>
      </Container>
      <Container>
        <Title>
          Group 02
        </Title>
      </Container>
    </Container>
  );
}