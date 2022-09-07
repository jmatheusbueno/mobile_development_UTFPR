import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const InitialLogin = (props) => (
    <View style={styles.containerLogin}>
        <Text style={styles.loginLabel}>{props.label}</Text>
        <TextInput style={styles.textInput}></TextInput>
    </View>
);

const styles = StyleSheet.create({
    containerLogin: {
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    loginLabel: {
        fontSize: 20,
        marginRight: 5,
    },
    textInput: {
        width: 300,
        height: 30,
        backgroundColor: "#fff"
    }
});

export default InitialLogin;