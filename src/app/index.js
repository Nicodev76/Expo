import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { HauptSeite } from "./haupt";
import { LoginSeite } from "./login";

export default function HomeScreen() {
  const [istSichbar, setIstSichbar] = useState(false);

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
      {istSichbar ? <HauptSeite /> : <LoginSeite />}
    </LinearGradient>
  );
}
