import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawerNavigator from "./general-components/CustomDrawerNavigator"
import Home from "./Home";
import NextVaccine from "./NextVaccine";
import FormVaccineData from "./FormVaccineData";

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator drawerContent={(props) => <CustomDrawerNavigator {...props} />}>
                <Drawer.Screen name="Minhas Vacinas" component={Home}/>
                <Drawer.Screen name="Próximas Vacinas" component={NextVaccine}/>
                <Drawer.Screen name="FormVaccineData" component={FormVaccineData} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};

export default DrawerNavigator;