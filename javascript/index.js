$video = document.querySelector("#video");
$backward = document.querySelector("#backward");
$play = document.querySelector("#play");
$pause = document.querySelector("#pause");
$forward = document.querySelector("#forward");
$progress = document.querySelector("#progress");

$video.addEventListener("loadedmetadata", () => {
  $progress.max = $video.duration;
});

$video.addEventListener("timeupdate", () => {
  $progress.value = $video.currentTime;
});

$play.addEventListener("click", () => {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
});

$pause.addEventListener("click", () => {
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
});

$forward.addEventListener("click", () => {
  $video.currentTime += 10;
});

$backward.addEventListener("click", () => {
  $video.currentTime -= 10;
});


$progress.addEventListener("input", () => {
  $video.currentTime = $progress.value;
});
