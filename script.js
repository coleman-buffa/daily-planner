// Wait for the page to load before doing anything
$(document).ready(function() {

    // Initializing the page by loading local storage (if applicable) , set the date, and 
    // apply color coding
    writeSchedule();
    setDate();
    timeAudit();

    // Save task from all text boxes to local storage
    function saveSchedule () {
        var tempScheduleArr = [];
        $(".container .row").each(function () {			
            var thisRow = $(this);
            var rowTaskEl = thisRow.find("textarea:nth-child(2)");
            var rowTaskText = rowTaskEl.val();
            tempScheduleArr.push(rowTaskText);
        });
        localStorage.setItem("schedule", JSON.stringify(tempScheduleArr));
        timeAudit();   
    };

    // Load task items from local storage (if it exists)
    function writeSchedule () {        
        // Check local storage to see if it is empty and assign contents to tempScheduleArr accordingly
        var tempScheduleArr = localStorage.getItem("schedule") === null ? [] : JSON.parse(localStorage.getItem("schedule"));
        var i = 0;
        $(".container .row").each(function () {
            var thisRow = $(this);
            var rowTaskEl = thisRow.find("textarea:nth-child(2)");
            rowTaskEl.text(tempScheduleArr[i]);
            i++;
        });
        timeAudit();
    }

    // Sets color coding of time blocks
    function timeAudit () {
        // Capture current hour in a comparable format used below
        var currentHour = parseInt(moment().format("HH"));

        $(".container .row").each(function () {
            var rowTime = $(this).data("time");
            var rowTaskEl = $(this).find("textarea:nth-child(2)");
            if (rowTime < currentHour) {
                rowTaskEl.addClass("past");
            } else if (rowTime == currentHour) {
                rowTaskEl.addClass("present");                
            } else
                rowTaskEl.addClass("future");
        });
    }

    // Deletes all entries in local storage and refreshes the page
    function clearSchedule () {
        var tempScheduleArr = [];
        localStorage.setItem("schedule", JSON.stringify(tempScheduleArr));   
        window.location.reload();
        timeAudit();    
    }

    // Set date text located in page header
    function setDate () {
       var currentDate = moment().format("dddd, MMMM Do");
       $("#currentDay").text(currentDate);
    }

    // Event listener for the save buttons
    $(".saveBtn").on("click", saveSchedule);
    
    // Event listener for clear schedule button
    $(".clearSchedule").on("click", clearSchedule);

});