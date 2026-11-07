import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#0a0000", "#08084e"]}
      start={{ x: 0.49, y: 1.0 }}
      end={{ x: 0.51, y: 0.0 }}
      style={styles.container}
    >
      <View></View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#00FF66",
    fontSize: 20,
    fontWeight: "bold",
  },
});
