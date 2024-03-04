import React, { useState } from "react"
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export default function Emoji() {
  const emojis = [
    { key: "pouitng", img: require("../../assets/img/angryface.png") },
    { key: "disappointed", img: require("../../assets/img/sadface.png") },
    { key: "neutral", img: require("../../assets/img/neutralface.png") },
    { key: "smile", img: require("../../assets/img/smileface.png") },
    { key: "happy", img: require("../../assets/img/happyface.png") },
    { key: "anxious", img: require("../../assets/img/anxiousface.png") },
    { key: "confused", img: require("../../assets/img/confusedface.png") },
    { key: "nose", img: require("../../assets/img/facenose.png") },
    { key: "screaming", img: require("../../assets/img/facescreaming.png") },
    { key: "tearsjoy", img: require("../../assets/img/facetearsjoy.png") },
    { key: "grinning", img: require("../../assets/img/grinningface.png") },
    { key: "horns", img: require("../../assets/img/hornsface.png") },
    { key: "hot", img: require("../../assets/img/hotface.png") },
    { key: "hugging", img: require("../../assets/img/huggingface.png") },
    { key: "nauseated", img: require("../../assets/img/nauseatedface.png") },
    { key: "smilling", img: require("../../assets/img/smilingface.png") },
    {
      key: "smillingheart",
      img: require("../../assets/img/smilingfacehearts.png"),
    },
    { key: "winking", img: require("../../assets/img/winkingface.png") },
    { key: "woozy", img: require("../../assets/img/woozyface.png") },
  ]

  return (
    <ScrollView>
      <View style={styles.emojiSelect}>
        {emojis.map(emojis => (
          <TouchableOpacity style={{ alignItems: "center", marginTop: 25 }}>
            <View style={styles.elipseEmoji}>
              <LinearGradient
                style={styles.circleGradient}
                colors={["#2250B8", "#C7CFF2"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 1 }}
              >
                <Image style={{ width: 44, height: 44 }} source={emojis.img} />
              </LinearGradient>
            </View>
            <Text style={styles.nameEmojis}>{emojis.key}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  emojiSelect: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  circleGradient: {
    width: 82,
    height: 82,
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
})
