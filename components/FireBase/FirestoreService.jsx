import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore"
import { getAuth } from "firebase/auth"

const db = getFirestore()
const auth = getAuth()

export const saveDataToFirestore = async modalData => {
  const user = auth.currentUser

  if (user) {
    try {
      await addDoc(collection(db, `users/${user.uid}/posts`), {
        ...modalData,
        createdAt: serverTimestamp(),
      })
      console.log("Data saved successfully!")
    } catch (error) {
      console.error("Error saving data to Firestore:", error)
    }
  } else {
    console.log("No authenticated user found.")
  }
}
