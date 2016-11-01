const express = require('express');
const tvShowService = require('./tvShowService');

const tv_show_router = express.Router();
const tv_show_service = new tvShowService();

tv_show_router.get('/', (req, res) => res.json(tv_show_service.getAll()));
tv_show_router.get('/:tvShowId', (req, res) => {
    console.log(`Fetching TV Show with id ${req.params.tvShowId}`);
    const result = tv_show_service.getById(+req.params.tvShowId);
    console.log(result);
    res.send(result);
    });

module.exports = tv_show_router;
