/*:
 * @plugindesc 地图区域功能插件 V4.2.3。
 * @author Lagomoro<优兔>[6R:rpg-sheep][度娘:优加星爱兔子]
 * @help
 * 在地图上绘制10以上的区域代码（包括10），同一个区域将被描绘成同一部分黑色。
 * 走到该区域编码上时，所有的该区域均会显示出来。
 * 请注意：
 * 如果需要多个区域，尽量用10,11,12这样连续并从10开始描绘，而不是10,100,200。
 * 否则会很消耗内存。
 *
 * @param start
 * @desc 黑块描绘从第几个开始。
 * @default 10
 *
 * @param max
 * @desc 黑块描绘直到多少结束。
 * @default 20
 *
 * @param passList
 * @desc 这些区域可通行。以英文逗号分隔。
 * @default
 *
 * @param blockList
 * @desc 这些区域不可通行。以英文逗号分隔。
 * @default
 *
 * @param brushList
 * @desc 这些区域半透明。以英文逗号分隔。
 * @default
 *
 * @param soulList
 * @desc 这些区域将被绑定，进入其中的一个会使其余一起变化。以英文分号区分组，以英文逗号区分元素。
 * @default
 */

// ======================================================================
// * 注册变量
// ----------------------------------------------------------------------
var Lagomoro = Lagomoro || {};
Lagomoro.MapArea = {};
Lagomoro.MapArea.Parameters = PluginManager.parameters('Lagomoro_MapArea_OutManager');
// ----------------------------------------------------------------------
Lagomoro.MapArea.start = Number(Lagomoro.MapArea.Parameters['start']) || 10;
Lagomoro.MapArea.max = Number(Lagomoro.MapArea.Parameters['max']) || 20;
Lagomoro.MapArea.passList = Lagomoro.MapArea.Parameters['passList'] ? Lagomoro.MapArea.Parameters['passList'].split(',') : [];
Lagomoro.MapArea.blockList = Lagomoro.MapArea.Parameters['blockList'] ? Lagomoro.MapArea.Parameters['blockList'].split(',') : [];
Lagomoro.MapArea.brushList = Lagomoro.MapArea.Parameters['brushList'] ? Lagomoro.MapArea.Parameters['brushList'].split(',') : [];
Lagomoro.MapArea.soulList = Lagomoro.MapArea.Parameters['soulList'] ? Lagomoro.MapArea.Parameters['soulList'].split(';') : [];
// ======================================================================

