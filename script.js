document.getElementById('startButton').addEventListener('click', function() {
    alert('You clicked the button!');
    // Implement your sign-up logic here
  });

const audioElements = document.querySelectorAll('audio');

audioElements.forEach(audio => {
  audio.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});
