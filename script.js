//Wait for the page to load before doing anything
$(document).ready(function() {

    writeSchedule();

    //Save task from all text boxes to local storage
    function saveSchedule () {

        var tempScheduleArr = [];

        $(".container .row").each(function () {			
            var thisRow = $(this);
            var rowTaskEl = thisRow.find("textarea:nth-child(2)");
            var rowTaskText = rowTaskEl.val();
            tempScheduleArr.push(rowTaskText);
        });

        localStorage.setItem("schedule", JSON.stringify(tempScheduleArr));   
    };

    function writeSchedule () {        
        //Check local storage to see if it is empty and assign contents of tempScheduleArr accordingly
        var tempScheduleArr = localStorage.getItem("schedule") === null ? [] : JSON.parse(localStorage.getItem("schedule"));
        var i = 0;
        $(".container .row").each(function () {
            var thisRow = $(this);
            var rowTaskEl = thisRow.find("textarea:nth-child(2)");
            rowTaskEl.text(tempScheduleArr[i]);
            i++;
        });
    }

    function timeAudit () {
        //Compares the current time against the time blocks and applies relavent styling class
    }

    // Deletes all entries in local storage and refreshes the page
    function clearSchedule () {
        var tempScheduleArr = [];
        localStorage.setItem("schedule", JSON.stringify(tempScheduleArr));   
        window.location.reload();
    }

    //Event listener for the save buttons
    $(".saveBtn").on("click", saveSchedule);
    
    //Event listener for clear schedule button
    $(".clearSchedule").on("click", clearSchedule);

});

// Important tools to get this done:
//     Local Storage
//     Dynamic assigning of classes depending on some conditions (text contents, time value, etc)
//     JQuery to assist in DOM targeting and manipulation
//          Check activities 05/05, 06, 11, 19 for guides
//     Using a library to help work with times and dates (moment)
//          Do practice runs 04/00/20+21 drills

// Potential challenges and general observations:
//      Input order is not predicatable
//      An array will make setting up the time blocks easy (iterate and assign)
//      We know the time range will always be 9am-5pm

// Pseudocode and Planning:
//     Step 1 Setup data storage from local storage
//         What: Initialize data storage object and check if local storage has contents
//         How: Access local storage (JSON parse) and re-build storage object if needed
//         Why: Ensures any saved data is added to the data storage object prior to building time blocks
    
//     Step 2 Create time blocks with contents and styling
//         What: Load time-text data into time block list and add classes appropriately
//         How: Iterate through data storage object and use conditionals to add classes selectively
//         Why: Populate the screen with time blocks that are filled and styled as needed
    
//     Step 3 
//         What: Create event listeners hooked into save buttons
//         How: JQuery hooked into save-button class
//         Why: Listens for user to press click on save buttons

//     Step 4
//       What: Save text data in relavent position in data structure (not local storage yet)
//       How: Use Jquery to target event source and use to update object
//       Why: Updating the local storage is first step to updating local storage

//     Step 5
//       What: Update local storage from data structure object 
//       How: localStorage.push with JSON stringify 
//       Why: Ensure local storage is updated with user input

// Data structure ideas
//  array of objects?
        // var thing = [
        //     {
        //         9 am: "Some string"
        //     },
        //     {
        //         10 am: "Another string"
        //     } etc
        // ]

        // Can iterate through the array to setup initial time-text values
        // var thing2 = {
        //     09: "Some string",
        //     10: "Another String",
        //     11: "Task at 11",
        //     12: "Task at noon",
        //     13: "Task at 1 pm"            
        // }

        // An array where index + 9 gives the correct hour, or time - 9 gives index
        // var array = [
        //     "some string",
        //     "",
        //     "a third string",
        //     ""
        // ]

        // Ternary operator - logical test ? execute 1 if true: execute 2 if false;

        // Jquery has a .each method that allows a function to be done to a collection of stuff