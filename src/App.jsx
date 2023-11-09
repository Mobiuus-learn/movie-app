import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieList from "./components/MovieList/MovieList";
import {
  AppContainer,
  Title,
  ButtonContainer,
  SearchInput,
} from "./styles/styles";
import { Button } from "./components/Button/Button";

import GlobalStyle from "./assets/globalStyle";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [endpoint, setEndpoint] = useState("now_playing");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [totalMovies, setTotalMovies] = useState(0)

  const isMobile = window.innerWidth <= 768

 
  const fetchMovies = async () => {
    const apiKey = "1ebb0c1fb287ae301c2ad0c4291e59d7";
    let url = `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${apiKey}&page=${page}&language=pt-BR`;

    if (searchQuery) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${page}&language=pt-BR`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      const newMovies = data.results;

      setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      setPage((previousPage) => previousPage + 1);
      setTotalMovies(data.total_results)
    } catch (error) {
      console.log(error);
    }
  };

  const handleEndPointChange =  (endpoint) => {
    setEndpoint(endpoint);
    setPage(1);
    setSearchQuery("");
  };
  useEffect(() =>{
    const delay = setTimeout(()=>{
      setDebouncedQuery(searchQuery)
    }, 500)

    return () => clearTimeout(delay)
  }, [searchQuery])

  useEffect(() => {
    if (searchQuery) {
      setMovies([]);
      setPage(1);
      fetchMovies();
    }
  }, [debouncedQuery]);

  useEffect(() => {
    if (!searchQuery) {
      setMovies([]);
      setPage(1);
      fetchMovies();
    }
  }, [endpoint]);

  return (
    <>
      <AppContainer>
        <GlobalStyle />
        <Title>Movie App</Title>
        <ButtonContainer isMobile ={isMobile}>
          <Button onClick={() => handleEndPointChange("now_playing")}>
            Now Playing
          </Button>
          <Button onClick={() => handleEndPointChange("popular")}>
            Popular
          </Button>
          <Button onClick={() => handleEndPointChange("top_rated")}>
            Top Rated
          </Button>
          <Button onClick={() => handleEndPointChange("upcoming")}>
            Upcoming
          </Button>
        </ButtonContainer>
        <SearchInput
          type="text"
          placeholder="Search Movies..."
          value={searchQuery}
          onChange={(event) => {
            setPage(1);
            setSearchQuery(event.target.value);
          }}
        />
        <InfiniteScroll
          dataLength={movies.length}
          next={fetchMovies}
          hasMore={movies.length < totalMovies}
          loader={<Title> Loading ....</Title>}
        >
          <MovieList movies={movies} />
        </InfiniteScroll>
      </AppContainer>
    </>
  );
}

export default App;
