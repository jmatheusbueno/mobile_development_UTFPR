import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const VaccineCard = (props) => {

    const { item } = props.item;

    const { navigation } = props;
    
    const goToFormVaccineData = () => {
        navigation.navigate('FormVaccineData', item);
    }

    return (
        <TouchableOpacity onPress={goToFormVaccineData}>
            <View style={styles.container}>
                <Text style={styles.txt.title}>{item.name}</Text>
                <View style={styles.viewDose}>
                    <Text style={styles.txt.dose}>{item.dose}</Text>
                </View>
                <Text style={styles.txt.date}>{item.date}</Text>
                <Image
                    style={styles.img}
                    source={{ uri: item.url }}
                />
                <Text style={styles.txt.nextDate}>Próxima dose em: {item.nextDate}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').width / 2 - 20,
        width: Dimensions.get('window').width / 2 - 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 5,
        justifyContent: 'space-between'
    },
    viewDose: {
        backgroundColor: '#3F92C5',
        paddingHorizontal: 7,
    },
    txt: {
        title: {
            color: '#3F92C5',
            fontSize: 22,
            fontWeight: 'bold',
        },
        dose: {
            color: '#fff'
        },
        date: {
            color: '#3F92C5',
        },
        nextDate: {
            color: '#FD7979',
            fontSize: 12,
        },
    },
    img: {
        width: 160,
        height: 80,
    }
});

export default VaccineCard;
