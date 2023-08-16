//jshint esversion: 6

// Import necessary modules
const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

// const { url } = require('inspector');

const app = express();
const PORT = process.env.PORT || 3030;
// const port = 3000;

const apiKey = process.env.API_KEY

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

const config = {
    headers:{
        'X-Api-Key': apiKey
    }
}

const api_endpoint = "https://api.api-ninjas.com"

app.use(express.urlencoded({ extended: true }));

// Define your routes
app.get('/', async (req, res) => {
    res.render('home', { pageTitle: 'Home' });
});


app.get('/country', async (req, res) => {
    res.render('country', { pageTitle: 'Country', apiData:null, error:null });
});

app.post('/country', async (req, res) => {
    const country = req.body.country;
    const path = "/v1/country";
    const api = `${api_endpoint}${path}?name=${country}`;
    // console.log(api)
    try {
        const response = await axios.get(api, config);
        const apiData = response.data;
        res.render('country', { pageTitle: 'Country', apiData, error: null });
    } catch (error) {
        res.render('country', { pageTitle: 'Country', apiData: null, error });
    }
});


app.get('/logo', async (req, res) => {
    res.render('logo', { pageTitle: 'Logo', apiData:null, error:null });
});

app.post('/logo', async (req, res) => {
    const logo = req.body.logo;
    const path = "/v1/logo";
    const api = `${api_endpoint}${path}?name=${logo}`;
    try {
        const response = await axios.get(api, config);
        const apiData = response.data;
        res.render('logo', { pageTitle: 'Logo', apiData, error: null });
    } catch (error) {
        res.render('logo', { pageTitle: 'Logo', apiData: null, error });
    }
});


app.get('/dict', async (req, res) => {
    res.render('dict', { pageTitle: 'Dictionary', apiData:null, error:null });
});

app.post('/dict', async (req, res) => {
    const dict = req.body.dict;
    const path = "/v1/dictionary";
    const api = `${api_endpoint}${path}?word=${dict}`;
    try {
        const response = await axios.get(api, config);
        const apiData = response.data;
        // console.log(apiData)
        res.render('dict', { pageTitle: 'Dictionary', apiData, error: null });
    } catch (error) {
        res.render('dict', { pageTitle: 'Dictionary', apiData: null, error });
    }
});


app.get('/facts', async (req, res) => {
    res.render('facts', { pageTitle: 'Facts', apiData:null, error:null });
});

app.post('/facts', async (req, res) => {
    const limit = req.body.limit;
    const path = "/v1/facts";
    const api = `${api_endpoint}${path}?limit=${limit}`;
    try {
        const response = await axios.get(api, config);
        const apiData = response.data;
        res.render('facts', { pageTitle: 'Facts', apiData, error: null });
    } catch (error) {
        res.render('facts', { pageTitle: 'Facts', apiData: null, error });
    }
});


app.get('/history', async (req, res) => {
    res.render('history', { pageTitle: 'Historical Events', apiData:null, error:null });
});

app.post('/history', async (req, res) => {
    const event = req.body.event;
    const path = "/v1/historicalevents";
    const api = `${api_endpoint}${path}?text=${event}`;
    try {
        const response = await axios.get(api, config);
        const apiData = response.data;
        res.render('history', { pageTitle: 'Historical Events', apiData, error: null });
    } catch (error) {
        res.render('history', { pageTitle: 'Historical Events', apiData: null, error });
    }
});


app.get('/jokes', async (req, res) => {
    res.render('jokes', { pageTitle: 'Jokes', apiData:null, error:null });
});

app.post('/jokes', async (req, res) => {
    const limit = req.body.limit;
    const path = "/v1/jokes";
    const api = `${api_endpoint}${path}?limit=${limit}`;
    try {
        const response = await axios.get(api, config);
        const apiData = response.data;
        res.render('jokes', { pageTitle: 'Jokes', apiData, error: null });
    } catch (error) {
        res.render('jokes', { pageTitle: 'Jokes', apiData: null, error });
    }
});


app.get('/recipe', async (req, res) => {
    res.render('recipe', { pageTitle: 'Recipe', apiData:null, error:null });
});

