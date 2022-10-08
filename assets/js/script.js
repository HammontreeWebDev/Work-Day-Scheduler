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
var saveBtnEl = $(".saveBtn");
var clearBtnEl = $(".clearBtn");

// Global var to be used within moment function
var now = moment();
var alsoNow = moment();

// create moments
currentDayEl.text(moment().format("dddd, MMM Do"));

// check current time with hoisted functions in a loop so that page is always checking the time.

check9am();
check10am();
check11am();
check12pm();
check1pm();
check2pm();
check3pm();
check4pm();
check5pm();

// create functions to check each time slot...
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


// function to save user input to local storage 

function save(event) {
    // set the user input to the value of the text field closest to the button that was clicked by navigating to the button's parent element and finding the element with class time-block.

    let userInput = $(event.target).parent().find(timeBlockEl).val();

    // set the time slot and pulls the id

    let hour = $(event.target).parent().find(timeBlockEl).attr("id");

    // commit to local storage
    localStorage.setItem(hour, userInput);
};

function createArray() {
    var hoursId = [];
    $(timeBlockEl).each(function () {
        var id = $(this).attr('id');
        hoursId.push(id);
    });

    // loops through local storage and ID's
    for (let i = 0; i < localStorage.length; i++) {
        for (x = 0; x < hoursId.length; x++) {
            if (localStorage.key(i) !== null && localStorage.key(i) !== undefined) {
                if (localStorage.key(i) === hoursId[x]) {
                    let storedText = localStorage.getItem(localStorage.key(i));
                    $('#' + localStorage.key(i)).html(storedText);
                }
            }
        }
    }
}

createArray();

// name El variables to be used in clear functions
var clear9 = $("#clear-9")
var clear10 = $("#clear-10")
var clear11 = $("#clear-11")
var clear12 = $("#clear-12")
var clear13 = $("#clear-13")
var clear14 = $("#clear-14")
var clear15 = $("#clear-15")
var clear16 = $("#clear-16")
var clear17 = $("#clear-17")

// functions to be called for clear buttons in click handler
function delete9(event) {
    let warning = confirm("Warning! This also refreshes the page. Please make sure you have saved all your other events before attempting to clear a time block. Thank you.")

    if (warning) {

        let userInput = $(event.target).parent().find(timeBlockEl).val();
        // remove from local storage
        localStorage.removeItem("9am", userInput);
        // remove text from page
        location.reload();
    }
}

function delete10(event) {
    let warning = confirm("Warning! This also refreshes the page. Please make sure you have saved all your other events before attempting to clear a time block. Thank you.")

    if (warning) {

        let userInput = $(event.target).parent().find(timeBlockEl).val();
        // remove from local storage
        localStorage.removeItem("10am", userInput);
        // remove text from page
        location.reload();
    }
}

function delete11(event) {
    let warning = confirm("Warning! This also refreshes the page. Please make sure you have saved all your other events before attempting to clear a time block. Thank you.")

    if (warning) {

        let userInput = $(event.target).parent().find(timeBlockEl).val();
        // remove from local storage
        localStorage.removeItem("11am", userInput);
        // remove text from page
        location.reload();
    }
}

function delete12(event) {
    let warning = confirm("Warning! This also refreshes the page. Please make sure you have saved all your other events before attempting to clear a time block. Thank you.")

    if (warning) {

        let userInput = $(event.target).parent().find(timeBlockEl).val();
        // remove from local storage
        localStorage.removeItem("12pm", userInput);
        // remove text from page
        location.reload();
    }
}

function delete13(event) {
    let warning = confirm("Warning! This also refreshes the page. Please make sure you have saved all your other events before attempting to clear a time block. Thank you.")

    if (warning) {

        let userInput = $(event.target).parent().find(timeBlockEl).val();
        // remove from local storage
        localStorage.removeItem("1pm", userInput);
        // remove text from page
        location.reload();
    }
}

function delete14(event) {
    let warning = confirm("Warning! This also refreshes the page. Please make sure you have saved all your other events before attempting to clear a time block. Thank you.")

    if (warning) {

        let userInput = $(event.target).parent().find(timeBlockEl).val();
        // remove from local storage
        localStorage.removeItem("2pm", userInput);
        // remove text from page
        location.reload();
    }
}

function delete15(event) {
    let warning = confirm("Warning! This also refreshes the page. Please make sure you have saved all your other events before attempting to clear a time block. Thank you.")

    if (warning) {

        let userInput = $(event.target).parent().find(timeBlockEl).val();
        // remove from local storage
        localStorage.removeItem("3pm", userInput);
        // remove text from page
        location.reload();
    }
}

function delete16(event) {
    let warning = confirm("Warning! This also refreshes the page. Please make sure you have saved all your other events before attempting to clear a time block. Thank you.")

    if (warning) {

        let userInput = $(event.target).parent().find(timeBlockEl).val();
        // remove from local storage
        localStorage.removeItem("4pm", userInput);
        // remove text from page
        location.reload();
    }
}

function delete17(event) {
    let warning = confirm("Warning! This also refreshes the page. Please make sure you have saved all your other events before attempting to clear a time block. Thank you.")

    if (warning) {

        let userInput = $(event.target).parent().find(timeBlockEl).val();
        // remove from local storage
        localStorage.removeItem("5pm", userInput);
        // remove text from page
        location.reload();
    }
}

// add the event listeners. wooo hooo! :)
saveBtnEl.click(save);
clear9.click(delete9);
clear10.click(delete10);
clear11.click(delete11);
clear12.click(delete12);
clear13.click(delete13);
clear14.click(delete14);
clear15.click(delete15);
clear16.click(delete16);
clear17.click(delete17);


console.log(timeBlock9Am);