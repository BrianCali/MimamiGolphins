var Enemy = function (game, x, y, key) {

    Phaser.Sprite.call(this, game, x, y, key);

    this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;

    this.anchor.set(0.5);

    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
 

    this.tracking = false;
    this.scaleSpeed = 0;
    
    this.isActive = false;

};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function () {
    // Check is active
    if(!this.isActive)
    {
        this.isActive = this.checkActive();
        return;
    }
    
    this.performAi();
};

Enemy.prototype.checkActive = function()
{
    return false;
};

// Set enemy logic here
Enemy.prototype.performAi = function()
{
    
};


var TrashCan = function (game, x, y, key) {
    Enemy.call(this, game, x, y, key);
};

TrashCan.prototype = Object.create(Enemy.prototype);
TrashCan.prototype.constructor = TrashCan;

TrashCan.prototype.performAi = function () {
    
};
