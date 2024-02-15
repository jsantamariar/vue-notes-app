import { ref } from 'vue'
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'
import type { EventInfo } from '@ckeditor/ckeditor5-utils'
import { useRoute, useRouter } from 'vue-router'
import { v4 as uuidv4 } from 'uuid'
import { useNotesStore } from '@/store/notes'

export const useClassicEditor = () => {
  const route = useRoute()
  const router = useRouter()
  const { addNewNote, updateNote, getNoteContentById } = useNotesStore()

  /* states */
  const postData = getNoteContentById(route.params.id as string)
  const postDescription = ref('')
  const postTitle = ref(postData?.title || '')
  const routeId = route.params.id

  /* methods */
  function onReady(editor: ClassicEditor) {
    console.log('ClassicEditor is ready')
    if (routeId) editor.setData(postData?.description as string)

    return
  }

  const onInput = (data: any, event: EventInfo, editor: ClassicEditor) => {}

  const handleAddNote = () => {
    const newNote = {
      id: uuidv4(),
      title: postTitle.value,
      description: postDescription.value
    }

    addNewNote(newNote)
    router.push({ name: 'Notes' })
  }

  const handleUpdateNote = () => {
    const updatedNote = {
      id: postData?.id as string,
      title: postTitle.value,
      description: postDescription.value
    }

    updateNote(postData?.id as string, updatedNote)
    router.push({ name: 'Notes' })
  }

  const onCancel = () => {
    postTitle.value = postData?.title as string
    postDescription.value = postData?.description as string
  }

  return {
    editor: ClassicEditor,
    postTitle,
    postDescription,
    onReady,
    onInput,
    handleAddNote,
    handleUpdateNote,
    onCancel
  }
}
