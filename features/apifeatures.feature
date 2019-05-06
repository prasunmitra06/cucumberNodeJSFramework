Feature: Enter city name, get 5 day weather forecast

Scenario: Enter city name, get 5 day weather forecast
  Given send GET request to "https://samples.openweathermap.org/data/2.5/forecast?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22", dt should be "./weathercast.json"
