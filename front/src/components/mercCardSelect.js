import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import mercImage from "../static/images/merc.jpg";
import { Button, CardActions, CircularProgress } from '@material-ui/core';
import apiService from '../service/apiService';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
});

const MercCardSelect = (props) => {
    const classes = useStyles();

    const [loading, setLoading] = useState(false)

    const getJobDone = async () => {
        // function to make the job done by selecting a merc
        try {
            setLoading(true)
            const res = await apiService.getJobDone(props.idJob, props.id)
            alert(res.data.message)
        } catch (e) {
            alert(e)
        } finally {
            setLoading(false)
        }
    }
    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image={mercImage}
                title="Job"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" color="secondary">
                    {props.nickname}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                    Legal age: {props.legalAge}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                    Eddies: {props.eddies}
                </Typography>
                <Typography variant="h6" component="p">
                    {props.isAlive ? "Alive" : "Dead"}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="secondary" onClick={getJobDone} disabled={loading || !props.isAlive}>
                    Get the job done
                </Button>
                {loading && <>
                    <CircularProgress style={{ alignSelf: "center" }} color="secondary" />
                    <Typography variant="h6" component="p">
                        Merc is fighting
                    </Typography>
                </>
                }

            </CardActions>



        </Card>
    );
}


MercCardSelect.propTypes = {
    id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    legalAge: PropTypes.number.isRequired,
    idWeapon: PropTypes.number.isRequired,
    isAlive: PropTypes.number.isRequired,
    idJob: PropTypes.number.isRequired
}


export default MercCardSelect