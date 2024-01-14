import { formattedHour } from "../utilities/utilities";
import PropTypes from "prop-types";

export default function NowCondition(props) {
  const { time, callback, name, country, icon, temp } = props;

  return (
    <section className="temperature-now">
      <header>
        <section className="location">
          <h1>{name}</h1>
          <h3>{country}</h3>
        </section>
        <form className="input-wrapper" onSubmit={callback}>
          <input
            className="input"
            name="queryCity"
            placeholder="Madrid, Paris, London"
            autoFocus
          />
          <button className="icon" type="submit">
            {" "}
            🔍{" "}
          </button>
        </form>
      </header>

      <aside>
        <img src={icon} alt={`icon with ${icon}`} />
        <h1>{temp} ℃</h1>
      </aside>
      <footer>
        <p className="current-time">
          Updated at <span>{formattedHour(time)}</span> time in{" "}
          <span>{name}</span>
        </p>
      </footer>
    </section>
  );
}

NowCondition.propTypes = {
  temp: PropTypes.node,
  time: PropTypes.node,
  icon: PropTypes.node,
  name: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  country: PropTypes.node,
};
