import React from 'react';

const ImageSlide = ({img_urls, slideStyle}) => {
    // const styles = {
    //     backgroundImage: `url("${img_url}")`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center'
    // };

    //for each img url, i need a pojo that tracks img size pos

    const books = img_urls.map((img_url,i) => {
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