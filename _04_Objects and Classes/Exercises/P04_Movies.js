function moviesInfo(input) {

    let movies = [];

    for (const command of input) {
        if (command.includes('addMovie')) {
            let movie = command.split('addMovie ');
            movies.push({name:movie[1]})
        } else if (command.includes('directedBy')) {
            let [movie, director] = command.split(' directedBy ');
            let search = movies.find((element) => element.name === movie);
            if(search) {
                search['director'] = director;
            }
        } else if (command.includes('onDate')) {
            let [movie, date] = command.split(' onDate ');
            let search = movies.find((element) => element.name === movie);
            if(search) {
                search['date'] = date;
            }
        }
    }

    movies.forEach((movie)=>{
        const isValidMovie = movie.name && movie.director && movie.date;
        if(isValidMovie) {
            console.log(JSON.stringify(movie));
        }
    })

}

moviesInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);