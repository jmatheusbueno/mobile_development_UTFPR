import React from "react";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import InitialTitle from "./initial-components/InitialTitle"
import InitialSubtitle from "./initial-components/InitialSubtitle"
import CustomButton from "./general-components/CustomButton";
import CustomTextInput from "./general-components/CustomTextInput";
import CustomPasswordInput from "./general-components/CustomPasswordInput";

const Initial = (props) => {
    const goToHome = () => {
        props.navigation.navigate('Home');
    }
    const goToCreateAccount = () => {
        props.navigation.navigate('CreateAccount');
    }
    const goToRecoverPassword = () => {
        props.navigation.navigate('RecoverPassword');
    }
    
    return (
        <View style={styles.container}>
            <InitialTitle value="MyHealth" />
            <InitialSubtitle value="Controle as suas vacinas e fique seguro" />
            <View style={{ marginTop: 10 }}>
                <CustomTextInput label="E-mail" width={300} />
                <CustomPasswordInput label="Senha" width={300} />
            </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity onPress={goToHome}>
                    <CustomButton value="Entrar" backgroundColor="#49b976" width={120} />
                </TouchableOpacity>

                <TouchableOpacity onPress={goToCreateAccount}>
                    <CustomButton value="Criar minha conta" backgroundColor="#419ed7" width={200}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={goToRecoverPassword}>
                    <CustomButton value="Esqueci minha senha" backgroundColor="#b5c7d1" width={220} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        padding: 10,
        backgroundColor: "#add4d0",
    },
    containerButtons: {
        flex: 1,
        justifyContent: "space-around"
    },
});

export default Initial;