import { defineStore, acceptHMRUpdate } from 'pinia'
import type { Note } from '@/types'
import { db } from '@/firebase'
import { collection, deleteDoc, doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'

const notesCollectionRef = collection(db, 'notes')

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: [] as Note[],
    isLoadingNotes: false
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
      if (this.notes.length > 0) return

      this.isLoadingNotes = true
      onSnapshot(notesCollectionRef, (querySnapshot) => {
        const notes: Note[] = []
        querySnapshot.forEach((doc) => {
          notes.push({
            id: doc.id,
            createdBy: doc.data().createdBy,
            created: doc.data().created,
            title: doc.data().title,
            description: doc.data().description
          } as Note)
        })
        this.notes = notes
        this.isLoadingNotes = false
      })
    },
    async addNewNote(newNote: Note) {
      await setDoc(doc(notesCollectionRef, newNote.id), newNote)
    },
    async updateNote(noteId: string, updatedNote: Note) {
      await updateDoc(doc(notesCollectionRef, noteId), {
        id: updatedNote.id,
        createdBy: updatedNote.createdBy,
        created: updatedNote.created,
        title: updatedNote.title,
        description: updatedNote.description
      })
    },
    async deleteNote(idToDelete: string) {
      await deleteDoc(doc(db, 'notes', idToDelete))
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNotesStore, import.meta.hot))
}
