import PropTypes from "prop-types";

export default function NowCondition(props) {
  const { text, callback, name, country, icon, temp } = props;

  return (
    <section className="temperature-now first-page">
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
        <h1>{temp} ℃</h1>
        <div>
          <h3> {text}</h3>
          <img src={icon} alt={`icon with ${icon}`} />
        </div>
      </aside>
    </section>
  );
}

NowCondition.propTypes = {
  temp: PropTypes.node,
  text: PropTypes.node,
  icon: PropTypes.node,
  name: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  country: PropTypes.node,
};
