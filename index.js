/*Reverse the below array of arrays and then
populate the select element options dynamically: */

$(document).ready(function() {

    var planets = [
   ['Pluto', 0.06],
   ['Neptune', 1.148],
   ['Uranus', 0.917],
   ['Saturn', 1.139],
   ['Jupiter', 2.640],
   ['Mars', 0.3895],
   ['Moon', 0.1655],
   ['Earth', 1],
   ['Venus', 0.9032],
   ['Mercury', 0.377],
   ['Sun', 27.9]
  ];


  planets.reverse();
  $.each(planets, function(i){
  //for (var i=0;i<planets.length;i++){
  $("<option>").val(planets[i][1]).html(planets[i][0]).appendTo("#selectMenu");
  });


  $("#calculator").click(function(){
      var userWeight = $("#weight").val();
      var planetText = $("#selectMenu option:selected").text();
      var planetValue = $("#selectMenu option:selected").val();
      var weightOnPlanet = userWeight * planetValue;
      var roundTotalWeight = Math.round(weightOnPlanet);
      $("#results").text("If you were on " + planetText +" you would weigh " + roundTotalWeight+ "lbs.");
});


 });

/* Vanilla JavaScript

var sel = document.getElementById('planets'); //go to my select menu

for(var i = 0; i < planets.length; i++) {     // for every line of the array
    var opt = document.createElement('option');   // create an option in the HTML and store it in opt
    opt.value = planets[i].gravity;           // attach the right gravity value to each option
    opt.innerHTML = planets[i].planet;        // attach the right planet to the HTML
    sel.appendChild(opt);                     // Append the select to an element in the dom
}

function calculator()
{  
     var select = document.getElementById('planets');
     var options = select.options;
     var selectedOption = options[sel.selectedIndex];
     var planetName = selectedOption.innerHTML;
     var planetWeight = select.value;
     var userWeight = document.getElementById("weight").value;
     var totalWeight = userWeight * planetWeight;
     var roundTotalWeight = Math.round(totalWeight);
     var output = document.getElementById('results');


    // Print calculated weight results to the front-end by using if or else statement depending on the planet through .innerHTML
      if (planetName === 'Sun' || planetName === 'Moon') {
        document.getElementById("results").innerHTML = "If you were on the " + planetName + " you would weigh " + roundTotalWeight + " lbs.";
    } else {
        document.getElementById("results").innerHTML = "If you were on " + planetName + " you would weigh " + roundTotalWeight + " lbs.";
    }
} */
