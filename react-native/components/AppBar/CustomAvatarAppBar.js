import React, { useState } from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Avatar,
} from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

export default function CustomAvatarAppBar() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AppBar
      title="Titulo da tela"
      leading={(props) => (
        <IconButton
          icon={(props) => <Icon name="menu" {...props} />}
          {...props}
        />
      )}
      trailing={(props) =>
        loggedIn ? (
          <IconButton
            icon={(props) => <Icon name="logout" {...props} />}
            {...props}
          />
        ) : (
          <IconButton
            icon={(props) => <Icon name="login" {...props} />}
            {...props}
          />
        )
      }
    />
  );
}
