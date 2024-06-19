import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const JobCard = ({ title, company, location, salary, type, image }) => {
  return (
    <View style={styles.featuredCard}>
      <View>
        <View style={styles.cardContainer}>
          <Image source={image} style={styles.companyLogo} />
          <View styles={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.company}>{company}</Text>
          </View>

        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  featuredCard: {
    backgroundColor: '#E0ECFF',
    marginRight: 15,
    width: 280,
    borderRadius: 20,
    padding: 20
  },
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
    
  },
  
  cardContainer: {
    flexDirection: 'row',
    height: 100,

  },
  titleContainer: {
    flexDirection: 'row',
  },
  companyLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 3,

  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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

export default JobCard;
