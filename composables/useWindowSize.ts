import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useWindowSize() {
  const width = ref<number>(window.innerWidth)
  const height = ref<number>(window.innerHeight)

  const updateDimensions = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  onMounted(() => {
    window.addEventListener('resize', updateDimensions)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateDimensions)
  })

  return { width, height }
}
