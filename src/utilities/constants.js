export const API_URL = (city) => {
  const capitalizedCity = (city) => city[0].toUpperCase() + city.slice(1);
  return `https://api.weatherapi.com/v1/forecast.json?key=0b97edb45004482bbd672641232602&q=${capitalizedCity(
    city
  )}&days=7&aqi=no&alerts=no`;
};
