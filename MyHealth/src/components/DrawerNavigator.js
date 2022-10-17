import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./Home";
import NextVaccine from "./NextVaccine";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="NextVaccine" component={NextVaccine}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
};

export default DrawerNavigator;