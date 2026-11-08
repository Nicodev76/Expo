import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#05070d", "#0c1326", "#020408"]}
      start={{ x: 0.2, y: 0.0 }}
      end={{ x: 0.8, y: 1.0 }}
      style={styles.body}
    >
      <View></View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  body: {
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
