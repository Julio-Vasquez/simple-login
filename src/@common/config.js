import { config } from 'dotenv'

config();

export const DOMAIN = process.env.REACT_APP_DOMAIN

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID