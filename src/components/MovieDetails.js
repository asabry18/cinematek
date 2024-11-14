import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../redux/actions/moviesaction";
export default function MovieDetails(){
    const { id } = useParams();
    const dispatch = useDispatch();
    
    // Select movieData from Redux store
    const movieData = useSelector(state => state.details.movieData);

    //to render the movie details
    useEffect(() => {
        dispatch(getMovieDetails(id));
    }, [dispatch, id]);


    if (!movieData) {
        return <h3>Loading movie details...</h3>;
    }

    return(
        <>
            <div className="movie container">
                <div className="movie-details my-2">
                    <Container>
                        <Row className="align-items-center">
                            <Col sm="4" className="image">
                                <img className="h-100 p-3" src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt={movieData.original_title}/>
                            </Col>
                            <Col sm="4">
                                <div className="details text-center">
                                    <h4>Movie name: {movieData.original_title}</h4>
                                    <hr className="w-50 m-auto"/>
                                    <h4>Release date: {movieData.release_date} </h4>
                                    <hr className="w-50 m-auto"/>
                                    <h4>Number of voters: {movieData.vote_count}</h4>
                                    <hr className="w-50 m-auto"/>
                                    <h4>Rating: {movieData.vote_average}</h4>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="movie-details">
                    <Container>
                        <Row className="ps-2">
                            <Col sm="12">
                                <h3 className="pt-3 pb-3">movie story: </h3>
                            </Col>
                            <Col sm="12">
                                <div className="story pb-3">
                                    <h4>
                                        {movieData.overview}
                                    </h4>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="buttons text-center pt-5 pb-3">
                    <Link to={"/"}>
                        <Button className="m-2 btn-secondary search-btn">Back to home</Button>
                    </Link>
                    <a href={movieData.homepage} target="blank" >
                        <Button className="m-2 search-btn">Watch movie</Button>
                    </a>
                </div>
            </div>
        </>
    )
}