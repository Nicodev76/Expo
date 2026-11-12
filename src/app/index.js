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
      <View style={styles.header}></View>

      <View style={styles.elmentenFeld}>
        <View style={styles.hauptContainer}></View>
        <View style={styles.hauptContainer}></View>
        <View style={styles.hauptContainer}></View>
        <View style={styles.hauptContainer}></View>
        <View style={styles.hauptContainer}></View>
        <View style={styles.hauptContainer}></View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,

    paddingTop: 20,
    paddingBottom: 20,

    alignItems: "center",
    justifyContent: "space-between",
  },
  elmentenFeld: {
    flex: 1,

    marginTop: 20,

    paddingTop: 20,
    paddingBottom: 20,
    gap: 20,

    alignItems: "center",
    justifyContent: "space-between",

    height: 500,
    overflowY: "scroll",
  },
  text: {
    color: "#00FF66",
    fontSize: 20,
    fontWeight: "bold",
  },
  hauptContainer: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.2,
    borderRadius: 20,

    width: 300,
    height: 300,
  },

  // header

  header: {
    width: "90%",
    height: 40,

    backgroundColor: "#222222",
    borderRadius: 50,
  },
});
