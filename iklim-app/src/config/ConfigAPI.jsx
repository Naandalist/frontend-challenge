import Axios from "axios";

const baseUrl = `http://api.openweathermap.org/data/2.5/forecast`;
const mode = `json&units=metric&cnt`;
const length = `40`;
const token = `271da6b323b05ebaf2b4aaa0f3378f89`;

export const getDataWeather = async idCity => {
  try {
    //console.log("Get data siap meluncur", idCity);

    const result = await Axios.get(
      `${baseUrl}?id=${idCity}&q=&mode=${mode}=${length}&appid=${token}`
    );
    return result.data;
  } catch (err) {
    return console.log("GET DATA ERROR: ", err);
  }
};
