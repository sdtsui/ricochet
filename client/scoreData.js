var bidQueue = [];

var enqueueBid = function(num, player){
  return {player: player, moves: num};
}
var dequeueBid = function(){
  var failPlayer = bidQueue.pop();
}
var clearQueue = function(){
  var bidQueue = [];
}