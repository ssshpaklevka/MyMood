import React from "react"
import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Reasons from "../screenArr/Reasons"

import { LinearGradient } from "expo-linear-gradient"
import { getFirestore, doc, setDoc } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { ModalDataProvider } from "./ModalDataContext"

export default function ThreeScreen({ goNext }) {
  // const { modalData } = useContext(ModalDataProvider) // Получаем данные из контекста
  // const auth = getAuth() // Получаем экземпляр Authentication
  // const firestore = getFirestore() // Получаем экземпляр Firestore

  // const saveData = async () => {
  //   if (auth.currentUser) {
  //     const userUid = auth.currentUser.uid // Получаем UID пользователя
  //     const userDocRef = doc(
  //       firestore,
  //       "users",
  //       userUid,
  //       "selections",
  //       "latest"
  //     ) // Путь к документу пользователя

  //     try {
  //       await setDoc(userDocRef, { ...modalData }, { merge: true }) // Сохраняем данные
  //       console.log("Data saved successfully!")
  //       goNext() // Переход к следующему экрану после успешного сохранения
  //     } catch (error) {
  //       console.error("Error saving data to Firestore:", error)
  //     }
  //   } else {
  //     console.log("No user logged in")
  //   }
  // }

  // const [inputValue, setInputValue] = useState("")
  // const [storedData, setStoredData] = useState("")
  // const [cleared, setCleared] = useState(false)

  // const saveData = async () => {
  //   try {
  //     await SecureStore.setItemAsync("userData", inputValue)
  //     setInputValue("")
  //     console.log("Данные успешно сохранены.")
  //   } catch (error) {
  //     console.log("Ошибка при сохранении данных:", error)
  //   }
  // }

  // const getData = async () => {
  //   try {
  //     const data = await SecureStore.getItemAsync("userData")
  //     if (data !== null) {
  //       setStoredData(data)
  //       console.log("Найдены сохраненные данные:", data)
  //     } else {
  //       console.log("Данные не найдены.")
  //     }
  //   } catch (error) {
  //     console.log("Ошибка при получении данных:", error)
  //   }
  // }

  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 25,
            textAlign: "center",
            width: 350,
            height: 60,
          }}
        >
          What reason making you feel this way?
        </Text>
        <Text style={{ fontSize: 14, marginTop: 10 }}>
          Select reasons that reflated your emotions
        </Text>

        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Ionicons name='search' size={20} color='black' />
          </View>
          <TextInput
            style={styles.input}
            placeholder='Search emotions'
            placeholderTextColor='#888'
          />
        </View>
      </View>
      <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 20 }}>
        All emotions
      </Text>

      <Reasons goNext={goNext} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 360,
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 3,
    marginTop: 25,
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#333",
    fontSize: 14,
  },
  header: {
    marginLeft: 18,
    marginTop: 60,
    alignItems: "left",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "900",
  },
  emojiImage: {
    width: 40,
    height: 40,
  },
})
