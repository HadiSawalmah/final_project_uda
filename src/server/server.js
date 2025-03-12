const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.get('/api/city', async (req, res) => {
    const { city } = req.query;
    const username = process.env.GEONAMES_USERNAME;

    try {
        const response = await axios.get(`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${username}`);
        const cityData = response.data.geonames[0];

        if (!cityData) return res.status(404).json({ error: "City not found" });

        res.json({
            latitude: cityData.lat,
            longitude: cityData.lng,
            country: cityData.countryName
        });
    } catch (error) {
        res.status(500).json({ error: "Error fetching city data" });
    }
});

app.get('/api/weather', async (req, res) => {
    const { city, date } = req.query;
    const apiKey = process.env.WEATHERBIT_API_KEY;

    try {
        const response = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}`);
        const forecast = response.data.data.find(day => day.datetime === date);

        if (!forecast) return res.status(404).json({ error: "Weather data not found" });

        res.json({
            temperature: forecast.temp,
            conditions: forecast.weather.description,
            datetime: forecast.datetime
        });
    } catch (error) {
        res.status(500).json({ error: "Error fetching weather data" });
    }
});

app.get('/api/image', async (req, res) => {
    const { city } = req.query;
    const apiKey = process.env.PIXABAY_API_KEY;

    try {
        const response = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(city)}&image_type=photo&orientation=horizontal`);
        const image = response.data.hits[0]?.webformatURL || null;

        res.json({ imageUrl: image });
    } catch (error) {
        res.status(500).json({ error: "Error fetching image data" });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
