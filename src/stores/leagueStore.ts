// src/stores/leagueStore.ts
import { defineStore } from 'pinia'
import type { SportDTO } from '@/api/thesportsdb/types/sports.api'
import type { AllLeaguesDTO } from '@/api/thesportsdb/types/leagues.api'
import {
  getAllLeagues,
  getAllSeasonsByLeagueId,
  getLeagueById,
  listAllSports,
} from '@/api/thesportsdb/endpoints/sportsService'
import type { SeasonDTO } from '@/api/thesportsdb/types/seasons.api'

export interface LeagueState {
  allSports: SportDTO[]
  allLeagues: AllLeaguesDTO[]
  loading: boolean
  error: string | null
}

export const useLeagueStore = defineStore('league', {
  state: (): LeagueState => ({
    allSports: [],
    allLeagues: [],
    loading: false,
    error: null,
  }),

  getters: {
    totalSports: (state) => state.allSports.length,
    getSportsNames: (state) =>
      state.allSports
        .map((s: SportDTO) => s.strSport)
        .filter((name: string | null): name is string => !!name),
    getByName: (state) => {
      return (name: string) =>
        state.allSports.find((s) => s.strSport && s.strSport.toLowerCase() === name.toLowerCase())
    },
  },

  actions: {
    async fetchAllSports() {
      this.loading = true
      this.error = null
      try {
        this.allSports = await listAllSports()
      } catch (e) {
        console.error('Error fetching Sports:', e)
        this.error = 'Error fetching Sports'
      } finally {
        this.loading = false
      }
    },

    async fetchAllLeagues() {
      this.loading = true
      this.error = null
      try {
        this.allLeagues = await getAllLeagues()
      } catch (e) {
        console.error('Error fetching Leagues:', e)
        this.error = 'Error fetching Leagues'
      } finally {
        this.loading = false
      }
    },

    async fetchSeasonByLeagueId(id: string) {
      this.loading = true
      this.error = null
      try {
        const season: SeasonDTO | null = await getAllSeasonsByLeagueId(id)
        return season
      } catch (e) {
        console.error('Error fetching Seasons:', e)
        this.error = 'Error fetching Seasons'
      } finally {
        this.loading = false
      }
    },

    async fetchLeagueById(id: string) {
      this.loading = true
      this.error = null
      try {
        const league = await getLeagueById(id)
        return league
      } catch (e) {
        console.error('Error fetching League by ID:', e)
        this.error = 'Error fetching League by ID'
      } finally {
        this.loading = false
      }
    },
  },

  persist: {
    storage: sessionStorage,
  },
})
