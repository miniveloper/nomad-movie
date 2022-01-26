import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=year`)
    ).json();
    setLoading(false);
    setMovies(json.data.movies);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div>
          {movies.map((movie) =>
            movie.title === "Mephistopheles" ? null : (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                rating={movie.rating}
                summary={movie.summary}
                genres={movie.genres}
              ></Movie>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
