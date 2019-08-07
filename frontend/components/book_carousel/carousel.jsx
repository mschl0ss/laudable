import React from 'react';
import ImageSlide from './image_slide';
import Arrow from './arrow';

const images = [
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

const imgUrls = images.slice(0,18);

class Carousel extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            currentImagePos: 0,
            // imageIncrementValue: (imgUrls.length * 167) / 3,
            length: 3006,
            imageIncrementValue: (3006)/3,
            activeDot: 1,
            books: [],
            imgUrls: imgUrls,
        };

        this.slideBack = this.slideBack.bind(this);
        this.slideForward = this.slideForward.bind(this);


    }

    componentDidMount() {
        if(this.props.books.length < 18) this.props.fetchBooks();
    }

    componentDidUpdate(prevProps) {
        // debugger;
        if (prevProps.books.length !== this.props.books.length) {
            this.setState({books: this.props.books})
            const imgs = this.props.books.map(book => book.bookCoverUrl)
            this.setState({imgUrls: imgs})
        }
    }
    
    renderDots () {
        return (
            <div className="dots-paginator">
                <span className= { this.state.activeDot === 1 ? 'active' : ''}>&nbsp;</span>
                <span className= { this.state.activeDot === 2 ? 'active' : ''}>&nbsp;</span>
                <span className= { this.state.activeDot === 3 ? 'active' : ''}>&nbsp;</span>
            </div>
        )
    }
    
   //k so im going to pass all of the img urls into the image slide
   // it will render one super wide container with all the imgs
   // .carousel will have fixed width and overflow hidden
   // arrows will adjust css property eg transform(-1000, 0px, 0px)

    slideBack(){
        const curPos = this.state.currentImagePos;
        const increment = this.state.imageIncrementValue;
        const dot = this.state.activeDot;
        if(curPos <= -increment ) {
            this.setState( {currentImagePos: curPos+increment, activeDot: dot-1});
        }
    }

    slideForward() {
        const curPos = this.state.currentImagePos;
        const increment = this.state.imageIncrementValue;
        const endPos = imgUrls.length * 167;
        const dot = this.state.activeDot;
        if (curPos > -(endPos - increment) ){
            this.setState({ currentImagePos: curPos - increment,  activeDot: dot+1})
        }
        
    }
    render () {
        let containerStyle = {
            transform: `translate3d( ${this.state.currentImagePos}px, 0px, 0px)`,
            transition: 'transform 500ms ease 0s',
        }

        let slideStyle = {
            width: `${imgUrls.length * 167}px`
        }
        return (
            <div className="carousel-wrapper">
                <div className="carousel">
                    
                    <Arrow
                        direction="left"
                        clickFunction={ this.slideBack }
                        glyph="&#9664;" />
                    <div className="image-slide-container" id="carousel" style={containerStyle}>
                        <ImageSlide books={this.state.books.slice(0,19)} slideStyle={slideStyle}/>
                        {/* <ImageSlide imgUrls={this.state.imgUrls.slice(0,19)} slideStyle={slideStyle}/> */}
                    </div>

                    <Arrow
                        direction="right"
                        clickFunction={this.slideForward}
                        glyph="&#9654;" />
                </div>

                {this.renderDots()}
            </div>
        )
    }
}

export default Carousel;