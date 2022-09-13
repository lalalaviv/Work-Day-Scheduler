// Displays today's date in the given format
var currentDay = moment().format("dddd, MMM Do YYYY")
$("#currentDay").text (currentDay);

// sets time to 12am then adds 9 hours to start the day at 9am;
var startTime = moment().startOf("day").add(9, "hours")


// sets the current time to the start of the hour; 
// e.g. if time is 9:30 will become 9:00; 
var currentTime = moment().startOf("hour");

// Function to compare hour slots with current time 
function testTime() {
   // sets a time of 9am 
    var time9 = moment().startOf('day').add(9, "hours");
 
    if (currentTime.isAfter(time9)) {
        $(".block9").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".block9").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".block9").addClass("present");
    };
    //sets a time of 10am 
    var time10 = moment().startOf('day').add(10, "hours");

    if (currentTime.isAfter(time10)) {
        $(".block10").addClass("past");
    }
    else if (currentTime.isBefore(time10)) {
        $(".block10").addClass("future");
    }
    else if (currentTime.isSame(time10)) {
        $(".block10").addClass("present");
    };
      //sets a time of 11am 
    time11 = moment().startOf('day').add(11, "hours");
    
    if (currentTime.isAfter(time11)) {
        $(".block11").addClass("past");
    }
    else if (currentTime.isBefore(time11)) {
        $(".block11").addClass("future");
    }
    else if (currentTime.isSame(time11)) {
        $(".block11").addClass("present");
    };
    //sets a time of 12pm 
    time12 = moment().startOf('day').add(12, "hours");
    
    if (currentTime.isAfter(time12)) {
        $(".block12").addClass("past");
    }
    else if (currentTime.isBefore(time12)) {
        $(".block12").addClass("future");
    }
    else if (currentTime.isSame(time12)) {
        $(".block12").addClass("present");
    };
 //sets a time of 1pm
    time13 = moment().startOf('day').add(13, "hours");
 
    if (currentTime.isAfter(time13)) {
        $(".block13").addClass("past");
    }
    else if (currentTime.isBefore(time13)) {
        $(".block13").addClass("future");
    }
    else if (currentTime.isSame(time13)) {
        $(".block13").addClass("present");
    };
  //sets a time of 2pm
    time14 = moment().startOf('day').add(14, "hours");
 
    if (currentTime.isAfter(time14)) {
        $(".block14").addClass("past");
    }
    else if (currentTime.isBefore(time14)) {
        $(".block14").addClass("future");
    }
    else if (currentTime.isSame(time14)) {
        $(".block14").addClass("present");
    };
    //sets a time of 3pm
    time15 = moment().startOf('day').add(15, "hours");
  
    if (currentTime.isAfter(time15)) {
        $(".block15").addClass("past");
    }
    else if (currentTime.isBefore(time15)) {
        $(".block15").addClass("future");
    }
    else if (currentTime.isSame(time15)) {
        $(".block15").addClass("present");
    };
    //sets a time of 4pm
    time16 = moment().startOf('day').add(16, "hours");

    if (currentTime.isAfter(time16)) {
        $(".block16").addClass("past");
    }
    else if (currentTime.isBefore(time16)) {
        $(".block16").addClass("future");
    }
    else if (currentTime.isSame(time16)) {
        $(".block16").addClass("present");
    };
  //sets a time of 5pm
    time17 = moment().startOf('day').add(17, "hours");
    
    if (currentTime.isAfter(time17)) {
        $(".block17").addClass("past");
    }
    else if (currentTime.isBefore(time17)) {
        $(".block17").addClass("future");
    }
    else if (currentTime.isSame(time17)) {
        $(".block17").addClass("present");
    };
}

testTime();



// var time = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// for (var i=0; i < time.length; i++){
//     var dataHour = localStorage.getItem(time[i]);
//     $(".block" + time[i].val(dataHour));
// }


// $(".saveBtn").click(function(){
//     event.preventDefault();
//     var eventInput = $(this).sibling(".form-control").val();
//     console.log("is it working?")
//     var hourList = $(this).parent().data("hour"); 
//     localStorage.setItem(hourList, eventInput);
    


// });