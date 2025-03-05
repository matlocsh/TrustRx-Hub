const audio = document.getElementById("myAudio");
let currentTrackIndex = 0;

audio.addEventListener("ended", function() {
  currentTrackIndex++;
  if (currentTrackIndex < audio.getElementsByTagName("source").length) {
    audio.src = audio.getElementsByTagName("source")[currentTrackIndex].src;
    audio.play();
  } else {
    // If the last track has finished, loop back to the first track
    currentTrackIndex = 0;
    audio.src = audio.getElementsByTagName("source")[currentTrackIndex].src;
    audio.play();
  }
});