import axios from 'axios';
const API_KEY = 'd416af5d4faee64e25ab001d87aab5c3'
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}&language=pt-BR`;

export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }
    static getMovieById(id){
        return axios(withBaseUrl(`movie/${id}`))
    }

    static getMovieByIdVideo(id){
        return axios(withBaseUrl(`movie/${id}/videos`))
    }

}
