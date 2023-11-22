var dateDiffInDays = function (date1, date2) {
  //   write your code here
	// Parse the input dates and convert them to UTC milliseconds
    const utcDate1 = Date.UTC(
        parseInt(date1.substring(0, 4)), // Year
        parseInt(date1.substring(5, 7)) - 1, // Month (0-based)
        parseInt(date1.substring(8, 10)) // Day
    );

    const utcDate2 = Date.UTC(
        parseInt(date2.substring(0, 4)), // Year
        parseInt(date2.substring(5, 7)) - 1, // Month (0-based)
        parseInt(date2.substring(8, 10)) // Day
    );

    // Calculate the difference in milliseconds
    const timeDifference = utcDate2 - utcDate1;

    // Convert the difference to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
