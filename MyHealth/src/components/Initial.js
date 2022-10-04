import React from "react";
import { StyleSheet, View } from "react-native";
import InitialTitle from "./initial-components/InitialTitle"
import InitialSubtitle from "./initial-components/InitialSubtitle"
import CustomButton from "./general-components/CustomButton";
import CustomTextInput from "./general-components/CustomTextInput";
import CustomPasswordInput from "./general-components/CustomPasswordInput";

const Initial = () => (
    <View style={styles.container}>
        <InitialTitle value="MyHealth" />
        <InitialSubtitle value="Controle as suas vacinas e fique seguro" />
        <View style={{ marginTop: 50 }}>
            <CustomTextInput label="E-mail" width={300} />
            <CustomPasswordInput label="Senha" width={300} />
        </View>
        <CustomButton value="Entrar" backgroundColor="#49b976" width={120} />
        <CustomButton value="Criar minha conta" backgroundColor="#419ed7" width={200} />
        <CustomButton value="Esqueci minha senha" backgroundColor="#b5c7d1" width={220} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        padding: 10,
        backgroundColor: "#add4d0",
    },
});

export default Initial;