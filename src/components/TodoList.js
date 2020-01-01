import React from 'react';
import {Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {SwipeListView} from 'react-native-swipe-list-view';
import Styles from '../../constants/Styles';
import GoalItem from './GoalItem';

const TodoList = props => {
  return (
    <SwipeListView
      useFlatList={true}
      keyExtractor={item => item.id}
      data={props.todo}
      renderItem={(rowData, rowMap) => {
        return (
          <View>
            <GoalItem
              id={rowData.item.id}
              title={rowData.item.text}
              pressed={rowData.item.completed}
              onUpdate={() => props.toggle(rowData.item.id)}
            />
          </View>
        );
      }}
      renderHiddenItem={(rowData, rowMap) => (
        <View>
          <Touchable
            onPress={() => props.delete(rowData.item.id)}
            style={Styles.rightText}>
            <Text style={Styles.rightText}>Delete</Text>
          </Touchable>
        </View>
      )}
      rightOpenValue={-90}
      onRowOpen={(rowKey, rowMap) => {
        setTimeout(() => {
          rowMap[rowKey] && rowMap[rowKey].closeRow();
        }, 2000);
      }}
    />
  );
};

export default TodoList;
