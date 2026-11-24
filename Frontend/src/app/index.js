import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [istSichtbar, setIstSichbar] = useState(false);
  const [geladeneAnsicht, setGeladeneAnsicht] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function passendeDatei(firmaId) {
    try {
      let modul;

      switch (Number(firmaId)) {
        case 1:
          modul = await import("../layouts/Firma1");
          break;
        case 2:
          modul = await import("../layouts/Firma2");
          break;
        default:
          throw new Error("Kein passendes Layout für Firmen-ID: " + firmaId);
      }

      if (!modul || !modul.default) {
        throw new Error("Die Datei wurde gefunden, hat aber kein 'export default'.");
      }

      setGeladeneAnsicht(() => modul.default);
      setIstSichbar(true);
    } catch (err) {
      console.error("Fehler beim Laden der Firmen Ansicht", err);
      alert("Die Firmenansicht konnte nicht geladen werden");
    }
  }
  if (istSichtbar && geladeneAnsicht) {
    const DynamischeKomponente = geladeneAnsicht;

    return (
      <LinearGradient
        colors={["#05070d", "#0c1326", "#020408"]}
        start={{ x: 0.2, y: 0.0 }}
        end={{ x: 0.8, y: 1.0 }}
        style={{
          flex: 1,

          paddingTop: 20,
          paddingBottom: 20,

          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <DynamischeKomponente></DynamischeKomponente>
      </LinearGradient>
    );
  }

  const login = async () => {
    if (!username || !password) {
      alert("Bitte Benutzernamen und Password eingben.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      console.log(data)

      if (response.ok) {
        alert("Login erfolgreich Wilkommen.");

        if (data.is_temp_password) {
          console.log("Erster Login mit Temporeren Passwort.");
        } else {
          console.log("Normaler Login", data.userId);
        }

        passendeDatei(data.firmaId);
      } else {
        console.error("Fehler: ", data.error);
      }
    } catch (err) {
      console.error("Verbindungsfehler", err);
      alert("Der Server ist gerade nicht ereichbar.");
    }
  };
  return (
    <LinearGradient
      colors={["#05070d", "#0c1326", "#020408"]}
      start={{ x: 0.2, y: 0.0 }}
      end={{ x: 0.8, y: 1.0 }}
      style={{
        flex: 1,

        paddingTop: 20,
        paddingBottom: 20,

        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",

          flex: 1,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 350,
            height: 250,

            borderRadius: 20,

            backgroundColor: "rgba(255, 255, 255, 0.5)",

            justifyContent: "center",
            alignItems: "center",

            gap: 20,
          }}
        >
          <TextInput
            style={styles.inputFeler}
            placeholder="Benutzerid"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
          ></TextInput>
          <TextInput
            style={styles.inputFeler}
            placeholder="Passwort"
            placeholderTextColor="#888"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          ></TextInput>
          <TouchableOpacity style={styles.Button} onPress={login}>
            <Text style={styles.ButtonText}>Anmelden</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  inputFeler: {
    width: 300,
    height: 40,

    borderRadius: 10,

    backgroundColor: "rgba(255,255,255,1)",

    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  Button: {
    width: 300,
    height: 40,

    backgroundColor: "rgb(27, 171, 235)",
    borderRadius: 10,

    alignItems: "center",
    justifyContent: "center",
  },
  ButtonText: {
    color: "rgba(255,255,255,1)",
    fontWeight: "500",
  },
});
