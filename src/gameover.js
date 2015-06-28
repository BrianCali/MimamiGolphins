var gameOver = function(game){};
 
gameOver.prototype = {
    
    preload: function() {
    
    },
    
    create: function() {
        this.game.add.text(250,250, "YOU ARE DEAD!!!", { font: '48px Helvetica', fill: '#fff' });
        this.game.state.start("TheGame");
	},
}