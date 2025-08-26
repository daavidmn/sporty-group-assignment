export interface LeagueDTO {
  idLeague: string
  strLeague: string | null
  strSport: string | null
}
export interface AllLeaguesResponse {
  leagues: LeagueDTO[] | null
}
