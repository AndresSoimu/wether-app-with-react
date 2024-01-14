import PropTypes from "prop-types";

function AnotherDayCondition(props) {
  const { maxTemp, minTemp, icon, text } = props;
  return (
    <section className="temperature-now">
      <aside>
        <h3>Max Temperature</h3>
        <h1>{maxTemp} ℃</h1>
      </aside>
      <div>
        <aside>
          <h3> {text}</h3>
        </aside>
        <aside>
          <img src={icon} alt={`icon with ${icon}`} />
        </aside>
      </div>
      <aside>
        <h3>Min Temperature</h3>
        <h1>{minTemp} ℃</h1>
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
