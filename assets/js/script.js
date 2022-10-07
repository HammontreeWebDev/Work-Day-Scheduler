// declare El and ID variables
var currentDayEl = $("#currentDay");
var hourEl = $(".hour");
var timeBlockEl = $(".time-block");
var timeBlock9Am = $("#9am");
var timeBlock10Am = $("#10am");
var timeBlock11Am = $("#11am");
var timeBlock12Pm = $("#12pm");
var timeBlock1Pm = $("#1pm");
var timeBlock2Pm = $("#2pm");
var timeBlock3Pm = $("#3pm");
var timeBlock4Pm = $("#4pm");
var timeBlock5Pm = $("#5pm");

// Global var to be used within moment function
var now = moment();
var alsoNow = moment();

// create moments
currentDayEl.text(moment().format("dddd, MMM Do"));

// check current time with hoisted functions
check9am();
check10am();
check11am();
check12pm();
check1pm();
check2pm();
check3pm();
check4pm();
check5pm();

// create functions
function check9am() {
    var hourToCheck = (now.day() !== 0) ? 09 : 00;
    var dateToCheck = now.hour(hourToCheck).minute(00);
    var secondHourToCheck = (alsoNow.day() !== 0) ? 10 : 00;
    var secondDateToCheck = alsoNow.hour(secondHourToCheck).minute(00);
    if (moment().isBetween(dateToCheck, secondDateToCheck)) {
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
    var hourToCheck = (now.day() !== 0) ? 10 : 00;
    var dateToCheck = now.hour(hourToCheck).minute(00);
    var secondHourToCheck = (alsoNow.day() !== 0) ? 11 : 00;
    var secondDateToCheck = alsoNow.hour(secondHourToCheck).minute(00);
    if (moment().isBetween(dateToCheck, secondDateToCheck)) {
        timeBlock10Am.addClass("present")
    }
    else if (moment().isAfter(dateToCheck)) {
        timeBlock10Am.addClass("past");
    }
    else {
        timeBlock10Am.addClass("future");
    }
}

function check11am() {
    var hourToCheck = (now.day() !== 0) ? 11 : 00;
    var dateToCheck = now.hour(hourToCheck).minute(00);
    var secondHourToCheck = (alsoNow.day() !== 0) ? 12 : 00;
    var secondDateToCheck = alsoNow.hour(secondHourToCheck).minute(00);
    if (moment().isBetween(dateToCheck, secondDateToCheck)) {
        timeBlock11Am.addClass("present")
    }
    else if (moment().isAfter(dateToCheck)) {
        timeBlock11Am.addClass("past");
    }
    else {
        timeBlock11Am.addClass("future");
    }
}

function check12pm() {
    var hourToCheck = (now.day() !== 0) ? 12 : 00;
    var dateToCheck = now.hour(hourToCheck).minute(00);
    var secondHourToCheck = (alsoNow.day() !== 0) ? 13 : 00;
    var secondDateToCheck = alsoNow.hour(secondHourToCheck).minute(00);
    if (moment().isBetween(dateToCheck, secondDateToCheck)) {
        timeBlock12Pm.addClass("present")
    }
    else if (moment().isAfter(dateToCheck)) {
        timeBlock12Pm.addClass("past");
    }
    else {
        timeBlock12Pm.addClass("future");
    }
}

function check1pm() {
    var hourToCheck = (now.day() !== 0) ? 13 : 00;
    var dateToCheck = now.hour(hourToCheck).minute(00);
    var secondHourToCheck = (alsoNow.day() !== 0) ? 14 : 00;
    var secondDateToCheck = alsoNow.hour(secondHourToCheck).minute(00);
    if (moment().isBetween(dateToCheck, secondDateToCheck)) {
        timeBlock1Pm.addClass("present")
    }
    else if (moment().isAfter(dateToCheck)) {
        timeBlock1Pm.addClass("past");
    }
    else {
        timeBlock1Pm.addClass("future");
    }
}

function check2pm() {
    var hourToCheck = (now.day() !== 0) ? 14 : 00;
    var dateToCheck = now.hour(hourToCheck).minute(00);
    var secondHourToCheck = (alsoNow.day() !== 0) ? 15 : 00;
    var secondDateToCheck = alsoNow.hour(secondHourToCheck).minute(00);
    if (moment().isBetween(dateToCheck, secondDateToCheck)) {
        timeBlock2Pm.addClass("present")
    }
    else if (moment().isAfter(dateToCheck)) {
        timeBlock2Pm.addClass("past");
    }
    else {
        timeBlock2Pm.addClass("future");
    }
}

function check3pm() {
    var hourToCheck = (now.day() !== 0) ? 15 : 00;
    var dateToCheck = now.hour(hourToCheck).minute(00);
    var secondHourToCheck = (alsoNow.day() !== 0) ? 16 : 00;
    var secondDateToCheck = alsoNow.hour(secondHourToCheck).minute(00);
    if (moment().isBetween(dateToCheck, secondDateToCheck)) {
        timeBlock3Pm.addClass("present")
    }
    else if (moment().isAfter(dateToCheck)) {
        timeBlock3Pm.addClass("past");
    }
    else {
        timeBlock3Pm.addClass("future");
    }
}

function check4pm() {
    var hourToCheck = (now.day() !== 0) ? 16 : 00;
    var dateToCheck = now.hour(hourToCheck).minute(00);
    var secondHourToCheck = (alsoNow.day() !== 0) ? 17 : 00;
    var secondDateToCheck = alsoNow.hour(secondHourToCheck).minute(00);
    if (moment().isBetween(dateToCheck, secondDateToCheck)) {
        timeBlock4Pm.addClass("present")
    }
    else if (moment().isAfter(dateToCheck)) {
        timeBlock4Pm.addClass("past");
    }
    else {
        timeBlock4Pm.addClass("future");
    }
}

function check5pm() {
    var hourToCheck = (now.day() !== 0) ? 17 : 00;
    var dateToCheck = now.hour(hourToCheck).minute(00);
    var secondHourToCheck = (alsoNow.day() !== 0) ? 18 : 00;
    var secondDateToCheck = alsoNow.hour(secondHourToCheck).minute(00);
    if (moment().isBetween(dateToCheck, secondDateToCheck)) {
        timeBlock5Pm.addClass("present")
    }
    else if (moment().isAfter(dateToCheck)) {
        timeBlock5Pm.addClass("past");
    }
    else {
        timeBlock5Pm.addClass("future");
    }
}
// create local storage

// add event listeners

// console logs for debug
