export interface SeasonDTO {
  strSeason: string | null
  strBadge: string | null
  strPoster: string | null
}

export interface AllSeasonsResponse {
  seasons: SeasonDTO[] | null
}
