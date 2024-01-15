import PropTypes from "prop-types";

function HourConditions(props) {
  const { children } = props;
  return (
    <section>
      <table>
        <thead>
          <tr>
            <h1>24 Hours</h1>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </section>
  );
}

HourConditions.propTypes = {
  children: PropTypes.node,
};

export default HourConditions;
