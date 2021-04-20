class Activity {
  constructor(category, description, minutes, seconds) {
    this.id = Date.now();
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
  }

  beginTimer(a, b) {
    var intervalID = setInterval(myCallback, 1000);
      function myCallback() {
        currentActivity.seconds --;
        if (currentActivity.seconds === 0) {
        currentActivity.minutes --;
        currentActivity.seconds = 59;
      };
    }
  }

  markComplete() {

  }

  saveToStorage() {

  }

}
