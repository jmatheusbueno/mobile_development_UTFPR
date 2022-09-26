import React, { useState } from "react";
import { StyleSheet, View} from "react-native";
import CustomTextInput from "./general-components/CustomTextInput";
import CustomRadio from "./general-components/CustomRadio";
import CustomPasswordInput from "./general-components/CustomPasswordInput";
import CustomButton from "./general-components/CustomButton";

const CreateAccount = () => {
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
            <CustomTextInput label="Email" width={275} />
            <CustomPasswordInput label="Senha" width={275} />
            <CustomPasswordInput label="Repetir senha" width={275} />
            <CustomButton value="Cadastrar" backgroundColor="#49b976" width={120} />
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