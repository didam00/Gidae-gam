import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, Dimensions, Alert} from 'react-native';
import Header from './src/components/Header';
import BlockContainer from './src/components/BlockContainer';
import * as Font from 'expo-font';
import SlideBanner from './src/components/SlideBanner';
import { EmojiType } from './src/types/global';
import { BLACK, DARK_MAIN_COLOR } from './src/styles/variables';

const Emoji: EmojiType = {
  smile: require("./src/assets/img/smile_star-icon.png"),
  fire: require("./src/assets/img/fire-icon.png"),
}

const App = () => {
  // const [fontLoaded, setFontLoaded] = useState(false);

  // useEffect(() => {
  //   const loadFonts = async () => {
  //     await Font.loadAsync({
  //       SemiBold: require("./src/assets/fonts/Pretendard-SemiBold.otf"),
  //       Bold: require("./src/assets/fonts/Pretendard-Bold.otf"),
  //       ExtraBold: require("./src/assets/fonts/Pretendard-ExtraBold.otf"),
  //     });
  //     setFontLoaded(true);
  //     console.log("font loaded.")
  //   }
  //   loadFonts()
  // }, []);

  return (
    <SafeAreaView style={styles.root}>
      <Header />
      <View style={styles.contents}>
        <BlockContainer
          title="이런 것도 있어요!"
          emoji={Emoji.smile}
        >
          <SlideBanner />
        </BlockContainer>
        <BlockContainer
          title="우리마을에 쌓인 돈이 벌써"
          emoji={Emoji.fire}
        >
          <Text style={styles.money}>416,157</Text>
        </BlockContainer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  contents: {
    flex: 1,
    paddingHorizontal: 24,
    gap: 48,
  },

  money: {
    fontSize: 48,
    color: DARK_MAIN_COLOR,
    fontWeight: "bold",
  }
});

export default App;