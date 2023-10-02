const key = '3PGwhTC4GvMAabggMOGZGjJw6KD4rAXs';

//get weather info
const getWeather = async(id) =>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/329260';
    const query = `?apikey=${key}`;

    const response = await fetch(base + query)
    const data = response.json();

    return data
}

// get city info

const getCity = async(city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}



