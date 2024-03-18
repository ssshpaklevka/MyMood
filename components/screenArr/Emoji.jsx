import React, { useState } from "react"
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useModalData } from "../modal_window/ModalDataContext"

export default function Emoji({ goNext }) {
  const [selectedEmojis, setSelectedEmojis] = useState([])
  const { updateModalData } = useModalData() // Используется контекст

  // Обработчик нажатия так, чтобы он добавлял эмодзи или удалял его, если тот уже выбран

  // const toggleEmojiSelection = async emojiKey => {
  //   const index = selectedEmojis.indexOf(emojiKey)
  //   let newSelectedEmojis = [...selectedEmojis]

  //   if (index > -1) {
  //     // Удаляем эмодзи, если он уже был выбран
  //     newSelectedEmojis.splice(index, 1)
  //   } else {
  //     // Добавляем эмодзи, если он еще не был выбран
  //     newSelectedEmojis.push(emojiKey)
  //   }

  const toggleEmojiSelection = emojiKey => {
    const newSelectedEmojis = selectedEmojis.includes(emojiKey)
      ? selectedEmojis.filter(e => e !== emojiKey) // Удаляем эмодзи, если он уже был выбран
      : [...selectedEmojis, emojiKey] // Добавляем эмодзи, если он еще не был выбран

    setSelectedEmojis(newSelectedEmojis)
  }

  const handleContinue = () => {
    updateModalData("selectedEmojis", selectedEmojis) // Обновляем данные в контексте при нажатии на кнопку "Продолжить"
    goNext() // Переходим к следующей странице
  }

  const emojis = [
    { key: "Pouitng", img: require("../../assets/img/angryface.png") },
    { key: "Disappointed", img: require("../../assets/img/sadface.png") },
    { key: "Neutral", img: require("../../assets/img/neutralface.png") },
    { key: "Smile", img: require("../../assets/img/smileface.png") },
    { key: "Happy", img: require("../../assets/img/happyface.png") },
    { key: "Anxious", img: require("../../assets/img/anxiousface.png") },
    { key: "Confused", img: require("../../assets/img/confusedface.png") },
    { key: "Nose", img: require("../../assets/img/facenose.png") },
    { key: "Screaming", img: require("../../assets/img/facescreaming.png") },
    { key: "Tearsjoy", img: require("../../assets/img/facetearsjoy.png") },
    { key: "Grinning", img: require("../../assets/img/grinningface.png") },
    { key: "Horns", img: require("../../assets/img/hornsface.png") },
    { key: "Hot", img: require("../../assets/img/hotface.png") },
    { key: "Hugging", img: require("../../assets/img/huggingface.png") },
    { key: "Nauseated", img: require("../../assets/img/nauseatedface.png") },
    { key: "Smilling", img: require("../../assets/img/smilingface.png") },
    {
      key: "Smillingheart",
      img: require("../../assets/img/smilingfacehearts.png"),
    },
    { key: "Winking", img: require("../../assets/img/winkingface.png") },
    { key: "Woozy", img: require("../../assets/img/woozyface.png") },
  ]

  return (
    <View>
      <View style={styles.emojiSelect}>
        {emojis.map(emojis => (
          <TouchableOpacity
            key={emojis.key} //ВОЗМОЖНО НАДО БУДЕТ УДАЛИТЬ
            style={{ alignItems: "center", marginTop: 25 }}
            onPress={() => toggleEmojiSelection(emojis.img)}
          >
            <View style={styles.elipseEmoji}>
              <LinearGradient
                style={styles.circleGradient}
                // ДЛЯ КРУЖОЧКЕВ ЕСЛИ ЧТО МОЖНО ИСПОЛЬЗОВАТЬ ЕЩЕ ТАКОЙ ГРАДИЕНТ: #E5F3FF
                colors={
                  selectedEmojis.includes(emojis.img)
                    ? ["#FFFFFF", "#FFFFFF"] //ЦВЕТ ВЫБРАННЫХ ЭМОДЖИ
                    : ["#D3E0EB", "#E5F3FF"] //ЦВЕТ НЕ ВЫБРАННЫХ ЭМОДЖИ
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0 }}
              >
                <Image style={{ width: 54, height: 54 }} source={emojis.img} />
              </LinearGradient>
            </View>
            <Text style={styles.nameEmojis}>{emojis.key}</Text>
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
  nameEmojis: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    width: 360,
    height: 60,
    borderRadius: 30,
    marginBottom: 170,
    backgroundColor: "#8B4CFC",
    alignItems: "center",
    justifyContent: "center",
  },
})