app.post('/recipe', async (req, res) => {
    const query = req.body.query;
    const path = "/v1/recipe";
    const api = `${api_endpoint}${path}?query=${query}`;
    try {
        const response = await axios.get(api, config);
        const apiData = response.data;
        res.render('recipe', { pageTitle: 'Recipe', apiData, error: null });
    } catch (error) {
        res.render('recipe', { pageTitle: 'Recipe', apiData: null, error });
    }
});


app.get('/quotes', async (req, res) => {
    res.render('quotes', { pageTitle: 'Quotes', apiData:null, error:null });
});

app.post('/quotes', async (req, res) => {
    const category = req.body.category;
    const path = "/v1/quotes";
    const api = `${api_endpoint}${path}?category=${category}`;
    try {
        const response = await axios.get(api, config);
        const apiData = response.data;
        res.render('quotes', { pageTitle: 'Quotes', apiData, error: null });
    } catch (error) {
        res.render('quotes', { pageTitle: 'Quotes', apiData: null, error });
    }
});


app.get('/riddles', async (req, res) => {
    res.render('riddles', { pageTitle: 'Riddles', apiData:null, error:null });
});

app.post('/riddles', async (req, res) => {
    const path = "/v1/riddles";
    const api = `${api_endpoint}${path}`;
    try {
        const response = await axios.get(api, config);
        const apiData = response.data;
        res.render('riddles', { pageTitle: 'Riddles', apiData, error: null });
    } catch (error) {
        res.render('riddles', { pageTitle: 'Riddles', apiData: null, error });
    }
});


app.get('/thesaurus', async (req, res) => {
    res.render('thesaurus', { pageTitle: 'Thesaurus', apiData:null, error:null });
});

app.post('/theasurus', async (req, res) => {
    const word = req.body.word;
    const path = "/v1/thesaurus";
    const api = `${api_endpoint}${path}?word=${word}`;
    try {
        const response = await axios.get(api, config);
        const apiData = response.data;
        res.render('thesaurus', { pageTitle: 'Thesaurus', apiData, error: null });
    } catch (error) {
        res.render('thesaurus', { pageTitle: 'Thesaurus', apiData: null, error });
    }
});


app.get('/thesaurus', async (req, res) => {
    res.render('thesaurus', { pageTitle: 'Thesaurus', apiData:null, error:null });
});

app.post('/thesaurus', async (req, res) => {
    const word = req.body.word;
    const path = "/v1/thesaurus";
    const api = `${api_endpoint}${path}?word=${word}`;
    try {
        const response = await axios.get(api, config);
        const apiData = response.data;
        res.render('thesaurus', { pageTitle: 'Thesaurus', apiData, error: null });
    } catch (error) {
        res.render('thesaurus', { pageTitle: 'Thesaurus', apiData: null, error });
    }
});


app.get('/weather', async (req, res) => {
    res.render('weather', { pageTitle: 'Weather', apiData:null, error:null });
});

app.post('/weather', async (req, res) => {
    const city = req.body.city;
    const path = "/v1/weather";
    const api = `${api_endpoint}${path}?city=${city}`;
    try {
        const response = await axios.get(api, config);
        const apiData = response.data;
        res.render('weather', { pageTitle: 'Weather', apiData, error: null,city });
    } catch (error) {
        res.render('weather', { pageTitle: 'Weather', apiData: null, error });
    }
});


app.get('/exercises', async (req, res) => {
    res.render('exercises', { pageTitle: 'Exercises', apiData:null, error:null });
});

app.post('/exercises', async (req, res) => {
    const muscle = req.body.muscle;
    const path = "/v1/exercises";
    const api = `${api_endpoint}${path}?muscle=${muscle}`;
    try {
        const response = await axios.get(api, config);
        const apiData = response.data;
        res.render('exercises', { pageTitle: 'Exercises', apiData, error: null });
    } catch (error) {
        res.render('exercises', { pageTitle: 'Exercises', apiData: null, error });
    }
});


app.get('/password', async (req, res) => {
    res.render('password', { pageTitle: 'Password Generator', apiData:null, error:null });
});

app.post('/password', async (req, res) => {
    const length = req.body.length;
    const path = "/v1/passwordgenerator";
    const api = `${api_endpoint}${path}?length=${length}`;
    try {
        const response = await axios.get(api, config);
        const apiData = response.data;
        res.render('password', { pageTitle: 'Password Generator', apiData, error: null });
    } catch (error) {
        res.render('password', { pageTitle: 'Password Generator', apiData: null, error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
