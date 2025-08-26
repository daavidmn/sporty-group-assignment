import { tsdb, TSDB_KEY } from '../http'
import type { AllLeaguesResponse } from '../types/leagues.api'
import type { AllSportsResponse } from '../types/sports.api'
import type { TeamsResponse } from '../types/teams.api'

const API_KEY = TSDB_KEY

export async function listAllSports() {
  const { data } = await tsdb.get<AllSportsResponse>(`/${API_KEY}/all_sports.php`)
  return data.sports ?? []
}

export async function listAllLeagues() {
  const { data } = await tsdb.get<AllLeaguesResponse>(`/${API_KEY}/all_leagues.php`)
  return data.leagues ?? []
}

export async function listLeaguesByParams(country: string, sport: string) {
  const { data } = await tsdb.get<AllLeaguesResponse>(`/${API_KEY}/search_all_leagues.php`, {
    params: { c: country, s: sport },
  })
  return data.leagues ?? []
}

export async function searchTeamsByName(name: string) {
  const { data } = await tsdb.get<TeamsResponse>(`/${API_KEY}/searchteams.php`, {
    params: { t: name },
  })
  return data.teams ?? []
}

export async function lookupPlayerById(id: string) {
  const { data } = await tsdb.get(`/${API_KEY}/lookupplayer.php`, {
    params: { id },
  })
  return data
}
