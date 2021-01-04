import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CardMedia, Container } from '@material-ui/core';
import Slider from './Slider';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        display: 'flex',
    },
    content: {
        maxWidth: '1278px',
        height: '651px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 0,
        // border: '1px solid #000',
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '100%',
    },
    container_left: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '629px',
        height: '628px',
    },
    container_left1: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '303px',
        height: '628px',
    },
    container_right: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '629px',
        height: '628px',
        marginLeft: '10px',
    },
    media: {
        height: 0,
        paddingTop: '100%',
        width: '303px'
    },
    mediaSlider: {
        height: 0,
        paddingTop: '100%',
        width: '629px'
    },
    paperSlider: {
        width: '629px',
        height: 'auto',
        padding: 0,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));


export default function ContentCenter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.content}>
                <Grid container direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start" className={classes.container_left} item xs={6} sm={6}>
                    <Grid container className={classes.container_left1} direction="column" justifyContent="space-between">
                        <Grid className={classes.item} item xs={3} sm={3}>
                            <CardMedia
                                className={classes.media}
                                image="https://ia.wampi.ru/2020/12/25/street.png"
                                title="Картина"
                            />
                        </Grid>
                        <Grid className={classes.item} item xs={3} sm={3}>
                            <CardMedia
                                className={classes.media}
                                image="https://ia.wampi.ru/2020/12/25/toy.png"
                                title="Картина"
                            />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.container_left1} direction="column" justifyContent="space-between">
                        <Grid className={classes.item} item xs={3} sm={3}>
                            <CardMedia
                                className={classes.media}
                                image="https://ia.wampi.ru/2020/12/25/bluecolor.png"
                                title="Картина"
                            />
                        </Grid>
                        <Grid className={classes.item} item xs={3} sm={3}>
                            <CardMedia
                                className={classes.media}
                                image="https://ia.wampi.ru/2020/12/25/Denis.png"
                                title="Фотовыставка"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className={classes.container_right} direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start" item xs={6} sm={6}>
                    <Grid className={classes.paperSlider} item xs={6} sm={6}>
                        {/* <Paper className={classes.paperSlider}> */}
                        <Slider />

                        {/* </Paper> */}
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
}