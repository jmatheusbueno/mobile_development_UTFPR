import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
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

const Home = () => {
    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={(item) => <VaccineCard item={item}/>} numColumns={2} />
            <View>
                <CustomButton value="Nova Vacina" backgroundColor="#49b976" width={180} />
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
});

export default Home;
