import { LinearGradient } from "expo-linear-gradient";
import { Button, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  const buttonPressed = () => {
    console.log("Button wurde gedrückt!");
  };

  return (
    <LinearGradient
      colors={["#0a0000", "#08084e"]}
      start={{ x: 0.49, y: 1.0 }}
      end={{ x: 0.51, y: 0.0 }}
      style={styles.container}
    >
      <Text style={styles.text}>Hallo Nico! Deine Startseite läuft! 🚀</Text>
      <Button title="Drück mich" onPress={buttonPressed} color="#149ec9" />
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
