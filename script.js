function BlackjackGame () {
    this.total = 0;
    this.card  = 0;
    this.play= function () {
      this.card = parseInt((Math.random()*13) + 1)
      console.log("Next Card..." + this.card)
    }; 
    this.stand       = function () {/*...*/}; // Player wants to stand
    this.nextCard    = function () {/*...*/}; // Give me another card!
    this.checkResult = function () {/*...*/};  // Did I win? Did I loose?
  }
  
  
  var game = new BlackjackGame();
  
  game.play()