import express from 'express'
import { getNightCity } from '../nightCity'
const router = express.Router();


// route to get mercs
router.get('/', async (req, res) => {
    try {
        const getElements = await getNightCity().getMercs()
        res.json(getElements)
    } catch (e) {
        res.sendStatus(500)
    }

})


// route to create a merc
router.post('/', async (req, res) => {
    try {
        const { nickname, legalAge } = req.body
        const createdElements = await getNightCity().createMerc(nickname, legalAge)
        res.json(createdElements)
    } catch (e) {
        res.sendStatus(500)
    }

})




// route to get merc by id
router.get('/get/:mercId', async (req, res) => {
    try {
        const mercId = req.params.mercId
        const merc = await getNightCity().getMercById(mercId)
        res.json(merc)
    } catch (e) {
        res.sendStatus(500)
    }
})

export default router;