// export default class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <TodoApp />
//       </Provider>
//     );
//   }
// }
import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Provider} from 'react-redux';
import Color from './constants/Color';
import Header from './src/component/Header';
import TabBarIcon from './src/component/TabBarIcon';
import AllScreen from './src/screen/AllScreen';
import CompScreen from './src/screen/CompScreen';
import PendScreen from './src/screen/PendScreen';
import store from './src/store';

const config = {
  defaultNavigationOptions: {
    headerTitle: () => <Header />,
    headerStyle: {
      backgroundColor: Color.themeColor,
      height: 60,
    },
    animationEnabled: true,
    swipeEnabled: true,
  },
};

const AllStack = createStackNavigator(
  {
    All: AllScreen,
  },
  config,
);

AllStack.navigationOptions = {
  tabBarLabel: 'All',
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name={'ios-list'} />,
};

AllStack.path = '';

const PendStack = createStackNavigator(
  {
    Pending: PendScreen,
  },
  config,
);

PendStack.navigationOptions = {
  tabBarLabel: 'Pending',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'ios-stats'} />
  ),
};

PendStack.path = '';

const CompStack = createStackNavigator(
  {
    Completed: CompScreen,
  },
  config,
);

CompStack.navigationOptions = {
  tabBarLabel: 'Completed',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'md-checkbox-outline'} />
  ),
};

CompStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    AllStack,
    PendStack,
    CompStack,
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontFamily: 'Caveat Brush',
        fontSize: 14,
      },
    },
  },
);

const AppContainer = createAppContainer(tabNavigator);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
