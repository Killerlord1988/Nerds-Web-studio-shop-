var writeUs = document.querySelector(".btn-contact");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("name");

writeUs.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  console.log("Клик по кнопке напишите нам");

  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  console.log("Клик по кнопке закрыть");
});

form.addEventListener("submit", function(event) {
  if (!name.value || !email.value) {
    event.preventDefault();
    console.log("Заполните все поля!");
  } else {
    localStorage.setItem("name", name.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
    }
  }
});

// Form closure when clicking outside of its borders
$(document).click( function(event){
     if( $(event.target).closest("popup").length )
       return;
     $("popup").fadeOut("slow");
     event.stopPropagation();
   });

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
  });

});

/*yandex map API*/

ymaps.ready(init);
var myMap,
    myPlacemark;

function init() {
  myMap = new ymaps.Map("map", {
    center: [46.33852780, 47.98396780],
    zoom: 16
  });

  myMap.controls
    .remove("geolocationControl")
    .remove("trafficControl")
    .remove("typeSelector")
    .remove("rulerControl")
    .remove("searchControl");

    myMap.behaviors.disable([
      "scrollZoom"
    ]);


    myPlacemark = new ymaps.Placemark([46.33718279, 47.98663928], {
    balloonContentHeader: "<span>Nerd's</span>",
    balloonContentBody: "<span>Мы здесь делаем историю</span>",
    balloonContentFooter: "<i>Маленькие комнаты или жилища собирают ум, а большие его рассеивают.</i>",
    hintContent: "Студия отличная"
  }, {
    iconLayout: "default#image",
    iconImageHref: "img/marker.png",
    iconImageSize: [231, 190],
    iconImageOffset: [-50, -187]
 });



   myMap.geoObjects.add(myPlacemark);
}
