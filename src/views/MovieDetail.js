import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";
import { Link } from "react-router-dom";

export const MovieDetail = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState({});
    
    const fetchMovie = async () => {
      const { data } = await MoviesService.getMovieById(id);
      setMovie(data);
    }
  
    useEffect(() => {
      fetchMovie();
    }, []); 


    const [movieVideo, setMovieVideo] = useState({});
    
    const fetchMovieVideo = async () => {
      const { data } = await MoviesService.getMovieByIdVideo(id);
      setMovieVideo(data);
    }
  
    useEffect(() => {
      fetchMovieVideo();
    }, []); 


    const setVoteClass = (vote) => {
      if(vote >= 8){
          return "green";
      } else if (vote >= 6) {
          return "orange";
      } else {
          return "red";
      }
    };

    if(movie.poster_path != null){

      return (
        <>
        
          <div className="backPage"><Link className="colorLink" to="/"> Voltar</Link></div>
          <div className="details">
              <div className="containerPoster">
                <img className="posterDetails" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
              </div>
              <div className="divisao"></div>
              <div className="containerDetails1">
                <div className="titleDetail">{movie.title}</div> 
                <div className="genresDetails">
                    {movie.genres && movie.genres.map((genre, i) =>(
                      <span  className="genres" key={i}>
                        {genre.name}
                      </span>
                    ))}
                </div> 
                <div className="descriptionDetails">{movie.overview}</div>
                <div className="classNote">
                  <img className="star" src={require('./../img/star.png')} /> <div className={`note ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</div>
                </div>
              </div>
          </div>
          <div  className="containerTrailer">
            <div className="videoTrailer">
            <div className="titleTrailer">Trailers</div>
                {movieVideo.results && movieVideo.results.map((video, i) =>(
                  <iframe title="video" height="600px" width="100%" key={i} src={`https://www.youtube.com/embed/${video.key}`}>
                  </iframe>
                ))}
              </div>     
          </div>
        </>
      );
  }else{
    return (
      <>
        <div className="errorMessage">Error 404. Page not found. :'(</div>
      </>
    );
  }
};






