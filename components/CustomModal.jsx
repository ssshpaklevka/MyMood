import React, { useRef, useState } from "react"
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Swiper from "react-native-swiper"
import { BlurView } from "expo-blur"
import { LinearGradient } from "expo-linear-gradient"
import OneScreen from "./modal_window/OneScreen"
import TwoScreen from "./modal_window/TwoScreen"
import ThreeScreen from "./modal_window/ThreeScreen"

const CustomModal = ({ visible, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0)

  // эта хуйня нахуй не нужна, но без этого юзстейта приложение работать не хочет)0)
  const [countPage, setCountPage] = useState(0)

  const swiperRef = useRef(null)

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1, true)
    }
  }

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(-1, true)
    }
  }

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setCurrentPage(0)
        onClose()
      }}
    >
      <BlurView intensity={30} style={styles.blurArea}></BlurView>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {currentPage > 0 && (
          <TouchableOpacity style={styles.buttonBack} onPress={goPrev}>
            <View style={styles.circle}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>{"<"}</Text>
            </View>
          </TouchableOpacity>
        )}

        <View style={styles.counterPage}>
          <Text style={{ fontSize: 16 }}>{currentPage + 1} / 3</Text>
        </View>

        <TouchableOpacity style={styles.buttonClose} onPress={onClose}>
          <View style={styles.circle}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>{"X"}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        loop={false}
        onIndexChanged={index => setCurrentPage(index)}
      >
        <View>
          <OneScreen />
        </View>
        <View>
          <TwoScreen />
        </View>
        <View>
          <ThreeScreen />
        </View>
      </Swiper>
      <LinearGradient
        style={styles.modalView}
        colors={["#FFCEB7", "#BACFFF", "#C7CFF2"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        <TouchableOpacity style={styles.button} onPress={goNext}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </LinearGradient>
    </Modal>
  )
}

const styles = StyleSheet.create({
  blurArea: {
    height: 100,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
  },
  circle: {
    width: 30, // Задайте ширину и высоту по вашему желанию
    height: 30,
    borderRadius: 50, // Половина ширины (или высоты)
    backgroundColor: "white", // Задайте цвет фона по вашему желанию
    justifyContent: "center",
    alignItems: "center",
  },
  counterPage: {
    justifyContent: "center",
    alignContent: "center",
  },
  modalView: {
    backgroundColor: "white",
    width: "100%", // ширина модального окна
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  contentText: {
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  button: {
    width: 360,
    height: 60,
    borderRadius: 30,
    padding: 10,
    marginBottom: 15,
    elevation: 2,
    backgroundColor: "#8B4CFC",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBack: {
    alignItems: "flex-start",
    marginLeft: 15,
    marginTop: 15,
  },
  buttonClose: {
    alignItems: "flex-end",
    marginRight: 15,
    marginTop: 15,
  },
  wrapper: {},
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
})

export default CustomModal