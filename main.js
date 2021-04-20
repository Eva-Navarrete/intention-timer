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
var logActivityBtn = document.querySelector('#logActivity')

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
  exerciseClickedBtn.classList.remove('exercise-clicked');
  meditateClickedBtn.classList.remove('meditate-clicked');
  studyClickedBtn.classList.add('study-clicked');
  studyImg.src = `assets/study-active.svg`;
  meditateImg.src = `assets/meditate.svg`;
  exerciseImg.src = `assets/exercise.svg`;
}

function changeMeditateButton() {
  exerciseClickedBtn.classList.remove('exercise-clicked');
  meditateClickedBtn.classList.add('meditate-clicked');
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
}

function categoryError() {
  if (!category.value) {
    errorTextCategory.classList.remove('hidden');
    errorImg4.classList.remove('hidden');
  } else if (category.value) {
    errorTextCategory.classList.add('hidden');
    errorImg4.classList.add('hidden');
  }
}

function descriptionError() {
  if (!description.value) {
    errorText.classList.remove('hidden');
    errorImg.classList.remove('hidden');
  } else if (description.value) {
    errorText.classList.add('hidden');
    errorImg.classList.add('hidden');
  }
}

function minutesError() {
  if (!minuteInput.value) {
    errorTextNums.classList.remove('hidden');
    errorImg2.classList.remove('hidden');
  } else if (minuteInput.value) {
    errorTextNums.classList.add('hidden');
    errorImg2.classList.add('hidden');
  }
}

function secondsError() {
  if (!secondInput.value) {
    errorTextNums2.classList.remove('hidden');
    errorImg3.classList.remove('hidden');
  } else if (secondInput.value) {
    errorTextNums2.classList.add('hidden');
    errorImg3.classList.add('hidden');
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
  // category = category.value;
  // description = description.value;
  // minutes = Number.parseInt(minutes.value);
  // seconds = Number.parseInt(seconds.value);
  //  completed.value = null;
  savedActivities.unshift(currentActivity);
}

function hideFormView() {
  if (category.value && description.value && minuteInput.value && secondInput.value) {
    createActivityInstance();
    selectCategoryContainer.classList.add('hidden');
    timerPage.classList.remove('hidden');
    activityTitle.innerText = 'Current Activity';
    showTimer();
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
  clockFormat();
}

function clockFormat() {
  var totalSec = parseInt(currentActivity.seconds);
  var totalMin = parseInt(currentActivity.minutes * 60);
  var time = totalSec + totalMin

  var minutes =  Math.floor(time/60);
  var seconds = time % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerCountdown.innerText = `${minutes}:${seconds}`
}

function startTimer() {
  var totalSec = parseInt(currentActivity.seconds);
  var totalMin = parseInt(currentActivity.minutes * 60);
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

function completeTimer() {
  if (timerCountdown.innerHTML === "00:00") {
    circleTimerBtn.innerText = 'COMPLETE!';
    circleTimerBtn.classList.add('complete-circle')
    logActivityBtn.classList.remove('hidden');

    }
}

var logPastActivities = document.querySelector('#listPastActivities')
var activitySection = document.querySelector('#activitySection');
logActivityBtn.addEventListener('click', displayLoggedActivity)
var createNewActivityBtn = document.querySelector('#createNewActivity')
var buttonForm = document.querySelector('#buttonForm');

function displayLoggedActivity() {
// logPastActivities.innerHTML = '';
logPastActivities.classList.add('hidden');
activitySection.classList.remove('hidden');
timerPage.classList.add('hidden');
activityTitle.innerText = 'Completed Activity';
buttonForm.classList.remove('hidden');


  for (var i = 0; i < savedActivities.length; i++) {
    activitySection.innerHTML += `
      <div class="activity-card" id="activityCard">
        <div class="identifier-line ${savedActivities[i].category}"></div>
        <p class="acivity-card-category" id="activityCardCategory"> ${savedActivities[i].category}</p>
        <p class="activity-card-time" id="activityCardTime">${savedActivities[i].minutes} MIN ${savedActivities[i].seconds} SECONDS</p>
        <p class="activity-card-description" id="activityCardDescription">${savedActivities[i].description}</p>
      </div>
      `;
  }

}
