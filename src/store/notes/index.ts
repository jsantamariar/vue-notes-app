import type { Note } from '@/types'
import { defineStore } from 'pinia'

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
      },
      {
        id: '517',
        title: 'Campaign small top continue.',
        description:
          'Brother else various fear left. Son small beautiful education growth hit mission teacher.\nProject fear like pressure author. Western window station ahead.\nSpeech cut then just production.'
      },
      {
        id: '408',
        title: 'Car dream special good main tough.',
        description:
          'Ask say send again note. Carry PM throw scientist computer situation. Quickly agency leave red trial modern. Assume movement turn agree.'
      },
      {
        id: '541',
        title: 'Letter billion appear house.',
        description:
          'Discuss nor free surface. Whom natural forward dark soon phone. Owner able government notice.\nGun resource rather sport student so easy. Friend fund dinner such subject.'
      },
      {
        id: '207',
        title: 'Situation student music.',
        description:
          'Stuff major list stock participant marriage. Adult over get little enjoy common development. Hot goal teach shoulder.'
      },
      {
        id: '126',
        title: 'Wear beautiful me article dog summer magazine.',
        description:
          'Lawyer throw different gun me sometimes avoid. Too development season reflect. Kitchen debate prepare raise.'
      },
      {
        id: '190',
        title: 'Floor involve music eye American answer relate.',
        description:
          'Wish rock me finish. Wrong white you into. Dinner consider moment degree fund.\nElse special decade. North walk mother approach development opportunity close. Be continue land walk affect film.'
      },
      {
        id: '168',
        title: 'Environmental bar her thus generation certainly education rest.',
        description:
          'Return of radio six election likely too. General operation per half modern. Road center learn dog. Behind both trial suffer consumer later want drive.'
      },
      {
        id: '363',
        title: 'Remember kitchen serve page better.',
        description:
          'Lot remain fight hold identify ok building marriage.\nSubject would deal campaign itself cost your. Still clearly guy reveal. Skin north after outside whose happen through.'
      }
    ] as Note[]
  }),
  actions: {
    addNewNote(note: Note) {
      this.notes.push(note)
    },
    removeNote(index: number) {
      this.notes.splice(index, 1)
    }
  }
})
