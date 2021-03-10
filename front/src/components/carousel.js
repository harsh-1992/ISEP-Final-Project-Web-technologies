import React from 'react'
import { CardMedia, Card, Grid, CardContent, Typography } from '@material-ui/core'
import introImage from "../static/images/intro.jpg";
import introImage2 from "../static/images/intro2.jpg";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: 500
    },
    media: {
        height: 200,
    },
});



const CarouselComponent = () => {
    const classes = useStyles();

    const items = [
        {
            name: "Welcome to Night City!",
            image: introImage,
            description: "City of Dreams, eh? Well, not really but… whatever! Welcome to Night City! So, why did you come in here? For glory, money, or just looking for a place to die? Money, uh? Well, you might live long enough for that. Nice to meet you, Choomba. My name is Morgan Blackhand, and it is your lucky day: I have a job for you."
        },
        {
            name: "If you want money, you need to get your hands dirty",
            image: introImage2,
            description: "You see, 99% of this city is like you: jobless and hopeless. Corpos rule Night City and the rest of the world – but the rest of the world doesn’t matter. If you want money, you need to get your hands dirty. I can tell by just looking at you: you’re a coder and not a shooter, so don’t worry I’m not asking you to zero somebody."
        }
    ]


    return (
        <div>



            <Grid container justify="center" spacing={10}>


                {items.map((Item, i) => <Grid item key={"carddesc" + i}>
                    <Card className={classes.root}>

                        <CardMedia
                            className={classes.media}
                            image={Item.image}
                            title="image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" color="secondary">
                                {Item.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {Item.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>)}

            </Grid>

        </div>
    );


}

export default CarouselComponent;
