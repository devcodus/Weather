//API = bb0f6438162bbddc87d8918bd1942649

//- Example of API call:
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=bb0f6438162bbddc87d8918bd1942649

https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=bb0f6438162bbddc87d8918bd1942649

console.log('testing weather API')

const getFormData = async (e) => {

    e.preventDefault();


    
    const city_name = e.target.city_name.value;
    const API_key = '1ce4839b5e421be7915f56aff34a7c4f' //ERIC's

    console.log(city_name)


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;

    // Fetch and Axios are both ways to make HTTP requests in JS
    // fetch() -- this is built in
    // axios.get()

    const res = await fetch(url);
    const data = await res.json();
    
    
    let high_temp = data.main.temp_max;
    high_temp = Math.round(1.8*(high_temp-273)+32)

    let low_temp = data.main.temp_min;
    low_temp = Math.round(1.8*(low_temp-273)+32)

    const humidity = data.main.humidity;
    let forecast = data.weather[0].description;
    

    let real_feel = data.main.feels_like
    real_feel = Math.round(1.8*(real_feel-273)+32)

    console.log(high_temp)
    console.log(low_temp)
    console.log(real_feel)
    console.log(humidity)
    console.log(forecast)
     
    const myData =  {
        high_temp: high_temp,
        low_temp: low_temp,
        humidity: humidity,
        forecast: forecast,
        real_feel: real_feel
    }
    

    addToPage(myData)
};



const addToPage = (p) => {
    console.log(p)
    const card = document.createElement('div');
    card.innerHTML = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">High Temp: ${p.high_temp}ºF</h5>
      <h5 class="card-title">Low Temp: ${p.low_temp}ºF</h5>
      <h5 class="card-title">Real Feel: ${p.real_feel}ºF</h5>
      <h5 class="card-title">Humidity: ${p.humidity}%</h5>
      <h5 class="card-title">Forecast: ${p.forecast}</h5>
    </div>
  </div>
    `
    const container = document.querySelector('.info-container');
    if (container.innerHTML !== ''){
        container.innerHTML = ''
    }
    container.append(card)
};

const myForm = document.getElementById('myForm')
myForm.addEventListener('submit', getFormData)