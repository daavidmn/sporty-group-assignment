<template>
  <v-form class="inputs-container">
    <v-text-field
      class="flex-lg-fill w-50"
      v-model="leagueValue"
      bg-color="background"
      label="Search League By Name"
      variant="filled"
      prepend-inner-icon="mdi-shield-search"
    />
    <v-select
      class="flex-fill w-50"
      v-model="sportValue"
      clearable
      bg-color="background"
      label="Select Sport"
      variant="filled"
      :items="getSportsNames"
      prepend-inner-icon="mdi-basketball"
    />
  </v-form>
  <div class="results-container" v-if="filteredLeagues.length">
    <v-card
      v-for="league in filteredLeagues"
      :key="league.idLeague"
      :title="league.strLeague ?? '-'"
      :subtitle="league.strSport ?? '-'"
      :text="league.strLeagueAlternate ?? '-'"
      variant="tonal"
      height="250px"
      :href="`/league/${league.idLeague}`"
      class="bg-background"
      v-intersect="
        (isIntersecting: boolean, entries: IntersectionObserverEntry[]) =>
          onIntersect(isIntersecting, entries, league)
      "
    >
      <v-img color="surface-variant" height="900" :src="league.strPoster ?? ''" cover> </v-img>
    </v-card>
  </div>
  <div v-else class="pa-10">
    <h2 class="text-center text-background">
      <v-icon icon="mdi-emoticon-sad-outline" size="x-small"></v-icon> No results found.
    </h2>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLeagueStore } from '@/stores/leagueStore'
import { computed } from 'vue'
import type { LeagueDTO } from '@/api/thesportsdb/types/leagues.api'

const store = useLeagueStore()
const { allLeagues, leaguesDetails, getSportsNames } = storeToRefs(store)

const sportValue = defineModel<string>('sportValue')
const leagueValue = defineModel<string>('leagueValue')

const filteredLeagues = computed(() => {
  let leagues: LeagueDTO[] = leaguesDetails.value

  if (sportValue.value) {
    leagues = leagues.filter(
      (league) =>
        league.strSport &&
        league.strSport.toLowerCase().includes(sportValue?.value?.toLowerCase() ?? ''),
    )
  }

  if (leagueValue.value) {
    leagues = leagues.filter(
      (league) =>
        league.strLeague &&
        league.strLeague.toLowerCase().includes(leagueValue?.value?.toLowerCase() ?? ''),
    )
  }

  return leagues
})

function onIntersect(
  isIntersecting: boolean | undefined,
  entries: IntersectionObserverEntry[],
  league: LeagueDTO,
) {
  if (isIntersecting) {
    if (!league.strLeagueAlternate) {
      store.fetchLeagueById(league.idLeague).then((result) => {
        if (result?.idLeague) {
          store.setLeaguesDetailsByLeague(result)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.league-fetcher {
  width: 100%;
}

.inputs-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.results-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    overflow-y: scroll;

    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Edge */
    }
  }
}
</style>
