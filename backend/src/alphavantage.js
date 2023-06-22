'use strict'

const { default: axios } = require('axios');
const config = require('config');
const apiConfig = config.get("Alphavantage");

let alphavantageURL = `${config.get("Alphavantage.domain")}/query?`;
let alphavantageAPIKey = config.get("Alphavantage.APIkey");

module.exports = {
    getAutoSuggestion: (keyword, callback) => axios({
        method: 'GET',
        url: alphavantageURL,
        params: {
            function: 'SYMBOL_SEARCH',
            keywords: keyword,
            apikey: alphavantageAPIKey
        }
    }).then((response) => {
        callback(response);
    }).catch((err) => {
        console.log(err);
    }),

    getGlobalQuote: (symbol, callback) => axios({
        method: 'GET',
        url: alphavantageURL,
        params: {
            function: 'GLOBAL_QUOTE',
            symbol: symbol,
            apikey: alphavantageAPIKey
        }
    }).then((response) => {
        callback(response);
    }).catch((err) => {
        console.log(err);
    }),

    getStockNews: (symbol, callback) => axios({
        method: 'GET',
        url: alphavantageURL,
        params: {
            function: 'NEWS_SENTIMENT',
            symbol: symbol,
            topics: 'technology',
            apikey: alphavantageAPIKey
        }
    }).then((response) => {
        callback(response);
    }).catch((err) => {
        console.log(err);
    }),

    getDailyPrice: (symbol, callback) => axios({
        method: 'GET',
        url: alphavantageURL,
        params: {
            function: 'TIME_SERIES_DAILY',
            symbol: symbol,
            apikey: alphavantageAPIKey
        }
    }).then((response) => {
        callback(response);
    }).catch((err) => {
        console.log(err);
    }),

    getIndicator: (indicator, symbol, callback) => axios({
        method: 'GET',
        url: alphavantageURL,
        params: {
            function: indicator,
            symbol: symbol,
            interval: 'daily',
            time_period: 10,
            series_type: 'open',
            apikey: alphavantageAPIKey
        }
    }).then((response) => {
        callback(response);
    }).catch((err) => {
        console.log(err);
    })
};