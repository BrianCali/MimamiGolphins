var theGame = function(game){
	
}
 
theGame.prototype = {
    preload: function() {
       
    },
    
    create: function() {
        
        this.cameraOffset = 200;
        
        this.map = this.game.add.tilemap('test_level');
        
        this.map.addTilesetImage('city_objects', 'testTiles');
        //this.map.addTilesetImage('Tiles', 'testTiles');
        
        this.skyline = this.add.tileSprite(0, -260, 10000, 1000, 'background_image');

        //var buffDolphin     = this.game.add.tileSprite(0, 0, 500, 500, "buff_dolphin");

        this.backBackground = this.map.createLayer('BackBackground');

        this.background     = this.map.createLayer('Background');
 
        this.ground = this.map.createLayer('Ground');
        
        this.music = this.game.add.audio('buffalo', 0.5, true); // name, volume, loop.
        
        this.music.play();
        
        // PLAYER
        
        this.player = this.game.add.sprite(100,200,'player');

        this.foreground = this.map.createLayer('Foreground');

        this.player.anchor.setTo(0.5,0.5);

        this.game.physics.arcade.enable(this.player);
        
        this.player.body.setSize(38, 63, 0, 0);
        
        this.player.body.gravity.y = 1000;
        this.player.body.collideWorldBounds = true;
        
        //this.game.camera.follow(this.player);
        
        //this.game.camera.setPosition(this.player.sprite.x - 10, this.player.sprite.y - 50);
        
        this.map.setCollisionBetween(1, 100000, true, 'Ground');
 
        this.ground.resizeWorld();
        
        this.cursors = this.game.input.keyboard.createCursorKeys();
        
        this.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR, Phaser.Keyboard.Z ]);
    
        this.player.facing = 'right';
        
        this.weapons = [];
        this.currentWeapon = 0;
        this.weapons.push(new Weapon.SingleBullet(this.game));
        this.weapons[this.currentWeapon].visible = true;
        
        // Sound Effects
        this.explosion = this.game.add.audio('explosion');
        this.wrong     = this.game.add.audio('wrong');
        
        //Enemies
        
        //  Here we create our coins group
        this.trash = game.add.group();
        this.trash.enableBody = true;
    
        this.map.createFromObjects('Objects', 46, 'trash', 0, true, false, this.trash, TrashCan);
        
        this.trash.forEach(function(item) {
            item.body.gravity.y = 1000;
        }, this);
        
        // Create activator
        this.activator = this.game.add.sprite(0,0, 'trash');
        //
    },
    
    update: function() {

        if (this.player.facing == 'left' && this.cameraOffset > -200)
        {
            this.cameraOffset -= 4;
        }
        else if(this.cameraOffset < 200)
        {
            this.cameraOffset += 4;
        }
        
        if(this.cameraOffset > 200){this.cameraOffset = 200;}
        if(this.cameraOffset < -200){this.cameraOffset = -200;}
        
        this.game.camera.focusOnXY(this.player.body.x + this.cameraOffset, this.player.body.y + -50);
        
        this.game.physics.arcade.collide(this.player,  this.ground);
        this.game.physics.arcade.collide(this.trash,  this.ground);
        
        this.game.physics.arcade.overlap(this.activator, this.trash, this.activateEnemy);
        
        // Check to see if player is dead
        if (this.player.dead)
        {
            return;
        }
        
        this.skyline.tilePosition.x = 0.5;
        
        // Handle Player movement
        this.movePlayer();
        
        // This is probably broken if we come back to this.
        //if (this.player.velocity > 0)
        //{
        //    this.skyline.x -= 1;
        //}
        //else if (this.player.velocity < 0)
        //{
        //   this.skyline.x += 1;
        //}
        //else if (this.player.velocity == 0)
        //{
        //    this.skyline.x = 0;
        //}
        
        this.shoot();
        
        if(this.player.body.bottom >= this.world.bounds.bottom){
            this.player.dead = true;
             this.player.body.velocity.x = 0;
             this.player.body.velocity.y = 0;
            
            this.music.stop();
            this.explosion.play();
            //make the player explode
            var emitter = this.game.add.emitter(this.player.x, this.player.y, 100);
            emitter.makeParticles('player');
            emitter.minParticleSpeed.setTo(-200, -200);
            emitter.maxParticleSpeed.setTo(200, 200);
            emitter.gravity = 0;
            emitter.start(true, 1000, null, 100);
            this.player.visible = false;
            
            //call the gameOver method in 800 milliseconds, we haven't created this method yet
            this.game.time.events.add(3000, this.gameOver, this);
        }
    },
    
    shoot: function(){
        var x  = this.player.x;
        var y = this.player.y;
        var angle = 0;
        if(this.player.facing == 'left'){
            x = x - 60;
            y = y - 12;
            angle = 180;
        } else if(this.player.facing == 'right'){
            x = x + 60;
            y = y - 12 ;
            angle = 0;
        }
        
        // check combos first then check non combos
        if(this.cursors.up.isDown && this.cursors.left.isDown)
        {
            angle = 225;
        } else if(this.cursors.up.isDown && this.cursors.right.isDown)
        {
            angle = 315;
        } else if(this.cursors.down.isDown && this.cursors.left.isDown)
        {
            angle = 135;
        } else if(this.cursors.down.isDown && this.cursors.right.isDown)
        {
            angle = 45;
        } else if (this.cursors.up.isDown)
        {
            angle = 270;
        } else if (this.cursors.down.isDown)
        {
            angle = 90;
        }
        
        if (this.input.keyboard.isDown(Phaser.Keyboard.Z))
        {
            this.weapons[this.currentWeapon].fire(x, y ,angle);
        }
    },
    
    playerJump: function() {
 
        if(this.player.body.blocked.down) {
          this.player.body.velocity.y -= 500;
        }   
    
    },
    
    movePlayer: function(){
        
        this.player.body.velocity.x = 0;
         
        if(this.cursors.left.isDown){
            this.player.body.velocity.x = -300;
            this.player.facing = 'left';
            this.player.loadTexture("player_left");
        } else if(this.cursors.right.isDown){
            this.player.body.velocity.x = 300;
            this.player.facing = 'right';
            this.player.loadTexture("player");
        }
        
        if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            this.playerJump();
        }
    },
    
    gameOver: function(){
        this.game.state.start("GameOver");
    },
    
    activateEnemy: function(activator, enemy)
    {
        console.log('Test')
    }
}