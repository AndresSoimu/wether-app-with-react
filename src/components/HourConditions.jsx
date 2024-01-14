import PropTypes from "prop-types";

function HourConditions(props) {
  const { children } = props;
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Hour</th>
            <th>Temperature</th>
            <th>Condition</th>
          </tr>
        </thead>
        {children}
      </table>
    </section>
  );
}

HourConditions.propTypes = {
  children: PropTypes.node,
};

export default HourConditions;
