/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { TouchableHighlight, StyleSheet, View, Text, ImageBackground } from 'react-native';

interface RecipeButtonProps {
  title: string;
  fileUri: string;
}

const RecipeButton: React.FC<RecipeButtonProps> = (props) => {
  return (
    <TouchableHighlight>
      <ImageBackground source={{ uri: props.fileUri }} style={styles.container}>
        <View style={styles.overlay}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 180,
    marginBottom: 30,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  overlay: {
    flexDirection: 'row-reverse',
    padding: 7,
    height: 100,
    width: 180,
    backgroundColor: 'rgba(0, 0, 0, .3)',
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
