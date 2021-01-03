import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CardMedia, Container } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        display: 'flex',
    },
    content: {
        maxWidth: '1278px',
        height: '186px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        // border: '1px solid #000',
    },
    content_header: {
        justifyContent: 'space-between',
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
    },
    media: {
        height: '0',
        paddingTop: '100%',
        width: '140px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
// maxWidth="lg"
export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.content} >
                <Grid container className={classes.content_header} spacing={2.625}>
                    <Grid className={classes.item} item xs={1.5} sm={1.5}>
                        <NavLink to="/"><CardMedia
                            className={classes.media}
                            image="https://ia.wampi.ru/2020/12/25/logod27e14a154f509e6.png"
                            title="Laikacolor"
                        /></NavLink>
                    </Grid>
                    <Grid className={classes.item} item xs={1.5} sm={1.5}>
                        <NavLink to="/designart"><CardMedia
                            className={classes.media}
                            image="https://ia.wampi.ru/2020/12/25/designart.png"
                            title="Дизайнеры и Художники"
                        /></NavLink>
                    </Grid>
                    <Grid className={classes.item} item xs={1.5} sm={1.5}>
                        <NavLink to="/rating"><CardMedia
                            className={classes.media}
                            image="https://ia.wampi.ru/2020/12/25/rating.png"
                            title="Рейтинги"
                        /></NavLink>
                    </Grid>
                    <Grid className={classes.item} item xs={1.5} sm={1.5}>
                        <NavLink to="/forum"><CardMedia
                            className={classes.media}
                            image="https://ia.wampi.ru/2020/12/25/forum.png"
                            title="Форум"
                        /></NavLink>
                    </Grid>
                    <Grid className={classes.item} item xs={1.5} sm={1.5}>
                        <a href="https://laikainfo.com"><CardMedia
                            className={classes.media}
                            image="https://ia.wampi.ru/2020/12/25/laikainfo.png"
                            title="Лайкаинфо"
                        /></a>
                    </Grid>
                    <Grid className={classes.item} item xs={1.5} sm={1.5}>
                        <NavLink to="/mensclub"><CardMedia
                            className={classes.media}
                            image="https://ia.wampi.ru/2020/12/25/menclub.png"
                            title="Мужской клуб"
                        /></NavLink>
                    </Grid>
                    <Grid className={classes.item} item xs={1.5} sm={1.5}>
                        <NavLink to="/register"><CardMedia
                            className={classes.media}
                            image="https://ia.wampi.ru/2020/12/25/register.png"
                            title="Регистрация"
                        /></NavLink>
                    </Grid>
                    <Grid className={classes.item} item xs={1.5} sm={1.5}>
                        <NavLink to="/switchlanguage"><CardMedia
                            className={classes.media}
                            image="https://ia.wampi.ru/2020/12/25/lang-search.png"
                            title="Язык"
                        /></NavLink>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}