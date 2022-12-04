import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from './general-components/CustomButton';
import VaccineCard from './home-components/VaccineCard';

const data = [
    {
        name: "BCC",
        dose: "Dose única",
        date: "03/10/2022",
        url: "http://mt.corens.portalcofen.gov.br/wp-content/uploads/2021/04/Registro.jpg",
        nextDate: "12/11/2022",
    },
    {
        name: "Febre Amarela",
        dose: "1a Dose",
        date: "12/11/2022",
        url: "http://mt.corens.portalcofen.gov.br/wp-content/uploads/2021/04/Registro.jpg",
        nextDate: "25/09/2022",
    },
    {
        name: "Hepatite B",
        dose: "Dose única",
        date: "25/09/2022",
        url: "http://mt.corens.portalcofen.gov.br/wp-content/uploads/2021/04/Registro.jpg",
        nextDate: "12/11/2022",
    },
    {
        name: "Poliomelite",
        dose: "1a Dose",
        date: "31/03/2022",
        url: "http://mt.corens.portalcofen.gov.br/wp-content/uploads/2021/04/Registro.jpg",
        nextDate: "25/09/2022",
    },
];

const Home = (props) => {

    return (
        <View style={styles.container}>
            <View style={{marginVertical: 5}}>
                <TextInput placeholder='Pesquisar Vacina...' placeholderTextColor="black" style={styles.search}></TextInput>
            </View>
            <FlatList data={data} renderItem={(item) => <VaccineCard item={item} navigation={props.navigation} />} numColumns={2}/>
            <View>
                <CustomButton value="Nova Vacinaa" backgroundColor="#49b976" width={180} navigation={props.navigation} navigate='FormVaccineData' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#add4d0",
        padding: 10,
    },
    search: {
        backgroundColor: '#fff',
        color: 'black',
        height: 40,
    },
});

export default Home;
