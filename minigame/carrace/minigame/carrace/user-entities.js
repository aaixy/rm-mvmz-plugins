var Car = function(v, style, img, speed){
	this.width = 40;
	this.height = 60;
	this.img = img;
	this.width = img.width;
	this.height = img.height;
	if(speed){
		this.speed = speed;
	}else{
		this.speed = new Vector(0, Math.ceil((~~(Math.random() * (180 - 80 + 1)) + 80)));
	}
	
	RectEntityObject.call(this, v, this.width - 6, this.height - 6, {});
	
	this._update = function(){
		var oldPos = this.position.clone();
		var diffY = MainApp.diffTime * this.speed.y / 1000;
		var diffX = MainApp.diffTime * this.speed.x / 1000;		
		this.position.x += diffX;
		this.position.y += diffY;
		
		if(this.collisionMap){
			if(this.collisionMap.checkCollide(this)){
				this.position = oldPos;
			}
		}
		//this.position.y += (MainApp.nowTime - MainApp.startTime) * this.speed.y / 1000;
		//this.position.x += (MainApp.nowTime - MainApp.startTime) * this.speed.x / 1000;
		
		if(this.position.y > 480){
			this.position.y = (~~(Math.random() * (0 - -240 + 1)) + -240);
			this.speed = new Vector(0, Math.ceil((~~(Math.random() * (180 - 80 + 1)) + 80)));
		}
	};
	
	this._draw = function(context){
		
		//context.strokeRect(this.position.x, this.position.y, this.width, this.height);
		context.drawImage(this.img, this.position.x - 3, this.position.y - 3);
	};
	
};


var Magic = function(v, img, animType, split, speed){
	
	this.img = img;
	this.animType = animType;
	if(animType === Magic.ANIM_TYPE.VERTICAL){
		this.width = img.width;
		this.height = split;
		this.frames = ~~(img.height / split);
	}else if(animType === Magic.ANIM_TYPE.HORIZONTAL){
		this.width = split;
		this.height = img.height;
		this.frames = ~~(img.width / split);
	}
	
	!!speed ? (this.speed = speed) : (this.speed = new Vector(0, 0));
	
	
	this.currFrame = 0;
	
	RectEntityObject.call(this, v, this.width, this.height, {});
	
	this._update = function(){
		this.currFrame += (MainApp.nowTime - MainApp.startTime) * 10 / 1000;
		this.currFrame %= this.frames;
		
		this.position.x += (MainApp.nowTime - MainApp.startTime) * this.speed.x / 1000;
		if(this.position.x > 640){
			this.position.x = 0;
		}
	};
	
	this._draw = function(context){
		var f = ~~this.currFrame;
		if(this.animType === Magic.ANIM_TYPE.VERTICAL){
			context.drawImage(img, 0,  f * this.height , this.width, this.height, this.position.x, this.position.y, this.width, this.height);
		}else if(this.animType === Magic.ANIM_TYPE.HORIZONTAL){
			context.drawImage(img, f * this.width, 0 , this.width, this.height, this.position.x, this.position.y, this.width, this.height);
		}
	}
};

Magic.ANIM_TYPE = {
	VERTICAL: 1,
	HORIZONTAL: 2
}


var GameScore = function(s, p){
	EntityObject.call(this);
	this.score = s;
	var text = new TextEntityObject(s, p, {fillStyle: '#fff', font: 'bold 32px 微软雅黑', 'textBaseline': 'top'}, 100, 35);
	
	this._update = function(){
		this.score += (MainApp.nowTime - MainApp.startTime) * 10 / 1000;
		text.setContent(~~this.score);
	}
	
	this._draw = function(context){
		text.draw(context);
	}
	
};