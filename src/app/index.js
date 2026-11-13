import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#05070d", "#0c1326", "#020408"]}
      start={{ x: 0.2, y: 0.0 }}
      end={{ x: 0.8, y: 1.0 }}
      style={styles.body}
    >
      <View style={styles.header}></View>

      <ScrollView contentContainerStyle={styles.elmentenFeld}>
        <View style={styles.hauptContainer}>
          <View>
            {/* Oberer Abteil vom elmentenfeld mit icon und Name */}

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View style={styles.symbolView}></View>
              <View>
                <Text style={{ color: "gray", fontWeight: "500" }}>
                  Documentation
                </Text>
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "bold",
                  }}
                >
                  Service Schein
                </Text>
              </View>
            </View>

            {/* Unterer Abteil vom elmentenfeld mit einer Kurzen beschreibung dieses elments */}
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "600", color: "#393a3a" }}>
                Service-Aufträge erfassen und Arbeizzeiten documentiren und
                Unterschrifeten von Kunden einholen
              </Text>
            </View>
          </View>
          <View style={styles.öffnenButton}>
            <Text style={{ color: "rgba(9, 190, 255, 1)", fontWeight: "bold" }}>
              öffnen →
            </Text>
          </View>
        </View>
      </ScrollView>
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
  },
  hauptContainer: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20,

    padding: 20,

    width: 350,
    height: 200,

    justifyContent: "space-between",
  },
  öffnenButton: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 1)",
    paddingTop: 10,
  },
  symbolView: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(9, 190, 255, 1)",
    borderRadius: 10,
  },

  // header

  header: {
    width: 350,
    height: 40,

    backgroundColor: "#222222",
    borderRadius: 50,
  },
});
