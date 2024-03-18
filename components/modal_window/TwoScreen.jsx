import React from "react"
import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Emoji from "../screenArr/Emoji"

export default function TwoScreen({ goNext }) {
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
          Choose the emotions that make you fell neutral
        </Text>
        <Text style={{ fontSize: 14, marginTop: 10 }}>
          Select at least 1 emotion
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

      <Emoji goNext={goNext} />
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
