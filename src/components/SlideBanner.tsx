import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions, FlatList, ListRenderItem } from "react-native"
import useInterval from '../hooks/useInterval';

const root = Dimensions.get("window");

interface BannerData {
  source: NodeRequire;
}

const bannerData = [
  {
    source: require("../assets/img/slides/slide1.png"),
  },
  {
    source: require("../assets/img/slides/slide2.png"),
  },
  {
    source: require("../assets/img/slides/slide3.png"),
  },
]

export default function SlideBanner() {
  // const [slideIndex, setSlideIndex]

  // useInterval

  const slides = bannerData.map((banner) => (
    <View style={styles.eventBannerContainer}>
      <Image
        source={banner.source}
        style={styles.eventBannerImage}
      />
    </View>
  ))

  return (
    <FlatList
      style={styles.root}
      data={bannerData}
      renderItem={({ item }) => (
        <View style={styles.eventBannerContainer}>
          <Image
            source={item.source}
            style={styles.eventBannerImage}
          />
        </View>
      )}
      ItemSeparatorComponent={() => (
        <View style={{
          width: 20,
        }} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    overflow: "visible",
    gap: 20,
    rowGap: 20,

    marginTop: 16,
    marginHorizontal: 32,
  },

  eventBannerContainer: {
    // alignItems: "center",
  },

  eventBannerImage: {
    width: 280,
    height: 240,
    borderRadius: 16,
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    height: 12,

    marginTop: 12,
  }
})