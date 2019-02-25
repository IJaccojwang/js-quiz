//Business Logic
//Variable declaration
var numbers = ["1","2","3","4","5","6","7","8","9","10","11","12"];
var answered = 0;
var blank = 0;
var score = 0;
var answer = 0;
var verdict = "";
var advice = "";
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

var result = function() {
  if((score/12)  >= (8/10)) {
    verdict = "This is excellent."
    advice = "No need to retake the test."
  }
  else if((score/12) >= (5/10) && (score/12)  < (8/10)) {
    verdict = "This is fairly good"
    advice = "You may retake the test to imptove your score."
  }
  else {
    verdict = "This is a poor score."
    advice = "It is advisable that you retake the test."
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
  $("#form-container").submit(function(event) {
    event.preventDefault();
//Collects input from user
    numbers.forEach(function(number){
    answer = parseInt($("input:radio[name=question" + number + "]:checked").val());
    add();
    });
  checkAll();
  //Returns all final calculations: attempted questions, blanks and score
  result();
  alert("You scored " + score + " out of 12" + verdict + advice);
  //   $("#output").text(verdict);
  });
});
