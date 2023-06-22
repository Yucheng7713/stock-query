'use strict'

const express = require('express');
const Alphavantage = require('./alphavantage')

const app = express();
const port = 5050;

// Allow CORS
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000']
}))

// Get keyword suggestion for auto complete bar.
app.get('/suggest', (req, res) => {
     Alphavantage.getAutoSuggestion(req.query.keyword, (response) => {
        if(response.status == '200') {
            res.send(response.data);
        }
    });
});

// Global quote stock information with specific ticker for showing basic information.
app.get('/quote', (req, res) => {
    Alphavantage.getGlobalQuote(req.query.symbol, (response) => {
        if(response.status == '200') {
            res.send(response.data);
        }
    });
});

// Query news regarding the given stock quote.
app.get('/news', (req, res) => {
    Alphavantage.getStockNews(req.query.symbol, (response) => {
        if(response.status == '200') {
            res.send(response.data);
        }
    });
});

// Daily time series quote with specific ticker used for showing price diagram.
app.get('/price', (req, res) => {
    Alphavantage.getDailyPrice(req.query.symbol, (response) => {
        if(response.status == '200') {
            res.send(response.data);
        }
    });
});


// Daily time series quote with specific ticker used for showing price diagram.
// Available indicator : SMA, EMA, STOCH, RSI, ADX, CCI, BBANDS, MACD
app.get('/technical', (req, res) => {
    Alphavantage.getIndicator(req.query.indicator, req.query.symbol, (response) => {
        if(response.status == '200') {
            res.send(response.data);
        }
    });
});

app.get('/', (req, res) => {
    res.send('Backend is running.');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});