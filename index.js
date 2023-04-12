const daysNamesShort = [
  'Вс',
  'Пн',
  'Вт',
  'СР',
  'Чт',
  'Пт',
  'Сб'
]
const daysNameslong = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
]
const monthNames = [
  'Янв',
  'Фев',
  'Мар',
  'Апр',
  'Май',
  'Июн',
  'Июл',
  'Авг',
  'Сен',
  'Окт',
  'Ноя',
  'Дек'
]

function createCurrentDate(timeUnix) {
  const date = new Date(timeUnix * 1000)
  const dayName = daysNameslong[date.getDay()]
  const monthName = monthNames[date.getMonth()]

  // console.log(`${dayName} ${date.getDate()}, ${monthName}`)
  return `${dayName} ${date.getDate()}, ${monthName}`
}

// function getLocation(region, country) {

//   return `${region}, ${country.slice(0, 2).toUpperCase()}`
// }








const apiKey = "8bb9a15b5de548d1918160428230604"
const defaultLocation = "Ryazan"


const weatherForm = document.querySelector('.form-weather')
const weatherFormInput = weatherForm.querySelector('.form-weather__input-location')

const weatherTemperature = document.querySelector('.current-weather__temp')
const weatherDescription = document.querySelector('.current-weather__description')
const weatherImage = document.querySelector('.current-weather__image')
const currentDate = document.querySelector('.current-weather__date')
const currentLocation = document.querySelector('.current-weather__location')

const forcastWeatherTemperature = document.querySelector('.forecast-weather__temp')
const forcastWeatherImage = document.querySelector('.forecast-weather__image')


// "forecast-weather__date-day">Пн 12</p>
//             <p class="forecast-weather__date-month

function fetchWeather(location) {
  return fetch(`http://api.weatherapi.com/v1/forecast.json?key=8bb9a15b5de548d1918160428230604&lang=ru&days=2&q=${location}&aqi=yes`)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(`код ошибки: ${res.status}`)
      }
    })
}


function renderCurrentWeather(weather) {
  const {
    current: { temp_c, condition: { text, icon } },
    location: { localtime_epoch, name }
  } = weather
  weatherTemperature.textContent = temp_c
  weatherDescription.textContent = text
  weatherImage.src = icon
  currentDate.textContent = createCurrentDate(localtime_epoch)
  currentLocation.textContent = name
}

function renderForecast(weather) {
  const {
    current: { temp_c, condition: { text, icon } },
    location: { localtime_epoch, name }
  } = weather
  weatherTemperature.textContent = temp_c
  weatherDescription.textContent = text
  weatherImage.src = icon
  currentDate.textContent = createCurrentDate(localtime_epoch)
  currentLocation.textContent = name
}

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  fetchWeather(weatherFormInput.value)
    .then(res => {
      console.log(res)
      renderCurrentWeather(res)
    })
})

fetchWeather(defaultLocation)
  .then(res => {
    renderCurrentWeather(res)
    console.log(res)
  })


// fetch('https://api.openweathermap.org/data/2.5/forecast?lat=54.6295687&lon=39.7425039&units=metric&appid=ca438fd186c2fbd2472dc00ab0f9b837')
//   .then(res => { return res.json() })
//   .then(data => console.log(data))


const str = "Unis State Armani"

function createCountryCode(string) {
  let value = string.split(' ').map((item) => item[0]).join('')
  return value
}


console.log(createCountryCode(str))








function getProperty(obj, path) {
  let string = path.split('.')

  let res = obj

  for (let i = 0; i < string.length; i++) {
    res = res[string[i]]
  }


  return res
}

const object = {
  one: 1,
  two: {
    three: 3
  },
  four: 4
};

console.log(getProperty(object, 'one')); // 1
console.log(getProperty(object, 'two.three')); // 3










































