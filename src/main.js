import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
var syllable = require('syllable')


$(document).ready (function() {
  $("#haiku").submit(function(event) {
    event.preventDefault();
    let firstLine = $("#first-line").val();
    let secondLine = $("#second-line").val();
    let thirdLine = $("#third-line").val();
    console.log(firstLine,"\n", secondLine, "\n", thirdLine);
    let firstCount = syllable(firstLine);
    let secondCount = syllable(secondLine);
    let thirdCount = syllable(thirdLine);

    console.log(firstCount,"\n", secondCount, "\n", thirdCount);
  });

 // submit function for player's name
  $("#user-info").submit(function(event){
      event.preventDefault();
     let nameOfPlayer = $("#name-field").val();

  });

  $("")


});
