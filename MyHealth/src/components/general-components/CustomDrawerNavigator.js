import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";

const CustomDrawerNavigator = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawerNavigator;