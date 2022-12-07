//import liraries
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import NextVaccineCard from './general-components/NextVaccineCard';

import { db } from '../configs/firebase';
import { collection, doc, onSnapshot, query } from 'firebase/firestore';

// create a component
const NextVaccine = () => {
    const [vaccines, setVaccines] = useState([]); 

    const q = query(collection(db, "vaccine"));
    useEffect(() => {
        onSnapshot(q, (result) => {
            const listVaccines = [];
            result.forEach((vaccine) => {
                listVaccines.push({
                    id: doc.id,
                    name: vaccine.data().name,
                    nextDate: vaccine.data().nextDate,
                });
            });

            setVaccines(listVaccines);
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList data={vaccines} renderItem={(item) => <NextVaccineCard item={item} />} numColumns={1} keyExtractor={item => item.id} />
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
