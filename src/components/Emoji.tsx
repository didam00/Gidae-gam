import { Image, StyleSheet, View } from "react-native";
import { EmojiList } from "../styles/variables";

const Emoji = ({
  name,
  width,
  height,
}: {
  name: string,
  width?: number,
  height?: number,
}) => {

  return (
    <Image
      source={EmojiList[name]}
      style={{
        width: width ?? 24,
        height: height ?? 24,
      }}
    />
  )
}

const styles = StyleSheet.create({
  
})

export default Emoji;