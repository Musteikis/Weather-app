const API_KEY = "3265874a2c77ae4a04bb96236a642d2f"
const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")

function fetchUrl(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    return fetch(url).then(response => response.json())
}

function appendData(data){
    // Clear main innerHTML
    main.innerHTML = ""

//    Variables
    let temp = data.main.temp - 273.15
    temp = temp.toFixed(0)
    let icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    // Create Elements by DOM
    let weather = document.createElement("div")
    weather.classList.add("weather")
    weather.innerHTML =
    `
    <h2>
    <img src="${icon}"/>
    ${temp}°C
    <img src="${icon}"/>
    </h2>
    `
    main.append(weather)
    
    console.log(icon)
}

form.addEventListener("submit", function(e){
    e.preventDefault()

    // Variables
    const searchValue = search.value

    
    if(!searchValue) return

    fetchUrl(searchValue).then(appendData)

    // Clear input
    search.value = ""
})
