<template>
  <div class="details">
    <v-container class="d-flex flex-row align-center justify-space-between pa-0">
      <div>
        <h1>{{ leagueDetails?.strLeague }}</h1>
        <h2>{{ leagueDetails?.strLeagueAlternate }}</h2>
        <h3>{{ leagueDetails?.strSport }}</h3>
        <h3>{{ leagueDetails?.strCountry }}</h3>
      </div>

      <v-img
        v-if="seasonBadgeUrl"
        :src="seasonBadgeUrl"
        alt="Season Badge"
        width="200"
        height="200"
        class="my-4"
        contain
      />
    </v-container>

    <div class="description-container">
      <p class="text-justify">{{ leagueDetails?.strDescriptionEN }}</p>
    </div>
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

<style scoped lang="scss">
.details {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 0 0 1rem 0;
}
@media (min-width: 1024px) {
  .details {
    overflow: hidden;
  }
}

.description-container {
  height: auto;
  width: 100%;
  padding: 1rem 0;
  overflow-y: visible;

  @media (min-width: 1024px) {
    overflow-y: scroll;
  }
}
</style>
