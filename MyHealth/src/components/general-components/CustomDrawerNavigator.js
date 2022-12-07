import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View, StyleSheet, Text } from "react-native";

import { useSelector } from "react-redux";

const CustomDrawerNavigator = (props) => {

    const mail = useSelector((state) => state.login.mail);

    return (
        <DrawerContentScrollView {...props} style={styles.container}>
            <View style={styles.containerView}>
                <Text style={styles.txt}>{mail}</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem label='Sair'></DrawerItem>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ADD4D0'
    },
    containerView: {
        height: 80,
        justifyContent: "center"
    },
    txt: {
        fontSize: 20,
        color: '#419ED7',
        textAlign: "center",
    },
});

export default CustomDrawerNavigator;