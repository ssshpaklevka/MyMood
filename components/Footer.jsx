import React, { useState } from "react"
import { StyleSheet, View, TouchableOpacity } from "react-native"
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

  const openModal = () => setModalVisible(true)

  return (
    <>
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
          component={View} // Технический компонент, не будет использоваться
          listeners={({ navigation }) => ({
            tabPress: event => {
              event.preventDefault() // Отмена стандартного поведения перехода
              openModal() // Открытие модального окна
            },
          })}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='add-circle-outline' size={size} color={color} />
            ),
            tabBarButton: props => (
              <TouchableOpacity {...props} onPress={openModal}>
                <Ionicons name='add-circle' size={40} color={props.color} />
              </TouchableOpacity>
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
    </>
  )
}

const styles = StyleSheet.create({})
