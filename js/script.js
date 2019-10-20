var btnFeedback = document.querySelector (".button-feedback");
var popupFeedback = document.querySelector (".modal-feedback");
var btnCloseFeedback = popupFeedback.querySelector (".button-close-feedback");
var loginFeedback = popupFeedback.querySelector ("#feedback-name");
var emailFeedback = popupFeedback.querySelector ("#feedback-email");
var textFeedback = popupFeedback.querySelector ("#feedback-text");
var formFeedback = popupFeedback.querySelector ("form");
var sliderControls = document.querySelectorAll (".controls");
var sliderList = document.querySelectorAll (".slider-item");
var background = ["#849d8f", "#8c9aaa", "#a18f88"];
var body = document.querySelector ("body")

sliderControls[0].addEventListener ("click", function(){
  sliderClick(0);
});
sliderControls[1].addEventListener ("click", function(){
  sliderClick(1);
});
sliderControls[2].addEventListener ("click", function(){
  sliderClick(2);
});

function sliderClick(control){
    body.style.background = background[control];
    for (var i=0; i<sliderControls.length; i++){
      sliderList[i].classList.remove ("slide-show");
      sliderControls[i].classList.remove ("controls-active");
    }
    sliderList[control].classList.add ("slide-show");
    sliderControls[control].classList.add ("controls-active");
}

btnFeedback.addEventListener ("click", function(evt){
    evt.preventDefault();
    popupFeedback.classList.add("modal-show");
})

btnCloseFeedback.addEventListener ("click", function(evt){
    evt.preventDefault();
    popupFeedback.classList.remove("modal-show");
    popupFeedback.classList.remove("modal-error");
})

formFeedback.addEventListener("submit", function (evt) {
    if (!loginFeedback.value || !emailFeedback.value || !textFeedback.value) {
      evt.preventDefault();
      popupFeedback.classList.remove("modal-error");
      popupFeedback.offsetWidth = popupFeedback.offsetWidth;
      console.log("Нужно ввести логин и пароль");
      popupFeedback.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupFeedback.classList.contains("modal-show")) {
        popupFeedback.classList.remove("modal-show");
        popupFeedback.classList.remove("modal-error");
      }
    }
  });