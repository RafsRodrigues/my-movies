import { MovieItem } from "./MovieItem";
import { MovieItemGrid } from "../styles/MovieItensDesignGrid";

export const MoviesList = ({ movies }) => (

    <MovieItemGrid>     
        {movies.map(m => 
            <MovieItem id={m.id} title={m.title} poster_path={m.poster_path} overview={m.overview}  date={m.release_date}/>
        )}
    </MovieItemGrid>

);


