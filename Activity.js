class Activity {
  constructor(category, description, minutes, seconds) {
    this.id = Date.now();
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
  }

  beginTimer() {
    var totalSec = parseInt(this.seconds);
    var totalMin = parseInt(this.minutes * 60);
    var time = totalSec + totalMin

    var timer = setInterval(function() {
      var minutes =  Math.floor(time/60);
      var seconds = time % 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      timerCountdown.innerText = `${minutes}:${seconds}`
      time--;

      if (time === -1) {
          clearInterval(timer);
          timerCountdown.innerHTML = "00:00";
          completeTimer()
           }
      }, 1000);

  }

  markComplete() {
    this.completed = true
  }

  saveToStorage() {
    var storedActivity = JSON.stringify(savedActivities);

    localStorage.setItem('currentActivity', storedActivity)

    var parsedActivities = JSON.parse(localStorage.getItem('currentActivity'))

  }

}
