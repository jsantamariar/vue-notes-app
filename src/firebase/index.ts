// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBzKYLTxpioOmvlbiKYtqxCnL35Iyun-uU',
  authDomain: 'vue-composition-blog.firebaseapp.com',
  projectId: 'vue-composition-blog',
  storageBucket: 'vue-composition-blog.appspot.com',
  messagingSenderId: '665132274099',
  appId: '1:665132274099:web:b7f265016d92b6a747fbc6',
  measurementId: 'G-40X6XY2HPC'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { db }
