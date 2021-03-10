import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import mercImage from "../static/images/merc.jpg";
import { Grid } from '@material-ui/core';
import apiService from '../service/apiService';
import WeaponCard from './weaponCard';

const useStyles = makeStyles({
    root: {
        width: 700,
    },
    media: {
        height: 200,
    },
});

const MercCardDetail = (props) => {
    const classes = useStyles();
    const [weapons, setWeapons] = useState([])

    useEffect(() => {
        apiService.getWeapons().then(res => {
            setWeapons(res.data.weapons)
        }).catch(e => {
            alert(e)
        })
    }, [])

    return (
        <Grid container alignItems="center"
            justify="center">
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

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h4" color="primary">
                        Weapons
                    </Typography>

                    <Grid container justify="center" spacing={2}>
                        {weapons.map((weapon, i) => (
                            <Grid item key={"weapon" + i}>
                                <WeaponCard  {...weapon} mercIdWeapon={props.idWeapon} idMerc={props.id} />
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>

            </Card>


        </Grid>

    );
}


MercCardDetail.propTypes = {
    id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    legalAge: PropTypes.number.isRequired,
    idWeapon: PropTypes.number.isRequired,
    isAlive: PropTypes.number.isRequired
}


export default MercCardDetail