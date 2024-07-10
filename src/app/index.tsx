import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, Dimensions, Alert} from 'react-native';
import Header from '../components/Header';
import BlockContainer from '../components/BlockContainer';
import * as Font from 'expo-font';
import SlideBanner from '../components/SlideBanner';
import { BLACK, DARK_MAIN_COLOR, EmojiList } from '../styles/variables';
import BoxButton from '../components/BoxButton';
import Emoji from '../components/Emoji';

const App = () => {

  return (
    <SafeAreaView style={styles.root}>
      <Header />
      <View style={styles.contents}>
        <BlockContainer
          title="이런 것도 있어요!"
          emoji="smile"
        >
          <SlideBanner />
        </BlockContainer>
        <BlockContainer
          title="우리마을에 쌓인 돈이 벌써"
          emoji="fire"
        >
          <Text style={styles.money}>416,157<Text style={{fontWeight: 800}}>₩</Text></Text>
        </BlockContainer>
        <BlockContainer row>
          <BoxButton
            texts={["착한", "택시 회사", "찾아보기"]}
            emojiComponent={
              <Emoji name="go" width={38} height={22} />
            }
          ></BoxButton>
          <BoxButton
            texts={["착한", "택시 기사님", "부르기"]}
            emojiComponent={
              <Emoji name="call"/>
            }
            highlight={true}
          ></BoxButton>
        </BlockContainer>
        <View style={styles.arrowDown}>
          <Emoji name="arrow_down" />
        </View>
        <BlockContainer>
          
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
    gap: 32,
  },

  money: {
    fontSize: 40,
    color: DARK_MAIN_COLOR,
    fontWeight: "bold",
    margin: 4,
  },

  arrowDown: {
    alignItems: "center"
  }
});

export default App;