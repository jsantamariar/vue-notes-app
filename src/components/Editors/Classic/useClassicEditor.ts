import { ref } from 'vue'

export const useClassicEditor = () => {
  const editorData = ref('')

  const onReady = (editorInstance: any) => {
    console.log('Editor is ready to use!', editorInstance)
  }

  const onChange = (event: any, editorInstance: any) => {
    const data = editorInstance.getData()
    console.log({ event, editorInstance, data })
  }
  return {
    editorData,
    onReady,
    onChange
  }
}
