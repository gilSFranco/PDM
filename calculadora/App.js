import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Number from './components/Buttons/Numbers';
import Operations from './components/Buttons/Operations';
import Input from './components/Input/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <Input />
      <Number numero={1} />
      <Number numero={2} />
      <Number numero={3} />
      <Operations operacao="+" />

      <Number numero={4} />
      <Number numero={5} />
      <Number numero={6} />
      <Operations operacao="-" />

      <Number numero={7} />
      <Number numero={8} />
      <Number numero={9} />
      <Operations operacao="*" />

      <Operations operacao="=" />
      <Operations operacao="/" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 35,
    gap: 5,
    flexWrap: "wrap"
  },
});
