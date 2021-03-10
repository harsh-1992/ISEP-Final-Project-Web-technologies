import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={() => window.location = "/"} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <HomeIcon color="secondary" />
                    </IconButton>
                    <Typography color="secondary" variant="h6" className={classes.title}>
                        Night City
                    </Typography>
                    <Button color="secondary" onClick={() => window.location = "/jobs"}>Find a job</Button>
                    <Button color="secondary" onClick={() => window.location = "/create-job"}>Create Job</Button>
                    <Button color="secondary" onClick={() => window.location = "/mercs"}>Mercs</Button>
                    <Button color="secondary" onClick={() => window.location = "/create-merc"}>Create Merc</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}