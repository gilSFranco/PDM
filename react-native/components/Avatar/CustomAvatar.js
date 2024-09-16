import react from 'react';
import { Stack, Avatar } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

export default function CustomAvatar() {
  var img = 'https://cf.shopee.com.br/file/sg-11134201-22110-nfarlul5l0jv16';
  return (
    <Stack fill center spacing={4}>
      <Avatar label="Lauany Mariano Teles" autoColor />
      <Avatar image={{ uri: img }} />
      <Avatar icon={(props) => <Icon name="account" {...props} />} />
    </Stack>
  );
}
