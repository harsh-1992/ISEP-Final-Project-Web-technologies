import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import mercImage from "../static/images/merc.jpg";
import { Button, CardActions } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
});

const MercCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => window.location = "/mercDetail/" + props.id}>
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
                    <Button size="small" color="primary" onClick={() => window.location = "/mercDetail/" + props.id}>
                        See details
                    </Button>
                </CardActions>
            </CardActionArea>


        </Card>
    );
}


MercCard.propTypes = {
    id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    legalAge: PropTypes.number.isRequired,
    idWeapon: PropTypes.number.isRequired,
    isAlive: PropTypes.number.isRequired,
}


export default MercCard