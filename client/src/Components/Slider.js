import React, { Component } from 'react';
import { Button, CardMedia, Image } from '@material-ui/core';
import '../App.css';
class Slider extends Component {
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
            <div>
                <div><button disabled={!this.state.canGoPrev} data-direction="prev" id="prev" onClick={this.nextSliderHandler.bind(this)}>Prev</button></div>


                <div><button disabled={!this.state.canGoNext} data-direction="next" id="next" onClick={this.nextSliderHandler.bind(this)}>Next</button></div>
                <div>
                    {/* {this.state.currentImageIndex} */}
                    <img src={this.state.images[this.state.currentImageIndex]} id="slide-img" />
                </div>
            </div>
        );
    }
}

export default Slider;