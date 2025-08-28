<template>
  <div class="details" v-if="leagueDetails">
    <v-container class="d-flex flex-row align-center justify-space-between pa-0">
      <div>
        <h1>{{ leagueDetails?.strLeague }}</h1>
        <h3>{{ leagueDetails?.strLeagueAlternate }}</h3>
        <div>-</div>
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

    <div class="description-container pr-3">
      <p class="text-justify">{{ leagueDetails?.strDescriptionEN }}</p>
    </div>
  </div>

  <div class="details" v-else>
    <v-container class="pa-0">
      <v-row class="mb-10">
        <v-col>
          <v-skeleton-loader
            class="mx-auto"
            type="subtitle, subtitle, subtitle, paragraph"
          ></v-skeleton-loader>
        </v-col>
        <v-col>
          <v-skeleton-loader class="mx-auto" type="image"></v-skeleton-loader>
        </v-col>
      </v-row>
      <div class="description-container pr-3">
        <v-skeleton-loader
          class="mx-auto"
          type="paragraph, paragraph, paragraph, paragraph, paragraph"
        ></v-skeleton-loader>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import type { LeagueDTO } from '@/api/thesportsdb/types/leagues.api'
import router from '@/router'
import { useLeagueStore } from '@/stores/leagueStore'
import { ref, onMounted } from 'vue'

const props = defineProps({
  id: String,
})

const leagueDetails = ref<LeagueDTO | null>(null)
const seasonBadgeUrl = ref<string>('')

const store = useLeagueStore()

function fetchLeagueDetails(id: string) {
  store.fetchLeagueById(id).then((result) => {
    if (result) {
      leagueDetails.value = result ?? null
    } else {
      router.push({ name: 'not-found' })
    }
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
