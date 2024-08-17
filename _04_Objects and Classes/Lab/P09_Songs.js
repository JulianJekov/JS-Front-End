function songsList(inputArr) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numbersOfSongs = inputArr.shift();
    let typeOfSong = inputArr.pop();
    for (const line of inputArr) {
        let [type, name, time] = line.split('_');
        songs.push(new Song(type, name, time));
    }

    if (typeOfSong === 'all') {
        songs.forEach(song => {
            console.log(song.name);
        });
    } else {
        songs.filter(song => song.type === typeOfSong).forEach(song => {
            console.log(song.name);
        })
    }
}

songsList([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );