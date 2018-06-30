

var brad01Layer = cc.Layer.extend({
    sprite:null,
    p2:null,
    status:null,
    isOn:false,
    poker7:null,
    poker4:null,
    buttonrects:null,
    ctor:function () {

        this._super();

        //第一個 指定路徑

        this.p2 = new cc.Sprite("res/1.jpg");
        this.p2.attr({

            x:cc.winSize.width /8,
            y:cc.winSize.height *7/8
        });
        this.addChild(this.p2);

        //第二個方法 放在resource 比較好維護

        //三元運算式寫法 （bollon）? 值1:值2

        this.status = new cc.Sprite(this.isOn?res.status_on:res.status_off);
        this.status.attr({

            x:cc.winSize.width *7/8,
            y:cc.winSize.height *7/8

        });



        this.addChild(this.status);
        this.mymouseLister(this);

        //第一種方法 人工尋找plist

        this.poker7 = new cc.Sprite(
            res.poker_png,cc.rect(221,711,220,218));



        this.poker7.attr({

            x: cc.winSize.width/4,
            y:cc.winSize.height /2,
            rotation:-90,

        });

        this.addChild(this.poker7);

        //第二種方法
        cc.spriteFrameCache.addSpriteFrames(res.poker_plist,res.poker_png);
        this.poker4 = new cc.Sprite("#pokers_s07.png");
        this.poker4.attr({

            x: cc.winSize.width *3/4,
            y:cc.winSize.height /2,

        });
        this.poker4.setScale(0.5,0.5);
        this.addChild(this.poker4);


        return true;
    },

    mymouseLister : function(layer){

        cc.eventManager.addListener({

            event: cc.EventListener.MOUSE,
            onMouseDown : function (event){



                layer.isOn = !layer.isOn;
                layer.status.setTexture(layer.isOn?res.status_on:res.status_off);



            }


        },layer);


    }


});

var brad01Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new brad01Layer();
        this.addChild(layer);
    }
});

