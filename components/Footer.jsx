import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import Home from "./screens/Home"
import Stats from "./screens/Stats"
import History from "./screens/History"
import Settings from "./screens/Settings"
import CustomModal from "./CustomModal"

export default function Footer() {
  const Tab = createBottomTabNavigator()

  const [modalVisible, setModalVisible] = useState(false)

  function openModal() {
    setModalVisible(true)
  }

  return (
    <NavigationContainer>
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            switch (route.name) {
              case "Home":
                iconName = focused ? "home" : "home-outline"
                break
              case "Stats":
                iconName = focused ? "stats-chart" : "stats-chart-outline"
                break
              case "History":
                iconName = focused ? "book" : "book-outline"
                break
              case "Setting":
                iconName = focused ? "settings" : "settings-outline"
                break

              default:
                break
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
        })}
      >
        <Tab.Screen
          options={{
            /*Помогает сделать хедер не таким видным -headerTransparent: true, */ headerShown: false,
            headerTitle: "BEBE",
          }}
          name='Home'
          component={Home}
        />
        <Tab.Screen
          options={{ headerShown: false, headerTitle: "Stats" }}
          name='Stats'
          component={Stats}
        />
        <Tab.Screen
          name='Add Mood'
          component={Home} // Используйте временный компонент, например Home
          listeners={() => ({
            tabPress: e => {
              // Предотвращаем стандартное поведение

              e.preventDefault()
              // Показываем Alert
              openModal()
            },
          })}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "add-circle" : "add-circle-outline"}
                size={size}
                color={"green"}
              />
            ),
          }}
        />

        <Tab.Screen
          options={{ headerShown: false, headerTitle: "History" }}
          name='History'
          component={History}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            headerTitle: "Settings",
          }}
          name='Setting'
          component={Settings}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
