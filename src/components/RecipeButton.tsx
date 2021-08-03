import React from 'react';
import { TouchableHighlight, StyleSheet, View, Text, ImageBackground } from 'react-native';

const RecipeButton: React.FC = () => {
  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          resizeMode="cover">
          <Text style={styles.text}>Arroz</Text>
        </ImageBackground>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 180,
    marginBottom: 30,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'sans-serif-medium',
  },
});

export default RecipeButton;
