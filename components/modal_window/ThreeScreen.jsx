import React, { useState } from "react"
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import * as SecureStore from "expo-secure-store"

export default function ThreeScreen({ goNext }) {
  const [inputValue, setInputValue] = useState("")
  const [storedData, setStoredData] = useState("")
  const [cleared, setCleared] = useState(false)

  const saveData = async () => {
    try {
      await SecureStore.setItemAsync("userData", inputValue)
      setInputValue("")
      console.log("Данные успешно сохранены.")
    } catch (error) {
      console.log("Ошибка при сохранении данных:", error)
    }
  }

  const getData = async () => {
    try {
      const data = await SecureStore.getItemAsync("userData")
      if (data !== null) {
        setStoredData(data)
        console.log("Найдены сохраненные данные:", data)
      } else {
        console.log("Данные не найдены.")
      }
    } catch (error) {
      console.log("Ошибка при получении данных:", error)
    }
  }

  return (
    <View>
      <Text>What's your mood now?</Text>
      <Text>СКРИН ТРИ</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={goNext}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
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
  button: {
    width: 360,
    height: 60,
    borderRadius: 30,
    marginBottom: 170,
    backgroundColor: "#8B4CFC",
    alignItems: "center",
    justifyContent: "center",
  },
})
