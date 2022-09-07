import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InitialTitle from "./initial-components/InitialTitle"
import InitialSubtitle from "./initial-components/InitialSubtitle"
import InitialLogin from "./initial-components/InitialLogin";

const Initial = () => (
    <View style={styles.container}>
        <InitialTitle value="MyHealth" />
        <InitialSubtitle value="Controle as suas vacinas e fique seguro" />
        <View style={{ marginTop:50 }}>
            <InitialLogin label="E-mail" />
            <InitialLogin label="Senha" />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonTouchableOpacity.button1}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonTouchableOpacity.button2}>
                <Text style={styles.buttonText}>Criar minha conta</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonTouchableOpacity.button3}>
                <Text style={styles.buttonText}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#d3dcdb",
    },
    buttonContainer: {
        marginTop: 40,
        alignItems: "center",
    },
    buttonTouchableOpacity: {
        button1: {
            elevation: 8,
            backgroundColor:"#49b976",
            width: 120,
        },
        button2: {
            elevation: 8,
            backgroundColor:"#419ed7",
            width: 200,
        },
        button3: {
            elevation: 8,
            backgroundColor:"#b5c7d1",
            width: 220,
        },
    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
        paddingVertical: 6,
    }
});

export default Initial;