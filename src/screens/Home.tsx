import React from 'react';
import { TouchableHighlight, StyleSheet, View, Text } from 'react-native';
import RecipeButton from '../components/RecipeButton';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Welcome</Text>
      </View>

      <View style={styles.recipesSection}>
        <Text style={styles.sectionTitle}>The basics</Text>
        <View style={styles.sectionButtons}>
          <RecipeButton />
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
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'sans-serif-medium',
  },
  recipesSection: {
    marginTop: 35,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  sectionTitle: {
    margin: 10,
    color: 'blue',
  },
  sectionButtons: {
    marginTop: 10,
  },
});

export default Home;
