import * as React from "react"
import { useState } from "react"
import { Text, View, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { RadioButton } from "react-native-paper"
import { LinearGradient } from "expo-linear-gradient"

// Подключение шрифтов

// const fonts = () =>
//   Font.loadAsync({
//     "pop-bold": require("../assets/fonts/Poppins-Bold.ttf"),
//     "pop-medium": require("../assets/fonts/Poppins-Medium.ttf"),
//     "pop-regular": require("../assets/fonts/Poppins-Regular.ttf"),
//   })

export default function Settings() {
  // Шрифты
  // const [font, setFont] = useState(false)
  // if (font) {

  const [checkLang, setCheckLang] = useState("Russian")

  const [checkTheme, setCheckTheme] = useState("Automatic")

  const [dark, setDark] = useState(false)

  const switchTheme = (check, dark) => {
    setDark(dark)
    setCheckTheme(check)
  }

  // Градиент
  // ["#FFCEB7", "#BACFFF", "#C7CFF2"]

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={
        dark ? ["#fff", "#fff", "#fff"] : ["#FFCEB7", "#BACFFF", "#C7CFF2"]
      }
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <View style={styles.settings}>
        <View style={styles.theme}>
          <Text style={{ marginLeft: 10, marginTop: 7, fontWeight: "800" }}>
            Theme
          </Text>

          <View style={styles.switchTheme}>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                borderBottomColor: "black",
                borderBottomWidth: 1,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  marginLeft: 5,
                }}
              >
                <Ionicons name='contrast' size={20} color='black' />
                <Text style={{ marginLeft: 10, fontWeight: 600 }}>
                  Automatic
                </Text>
              </View>
              <RadioButton
                value='Automatic'
                status={checkTheme === "Automatic" ? "checked" : "unchecked"}
                onPress={() => switchTheme("Automatic", "")}
                color='black'
                uncheckedColor='grey'
              />
            </View>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                borderBottomColor: "black",
                borderBottomWidth: 1,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  marginLeft: 5,
                }}
              >
                <Ionicons name='sunny-outline' size={20} color='black' />
                <Text style={{ marginLeft: 10, fontWeight: 600 }}>Light</Text>
              </View>
              <RadioButton
                value='Light'
                status={checkTheme === "Light" ? "checked" : "unchecked"}
                onPress={() => switchTheme("Light", false)}
                color='black'
                uncheckedColor='grey'
              />
            </View>

            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginLeft: 5,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name='moon-outline' size={20} color='black' />
                <Text style={{ marginLeft: 10, fontWeight: 600 }}>Dark</Text>
              </View>
              <RadioButton
                value='Dark'
                status={checkTheme === "Dark" ? "checked" : "unchecked"}
                onPress={() => switchTheme("Dark", true)}
                color='black'
                uncheckedColor='grey'
              />
            </View>
          </View>
        </View>

        <View style={styles.language}>
          <Text style={{ fontWeight: "800" }}>Language</Text>
          <View style={styles.switchLanguage}>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "black",
                borderBottomWidth: 1,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 7,
                  fontWeight: 600,
                }}
              >
                Russian
              </Text>
              <RadioButton
                value='Russian'
                status={checkLang === "Russian" ? "checked" : "unchecked"}
                onPress={() => setCheckLang("Russian")}
                color='black'
                uncheckedColor='grey'
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ marginLeft: 10, marginTop: 7, fontWeight: 600 }}>
                English
              </Text>
              <RadioButton
                value='English'
                status={checkLang === "English" ? "checked" : "unchecked"}
                onPress={() => setCheckLang("English")}
                color='black'
                uncheckedColor='grey'
              />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
  // Шрифты
  // } else {
  //   return (
  //     <AppLoading
  //       onError={console.warn}
  //       startAsync={fonts}
  //       onFinish={() => setFont(true)}
  //     />
  //   )
  // }
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 18,
    marginTop: 60,
    alignItems: "left",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "900",
  },
  settings: {
    alignItems: "center",
  },
  theme: {
    alignItems: "center",
    marginTop: 32,
    borderRadius: 18,
    width: 355,
    height: 185,
    backgroundColor: "white",
  },
  switchTheme: {
    width: 340,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 18,
    marginTop: 30,
  },
  language: {
    alignItems: "center",
    marginTop: 32,
    borderRadius: 18,
    width: 355,
    height: 145,
    backgroundColor: "white",
  },
  switchLanguage: {
    width: 340,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 18,
    marginTop: 30,
  },
  radioAutomatic: {
    alignItems: "center",
  },
})
