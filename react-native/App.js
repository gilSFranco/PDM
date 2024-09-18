import { SafeAreaView, StyleSheet } from 'react-native';

import Cat from './components/Cat/Cat';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Cat name="Bichano" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
