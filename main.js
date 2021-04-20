// QUERYSELECTORS
var selectCategoryContainer = document.querySelector('#formContainer');
var wrapper = document.querySelector('#wrapper');
var description = document.querySelector('#userInputOne');
var minuteInput = document.querySelector('#minutesInput');
var secondInput = document.querySelector('#secondsInput');
var errorText = document.querySelector('#errorText');
var errorTextNums = document.querySelector('#errorTextNumbers');
var errorTextNums2 = document.querySelector('#errorTextNumbers2');
var errorTextCategory = document.querySelector('#errorTextCategory');
var timerPage = document.querySelector('.timer');
var displayTimer = document.querySelector('#displayTimer');
var descriptionInput = document.querySelector('#descriptionInput');
var timerCountdown = document.querySelector('#timerCountdown');
var activityTitle = document.querySelector('h1');
var buttonForm = document.querySelector('#buttonForm');
var listPastActivities = document.querySelector('#listPastActivities');
var activitySection = document.querySelector('#activitySection');

// Button Variables
var startActivityButton = document.querySelector('#startActivityButton');
var studyBtn = document.querySelector('#studyWrapper');
var meditateBtn = document.querySelector('#meditateWrapper');
var exerciseBtn = document.querySelector('#exerciseWrapper');
var studyClickedBtn = document.querySelector('.study-wrapper');
var meditateClickedBtn = document.querySelector('.meditate-wrapper');
var exerciseClickedBtn = document.querySelector('.exercise-wrapper');
var category = document.querySelector('.category-button');
var circleTimerBtn = document.querySelector('#circleTimer');
var logActivityBtn = document.querySelector('#logActivity');
var createNewActivityBtn = document.querySelector('#createNewActivityButton');

// Image Variables
var studyImg = document.querySelector('#studyLogo');
var meditateImg = document.querySelector('#meditateLogo');
var exerciseImg = document.querySelector('#exerciseLogo');
var errorImg = document.querySelector('#errorImage');
var errorImg2 = document.querySelector('#errorImage2');
var errorImg3 = document.querySelector('#errorImage3');
var errorImg4 = document.querySelector('#errorImageCategory');

// Global Variable
var savedActivities = [];
var currentActivity;

// Event Listeners
wrapper.addEventListener('click', changeColor);
startActivityButton.addEventListener('click', addErrorMessage);
minuteInput.addEventListener('keydown', preventE);
secondInput.addEventListener('keydown', preventE);
circleTimerBtn.addEventListener('click', startTimer);
logActivityBtn.addEventListener('click', displayLoggedActivity);
createNewActivityBtn.addEventListener('click', returnCreateActivityView);


function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
}


function changeColor() {
  event.preventDefault();
  if (event.target.id === 'studyWrapper') {
    changeStudyButton();
    category.value = 'Study';
  } else if (event.target.id === 'meditateWrapper') {
    changeMeditateButton();
    category.value = 'Meditate';
  } else if (event.target.id === 'exerciseWrapper') {
    changeExerciseButton();
    category.value = 'Exercise';
  }
}

function changeStudyButton() {
  studyClickedBtn.classList.add('study-clicked');
  exerciseClickedBtn.classList.remove('exercise-clicked');
  meditateClickedBtn.classList.remove('meditate-clicked');
  studyImg.src = `assets/study-active.svg`;
  meditateImg.src = `assets/meditate.svg`;
  exerciseImg.src = `assets/exercise.svg`;
}

function changeMeditateButton() {
  meditateClickedBtn.classList.add('meditate-clicked');
  exerciseClickedBtn.classList.remove('exercise-clicked');
  studyClickedBtn.classList.remove('study-clicked');
  meditateImg.src = `assets/meditate-active.svg`;
  studyImg.src = `assets/study.svg`;
  exerciseImg.src = `assets/exercise.svg`;
}

function changeExerciseButton() {
  exerciseClickedBtn.classList.add('exercise-clicked');
  meditateClickedBtn.classList.remove('meditate-clicked');
  studyClickedBtn.classList.remove('study-clicked');
  exerciseImg.src = `assets/exercise-active.svg`;
  meditateImg.src = `assets/meditate.svg`;
  studyImg.src = `assets/study.svg`;
}

