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


const CreateMerc = () => {

    const classes = useStyles();

    const [loading, setLoading] = useState(false)
    const [nickname, setNickname] = useState(null)
    const [legalAge, setLegalAge] = useState(null)


    const createMerc = async () => {
        setLoading(true)
        try {
            await apiService.createMerc(nickname, legalAge)
            alert("Merc has been created successfully")
            window.location = "/mercs"
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
                            Create a new Merc !
                        </Typography>
                        <TextField className={classes.input} fullWidth variant="outlined" label="Nickname" value={nickname} onChange={e => setNickname(e.target.value)} />
                        <TextField className={classes.input} fullWidth type="number" variant="outlined" label="Legal Age" value={legalAge} onChange={e => setLegalAge(e.target.value)} />
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="secondary" variant="contained" onClick={createMerc} disabled={!nickname || !legalAge}>
                            Create merc
                        </Button>
                    </CardActions>
                </Card>

            </Grid>

        </div>
    );


}

export default CreateMerc;
