const body = document.querySelector("body");
const mainContainer = document.querySelector(".main-container");
const minimalArea = document.querySelector(".minimal-area");
const minimalBtn = document.querySelector(".minimal-button");
const closeTab = document.querySelector(".close-tab");
const closeBtn = document.querySelector(".green-button");
const closeRedBtn = document.querySelector(".red-button");
const gridContainers = document.querySelector(".grid-containers");
const leftUpHomeButton = document.querySelector(".left-up-home-button");
const playBtn = document.querySelector(".play-button");
const repeatBtn = document.querySelector("#repeat-button")

closeBtn.addEventListener("click",function(){
    mainContainer.style.width = "100px";
    mainContainer.style.height = "100px";
    closeTab.style.display = "none";
    gridContainers.style.display = "none";
    minimalBtn.style.display = "flex";
    leftUpHomeButton.style.display = "none";
})

minimalBtn.addEventListener("click", function () {
    mainContainer.style.width = "1352px";
    mainContainer.style.height = "750px";
    gridContainers.style.display = "grid";
    minimalBtn.style.display = "none";
    closeTab.style.display = "flex";
    leftUpHomeButton.style.display = "grid";
  });


  document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');
    var playPauseButton = document.getElementById('playPauseButton');
    var volumeSlider = document.getElementById('volumeSlider');
    var rangeSlider = document.getElementById('myRange');
    
  
    // Başlangıçta ses düzeyini ve çalma süresini göster
    volumeSlider.value = audio.volume * 100;
  
    audio.addEventListener('timeupdate', function () {
      var currentTime = audio.currentTime;
      var duration = audio.duration;
      var progress = (currentTime / duration) * 100;
      
  
      // Çalma süresini canlı olarak göster
      rangeSlider.value = progress;
      
      var minutes = Math.floor(currentTime / 60);
      var seconds = Math.floor(currentTime % 60);
      var formattedTime = pad(minutes) + ':' + pad(seconds);
      document.getElementById('currentTimeDisplay').innerText = formattedTime;

    });
    

      // Yardımcı fonksiyon: 1 haneli sayıları 0 ile doldur
      function pad(num) {
        return (num < 10 ? '0' : '') + num;
      }


    playPauseButton.addEventListener('click', function () {
      if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
      } else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fa-duotone fa-play"></i>';
      }
    });

    repeatBtn.addEventListener("click", function () {
      audio.load();
      audio.play();
    })
  
    // Ses düzeyini güncelle
    volumeSlider.addEventListener('input', function () {
      var volume = volumeSlider.value / 100;
      audio.volume = volume;
    });
  
    // Çalma süresini güncelle
    rangeSlider.addEventListener('input', function () {
      var progress = rangeSlider.value / 100;
      audio.currentTime = audio.duration * progress;
    });
  });
  