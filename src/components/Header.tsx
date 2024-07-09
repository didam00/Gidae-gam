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
    flexDirection: "row",

    paddingHorizontal: 30,
    paddingTop: 24,
    paddingBottom: 18,
    marginBottom: 16,
  },
});

export default Header;