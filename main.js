// QUERYSELECTORS
var activitySection = document.querySelector('#activitySection');
var activityTitle = document.querySelector('h1');
var buttonForm = document.querySelector('#buttonForm');
var description = document.querySelector('#userInputOne');
var descriptionInput = document.querySelector('#descriptionInput');
var displayTimer = document.querySelector('#displayTimer');
var errorText = document.querySelector('#errorText');
var errorTextCategory = document.querySelector('#errorTextCategory');
var errorTextNums = document.querySelector('#errorTextNumbers');
var errorTextNums2 = document.querySelector('#errorTextNumbers2');
var listPastActivities = document.querySelector('#listPastActivities');
var minuteInput = document.querySelector('#minutesInput');
var secondInput = document.querySelector('#secondsInput');
var selectCategoryContainer = document.querySelector('#formContainer');
var timerCountdown = document.querySelector('#timerCountdown');
var timerPage = document.querySelector('.timer');
var wrapper = document.querySelector('#wrapper');

// Button Variables
var category = document.querySelector('.category-button');
var circleTimerBtn = document.querySelector('#circleTimer');
var createNewActivityBtn = document.querySelector('#createNewActivityButton');
var exerciseBtn = document.querySelector('#exerciseWrapper');
var exerciseClickedBtn = document.querySelector('.exercise-wrapper');
var logActivityBtn = document.querySelector('#logActivity');
var meditateBtn = document.querySelector('#meditateWrapper');
var meditateClickedBtn = document.querySelector('.meditate-wrapper');
var startActivityButton = document.querySelector('#startActivityButton');
var studyBtn = document.querySelector('#studyWrapper');
var studyClickedBtn = document.querySelector('.study-wrapper');

// Image Variables
var errorImg = document.querySelector('#errorImage');
var errorImg2 = document.querySelector('#errorImage2');
var errorImg3 = document.querySelector('#errorImage3');
var errorImg4 = document.querySelector('#errorImageCategory');
var exerciseImg = document.querySelector('#exerciseLogo');
var meditateImg = document.querySelector('#meditateLogo');
var studyImg = document.querySelector('#studyLogo');

// Global Variable
var savedActivities = [];
var currentActivity;

// Event Listeners
circleTimerBtn.addEventListener('click', startTimer);
createNewActivityBtn.addEventListener('click', returnCreateActivityView);
logActivityBtn.addEventListener('click', displayLoggedActivity);
minuteInput.addEventListener('keydown', preventE);
secondInput.addEventListener('keydown', preventE);
startActivityButton.addEventListener('click', addErrorMessage);
wrapper.addEventListener('click', changeColor);


function show(element) {
  element.classList.remove('hidden');
}

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
  exerciseImg.src = `assets/exercise.svg`;
  meditateImg.src = `assets/meditate.svg`;
}

function changeMeditateButton() {
  meditateClickedBtn.classList.add('meditate-clicked');
  exerciseClickedBtn.classList.remove('exercise-clicked');
  studyClickedBtn.classList.remove('study-clicked');
  meditateImg.src = `assets/meditate-active.svg`;
  exerciseImg.src = `assets/exercise.svg`;
  studyImg.src = `assets/study.svg`;
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
  var invalidChars = ["e"];
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
  var storedActivities = JSON.parse(localStorage.getItem('currentActivity'));
}
