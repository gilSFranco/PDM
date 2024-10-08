import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Calculadora em react native!</Text>
      <TextInput>
        Placeholder
      </TextInput>
      <TextInput>
        Placeholder
      </TextInput>
      <Button>
        Calcular
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
