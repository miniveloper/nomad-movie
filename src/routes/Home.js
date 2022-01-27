import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

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
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) =>
            movie.title === "Mephistopheles" ? null : (
              <Movie
                year={movie.year}
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
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
