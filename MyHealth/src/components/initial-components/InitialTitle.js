import React from "react";
import { StyleSheet, Text, View } from "react-native";

const InitialTitle = (props) => (
    <View style={styles.containerTitle}>
        <Text style={styles.emojiTitle}>💉</Text>
        <Text style={styles.title}>{props.value}</Text>
    </View>
);

const styles = StyleSheet.create({
    containerTitle: {
        flexDirection:"row",
        marginBottom: 40,
    },
    emojiTitle: {
        flex: 1,
        textAlign: "right",
        fontSize: 48,
    },
    title: {
        flex: 2,
        textAlign: "left",
        color: "#419ED7",
        fontFamily: "Averia Libre",
        fontSize: 48,
        textDecorationLine: "underline",
    },
});

export default InitialTitle;