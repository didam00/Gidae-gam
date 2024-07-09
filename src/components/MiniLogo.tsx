import { StyleSheet, View, Image } from "react-native"

export default function MiniLogo() {
  return (
    <View style={styles.logoImageContainer}>
      <Image
        style={styles.logoImage}
        source={require("../assets/img/combination-logo-4x.png")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  logoImageContainer: {
    height: 22,
    width: 88
  },

  logoImage: {
    height: "100%",
    width: "100%"
  },
})