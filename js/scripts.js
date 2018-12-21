function test() {
    var qOne = document.test.qOne.value;
    var qTwo = document.test.qwo.value;
    var qThree = document.test.qThree.value;
    var qFour = document.test.qFour.value;
    var qFive = document.test.qFive.value;
    var qSix = document.test.qSix.value;
    var qSeven = document.test.qSeven.value;
    var qEight = document.test.qEight.value;
    var qNine = document.test.qNine.value;
    var qTen = document.test.qTen.value;
    var count = 0;
  
    if (qOne == "2") {
      count += 1;
    }
    if (qTwo == "2") {
      count += 1;
    }
    if (qThree == "3") {
      count += 1;
    }
    if (qFour == "3") {
      count += 1;
    }
    if (qFive == "4") {
      count += 1;
    }
    if (qSix == "2") {
      count += 1;
    }
    if (qSeven == "2") {
      count += 1;
    }
    if (qEight == "3") {
      count += 1;
    }
    if (qNine == "2") {
      count += 1;
    }
    if (qTen == "4") {
      count += 1;
    }
    document.getElementById("after_submit").style.visibility = "visible";
  
    document.getElementById("number_count").innerHTML =
      "Your score is: " + count + "/10";
  
    $(document).ready(function() {
      $("#button").hide();
      $("#quiz").hide();
      $("#number_count").show();
      event.preventDefault();
    });
  }
  
  