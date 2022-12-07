import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Initial from "./Initial";
import CreateAccount from "./CreateAccount";
import RecoverPassword from "./RecoverPassword";
import DrawerNavigator from "./DrawerNavigator";

import { Provider } from "react-redux";
import { store } from "../redux/store";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Initial" component={Initial} options={{ headerShown:false }} />
                    <Stack.Screen name="CreateAccount" component={CreateAccount} />
                    <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown:false }} />
                    <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;