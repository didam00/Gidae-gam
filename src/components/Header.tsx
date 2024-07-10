import { StyleSheet, View } from "react-native";
import MiniLogo from "./MiniLogo";

const Header = () => {
  return (
    <View style={styles.header}>
      <MiniLogo />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    // position: "absolute",
    left: 0,
    top: 0,

    backgroundColor: "white",

    flexDirection: "row",

    paddingHorizontal: 30,
    paddingTop: 24,
    paddingBottom: 18,
    marginBottom: 16,
  },
});

export default Header;