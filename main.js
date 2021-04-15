// QUERYSELECTORS
// Pseudo
// Form Functionality
// When an activity category is clicked on (Exercise, Meditate, or Study), the associated border and icon should change colors to give a visual indication that it has been selected. Colors are provided in comp.

// 🤩(event Bubling starts?) Target buttons section with dqs then create an evenListener for each with a toggle/hover event which changes color of selected buttton to the corresponding color.
// Create function that will be added to event listener which will toggle the clicked button selection. ?if event.target includes mediation class then replace innerHTML with color mediation img and etc.. (BE clear with Targets!!)

// user clicks either exercise, meditate, study
// border change to color
// icon change to color
// do we use hover for border and replace img in js with other file
// how?
//

var selectCategoryContainer = document.querySelector('#formContainer');
var studyBtn = document.querySelector('#studyButton');
var meditateBtn = document.querySelector('#meditateButton');
var exerciseBtn = document.querySelector('#exerciseButton');

selectCategoryContainer.addEventListener('click', selectCategoryContainer)

// function swapColor() {
//   // if study button is clicked, change to green
//   // if meditate button is clickd, change to purple
//   // if exercise button is clickd, change to red
// }

// studyBtn.src = 'assets/study-active.svg'
//
// studyBtn.innerHTML = 'assets/study-active.svg';
// meditateBtn.innerHTML = 'assets/meditate-active.svg';
// exerciseBtn.innerHTML = 'assets/exercise-active.svg';

var wrapper = document.querySelector('.wrapper')
  var studyButton = document.querySelector('#studyButton')
  var meditateButton = document.querySelector('#meditateButton')
  var exerciseButton = document.querySelector('#exerciseButton')

wrapper.addEventListener('click', changeColor);

function changeColor() {
  event.preventDefault();
  if (event.target.getElementById === "studyButton") {
    studyButton.innerHTML =  `<button class="button" id="studyButton"><img class="logo"src="assets/study-active.svg"alt="study-logo">Study</button>`
  }
  if(event.target.className === "button") {
    meditateButton.innerHTML = `<button class="button" id="meditateButton"><img class="logo"src="assets/meditate-active.svg"alt="meditate-logo">Meditate</button>`
  }
  if(event.target.className === "button") {
    exerciseButton.innerHTML = `<button class="button" id="exerciseButton"><img class="logo"src="assets/exercise-active.svg"alt="exercise-logo">Exercise</button>`
  }
}

// var wrapper = document.querySelector('.wrapper')
// var studyBtn = document.querySelector('#studyButton')
//
// wrapper.addEventListener('click', changeColor);
//
// function changeColor(event) {
//   event.preventDefault();
//   if (event.target.getElementById === "#studyButton") {
//     img.innerHTML = '<button class="button" id="studyButton"><img class="logo" src="assets/study-active.svg" alt="study-logo">Study</button>';
//   }
// }
// function showSelectCategory() {
//   innerHTML = '';
//   if (event.target.className.includes('study-button')) {
//     // `${img src= 'new color img'}`
//     //then we want to replace img with color img
//     innerHTML =
//     '<button class="study-button" id="studyButton"><img class="logo"src="assets/study-active.svg" alt="study-logo">Study</button>';
//   }
//   console.log(event);
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
