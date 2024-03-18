// ModalDataContext.js
import React, { createContext, useContext, useState } from "react"

const ModalDataContext = createContext()

export const ModalDataProvider = ({ children }) => {
  const [modalData, setModalData] = useState({
    selectedEmoji: "",
    selectedEmojis: [],
    selectedTextBlocks: [],
    customText: "",
  })

  const updateModalData = (key, value) => {
    setModalData(prevData => {
      // Добавляем логирование для отладки
      console.log(`Updating modal data: ${key} =`, value)
      return { ...prevData, [key]: value }
    })
  }

  return (
    <ModalDataContext.Provider value={{ modalData, updateModalData }}>
      {children}
    </ModalDataContext.Provider>
  )
}

export const useModalData = () => useContext(ModalDataContext)
