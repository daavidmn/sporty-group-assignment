<template>
  <div class="basic-fetcher">
    <div class="inputs-container">
      <v-autocomplete
        label="Search League"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        variant="solo-inverted"
        prepend-inner-icon="mdi-magnify"
      ></v-autocomplete>
      <v-autocomplete
        label="Sport type"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        prepend-inner-icon="mdi-magnify"
      ></v-autocomplete>
    </div>
    <div class="results-container">
      <v-card
        title="strLeague"
        subtitle="strSport"
        text="strLeagueAlternate"
        variant="tonal"
      ></v-card>
      <v-card
        title="strLeague"
        subtitle="strSport"
        text="strLeagueAlternate"
        variant="tonal"
      ></v-card>
      <v-card
        title="strLeague"
        subtitle="strSport"
        text="strLeagueAlternate"
        variant="tonal"
      ></v-card>
      <v-card
        title="strLeague"
        subtitle="strSport"
        text="strLeagueAlternate"
        variant="tonal"
      ></v-card>
      <v-card
        title="strLeague"
        subtitle="strSport"
        text="strLeagueAlternate"
        variant="tonal"
      ></v-card>
      <v-card
        title="strLeague"
        subtitle="strSport"
        text="strLeagueAlternate"
        variant="tonal"
      ></v-card>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
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
