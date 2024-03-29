import { routes as home } from '../pages/home'
import { routes as auth } from '../modules/auth'
import { routes as register } from '../pages/register'
import { routes as series } from '../pages/series'
import { routes as watchlist } from '../pages/watchlist'
import { routes as showSerie } from '../pages/show-serie'
import { routes as watchedlist } from '../pages/watchedlist'

export default [
  ...auth,
  ...register,
  ...home,
  ...showSerie,
  ...watchlist,
  ...watchedlist,
  ...series
]
