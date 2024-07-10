import { Alert, Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { LIGHT_GRAY, MAIN_COLOR, WHITE } from "../styles/variables";
import Emoji from "./Emoji";

const root = Dimensions.get("window");

const BoxButton = ({
  texts,
  emojiComponent,
  highlight = false,
}: {
  texts: string[],
  emojiComponent: React.JSX.Element,
  highlight?: boolean,
}) => {
  return (
    <Pressable
      style={[styles.root, highlight && styles.highlightRoot]}
      onPress={() => Alert.alert("착한 회사 찾아보기")}
    >
      <View style={styles.titleContainer}>
        <Text style={[styles.topText, styles.titleText, highlight && styles.highlightText]}>{texts[0]}</Text>
        {texts.length > 1 && texts.slice(1).map(text => (
          <Text
            style={[styles.titleText, highlight && styles.highlightText]}
          >{text}</Text>
        ))}
      </View>
      <View style={styles.emojiContainer}>
        { emojiComponent }
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    width: root.width / 2 - 30,
    height: 166,
    borderRadius: 16,
    borderWidth: 2,
    padding: 20,
    borderColor: LIGHT_GRAY,
    justifyContent: "space-between",
  },

  highlightRoot: {
    borderWidth: 0,
    backgroundColor: MAIN_COLOR,
  },
  
  titleContainer: {
    alignItems: "flex-end",
    fontSize: 24,
  },

  topText: {
    color: MAIN_COLOR,
  },

  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  highlightText: {
    color: WHITE
  },

  emojiContainer: {

  },
})

export default BoxButton;