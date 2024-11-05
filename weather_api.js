const apiKeyOpenWeather = 'c4a8ce2ebeeee45a1a1020be6f1a73d7';
const apiKeyWeatherbit = '1a308f8ea55a45759e312a6116c17cde';

const cities = [
  'Ho Chi Minh City',
  'Da Nang',
  'Hanoi',
  'Hue',
];
async function getWeatherDataOpenWeather(city, month) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyOpenWeather}&units=metric`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error(`Ошибка запроса OpenWeather: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error('Ошибка получения данных OpenWeather:', error);
  }
}

async function getWeatherDataWeatherbit(city, month) {
  try {
    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKeyWeatherbit}&units=metric`);
    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      console.error(`Ошибка запроса Weatherbit: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error('Ошибка получения данных Weatherbit:', error);
  }
}

async function findBestMonth(city) {
  let bestMonth = { month: 1, score: 0 }; 

  for (let month = 1; month <= 12; month++) {
    const dataOpenWeather = await getWeatherDataOpenWeather(city, month);
    const dataWeatherbit = await getWeatherDataWeatherbit(city, month);

    let score = 0; 
    if (dataOpenWeather && dataOpenWeather.main) {
      if (dataOpenWeather.main.temp >= 20 && dataOpenWeather.main.temp <= 30) {
        score += 5;
      }
      if (dataOpenWeather.main.humidity < 80) {
        score += 2;
      }
    }
    if (dataWeatherbit && dataWeatherbit[0] && dataWeatherbit[0].weather) {
      if (dataWeatherbit[0].weather.code === 800) {
        score += 3;
      }
      if (dataWeatherbit[0].precip < 5) {
        score += 2;
      }
    }
    if (score > bestMonth.score) {
      bestMonth = { month: month, score: score };
    }
  }
  return bestMonth;
}


cities.forEach(async (city) => {
  const bestMonth = await findBestMonth(city);
  const monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'][bestMonth.month - 1];
  console.log(`Для поездки в ${city} оптимальным месяцем является ${monthName} (оценка: ${bestMonth.score}).`);
});
