var btnFeedback = document.querySelector (".button-feedback");
var popupFeedback = document.querySelector (".modal-feedback");
var btnCloseFeedback = popupFeedback.querySelector (".button-close-feedback");
var loginFeedback = popupFeedback.querySelector ("#feedback-name");
var emailFeedback = popupFeedback.querySelector ("#feedback-email");
var textFeedback = popupFeedback.querySelector ("#feedback-text");
var formFeedback = popupFeedback.querySelector ("form");
  

btnFeedback.addEventListener ("click", function(evt){
    evt.preventDefault();
    popupFeedback.classList.add("modal-show");
})

btnCloseFeedback.addEventListener ("click", function(evt){
    evt.preventDefault();
    popupFeedback.classList.remove("modal-show");
})

formFeedback.addEventListener("submit", function (evt) {
    if (!loginFeedback.value || !emailFeedback.value || !textFeedback.value) {
      evt.preventDefault();
      console.log("Нужно ввести логин и пароль");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupFeedback.classList.contains("modal-show")) {
        popupFeedback.classList.remove("modal-show");
      }
    }
  });