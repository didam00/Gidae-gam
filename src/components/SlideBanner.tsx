import React, {useEffect, useState, useRef} from 'react';
import { View, Image, StyleSheet } from "react-native"
import useInterval from '../hooks/useInterval';

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
  let [bannerIdx, setBannerIdx] = useState(0);
  let num = 0;

  useInterval(() => {
    setBannerIdx(
      (bannerIdx == bannerData.length - 1) ? 0 : bannerIdx + 1
    );
  }, 5000);

  return (
    <View>
      <View style={styles.eventBannerContainer}>
        <Image
          source={bannerData[bannerIdx].source}
          style={styles.eventBannerImage}
        />
      </View>
      <View style={styles.dots}>
        {
          bannerData.map((banner, i: number) => (
            <View style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: i === bannerIdx ? "#84CA8B" : "#F0F0F0"
            }} />
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  eventBannerContainer: {
    height: 188,
    alignItems: "center",
  },

  eventBannerImage: {
    height: 188,
    width: 352,
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