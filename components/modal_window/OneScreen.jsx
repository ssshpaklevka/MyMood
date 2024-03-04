import React, { useState } from "react"
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native"

export default function OneScreen() {
  const [selectedEmoji, setSelectedEmoji] = useState("")
  const emojis = [
    { key: "angry", img: require("../../assets/img/angryface.png") },
    { key: "sad", img: require("../../assets/img/sadface.png") },
    { key: "neutral", img: require("../../assets/img/neutralface.png") },
    { key: "smile", img: require("../../assets/img/smileface.png") },
    { key: "happy", img: require("../../assets/img/happyface.png") },
  ]

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
          <View style={styles.container}>
            <View style={styles.emojiContainer}>
              {emojis.map(emojis => (
                <TouchableOpacity
                  key={emojis.key}
                  onPress={() => setSelectedEmoji(emojis.key)}
                  style={styles.emojiButton}
                >
                  <Image source={emojis.img} style={styles.emojiImage} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          {selectedEmoji && (
            <Text style={styles.selectedEmojiText}>{selectedEmoji}</Text>
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
    height: 127,
    marginTop: 150,
  },
  mood: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 10,
    borderBottomColor: "#8B4CFC",
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
    marginTop: 20,
  },
  emojiContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  emojiButton: {
    padding: 10,
    alignItems: "center",
  },
  emojiImage: {
    width: 40,
    height: 40,
  },
  selectedEmojiText: {
    fontSize: 24,

    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
})
