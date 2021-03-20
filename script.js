//current date and time below
var today = moment();
$("#1a").text(today.format("MMM Do, YYYY, h:mm:ss a"));

colorBlocks();
function colorBlocks() {
    var currentTime = moment().hours();
    

    $(".time").each(function () {
        var timeCompare = parseInt($(this).attr("id"));
        if (currentTime > timeCompare) {
            $(this).addClass("past");
        } else if (currentTime === timeCompare) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}


 // use parent and find method to select descendents for onclick selection
 var textArea = $(this).parent().parent().find("textarea").val();
 var time = $(this).parent().parent().attr("id");
 function rendTask() {
    // call and render items on page using id's and class from local storage 
    $("#9 .text").val(localStorage.getItem("9"));
    $("#10 .text").val(localStorage.getItem("10"));
    $("#11 .text").val(localStorage.getItem("11"));
    $("#12 .text").val(localStorage.getItem("12"));
    $("#13 .text").val(localStorage.getItem("13"));
    $("#14 .text").val(localStorage.getItem("15"));
    $("#15 .text").val(localStorage.getItem("15"));
    $("#16 .text").val(localStorage.getItem("16"));
    $("#17 .text").val(localStorage.getItem("17"));

}
rendTask();


 // adding data when save button is clicked
 $(".save").on("click", function (event) {
    event.preventDefault();

    
    var textArea = $(this).parent().parent().find("textarea").val();
    var time = $(this).parent().parent().attr("id");

    //saving to locasl storage
    localStorage.setItem(time, textArea);

 
});



