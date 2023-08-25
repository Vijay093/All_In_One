// clock.js

// function updateISTTime() {
//     const istOptions = { timeZone: 'Asia/Kolkata', timeStyle: 'long', hour12: false };
//     const currentIST = new Date().toLocaleTimeString('en-IN', istOptions);

//     const istTimeElement = document.getElementById('ist-time');
//     istTimeElement.innerHTML = currentIST;
// }

// updateISTTime(); // Initial call to update the time

// // Update the time every second
// setInterval(updateISTTime, 1000);

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused()) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  navToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
  });
});
