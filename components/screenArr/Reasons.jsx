import React, { useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { useModalData } from "../modal_window/ModalDataContext" // Убедитесь в правильности пути

export default function Reasons({ goNext }) {
  const [selectedReasons, setSelectedReasons] = useState([])
  const { updateModalData } = useModalData()

  const toggleReasonSelection = reasonKey => {
    const index = selectedReasons.indexOf(reasonKey)
    let newSelectedReasons = [...selectedReasons]

    if (index > -1) {
      // Удаляем текст, если он уже был выбран
      newSelectedReasons.splice(index, 1)
    } else {
      // Добавляем текст, если он еще не был выбран
      newSelectedReasons.push(reasonKey)
    }
    setSelectedReasons(newSelectedReasons)
  }

  const handleContinue = () => {
    updateModalData("selectedTextBlocks", selectedReasons) // Обновляем данные в контексте при нажатии на кнопку "Продолжить"
    goNext() // Переходим к следующей странице
  }

  const reasons = [
    { key: 1, name: "Family" },
    { key: 2, name: "Self esteem" },
    { key: 3, name: "Sleep" },
    { key: 4, name: "Social" },
    { key: 5, name: "Work" },
    { key: 6, name: "Hobbies" },
    { key: 7, name: "Family" },
    { key: 8, name: "Breakup" },
    { key: 9, name: "Weather" },
    { key: 10, name: "Wife" },
    { key: 11, name: "Party" },
    { key: 12, name: "Love" },
    { key: 13, name: "Food" },
    { key: 14, name: "Distant" },
    { key: 15, name: "Content" },
    { key: 16, name: "Exams" },
  ]

  return (
    <View>
      <View style={styles.emojiSelect}>
        {reasons.map(reasons => (
          <TouchableOpacity
            key={reasons.key} //ВОЗМОЖНО НАДО БУДЕТ УДАЛИТЬ
            style={{ alignItems: "center", marginTop: 25 }}
            onPress={() => toggleReasonSelection(reasons.name)}
          >
            <View style={styles.viewReasons}>
              <Text style={styles.nameReasons}>{reasons.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  emojiSelect: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  circleGradient: {
    marginLeft: 7,
    marginRight: 7,
    width: 92,
    height: 92,
    borderRadius: 50, // Половина ширины/высоты для круглой формы
    backgroundColor: "linear-gradient(45deg, #000000, #666666)", // Цвет фона круга
    justifyContent: "center",
    alignItems: "center",
  },
  nameReasons: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  button: {
    marginTop: 70,
    width: 360,
    height: 60,
    borderRadius: 30,
    marginBottom: 170,
    backgroundColor: "#8B4CFC",
    alignItems: "center",
    justifyContent: "center",
  },
  viewReasons: {
    marginLeft: 7,
    marginRight: 7,
    width: 70,
    height: 50,
    borderWidth: 1,
    borderRadius: 25, // Половина ширины/высоты для круглой формы
    justifyContent: "center",
    alignItems: "center",
  },
})
