import express from 'express'
import { getNightCity } from '../nightCity'
const router = express.Router();


// route to get jobs
router.get('/', async (req, res) => {
    try {
        const getElements = await getNightCity().getJobs()
        res.json(getElements)
    } catch (e) {
        res.sendStatus(500)
    }
})


router.get('/test', async (req, res) => {
    try {
        const job = {
            id: 1,
            fixer: "Rogue",
            title: "Simple theft",
            description: "Simple job: a ripperdoc working with the 6thStreet gang stole a microchip from one of his customers, and the customer wants it back.\nWe know the thief bastards did not yet gave it to the gang, so the job is to retrieve it before it happens.\nThe microchip is the only priority, the lives of the ripperdoc and his bodyguard are not.",
            henchmenCount: 2,
            reward: 500,
            isAvailable: 1
        }
        res.json({ job })
    } catch (e) {
        res.sendStatus(500)
    }
})




// route to create a job
router.post('/', async (req, res) => {
    try {
        const { fixer, title, description, henchmenCount, reward } = req.body
        const createdElements = await getNightCity().createJob(fixer, title, description, henchmenCount, reward)
        res.json(createdElements)
    } catch (e) {
        res.sendStatus(500)
    }

})

// route to get job by id
router.get('/get/:jobId', async (req, res) => {
    try {
        const jobId = req.params.jobId
        const job = await getNightCity().getJobById(jobId)
        res.json(job)
    } catch (e) {
        res.sendStatus(500)
    }
})


function fight(job, merc, weapon) {
    // function returning true if merc wins
    // false is henchmen kill the merc
    let mercHealthPoints = 100;


    for (let count = 0; count < job.henchmenCount; count++) {
        let henchmenHealthPoints = 100;
        let mercTurn = true;

        while (mercHealthPoints > 0 || henchmenHealthPoints > 0) {
            // the merc attacks first
            if (mercTurn) {
                // attacking firerate times
                for (let time = 0; time < weapon.firerate; time++) {
                    // attacking the henchmen according to accuracy percentage
                    let randomNumber = Math.random() * 100;
                    if (randomNumber < weapon.accuracy) {
                        // this will attack according the accuracy probability
                        henchmenHealthPoints = henchmenHealthPoints - weapon.damage;
                    }

                }
                mercTurn = false
            } else {
                // the henchmen attacks
                // hencmen always inflicts damage of 10
                mercHealthPoints = mercHealthPoints - 10

                mercTurn = true
            }
            if (mercHealthPoints <= 0) {
                return true
            }

            if (henchmenHealthPoints <= 0) {
                return false
            }

        }

    }
}

// route to get a job done
router.post('/get-done', async (req, res) => {
    try {
        const { idJob, idMerc } = req.body

        const { job } = await getNightCity().getJobById(idJob)
        const { merc } = await getNightCity().getMercById(idMerc)
        if (job && merc) {
            // getting the current weapon of the merc
            const { weapon } = await getNightCity().getWeaponById(merc.idWeapon);
            // now the merc can fight against the henchmen
            // they both have 100 Health points at the beggining
            const mercWins = fight(job, merc, weapon)

            if (mercWins) {
                // if the merc wins he gets the reward
                await getNightCity().updateMerc(merc.id, { eddies: merc.eddies + job.reward })
                // job is finished
                await getNightCity().updateJob(job.id, { isAvailable: false })
            } else {
                // if the merc doesn't win, he dies
                await getNightCity().updateMerc(merc.id, { isAlive: false })
            }

            res.json({ mercWins, message: mercWins ? "The merc fought all the henchmen and got the reward" : "The merc lost and dided..." })


        } else {
            res.sendStatus(404)
        }
    } catch (e) {
        res.sendStatus(500)
    }
})


export default router;