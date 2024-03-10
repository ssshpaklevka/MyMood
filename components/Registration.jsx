import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import { initializeApp } from "@firebase/app"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBR9L7dsf8iZ1y9Tv7eXvZA2Sujjryrc-E",
  authDomain: "mymood-7ee08.firebaseapp.com",
  projectId: "mymood-7ee08",
  storageBucket: "mymood-7ee08.appspot.com",
  messagingSenderId: "129999086896",
  appId: "1:129999086896:web:8d06b16fdb19a5c0fb14f5",
  measurementId: "G-Q5W8FCYV6T",
}

const app = initializeApp(firebaseConfig)

//РЕГИСТРАЦИЯ\АВТОРИЗАЦИЯ
export const AuthScreen = ({
  email,
  setEmail,
  password,
  setPassword,
  isLogin,
  setIsLogin,
  handleAuthentication,
}) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>
        {isLogin ? "Войти" : "Зарегистрироваться"}
      </Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder='Email'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder='Password'
        secureTextEntry
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleAuthentication}
        >
          <Text style={styles.buttonText}>
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Нет аккаунта? Зарегистрируйтесь"
            : "Уже есть аккаунт? Войдите"}
        </Text>
      </View>
    </View>
  )
}

//ОКНО ПРИВЕТСТВИЯ И ВЫХОДА
export const AuthenticatedScreen = ({ user, handleAuthentication }) => {
  return <></>
}
export default App = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null) // Track user authentication state
  const [isLogin, setIsLogin] = useState(true)
  const navigation = useNavigation()
  const auth = getAuth(app)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [auth])

  const handleAuthentication = async () => {
    try {
      if (user) {
        // Если пользователь уже аутентифицирован, выполняется выход
        console.log("User logged out successfully!")
        await signOut(auth)
      } else {
        // Вход или регистрация
        if (isLogin) {
          // Вход
          await signInWithEmailAndPassword(auth, email, password)
          console.log("User signed in successfully!")
        } else {
          // Регистрация
          await createUserWithEmailAndPassword(auth, email, password)
          console.log("User created successfully!")
        }
      }
      navigation.navigate("MainTabs")
    } catch (error) {
      console.error("Authentication error:", error.message)
    }
  }
  //ОТОБРАЖЕНИЕ ОКНА РЕГИСТРАЦИИ И АВТОРИЗАЦИИ
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#EED3F2", "#FBDCBF"]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0.5, y: 0 }}
    >
      <View style={styles.container}>
        {user ? (
          // Show user's email if user is authenticated
          <AuthenticatedScreen
            user={user}
            handleAuthentication={handleAuthentication}
          />
        ) : (
          // Show sign-in or sign-up form if user is not authenticated
          <AuthScreen
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            handleAuthentication={handleAuthentication}
          />
        )}
      </View>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 18,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 18,
  },
  buttonContainer: {
    width: "90%",
    height: 50,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: "#8B4CFC",
    alignItems: "center",
    justifyContent: "center",
  },
  toggleText: {
    fontSize: 15,
    marginTop: 10,
    color: "#8B4CFC",
    textAlign: "center",
  },
  bottomContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
})
