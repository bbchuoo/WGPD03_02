

var brad02Layer = cc.Layer.extend({
    sprite:null,
    sx:1,
    sy:1,
    player1: new Array(13),
    ctor:function () {

        this._super();

        cc.spriteFrameCache.addSpriteFrames(
            res.poker_plist,res.poker_png);

        this.sprite = new cc.Sprite("#pokers_back.png");
        // cc.log(this.sprite.width +  ": "+ this.sprite.height);
        this.sx = (cc.winSize.width /13) / (this.sprite.width+24);
        this.sy = (cc.winSize.height /4) / (this.sprite.height+48);

        for(var i=0;i<this.player1.length;i++){

            this.player1[i] = new cc.Sprite("#pokers_back.png");
            this.player1[i].x =  cc.winSize.width *(i+1)/14;
            this.player1[i].y =  cc.winSize.height *4/5;
            this.player1[i].setScale(this.sx,this.sy);
            this.addChild(this.player1[i]);



        }





        //cc的寬/13/原圖片的寬

        return true;
    }
});

var brad02Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new brad02Layer();
        this.addChild(layer);
    }
});

