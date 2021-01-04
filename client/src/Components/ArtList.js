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
const useStyles = makeStyles({
    wrapperContact: {
        maxWidth: '1278px',
        margin: '0 auto',
    },
    contentContact: {
        width: '100%',
    },
    media: {
        width: '303px',
        height: '303px',
        borderRadius: '150px',
    }
});
function ArtList() {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.wrapperContact}>

                <Grid item className={classes.titleContact}>
                    <Typography variant="h2" gutterBottom>
                        Художники</Typography>
                    <NavLink to="/arthuman"><Typography variant="h2" gutterBottom>
                        Стать художников в laikacolor</Typography></NavLink>
                </Grid>
                <Grid container className={classes.contentContact}>
                    <Grid item className={classes.address}>
                        <NavLink to="/denisechakov">
                            <CardContent>
                                <CardMedia
                                    className={classes.media}
                                    image="https://ia.wampi.ru/2020/12/25/Denis.png"
                                    title=""
                                />
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Денис Ешаков</Typography>
                            </CardContent>
                        </NavLink>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );

}

export default ArtList;