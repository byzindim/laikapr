import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CardMedia, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        display: 'flex',
    },
    content: {
        maxWidth: '1280px',
        height: '303px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 0,
        // border: '1px solid #000',
    },
    content_bottom: {
        justifyContent: 'space-between',
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '303px',
    },
    media: {
        height: 0,
        paddingTop: '100%',
        width: '303px'
    },
    // paper: {
    //     width: '303px',
    //     height: '303px',
    //     padding: 0,
    //     margin: '10.5px',
    //     // padding: theme.spacing(3),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // },
}));
// maxWidth="lg"
export default function ContentBottom() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.content} >
                <Grid container className={classes.content_bottom} direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start">
                    <Grid className={classes.item} item xs={3} sm={3}>
                        <CardMedia
                            className={classes.media}
                            image="https://ia.wampi.ru/2020/12/25/clock--KOPIY.png"
                            title="Часы"
                        />
                    </Grid>
                    <Grid className={classes.item} item xs={3} sm={3}>
                        <CardMedia
                            className={classes.media}
                            image="https://ia.wampi.ru/2020/12/25/house--KOPIY.png"
                            title="Дом"
                        />
                    </Grid>
                    <Grid className={classes.item} item xs={3} sm={3}>
                        <CardMedia
                            className={classes.media}
                            image="https://ia.wampi.ru/2020/12/25/house2--KOPIY.png"
                            title="Дом"
                        />
                    </Grid>
                    <Grid className={classes.item} item xs={3} sm={3}>
                        <CardMedia
                            className={classes.media}
                            image="https://ia.wampi.ru/2020/12/25/clock2--KOPIY.png"
                            title="Часы"
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}