import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormDialog from './FormDialog';
import GoogleMap from './GoogleMap';
const useStyles = makeStyles({
    wrapperContact: {
        maxWidth: '1278px',
        margin: '0 auto',
    },
    contentContact: {
        width: '100%',
    }
});
function ArtHuman() {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.wrapperContact}>

                <Grid item className={classes.titleContact}>
                    <Typography variant="h2" gutterBottom>
                        контакты</Typography>
                </Grid>
                <Grid container className={classes.contentContact}>
                    <Grid item className={classes.address}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Адрес</Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Россия, 630084, Новосибирск</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );

}

export default ArtHuman;