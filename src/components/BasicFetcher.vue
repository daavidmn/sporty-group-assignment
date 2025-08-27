<template>
  <div class="basic-fetcher">
    <v-form class="inputs-container">
      <v-text-field
        v-model="leagueValue"
        label="Search League"
        variant="solo-inverted"
        prepend-inner-icon="mdi-magnify"
        @update:modelValue="(value) => changeSearch(value)"
      />
      <v-select
        v-model="sportValue"
        clearable
        label="Sport type"
        :items="getSportsNames"
        prepend-inner-icon="mdi-magnify"
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
        :href="`/league/${league.idLeague}`"
      >
        <v-img
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        ></v-img>
      </v-card>
    </div>
    {{ sportValue }}
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

<style scoped>
.basic-fetcher {
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
}
</style>
