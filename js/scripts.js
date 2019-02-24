//Business Logic
//Variable declaration
var numbers = ["1","2","3","4","5","6","7","8","9","10","11","12"];
var answered = 0;
var blank = 0;
var score = 0;
var answer = 0;
//Checks to see how many questions were attempted and how many left blank
var checkAll = function() {
    for( i = 0; i < numbers.length; i++) {
      if($("input:radio[name=question" + numbers[i] + "]").is(":checked")) {
        answered = answered + 1;
      }
      else {
        blank = blank + 1;
      }
    }
};
//Adds score when radio selected, else doesn't
var add = function() {
  if(answer == 0 || answer == 1 ){
    score = score + answer;
  }
  else{
    score = score + 0;
  }
};




//User Interface Logic
$(document).ready(function() {
//(Next button) - display each next question
function loop() {
  var questions = ["first","second","third","fourth","fifth","sixth","seventh","eigth","ninth","tenth","eleventh","twelfth"];
    var i = 0;
  $('#start').click(function () {
    $("." + questions[i]).show();
    $("." + questions[i-1]).hide();
    i = i + 1 ;
    });
}
loop();
//(Submit)
  $("form.test").submit(function(event) {
    event.preventDefault();
//Collects input from user
    numbers.forEach(function(number){
    answer = parseInt($("input:radio[name=question" + number + "]:checked").val());
    add();
    alert("Hi");
    });
//Runs checkAll function
  checkAll();
//Runs rating function
  rating();
//Returns all final calculations: attempted questions, blanks and score
  results();
  });
});

// var results = function() {
//   if((score/12)  >= (8/10)) {
//     var verdict = "You scored " + score + " out of 12. You left " + blank + " questions blank". "This is"
//     return verdict;
//   }
//   else if((score/12)  < (5/10)) {
//     var verdict = "You scored " + score + " out of 12. You left " + blank + " questions blank". "This is " + percent + ". You " + verdict;
//     return verdict;
//   }
//   else {
//     var verdict = "You scored " + score + " out of 12. You left " + blank + " questions blank". "This is " + percent + ". You " + verdict;
//     return verdict;
//   }
//   $(".output").text(result)
// }
