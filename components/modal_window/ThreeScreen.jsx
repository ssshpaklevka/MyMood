import * as React from "react"
import { Text, View, StyleSheet } from "react-native"

export default function ThreeScreen() {
  return (
    <View>
      <Text>What's your mood now?</Text>
      <Text>СКРИН ТРИ</Text>
    </View>
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
