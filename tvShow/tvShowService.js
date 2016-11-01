const tvShow = require('./TvShow');

class TvShowService {
    constructor() {
        this.tvShows = [new tvShow(1, 'Mr. Robot', 'Drama'), new tvShow(2, 'Black Mirror', 'Drama')];
    }
    getAll() {
        return this.tvShows;
    }
    getById(id) {
        return this.tvShows.find(elem => elem.id === id);
    }
}
module.exports = TvShowService;
