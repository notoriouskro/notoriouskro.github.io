// Initialize Firebase
var config = {
    apiKey: "AIzaSyA1JhruhVOwPr06d19V2AIs0E-gzXKgdqA",
    authDomain: "portfoliocontact-6650c.firebaseapp.com",
    databaseURL: "https://portfoliocontact-6650c.firebaseio.com",
    projectId: "portfoliocontact-6650c",
    storageBucket: "portfoliocontact-6650c.appspot.com",
    messagingSenderId: "421280888974"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();


// Capture Button Click
$("#contact").on("click", function (event) {
    // Don't refresh the page!
    event.preventDefault();


    // Store user input.

    var name = $('#name').val();
    var email = $('#email').val();
    var message= $('#message').val();
    


    // Initial Values
    database.ref().push({
        name: name,
        email: email,
        message: message,
    });



    $('#name').val('');
    $('#email').val('');
    $('#message').val('');



});



// database.ref().on("child_added", function (snap) {

//     console.log(snap.val())

//     var val = snap.val();
//     var name = val.name;
//     var role = val.role;
//     var mRate = val.mRate;
//     var sDate = (moment(val.sDate, 'YYYY/MM/DD').format('MM/DD/YYYY')) ;
//     var cDate = moment();
//     var monthsDiff = cDate.diff(sDate, 'month');
//     var tBilled = mRate * monthsDiff;
    
    
//     var $row = $('<tr>');
//     $row.append('<td>' + name + '</td>');
//     $row.append('<td>' + role + '</td>');
//     $row.append('<td>' + sDate + '</td>');
//     $row.append('<td>' + monthsDiff + '</td>');
//     $row.append('<td>' + mRate + '</td>');
//     $row.append('<td>' + tBilled + '</td>');
//     $('tbody').append($row);



// });



//   If any errors are experienced, log them to console.
//   function(errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   };