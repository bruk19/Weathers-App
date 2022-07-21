import './style.css';
import {
  displayData, displayError, changeToCelcius, changeToFerheneit,
} from './dom';
import { clearField } from './logic';

const cityWeather = (city_name = 'Addis Ababa') => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=665d996c0995235e2a6538dc312d1922`, {
    method: 'GET',
    mode: 'cors',
  })
    .then((response) => {
      if (!response.ok) {
        displayError();
      }
      return response.json();
    }).then((result) => {
      displayData(result);
      changeToFerheneit(result);
      changeToCelcius(result);
    }).catch(() => {

    });
};