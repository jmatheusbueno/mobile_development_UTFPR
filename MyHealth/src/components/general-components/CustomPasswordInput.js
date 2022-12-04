import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const CustomPasswordInput = (props) => {
    const { setValue } = props;
    
    return (
        <View style={styles.container}>
            <Text style={styles.textLabel}>{props.label}</Text>
            <TextInput style={[styles.textInput, { width: props.width }]} secureTextEntry={true} onChangeText={setValue}></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center",
        justifyContent: "space-between",
    },
    textLabel: {
        fontSize: 14,
        marginRight: 5,
        color: "#fff"
    },
    textInput: {
        width: 300,
        height: 40,
        backgroundColor: "#fff",
        color: "black",
    }
});

export default CustomPasswordInput;