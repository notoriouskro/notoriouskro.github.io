// Initialize Firebase
var config = {
    apiKey: "AIzaSyDtKTOeqShjHe5vsOkevu7jslcB6lEIRdY",
    authDomain: "bootcamp-fire.firebaseapp.com",
    databaseURL: "https://bootcamp-fire.firebaseio.com",
    projectId: "bootcamp-fire",
    storageBucket: "bootcamp-fire.appspot.com",
    messagingSenderId: "745415818494"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();


// Capture Button Click
$("#add-employee").on("click", function (event) {
    // Don't refresh the page!
    event.preventDefault();


    // Store user input.

    var name = $('#name-input').val();
    var role = $('#role-input').val();
    var sDate = $('#date-input').val();
    var mRate = $('#rate-input').val();
    // var tBilled = ;





    // Initial Values
    database.ref().push({
        name: name,
        role: role,
        sDate: sDate,
        mRate: mRate,
    });



    $('#name-input').val('');
    $('#role-input').val('');
    $('#date-input').val('');
    $('#rate-input').val('');



});



database.ref().on("child_added", function (snap) {

    console.log(snap.val())

    var val = snap.val();
    var name = val.name;
    var role = val.role;
    var mRate = val.mRate;
    var sDate = (moment(val.sDate, 'YYYY/MM/DD').format('MM/DD/YYYY')) ;
    var cDate = moment();
    var monthsDiff = cDate.diff(sDate, 'month');
    var tBilled = mRate * monthsDiff;
    
    
    var $row = $('<tr>');
    $row.append('<td>' + name + '</td>');
    $row.append('<td>' + role + '</td>');
    $row.append('<td>' + sDate + '</td>');
    $row.append('<td>' + monthsDiff + '</td>');
    $row.append('<td>' + mRate + '</td>');
    $row.append('<td>' + tBilled + '</td>');
    $('tbody').append($row);



});



//   If any errors are experienced, log them to console.
//   function(errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   };