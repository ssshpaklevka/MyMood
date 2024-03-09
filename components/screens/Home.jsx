import React, { useState, useEffect } from "react"
import { Text, View, StyleSheet, ScrollView, Button } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import * as SecureStore from "expo-secure-store"

export default function Home() {
  // const [storedData, setStoredData] = useState("")

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await SecureStore.getItemAsync("userData")
  //       if (data !== null) {
  //         setStoredData(data)
  //         console.log("Найдены сохраненные данные:", data)
  //       } else {
  //         console.log("Данные не найдены.")
  //       }
  //     } catch (error) {
  //       console.log("Ошибка при получении данных:", error)
  //     }
  //   }

  //   fetchData()

  //   // Очистка эффекта
  //   return () => {
  //     setStoredData("")
  //   }
  // }, [])

  // async function showStoredData() {
  //   try {
  //     const storedDataJson = await SecureStore.getItemAsync("emojiSelections")
  //     if (storedDataJson) {
  //       console.log("Stored data:", storedDataJson)
  //       // Для вывода в UI, вам потребуется изменить состояние и отобразить его содержимое в компоненте
  //       // Например: this.setState({dataToShow: storedDataJson});
  //     } else {
  //       console.log("No data found")
  //     }
  //   } catch (error) {
  //     console.log("Error retrieving the data", error)
  //   }
  // }
  // const [storedData, setStoredData] = useState([])
  // async function clearData() {
  //   try {
  //     await SecureStore.deleteItemAsync("emojiSelections")
  //     console.log("Data cleared successfully!")
  //   } catch (error) {
  //     console.log("Error clearing the data", error)
  //   }
  // }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const dataJson = await SecureStore.getItemAsync("emojiSelections")
  //       if (dataJson !== null) {
  //         const data = JSON.parse(dataJson)
  //         setStoredData(data)
  //         console.log("Найдены сохраненные данные:", data)
  //       } else {
  //         console.log("Данные не найдены.")
  //       }
  //     } catch (error) {
  //       console.log("Ошибка при получении данных:", error)
  //     }
  //   }

  //   fetchData()

  //   return () => {
  //     setStoredData([])
  //   }
  // }, [])

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#EED3F2", "#FBDCBF"]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0.5, y: 0 }}
    >
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Home</Text>
        </View>
        {/* {storedData.map((item, index) => (
          <Text key={index}>
            Emoji: {item.emoji}, Timestamp: {item.timestamp}
          </Text>
        ))} */}
      </ScrollView>
    </LinearGradient>
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
})
