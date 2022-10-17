import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomButton = (props) => {

    const { navigation, navigate } = props;

    const goToNavigation = () => {
        if (!navigation || !navigate) 
            return;
        navigation.navigate(navigate);
    }

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, { backgroundColor: props.backgroundColor, width: props.width, marginTop: props.marginTop }]} onPress={goToNavigation}>
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