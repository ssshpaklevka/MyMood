import React, { useState } from "react"
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import * as SecureStore from "expo-secure-store"

export default function OneScreen({ goNext }) {
  const navigation = useNavigation()

  const [selectedEmoji, setSelectedEmoji] = useState("")
  const emojis = [
    { key: "Angry", img: require("../../assets/img/angryface.png") },
    { key: "Sad", img: require("../../assets/img/sadface.png") },
    { key: "Neutral", img: require("../../assets/img/neutralface.png") },
    { key: "Smile", img: require("../../assets/img/smileface.png") },
    { key: "Happy", img: require("../../assets/img/happyface.png") },
  ]

  const getBackgroundColor = emojiKey => {
    switch (emojiKey) {
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
                onPress={async () => {
                  setSelectedEmoji(emojis.key) // устанавливается выбранный emoji
                }}
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
                  <Image source={emojis.img} style={styles.emojiImage} />
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
        <TouchableOpacity style={styles.button} onPress={goNext}>
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
    width: 360,
    height: 60,
    borderRadius: 30,
    marginBottom: 170,
    backgroundColor: "#8B4CFC",
    alignItems: "center",
    justifyContent: "center",
  },
})
