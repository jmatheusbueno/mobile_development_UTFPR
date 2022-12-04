import React, { useState } from "react";
import { StyleSheet, View} from "react-native";
import CustomTextInput from "./general-components/CustomTextInput";
import CustomRadio from "./general-components/CustomRadio";
import CustomPasswordInput from "./general-components/CustomPasswordInput";
import CustomButton from "./general-components/CustomButton";
import { auth } from "../configs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccount = (props) => {
    const { navigation } = props;

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    const sendNewAccount = () => {
        if (password !== repeatedPassword) {
            alert('As senham não estão iguais.')
            return;
        }
        console.log('Criando conta');
        console.log(mail, password)
        createUserWithEmailAndPassword(auth, mail, password)
            .then((userCredential) => {
                console.log('Usuário criado', JSON.stringify(userCredential));
                alert('Usuário criado');
                navigation.navigate('Initial');
            })
            .catch((reason) => {
                console.log('Ocorreu um erro', JSON.stringify(reason))
                alert('Ocorreu um erro');
                navigation.navigate('Initial');
            });
    }

    const [selected, setSelected] = useState(0);
    return (
        <View style={styles.container}>
            <CustomTextInput label="Nome completo" width={275} />
            <View style={styles.radio}>
                <CustomRadio 
                    options={['Masculino','Feminino']} 
                    horizontal={true} 
                    onChangeSelect={(opt, index) => setSelected(index)}
                    selected={selected}
                />
            </View>
            <CustomTextInput label="Email" width={275} setValue={setMail} />
            <CustomPasswordInput label="Senha" width={275} setValue={setPassword} />
            <CustomPasswordInput label="Repetir senha" width={275} setValue={setRepeatedPassword} />
            <CustomButton 
                value="Cadastrar" 
                backgroundColor="#49b976" 
                width={120} 
                marginTop={50} 
                registerUser={true} 
                navigation={navigation}
                func={sendNewAccount}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#add4d0",
        padding: 10,
    },
    radio: {
        marginTop: 10,
        alignItems: 'center',
    },
});

export default CreateAccount;