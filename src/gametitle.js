var gameTitle = function(game){};
 
gameTitle.prototype = {
    
    preload: function() {
    
    },
    
    create: function() {
        game.add.text(160,160, "GAME JAM MIAMI DOLPHINS 1994", { font: '22px Helvetica', fill: '#fff' });
       
        var playButton = this.game.add.button(160,320,"player",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
		
		this.game.state.start("TheGame");
	},
	
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}
