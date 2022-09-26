/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Initial from './src/components/Initial';
import {name as appName} from './app.json';
import CreateAccount from './src/components/CreateAccount'


// AppRegistry.registerComponent(appName, () => Initial);
AppRegistry.registerComponent(appName, () => CreateAccount);
