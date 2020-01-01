import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../../constants/Color';

const TabBarIcon = props => {
  return (
    <Icon
      name={props.name}
      size={30}
      color={props.focused ? Color.tabIconSelected : Color.tabIconDefault}
    />
  );
};

export default TabBarIcon;
