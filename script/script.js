var timeBlock = $(".time-block")

var storedData = {
    9:null,
    10:null,
    11:null,
    12:null,
    1:null,
    2:null,
    3:null,
    4:null,
    5:null,
};

// function init() {

// }



function getTime() {
    var hour = moment().format("h")
    console.log(hour);
    timeBlock.each(function( index ) {
        var block = $(this).children().eq(1)[index];
        var currentId = $(this).children().eq(1).attr("id")
        console.log(currentId);
        console.log(block);
        console.log(timeBlock);
        if(currentId===hour) {
            block.addClass("first");
        } else if (currentId < hour) {
            block.addClass("past");

        } else if (currentId > hour) {
            block.addClass("future");
        }
    }
    )}

getTime()

// showData()



function storeData() {
    console.log(storedData);
    localStorage.setItem("hours", JSON.stringify(storedData))
}



// $(document).ready(init())


timeBlock.on("click", ("#save"), function(event) {
    var textItem = $(this).parent().children().eq(1);
    var saveData = textItem.val();
    var hour = textItem.attr("id");
    storedData[hour] = saveData;
    storeData();
})

