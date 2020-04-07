var canvas,backgroundImg;
var gameState = 0;
var playerCount;
var database;
var form,player,game;

function setup()
{
  canvas = createCanvas(400,400);  
  database = firebase.database();

  //creatng the new game including the button,form and greetings
  game = new Game();
  game.getState();
  game.start();

}

function draw()
{

}