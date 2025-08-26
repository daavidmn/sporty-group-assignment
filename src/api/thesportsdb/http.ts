import axios from 'axios'

export const tsdb = axios.create({
  baseURL: 'https://www.thesportsdb.com/api/v1/json',
})

export const TSDB_KEY = import.meta.env.VITE_TSDB_KEY
