//Draw a box, allow addition of new players.
console.log("playerBoard.js...");

var allPlayers = [];
var testName = ["x0", "x2", "x3", "x4"];

var createNewPlayer = function(name){
  var newPlayer = {
    name: name,
    tokens: [],
    tokenCount : 0,
    bid: ""
  }
  allPlayers.push(newPlayer);
}

// var playerBoard = d3.selectAll('.bigboard')
//   .data([0]).enter().append('div')
//   .attr('class', 'playerBoard')
//   .attr( 'width', 170 )
//   .attr( 'height', settings.height + 6 );

// startBoard
//   .attr('width', 170*2);

/**
 * function(param1, param2){
 * param1 = element, or d
 * param2 = index, or i 
 * }
 */
var stuff = startBoard.data(testName)
  .enter()
  .append('div')
  .attr('id', function(d, i){return "player-"+i;})
  .text(function(d,i){return d+""})
  .attr('x', 175+'px')
  .append('input')
  .attr('value', 'Bid Here');
  // .append('button')
  // .val('Enter Bid');

console.log('stuff', stuff);
// startBoard.data(testName)
//   .enter()
//   .append('input')
//   .attr('id', function(d, i){return "player-"+i+"input";})
//   .text(function(d,i){return d+""})
//   .attr('x', 175+'px');


  // $(document).ready(function(){
  //   for (var i = 1; i < testName.length; i++){
  //     var playerDiv = $('#player-'+i);
  //     playerDiv.html('<input></input>');
  //     console.log(playerDiv);
  //   };
  // });

// $('.bigboard').append("<input class='playerBoard' width='170px'></input>")

// var makeNewPlayerBox = playerBoard.selectAll('.newPlayerInput')
//   .data([0]).enter().append('input')
//   .attr('class', 'newPlayerInput')
//   .text('NP')
//   .attr("x", 10+"px")
//   .attr("y", 10+"px")
//   .attr("font-size", 24+"px")

console.log("allPlayers :", allPlayers);