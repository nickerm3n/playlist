(function() {
  document.querySelector('.btn-hide').onclick = hideFunc;
  document.querySelector('.btn-show').onclick = showFunc;
})()


var songList = document.querySelector('.song-list');
var playList = [
 {
  author: "LED ZEPPELIN",
  song:"STAIRWAY TO HEAVEN"
 },
 {
  author: "QUEEN",
  song:"BOHEMIAN RHAPSODY"
 },
 {
  author: "LYNYRD SKYNYRD",
  song:"FREE BIRD"
 },
 {
  author: "DEEP PURPLE",
  song:"SMOKE ON THE WATER"
 },
 {
  author: "JIMI HENDRIX",
  song:"ALL ALONG THE WATCHTOWER"
 },
 {
  author: "AC/DC",
  song:"BACK IN BLACK"
 },
 {
  author: "QUEEN",
  song:"WE WILL ROCK YOU"
 },
 {
  author: "METALLICA",
  song:"ENTER SANDMAN"
 }
];

function hideFunc() {
  songList.innerHTML = '';
}

function showFunc() {
  songList.innerHTML = '';
  showByTimer();
}

function showByTimer () {
  var i = 0;

  var timerId = setTimeout( function next() {
      if (i < playList.length) {
        var elem = document.createElement('li'),
        text = document.createTextNode(`${i}: ${playList[i].author} - ${playList[i].song}`);
        elem.appendChild(text)
        elem.classList.add('song');
        songList.appendChild(elem)
        i++;

        timerId = setTimeout(next, 150);
      }
  }, 200)
}
