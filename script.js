var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var hour = moment().format("H A");

var workDayTimes = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
];

workDayTimes.forEach(function displayDaySchedule(time, description, save) {
        var rowEl = $('<tr>').addClass('row');
    
        var workDayTimeEl = $('<td>').addClass('hour').text(time);
    
        var rowScheduleEl = $('<td>').addClass('description').text(description);
    
        var saveButtonEl = $('<td>').addClass('saveBtn').text(save);
    
        rowEl.append(
            workDayTimeEl,
            rowScheduleEl,
            saveButtonEl
        );
    
        $(".container").append(rowEl);

        if (hour = workDayTimes) {
            rowScheduleEl.addClass('present')

        } else if (hour < workDayTimes) {
                rowScheduleEl.addClass('future')
            } else {
                rowScheduleEl.addClass('past')
            };

        
        
    }
)


