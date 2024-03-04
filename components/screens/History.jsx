import * as React from "react"
import { Text, View, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export default function History() {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#FFCEB7", "#BACFFF", "#C7CFF2"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>History</Text>
      </View>
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
