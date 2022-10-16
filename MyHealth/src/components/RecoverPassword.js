import React from "react";
import { StyleSheet, View} from "react-native";
import CustomTextInput from "./general-components/CustomTextInput";
import CustomButton from "./general-components/CustomButton";

const RecoverPassword = () => {
    return (
        <View style={styles.container}>
            <CustomTextInput label="Email" width={340} />
            <CustomButton value="Recuperar senha" backgroundColor="#49b976" width={200} marginTop={20} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#add4d0",
        padding: 10,
        justifyContent: 'center'
    },
});

export default RecoverPassword;