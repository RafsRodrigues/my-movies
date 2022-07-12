import { MoviesContainer } from "../styles/MoviesContainer";
import { MoviesList } from "../components/MoviesList";
import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    
    const fetchMovies = async () => {
      const { data } = await MoviesService.getMovies();
      setMovies(data.results);
    }
  
    useEffect(() => {
      fetchMovies();
    }, []);

    return (
      <MoviesContainer>
        {/* <div className="search">
          <input type="text" class="searchInput" placeholder="Pesquisar"></input>
          <button></button>
        </div> */}
        <MoviesList movies={movies} />
      </MoviesContainer>
    )
};

