import { store as auth } from '@/modules/auth'
import { store as series } from '@/pages/series'
import { store as register} from '@/pages/register'
import { store as watchlist } from '@/pages/watchlist'
import { store as showSerie } from '@/pages/show-serie'
import { store as watchedlist } from '@/pages/watchedlist'

export default {
  auth,
  register,
  series,
  watchlist,
  showSerie,
  watchedlist
}
