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

//Stores input values to local storage under key "appointment" and renders them to page if they exist
textInput.value = localStorage.getItem("appointment");

textInput.addEventListener("input", function () {
  localStorage.setItem("appointment", textInput.value);
});

textInput1.value = localStorage.getItem("appointment1");

textInput1.addEventListener("input", function () {
  localStorage.setItem("appointment1", textInput1.value);
});

textInput2.value = localStorage.getItem("appointment2");

textInput2.addEventListener("input", function () {
  localStorage.setItem("appointment2", textInput2.value);
});

textInput3.value = localStorage.getItem("appointment3");

textInput3.addEventListener("input", function () {
  localStorage.setItem("appointment3", textInput3.value);
});

textInput4.value = localStorage.getItem("appointment4");

textInput4.addEventListener("input", function () {
  localStorage.setItem("appointment4", textInput4.value);
});

textInput5.value = localStorage.getItem("appointment5");

textInput5.addEventListener("input", function () {
  localStorage.setItem("appointment5", textInput5.value);
});

textInput6.value = localStorage.getItem("appointment6");

textInput6.addEventListener("input", function () {
  localStorage.setItem("appointment6", textInput6.value);
});

textInput7.value = localStorage.getItem("appointment7");

textInput7.addEventListener("input", function () {
  localStorage.setItem("appointment7", textInput7.value);
});

textInput8.value = localStorage.getItem("appointment8");

textInput8.addEventListener("input", function () {
  localStorage.setItem("appointment8", textInput8.value);
});
