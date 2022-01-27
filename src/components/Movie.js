import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ year, id, coverImg, title, rating, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img className={styles.movie__img} src={coverImg} alt={title} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Movie;
