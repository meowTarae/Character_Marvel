import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Series from "../components/Series";
import styles from "./Info.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Info() {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    (async () => {
      const json = await (
        await fetch(
          `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
        )
      ).json();
      setInfo(json.data.results[0]);
    })();
  }, [id]);
  useEffect(() => {
    (async () => {
      const json = await (
        await fetch(
          `http://gateway.marvel.com/v1/public/characters/${id}/events${process.env.REACT_APP_API_KEY}`
        )
      ).json();
      setSeries(json.data.results);
      setLoading(false);
    })();
  }, [id]);

  return (
    <>
      <Link to={`/`} className={styles.icon__home}>
        <i>
          <FontAwesomeIcon icon={faHome} />
        </i>
      </Link>
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loading}></div>
        ) : (
          <>
            <div className={styles.introduce}>
              <img
                src={`${info.thumbnail.path}.${info.thumbnail.extension}`}
                alt="title"
              />
              <div className={styles.introduce__text}>
                <strong>{info.name}</strong>
                <br />
                <span>{info.description ? "Description :" : null}</span>
                <br />
                <p>{info.description}</p>
              </div>
            </div>

            <hr />
            <strong>{series ? "Series" : null}</strong>
            <span className={styles.counts}>
              Counts : {info.events.available}
            </span>
            <div className={styles.card}>
              {series.map((series) => (
                <Series
                  key={series.id}
                  title={series.title}
                  description={series.description}
                  path={series.thumbnail.path}
                  extension={series.thumbnail.extension}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Info;
