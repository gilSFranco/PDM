import { SafeAreaView, StyleSheet } from 'react-native';

import CustomBanner from './components/Banner/CustomBanner';
import CustomAvatar from './components/Avatar/CustomAvatar'
import CustomBottomAppBar from './components/AppBar/CustomBottomAppBar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomAvatar />
      <CustomBottomAppBar />
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
