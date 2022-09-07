import React from "react";
import { StyleSheet, Text } from "react-native";

export default (props) => <Text style={styles.subTittle}>{ props.value }</Text>;

const styles = StyleSheet.create({
    subTittle: {
        marginHorizontal: 20,
        textAlign: "center",
        color: "#419ED7",
        fontFamily: "Averia Libre",
        fontSize: 32,
    }
});
