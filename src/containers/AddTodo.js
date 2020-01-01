import React, {Component} from 'react';
import {
  TextInput,
  TouchableNativeFeedback,
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import Touchable from 'react-native-platform-touchable';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Color from '../../constants/Color';

class AddTodo extends Component {
  state = {
    text: '',
  };

  addTodo = text => {
    this.props.dispatch(addTodo(text));
    this.setState({text: ''});
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text => {
            this.setState({text});
          }}
          value={this.state.text}
          placeholder="Eg: create new app"
          style={styles.inputArea}
        />
        {Platform.OS === 'android' && (
          <TouchableNativeFeedback
            style={styles.cancelButton}
            onPress={() => this.setState({text: ''})}>
            <MaterialIcon name="cancel" size={18} color="lightgrey" />
          </TouchableNativeFeedback>
        )}
        <Touchable onPress={() => this.addTodo(this.state.text)}>
          <View style={styles.button}>
            <IoniconsIcon name="md-add" size={30} style={styles.buttonText} />
          </View>
        </Touchable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2.5,
    marginHorizontal: 10,
  },
  inputArea: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
    fontSize: 18,
    lineHeight: 22,
    margin: 10,
    fontFamily: 'Caveat Brush',
    color: 'black',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: Color.tintColor,
    borderWidth: 1,
  },
  buttonText: {
    color: Color.tintColor,
    fontSize: 22,
    fontFamily: 'Caveat Brush',
  },
  cancelButton: {
    height: 18,
    width: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect()(AddTodo);
