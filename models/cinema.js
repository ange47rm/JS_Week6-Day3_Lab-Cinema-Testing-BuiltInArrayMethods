const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitlesList = function() {
  return this.films.map( function(film) {
    return film.title
  }); 
}

Cinema.prototype.findFilm = function(filmTitle) {
  const found = this.films.find( function(film) {
    return film.title === filmTitle
  });
  return found;
}

Cinema.prototype.filterFilmsByGenre = function(filmGenre) {
  const foundFilms = this.films.filter( function(film){
    return film.genre === filmGenre;
  });
  return foundFilms;
}

Cinema.prototype.filmsByYear = function(filmYear) {
  const foundFilms = this.films.some( function(film){
    return film.year === filmYear
  });
  return foundFilms;
}

Cinema.prototype.checkFilmLength = function(filmLength) {
  const foundFilms = this.films.filter( function(film) {
    return film.length >= filmLength
  });
  return foundFilms;
}

Cinema.prototype.totalRunningTime = function () {
  const runningTime = this.films.reduce( function(totalTime, currentFilm) {
    return totalTime += currentFilm.length;
  },0);
  return runningTime;
}




module.exports = Cinema;
