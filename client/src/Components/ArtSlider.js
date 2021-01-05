import React, { Component } from 'react';
import { Button, CardContent, CardMedia, Grid, Image, Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import '../App.css';
class ArtSlider extends Component {
    constructor() {
        super();
        this.state = {
            images: [
                'https://cs3.livemaster.ru/zhurnalfoto/5/b/1/130705031559.jpg',
                'https://cs3.livemaster.ru/zhurnalfoto/b/c/6/130705041813.jpg',
                'https://cs3.livemaster.ru/zhurnalfoto/3/4/3/130705040114.jpg',
                'https://cs3.livemaster.ru/zhurnalfoto/6/c/d/130705041813.jpg',
            ],
            currentImageIndex: 0,
            isCycleMode: false,
            canGoPrev: false,
            canGoNext: true,
        };
        this.nextSliderHandler = this.nextSliderHandler.bind(this);
    }
    nextSliderHandler(e) {
        let newIndex = this.state.currentImageIndex;
        if (
            e.currentTarget.dataset.direction === 'next') {
            if (newIndex < this.state.images.length - 1) {
                newIndex = this.state.currentImageIndex + 1;
                this.state.canGoPrev = true;
            }
            if (newIndex === this.state.images.length - 1) {
                this.state.canGoNext = false;
            }
        } else {
            if (newIndex > 0) {
                newIndex = this.state.currentImageIndex - 1;
                this.state.canGoNext = true;
            }
            if (newIndex === 0) {
                this.state.canGoPrev = false;
            }
        }
        this.setState({ currentImageIndex: newIndex });
    }
    render() {
        return (
            <Grid container id="form-slider"
                direction="column"
                justify="space-between"
                alignItems="center">
                <Grid item
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <Grid item>
                        <button disabled={!this.state.canGoPrev} data-direction="prev"
                            id="prev-art" onClick={this.nextSliderHandler.bind(this)}>Prev</button></Grid>
                    <Grid item>
                        <img src={this.state.images[this.state.currentImageIndex]} id="slide-img" /></Grid>
                    <Grid item><button disabled={!this.state.canGoNext} data-direction="next"
                        id="next-art" onClick={this.nextSliderHandler.bind(this)}>Next</button></Grid>
                </Grid>
                <Grid item>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Название: Море
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Автор: Денис Ешаков
                        </Typography>
                        <Typography variant="h5" component="h2">
                            год создания: 2021
                        </Typography>
                        <Typography color="textSecondary">
                            Материал: Холст
                        </Typography>
                        <Typography variant="body2" component="p">
                            Размер: 100х80см
                        </Typography>
                        <Typography variant="body2" component="p">
                            Оценочная стоимость: 330 000 руб.
                        </Typography>
                        <Typography variant="body2" component="p">
                            Описание:
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">купить</Button>
                    </CardActions >
                </Grid>
            </Grid >
        );
    }
}

export default ArtSlider;