//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const CustomRadio = ({options = [], horizontal = false, onChangeSelect, selected}) => {

    return (
        <View style={horizontal ? styles.horizontal : styles.vertical}>
            {
                options.map((opt, index) => (
                    <TouchableOpacity onPress={() => onChangeSelect(opt, index)} style={[styles.optContainer, {marginLeft: horizontal ? 10 : 0, marginTop: horizontal ? 0 : 10}]}>
                        <View style={styles.outlineCircle}>
                            {selected == index && <View style={styles.innerCircle} />}
                        </View>
                        <Text style={styles.txt}>{opt}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    outlineCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#419ED7',
    },
    txt: {
        marginLeft: 4,
    }
});

//make this component available to the app
export default CustomRadio;
