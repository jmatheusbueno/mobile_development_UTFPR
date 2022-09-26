import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InitialTitle from "./initial-components/InitialTitle"
import InitialSubtitle from "./initial-components/InitialSubtitle"
import InitialLogin from "./initial-components/InitialLogin";
import InitialButton from "./initial-components/InitialButton";

const Initial = () => (
    <View style={styles.container}>
        <InitialTitle value="MyHealth" />
        <InitialSubtitle value="Controle as suas vacinas e fique seguro" />
        <View style={{ marginTop: 50 }}>
            <InitialLogin label="E-mail" />
            <InitialLogin label="Senha" />
        </View>
        <InitialButton value="Entrar" backgroundColor="#49b976" width={120} />
        <InitialButton value="Criar minha conta" backgroundColor="#419ed7" width={200} />
        <InitialButton value="Esqueci minha senha" backgroundColor="#b5c7d1" width={220} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#add4d0",
    },
});

export default Initial;