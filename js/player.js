var player_btn;
var song;
var songName;

function playSong(icon, audio, title) {
    if (song != null && song != document.getElementById(audio)) {
        song.pause();
        song.currentTime = 0;
        player_btn.name = "play";
        songName.style.color = "#333";
    }

    player_btn = document.getElementById(icon);
    song = document.getElementById(audio);
    songName = document.getElementById(title);


    if (song.paused) {
        song.play();
        player_btn.name = "pause";
        songName.style.color = "#f2994b";
    } else {
        song.pause();
        player_btn.name = "play";
        songName.style.color = "#333";
    }
}