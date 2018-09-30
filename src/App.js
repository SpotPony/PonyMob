/**
 * Spot Pony: React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import MainRequest from './containers/MainRequestContainer';

console.log(MainRequest)
type Props = {};

const RootStack = createStackNavigator({
  MainRequest: MainRequest,
}, {
  headerMode: 'none'
})

export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    )
  }
}
