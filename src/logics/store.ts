import { Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export const colorSchema = useLocalStorage('colorScheme', 'auto') as Ref<'auto' | 'dark' | 'light'>
