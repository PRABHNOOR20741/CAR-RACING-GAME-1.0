class Form
{
  constructor()
  {

  } 
  display()
  {
      //making the form for the player to fill
    var title = createElement('h2');
    title.html("CAR RACING GAME");
    title.position(430,0);
    
    //creating the input where player can give the name
    var input = createInput("NAME");
    //creating the play button to start the game
    var button = createButton('PLAY');
    //creating the greetings to meet the player
    var greeting = createElement('h3');
    input.position(430,160);
    button.position(550,200);

    button.mousePressed(function(){
        //hiding the button and the input box when the button is clicked
        input.hide();
        button.hide();
        //giving the name after the greetings 
        var name = input.value();
        //incresing the player count
        playerCount = playerCount + 1;
        //updating the player name and count in the database
        player.update(name);
        player.updateCount(playerCount);
        //giving greetings
        greeting.html("HELLO "+name);
        greeting.position(530,160);
    })
  }
}