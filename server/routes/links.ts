import { Router } from 'express'

import * as link from '../handlers/links.js'

const router = Router()

router.post('/', link.create)

export default router
