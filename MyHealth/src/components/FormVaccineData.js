//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomTextInput from './general-components/CustomTextInput';
import CustomRadio from './general-components/CustomRadio';
import CustomButton from './general-components/CustomButton';
import CustomImageSelector from './general-components/CustomImageSelector';

// create a component
const FormVaccineData = () => {
    const [selected, setSelected] = useState(0);

    return (
        <View style={styles.container}>
            <CustomTextInput label="Vacina" width={220} />
            <View style={styles.doseContainer}>
                <Text style={{ color:'#fff' }}>Dose</Text>
                <CustomRadio 
                        options={['1a. Dose','2a. Dose','3a. Dose','Dose única']} 
                        horizontal={true} 
                        onChangeSelect={(opt, index) => setSelected(index)}
                        selected={selected}
                />
            </View>
            <CustomImageSelector />
            <CustomButton value="Cadastrar" backgroundColor="#49b976" width={120} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ADD4D0',
        justifyContent: 'space-around',
    },
    doseContainer: {
        flexDirection: 'row',
    },
});

//make this component available to the app
export default FormVaccineData;
