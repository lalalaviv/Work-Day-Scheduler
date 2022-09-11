var currentDay = moment().format("dddd, MMM Do YYYY")
$("#currentDay").text (currentDay);


var currentTime = moment().hour()


$(function () {
    if currentTime.isSame($('.hour'))
    $(".past").switchClass("past", "present", 1000)
    $("present").switchClass("present", "past", 1000);


})
/**
  * $.dateTimeHighlightNow()
  * Author: Sam Deering
  * Adds/removes a selected class on elements based on the current date and time.
  * usage: $('.program p').dateTimeHighlightNow();
  */
 jQuery.fn.dateTimeHighlightNow = function()
 {
     return this.each(function()
     {
         var timestamp = Math.round(new Date().getTime() / 1000)
             elem = $(this),
             start = elem.attr('start'),
             finish= elem.attr('finish');
 
             log('datetimestamp = '+timestamp);
 
         if (start  timestamp)
         {
             elem.addClass('selected');
             log(elem);
         }
         else
         {
             elem.removeClass('selected');
         }
 
     });
 };

 $('.program p').dateTimeHighlight();