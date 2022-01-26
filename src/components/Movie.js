import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, rating, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{rating}</p>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
