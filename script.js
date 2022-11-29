//Displays date in header
var currentDay = dayjs();
$("#currentDay").text(currentDay.format("dddd, MMMM D"));

//grabs appointment input boxes by id
var textInput = document.getElementById("txt-in");
var textInput1 = document.getElementById("txt-in1");
var textInput2 = document.getElementById("txt-in2");
var textInput3 = document.getElementById("txt-in3");
var textInput4 = document.getElementById("txt-in4");
var textInput5 = document.getElementById("txt-in5");
var textInput6 = document.getElementById("txt-in6");
var textInput7 = document.getElementById("txt-in7");
var textInput8 = document.getElementById("txt-in8");

//Gets input values from local storage
testInput.value = localStorage.getItem("appointment");
textInput1.value = localStorage.getItem("appointment1");
textInput2.value = localStorage.getItem("appointment2");
textInput3.value = localStorage.getItem("appointment3");
textInput4.value = localStorage.getItem("appointment4");
textInput5.value = localStorage.getItem("appointment5");
textInput6.value = localStorage.getItem("appointment6");
textInput7.value = localStorage.getItem("appointment7");
textInput8.value = localStorage.getItem("appointment8");

//Sets input values to local storage respectively
var saveButs = document.querySelectorAll(".saveBtn");
for (var i = 0; i < saveButs.length; i++) {
  var buttonHour = parseInt(saveButs[i].getAttribute("data-hour"));

  if (buttonHour == 9) {
    saveButs[i].addEventListener("click", function () {
      localStorage.setItem("appointment", textInput.value);
    });
  } else if (buttonHour == 10) {
    saveButs[i].addEventListener("click", function () {
      localStorage.setItem("appointment1", textInput1.value);
    });
  } else if (buttonHour == 11) {
    saveButs[i].addEventListener("click", function () {
      localStorage.setItem("appointment2", textInput2.value);
    });
  } else if (buttonHour == 12) {
    saveButs[i].addEventListener("click", function () {
      localStorage.setItem("appointment3", textInput3.value);
    });
  } else if (buttonHour == 1) {
    saveButs[i].addEventListener("click", function () {
      localStorage.setItem("appointment4", textInput4.value);
    });
  } else if (buttonHour == 2) {
    saveButs[i].addEventListener("click", function () {
      localStorage.setItem("appointment5", textInput5.value);
    });
  } else if (buttonHour == 3) {
    saveButs[i].addEventListener("click", function () {
      localStorage.setItem("appointment6", textInput6.value);
    });
  } else if (buttonHour == 4) {
    saveButs[i].addEventListener("click", function () {
      localStorage.setItem("appointment7", textInput7.value);
    });
  } else if (buttonHour == 5) {
    saveButs[i].addEventListener("click", function () {
      localStorage.setItem("appointment8", textInput8.value);
    });
  }
}

//Sets background color of input field based on time of day

var hourInputs = document.querySelectorAll(".text-input");
for (var i = 0; i < hourInputs.length; i++) {
  var rowHour = parseInt(hourInputs[i].getAttribute("data-hour")); // e.g. 9

  if (rowHour < dayjs().hour()) {
    hourInputs[i].classList.add("past");
  } else if (rowHour == dayjs().hour()) {
    hourInputs[i].classList.add("present");
  } else {
    hourInputs[i].classList.add("future");
  }
}
