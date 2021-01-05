import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormDialog from './FormDialog';
import GoogleMap from './GoogleMap';
import { NavLink } from 'react-router-dom';
import ArtSlider from './ArtSlider';
const useStyles = makeStyles({
    wrapperArt: {
        maxWidth: '1278px',
        margin: '0 auto',
        border: '1px solid #000',
    },
    blockArt: {
        border: '1px solid #000',
    },
    contentArt: {
        width: '100%',
        border: '1px solid #000',
    },
    person: {
        border: '1px solid #000',
    },
    profile: {
        border: '1px solid #000',
    },
    artSlider: {
        border: '1px solid #000',
    },
    media: {
        width: '220px',
        height: '220px',
    }
});
function DenisEchakovArt() {
    const classes = useStyles();
    return (
        <Grid container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.wrapperArt}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Денис Ешаков</Typography>
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center"
                className={classes.blockArt}>

                <Grid item container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    className={classes.contentArt}>

                    <Grid item className={classes.person}>
                        <CardContent>
                            <CardMedia
                                className={classes.media}
                                image="https://ia.wampi.ru/2020/12/25/Denis.png"
                                title=""
                            />
                        </CardContent>
                    </Grid>

                    <Grid item className={classes.profile}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            год рождения: 1977</Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            город: Новосибирск</Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            страна: Россия</Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Образование: Новосибирское государственное художественное училище</Typography>
                    </Grid>
                </Grid>

                <Grid item container
                    direction="column"
                    justify="space-between"
                    alignItems="center"
                    className={classes.artSlider}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        портфолио художника</Typography>
                    <ArtSlider />
                </Grid>

            </Grid>
        </Grid>
    );

}

export default DenisEchakovArt;