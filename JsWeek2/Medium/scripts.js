var months = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ];


function monthNumToName(monthnum) {
    return months[monthnum - 1] || '';
 }
 function monthNameToNum(monthname) {
   var month = months.indexOf(monthname);
     return month ? month + 1 : 0;
 }

 if (monthNumToName(1) == 'January') alert('1== January!')
 if (monthNameToNum('June') == 6) alert('June == 6!')
    