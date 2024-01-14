import { formattedDate } from "../utilities/utilities";
import PropTypes from "prop-types";

export default function Header(props) {
  const {time } = props;
  return (
    <h1>
      The temperature for <span>{formattedDate(time)}</span>
    </h1>
  );
}
Header.propTypes = {
  time: PropTypes.node,
};
