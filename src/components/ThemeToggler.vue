<template>
  <v-btn
    @click="toggleManual()"
    aria-label="Toggle light/dark theme"
    variant="plain"
    :icon="theme == `light` ? `mdi-weather-sunny` : `mdi-weather-night`"
    class="text-background"
    density="comfortable"
  >
  </v-btn>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useConfigStore } from '@/stores/configStore'
import { storeToRefs } from 'pinia'
import { useTheme } from 'vuetify'
import type { Theme } from '@/stores/types/config.types'

const store = useConfigStore()
const { theme } = storeToRefs(store)

const vuetifyTheme = useTheme()

function toggleManual() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'

  vuetifyTheme.toggle()
}

onBeforeMount(() => {
  if (!theme.value) {
    theme.value = vuetifyTheme.name.value as Theme
  }
  vuetifyTheme.change(theme.value)
})
</script>
