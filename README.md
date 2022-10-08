# Work-Day-Scheduler

## Description
A simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

The [Moment.js](https://momentjs.com/) library is featured here, dynamically updating depending on the date. It is also being used to check the hour of the day and updates the color of the time block accordingly. (Past times in the current day will show up as grey, Present time as salmon, and future times as green). When you enter text into the time block text area, you can click on the save button located on the right for that row to save your notes on the page. Likewise, if you would like to delete your note, you can click on the wastebaskit icon on the left of the row you would like to delete. A warning alert will be issued, telling you to be sure you have saved all other rows before attempting to delete a row in order to prevent unintended lost notes.

The app is updated with fonts from Google Fonts to provide a custom look to the Work Day Scheduler. A color scheme that was also added to provide a more polished look.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## LICENSE
See the repository for license information.

## Deployed Application