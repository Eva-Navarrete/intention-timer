// QUERYSELECTORS

var selectCategoryContainer = document.querySelector('#formContainer');
var wrapper = document.querySelector('#wrapper');
var category = document.querySelector('#userInputOne');
var minutes = document.querySelector('#minutesInput');
var seconds = document.querySelector('#secondsInput');

var startActivityButton = document.querySelector('#startActivityButton');
var studyBtn = document.querySelector('#studyWrapper');
var meditateBtn = document.querySelector('#meditateWrapper');
var exerciseBtn = document.querySelector('#exerciseWrapper');
var studyClickedBtn = document.querySelector('.study-wrapper');
var meditateClickedBtn = document.querySelector('.meditate-wrapper');
var exerciseClickedBtn = document.querySelector('.exercise-wrapper');

var studyImg = document.querySelector('#studyLogo');
var meditateImg = document.querySelector('#meditateLogo');
var exerciseImg = document.querySelector('#exerciseLogo');


wrapper.addEventListener('click', changeColor);
startActivityButton.addEventListener('click', addErrorMessage);

function changeColor() {
  event.preventDefault();
  if(event.target.id === 'studyWrapper') {
    changeStudyButton();
  } else if (event.target.id === 'meditateWrapper') {
    changeMeditateButton()
  } else if (event.target.id === 'exerciseWrapper') {
    changeExerciseButton()
    }
  };

// *functions still need to revert img back to original
function changeStudyButton() {
  exerciseClickedBtn.classList.remove('exercise-clicked');
  meditateClickedBtn.classList.remove('meditate-clicked');
  studyClickedBtn.classList.add('study-clicked');
  studyImg.src = `assets/study-active.svg`;
}

function changeMeditateButton() {
  exerciseClickedBtn.classList.remove('exercise-clicked');
  meditateClickedBtn.classList.add('meditate-clicked');
  studyClickedBtn.classList.remove('study-clicked');
  meditateImg.src = `assets/meditate-active.svg`;
}

function changeExerciseButton() {
  exerciseClickedBtn.classList.add('exercise-clicked');
  meditateClickedBtn.classList.remove('meditate-clicked');
  studyClickedBtn.classList.remove('study-clicked');
  exerciseImg.src = `assets/exercise-active.svg`;
}

function addErrorMessage(event) {
  event.preventDefault();
  if (!category.value || !minutes.value || !seconds.value ) {
    var node = document.createElement("p");
      var textnode = document.createTextNode("A description is required.");
      node.appendChild(textnode);
      document.getElementById("inputOne").appendChild(node);

    }
}



// function submitActivityInfo() {
//   var activityInfo = {
//     activityName: activityName.value,
//     minutes: minutesInfo.value,
//     seconds: secondsInfo.value
//   }
// }








// An input field should be provided for What would you like to accomplish during this time?, minutes and seconds. The minutes and seconds fields should only accept numbers. (Hint: more than one layer should probably be put into place to ensure this. Make sure that e cannot be accepted.)

// 🤩DUNZOO ^^ maybe..???

// A user should see an error message if they attempt to submit the form without filling out all fields. (Note: The comp shows the error message for forgetting a description - You should mimic this error messaging for all inputs.)

// 🤩target the input fields with dqs add event target.value where function takes a conditional where if input.value is null/undefined return and error message that matches comp else submit it.

// A Start Activity button is provided to submit the data entered into the form. When the button is clicked, update your data model with an instance of the Activity class.

//🤩add DQS to activity button to submit/push instance to saved activity array.it has to be sent to DATA MODEL not just on the DOM. DATA MODEL IS OUR SOURCE OF TRUTH!!

// When the Start Activity button is clicked, the user should no longer see the form, and instead see a timer clock. The timer clock should display the user-provided minutes and seconds, as well as the description. The category should not appear, but the outline of the circle should match the color associated with the category.

// 🤩 dqs form add classlist hidden to form section (SEARCH HOW TO MAKE TIMER) make time appear when form is hidden that takes in data from input.value from minutes/seconds/inputs in an innerHTML` with interpolation of an element with input values` for timer and also labe; of activity. change "New Activity" to "Currretn Activty" within this function

// If the Start Activity button is clicked before the user has entered information into all four inputs, the user will receive an error message, but will not lose any information that was provided.

// 🤩 add preventdefault event to prevent user losing any input info when missed in input field display similiar error message from before.
