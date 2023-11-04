import MovieCard from "../MovieCard/MovieCard";
import { MovieListContainer } from "../../styles/styles";

export const MovieList = ({ movies }) => {
  return (
    <MovieListContainer>
      { movies && movies.length > 0 ? ( 
        movies.map((movie) =>  <MovieCard key={movie.id} movie={movie} />) ) : <p>No movies found .... </p>
      }
    </MovieListContainer>
  )
}
export default MovieList
