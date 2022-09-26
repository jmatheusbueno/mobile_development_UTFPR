import React from "react";
import { StyleSheet, View} from "react-native";
import CustomTextInput from "./general-components/CustomTextInput";

const CreateAccount = () => (
    <View style={styles.container}>
        <CustomTextInput label="Nome completo" width={210} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#add4d0",
    },
});

export default CreateAccount;