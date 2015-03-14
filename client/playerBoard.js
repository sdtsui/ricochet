var suspect;
var allPlayers = ["Null"];

var createNewPlayer = function(name){
  var newPlayer = {
    name: name,
    tokens: [],
    tokenCount : 0,
    bid: "-"
  }
  allPlayers.push(newPlayer);
}
//Draw a box, allow addition of new players.

var testPlayers = [];
var createTestNewPlayer = function(name){
  var newPlayer = {
    name: name,
    tokens: [],
    tokenCount : 0,
    bid: ""
  }
  testPlayers.push(newPlayer);
}

// for (var i = 0; i < 4; i++){
//   createTestNewPlayer("Bob"+i);
// }
createTestNewPlayer("Space");
createTestNewPlayer("Axel");
createTestNewPlayer("Dan");

var drawPlayers = function(){
  d3.selectAll('.playerDisplay')
    .remove();

  var playerDivs = startBoard.data(testPlayers)
    .enter()
    .append('div')

  playerDivs  
    .attr('id', function(d, i){return "player-"+i;})
    .attr('class', 'playerDisplay')
    .text(function(d,i){return d.name+""})
    .attr('x', 175+'px')
    .append('input')
    .attr('id', function(d, i){return "playerBidBox-"+d.name})
    .attr('value', 'Bid Here')
    .on('mousedown', function(){
      this.value = "";
    });
  playerDivs
    .append('button')
    .text('Make Bid')
    .on('mousedown', function(d){
      //find the input box, pull the value
      var bidValue = $('#playerBidBox-'+d.name).val();
      d.bid = bidValue;
      enqueueBid(makeNewBid(bidValue, d.name));
      console.log("BidQueue: ",bidQueue);

      //redraw, and click on timer
      placeBidTimeHandler();
      drawPlayers();
    });
  playerDivs
    .append('br');
  playerDivs
    .append('text')
    .html(function(d,i){
      return "Tokens : " +d.tokenCount;
    });
  playerDivs
    .append('br');
  playerDivs
    .append('text')
    .html(function(d,i){
      return 'Current Bid: '+ d.bid;
    });
}



// startBoard.data(testPlayers)
//   .enter()
//   .append('input')
//   .attr('id', function(d, i){return "player-"+i+"input";})
//   .text(function(d,i){return d+""})
//   .attr('x', 175+'px');


  // $(document).ready(function(){
  //   for (var i = 1; i < testPlayers.length; i++){
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

$(document).ready(function(){
  //Assign a new target
  target = getTarget();
  moveTokenCurrentBox();
  //Draw Players
  drawPlayers();
  $('#newPlayerBtn').on('mousedown', function(){
    var nameText = $('#newPlayerTxt').val();
    createNewPlayer(nameText);
    drawPlayers();
    //add new player,
    //redraw new players...
    //Player functionality: when a bid is placed, is updated in the STEPS box. Timer is started.
  })


  //Add center token image:
  var centerText = d3.select('.board')
  .append('text')
  .attr('id', 'mainToken')
  .attr('x', 278)
  .attr('y', 326)
  .attr('font-size', '64px')
  .html(target[0][2])
  .attr('fill', target[0][3]);
});