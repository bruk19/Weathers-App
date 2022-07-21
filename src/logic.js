const clearField = () => {
  const cityName = document.getElementById('city_name');
  cityName.value = '';
};

const toFreneheit = (value) => Math.floor(value * 1.8 + 32);

export { clearField, toFreneheit };
