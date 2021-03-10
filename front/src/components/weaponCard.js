import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import weaponImage from "../static/images/weapon.png";
import { Button, CardActions } from '@material-ui/core';
import apiService from '../service/apiService';

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
    },
    rootSelected: {
        maxWidth: 200,
        backgroundColor: "#26c6da"
    },
    media: {
        height: 200,
    },
    badge: {
        padding: 10,
        backgroundColor: "#ffee58"
    }
});



const WeaponCard = (props) => {
    const classes = useStyles();

    const buyWeapon = async () => {
        try {
            // buying a weapon for a merc
            const res = await apiService.buyWeapon(props.idMerc, props.id)
            if (res.data.success) {
                alert(res.data.message)
                window.location.reload()
            } else {
                alert(res.data.message)
            }
        } catch (e) {
            alert(e)
        } finally {

        }
    }

    return (
        <Card className={((props.mercIdWeapon && props.mercIdWeapon === props.id) ? classes.rootSelected : classes.root)}>
            <CardMedia
                className={classes.media}
                image={weaponImage}
                title="Weapon"
            />
            <CardContent>
                {(props.mercIdWeapon && props.mercIdWeapon === props.id) && <div className={classes.badge}>Current Weapon</div>}
                <Typography gutterBottom variant="h5" component="h2" color={(props.mercIdWeapon && props.mercIdWeapon === props.id) ? "primary" : "secondary"}>
                    {props.name}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                    Damage : {props.damage}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                    Accuracy : {props.accuracy}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                    Firerate : {props.firerate}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                    Price : {props.price} eddies
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                {(!props.mercIdWeapon || props.mercIdWeapon !== props.id) &&
                    <Button color="secondary" onClick={buyWeapon} variant="contained">Buy this weapon</Button>
                }
            </CardActions>

        </Card>
    );
}


WeaponCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    damage: PropTypes.number.isRequired,
    accuracy: PropTypes.number.isRequired,
    firerate: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    mercIdWeapon: PropTypes.number,
    idMerc: PropTypes.number
}


export default WeaponCard