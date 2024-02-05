let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');
    }
}

start();

const personalMovieDB = {

    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", ''), 
              b = prompt("На сколько его оцените", '');
    
        if (a != null && b != null && a != '' && b != '') {
            personalMovieDB.movies[a] = b;
            console.log('done');
        }
        else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectedPersonlLevel(){
    if(personalMovieDB.count < 10){
        console.log("просмотрено довольно мало фильмов");
    }
    else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    }
    else if(personalMovieDB.count >= 30){
        console.log("Вы киноман");
    }
    else {
        console.log("Произошла ошибка");
    }
}

detectedPersonlLevel();


function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);        
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 0;i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '')
    }
}

writeYourGenres();