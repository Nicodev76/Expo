import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function LoginSeite() {
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
        ></TextInput>
        <TextInput
          style={styles.inputFeler}
          placeholder="Passwort"
          placeholderTextColor="#888"
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity style={styles.Button}>
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
