class Player
{
  constructor()
  {

  }
  getCount()
 {
     //making a variable with the playerCount from the database
   var playerCountRef = database.ref('playerCount'); 
   playerCountRef.on("value",function(data){
       playerCount = data.val();
   }); 
 }

 //update the gameState in database
 updateCount(count)
 {
   database.ref('/').update({
       playerCount : count
   });  
 }

 update(name)
 {
     //making the player's index using the playerCount
   var playerIndex = "player"+ playerCount ;
   database.ref(playerIndex).set({
       //giving the name from the database as the name given by the player 
       name : name
   })
 }
}