function addErrorMessage(event) {
  event.preventDefault();
  categoryError();
  descriptionError();
  minutesError();
  secondsError();
  hideFormView();
  showTimer();
}

function categoryError() {
  if (!category.value) {
    show(errorTextCategory);
    show(errorImg4);
  } else if (category.value) {
    hide(errorTextCategory);
    hide(errorImg4);
  }
}

function descriptionError() {
  if (!description.value) {
    show(errorText);
    show(errorImg);
  } else if (description.value) {
    hide(errorText);
    hide(errorImg);
  }
}

function minutesError() {
  if (!minuteInput.value) {
    show(errorTextNums);
    show(errorImg2);
  } else if (minuteInput.value) {
    hide(errorTextNums);
    hide(errorImg2);
  }
}

function secondsError() {
  if (!secondInput.value) {
    show(errorTextNums2);
    show(errorImg3);
  } else if (secondInput.value) {
    hide(errorTextNums2);
    hide(errorImg3);
  }
}

function preventE(e) {
  var invalidChars = ["e"]
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}

function createActivityInstance() {
  currentActivity = new Activity(category.value, description.value, Number.parseInt(minuteInput.value), Number.parseInt(secondInput.value));
}

function hideFormView() {
  if (category.value && description.value && minuteInput.value && secondInput.value) {
    createActivityInstance();
    hide(selectCategoryContainer);
    show(timerPage);
    activityTitle.innerText = 'Current Activity';
  }
  changeCountdownColor();
}

function changeCountdownColor() {
  if (currentActivity.category === 'Study') {
    circleTimerBtn.style.borderColor = '#B3FD78';
  } else if (currentActivity.category === 'Meditate') {
    circleTimerBtn.style.borderColor = '#C278FD';
  } else if (currentActivity.category === 'Exercise') {
    circleTimerBtn.style.borderColor = '#FD8078';
  }
}

function showTimer() {
  descriptionInput.innerText = currentActivity.description;
  circleTimer.innerText = 'START';
  hide(logActivityBtn);
  clockFormat();
}

function clockFormat() {
  var totalSec = parseInt(currentActivity.seconds);
  var totalMin = parseInt(currentActivity.minutes * 60);
  var time = totalSec + totalMin;
  var minutes =  Math.floor(time/60);
  var seconds = time % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timerCountdown.innerText = `${minutes}:${seconds}`;
}

function startTimer() {
  currentActivity.beginTimer();
}

function completeTimer() {
  currentActivity.markComplete();
  if (timerCountdown.innerHTML === "00:00") {
    circleTimerBtn.innerText = 'COMPLETE!';
    circleTimerBtn.classList.add('complete-circle');
    show(logActivityBtn);
    }
}

function displayLoggedActivity() {
  savedActivities.unshift(currentActivity);
  activitySection.innerHTML = '';
  showCompletedActivityView ();
  retrieveStored();
  for (var i = 0; i < savedActivities.length; i++) {
    activitySection.innerHTML += `
      <div class="activity-card" id="activityCard">
        <div class="identifier-line ${savedActivities[i].category}"></div>
        <div class="user-activity-input">
          <p class="activity-card-category">${savedActivities[i].category}</p>
          <p class="activity-card-time">${savedActivities[i].minutes} MIN ${savedActivities[i].seconds} SECONDS</p>
          <p class="activity-card-description">${savedActivities[i].description}</p>
        </div>
      </div>
      `;
  }
}

function showCompletedActivityView () {
  hide(listPastActivities);
  show(activitySection);
  hide(timerPage);
  show(buttonForm);
  activityTitle.innerText = 'Completed Activity';
}

function returnCreateActivityView() {
  hide(buttonForm);
  show(selectCategoryContainer);
  activityTitle.innerText = 'New Activity';
  minuteInput.value = '';
  secondInput.value = '';
  description.value = '';
}

function retrieveStored() {
  currentActivity.saveToStorage();
  var storedActivities = JSON.parse(localStorage.getItem('currentActivity'))
}
