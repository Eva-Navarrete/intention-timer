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
    startTimer()
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
