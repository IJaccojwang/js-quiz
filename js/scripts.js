//Business Logic
$(document).ready(function() {
  $("form.test").submit(function(event) {
    var numbers = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    var score = 0;
    numbers.forEach(function(number) {
      var answer = parseInt($("input:radio[name=question" + number + "]:checked").val());
      score =  score + answer;
    });
      alert(score);



    event.preventDefault();
  });
});

//User Interface Logic
$(document).ready(function() {
  $()
});
