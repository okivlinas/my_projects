const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');

const personalMovieDB = {

    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

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

console.log(personalMovieDB);