var preload = function(game){}
 
preload.prototype = {
	preload: function(){ 
        this.game.load.image("player","assets/player/marino_right.png");
        this.game.load.image("player_left","assets/player/marino_left.png");
        
        this.game.load.spritesheet("trash","assets/imgs/trash.png");
        
        this.game.load.image("bullet","assets/imgs/bullet.png");
        
        this.game.load.spritesheet("buff_dolphin", "assets/imgs/buff_dolphin.png");
        
        this.game.load.image('testTiles', 'assets/imgs/city.png');
        this.game.load.image('background_image', 'assets/imgs/skyline.png');
        //this.load.image('testTiles', 'assets/imgs/tiles_spritesheet.png');
        this.game.load.tilemap('test_level', 'assets/tilemaps/miami_tile.json', null, Phaser.Tilemap.TILED_JSON);
        
        // MUSIC
        this.load.audio('buffalo',       'assets/music/buffalo.ogg',       'assets/music/buffalo.ogg'      );
        //this.load.audio('dallas',        'assets/music/dallas.ogg',        'assets/music/dallas.ogg'       );
        //this.load.audio('denver',        'assets/music/denver.ogg',        'assets/music/denver.ogg'       );
        //this.load.audio('greenbay',      'assets/music/greenbay.ogg',      'assets/music/greenbay.ogg'     );
        //this.load.audio('kansascity',    'assets/music/kansascity.ogg',    'assets/music/kansascity.ogg'   );
        //this.load.audio('level_select',  'assets/music/level_select.ogg',  'assets/music/level_select.ogg' );
        //this.load.audio('miami',         'assets/music/miami.ogg',         'assets/music/miami.ogg'        );
        //this.load.audio('new_england',   'assets/music/new_england.ogg',   'assets/music/new_england.ogg'  );
        //this.load.audio('san_fransisco', 'assets/music/san_fransisco.ogg', 'assets/music/san_fransisco.ogg');
        
        // SOUND EFFECTS
        this.load.audio('alarm',          'assets/sounds/alarm.ogg',          'assets/sounds/alarm.ogg'         );
        this.load.audio('beam',           'assets/sounds/beam.ogg',           'assets/sounds/beam.ogg'          );
        this.load.audio('beam_slash',     'assets/sounds/beam_slash.ogg',     'assets/sounds/beam_slash.ogg'    );
        this.load.audio('big_beam',       'assets/sounds/big_beam.ogg',       'assets/sounds/big_beam.ogg'      );
        this.load.audio('blast',          'assets/sounds/blast.ogg',          'assets/sounds/blast.ogg'         );
        this.load.audio('button_press',   'assets/sounds/button_press.ogg',   'assets/sounds/button_press.ogg'  );
        this.load.audio('bwom',           'assets/sounds/bwom.ogg',           'assets/sounds/bwom.ogg'          );
        this.load.audio('charge',         'assets/sounds/charge.ogg',         'assets/sounds/charge.ogg'        );
        this.load.audio('computer_beep',  'assets/sounds/computer_beep.ogg',  'assets/sounds/computer_beep.ogg' );
        this.load.audio('door_click',     'assets/sounds/door_click.ogg',     'assets/sounds/door_click.ogg'    );
        this.load.audio('explosion',      'assets/sounds/explosion.ogg',      'assets/sounds/explosion.ogg'     );
        this.load.audio('fire_spurt',     'assets/sounds/fire_spurt.ogg',     'assets/sounds/fire_spurt.ogg'    );
        this.load.audio('flame',          'assets/sounds/flame.ogg',          'assets/sounds/flame.ogg'         );
        this.load.audio('intense_lazer',  'assets/sounds/intense_lazer.ogg',  'assets/sounds/intense_lazer.ogg' );
        this.load.audio('jump_dash',      'assets/sounds/jump_dash.ogg',      'assets/sounds/jump_dash.ogg'     );
        this.load.audio('jump_land',      'assets/sounds/jump_land.ogg',      'assets/sounds/jump_land.ogg'     );
        this.load.audio('rattling',       'assets/sounds/rattling.ogg',       'assets/sounds/rattling.ogg'      );
        this.load.audio('shot',           'assets/sounds/shot.ogg',           'assets/sounds/shot.ogg'          );
        this.load.audio('shot2',          'assets/sounds/shot2.ogg',          'assets/sounds/shot2.ogg'         );
        //this.load.audio('splash',         'assets/sounds/splash.ogg',         'assets/sounds/splash.ogg'        );
        //this.load.audio('teleport_raise', 'assets/sounds/teleport_raise.ogg', 'assets/sounds/teleport_raise.ogg');
        //this.load.audio('thud',           'assets/sounds/thud.ogg',           'assets/sounds/thus.ogg'          );
        this.load.audio('wrong',          'assets/sounds/wrong.ogg',          'assets/sounds/wrong.ogg'         );
	},
	
  	create: function(){
		this.game.state.start("GameTitle");
	}
}