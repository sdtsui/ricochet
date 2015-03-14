var active_player = undefined;


var bidQueue = [];

var makeNewBid = function(num, player){
  return {player: player, moves: num};
}

var enqueueBid = function(bidObj){
  bidQueue.push(bidObj);
  bidQueue.sort(function(a, b) {
    if (a.moves < b.moves) {
      return -1;
    }
    if (a.moves > b.moves) {
      return 1;
    }
    return 0;
  });

}

var dequeueBid = function(){
  return bidQueue.shift();
}
var clearQueue = function(){
  var bidQueue = [];
}

//handles Timer, only clicks if startTimer already called
var placeBidTimeHandler = function(){
  if (!timer_started){
    startTimer();
    timer_started = true;
  } else{
    console.log('Bid Received, timer already started');
  }
}

var requestMove = function(){
  var activeBid = dequeueBid();
  active_player = activeBid.player;
  vex.dialog.open({
    message:"Your move, "+active_player+"!"
  });
}

var moveSuccess = function(){
  for (var i = 0; i < testPlayers.length; i++){
    if (testPlayers[i].name === active_player){
      testPlayers[i].tokenCount++;
    }
  }

  vex.dialog.open({
    message:"Point for "+active_player+"! Next Round!",
    callback: function(data){
      console.log("Data :", data);
    }
  });
  
  var active_player = undefined;
  nextRound();
  drawPlayers();
};

var moveFailure = function(){
  for (var i = 0; i < testPlayers.length; i++){
    if (testPlayers[i].name === active_player){
      console.log('decrementing count for :', active_player);
      var count = testPlayers[i].tokenCount;
      if (testPlayers[i].tokenCount > 0) {
        testPlayers[i].tokenCount};
      }
    }

  if(bidQueue.length ===0){
    restartPlayers();
  }
  requestMove();
  drawPlayers();
};
