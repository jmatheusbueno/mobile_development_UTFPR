import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const CustomTextInput = (props) => (
    <View style={styles.container}>
        <Text style={styles.textLabel}>{props.label}</Text>
        <TextInput style={[styles.textInput, { width: props.width }]}></TextInput>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    textLabel: {
        fontSize: 20,
        marginRight: 5,
        color: "#fff"
    },
    textInput: {
        width: 300,
        height: 30,
        backgroundColor: "#fff"
    }
});

export default CustomTextInput;