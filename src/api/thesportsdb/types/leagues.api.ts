export interface LeagueDTO {
  idLeague: string
  idSoccerXML: string | null
  idAPIfootball: string | null
  strSport: string | null
  strLeague: string | null
  strLeagueAlternate: string | null
  intDivision: string | null
  idCup: string | null
  strCurrentSeason: string | null
  intFormedYear: string | null
  dateFirstEvent: string | null
  strGender: string | null
  strCountry: string | null
  strWebsite: string | null
  strFacebook: string | null
  strInstagram: string | null
  strTwitter: string | null
  strYoutube: string | null
  strRSS: string | null
  strDescriptionEN: string | null
  strDescriptionDE: string | null
  strDescriptionFR: string | null
  strDescriptionIT: string | null
  strDescriptionCN: string | null
  strDescriptionJP: string | null
  strDescriptionRU: string | null
  strDescriptionES: string | null
  strDescriptionPT: string | null
  strDescriptionSE: string | null
  strDescriptionNL: string | null
  strDescriptionHU: string | null
  strDescriptionNO: string | null
  strDescriptionPL: string | null
  strDescriptionIL: string | null
  strTvRights: string | null
  strFanart1: string | null
  strFanart2: string | null
  strFanart3: string | null
  strFanart4: string | null
  strBanner: string | null
  strBadge: string | null
  strLogo: string | null
  strPoster: string | null
  strTrophy: string | null
  strNaming: string | null
  strComplete: string | null
  strLocked: string | null
}

export interface LeagueResponse {
  leagues: LeagueDTO[] | null
}

export interface AllLeaguesDTO {
  idLeague: string
  strLeague: string | null
  strSport: string | null
  strLeagueAlternate: string | null
}

export interface AllLeaguesResponse {
  leagues: AllLeaguesDTO[] | null
}
