// video
const videos = document.querySelectorAll ('.video-slide');
let current = 0;
function showVideo (index) {
  videos.forEach ((video, i) => {
    video.style.display = i === index ? 'block' : 'none';
  });
}
showVideo (current);
setInterval (() => {
  current = (current + 1) % videos.length;
  showVideo (current);
}, 6000);