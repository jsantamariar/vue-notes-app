import { defineStore, acceptHMRUpdate } from 'pinia'
import type { Note } from '@/types'
import { db } from '@/firebase'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'

export const useNotesStore = defineStore('notes', {
  state: () => ({
    isLoading: true,
    notes: [] as Note[]
  }),
  getters: {
    getNoteContentById: (state) => {
      return (id: string) => {
        return state.notes.find((note) => note.id === id)
      }
    }
  },
  actions: {
    async getAllNotes() {
      //   this.isLoading = true
      //   const unsubscribe = onSnapshot(collection(db, 'notes'), (querySnapshot) => {
      //     const notes: Note[] = []
      //     querySnapshot.forEach((doc) => {
      //       notes.push({
      //         id: doc.id,
      //         title: doc.data().title,
      //         description: doc.data().description
      //       } as Note)
      //     })
      //     this.notes = notes
      //     this.isLoading = false
      //   })
      //   return unsubscribe

      if (this.notes.length > 0) return

      const querySnapshot = await getDocs(collection(db, 'notes'))
      querySnapshot.forEach((doc) => {
        const note = {
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description
        } as Note
        this.notes.push(note)
      })
    },
    addNewNote(newNote: Note) {
      this.notes.unshift(newNote)
    },
    updateNote(id: string, updatedNote: Note) {
      const noteIndex = this.notes.findIndex((note) => note.id === id)
      this.notes[noteIndex] = updatedNote
    },
    deleteNote(idToDelete: string) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNotesStore, import.meta.hot))
}
