import React from 'react'
import { Card } from 'react-bootstrap'


const MovieDetails = ({movies}) => {
    const IMG_API = "https://image.tmdb.org/t/p/w1280";

    return (
        <div>
        <Card>
            <Card.Img variant="top" src={IMG_API+movies[0]?.poster_path} />
        <Card.Body>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
            </Card.Text>
        </Card.Body>
    </Card>
        </div>
    )
}

export default MovieDetails
