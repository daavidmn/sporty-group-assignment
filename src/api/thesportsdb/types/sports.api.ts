export interface SportDTO {
  idSport: string
  strSport: string | null
  strFormat: string | null
  strSportThumb: string | null
  strSportThumbBW: string | null
  strSportIconGreen: string | null
  strSportDescription: string | null
}

export interface AllSportsResponse {
  sports: SportDTO[] | null
}
