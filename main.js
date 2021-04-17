// QUERYSELECTORS
var selectCategoryContainer = document.querySelector('#formContainer');
var wrapper = document.querySelector('#wrapper');
var description = document.querySelector('#userInputOne');
var minutes = document.querySelector('#minutesInput');
var seconds = document.querySelector('#secondsInput');
var errorText = document.querySelector('#errorText')
var errorTextNums = document.querySelector('#errorTextNumbers')
var errorTextNums2 = document.querySelector('#errorTextNumbers2')

// Button Variables
var startActivityButton = document.querySelector('#startActivityButton');
var studyBtn = document.querySelector('#studyWrapper');
var meditateBtn = document.querySelector('#meditateWrapper');
var exerciseBtn = document.querySelector('#exerciseWrapper');
var studyClickedBtn = document.querySelector('.study-wrapper');
var meditateClickedBtn = document.querySelector('.meditate-wrapper');
var exerciseClickedBtn = document.querySelector('.exercise-wrapper');
var category = document.querySelector('.category-button');

// Image Variables
var studyImg = document.querySelector('#studyLogo');
var meditateImg = document.querySelector('#meditateLogo');
var exerciseImg = document.querySelector('#exerciseLogo');
var errorImg = document.querySelector('#errorImage');
var errorImg2 = document.querySelector('#errorImage2');
var errorImg3 = document.querySelector('#errorImage3');

// Global Variable
var savedActivities = [];
var currentActivity;

// Event Listeners
wrapper.addEventListener('click', changeColor);
startActivityButton.addEventListener('click', addErrorMessage);
minutes.addEventListener('keydown', preventE);
seconds.addEventListener('keydown', preventE);


function changeColor() {
  event.preventDefault();
  if(event.target.id === 'studyWrapper') {
    changeStudyButton();
  } else if (event.target.id === 'meditateWrapper') {
    changeMeditateButton();
  } else if (event.target.id === 'exerciseWrapper') {
    changeExerciseButton();
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
    if(!description.value) {
      errorImg.classList.remove('hidden');
      errorText.classList.remove('hidden');
    } if (!minutes.value) {
        errorTextNums.classList.remove('hidden');
        errorImg2.classList.remove('hidden');
    } if (!seconds.value) {
        errorTextNums2.classList.remove('hidden');
        errorImg3.classList.remove('hidden');
    } if (description.value) {
      errorImg.classList.add('hidden');
      errorText.classList.add('hidden');
    } if (minutes.value) {
          errorTextNums.classList.add('hidden');
          errorImg2.classList.add('hidden');
    } if (seconds.value) {
          errorTextNums2.classList.add('hidden');
          errorImg3.classList.add('hidden');
    }
    createNewActivity();
    hideFormView();

}

function preventE(e) {
  var invalidChars = ["e"]
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}

function createNewActivity() {
  currentActivity = new Activity(category.value, description.value, minutes.value, seconds.value)
  category.innerText = category.value;
  description.innerText = description.value;
  minutes.innerText = minutes.value;
  seconds.innerText = seconds.value;
//  completed.value = null;
  savedActivities.push(currentActivity);
}
var timerPage = document.querySelector('.timer');

function hideFormView() {
selectCategoryContainer.classList.add('hidden');
timerPage.classList.remove('hidden');
}



// When the Start Activity button is clicked, the user should no longer see the form, and instead see a timer clock. The timer clock should display the user-provided minutes and seconds, as well as the description. The category should not appear, but the outline of the circle should match the color associated with the category.

// 🤩 dqs form add classlist hidden to form section (SEARCH HOW TO MAKE TIMER) make time appear when form is hidden that takes in data from input.value from minutes/seconds/inputs in an innerHTML` with interpolation of an element with input values` for timer and also labe; of activity. change "New Activity" to "Currretn Activty" within this function

// If the Start Activity button is clicked before the user has entered information into all four inputs, the user will receive an error message, but will not lose any information that was provided.

// 🤩 add preventdefault event to prevent user losing any input info when missed in input field display similiar error message from before.
