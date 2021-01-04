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
        margin: '23px 0 23px 0',
    },
    content: {
        maxWidth: '1278px',
        height: '629px',
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
        maxWidth: '1278px',
    },
    media: {
        height: 0,
        paddingTop: '49%',
        maxWidth: '1278px',
        width: '100%',
    },
}));
export default function ContentBanner() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.content} >
                <Grid container className={classes.content_bottom} direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start">
                    <Grid className={classes.item} item xs={12} sm={12}>
                        <CardMedia
                            className={classes.media}
                            image="https://ia.wampi.ru/2020/12/25/banner-bottom24df4f74457cb9fa.png"
                            title="Часы"
                        />
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}