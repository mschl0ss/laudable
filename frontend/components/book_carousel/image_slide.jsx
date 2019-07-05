import React from 'react';

const ImageSlide = ({img_url}) => {
    const styles = {
        backgroundImage: `url(${img_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="image-slide" style={styles}></div>
    )
}

export default ImageSlide;