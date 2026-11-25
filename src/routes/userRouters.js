import { Router } from "express"
const router = Router()

router.get('/', (req, res) => { console.log('Rota funcionando') })

export default router
