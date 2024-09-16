import react from 'react';
import { AppBar, IconButton, FAB } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const CustomBottomAppBar = () => (
  <AppBar
    color="black"
    variant="bottom"
    leading={props => (
      <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
    )}
    trailing={props => (
      <IconButton icon={props => <Icon name="magnify" {...props} />} {...props} />
    )}
    style={{ position: "absolute", start: 0, end: 0, bottom: 0 }}
    onP
  >
    <FAB
      color="white"
      icon={props => <Icon name="plus" {...props} />}
      style={{ position: "absolute", top: -28, alignSelf: "center" }}
      onPress={() => alert('oi')}
    />
  </AppBar>
)

export default CustomBottomAppBar;
