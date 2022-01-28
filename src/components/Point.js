import styles from "./Point.module.css";

function Point({
  bgImg,
  coverImg,
  title,
  year,
  rating,
  runtime,
  download,
  genres,
}) {
  return (
    <div>
      <img className={styles.bg} src={bgImg} alt={title} />
      <div className={styles.container}>
        <img className={styles.cover} src={coverImg} alt={title} />
        <div className={styles.textbox}>
          <h1 className={styles.title}>{`${title} (${year})`}</h1>
          <ul>
            <li>{`Rating ${rating}`}</li>
            <li>{`Runtime ${runtime}m`}</li>
            <li>{`Download ${download}`}</li>
            <li>
              Genres
              <ul>
                {genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Point;
