import { toFreneheit } from './logic';

const displayData = (result) => {
  const cityName = document.querySelector('h2');
  const description = document.querySelector('h4');
  const temperature = document.querySelector('p');
  const feels = document.querySelector('.feels');
  const minTemp = document.querySelector('.temp_min');
  const maxTemp = document.querySelector('.temp_max');
  const humidity = document.querySelector('.humidity');
  const icons = document.querySelector('img');
  icons.src = `https://openweathermap.org/img/w/${result.weather[0].icon}.png`;
  description.innerHTML = result.weather[0].main;
  temperature.innerHTML = `${result.main.temp} ℃`;
  icons.innerHTML = result.weather[0].icon;
  cityName.innerHTML = result.name;
  feels.innerHTML = `Feels_like:${result.main.feels_like} ℃ | `;
  minTemp.innerHTML = `Temp_min:${result.main.temp_min} ℃ | `;
  maxTemp.innerHTML = `Temp_max:${result.main.temp_max} ℃ | `;
  humidity.innerHTML = `Humidity:${result.main.humidity}`;
};

const displayError = () => {
  const errorMessage = document.createElement('div');
  errorMessage.innerHTML = '<p id = "error">Please enter correct city name</p>';
  document.body.append(errorMessage);
  setTimeout(() => {
    errorMessage.innerText = '';
  }, 3000);
};

const displayDataInFerheneit = (result) => {
  const cityName = document.querySelector('h2');
  const description = document.querySelector('h4');
  const temperature = document.querySelector('p');
  const feels = document.querySelector('.feels');
  const minTemp = document.querySelector('.temp_min');
  const maxTemp = document.querySelector('.temp_max');
  const humidity = document.querySelector('.humidity');
  const icons = document.querySelector('img');
  icons.src = `https://openweathermap.org/img/w/${result.weather[0].icon}.png`;
  description.innerHTML = result.weather[0].main;
  temperature.innerHTML = `${toFreneheit(result.main.temp)} ℉`;
  icons.innerHTML = result.weather[0].icon;
  cityName.innerHTML = result.name;
  feels.innerHTML = `Feels_like:${toFreneheit(result.main.feels_like)} ℉ | `;
  minTemp.innerHTML = `Temp_min:${toFreneheit(result.main.temp_min)} ℉ | `;
  maxTemp.innerHTML = `Temp_max:${toFreneheit(result.main.temp_max)} ℉ | `;
  humidity.innerHTML = `Humidity:${result.main.humidity}`;
};

const changeToCelcius = (result) => {
  const btn = document.getElementById('celcius');
  btn.addEventListener('click', () => {
    displayData(result);
  });
};

const changeToFerheneit = (result) => {
  const btn = document.getElementById('degree');
  btn.addEventListener('click', () => {
    displayDataInFerheneit(result);
  });
};

export {
  displayData, displayError, changeToCelcius, changeToFerheneit,
};
