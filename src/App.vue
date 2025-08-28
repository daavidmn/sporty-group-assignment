<template>
  <v-theme-provider :theme="theme.name.value">
    <header class="bg-backgroundAlt">
      <ThemeToggler />
    </header>
    <main class="bg-background">
      <div class="main-container">
        <div class="logo-container">
          <v-img alt="Leagues Fetcher" :aspect-ratio="1" :src="logo" width="450" />
          <h3>Find your leagues data here!</h3>
        </div>

        <nav>
          <v-card
            append-icon="mdi-open-in-new"
            class="mx-auto"
            href="https://github.com/daavidmn/sporty-group-assignment"
            max-width="344"
            prepend-icon="mdi-github"
            rel="noopener"
            target="_blank"
            title="GitHub Repository"
            variant="text"
          />
        </nav>
      </div>

      <RouterView class="router-view bg-backgroundAlt" />
    </main>
  </v-theme-provider>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useLeagueStore } from '@/stores/leagueStore'
import ThemeToggler from './components/ThemeToggler.vue'
import logo from './assets/leagues_fetcher_logo.png'
import { useTheme } from 'vuetify'

const theme = useTheme()

const store = useLeagueStore()
const { allSports, allLeagues } = storeToRefs(store)

onBeforeMount(() => {
  if (!allSports.value.length) store.fetchAllSports()

  if (!allLeagues.value.length) store.fetchAllLeagues()
})
</script>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 2rem;
  z-index: 10;
}

.main-container {
  line-height: 1.5;
  max-height: 100vh;
  min-width: 50%;

  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    gap: 10px;
  }
}

.logo {
  display: block;
  margin: 0 auto;
}

nav {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

main {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  overflow: visible;
  width: 100%;
  min-width: 80vw;
  margin: 60px auto 0 auto;
}

@media (min-width: 1024px) {
  main {
    overflow: hidden;
    gap: 0;
    height: calc(100vh - 60px);
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

.router-view {
  padding: 0 2rem 2rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: visible;
  background: var(--color-background-alt);
  color: var(--color-text-alt);
}

@media (min-width: 1024px) {
  .router-view {
    overflow: hidden;
  }
}
</style>
