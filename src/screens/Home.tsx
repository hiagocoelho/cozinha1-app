import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RecipeButton from '../components/RecipeButton';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Welcome to Cozinha1!</Text>
      </View>

      <View style={styles.recipesSection}>
        <Text style={styles.sectionTitle}>The basics.</Text>
        <View style={styles.sectionButtons}>
          <RecipeButton fileUri="https://i.imgur.com/hYgzaFd.jpg" title="White rice" />
          <RecipeButton fileUri="https://i.imgur.com/c89Zv9V.jpg" title="Beans" />
        </View>
      </View>

      <View style={styles.recipesSection}>
        <Text style={styles.sectionTitle}>Best drinks!</Text>
        <View style={styles.sectionButtons}>
          <RecipeButton fileUri="https://i.imgur.com/bYpfuF1.jpg" title="Margarita" />
          <RecipeButton fileUri="https://i.imgur.com/oerVOJE.jpg" title="Negroni" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subTitleContainer: {
    width: '100%',
    padding: 35,
    marginBottom: 35,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'sans-serif-medium',
  },
  recipesSection: {
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: 'rgb(243, 198, 0)',
  },
  sectionTitle: {
    margin: 10,
    color: 'black',
    fontFamily: 'sans-serif-medium',
  },
  sectionButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default Home;
