import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import jobImage from "../static/images/job.jpg";
import { CircularProgress, Grid } from '@material-ui/core';
import Collapsible from 'react-collapsible';
import { useDispatch, useSelector } from 'react-redux';
import { setMercs } from '../redux/actions';
import apiService from '../service/apiService';
import MercCardSelect from './mercCardSelect';


const useStyles = makeStyles({
    root: {
        maxWidth: 700,
    },
    media: {
        height: 200,
    },
});



const JobCardDetail = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const { mercs } = useSelector((state) => state);

    useEffect(() => {
        // getting mercs list when the component is loaded
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
        getMercs()
    }, [])


    return (
        <Grid container alignItems="center"
            justify="center">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={jobImage}
                        title="Job"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="secondary">
                            {props.title}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="p">
                            Fixer: {props.fixer}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="p">
                            Henchmen count: {props.henchmenCount}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="p">
                            Reward: {props.reward}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="p">
                            Job {props.isAvailable ? "Available" : "Not available"}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Collapsible
                        transitionTime={150}
                        transitionCloseTime={150}
                        trigger={<Button disabled={!props.isAvailable} size="small" color="secondary" variant="contained">
                            Get the job done by a Merc
                    </Button>}>
                        <Typography gutterBottom variant="h6" component="h5" color="secondary">
                            Select the merc who will do this job
                        </Typography>
                        {loading && <CircularProgress style={{ alignSelf: "center" }} color="secondary" />}
                        <Grid container spacing={2} alignItems="center"
                            justify="center">
                            {mercs.map((merc, index) => (
                                <Grid item lg={4} key={"merc" + index}>
                                    <MercCardSelect  {...merc} idJob={props.id} />
                                </Grid>
                            ))}
                        </Grid>
                    </Collapsible>
                </CardActions>

            </Card>
        </Grid>
    );
}


JobCardDetail.propTypes = {
    id: PropTypes.number.isRequired,
    fixer: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    henchmenCount: PropTypes.number.isRequired,
    reward: PropTypes.number.isRequired,
    isAvailable: PropTypes.number.isRequired
}


export default JobCardDetail