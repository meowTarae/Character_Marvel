import PropTypes from "prop-types";
import styles from "./Series.module.css";

function Series({ title, description, path, extension }) {
  return (
    <div className={styles.series}>
      <img src={`${path}.${extension}`} alt="title" />
      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
    </div>
  );
}

Series.propTypes = {
  path: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Series;
