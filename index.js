import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';


import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { roomReducer } from './reducers/reducers'; // reducers
import ConnectedSelections from './components/selections.js';
import ConnectedInformation from './components/information.js';

const store = createStore(roomReducer, applyMiddleware(logger));

class HousePanel extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedInformation />
      </Provider>
    );
  }
};

class SelectionPanel extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedSelections />
      </Provider>
    );
  }
}

/*
export default class EcommerceVR extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('EcommerceVR', () => EcommerceVR);
*/

AppRegistry.registerComponent('HousePanel', () => HousePanel);
AppRegistry.registerComponent('SelectionPanel', () => SelectionPanel);
