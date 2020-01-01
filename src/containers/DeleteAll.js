import React, {Component} from 'react';
import {Alert} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import Color from '../../constants/Color';
import Styles from '../../constants/Styles';
import {deleteTodos} from '../actions';

class DeleteAll extends Component {
  deleteAll = () => {
    this.props.dispatch(deleteTodos());
  };

  render() {
    return (
      <Touchable
        style={Styles.actionButton}
        onPress={() => {
          Alert.alert(
            'Reset',
            "Delete All tasks. This can't be undone.",
            [
              {
                text: 'Cancel',
              },
              {
                text: 'Reset',
                onPress: () => this.deleteAll(),
              },
            ],
            {cancelable: false},
          );
        }}>
        <MaterialIcon
          name="delete-outline"
          size={25}
          color={Color.themeColor}
        />
      </Touchable>
    );
  }
}

export default connect()(DeleteAll);
