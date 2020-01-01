import React from 'react';
import {StyleSheet, View} from 'react-native';

const RadioButton = props => {
  return (
    <View style={[styles.container, props.style]}>
      {props.selected ? <View style={styles.inside} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inside: {
    height: 13,
    width: 13,
    borderRadius: 6,
    backgroundColor: 'lightgrey',
  },
});

export default RadioButton;
