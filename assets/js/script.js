// declare El and ID variables
var currentDay = $("#currentDay");
var hourEl = $(".hour");
var timeBlockEl = $(".time-block");
var timeBlock9Am = $("#9am");
var timeBlock10Am = $("#10am");

// create moments
currentDay.text(moment().format("dddd, MMM Do"));

// check current time with hoisted functions
check9am();
check10am();

// create functions
// need to debug isBetween... isBefore is working
function check9am() {
    var now = moment();
    var hourToCheck = (now.day() !== 0) ? 09 : 00;
    var dateToCheck = now.hour(hourToCheck).minute(00);
    if (moment().isBetween(dateToCheck, moment(dateToCheck).add().hours(2))) {
        timeBlock9Am.addClass("present")
    }
    else if (moment().isAfter(dateToCheck)) {
        timeBlock9Am.addClass("past");
    }
    else {
        timeBlock9Am.addClass("future");
    }
}

function check10am() {
    var now = moment();
    var hourToCheck = (now.day() !== 0) ? 10 : 00;
    var dateToCheck = now.hour(hourToCheck).minute(00);

    if (moment().isAfter(dateToCheck)) {
        timeBlock10Am.addClass("past");
    }
    else {
        timeBlock10Am.addClass("future");
    }
}

// create local storage

// add event listeners

// console logs for debug
