import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomTextInput from './general-components/CustomTextInput';
import CustomRadio from './general-components/CustomRadio';
import CustomButton from './general-components/CustomButton';
import CustomImageSelector from './general-components/CustomImageSelector';

const FormVaccineData = (props) => {
    const [selected, setSelected] = useState(0);
    
    let isEdit = props.route.params !== undefined;
    if (isEdit) {

        let options = ['1a. Dose','2a. Dose','3a. Dose','Dose única'];
        let indexSelected = options.indexOf(props.route.params.dose);

        return (
            <View style={styles.container}>
                <CustomTextInput label="Vacina" width={220} inputValue={props.route.params.name} />
                <View style={styles.doseContainer}>
                    <Text style={{ color:'#fff' }}>Dose</Text>
                    <CustomRadio 
                        options={options} 
                        horizontal={true} 
                        onChangeSelect={(opt, index) => setSelected(index)}
                        selected={selected}
                    />
                </View>
                <CustomImageSelector />
                <CustomButton value={isEdit ? 'Editar' : 'Cadastrar'} backgroundColor="#49b976" width={120} marginTop={50} />
                {isEdit && <CustomButton value="Excluir" backgroundColor="#FD7979" width={120} marginTop={50} />}
            </View>
        );
    } else {
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
                <CustomButton value={isEdit ? 'Editar' : 'Cadastrar'} backgroundColor="#49b976" width={120} marginTop={50} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ADD4D0',
    },
    doseContainer: {
        flexDirection: 'row',
        marginVertical: 10
    },
});

export default FormVaccineData;
