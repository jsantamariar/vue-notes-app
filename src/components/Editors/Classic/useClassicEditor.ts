import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { v4 as uuidv4 } from 'uuid'
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'
import type { EventInfo } from '@ckeditor/ckeditor5-utils'
import { useNotesStore } from '@/store/notes'
import { useAuthStore } from '@/store/auth'
import { useDateFormat, useNow } from '@vueuse/core'
import type { Note } from '@/types'

export const useClassicEditor = () => {
  const route = useRoute()
  const router = useRouter()
  const { user } = useAuthStore()
  const { addNewNote, updateNote, getNoteContentById } = useNotesStore()

  /* states */
  const noteContent = getNoteContentById(route.params.id as string)
  const noteTitle = ref(noteContent?.title || '')
  const noteDescription = ref(noteContent?.description || '')
  const formatter = ref('YYYY-MM-DD')
  const formatted = useDateFormat(useNow(), formatter)

  /* methods */
  function onReady(editor: ClassicEditor) {
    console.log('ClassicEditor is ready')
  }

  const onInput = (data: any, event: EventInfo, editor: ClassicEditor) => {}

  const handleAddNote = () => {
    const newNote = {
      id: uuidv4(),
      createdBy: user?.email,
      created: formatted.value,
      title: noteTitle.value,
      description: noteDescription.value
    }

    addNewNote(newNote as Note)
    router.push({ name: 'Notes' })
  }

  const handleUpdateNote = async () => {
    const updatedNote = {
      id: noteContent?.id as string,
      createdBy: noteContent?.createdBy as string,
      created: noteContent?.created as string,
      title: noteTitle.value,
      description: noteDescription.value
    }
    console.log({ updatedNote })

    updateNote(noteContent?.id as string, updatedNote as Note)
    router.push({ name: 'Notes' })
  }

  const onCancel = () => {
    noteTitle.value = noteContent?.title as string
    noteDescription.value = noteContent?.description as string
  }

  return {
    editor: ClassicEditor,
    noteTitle,
    noteDescription,
    onReady,
    onInput,
    handleAddNote,
    handleUpdateNote,
    onCancel
  }
}
