async function getCityData() {
    const cityName = document.getElementById('countryNameInput')?.value.trim();
    if (!cityName) {
        alert("Please enter a valid city name.");
        return null;
    }

    console.log("Fetching city data...");

    try {
        const response = await fetch(`/api/city?city=${cityName}`);
        if (!response.ok) throw new Error('Failed to fetch city data');

        const data = await response.json();
        if (data.latitude && data.longitude) {
            return { latitude: data.latitude, longitude: data.longitude, country: data.country, cityName };
        } else {
            console.log("City data not found.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching city data:", error);
        return null;
    }
}

async function getWeather() {
    const cityName = document.getElementById('countryNameInput')?.value.trim();
    const tripDate = document.getElementById('dateInput')?.value;
    if (!cityName || !tripDate) {
        alert("Please enter a city and date.");
        return null;
    }

    console.log("Fetching weather data...");

    try {
        const response = await fetch(`/api/weather?city=${cityName}&date=${tripDate}`);
        if (!response.ok) throw new Error('Failed to fetch weather data');

        return await response.json();
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}

async function getImage() {
    const cityName = document.getElementById('countryNameInput')?.value.trim();
    if (!cityName) {
        alert("Please enter a city.");
        return null;
    }

    console.log("Fetching image...");

    try {
        const response = await fetch(`/api/image?city=${cityName}`);
        if (!response.ok) throw new Error('Failed to fetch image');

        return await response.json();
    } catch (error) {
        console.error("Error fetching image:", error);
        return null;
    }
}

export { getCityData, getWeather, getImage };
