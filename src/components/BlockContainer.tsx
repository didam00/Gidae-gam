import { View, Text, Image, StyleSheet } from "react-native";
import { MAIN_COLOR } from "../styles/variables";
import Emoji from "./Emoji";

interface BlockContainerParameter {
  title?: string;
  emoji?: string;
  children?: React.ReactNode;
  row?: boolean;
}

const BlockContainer = ({
  title,
  emoji,
  children,
  row = false
}: BlockContainerParameter) => {
  return (
    <View style={{
      flexDirection: row ? "row" : "column",
      justifyContent: row ? "space-between" : "flex-start"
    }}>
      { title &&
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
          {emoji && <Emoji name={emoji} />}
        </View>
      }
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
    marginRight: 4
  },
});

export default BlockContainer;