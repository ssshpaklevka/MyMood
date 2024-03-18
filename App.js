import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Footer from "./components/Footer"
import Registration from "./components/Registration"
import { ModalDataProvider } from "./components/modal_window/ModalDataContext"

const Stack = createStackNavigator()

export default function App() {
  return (
    <ModalDataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Registration'>
          <Stack.Screen
            name='Registration'
            component={Registration}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='MainTabs'
            component={Footer}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ModalDataProvider>
  )
}

const styles = StyleSheet.create({})
