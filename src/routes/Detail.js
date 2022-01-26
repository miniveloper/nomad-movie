import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Point from "../components/Point";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState({});
  const { id } = useParams();

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDatas(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Point
          bgImg={datas.background_image}
          coverImg={datas.medium_cover_image}
          title={datas.title}
          rating={datas.rating}
          runtime={datas.runtime}
          download={datas.download_count}
          genres={datas.genres}
        />
      )}
    </div>
  );
}

export default Detail;
