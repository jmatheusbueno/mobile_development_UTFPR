import React, { useState } from "react";
import { StyleSheet, View} from "react-native";
import CustomTextInput from "./general-components/CustomTextInput";
import CustomRadio from "./general-components/CustomRadio";

const CreateAccount = () => {
    const [selected, setSelected] = useState(0);
    return (
        <View style={styles.container}>
            <CustomTextInput label="Nome completo" width={210} />
            <CustomRadio 
                options={['Masculino','Feminino']} 
                horizontal={true} 
                onChangeSelect={(opt, index) => {
                    alert(opt);
                    setSelected(index);
                }}
                selected={selected}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#add4d0",
    },
});

export default CreateAccount;