var timeBlock = $(".time-block");

//Get current time and color blocks accordingly
function getTime() {
  var hour = moment().format("HH");
  timeBlock.each(function (index) {
    var block = $(this).children().eq(1);
    var currentId = $(this).children().eq(1).attr("id");
    if (currentId === hour) {
      block.addClass("present");
    } else if (currentId < hour) {
      block.addClass("past");
    } else if (currentId > hour) {
      block.addClass("future");
    }
  });
}

//SHow Locally stored data for each block if there is any
function showData() {
  timeBlock.each(function (index) {
    var block = $(this).children().eq(1);
    var currentId = $(this).children().eq(1).attr("id");
    var blocktask = localStorage.getItem(currentId);
    console.log(blocktask);
    if (blocktask !== null) {
      var attachTask = JSON.parse(blocktask);
      block.text(attachTask);
    }
  });
}

//Save data on button click
timeBlock.on("click", "#save", function (event) {
  var textItem = $(this).parent().children().eq(1);
  var saveData = textItem.val();
  var hour = textItem.attr("id");
  localStorage.setItem(hour, JSON.stringify(saveData));
});

$(document).ready(showData(), getTime());
