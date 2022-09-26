import React from "react";
import { StyleSheet, View, Text } from "react-native";

const HeaderComponent = () => (
    <View style={styles.header}>
        <Text style={styles.text}>💉 MyHealth</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#c1e7e3",
        height: 60,
        paddingLeft: 10,
        paddingTop: 4,
    },
    text: {
        color: "#419ED7",
        fontFamily: "Averia Libre",
        fontSize: 36,
    },
});

export default HeaderComponent;