import "./App.css";
import PropTypes from "prop-types";
import { formattedDate, formattedHour } from "./utilities/utilities.js";
import { useEffect, useState } from "react";
import { callApi } from "./utilities/callApi.js";
import { API_URL } from "./utilities/constants.js";
import Header from "./components/header.jsx";
import HourConditions from "./components/HourConditions.jsx";
import NowCondition from "./components/conditionNow.jsx";
import AnotherDayCondition from "./components/anotherDayCondition.jsx";

////////////////////////////////////////////////////////////////////////
function App() {
  const [city, setCity] = useState("madrid");
  const [data, setData] = useState();
  let ApiUrl = API_URL(city);

  ////////////////////////////////////////////////////////////////////////

  function setLocation(event) {
    event.preventDefault();
    const input = new window.FormData(event.target);
    let location = input.get("queryCity");
    if (!location) return;
    setCity(location);
    document.querySelector(".input").value = "";
  }
  ///////////////////////////

  useEffect(() => {
    callApi({ city, ApiUrl }).then((newData) => setData(newData));
  }, [city, ApiUrl]);
  ///////////////////////////

  if (!data) return;
  ////////////////////////////////////////////////////////////////////////

  const { location, current, forecast } = data;
  const arrayTempXHour = forecast.forecastday[0].hour;
  const { date, day, hour } = forecast.forecastday[1];
  const { date: dateTwo, day: dayTwo, hour: hourTwo } = forecast.forecastday[2];
  
  ////////////////////////////////////////////////////////
  const TableContent = ({ arrayForMap }) => {
    return (
      <tbody>
        {arrayForMap.map((element, index) => {
          const { time, temp_c, condition } = element;
          const { icon, text } = condition;
          return (
            <tr key={index}>
              <td>{formattedHour(time)}</td>
              <td>{temp_c} ℃</td>
              <td>
                <img src={icon} alt={text} />
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  TableContent.propTypes = {
    arrayForMap: PropTypes.array.isRequired,
  };

  ////////////////////////////
  return (
    <div>
      <nav>
        <a href={`#${formattedDate(date)}`}>{formattedDate(date)}</a>
        <a href={`#${formattedDate(dateTwo)}`}>{formattedDate(dateTwo)}</a>
      </nav>
      <section id={formattedDate(current.last_updated)} className="html">
        <Header time={current.last_updated} />
        <div className="app">
          <NowCondition
            callback={setLocation}
            time={current.last_updated}
            name={location.name}
            country={location.country}
            icon={current.condition.icon}
            temp={current.temp_c}
          />
          <HourConditions>
            <TableContent arrayForMap={arrayTempXHour} />
          </HourConditions>
        </div>
      </section>
      <section id={formattedDate(date)} className="html">
        <Header time={date} />
        <div className="app">
          <AnotherDayCondition
            maxTemp={day.maxtemp_c}
            minTemp={day.mintemp_c}
            icon={day.condition.icon}
            text={day.condition.text}
          />
          <HourConditions>
            <TableContent arrayForMap={hour} />
          </HourConditions>
        </div>
      </section>
      <section id={formattedDate(dateTwo)} className="html">
        <Header time={dateTwo} />
        <div className="app">
          <AnotherDayCondition
            maxTemp={dayTwo.maxtemp_c}
            minTemp={dayTwo.mintemp_c}
            icon={dayTwo.condition.icon}
            text={dayTwo.condition.text}
          />
          <HourConditions>
            <TableContent arrayForMap={hourTwo} />
          </HourConditions>
        </div>
      </section>
    </div>
  );
}

export default App;
