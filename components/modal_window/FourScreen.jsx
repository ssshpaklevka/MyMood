import React, { useState } from "react"
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native"
import { useModalData } from "./ModalDataContext"
import { saveDataToFirestore } from "../FireBase/FirestoreService"

export function FourScreen() {
  const [note, setNote] = useState("")
  const { modalData, updateModalData } = useModalData()

  const handleSave = async () => {
    // Обновляем контекст данными заметки
    updateModalData("customText", note)

    // Дополняем существующие данные в контексте текстом заметки
    const fullData = { ...modalData, customText: note }

    // Сохраняем все собранные данные в Firestore
    await saveDataToFirestore(fullData)

    // Здесь может быть код для перехода к следующему шагу или закрытия модального окна
  }

  return (
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
        Any thing you want to add
      </Text>
      <Text style={{ fontSize: 14, marginTop: 9 }}>
        Add your notes on any thought that reflating your mood
      </Text>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.styleInput}
          placeholder='Напиши заметку'
          value={note}
          onChangeText={setNote}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewInput: {
    marginTop: 50,
  },
  styleInput: {
    backgroundColor: "white",
    width: 378,
    height: 280,
    borderRadius: 18,
    borderWidth: 1,
  },
  button: {
    marginTop: 150,
    width: 360,
    height: 60,
    borderRadius: 30,
    marginBottom: 170,
    backgroundColor: "#8B4CFC",
    alignItems: "center",
    justifyContent: "center",
  },
})
