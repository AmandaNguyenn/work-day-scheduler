$(document).ready(function() {

    //todays Date
    var currentDate = moment().format('dddd, MMM Do YYYY');
    $('#currentDay').text(currentDate);

    //update the page with text from storage
    var history = JSON.parse(localStorage.getItem("history")) || [];
    for (var i = 0; i < history.length; i++) {
        console.log("*****",$(`[time="${history[i].id}"]`));
        $(`[time="${history[i].id}"]`).find(".text-input").val(history[i].text);
    };


    //set the color
    var currentHour = moment().hour();
    //get the array of all timeblocks
    var arrayTimeBlocks = $(".timeBlock");
    //loop through the array and assign class names
    for (var i = 0; i < arrayTimeBlocks.length; i++) {
        //get time attr
        var blockTime = $(arrayTimeBlocks[i]).attr("time");
        if (blockTime < currentHour) {
            $(arrayTimeBlocks[i]).addClass("past");
        } else if (blockTime == currentHour) {
            $(arrayTimeBlocks[i]).addClass("present");
        } else if (blockTime > currentHour) {
            $(arrayTimeBlocks[i]).addClass("future");
        }
    }

    //add event listener
    $('.saveBtn').on('click', function(event) {
        //save text in the text area

        //get the text
        var textEl = $(event.target).closest(".timeBlock").find(".text-input");
        var text = $(textEl).val();

        var blockId = $(event.target).closest(".timeBlock").attr("time");

        //store in storage

        //check the local storage
        var history = JSON.parse(localStorage.getItem("history")) || [];

        //create entry
        var historyEntry = {
            id: blockId,
            text: text
        }

        history.push(historyEntry);

        //set the localstorage with updated history
        localStorage.setItem("history",JSON.stringify(history));

    });


    //localStorage.setItem(text, time);
    
    function timeKeeper() {
        var currentTime = moment().hour();
        
    }

});