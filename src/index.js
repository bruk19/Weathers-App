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

window.onload = () => {
    const city_name = document.getElementById('city_name');
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (city_name.value === '') {
        const errorMessage = document.createElement('div');
        errorMessage.innerHTML = '<p id = "error">Please Fill city name</p>';
        document.body.append(errorMessage);
        setTimeout(() => {
          errorMessage.innerText = '';
        }, 3000);
      } else {
        cityWeather(city_name.value);
        clearField();
      }
    });
  };
  cityWeather();