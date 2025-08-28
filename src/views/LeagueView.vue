<template>
  <div class="about">
    <v-container class="d-flex flex-row align-center justify-space-between">
      <div>
        <h1>{{ leagueDetails?.strLeague }}</h1>
        <h2>{{ leagueDetails?.strLeagueAlternate }}</h2>
        <div>{{ leagueDetails?.strSport }}</div>
        <div>{{ leagueDetails?.strCountry }}</div>
      </div>
      <div>
        <v-img
          v-if="seasonBadgeUrl"
          :src="seasonBadgeUrl"
          alt="Season Badge"
          width="200"
          height="200"
          class="my-4"
          contain
        />
      </div>
    </v-container>

    <h3>Description:</h3>
    <div>{{ leagueDetails?.strDescriptionEN }}</div>
  </div>
</template>

<script setup lang="ts">
import type { LeagueDTO } from '@/api/thesportsdb/types/leagues.api'
import { useLeagueStore } from '@/stores/leagueStore'
import { ref, onMounted } from 'vue'

const props = defineProps({
  id: String,
})

let leagueDetails = ref<LeagueDTO | null>(null)
let seasonBadgeUrl = ref<string>('')

const store = useLeagueStore()

function fetchLeagueDetails(id: string) {
  store.fetchLeagueById(id).then((result) => {
    leagueDetails.value = result ?? null
  })
}

function fetchBadge(id: string) {
  store.fetchSeasonByLeagueId(id).then((result) => {
    seasonBadgeUrl.value = result?.strBadge ?? ''
  })
}

onMounted(() => {
  if (props.id) {
    fetchLeagueDetails(props.id)
    fetchBadge(props.id)
  }
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
