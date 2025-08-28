import { defineStore } from 'pinia'
import type { Theme } from './types/config.types'

export interface ConfigState {
  theme: Theme
}

export const useConfigStore = defineStore('config', {
  state: (): ConfigState => ({
    theme: 'system',
  }),

  getters: {
    getTheme: (state) => state.theme,
  },

  actions: {
    setTheme(theme: Theme) {
      this.theme = theme
    },
  },

  persist: {
    storage: localStorage,
  },
})
