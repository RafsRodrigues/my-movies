import { Link } from "react-router-dom";

export const MovieItem = ({ title, id, poster_path, overview, date }) => {

    if (poster_path != null) {
        return (
            <Link to={`movie/${id}`}>
                <img className="posterGrid" src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
            </Link>
        );
    }

};









