import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setJobs } from '../redux/actions'
import apiService from '../service/apiService'
import JobCard from '../components/jobCard'
import Grid from '@material-ui/core/Grid';
import { Button, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    content: {
        alignItems: "center"
    }
});

const JobList = () => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const { jobs } = useSelector((state) => state);



    useEffect(() => {
        // getting jobs list when the component is loaded
        getJobs();
    }, [])

    const getJobs = async () => {
        try {
            setLoading(true)
            // calling the api and getting the data
            let res = await apiService.getJobs();
            // dispatching the data to redux
            dispatch(setJobs(res.data.jobs))
        } catch (e) {
            alert(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={classes.content}>
            <div style={{ padding: 10 }}>
                <Button color="secondary" onClick={getJobs}>Refresh</Button>
                <Button color="secondary" variant="contained" onClick={() => window.location = "/create-job"}>Create a new Job</Button>
            </div>
            {loading && <CircularProgress style={{ alignSelf: "center" }} color="secondary" />}
            <Grid container spacing={2} alignItems="center"
                justify="center">
                {jobs.map((job, index) => (
                    <Grid item lg={4} key={"job" + index}>
                        <JobCard  {...job} />
                    </Grid>
                ))}
            </Grid>

        </div>
    );


}

export default JobList;
