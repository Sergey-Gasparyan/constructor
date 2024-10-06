function Playlist () {
    let songs = []
    let current = 0
    this.add = function (song) {
        songs.push(song.title)
    }
    this.play = function () {
        return `${songs[current]} started to play`
    }
    this.stop = function () {
        return `${songs[current]} stopped`
    }
    this.next = function () {
        
        if((current + 1) < songs.length) {
            let res = `${songs[current]} stoped , ${songs[current + 1]} started`
            current++
            return res
        }
        else {
           current = songs.length - 1
           return  `${songs[current]} stoped ,${songs[0]} started `
        }
    }
}

function Song (title , artist) {
    this.title = title
    this.artist = artist
}

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
const jadedop = new Song("aaaaa", "sssss");
playlist.add(heyJude);
playlist.add(jaded);
playlist.add(jadedop);
console.log(playlist.play()); // Hey Jude started to play
console.log(playlist.next());
console.log(playlist.next()) // Hey Jude stopped, Jaded started
console.log(playlist.next()); // Jaded stopped, Hey Jude started
console.log(playlist.stop()); // Hey Jude stopped
console.log(playlist.play()); // Hey Jude started