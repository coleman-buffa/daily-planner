// Important tools to get this done:
//     Local Storage
//     Dynamic assigning of classes depending on some conditions (text contents, time value, etc)
//     JQuery to assist in DOM targeting and manipulation
//          Check activities 05/05, 06, 11, 19 for guides
//     Using a library to help work with times and dates (moment)
//          Do practice runs 04/00/20+21 drills

// Potential challenges and general observations:
//      I have no idea which time-text will be interacted with at a given time
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

        // // Can iterate through the array to setup initial time-text values
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
        //     "another string",
        //     "a third string",
        //     "last one for example"
        // ]



