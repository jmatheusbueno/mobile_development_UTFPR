import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NextVaccineCard = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtName}>{props.name}</Text>
            <Text style={styles.txtDate}>{props.date}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 7,
        padding: 10,
        marginVertical: 5,
    },
    txtName: {
        color: '#3F92C5',
        fontSize: 20
    },
    txtDate: {
        color: '#3F92C5',
        fontSize: 12
    }
});

export default NextVaccineCard;
