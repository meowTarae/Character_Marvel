import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Characters.module.css";

function Characters({ imgPath, imgExtension, name, id }) {
  return (
    <div className={styles.card}>
      <Link to={`/character/${id}`} className={styles.link}>
        <img src={`${imgPath}.${imgExtension}`} alt={name} />
        <div className={styles.name}>{name}</div>
      </Link>
    </div>
  );
}

Characters.propTypes = {
  imgPath: PropTypes.string.isRequired,
  imgExtension: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Characters;
