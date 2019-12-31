import React, {Component} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {addTodo} from './../actions';

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
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <TextInput
          onChangeText={text => {
            this.setState({text});
          }}
          value={this.state.text}
          placeholder="Eg: create new app"
          style={{
            borderWidth: 1,
            borderColor: '#f2f2e1',
            backgroundColor: '#eaeaea',
            height: 50,
            flex: 1,
            padding: 5,
            fontFamily: 'Caveat Brush',
          }}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View style={{height: 50, backgroundColor: '#eaeaea'}}>
            <IoniconsIcon
              name="md-add"
              size={30}
              style={{color: '#de9595', padding: 10}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddTodo);
