import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PopularCard = ({ title, company, location, salary, type, image }) => {
    return (
        <View style={styles.card}>
           
            <Image source={image} style={styles.companyLogo} />
            <View styles={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.company}>{company}</Text>
            </View>


            <View style={styles.footer}>
                <Text style={styles.salary}>{salary}</Text>
                <Text style={styles.location}>{location}</Text>
            </View>
           
        

        </View>
    );
};

const styles = StyleSheet.create({

    card: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleContainer: {
        flex: 1
    },

    companyLogo: {
        width: 40,
        height: 40,
        marginRight: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 3,

    },
    footer: {
      alignItems: 'flex-end',
      marginLeft: 'auto',
    },
    company: {
        fontSize: 14,
        color: '#666',
    },
    salary: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    location: {
        fontSize: 12,
        color: '#666',
    },
});

export default PopularCard;
