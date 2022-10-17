/**
 * @format
*/

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Initial from './src/components/Initial';
import CreateAccount from './src/components/CreateAccount'
import RecoverPassword from './src/components/RecoverPassword'
import FormVaccineData from './src/components/FormVaccineData';
import Home from './src/components/Home'
import NextVaccine from './src/components/NextVaccine'
import App from './src/components/App'


// AppRegistry.registerComponent(appName, () => Initial);
// AppRegistry.registerComponent(appName, () => CreateAccount);
// AppRegistry.registerComponent(appName, () => RecoverPassword);
// AppRegistry.registerComponent(appName, () => Home);
// AppRegistry.registerComponent(appName, () => FormVaccineData);
// AppRegistry.registerComponent(appName, () => NextVaccine);
AppRegistry.registerComponent(appName, () => App);
