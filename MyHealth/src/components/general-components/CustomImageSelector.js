//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// create a component
const CustomImageSelector = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={{color: '#fff'}}>Comprovante</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Selecionar magem...</Text>
                </TouchableOpacity>
            </View>
            <Image
                style={styles.img}
                source={{ uri: 'http://mt.corens.portalcofen.gov.br/wp-content/uploads/2021/04/Registro.jpg'}}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#419ED7',
        padding: 4,
        marginLeft: 5,
    },
    buttonText: {
        color: '#fff',
    },
    img: {
        width: 160,
        height: 80,
        marginLeft: 90,
        marginTop: 4,
    }
});

//make this component available to the app
export default CustomImageSelector;
