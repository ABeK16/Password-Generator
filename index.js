
button.addEventListener('click', function(event) {
    // Show a message with detailed information.
    alert('Event type: ' + event.type + '; Doorbell (target) pressed: ' + event.target.id);
    });

// First, find the doorbell (button) on your webpage.
var button = document.getElementById('doorbellButton');
// Then, tell your listening device (addEventListener) to listen for a doorbell press (click event).
button.addEventListener('click', function(event) {
// This is what you do when the doorbell is pressed.
// Show a message saying "The doorbell was pressed!"
alert('The doorbell was pressed!');
});