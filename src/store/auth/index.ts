import { auth } from '@/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User
} from 'firebase/auth'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isLogged: false
  }),
  actions: {
    init() {
      const router = useRouter()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user
          this.isLogged = true
          router.push('/')
        } else {
          this.user = null
          this.isLogged = false
          router.push('/login')
        }
      })
    },
    async register(email: string, password: string) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          this.user = user
        })
        .catch((error) => {
          console.log(error)
          const errorCode = error.code
          const errorMessage = error.message
        })

      this.isLogged = true
    },
    async login(email: string, password: string) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
        })
        .catch((error) => {
          console.log(error)
          const errorCode = error.code
          const errorMessage = error.message
        })

      this.isLogged = true
    },
    async logout() {
      signOut(auth)
        .then(() => {
          console.log('Sign-out successful')
        })
        .catch((error) => {
          console.log(error)
        })
      this.isLogged = false
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
