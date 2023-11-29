function createTemperatureFetcher() {
  const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
  };

  const cache = {};

  function getTemperatureForCity(city) {
    if (cache[city] !== undefined) {
      return cache[city];
    }

    if (temperatureData[city] !== undefined) {
      cache[city] = temperatureData[city];
      return temperatureData[city];
    } else {
      return null;
    }
  }

  return getTemperatureForCity;
}

const getTemperatureForCity = createTemperatureFetcher();

const temperature1 = getTemperatureForCity('New York');
console.log(temperature1);

const temperature2 = getTemperatureForCity('New York');
console.log(temperature2);

const temperature3 = getTemperatureForCity('London');
console.log(temperature3);

const temperature4 = getTemperatureForCity('London');
console.log(temperature4);