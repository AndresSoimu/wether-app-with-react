import PropTypes from "prop-types";

function AnotherDayCondition(props) {
  const { maxTemp, minTemp, icon, text } = props;
  return (
    <section className="temperature-now">
      <aside className="min-temp">
        <h3>Min Temp.</h3>
        <h1>{minTemp} ℃</h1>
      </aside>

      <aside className="max-temp">
        <h3>Max Temp.</h3>
        <h1>{maxTemp} ℃</h1>
      </aside>
      <aside>
        <h3> {text}</h3>
        <img src={icon} alt={`icon with ${icon}`} />
      </aside>

    </section>
  );
}
AnotherDayCondition.propTypes = {
  maxTemp: PropTypes.node,
  minTemp: PropTypes.node,
  icon: PropTypes.node,
  text: PropTypes.node,
};
export default AnotherDayCondition;
