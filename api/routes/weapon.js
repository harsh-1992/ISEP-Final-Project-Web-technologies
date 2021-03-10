import express from 'express'
import { getNightCity } from '../nightCity'
const router = express.Router();


// route to get weapons
router.get('/', async (req, res) => {
    const getElements = await getNightCity().getWeapons()
    res.json(getElements)
})


// route to get weapon by id
router.get('/get/:idWeapon', async (req, res) => {
    try {
        const { idWeapon } = req.params;
        const { weapon } = await getNightCity().getWeaponById(idWeapon)
        res.json(weapon)
    } catch (e) {
        res.sendStatus(500)
    }
})


// route to create a weapon
router.post('/', async (req, res) => {
    const { name, description, damage, accuracy, firerate } = req.body
    const createdElements = await getNightCity().createWeapon(name, description, damage, accuracy, firerate)
    res.json(createdElements)
})


// route to buy a weapon
router.post('/buy', async (req, res) => {
    try {
        const { idWeapon, idMerc } = req.body;
        const { weapon } = await getNightCity().getWeaponById(idWeapon)
        const { merc } = await getNightCity().getMercById(idMerc)
        if (weapon && merc) {
            // checking if merc has enough eddies
            if (merc.eddies >= weapon.price) {
                // updating the merc by attributing him the new weapon and removing eddies equal to the price
                await getNightCity().updateMerc(idMerc, { idWeapon, eddies: merc.eddies - weapon.price })
                res.json({ success: true, message: "The weapon has been purchased" })
            } else {
                res.json({ success: false, message: "Not enough money !" })
            }
        } else {
            res.sendStatus(404)
        }
    } catch (e) {
        res.sendStatus(500)
    }
})



export default router;