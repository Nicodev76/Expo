import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

export function LoginSeite() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if( !username || !password){
      alert("Bitte Benutzernamen und Password eingben.");
      return;
    }

    try{
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        
        body: JSON.stringify({
          username: username,
          password:password,
        })
      })

      const data = await response.json();

      if(response.ok){
        alert("Login erfolgreich Wilkommen.");
        
        if(data.is_temp_password){
          console.log("Erster Login mit Temporeren Passwort.");
        }
        else{
          console.log("Normaler Login", data.userId);
        }
      }
      else{
        console.error("Fehler: ", data.error);
      }
    }

    catch(err){
      console.error("Verbindungsfehler", err);
      alert("Der Server ist gerade nicht ereichbar.")
    }
  };

  return (
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