// ======================================================================
// * Spriteset_Map
// ======================================================================
Spriteset_Map.prototype.Lagomoro_MapArea_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
Spriteset_Map.prototype.createLowerLayer = function() {
    this.Lagomoro_MapArea_createLowerLayer();
    this.createArea();
    this.Lagomoro_MapArea_createDestination();
};
Spriteset_Map.prototype.createDestination = function() {};
Spriteset_Map.prototype.Lagomoro_MapArea_createDestination = function() {
    this._destinationSprite = new Sprite_Destination();
    this._destinationSprite.z = 9;
    this.addChild(this._destinationSprite);
};
Spriteset_Map.prototype.createArea = function() {
    this._Arealist = [];
    this._Areasite = [];
    this._fadeInlist = [];
    this._fadeOutlist = [];
    var max = 0;
    for(var i = 0;i < $gameMap.width()*$gameMap.height();i++){
        var data = this.readTileData(i%$gameMap.height(),Math.floor(i/$gameMap.width()),5);
        if(data - Lagomoro.MapArea.start >= max){max = data - Lagomoro.MapArea.start;}
    }
    var datamax = (Lagomoro.MapArea.max - Lagomoro.MapArea.start > max ? max :　Lagomoro.MapArea.max - Lagomoro.MapArea.start);
    for(var i = 0;i <= datamax;i++){
        var slice = {x1:0,y1:0,x2:0,y2:0};
        for(var a = 0;a < $gameMap.width();a++){
            for(var b = 0;b < $gameMap.height();b++){
                var data = this.readTileData(a,b,5);
                if(data - Lagomoro.MapArea.start === i){
                    if(a<slice.x1&&slice.x1!==0){slice.x1 = a;}
                    if(b<slice.y1&&slice.y1!==0){slice.y1 = b;}
                    if(a>slice.x2){slice.x2 = a;}
                    if(b>slice.y2){slice.y2 = b;}
                }
            }
        }
        this._Areasite[i] = {x:slice.x1*$gameMap.tileWidth(),y:slice.y1*$gameMap.tileHeight()};
        this._Arealist[i] = new Sprite(new Bitmap((slice.x2-slice.x1 + 1)*$gameMap.tileWidth(), (slice.y2-slice.y1 + 1)*$gameMap.tileHeight()));
        this._Arealist[i].x = this._Areasite[i].x;
        this._Arealist[i].y = this._Areasite[i].y;
        for(var a = 0;a < $gameMap.width();a++){
            for(var b = 0;b < $gameMap.height();b++){
                var data = this.readTileData(a,b,5);
                if(data - Lagomoro.MapArea.start === i){
                    this._Arealist[i].bitmap.fillRect(a*$gameMap.tileWidth() - this._Areasite[i].x,b*$gameMap.tileHeight() - this._Areasite[i].y,$gameMap.tileWidth(),$gameMap.tileHeight(),'rgba(0,0,0,1)');
                }
            }
        }
        this._baseSprite.addChild(this._Arealist[i]);
    }
};
Spriteset_Map.prototype.readTileData = function(x,y,z){
    return $gameMap.data()[(z * $gameMap.height() + y) * $gameMap.width() + x];
};
Spriteset_Map.prototype.Lagomoro_MapArea_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function() {
    this.Lagomoro_MapArea_update();
    this.updateArea();
    this.updateAreaFade();
};
Spriteset_Map.prototype.updateArea = function() {
    for(var i = 0;i < this._Arealist.length;i++){
        this._Arealist[i].x = $gameMap.adjustX(0)*$gameMap.tileWidth() + this._Areasite[i].x;
        this._Arealist[i].y = $gameMap.adjustY(0)*$gameMap.tileHeight() + this._Areasite[i].y;
    }
    for(var i = 0;i < this._Arealist.length;i++){
        if(!this.haveFadeIn(i)&&this._Arealist[i].alpha < 1){
            this._fadeInlist.push(i);
            this.removeFadeOut(i);
        }
    }
    var nowindex = this.readTileData($gamePlayer.x,$gamePlayer.y,5);
    var soulList = this.getSoul(nowindex);
    for(var i = 0;i < soulList.length;i++){
        if(!this.haveFadeOut(soulList[i] - Lagomoro.MapArea.start) && soulList[i] - Lagomoro.MapArea.start >= 0 && soulList[i] - Lagomoro.MapArea.start < this._Arealist.length){
            this._fadeOutlist.push(soulList[i] - Lagomoro.MapArea.start);
            this.removeFadeIn(soulList[i] - Lagomoro.MapArea.start);
        }
    }

};
Spriteset_Map.prototype.getSoul = function(index) {
    var temp = [index];
    for(var i = 0;i < Lagomoro.MapArea.soulList.length;i++){
        var data = Lagomoro.MapArea.soulList[i].split(',');
        for(var b = 0;b < data.length;b++){
            if(index === parseInt(data[b])){
                for(var c = 0;c < data.length;c++){
                    data[c] = parseInt(data[c]);
                }
                temp = temp.concat(data);
            }
        }
    }
    return temp;
};
Spriteset_Map.prototype.updateAreaFade = function() {
    for(var i = 0;i < this._fadeInlist.length;i++){
        if(this._Arealist[this._fadeInlist[i]].alpha < 1){
            this._Arealist[this._fadeInlist[i]].alpha += 0.02;
        }else{
            this._fadeInlist.splice(i,1);
        }
    }
    for(var i = 0;i < this._fadeOutlist.length;i++){
        if(this._Arealist[this._fadeOutlist[i]].alpha > 0){
            this._Arealist[this._fadeOutlist[i]].alpha -= 0.02;
        }else{
            this._fadeInlist.splice(i,1);
        }
    }
};
Spriteset_Map.prototype.haveFadeIn = function(index) {
    var data = false;
    for(var i = 0;i < this._fadeInlist.length;i++){
        if(this._fadeInlist[i] === index){
            data = true;
            break;
        }
    }
    return data;
};
Spriteset_Map.prototype.haveFadeOut = function(index) {
    var data = false;
    for(var i = 0;i < this._fadeOutlist.length;i++){
        if(this._fadeOutlist[i] === index){
            data = true;
            break;
        }
    }
    return data;
};
Spriteset_Map.prototype.removeFadeIn = function(index) {
    for(var i = 0;i < this._fadeInlist.length;i++){
        if(this._fadeInlist[i] === index){
            this._fadeInlist.splice(i,1);
            break;
        }
    }
};
Spriteset_Map.prototype.removeFadeOut = function(index) {
    for(var i = 0;i < this._fadeOutlist.length;i++){
        if(this._fadeOutlist[i] === index){
            this._fadeOutlist.splice(i,1);
            break;
        }
    }
};
// ======================================================================
// * Tilemap
// ======================================================================
Tilemap.prototype._isOverpassPosition = function(mx, my) {
    return this.includePasslist(mx,my);
};
Tilemap.prototype.includePasslist = function(x, y) {
    for(var i = 0;i < Lagomoro.MapArea.passList.length;i++){
        if(this._readMapData(x,y,5) === parseInt(Lagomoro.MapArea.passList[i])){
            return true;
        }
    }
    return false;
};
/*Tilemap.prototype._paintTiles = function(startX, startY, x, y) {
    var tableEdgeVirtualId = 10000;
    var mx = startX + x;
    var my = startY + y;
    var dx = (mx * this._tileWidth).mod(this._layerWidth);
    var dy = (my * this._tileHeight).mod(this._layerHeight);
    var lx = dx / this._tileWidth;
    var ly = dy / this._tileHeight;
    var tileId0 = this._readMapData(mx, my, 0);
    var tileId1 = this._readMapData(mx, my, 1);
    var tileId2 = this._readMapData(mx, my, 2);
    var tileId3 = this._readMapData(mx, my, 3);
    var shadowBits = this._readMapData(mx, my, 4);
    var upperTileId1 = this._readMapData(mx, my - 1, 1);
    var lowerTiles = [];
    var upperTiles = [];

    if (this._isOverpassPosition(mx, my)) {
        upperTiles.push(tileId0);
        upperTiles.push(tileId1);
    } else {
        if (this._isHigherTile(tileId0)) {
            upperTiles.push(tileId0);
        } else {
            lowerTiles.push(tileId0);
        }
        if (this._isHigherTile(tileId1)) {
            upperTiles.push(tileId1);
        } else {
            lowerTiles.push(tileId1);
        }
    }

    lowerTiles.push(-shadowBits);

    if (this._isTableTile(upperTileId1) && !this._isTableTile(tileId1)) {
        if (!Tilemap.isShadowingTile(tileId0)) {
            lowerTiles.push(tableEdgeVirtualId + upperTileId1);
        }
    }

    if (this._isOverpassPosition(mx, my)) {
        upperTiles.push(tileId2);
        upperTiles.push(tileId3);
    } else {
        if (this._isHigherTile(tileId2)) {
            upperTiles.push(tileId2);
        } else {
            lowerTiles.push(tileId2);
        }
        if (this._isHigherTile(tileId3)) {
            upperTiles.push(tileId3);
        } else {
            lowerTiles.push(tileId3);
        }
    }

    var lastLowerTiles = this._readLastTiles(0, lx, ly);
    if (!lowerTiles.equals(lastLowerTiles) ||
        (Tilemap.isTileA1(tileId0) && this._frameUpdated)) {
        this._lowerBitmap.clearRect(dx, dy, this._tileWidth, this._tileHeight);
        for (var i = 0; i < lowerTiles.length; i++) {
            var lowerTileId = lowerTiles[i];
            if (lowerTileId < 0) {
                this._drawShadow(this._lowerBitmap, shadowBits, dx, dy);
            } else if (lowerTileId >= tableEdgeVirtualId) {
                this._drawTableEdge(this._lowerBitmap, upperTileId1, dx, dy);
            } else {
                this._drawTile(this._lowerBitmap, lowerTileId, dx, dy);
            }
        }
        this._writeLastTiles(0, lx, ly, lowerTiles);
    }

    var lastUpperTiles = this._readLastTiles(1, lx, ly);
    if (!upperTiles.equals(lastUpperTiles)) {
        this._upperBitmap.clearRect(dx, dy, this._tileWidth, this._tileHeight);
        for (var j = 0; j < upperTiles.length; j++) {
            this._drawTile(this._upperBitmap, upperTiles[j], dx, dy);
        }
        this._writeLastTiles(1, lx, ly, upperTiles);
    }
};*/
Tilemap.prototype._paintTiles = function(startX, startY, x, y) {
    var tableEdgeVirtualId = 10000;
    var mx = startX + x;
    var my = startY + y;
    var dx = (mx * this._tileWidth).mod(this._layerWidth);
    var dy = (my * this._tileHeight).mod(this._layerHeight);
    var lx = dx / this._tileWidth;
    var ly = dy / this._tileHeight;
    var tileId0 = this._readMapData(mx, my, 0);
    var tileId1 = this._readMapData(mx, my, 1);
    var tileId2 = this._readMapData(mx, my, 2);
    var tileId3 = this._readMapData(mx, my, 3);
    var shadowBits = this._readMapData(mx, my, 4);
    var upperTileId1 = this._readMapData(mx, my - 1, 1);
    var lowerTiles = [];
    var upperTiles = [];
	if (this._isOverpassPosition(mx, my)) {
        upperTiles.push(tileId0);
        upperTiles.push(tileId1);
    } else {
		if (this._isHigherTile(tileId0)) {
			upperTiles.push(tileId0);
		} else {
			lowerTiles.push(tileId0);
		}
		if (this._isHigherTile(tileId1)) {
			upperTiles.push(tileId1);
		} else {
			lowerTiles.push(tileId1);
		}
	}

    lowerTiles.push(-shadowBits);

    if (this._isTableTile(upperTileId1) && !this._isTableTile(tileId1)) {
        if (!Tilemap.isShadowingTile(tileId0)) {
            lowerTiles.push(tableEdgeVirtualId + upperTileId1);
        }
    }

    if (this._isOverpassPosition(mx, my)) {
        upperTiles.push(tileId2);
        upperTiles.push(tileId3);
    } else {
        if (this._isHigherTile(tileId2)) {
            upperTiles.push(tileId2);
        } else {
            lowerTiles.push(tileId2);
        }
        if (this._isHigherTile(tileId3)) {
            upperTiles.push(tileId3);
        } else {
            lowerTiles.push(tileId3);
        }
    }

    var count = 1000 + this.animationCount - my;
    var frameUpdated = (count % 30 === 0);
    this._animationFrame = Math.floor(count / 30);

    var lastLowerTiles = this._readLastTiles(0, lx, ly);
    if (!lowerTiles.equals(lastLowerTiles) ||
            (Tilemap.isTileA1(tileId0) && frameUpdated)) {
        this._lowerBitmap.clearRect(dx, dy, this._tileWidth, this._tileHeight);
        for (var i = 0; i < lowerTiles.length; i++) {
            var lowerTileId = lowerTiles[i];
            if (lowerTileId < 0) {
                this._drawShadow(this._lowerBitmap, shadowBits, dx, dy);
            } else if (lowerTileId >= tableEdgeVirtualId) {
                this._drawTableEdge(this._lowerBitmap, upperTileId1, dx, dy);
            } else {
                this._drawTile(this._lowerBitmap, lowerTileId, dx, dy);
            }
        }
        this._writeLastTiles(0, lx, ly, lowerTiles);
    }

    var lastUpperTiles = this._readLastTiles(1, lx, ly);
    if (!upperTiles.equals(lastUpperTiles)) {
        this._upperBitmap.clearRect(dx, dy, this._tileWidth, this._tileHeight);
        for (var j = 0; j < upperTiles.length; j++) {
            this._drawTile(this._upperBitmap, upperTiles[j], dx, dy);
        }
        this._writeLastTiles(1, lx, ly, upperTiles);
    }
};
// ======================================================================
// * ShaderTilemap
// ======================================================================
try{
	ShaderTilemap.prototype._paintTiles = function(startX, startY, x, y) {
		var mx = startX + x;
		var my = startY + y;
		var dx = x * this._tileWidth, dy = y * this._tileHeight;
		var tileId0 = this._readMapData(mx, my, 0);
		var tileId1 = this._readMapData(mx, my, 1);
		var tileId2 = this._readMapData(mx, my, 2);
		var tileId3 = this._readMapData(mx, my, 3);
		var shadowBits = this._readMapData(mx, my, 4);
		var upperTileId1 = this._readMapData(mx, my - 1, 1);
		var lowerLayer = this.lowerLayer.children[0];
		var upperLayer = this.upperLayer.children[0];

		if (this._isOverpassPosition(mx, my)) {
			this._drawTile(upperLayer, tileId0, dx, dy);
			this._drawTile(upperLayer, tileId1, dx, dy);
		} else {
			if (this._isHigherTile(tileId0)) {
				this._drawTile(upperLayer, tileId0, dx, dy);
			} else {
				this._drawTile(lowerLayer, tileId0, dx, dy);
			}
			if (this._isHigherTile(tileId1)) {
				this._drawTile(upperLayer, tileId1, dx, dy);
			} else {
				this._drawTile(lowerLayer, tileId1, dx, dy);
			}
		}

		this._drawShadow(lowerLayer, shadowBits, dx, dy);
		if (this._isTableTile(upperTileId1) && !this._isTableTile(tileId1)) {
			if (!Tilemap.isShadowingTile(tileId0)) {
				this._drawTableEdge(lowerLayer, upperTileId1, dx, dy);
			}
		}

		if (this._isOverpassPosition(mx, my)) {
			this._drawTile(upperLayer, tileId2, dx, dy);
			this._drawTile(upperLayer, tileId3, dx, dy);
		} else {
			if (this._isHigherTile(tileId2)) {
				this._drawTile(upperLayer, tileId2, dx, dy);
			} else {
				this._drawTile(lowerLayer, tileId2, dx, dy);
			}
			if (this._isHigherTile(tileId3)) {
				this._drawTile(upperLayer, tileId3, dx, dy);
			} else {
				this._drawTile(lowerLayer, tileId3, dx, dy);
			}
		}
	};
}
catch(e){
	console.log(e);
}
// ======================================================================
// * Game_Map
// ======================================================================
Game_Map.prototype.Lagomoro_MapArea_checkPassage = Game_Map.prototype.checkPassage;
Game_Map.prototype.checkPassage = function(x, y, bit) {
    if (this.includePasslist(x,y)){
	//console.log(this.includePasslist(x,y)); 
	return true;}
     if (this.includeBlocklist(x,y)){
	//console.log(this.includeBlocklist(x,y)); 
	return false;}
     if (this.includeBrushlist(x,y)){
	//console.log(this.includeBrushlist(x,y)); 
	return true;}
	//{
    //console.log(this.Lagomoro_MapArea_checkPassage(x,y,bit)); 
	return this.Lagomoro_MapArea_checkPassage(x,y,bit);
	//}
	//return true;
};
Game_Map.prototype.includePasslist = function(x, y) {
    for(var i = 0;i < Lagomoro.MapArea.passList.length;i++){
        if(this.regionId(x,y) === parseInt(Lagomoro.MapArea.passList[i])){
            //console.log('includePasslist');
			return true;
			
        }
    }
    return false;
};
Game_Map.prototype.includeBlocklist = function(x, y) {
    for(var i = 0;i < Lagomoro.MapArea.blockList.length;i++){
        if(this.regionId(x,y) === parseInt(Lagomoro.MapArea.blockList[i])){
            //console.log('includeBlocklist');
			return true;
        }
    }
    return false;
};
Game_Map.prototype.includeBrushlist = function(x, y) {
    for(var i = 0;i < Lagomoro.MapArea.brushList.length;i++){
        if(this.regionId(x,y) === parseInt(Lagomoro.MapArea.brushList[i])){
            //console.log('includeBrushlist');
			return true;
        }
    }
    return false;
};
// ======================================================================
// * Game_CharacterBase
// ======================================================================
Game_CharacterBase.prototype.Lagomoro_MapArea_updateMove = Game_CharacterBase.prototype.updateMove;
Game_CharacterBase.prototype.updateMove = function() {
    this.Lagomoro_MapArea_updateMove();
    this.Lagomoro_MapArea_refreshBushDepth();
};
Game_CharacterBase.prototype.refreshBushDepth = function() {
    if(this.includeBrushlist(this._x,this._y)){
        this._bushDepth = 48;
    }else if (this.isNormalPriority() && !this.isObjectCharacter() &&
        this.isOnBush() && !this.isJumping()) {
        if (!this.isMoving()) {
            this._bushDepth = 12;
        }
    } else {
        this._bushDepth = 0;
    }
};
Game_CharacterBase.prototype.Lagomoro_MapArea_refreshBushDepth = function() {
    if(this.includeBrushlist(this._x,this._y)){
        this._bushDepth = 48;
    }else if (this.isNormalPriority() && !this.isObjectCharacter() &&
        this.isOnBush() && !this.isJumping()) {
        if (!this.isMoving()) {
            this._bushDepth = 12;
        }
    } else {
        this._bushDepth = 0;
    }
};
Game_CharacterBase.prototype.includeBrushlist = function(x, y) {
    for(var i = 0;i < Lagomoro.MapArea.brushList.length;i++){
        if($gameMap.regionId(x,y) === parseInt(Lagomoro.MapArea.brushList[i])){
            return true;
        }
    }
    return false;
};
// ======================================================================
// * Game_Player
// ======================================================================
Game_Player.prototype.Lagomoro_MapArea_updateMove_key = Game_Player.prototype.updateMove_key;
Game_Player.prototype.updateMove_key = function() {
    this.Lagomoro_MapArea_updateMove_key();
    this.Lagomoro_MapArea_refreshBushDepth_key();
};
Game_Player.prototype.Lagomoro_MapArea_refreshBushDepth_key = function() {
    if(this.includeBrushlist(this._x,this._y)){
        this._bushDepth = 48;
    }else if (this.isNormalPriority() && !this.isObjectCharacter() &&
        this.isOnBush() && !this.isJumping()) {
        this._bushDepth = 12;
    } else {
        this._bushDepth = 0;
    }
};

