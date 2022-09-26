import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomButton = (props) => (
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: props.backgroundColor, width: props.width }]}>
            <Text style={styles.buttonText}>{ props.value }</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 40,
        alignItems: "center",
    },
    button: {
        elevation: 8,
        width: 120,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
        paddingVertical: 6,
    }
});

export default CustomButton;