//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextVaccineCard from './general-components/NextVaccineCard';

// create a component
const NextVaccine = () => {
    return (
        <View style={styles.container}>
                <NextVaccineCard name='BCG' date='20/09/2022'></NextVaccineCard>
                <NextVaccineCard name='DTpa' date='20/09/2024'></NextVaccineCard>
                <NextVaccineCard name='Sarampo' date='03/04/2026'></NextVaccineCard>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        padding: 10,
        backgroundColor: "#add4d0",
    },
});

//make this component available to the app
export default NextVaccine;
