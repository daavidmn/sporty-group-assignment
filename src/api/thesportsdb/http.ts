import axios from 'axios'

export const tsdb = axios.create({
  baseURL: import.meta.env.VITE_TSDB_URL,
})

export const TSDB_KEY = import.meta.env.VITE_TSDB_KEY
