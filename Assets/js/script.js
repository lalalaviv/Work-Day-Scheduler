// Displays today's date in the given format
var currentDay = moment().format("dddd, MMM Do YYYY")
$("#currentDay").text (currentDay);

// starts the day at 9am
var startTime = moment().startOf("day").add(9, "h")

//Adds time to HTML timeblocks
var time9 = startTime.add(0, "h")
$(".9am").text(time9.format("h A")); 

var time10 = startTime.add(1, "h")
$(".10am").text(time10.format("h A")); 

var time11 = startTime.add(1, "h")
$(".11am").text(time11.format("h A")); 

var time12 = startTime.add(1, "h")
$(".12pm").text(time12.format("h A")); 

var time13 = startTime.add(1, "h")
$(".1pm").text(time13.format("h A")); 

var time14 = startTime.add(1, "h")
$(".2pm").text(time14.format("h A")); 

var time15 = startTime.add(1, "h")
$(".3pm").text(time15.format("h A")); 

var time16 = startTime.add(1, "h")
$(".4pm").text(time16.format("h A")); 

var time17 = startTime.add(1, "h")
$(".5pm").text(time17.format("h A")); 



// sets the time in hour blocks, disccarding minutes; 
var currentTime = moment().startOf("hour"); 


// var currentTime = moment().hour()

// Function to highlight past present and future time by comparing current time to each timeslot
// $(function () {
//     if currentTime.isSame($('.hour'))
//     $(".past").switchClass("past", "present", 1000)
//     $("present").switchClass("present", "past", 1000);



$(".saveBtn").on("click", function(event){
event.preventDefault();
    var eventInput = $(".form-control").val();
    var hourList = $(".row").data("hour"); 
    localStorage.setItem(hourList, eventInput);


}
)