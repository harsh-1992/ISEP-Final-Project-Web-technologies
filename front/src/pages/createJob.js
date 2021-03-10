import { Button, Card, CardActions, CardContent, CircularProgress, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import apiService from '../service/apiService';

const useStyles = makeStyles({
    input: {
        marginTop: 10,
    },
    card: {
        alignSelf: "center",
        padding: 10,
        width: 700
    }

});


const CreateJob = () => {

    const classes = useStyles();

    const [loading, setLoading] = useState(false)
    const [fixer, setFixer] = useState(null)
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [henchmenCount, setHenchmencount] = useState(null)
    const [reward, setReward] = useState(null)

    const createJob = async () => {
        setLoading(true)
        try {
            await apiService.createJob(fixer, title, description, henchmenCount, reward)
            alert("Job has been created successfully")
            window.location = "/jobs"
        } catch (e) {
            alert(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            {loading && <CircularProgress style={{ alignSelf: "center" }} color="secondary" />}

            <Grid container alignItems="center"
                justify="center">
                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="secondary">
                            Create a new Job !
                        </Typography>
                        <TextField className={classes.input} fullWidth variant="outlined" label="Title" value={title} onChange={e => setTitle(e.target.value)} />
                        <TextField className={classes.input} fullWidth variant="outlined" label="Fixer" value={fixer} onChange={e => setFixer(e.target.value)} />
                        <TextField className={classes.input} fullWidth variant="outlined" label="Description" value={description} onChange={e => setDescription(e.target.value)} />
                        <TextField className={classes.input} fullWidth type="number" variant="outlined" label="Henchmen count" value={henchmenCount} onChange={e => setHenchmencount(e.target.value)} />
                        <TextField className={classes.input} fullWidth type="number" variant="outlined" label="Reward" value={reward} onChange={e => setReward(e.target.value)} />
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="secondary" variant="contained" onClick={createJob} disabled={!title || !fixer || !description || !henchmenCount || !reward}>
                            Create job
                        </Button>
                    </CardActions>
                </Card>

            </Grid>

        </div>
    );


}

export default CreateJob;
