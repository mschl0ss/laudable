import React from 'react';



export default (props) => {

    const renderReviewStars = function (score, votes) {

        let cumulutiveAvg = Math.floor(score / votes);
        if (votes === 0) cumulutiveAvg = 0;
        const stars = [];
        const star = "\u2605"
        for (let i = 0; i < 5; i++) {
            const className = i < cumulutiveAvg ? 'gold' : 'gray';
            stars.push(<span className={className} key={i}>{star}</span>)
        }
        return stars;

    }

    const computeLength = (lengthInMinutes) => {
        const hours = Math.floor(lengthInMinutes / 60);
        const minutes = lengthInMinutes % 60;
        return `${hours} hrs and ${minutes} mins`;
    }

    const computePublisherSummary = (publisherSummary) => {
        const firstP = publisherSummary.split('\n')[0]
        // return (
        //     <p>{firstP}</p>
        // )
        return publisherSummary.split('\n').map((p, i) => (
            <p key={i} className={p[0] === '©' ? 'bottom' : ''}>{p}</p>)
        )
    }



    const book = props.book;
    if(props.render === false) return null;
    else {
        return (
            <div className="tease-container">
                <span className="tease-beak">
                    {/* arrow goes here */}
                </span>

                <div className="tease-content">
                    {/* title */}
                    <h2>{book.title}</h2>

                    <h3>{book.subtitle}</h3>

                    <ul className="details">
                        <li>By: {book.author}</li>
                        <li>Narrated by: {book.narrator}</li>
                        <li>Length: {computeLength(book.lengthInMinutes)}</li>
                    </ul>
          
                    <ul className="stars">
                        {/* Overall: ***** totalVotes */}
                        <li>
                            <span className="label">Overall</span>
                            {renderReviewStars(book.overallTotal, book.overallVotes)}&nbsp;&nbsp;{book.overallVotes}
                        </li>

                        {/* Performance: ***** totalVotes */}
                        <li>
                            <span className="label">Performance</span>
                            {renderReviewStars(book.performanceTotal, book.performanceVotes)}&nbsp;&nbsp;{book.performanceVotes}
                        </li>

                        {/* Story: ***** totalVotes */}
                        <li>
                            <span className="label">Story</span>
                            {renderReviewStars(book.storyTotal, book.storyVotes)}&nbsp;&nbsp;{book.storyVotes}
                        </li>
                    </ul>
                  

                    {/* publisher summary */}
                    <div className="short-summary">
                        {computePublisherSummary(book.publisherSummary)}
                    </div>

                </div>
            </div>
        )
    }
}