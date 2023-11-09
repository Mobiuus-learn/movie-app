import { MovieContainer, MovieItem } from "../../styles/styles";
import handleModal from "../../utils/handleModalShow";


const MovieCard = ({ movie }) => {
  return (
    <MovieContainer>
      <MovieItem
        onClick={() => {
        handleModal(this);
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt={movie.title}

        />
        <h3>{movie.title}</h3>
      </MovieItem>
      
    </MovieContainer>
  );
};
export default MovieCard;
