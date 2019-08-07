var hotel = {
    name: 'Quay',
    rooms: [{available: '40'},
    { type: 'single' },
    { type: 'twin' },
    { type: 'double' }
],
    booked: 25,

    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};
var visitor = prompt('which property do you want to see?');
function visitor(name, rooms, booked) {
document.write (name + " is " + rooms + " is " + booked + " is.");
}
alert(hotel[visitor]);
var ask = prompt( hotel[visitor] + 'do you want to update  ? yes/no');
var answer = (ask == "yes") ? hotel[visitor] = (prompt('enter the change.' +visitor+'?')): hotel['property'];
console.log(hotel);
S

