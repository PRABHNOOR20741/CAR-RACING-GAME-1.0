class Game
{
  constructor()
  {

  }  

  //read the gameState from database
 getState()
 {
     //creating a variable with the gameState from the database
   var gameStateRef = database.ref('gameState'); 
   //making the database read the given value
   gameStateRef.on("value",function(data){
       gameState = data.val();
   }); 
 }

 //update the gameState in database
 update(state)
 {
     //updating the database and referring
   database.ref('/').update({
       gameState : state
   });  
 }

 //function to start the game
 start()
 {
     //giving condition to generate the form and increasing the playerCount
   if(gameState === 0)
   {
     player = new Player();
     player.getCount();
     form = new Form();
     form.display();  
   }  
 }
}