/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Initial from './src/components/Initial';
import CreateAccount from './src/components/CreateAccount'
import RecoverPassword from './src/components/RecoverPassword'


// AppRegistry.registerComponent(appName, () => Initial);
// AppRegistry.registerComponent(appName, () => CreateAccount);
AppRegistry.registerComponent(appName, () => RecoverPassword);
