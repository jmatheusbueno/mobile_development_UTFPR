import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Initial from "./Initial";
import CreateAccount from "./CreateAccount";
import RecoverPassword from "./RecoverPassword";
import DrawerNavigator from "./DrawerNavigator";
import FormVaccineData from "./FormVaccineData";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Initial" component={Initial} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
                <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown:false }} />
                <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;