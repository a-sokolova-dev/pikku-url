import { Router } from 'express'

import Url from '../models/Url.js'
import { generateShortLink } from '../utils/index.js'
import links from './links.js'

const router = Router()

router.use('/links', links)

router.get('/:id', async (req, res) => {
  try {
    let shortUrl = generateShortLink(req.params.id)
    let url = await Url.findOne({ shortUrl })
    if (url) {
      res.redirect(url.longUrl)
    } else res.status(404).json('Not found')
  } catch (err) {
    res.status(500).json('Server Error')
  }
})

export default router
