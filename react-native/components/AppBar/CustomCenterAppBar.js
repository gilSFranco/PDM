import react from 'react';
import { AppBar, IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

export default function CustomCenterAppBar() {
  return (
    <AppBar
      title="Titulo"
      subtitle="Lorem ipsum"
      color="green"
      tintColor="white"
      centerTitle={true}
      leading={(props) => (
        <IconButton
          icon={(props) => <Icon name="menu" {...props} />}
          {...props}
        />
      )}
    />
  );
}
