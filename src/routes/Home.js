import { useState, useEffect } from "react";
import Characters from "../components/Characters";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const json = await (
      await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
      )
    ).json();
    setLoading(false);
    setCharacters(json.data.results);
  };
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Characters</h1>
      <div className={styles.Home}>
        {loading ? (
          <div className={styles.loading}></div>
        ) : (
          <div className={styles.container}>
            {characters.map((character) => (
              <Characters
                key={character.id}
                id={character.id}
                imgPath={character.thumbnail.path}
                imgExtension={character.thumbnail.extension}
                name={character.name}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
