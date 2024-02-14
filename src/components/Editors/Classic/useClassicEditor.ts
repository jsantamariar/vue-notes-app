import { ref } from 'vue'
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'
import type { EventInfo } from '@ckeditor/ckeditor5-utils'

export const useClassicEditor = () => {
  /* states */
  const editorData = ref('')

  /* methods */
  function onReady(editor: ClassicEditor) {
    console.log('ClassicEditor is ready')
  }

  const onInput = (data: any, event: EventInfo, editor: ClassicEditor) => {}

  return {
    editor: ClassicEditor,
    editorData,
    onReady,
    onInput
  }
}
