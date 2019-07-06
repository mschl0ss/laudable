import React from 'react';

const ImageSlide = ({imgUrls, slideStyle}) => {

    const books = imgUrls.map((img_url,i) => {
        const thisStyle = {
            backgroundImage: `url("${img_url}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
        return (
            <div style={thisStyle} key={i}></div>
        )
    })
   
    return (
        <div className="image-slide" style={slideStyle}>
            {books}
        </div>
    )
}

export default ImageSlide;