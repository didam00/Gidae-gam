import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";
import { MAIN_COLOR } from "../styles/variables";

interface BlockContainerParameter {
  title?: string;
  emoji?: ImageSourcePropType;
  children?: React.ReactNode;
}

const BlockContainer = ({
  title,
  emoji,
  children
}: BlockContainerParameter) => {
  return (
    <View >
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
        <Image style={styles.emoji} source={emoji} />
      </View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleText: {
    fontSize: 24,
    color: MAIN_COLOR,
    fontWeight: "bold",
    // fontFamily: "Bold",
  },

  emoji: {
    height: 24,
    width: 24,
    marginLeft: 4,
  }
});

export default BlockContainer;