import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMercs } from '../redux/actions'
import apiService from '../service/apiService'
import MercCard from '../components/mercCard'
import Grid from '@material-ui/core/Grid';
import { Button, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    content: {
        alignItems: "center"
    }
});

const MercList = () => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const { mercs } = useSelector((state) => state);

    useEffect(() => {
        // getting mercs list when the component is loaded
        getMercs();
    }, [])

    const getMercs = async () => {
        try {
            setLoading(true)
            // calling the api and getting the data
            let res = await apiService.getMercs();
            // dispatching the data to redux
            dispatch(setMercs(res.data.mercs))
        } catch (e) {
            alert(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={classes.content}>
            <div style={{ padding: 10 }}>
                <Button color="secondary" onClick={getMercs}>Refresh</Button>
                <Button color="secondary" variant="contained" onClick={() => window.location = "/create-merc"}>Create a new Merc</Button>
            </div>

            {loading && <CircularProgress style={{ alignSelf: "center" }} color="secondary" />}
            <Grid container spacing={2} alignItems="center"
                justify="center">
                {mercs.map((merc, index) => (
                    <Grid item lg={4} key={"merc" + index}>
                        <MercCard  {...merc} />
                    </Grid>
                ))}
            </Grid>

        </div>
    );


}

export default MercList;
