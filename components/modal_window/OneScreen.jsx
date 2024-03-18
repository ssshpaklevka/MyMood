import React, { useState } from "react"
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useModalData } from "./ModalDataContext"

export default function OneScreen({ goNext }) {
  const navigation = useNavigation()

  const { updateModalData } = useModalData() // Используется хук для доступа к контексту

  const handleContinue = () => {
    updateModalData("selectedEmoji", selectedEmoji) // Обновляем контекст выбранным эмодзи
    goNext() // Переходим к следующей странице
  }

  const [selectedEmoji, setSelectedEmoji] = useState("")

  const handleEmojiSelection = emojiKey => {
    setSelectedEmoji(emojiKey) // Сохраняем выбор пользователя в локальном состоянии
  }

  const emojis = [
    {
      key: "Angry",
      url: "https://firebasestorage.googleapis.com/v0/b/mymood-7ee08.appspot.com/o/emoji%2Fangryface.png?alt=media&token=b1e281b1-a62b-49af-82d0-0a03fc26ff3a",
    },
    {
      key: "Sad",
      url: "https://firebasestorage.googleapis.com/v0/b/mymood-7ee08.appspot.com/o/emoji%2Fsadface.png?alt=media&token=a08427e9-da48-4d44-9c1a-950788a46d82",
    },
    {
      key: "Neutral",
      url: "https://firebasestorage.googleapis.com/v0/b/mymood-7ee08.appspot.com/o/emoji%2Fneutralface.png?alt=media&token=cb6384a0-0fb5-4902-9814-64a9bd7f84f3",
    },
    {
      key: "Smile",
      url: "https://firebasestorage.googleapis.com/v0/b/mymood-7ee08.appspot.com/o/emoji%2Fsmileface.png?alt=media&token=1a4b2127-4ea3-4b22-828b-058ca2ccb46e",
    },
    {
      key: "Happy",
      url: "https://firebasestorage.googleapis.com/v0/b/mymood-7ee08.appspot.com/o/emoji%2Fhappyface.png?alt=media&token=86632886-60f7-406f-a1a3-ff074c602ee2",
    },
  ]

  const getBackgroundColor = emojisKey => {
    switch (emojisKey) {
      case "Angry":
        return "#FF1F11"
      case "Sad":
        return "#FF5C00"
      case "Neutral":
        return "#FFD64F"
      case "Smile":
        return "#3686FF"
      case "Happy":
        return "#3CE862"
      default:
        return "transparent"
    }
  }

  return (
    <View style={styles.yourMood}>
      <View style={styles.header}>
        <Text style={styles.headerText}>What's your mood now?</Text>
        <Text style={styles.bottomText}>
          Select mood that reflects the most how you are feeling at this moment.
        </Text>
      </View>
      <View style={styles.selectMood}>
        <View style={styles.mood}>
          <View style={styles.emojiContainer}>
            {emojis.map(emojis => (
              <TouchableOpacity
                key={emojis.key}
                onPress={() => handleEmojiSelection(emojis.key)}
                style={[
                  styles.emojiButton,
                  {
                    backgroundColor:
                      selectedEmoji === emojis.key
                        ? getBackgroundColor(emojis.key)
                        : "transparent",
                  },
                ]}
              >
                <View styles={styles.circle}>
                  <Image
                    source={{ uri: emojis.url }}
                    style={styles.emojiImage}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          {selectedEmoji && (
            <Text style={styles.selectedEmojiText}>{selectedEmoji}</Text>
          )}
        </View>
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
  selectedEmoji: {
    backgroundColor: "#FFDE03", // or any other color
    borderRadius: 20,
  },
  yourMood: {
    marginTop: 30,
  },
  header: {
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bottomText: {
    textAlign: "center",
    marginTop: 17,
    fontSize: 24,
    fontWeight: "200",
  },
  selectMood: {
    justifyContent: "center",
    width: "100%",
    marginTop: 130,
  },
  mood: {
    height: 95,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 40,
    // borderBottomWidth: 10,
    // borderBottomColor: "#8B4CFC",
  },
  circle: {
    width: 64, // Задайте ширину и высоту по вашему желанию
    height: 64,
    borderRadius: 50, // Половина ширины (или высоты)
    backgroundColor: "white", // Задайте цвет фона по вашему желанию
    justifyContent: "center",
    alignItems: "center",
  },
  tinyMood: {
    width: 40,
    height: 40,
  },
  container: {
    alignItems: "center",
  },
  emojiContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  emojiButton: {
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
  },
  emojiImage: {
    marginRight: 5,
    marginLeft: 5,
    width: 45,
    height: 45,
  },
  selectedEmojiText: {
    fontSize: 24,
    fontWeight: "500",
  },
  button: {
    marginTop: 215,
    width: 360,
    height: 60,
    borderRadius: 30,
    marginBottom: 170,
    backgroundColor: "#8B4CFC",
    alignItems: "center",
    justifyContent: "center",
  },
})
