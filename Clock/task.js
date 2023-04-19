alert('Welcome my clock page.');
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let timeString = hours.toString().padStart(2, '0') + ':' + 
                     minutes.toString().padStart(2, '0') + ':' + 
                     seconds.toString().padStart(2, '0');
    document.getElementById('myClock').innerHTML = timeString;
  }
  setInterval(updateClock, 1000);