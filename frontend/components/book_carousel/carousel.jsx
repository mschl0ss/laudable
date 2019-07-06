import React from 'react';
import ImageSlide from './image_slide';
import Arrow from './arrow';

const imgUrls = [
    "https://m.media-amazon.com/images/I/611EfwQXstL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/51Nz4frJQmL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/514c-Bpq+-L._SL500_.jpg",
    "https://m.media-amazon.com/images/I/618G6ty3o1L._SL500_.jpg",
    "https://m.media-amazon.com/images/I/51jxM5rSbsL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/51+1PNQIB+L._SL500_.jpg",
    "https://m.media-amazon.com/images/I/61xA8XeS-9L._SL500_.jpg",
    "https://m.media-amazon.com/images/I/61zfL9LfZXL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/510WThv+gfL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/611EfwQXstL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/51Nz4frJQmL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/514c-Bpq+-L._SL500_.jpg",
    "https://m.media-amazon.com/images/I/618G6ty3o1L._SL500_.jpg",
    "https://m.media-amazon.com/images/I/51jxM5rSbsL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/51+1PNQIB+L._SL500_.jpg",
    "https://m.media-amazon.com/images/I/61xA8XeS-9L._SL500_.jpg",
    "https://m.media-amazon.com/images/I/61zfL9LfZXL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/510WThv+gfL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/611EfwQXstL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/51Nz4frJQmL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/514c-Bpq+-L._SL500_.jpg",
    "https://m.media-amazon.com/images/I/618G6ty3o1L._SL500_.jpg",
    "https://m.media-amazon.com/images/I/51jxM5rSbsL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/51+1PNQIB+L._SL500_.jpg",
    "https://m.media-amazon.com/images/I/61xA8XeS-9L._SL500_.jpg",
    "https://m.media-amazon.com/images/I/61zfL9LfZXL._SL500_.jpg",
    "https://m.media-amazon.com/images/I/510WThv+gfL._SL500_.jpg",
];



class Carousel extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            currentImagePos: 0,
            imageIncrementValue: 800,
        };

        this.slideBack = this.slideBack.bind(this);
        this.slideForward = this.slideForward.bind(this);
    }

   //k so im going to pass all of the img urls into the image slide
   // it will render one super wide container with all the imgs
   // .carousel will have fixed width and overflow hidden
   // arrows will adjust css property eg transform(-1000, 0px, 0px)

    slideBack(){
        const curPos = this.state.currentImagePos;
        const increment = this.state.imageIncrementValue;
        console.log(curPos);
        if(curPos <= -increment ) this.setState( {currentImagePos: curPos+increment})
        // this.setState( {currentImagePos: curPos+100})
    }

    slideForward() {
        const curPos = this.state.currentImagePos;
        const increment = this.state.imageIncrementValue;
        const endPos = imgUrls.length * 170;
        console.log(curPos)
        console.log(-(endPos - increment))
        if (curPos >= -(endPos - increment) )this.setState({ currentImagePos: curPos - increment })
        
    }
    render () {
        let containerStyle = {
            transform: `translate3d( ${this.state.currentImagePos}px, 0px, 0px)`,
            transition: 'transform 500ms ease 0s',
        }

        let slideStyle = {
            width: `${imgUrls.length * 170}px`
        }
        return (
            <div className="carousel">

                <Arrow
                    direction="left"
                    clickFunction={ this.slideBack }
                    glyph="&#9664;" />
                <div className="image-slide-container" id="carousel" style={containerStyle}>
                    <ImageSlide img_urls={imgUrls} slideStyle={slideStyle}/>
                </div>

                <Arrow
                    direction="right"
                    clickFunction={this.slideForward}
                    glyph="&#9654;" />

            </div>
        )
    }
}

export default Carousel;