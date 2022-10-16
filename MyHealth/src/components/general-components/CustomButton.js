import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomButton = (props) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, { backgroundColor: props.backgroundColor, width: props.width, marginTop: props.marginTop }]}>
                <Text style={styles.buttonText}>{ props.value }</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    buttonContainer: {
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