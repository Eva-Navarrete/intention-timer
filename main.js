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


function changeColor() {
  event.preventDefault();
  if (event.target.id === 'studyWrapper') {
    changeStudyButton();
    category.value = 'study';
  } else if (event.target.id === 'meditateWrapper') {
    changeMeditateButton();
    category.value = 'meditate';
  } else if (event.target.id === 'exerciseWrapper') {
    changeExerciseButton();
    category.value = 'exercise';
  }
}

// button.addEventListener("click", changeColor)
//
// function(evt) {
//   var e = find.your.element.however.you.need();
//   e.classList.toggle("highlight");
// });


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

function createNewActivity() {
  currentActivity = new Activity(category.value, description.value, Number.parseInt(minuteInput.value), Number.parseInt(secondInput.value));
  // category = category.value;
  // description = description.value;
  // minutes = Number.parseInt(minutes.value);
  // seconds = Number.parseInt(seconds.value);
  //  completed.value = null;
  console.log(currentActivity);
  savedActivities.push(currentActivity);
}

function hideFormView() {
  if (category.value && description.value && minuteInput.value && secondInput.value) {
    createNewActivity();
    selectCategoryContainer.classList.add('hidden');
    timerPage.classList.remove('hidden');
    showTimer();
  }
  changeCountdownColor();
}

function showTimer() {
  descriptionInput.innerText = currentActivity.description;
  timerCountdown.innerText = `${currentActivity.minutes} : ${currentActivity.seconds}`;

}

function changeCountdownColor() {
  if (currentActivity.category === 'study') {
    circleTimerBtn.style.borderColor = '#B3FD78';
  } else if (currentActivity.category === 'meditate') {
    circleTimerBtn.style.borderColor = '#C278FD';
  } else if (currentActivity.category === 'exercise') {
    circleTimerBtn.style.borderColor = '#FD8078';
  }
}


circleTimerBtn.addEventListener('click', startTimer);

// function startTimer() {
//   var seconds = currentActivity.seconds
//   var minutes = currentActivity.minutes
//     var timer = minutes, seconds;
//     var time = setInterval(function () {
//         minutes = parseInt(minutes / 60, 10);
//         minutes = parseInt(seconds % 60, 10);
//
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//
//         document.getElementById('timerCountdown').innerHTML=  minutes + ":" + seconds;
//         --timer;
//         if (--timer < 0) {
//             clearInterval(time)
//             document.getElementById("timerCountdown").innerHTML = "00:00";
//         }
//     }, 1000);
// };





function startTimer() {
  var totalSec = currentActivity.seconds
  var totalMin = currentActivity.minutes
  // var totalTime = (currentActivity.minutes * 60) + currentActivity.seconds

  var timer = setInterval(function() {

    totalMin = totalMin < 10 ? "0" + totalMin : totalMin;
    totalSec = totalSec < 10 ? "0" + totalSec : totalSec;

    document.getElementById('timerCountdown').innerHTML= totalMin + ":" + totalSec;
    totalSec--;

    if (totalMin >= 1 && totalSec === -1) {
      totalSec--;
      totalMin --;
      totalSec = 59;
    } else if (totalSec === -1) {
        clearInterval(timer);
        document.getElementById("timerCountdown").innerHTML = "00:00";      }
    }, 1000);
}
