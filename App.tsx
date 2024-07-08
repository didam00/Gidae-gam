import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, Dimensions} from 'react-native';
import MiniLogo from './src/components/MiniLogo';

const window = Dimensions.get("window");

const App = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.header}>
        <MiniLogo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingTop: 24,
    paddingBottom: 18,
  },

  blankSpace: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0
  },

  mainView: {
    gap: 20
  },
});

export default App;