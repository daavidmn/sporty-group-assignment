import { tsdb, TSDB_KEY } from '../http'
import type { AllLeaguesResponse, LeagueResponse } from '../types/leagues.api'
import type { AllSeasonsResponse } from '../types/seasons.api'
import type { AllSportsResponse } from '../types/sports.api'
import type { TeamsResponse } from '../types/teams.api'

const API_KEY = TSDB_KEY

export async function listAllSports() {
  const { data } = await tsdb.get<AllSportsResponse>(`/${API_KEY}/all_sports.php`)
  return data.sports ?? []
}

export async function getAllLeagues() {
  const { data } = await tsdb.get<AllLeaguesResponse>(`/${API_KEY}/all_leagues.php`)
  return data.leagues ?? []
}

export async function getLeagueById(id: string) {
  const { data } = await tsdb.get<LeagueResponse>(`/${API_KEY}/lookupleague.php`, {
    params: { id },
  })
  return data.leagues ? data.leagues[0] : null
}

export async function getAllSeasonsByLeagueId(id: string) {
  const { data } = await tsdb.get<AllSeasonsResponse>(`/${API_KEY}/search_all_seasons.php`, {
    params: { badge: 1, id },
  })
  return data.seasons ? data.seasons[0] : null
}

export async function listLeaguesInACountry(country: string | null, sport: string | null) {
  const { data } = await tsdb.get<AllLeaguesResponse>(`/${API_KEY}/search_all_leagues.php`, {
    params: { c: country, s: sport },
  })
  return data.leagues ?? []
}

// Additional functions for teams and players

export async function getTeamsByName(name: string) {
  const { data } = await tsdb.get<TeamsResponse>(`/${API_KEY}/searchteams.php`, {
    params: { t: name },
  })
  return data.teams ?? []
}

export async function getPlayerById(id: string) {
  const { data } = await tsdb.get(`/${API_KEY}/lookupplayer.php`, {
    params: { id },
  })
  return data
}
