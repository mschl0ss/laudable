import React from 'react';
import ReactPlayer from 'react-player';


export const AuthSplashMainVideo = () => {

    return (
        // <video autoPlay={true} loop={true}>
        //     <source src="https://m.media-amazon.com/images/G/01/Audible/en_US/images/creative/landing/ANON/bookwall2h3b_2160x500_pottermore_2._CB1548343407_.mp4" type="video/mp4"></source>
        // </video>

        <div>
            <ReactPlayer
                className='react-player'
                url='https://m.media-amazon.com/images/G/01/Audible/en_US/images/creative/landing/ANON/bookwall2h3b_2160x500_pottermore_2._CB1548343407_.mp4" type="video/mp4'
                playing
                loop
                muted
                width='2160px'
                height='500px'
            />
        </div>


    )
} 

{/* <iframe src="https://giphy.com/embed/h5vHHJqIXzqFOnGHDP" width="480" height="112" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> <p><a href="https://giphy.com/gifs/h5vHHJqIXzqFOnGHDP">via GIPHY</a></p> */}

// https://giphy.com/embed/h5vHHJqIXzqFOnGHDP