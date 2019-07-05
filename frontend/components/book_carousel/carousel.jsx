import React from 'react';
import ImageSlide from './image_slide';
import Arrow from './arrow';

const imgUrls = [
    "https://m.media-amazon.com/images/I/611EfwQXstL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/51Nz4frJQmL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/514c-Bpq+-L._SL500_.jpg"
];

class Carousel extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            currentImageIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = imgUrls.length-1;
        const {currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    ndexSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }
    render () {
        
        return (
            <div className="carousel">

                <Arrow
                    direction="left"
                    clickFunction={ this.previousSlide }
                    glyph="&#9664;" />

                <ImageSlide img_url={ imgUrls(this.state.currentImageIndex) } />

                <Arrow
                    direction="right"
                    clickFunction={this.nextSlide}
                    glyph="&#9654;" />

            </div>
        )
    }
}

export default Carousel;