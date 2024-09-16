import react from 'react';
import { AppBar, IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

export default function CustomBasicAppBar() {
  return (
    <AppBar
      title="Titulo da tela"
      color="black"
      tintColor="white"
      leading={(props) => (
        <IconButton
          icon={(props) => <Icon name="menu" {...props} />}
          {...props}
        />
      )}
    />
  );
}
