import { defineStore } from 'pinia'
import type { Note } from '@/types'

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: [
      {
        id: '185',
        title: 'Meet how beautiful expect early find moment.',
        description:
          'Answer hit idea state if share however process. Research high left wonder piece west event mind. Protect cover program data edge.\nDiscussion expert different office international energy.'
      },
      {
        id: '769',
        title: 'Listen industry life relate low yeah.',
        description:
          'Have see foreign true. Note lead special tonight seat.\nCover whatever product method push just. Different address yeah these country join number. Look though nearly score rich look.'
      }
    ] as Note[]
  }),
  getters: {
    getNoteContentById: (state) => {
      return (id: string) => {
        return state.notes.find((note) => note.id === id)
      }
    }
  },
  actions: {
    addNewNote(note: Note) {
      this.notes.unshift(note)
    },
    deleteNote(idToDelete: string) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete)
    }
  }
})
