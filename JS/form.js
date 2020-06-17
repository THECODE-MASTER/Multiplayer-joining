class Form{
 constructor(){
    this.input=createInput(""); 
    this.button=createButton("Play Game");
    this.greeting=createElement("h3");
    this.title2=createElement("h5");
  }
  hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
      this.title2.hide();
  }
display(){
var title=createElement("h2");
title.html("car racing game");
title.position(130,0);
this.title2.html("PLEASE ENTER YOUR NAME");
this.title2.position(130,30);
this.input.position(130,160);
this.button.position(250,200);
this.button.mousePressed( ()=>{
    this.input.hide();
    this.button.hide();
    this.title2.hide();
    player.name = this.input.value();
    playerCount++;
    player.index=playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("HELLO and WELCOME TO CAR RACING GAME: "+player.name);
    this.greeting.position(130,160);
}
);
}
}
