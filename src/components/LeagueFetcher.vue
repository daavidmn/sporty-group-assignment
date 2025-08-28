<template>
  <v-form class="inputs-container">
    <v-text-field
      class="flex-lg-fill w-50"
      v-model="leagueValue"
      bg-color="background"
      label="Search League"
      variant="filled"
      prepend-inner-icon="mdi-shield-search"
      @update:modelValue="(value) => changeSearch(value)"
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
      @update:model-value="(e) => changeSearch(e)"
    />
  </v-form>
  <div class="results-container">
    <v-card
      v-for="league in filteredLeagues"
      :key="league.idLeague"
      :title="league.strLeague ?? ''"
      :subtitle="league.strSport ?? ''"
      text="strLeagueAlternate"
      variant="tonal"
      height="250px"
      :href="`/league/${league.idLeague}`"
      class="bg-background"
    >
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLeagueStore } from '@/stores/leagueStore'
import { debounce } from 'lodash'
import { computed } from 'vue'

const sportValue = defineModel<string>('sportValue')
const leagueValue = defineModel<string>('leagueValue')

const store = useLeagueStore()
const { allLeagues, getSportsNames } = storeToRefs(store)

const filteredLeagues = computed(() => {
  let leagues = allLeagues.value

  if (sportValue) {
    leagues = leagues.filter(
      (league) =>
        league.strSport &&
        league.strSport.toLowerCase().includes(sportValue?.value?.toLowerCase() ?? ''),
    )
  }

  if (leagueValue) {
    leagues = leagues.filter(
      (league) =>
        league.strLeague &&
        league.strLeague.toLowerCase().includes(leagueValue?.value?.toLowerCase() ?? ''),
    )
  }

  return leagues
})

const changeSearch = debounce((value: string) => {
  //
}, 300)

const fetchBadge = async (leagueId: string) => {
  const season = await store.fetchSeasonByLeagueId(leagueId)
  return season?.strBadge ?? ''
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
