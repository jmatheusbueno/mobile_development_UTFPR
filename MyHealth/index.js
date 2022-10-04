/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Initial from './src/components/Initial';
import CreateAccount from './src/components/CreateAccount'
import RecoverPassword from './src/components/RecoverPassword'
import Home from './src/components/Home'


// AppRegistry.registerComponent(appName, () => Initial);
// AppRegistry.registerComponent(appName, () => CreateAccount);
// 1AppRegistry.registerComponent(appName, () => RecoverPassword);
AppRegistry.registerComponent(appName, () => Home);
