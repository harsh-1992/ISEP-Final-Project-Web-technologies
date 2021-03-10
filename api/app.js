import express from 'express'
import bodyParser from 'body-parser'
import mercRouter from './routes/merc'
import jobRouter from './routes/job'
import weaponRouter from './routes/weapon'


const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// declaring routes
app.use('/merc', mercRouter)
app.use('/job', jobRouter)
app.use('/weapon', weaponRouter)


export default app