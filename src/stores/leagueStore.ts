// src/stores/leagueStore.ts
import { defineStore } from 'pinia'
import type { SportDTO as Sport } from '@/api/thesportsdb/types/sports.api'
import type { LeagueDTO as Leagues } from '@/api/thesportsdb/types/leagues.api'
import { listAllLeagues, listAllSports } from '@/api/thesportsdb/endpoints/sportsService'

export interface LeagueState {
  sports: Sport[]
  leagues: Leagues[]
  loading: boolean
  error: string | null
}

export const useLeagueStore = defineStore('league', {
  state: (): LeagueState => ({
    sports: [],
    leagues: [],
    loading: false,
    error: null,
  }),

  getters: {
    totalSports: (state) => state.sports.length,
    getByName: (state) => {
      return (name: string) =>
        state.sports.find((s) => s.strSport && s.strSport.toLowerCase() === name.toLowerCase())
    },
  },

  actions: {
    async fetchAllSports() {
      this.loading = true
      this.error = null
      try {
        this.sports = await listAllSports()
      } catch (e) {
        console.error('Error fetching sports:', e)
        this.error = 'Error fetching sports'
      } finally {
        this.loading = false
      }
    },

    async fetchAllLeagues() {
      this.loading = true
      this.error = null
      try {
        this.leagues = await listAllLeagues()
      } catch (e) {
        console.error('Error fetching leagues:', e)
        this.error = 'Error fetching leagues'
      } finally {
        this.loading = false
      }
    },
  },

  persist: {
    storage: sessionStorage,
  },
})
