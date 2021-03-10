import React from 'react';
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

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
});



const JobCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => window.location = "/jobDetail/" + props.id}>
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
                <Button size="small" color="primary" onClick={() => window.location = "/jobDetail/" + props.id}>
                    See details
                </Button>
            </CardActions>
        </Card>
    );
}


JobCard.propTypes = {
    id: PropTypes.number.isRequired,
    fixer: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    henchmenCount: PropTypes.number.isRequired,
    reward: PropTypes.number.isRequired,
    isAvailable: PropTypes.number.isRequired
}


export default JobCard