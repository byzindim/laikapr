import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CardMedia, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        display: 'flex',
        marginBottom: '23px',
    },
    content: {
        maxWidth: '1278px',
        height: '100px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        background: 'red',
        // border: '1px solid #000',
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
    },
    item_logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item_content: {
        fontSize: '12px',
        marginRight: '15px',

    },
    media: {
        padding: 0,
        width: '83px',
        height: '40px',
    },
}));
// maxWidth="lg"
export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.content} >
                <Grid container>
                    <Grid className={classes.item_logo} item xs={1.5} sm={1.5}>
                        <CardMedia
                            className={classes.media}
                            image="https://ia.wampi.ru/2020/12/26/logo-footer.png"
                            title="Laikacolor"
                        />
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center"
                        item xs={4} sm={4}>
                        <Typography className={classes.item_content} variant="h6" gutterBottom>
                            ПОЛИТИКА РЕДАКЦИИ
                            </Typography>
                        <Typography className={classes.item_content} variant="h6" gutterBottom>
                            АВТОРСКИЕ ПРАВА
                            </Typography>
                        <Typography className={classes.item_content} variant="h6" gutterBottom>
                            КОНТАКТЫ
                            </Typography>
                    </Grid>
                    <Grid className={classes.item} item xs={3} sm={3}>
                        <Typography variant="h6" gutterBottom>
                            © 2021 все права защищены Laikacolor.com
                            </Typography>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}