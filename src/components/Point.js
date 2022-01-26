function Point({ bgImg, coverImg, title, rating, runtime, download, genres }) {
  return (
    <div>
      <img src={bgImg} alt={title} />
      <div>
        <img src={coverImg} alt={title} />
        <div>
          <h1>{title}</h1>
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
