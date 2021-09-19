
//This code is definitely not DRY, needs to be refactored

//Document ready function
$(document).ready(function(){
//Creating the append on click listener for Aquarius
$(".sunsign1").on("click", function(){
    event.preventDefault();
    $.get('https://lhl-horoscope.herokuapp.com/horoscopes/aquarius', function(data) {
    callAPI(data);
    document.getElementById('imageDiv').innerHTML = '<img width="800" height="600" src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_aquarius.png">';
  });
});

//Creating the append on click listerner for Pisces
$(".sunsign2").on("click", function(){
    event.preventDefault();
    $.get('https://lhl-horoscope.herokuapp.com/horoscopes/pisces', function(data) {
    callAPI(data);
document.getElementById('imageDiv').innerHTML = '<img width="800" height="600" src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_pisces.png">';
  });
});

//Creating the append for Aries
$(".sunsign3").on("click", function(){
    event.preventDefault();
    $.get('https://lhl-horoscope.herokuapp.com/horoscopes/aries', function(data) {
    callAPI(data);
    document.getElementById('imageDiv').innerHTML = '<img width="800" height="600" src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_aries.png">';

  });
});

//Creating the append for Taurus
$(".sunsign4").on("click", function(){
    event.preventDefault();
    $.get("https://lhl-horoscope.herokuapp.com/horoscopes/taurus", function(data) {
    callAPI(data);
    document.getElementById('imageDiv').innerHTML = '<img width="800" height="600" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhic_16rvtzq0wwivoO1W7vyMelrCGPq_qA&usqp=CAU">';

  });
});

//Creating the append for Gemini
$(".sunsign5").on("click", function(){
    event.preventDefault();
    $.get("https://lhl-horoscope.herokuapp.com/horoscopes/gemini", function(data) {
    callAPI(data);
    document.getElementById('imageDiv').innerHTML = '<img width="800" height="600" src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_gemini.png">';

  });
});

//Creating the append for Cancer
$(".sunsign6").on("click", function(){
    event.preventDefault();
    $.get("https://lhl-horoscope.herokuapp.com/horoscopes/cancer", function(data) {
    callAPI(data);
    document.getElementById('imageDiv').innerHTML = '<img width="800" height="600" src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_cancer.png">';

  });
});

//Creating the append for Leo
$(".sunsign7").on("click", function(){
    event.preventDefault();
    $.get("https://lhl-horoscope.herokuapp.com/horoscopes/leo", function(data) {
    callAPI(data);
    document.getElementById('imageDiv').innerHTML = '<img width="800" height="600" src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_leo.png">';

  });
});

//Creating the append for Virgo
$(".sunsign8").on("click", function(){
    event.preventDefault();
    $.get("https://lhl-horoscope.herokuapp.com/horoscopes/virgo", function(data) {
    callAPI(data);
    document.getElementById('imageDiv').innerHTML = '<img width="800" height="600" src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_virgo.png">';

  });
});

//Creating the append for Libra
$(".sunsign9").on("click", function(){
    event.preventDefault();
    $.get("https://lhl-horoscope.herokuapp.com/horoscopes/libra", function(data) {
    callAPI(data);
    document.getElementById('imageDiv').innerHTML = '<img width="800" height="600" src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_libra.png">';

  });
});

//Creating the append for Scorpio
$(".sunsign10").on("click", function(){
    event.preventDefault();
    $.get("https://lhl-horoscope.herokuapp.com/horoscopes/scorpio", function(data) {
    callAPI(data);
    document.getElementById('imageDiv').innerHTML = '<img width="800" height="600" src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_scorpio.png">';

  });
});

//Creating the append for Sagittarius
$(".sunsign11").on("click", function(){
    event.preventDefault();
    $.get("https://lhl-horoscope.herokuapp.com/horoscopes/sagittarius", function(data) {
    callAPI(data);
    document.getElementById('imageDiv').innerHTML = '<img width="800" height="600" src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_sagittarius.png">';

  });
});

//Creating the append for Capricorn
$(".sunsign12").on("click", function(){
    event.preventDefault();
    $.get("https://lhl-horoscope.herokuapp.com/horoscopes/capricorn", function(data) {
    callAPI(data);
    document.getElementById('imageDiv').innerHTML = '<img width="800" height="600" src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_capricorn.png">';

  });
});

//Created a function that would hide the container, declare variables and append to the DOM
function callAPI(data){
  $(".Sunsignscontainer").hide();
var horoscope = data.horoscope;
  var date = data.date;
  var sunsign = data.sign;
  $(".Horoscope").append(`<h2 class ="sunsigncss">${sunsign}</h2>`);
  $(".Horoscope").append(`<h3>Date: ${date}</h3>`);
  $(".Horoscope").append(`<h4>Horoscope: ${horoscope}</h4>`);
}
//Creating the back button listener
$(".backbutton").on("click", function(){
  event.preventDefault();
  $(".Horoscope").empty();
  $("#imageDiv").empty();
  $(".Sunsignscontainer").show();
  });

});
