
   function convertTemperature() {
  let celsiusInput = document.getElementById("celsius");
  let fahrenheitInput = document.getElementById("fahrenheit");
  let kelvinInput = document.getElementById("kelvin");

  let celsius = parseFloat(celsiusInput.value);
  let fahrenheit = celsius * 9 / 5 + 32;
  let kelvin = celsius + 273.15;

  fahrenheitInput.value = fahrenheit.toFixed(2);
  kelvinInput.value = kelvin.toFixed(2);
  }