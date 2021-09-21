console.log("page loaded...");

var video = document.getElementById('vid');
function over(){
  video.play();
}

function out(){
  video.pause();
}

function silence(){
  video.muted = true;

}