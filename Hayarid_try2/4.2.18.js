(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"4.2.18_atlas_P_", frames: [[1757,390,147,72],[0,855,1087,753],[1282,0,357,265],[1420,267,94,82],[1089,855,796,868],[1795,264,35,36],[1282,340,56,63],[1757,264,36,37],[1757,317,151,71],[1641,0,390,108],[1641,264,114,138],[1870,110,125,205],[1641,110,227,152],[1282,267,136,71],[0,0,1280,853],[0,1610,947,665]]},
		{name:"4.2.18_atlas_NP_", frames: [[3204,0,420,682],[2442,2209,644,363],[2564,1007,900,1200],[3626,0,440,581],[0,0,1280,1920],[1282,1866,1158,767],[3204,684,479,282],[1282,0,1920,1005],[1282,1007,1280,857],[0,1922,1263,665]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Again = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Altneuland = function() {
	this.spriteSheet = ss["4.2.18_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.backgroundOpacity = function() {
	this.spriteSheet = ss["4.2.18_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ben = function() {
	this.spriteSheet = ss["4.2.18_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.clock2pngcopy = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.correct = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.exit = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._false = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Finished = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Flags = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_1 = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.golda = function() {
	this.spriteSheet = ss["4.2.18_atlas_NP_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.harp195636_1920 = function() {
	this.spriteSheet = ss["4.2.18_atlas_NP_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logoballoon = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.newback = function() {
	this.spriteSheet = ss["4.2.18_atlas_NP_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.next = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.note = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.odotnew = function() {
	this.spriteSheet = ss["4.2.18_atlas_NP_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.piano2171142_1920 = function() {
	this.spriteSheet = ss["4.2.18_atlas_NP_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.President_of_Togo_Nicolas_Grunitzky_with_Levi_Eshkol_Golda_Meir_in_Israel_1964 = function() {
	this.spriteSheet = ss["4.2.18_atlas_NP_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.smalltable = function() {
	this.spriteSheet = ss["4.2.18_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.table = function() {
	this.spriteSheet = ss["4.2.18_atlas_NP_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.exitPic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.exit();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.745,0.549);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiVCWIAAkrIErAAIAAErg");
	this.shape.setTransform(21.4,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.exitPic, new cjs.Rectangle(0,0,41.7,34.6), null);


(lib.board2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aw8K8IAA13MAh5AAAIAAV3g");
	this.shape.setTransform(-0.5,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.board2, new cjs.Rectangle(-109,-71,217,140), null);


(lib.timerE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("אופס...נגמר הזמן", "bold 36px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 439;
	this.text.parent = this;
	this.text.setTransform(329,129.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAEDEF").s().p("EgrMAc1QiwAAh8hxQh8hyAAifMAAAgtlQAAifB8hyQB8hxCwAAMBWZAAAQCwAAB8BxQB8ByAACfMAAAAtlQAACfh8ByQh8BxiwAAg");
	this.shape.setTransform(318.9,184.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.timerE, new cjs.Rectangle(0,0,637.9,369), null);


(lib.TableLK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.table();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.642,0.63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TableLK, new cjs.Rectangle(0,0,810.9,419), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("בחר", "bold 17px 'Arial'", "#660000");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(52.5,2.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("ApZCgIAAk/IS0AAIAAE/g");
	this.shape.setTransform(52.5,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-7.7,-2.2,120.5,32), null);


(lib.stand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.759,0.756);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.stand, new cjs.Rectangle(0,0,825,569.2), null);


(lib.sitelink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("הפקולטה לטכנולוגיות למידה", "bold 18px 'Arial'", "#0033FF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 264;
	this.text.parent = this;
	this.text.setTransform(134.1,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(2,1,1).p("AwPAAMAgfAAA");
	this.shape.setTransform(134,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sitelink, new cjs.Rectangle(0,0,268.1,26.4), null);


(lib.PlayAgainLK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Again();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-36,147,72);


(lib.piano = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.piano2171142_1920();
	this.instance.parent = this;
	this.instance.setTransform(-437,-232,0.451,0.451);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.piano, new cjs.Rectangle(-437,-232,865.3,452.9), null);


(lib.odotP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.odotnew();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.23,1.22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.odotP, new cjs.Rectangle(0,0,589,344), null);


(lib.odotdy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("אודות", "20px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 128;
	this.text.parent = this;
	this.text.setTransform(65.8,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.odotdy, new cjs.Rectangle(0,0,131.5,56.6), null);


(lib.btnNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.next();
	this.instance.parent = this;
	this.instance.setTransform(-53,-11,0.775,0.775);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnNext, new cjs.Rectangle(-53,-11,105.4,55), null);


(lib.nevel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.harp195636_1920();
	this.instance.parent = this;
	this.instance.setTransform(-654,-945);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nevel, new cjs.Rectangle(-654,-945,1280,1920), null);


(lib.myTable2LK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smalltable();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.641,0.63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.myTable2LK, new cjs.Rectangle(0,0,607.5,419), null);


(lib.myCL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.clock2pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.109,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.myCL, new cjs.Rectangle(0,0,86.9,87.1), null);


(lib.myboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.note();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.203,0.166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.myboard, new cjs.Rectangle(0,0,260,141.4), null);


(lib.mylogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logoballoon();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.348,0.349);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mylogo, new cjs.Rectangle(0,0,79,53), null);


(lib.LassoLK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.LassoLK, null, null);


(lib.kav = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BBE0E3").ss(2,1,1).rr(-10.35,-97,20.7,194,5.5);
	this.shape.setTransform(6.9,92.2,0.667,0.951);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.kav, new cjs.Rectangle(-1,-1,15.8,186.5), null);


(lib.Hertzel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Altneuland();
	this.instance.parent = this;
	this.instance.setTransform(-212,-340);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hertzel, new cjs.Rectangle(-212,-340,420,682), null);


(lib.hand2LK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_1();
	this.instance.parent = this;
	this.instance.setTransform(-42,-30,0.288,0.288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand2LK, new cjs.Rectangle(-42,-30,36,59), null);


(lib.GoldaM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.President_of_Togo_Nicolas_Grunitzky_with_Levi_Eshkol_Golda_Meir_in_Israel_1964();
	this.instance.parent = this;
	this.instance.setTransform(-641,-428);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.GoldaM, new cjs.Rectangle(-641,-428,1280,857), null);


(lib.GoldaMeir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.golda();
	this.instance.parent = this;
	this.instance.setTransform(-220,-288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.GoldaMeir, new cjs.Rectangle(-220,-288,440,581), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AwMbkQE8gyEYieQEQiZDNjuQDOjvBvklQB0kxAAlIQAAlHh0kwQhvkmjOjvQjNjukQiZQkYiek8gyQCPgXCMAAQFtABFNCMQFACHD4D4QD4D3CIFAQCMFNAAFqQAAFriMFNQiIFAj4D3Qj4D4lACHQlNCMltAAQiMABiPgXg");
	this.shape.setTransform(103.7,178.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,207.5,357.3), null);


(lib.flags = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Flags();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.308,0.306);

	this.instance_1 = new lib.Flags();
	this.instance_1.parent = this;
	this.instance_1.setTransform(625,0,0.308,0.306);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flags, new cjs.Rectangle(0,0,745,33), null);


(lib.finishLK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Finished();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-35.5,151,71);


(lib.fill1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBE0E3").s().p("AhCAWIAAgsICFAAIAAAsg");
	this.shape.setTransform(-0.5,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BBE0E3").s().p("AhCAtIAAhZICFAAIAABZg");
	this.shape_1.setTransform(-0.5,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BBE0E3").s().p("AhCBDIAAiGICFAAIAACGg");
	this.shape_2.setTransform(-0.5,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BBE0E3").s().p("AhCBaIAAizICFAAIAACzg");
	this.shape_3.setTransform(-0.5,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BBE0E3").s().p("AhCBwIAAjgICFAAIAADgg");
	this.shape_4.setTransform(-0.5,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BBE0E3").s().p("AhCCHIAAkNICFAAIAAENg");
	this.shape_5.setTransform(-0.5,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BBE0E3").s().p("AhCCdIAAk6ICFAAIAAE6g");
	this.shape_6.setTransform(-0.5,-6.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BBE0E3").s().p("AhCC0IAAlnICFAAIAAFng");
	this.shape_7.setTransform(-0.5,-8.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BBE0E3").s().p("AhCDKIAAmUICFAAIAAGUg");
	this.shape_8.setTransform(-0.5,-11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BBE0E3").s().p("AhCDhIAAnBICFAAIAAHBg");
	this.shape_9.setTransform(-0.5,-13.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BBE0E3").s().p("AhCD3IAAnuICFAAIAAHug");
	this.shape_10.setTransform(-0.5,-15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BBE0E3").s().p("AhCEOIAAobICFAAIAAIbg");
	this.shape_11.setTransform(-0.5,-17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BBE0E3").s().p("AhCEkIAApIICFAAIAAJIg");
	this.shape_12.setTransform(-0.5,-20);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BBE0E3").s().p("AhCFAIAAp/ICFAAIAAJ/g");
	this.shape_13.setTransform(-0.5,-22.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BBE0E3").s().p("AhCFWIAAqsICFAAIAAKsg");
	this.shape_14.setTransform(-0.5,-25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BBE0E3").s().p("AhCFyIAArjICFAAIAALjg");
	this.shape_15.setTransform(-0.5,-27.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BBE0E3").s().p("AhCGIIAAsQICFAAIAAMQg");
	this.shape_16.setTransform(-0.5,-30);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BBE0E3").s().p("AhCGkIAAtHICFAAIAANHg");
	this.shape_17.setTransform(-0.5,-32.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BBE0E3").s().p("AhCG/IAAt9ICFAAIAAN9g");
	this.shape_18.setTransform(-0.5,-35.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BBE0E3").s().p("AhCHWIAAurICFAAIAAOrg");
	this.shape_19.setTransform(-0.5,-37.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BBE0E3").s().p("AhCHsIAAvXICFAAIAAPXg");
	this.shape_20.setTransform(-0.5,-40);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BBE0E3").s().p("AhCIDIAAwFICFAAIAAQFg");
	this.shape_21.setTransform(-0.5,-42.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BBE0E3").s().p("AhCIZIAAwxICFAAIAAQxg");
	this.shape_22.setTransform(-0.5,-44.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BBE0E3").s().p("AhCIwIAAxfICFAAIAARfg");
	this.shape_23.setTransform(-0.5,-46.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BBE0E3").s().p("AhCJGIAAyLICFAAIAASLg");
	this.shape_24.setTransform(-0.5,-49);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BBE0E3").s().p("AhCJdIAAy5ICFAAIAAS5g");
	this.shape_25.setTransform(-0.5,-51.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BBE0E3").s().p("AhCJzIAAzlICFAAIAATlg");
	this.shape_26.setTransform(-0.5,-53.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BBE0E3").s().p("AhCKFIAA0JICFAAIAAUJg");
	this.shape_27.setTransform(-0.5,-55.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BBE0E3").s().p("AhCKbIAA01ICFAAIAAU1g");
	this.shape_28.setTransform(-0.5,-57.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BBE0E3").s().p("AhCKyIAA1jICFAAIAAVjg");
	this.shape_29.setTransform(-0.5,-59.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BBE0E3").s().p("AhCLIIAA2PICFAAIAAWPg");
	this.shape_30.setTransform(-0.5,-62);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BBE0E3").s().p("AhCLfIAA29ICFAAIAAW9g");
	this.shape_31.setTransform(-0.5,-64.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BBE0E3").s().p("AhCMMIAA4XICFAAIAAYXg");
	this.shape_32.setTransform(-0.5,-68.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BBE0E3").s().p("AhCMiIAA5DICFAAIAAZDg");
	this.shape_33.setTransform(-0.5,-71);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BBE0E3").s().p("AhCM5IAA5xICFAAIAAZxg");
	this.shape_34.setTransform(-0.5,-73.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BBE0E3").s().p("AhCNPIAA6dICFAAIAAadg");
	this.shape_35.setTransform(-0.5,-75.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BBE0E3").s().p("AhCNmIAA7LICFAAIAAbLg");
	this.shape_36.setTransform(-0.5,-77.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BBE0E3").s().p("AhCN1IAA7pICFAAIAAbpg");
	this.shape_37.setTransform(-0.5,-79.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BBE0E3").s().p("AhCOJIAA8RICFAAIAAcRg");
	this.shape_38.setTransform(-0.5,-81.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BBE0E3").s().p("AhCOaIAA80ICFAAIAAc0g");
	this.shape_39.setTransform(-0.5,-83.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.no = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._false();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.no, new cjs.Rectangle(0,0,36,37), null);


(lib.EndWordsLK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.EndWordsLK, null, null);


(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.yes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.correct();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.yes, new cjs.Rectangle(0,0,35,36), null);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.boardmini = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak0E1IAAppIJpAAIAAJpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.boardmini, new cjs.Rectangle(-30.8,-30.8,61.8,61.8), null);


(lib.BenGurion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ben();
	this.instance.parent = this;
	this.instance.setTransform(-202,-254,0.44,0.423);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BenGurion, new cjs.Rectangle(-202,-254,395.8,507.8), null);


(lib.backg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.newback();
	this.instance.parent = this;
	this.instance.setTransform(-926,0,0.829,0.808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backg, new cjs.Rectangle(-926,0,960,620), null);


(lib.myb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap26();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.776,0.834);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.myb, new cjs.Rectangle(0,0,277,221), null);


(lib.axeLK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap29();
	this.instance.parent = this;
	this.instance.setTransform(-18.4,-13.1,0.393,0.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-13.1,36.9,26.2);


(lib.odotPLK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.odotP();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0,1,1,0,0,0,294.4,172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.odotPLK, new cjs.Rectangle(-294.9,-172,589,344), null);


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/myStyle.css'});

	this.instance.setTransform(111,-233.9,1,1,0,0,0,50,11);

	this.startbtn = new lib.Symbol1();
	this.startbtn.parent = this;
	this.startbtn.setTransform(-161.3,-185.6,1.035,1.293,0,0,0,52.4,17.1);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, יריד נגינה, 1, אישים ביריד, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(-162.7,-251.5,1.98,2.545,0,0,0,49.9,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-262.5,-280.7,424.1,111.6), null);


(lib.ballLK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(-444.9,-5.5,0.055,0.056,0,0,0,81.1,161.8);
	this.instance.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2380E5").s().p("Aq4ZuQlCiHj3j4Qj4j3iIlAQiNlNAAlrQAAlqCNlNQCIlAD4j3QD3j4FCiHQFMiMFsgBQFsABFNCMQFCCHD3D4QD5D3CIFAQCMFNAAFqQAAFriMFNQiIFAj5D3Qj3D4lCCHQlNCMlsAAQlsAAlMiMg");
	this.shape.setTransform(-447.9,-4.6,0.055,0.056);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ballLK, new cjs.Rectangle(-457.8,-14.6,20,20), null);


(lib.hand1LK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_58 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
		this.stop();
	}
	this.frame_79 = function() {
		this.stop();
	}
	this.frame_93 = function() {
		this.stop();
		this.stop();
	}
	this.frame_94 = function() {
		this.stop();
	}
	this.frame_107 = function() {
		this.stop();
	}
	this.frame_108 = function() {
		this.stop();
		this.stop();
	}
	this.frame_120 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(14).call(this.frame_29).wait(1).call(this.frame_30).wait(14).call(this.frame_44).wait(14).call(this.frame_58).wait(1).call(this.frame_59).wait(20).call(this.frame_79).wait(14).call(this.frame_93).wait(1).call(this.frame_94).wait(13).call(this.frame_107).wait(1).call(this.frame_108).wait(12).call(this.frame_120).wait(1));

	// hands
	this.instance = new lib.flash0ai();
	this.instance.parent = this;
	this.instance.setTransform(-42,-18,0.92,0.985);

	this.instance_1 = new lib.hand2LK();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.9,36.1,3,3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(57).to({_off:true},1).wait(1).to({_off:false},0).wait(17).to({_off:true},2).wait(1).to({_off:false},0).wait(41));

	// Layer 2
	this.instance_2 = new lib.ballLK();
	this.instance_2.parent = this;
	this.instance_2.setTransform(20.4,-3.6,1.766,1.843,0,0,0,-429.4,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:-447.9,regY:-4.6,x:-11.6,y:-98.2},0).wait(1).to({x:-11,y:-184.3},0).wait(1).to({x:-12.8,y:-225},0).wait(1).to({x:-18.7,y:-261.9},0).wait(1).to({x:-24.4,y:-313.1},0).wait(1).to({x:-38.6,y:-341.2},0).wait(1).to({x:-75.8,y:-353},0).wait(1).to({x:-122.7,y:-355.8},0).wait(1).to({x:-161.7,y:-346.7},0).wait(1).to({x:-195.3,y:-305.4},0).wait(1).to({x:-210.5,y:-244.4},0).wait(1).to({x:-212.1,y:-227},0).to({_off:true},1).wait(50).to({_off:false,regX:-429.4,regY:0.6,x:23.4,y:41.2},0).wait(1).to({regX:-447.9,regY:-4.6,x:-11.1,y:8.7},0).wait(1).to({x:-11.9,y:-24.2},0).wait(1).to({x:-12.3,y:-54.7},0).wait(1).to({x:-12.2,y:-82.1},0).wait(1).to({x:-18.4,y:-105.8},0).wait(1).to({x:-49.5,y:-113.5},0).wait(1).to({x:-79.8,y:-105},0).wait(1).to({x:-101.2,y:-81.2},0).wait(1).to({x:-116.7,y:-53.1},0).wait(1).to({x:-130,y:-23.8},0).wait(1).to({x:-142.5,y:5.8},0).wait(1).to({x:-154.7,y:35.5},0).wait(2).to({_off:true},1).wait(1).to({_off:false,regX:-426.9,regY:0.1,x:27.7,y:20.6},0).wait(1).to({regX:-447.9,regY:-4.6,x:-8.8,y:-25.8},0).wait(1).to({x:-4.8,y:-63.4},0).wait(1).to({x:-0.6,y:-101},0).wait(1).to({x:2.7,y:-138.7},0).wait(1).to({x:3.4,y:-176.6},0).wait(1).to({x:-1.1,y:-214.2},0).wait(1).to({x:-16.9,y:-248.1},0).wait(1).to({x:-45.6,y:-272.2},0).wait(1).to({x:-80.4,y:-285.9},0).wait(1).to({x:-116.1,y:-275.8},0).wait(1).to({x:-143.1,y:-249.1},0).wait(1).to({x:-161.2,y:-216.5},0).to({_off:true},1).wait(28));

	// hands
	this.instance_3 = new lib.ballLK();
	this.instance_3.parent = this;
	this.instance_3.setTransform(33.6,51,1.766,1.843,0,0,0,-443.7,0.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({_off:false},0).wait(1).to({regX:-447.9,regY:-4.6,x:24.5,y:6.4},0).wait(1).to({x:26.7,y:-32.4},0).wait(1).to({x:26.3,y:-54.3},0).wait(1).to({x:26.9,y:-95.4},0).wait(1).to({x:26.6,y:-130.6},0).wait(1).to({x:25.1,y:-165.6},0).wait(1).to({x:21.5,y:-199.9},0).wait(1).to({x:13.4,y:-233.1},0).wait(1).to({x:-10.8,y:-256.3},0).wait(1).to({x:-45.7,y:-256.4},0).wait(1).to({x:-77,y:-238.8},0).wait(1).to({x:-96.6,y:-214.6},0).to({_off:true},1).wait(1).to({_off:false,regX:-443.4,regY:0.2,x:-86.1,y:-188.9},0).wait(1).to({regX:-447.9,regY:-4.6,x:-94,y:-197.7},0).wait(1).to({regX:-437.6,regY:-4.8,x:10.6,y:-27.7},0).wait(1).to({regX:-447.9,regY:-4.6,x:-8.9,y:-50},0).wait(1).to({x:-9.6,y:-77.2},0).wait(1).to({x:-9.5,y:-102.8},0).wait(1).to({x:-8.4,y:-128.3},0).wait(1).to({x:-6.2,y:-153.6},0).wait(1).to({x:-2.3,y:-178.7},0).wait(1).to({x:4.4,y:-203.1},0).wait(1).to({x:14.5,y:-226.6},0).wait(1).to({x:32.7,y:-240.7},0).wait(1).to({x:59.3,y:-235.7},0).wait(1).to({x:74.7,y:-213.6},0).to({_off:true},1).wait(1).to({_off:false,regX:-429.4,regY:-0.5,x:20.4,y:-0.9},0).wait(1).to({regX:-447.9,regY:-4.6,x:-14.1,y:-45.1},0).wait(1).to({x:-12.1,y:-76.3},0).wait(1).to({x:-6.3,y:-123.2},0).wait(1).to({x:-0.1,y:-163.3},0).wait(1).to({x:8.7,y:-200},0).wait(1).to({x:24.2,y:-237.4},0).wait(1).to({x:41.2,y:-263.9},0).wait(1).to({x:76.2,y:-290.4},0).wait(1).to({x:109.3,y:-294},0).wait(1).to({x:149,y:-279.5},0).wait(1).to({x:173.8,y:-247},0).wait(1).to({x:182.3,y:-213.8},0).to({_off:true},1).wait(36).to({_off:false,regX:-443.3,regY:0.6,x:17.1,y:62.3},0).wait(1).to({regX:-447.9,regY:-4.6,x:7.2,y:18},0).wait(1).to({x:9.4,y:-20.2},0).wait(1).to({x:8.6,y:-41.8},0).wait(1).to({x:7.2,y:-82},0).wait(1).to({x:6.2,y:-116.6},0).wait(1).to({x:5,y:-150.9},0).wait(1).to({x:3.8,y:-185.3},0).wait(1).to({x:2.4,y:-219.8},0).wait(1).to({x:0.4,y:-258},0).wait(1).to({x:-7.1,y:-284.7},0).wait(1).to({x:-18.1,y:-250.5},0).wait(1).to({x:-22.1,y:-219.6},0).to({_off:true},1).wait(1).to({_off:false,regX:-437.6,regY:-4.8,x:10.6,y:-27.7},0).wait(1).to({regX:-447.9,regY:-4.6,x:-11.8,y:-53.7},0).wait(1).to({x:-15.1,y:-81.5},0).wait(1).to({x:-17.2,y:-108.9},0).wait(1).to({x:-17.9,y:-136.4},0).wait(1).to({x:-16.5,y:-164},0).wait(1).to({x:-11.8,y:-191.2},0).wait(1).to({x:-1.8,y:-218.8},0).wait(1).to({x:13.1,y:-241.2},0).wait(1).to({x:35.8,y:-251.7},0).wait(1).to({x:75.6,y:-246.5},0).wait(1).to({x:99.8,y:-214.7},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-18,104.9,135.9);


// stage content:
(lib._4218 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var selfHome = this;
		
		
		init();
		
		function init() {
			createjs.Sound.registerSound({id:"YES", src:"sounds/yesSound.mp3"});
			createjs.Sound.registerSound({id:"NO", src:"sounds/noSounds.mp3"});
		}
		
		function pressOdot() { //לחיצה על אודות
		
			var myodot = new lib.odotPLK(); //הצגת חלונית האודות
			myodot.x = 460;
			myodot.y = 280;
			myodot.name = "myodoti";
			stage.addChild(myodot);
		
			var site1 = new lib.sitelink(); //קישור לאתר הפקולטה
			site1.x = 315;
			site1.y = 357;
			site1.name = "site";
			stage.addChild(site1);
		
			site1.addEventListener("click", fl_ClickToGoToWebPage);
			site1.addEventListener('mouseover', myClick_mouseover); //שינוי סמן
		
			var myaxe = new lib.axeLK(); //איקס לסגירת האודות
			myaxe.x = -273;
			myaxe.y = -155;
			myaxe.name = "myaxi";
			myodot.addChild(myaxe);
			myaxe.addEventListener("click", pressAxe);
			myaxe.addEventListener('mouseover', myClick_mouseover);
		
			var txt = answers[qnum][rnd][rnd1];
			if (typeof txt != 'string') { //במידה והאודות מופעל בזמן המשחק והייתה תמונה בהגדלה היא תחזור לגודלה המקורי
		
				myExit();
			}
		}
		function fl_ClickToGoToWebPage() {
			window.open("http://www.hit.ac.il/telem/overview", "_blank");
		}
		
		function pressAxe() { ///איקס' סגירת אודות
			toRemove("myaxi");
			toRemove("myodoti");
			toRemove("site");
		
		}
		
		
		
		
		var myBtns = [ //מערך לקטגוריות
			["נשיפה", "הקשה", "מיתר", "קלידים"],
			["דוד בן גוריון", "זאב תאודור הרצל", "גודלה מאיר"]
		];
		var timer = ""; //משתנה  לסכימת הזמן
		var txt; //משתנה גלובלי למסיח המוגרל
		var timeCount = 0; //משתנה לסכימת הזמן
		
		
		selfHome.myCL.visible = false;
		selfHome.board1.alpha = 0;
		
		var backfirst = new lib.backg();
		backfirst.name = "backf";
		backfirst.x = 925;
		backfirst.y = 0;
		stage.addChild(backfirst); //הוספת הרקע במסך הכניסה
		stage.addChildAt((stage.getChildByName("backf")), stage.getNumChildren() + 1);
		
		var odot1 = new lib.odotdy(); //כפתור האודות
		odot1.name = "odot1";
		odot1.x = 7;
		odot1.y = 10;
		stage.addChild(odot1);
		odot1.addEventListener('mouseover', myClick_mouseover); //שינוי סמן
		
		odot1.addEventListener("click", pressOdot); //לחיצה על אודות תפתח את חלון האודות
		
		var logo1 = new lib.mylogo(); //הוספת הלוגו לבמה
		logo1.name = "logo";
		logo1.x = 870;
		logo1.y = 3;
		stage.addChild(logo1);
		
		logo1.addEventListener("click", home);
		logo1.addEventListener('mouseover', myClick_mouseover);
		var myScore = [ //מערך לשמירת מספר ניסניונות מענה לשם חישוב הציון הסופי בהמשך
			[
				[],
				[],
				[],
				[]
			],
			[
				[],
				[],
				[],
				[]
			]
		];
		var yesno = [ //מערך לבדיקה האם המסיח נענה בצורה נכונה או לא
			[
				[],
				[],
				[],
				[]
			],
			[
				[],
				[],
				[],
				[]
			]
		];
		var answers = [ //מערך דו ממדי למסיחים
			[
				["חצוצרה", "סקסופון", "חלילית", "חליל צד", "שופר"],
				["דרבוקה", "מצלתיים", "משולש", "קלימבה", "סטיל דראם"],
				["גיטרה", lib.nevel, "קונטרבס", "יוקלייליי", "ציטר"],
				["אורגנית", lib.piano, "פסנתר", "עוגב", "מלודיקה"]
			],
			[
				["אנו מכריזים בזאת על הקמת מדינה יהודית בארץ ישראל, היא מדינת ישראל", "אבי הפיתוח הגרעיני של ישראל", "עתיד היישוב היהודי בארץ הוא בנגב", "ראש הממשלה הראשון", lib.BenGurion],
				["אם תרצו אין זו אגדה", "חוזה מדינת ישראל", "אוגנדה", lib.Hertzel, "בבאזל ייסדתי את מדינת היהודים"],
				["ראש הממשלה במלחמת יום הכיפורים", "עיר הלידה: קייב", lib.GoldaMeir, lib.GoldaM, "חוק עבודת הנוער"]
		
			]
		];
		var mychoice = 0;
		var qnum = 0; //מספר המשחק הנבחר
		//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
		var forcombo = new lib.forcomb(); //קומפוננטות לבחירת המשחק במסך הפתיחה
		forcombo.x = 645;
		forcombo.y = 490;
		forcombo.name = "myCombo";
		stage.addChild(forcombo);
		forcombo.startbtn.alpha = 0.3;
		
		//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
		$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
		//בעת שינוי ערך בקומבו
		function mycb_change(evt) {
		
			console.log(evt.currentTarget.value);
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				forcombo.startbtn.alpha = 0.3;
				forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
			}
			if (mychoice == 1) {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				forcombo.startbtn.alpha = 1;
				qnum = 0;
				for (i = 0; i < myBtns[qnum].length; i++) {
		
				}
				forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
		
			}
			if (mychoice == 2) {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				forcombo.startbtn.alpha = 1;
				qnum = 1;
				for (i = 0; i < myBtns[qnum].length; i++) {
		
				}
				forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
		
			}
		
		}
		
		//לחיצה על בחר
		function fl_ClickToPosition() {
			create2();
			create();
		
			toRemove("myCombo");
			toRemove("backf");
			console.log(qnum);
		
		}
		toRemove("txtquestion");
		var rnd = 0; //הגרלה של הקטגוריה
		var rnd1 = 0; //הגרלה של מסיח התוך הקטגוריה 
		
		
		
		function create2() { //פונקציה המפעילה את המשתנים שאינם משתנים מתחילת המשחק שנבחר ועד לסיום מענה המסיחים, הכוללת את הפחיות, הקטגוריות עליהם
			selfHome.stand.visible = true; //הצגת הדוכן
			selfHome.fill.visible = true; //מד הצלחה
			selfHome.kav.visible = true; //קו מתאר להצלחה
			selfHome.flags.visible = true; //דגלים על הדוכן לקישוט
			selfHome.myCL.visible = true; //שעון
			selfHome.GameName.visible = true; //שם המשחק
			selfHome.board1.alpha = 1; //לוח לכתיבת מסיחים
			for (var i = 0; i < myBtns[qnum].length; i++) { //העלאת הפחיות לבמה
				var btn = new lib.myb();
				if (myBtns[qnum].length == 4) { //מיקום בהתאם למשחק שנבחר האם 4 פחיות או 3
					btn.x = i * 130 + 135;
					btn.y = 230;
				} else {
					btn.x = i * 130 + 202;
					btn.y = 230;
		
				}
				btn.name = "btn" + i;
				stage.addChild(btn);
		
				var mybtnstext = myBtns[qnum][i].split(" "); //כתיבת הטקסט על הפחיות
				var output = new createjs.Text();
				output.color = "black";
				if (mybtnstext.length > 1) { //תנאי לכתיבת הטקסט אם יש יותר מילה אחת
					for (a = 0; a < mybtnstext.length; a++) {
						if (a == 0) {
							output.text = mybtnstext[0];
						}
						if ((mybtnstext[a].length > 2) && (a != 0)) { //ירידת שורה לאחר מילה אחת במידה ואורך המילה גדול מ 2 תווים, אחרת המילה תכתב יחד עם המילה הראשונה
							output.text += "\n" + mybtnstext[a];
						}
						if ((mybtnstext[a].length < 3) && (a != 0)) {
							output.text += " " + mybtnstext[a];
						}
					}
				} else {
					output.text = mybtnstext;
				}
		
		
				output.name = "t" + i;
				if (myBtns[qnum].length == 4) { //מיקום הטקסט בהתאם לכמות הפחיות
					output.x += 160;
					output.y += 100;
					output.font = "18pt Arial";
		
				}
				if (myBtns[qnum].length == 3) {
					output.x += 175;
					output.y += 85;
					output.font = "15pt Arial";
		
				}
				output.textAlign = "right";
				btn.addChild(output);
		
		
				btn.addEventListener('click', myClick);
				btn.addEventListener('mouseover', myClick_mouseover);
			}
		
		
			if (myBtns[qnum].length == 4) { //כותרת למשחק בהתאם למשחק שנבחר (מנגינת היריד בעל 4 קטגוריות)
				selfHome.GameName.text = "מנגינת היריד";
		
			}
			if (myBtns[qnum].length == 3) { //אישים ביריד בעל 3 קטגוריות
				selfHome.GameName.text = "אישים ביריד";
		
			}
		}
		function create() { //פונקציה למשתנים המשתנים במהלך המשחק, מסיחים רנדומליים ושעון
		
		
			toRemove("txtquestion");
		
			selfHome.what.text = "לחץ על הקטגוריה המתאימה למופיע על הלוח"; //הנחייה למשחק
		
			rnd = Math.floor((Math.random() * answers[qnum].length)); //בחירה רנדומלית של קטגוריה מתוך המשחק שנבחר
			rnd1 = Math.floor((Math.random() * answers[qnum][rnd].length)); //בחירה רנדומלית של מסיח מתוך הקטגוריה
			var txt = answers[qnum][rnd][rnd1]; //משתנה למסיח הנבחר בצורה רנדומלית מתוך מערך המסיחים
			var txt0 = yesno[qnum][rnd][rnd1]; //משתנה למיקום של המסיח הנבחר בתוך מערך שישמור האם התשובה נענה בצורה נכונה או שלא
		
			if (txt0 != true) { //בדיקת המערך האם באותו המיקום המוגרל התשובה נענתה  בצורה נכונה, אם לא ניתן להעלות את המסיח
		
				if (typeof txt === 'string') { //במידה והמסיח שהוגרל מסוג טקסט
					selfHome.board1.alpha = 1;
		
		
					var txtq1 = new createjs.Text(); //טקסט המסיח
					txtq1.color = "black";
					txtq1.font = "18pt Arial";
		
					var txtq = txt.split(" ");
					txtq1.textAlign = "right";
					txtq1.text = "";
					txtq1.name = "txtquestion";
					if (txtq.length == 1) { //מיקום המסיח בהתאם לכמות המילים
						txtq1.x = 515;
					}
					if (txtq.length == 2) { //מיקום המסיח בהתאם לכמות המילים
						txtq1.x = 530;
					}
		
					txtq1.y = 155;
					if (txtq.length > 2) { //כתיבת המסיח בהתאם למספר המילים
						txtq1.x = 575;
						txtq1.textAlign = "right";
						txtq1.font = "14pt Arial";
						var tavim5 = 0;
						var tavim4 = 0;
		
						if (txtq.length > 3) {
							for (a = 1; a <= 5; a++) {
								tavim5 += txtq[a - 1].length;
		
							}
							for (a = 1; a <= 4; a++) {
		
								tavim4 += txtq[a - 1].length;
							}
						}
						console.log("tavim4" + " " + tavim4);
						for (a = 1; a <= txtq.length; a++) {
		
							txtq1.text += txtq[a - 1] + " ";
							if ((tavim5 < 17) && (a % 3 == 0)) { //אם פחות מ 15 תווים ב5 מילים לא יורדים שורה
								txtq1.text += "";
							} else if (tavim4 > 16 && (tavim5 > 15) && (a % 3 == 0)) { //אם יותר מ 15 מילים ב 5 מילים יורדים שורה אחרי 3 מילים
								txtq1.text += "\n";
							} else if ((tavim4 < 17) && (tavim5 > 16) && (a % 4 == 0)) { //אם יותר מ15 תווים ב 5 מילים, פחות מ 16 תווים ב 4 מילים ומתחלק ב 4- ירידת שורה
								txtq1.text += "\n";
								txtq1.y = 150;
							}
							if ((a % 5 == 0) && (tavim5 < 16)) {
								txtq1.text += "\n"; //מספר תווים מקסימלי בשורה יכלול 5 מילים ו15 תווים
							}
						}
		
		
		
		
					} else {
						txtq1.text = txt;
		
					}
		
		
		
					stage.addChild(txtq1); //הוספת הטקסט לבמה על הפתק
		
		
		
		
					selfHome.timer1.text = "20"; //הזמן למסיח הינו 20 שניות, לכל מסיח ינתנו 20 שניות למענה
				} else { //במידה והמסיח מסוג תמונה
					selfHome.timer1.text = "20";
					selfHome.board1.alpha = 0;
		
					var whiteB = new lib.board2; //הוספת הלוח שעליו תתווספף התמונה
					whiteB.x = 475;
					whiteB.y = 180;
					whiteB.name = "boardW2";
		
					//הבאת תמונה מהספריה שתשב בתוך המסגרת
					var pic = new txt();
		
					//יצירת משתנה שהערך שלו יהיה זה שלפיו יישתנה גודל התמונה
					var scaleValue = 0;
		
					//מציאת הערך שלפיו נשנה את גודל התמונה בעזרת פונקציה ושינוי הגודל
		
					scaleValue = resizeImage(whiteB, pic);
		
					pic.scaleX = scaleValue;
					pic.scaleY = scaleValue;
		
					stage.addChild(whiteB);
					whiteB.addChild(pic);
					whiteB.addEventListener('click', zoom);
					whiteB.addEventListener('mouseover', myClick_mouseover);
		
					selfHome.direc.text = "להגדלה לחצו על התמונה";
		
				}
		
				timer = setInterval(function () { //טיימר לחישוב 20 השניות למסיח
					//הקטנת התוכן של תיבת הטקסט באחד
					selfHome.timer1.text = parseInt(selfHome.timer1.text) - 1;
		
					if (selfHome.timer1.text == 0) { //אם הזמן נגמר
						clearInterval(timer);
						selfHome.timer1.text = "";
						selfHome.what.text = "";
						var endT = new lib.timerE();
						endT.x = 140;
						endT.y = 120;
						endT.name = "timerEnd";
						stage.addChild(endT);
						myExit();//במידה והתמונה מוגדלת להחזירה לגודל המקורי
						var next = new lib.btnNext(); //כפתור לשאלה הבאה
						next.x = 470;
						next.y = 360;
						next.name = "nextQ";
						stage.addChild(next);
						next.addEventListener('click', myNext);
						timeCount += 20;
						toRemove("handN");
					}
		
		
				}, 1000); //הקטנת הזמן בשנייה כל פעם
				var hand1 = new lib.hand1LK(); //הוספת היד שאוחזת בכדור, לאחר מענה תהיה האנימציה
				hand1.x = 475;
				hand1.y = 470;
		
				hand1.name = "handN";
				stage.addChild(hand1);
				hand1.gotoAndStop(0);
			} else {
				create();
			}
		
			console.log(answers[qnum][rnd][rnd1]);
		
		
			console.log(rnd, rnd1);
		
		}
		function resizeImage(box, content) { //פונקציה להתאמת התמונה ללוח בתוכו היא תהיה
		
			//משתנים לגבולות של המסגרת והתוכן
			var boxBounds = box.nominalBounds;
			var contentBounds = content.nominalBounds;
		
			//מציאת הערך לפיו יש לשנות את גודל התמונה בהתאם לכיוון התמונה- לאורך או לרוחב
			var toScale = 0;
			if (boxBounds.height / contentBounds.height < boxBounds.width / contentBounds.width) {
				toScale = boxBounds.height / contentBounds.height;
			} else {
				toScale = boxBounds.width / contentBounds.width;
			}
			return toScale;
		}
		function zoom() { //הגדלת התמונה במידה והמסיח הוא תמונה
		
			var myBoard = stage.getChildByName("boardW2");
		
			myBoard.scaleX = 1.4;
			myBoard.scaleY = 1.4;
			myBoard.y -= 15;
			var exit = new lib.exitPic(); //הוספת איקס שיאפשר להחזיר את התמונה לגודל המקורי
			exit.name = "exit1";
			exit.x = 315;
			exit.y = 66;
			stage.addChild(exit);
			exit.addEventListener('click', myExit);
			exit.addEventListener('mouseover', myClick_mouseover);
		
			selfHome.direc.text = "";
		
			myBoard.removeEventListener('click', zoom); //לאחר הגדלה הסרת האפרות להגדלה
		
		
		
		}
		function myExit() { //פונקצית ה'איקס' שמופיע לאחר לחיצה על אודות, מאפשר סגירה
			var myBoard = stage.getChildByName("boardW2");
			var exit2 = stage.getChildByName("exit1");
			selfHome.direc.text = "להגדלה לחצו על התמונה";
		
			myBoard.x = 475;
			myBoard.y = 180;
		
		
			myBoard.scaleX = 1;
			myBoard.scaleY = 1;
			stage.removeChild(exit2);
			myBoard.addEventListener('click', zoom);
		
		}
		function myClick(event) { //פונצקיה המופעלת בכל לחיצה על קטגוריה נבחרת על הפחית
		
			var txt = answers[qnum][rnd][rnd1];
			var myBoard = stage.getChildByName("boardW2");
			var myexit = stage.getChildByName("exit1");
		
			if (typeof txt != 'string') {
				myBoard.removeEventListener('click', zoom); //הסרת האפשרות להגדלת מסיח במידה והוא תמונה לאחר מענה
				if (myBoard.scaleX == 1.4) { //במידה והתמונה מוגדלת לא ניתן יהיה להקטין אותה חזרה והיא תשאר
					myexit.removeEventListener('click', myExit);
				}
				selfHome.direc.text = "";
		
				myBoard.removeEventListener('click', zoom)
			}
			timeCount += 20 - selfHome.timer1.text; //הוספת הזמן שלקח למענה למשתנה הסוכם את הזמן
			selfHome.direc.text = ""; //הסרת ההנחייה לאחר מענה
			var counter = 1; //משתנה שיסכום את מספר הפעמים שלקח למשתמש לענות על כל מסיח לשם חישוב ציון סופי בסוף המשחק
			if (myScore[qnum][rnd][rnd1] >= 1) { //במידה והיה מענה אחד הוספת 1 כלומר ניסיון נוסף
				var newS = myScore[qnum][rnd][rnd1] + counter;
				myScore[qnum][rnd][rnd1] = newS;
			} else { //במידה וזהו הניסיון הראשון למענה השמת המספר 1 במערך 
				myScore[qnum][rnd][rnd1] = counter;
			}
			console.log(myScore + "ציון");
			clearInterval(timer);
		
		
			var num = parseInt(event.currentTarget.name.slice(3)); //מספר הפחית
			var handi = stage.getChildByName("handN");
		
			if (num == rnd) { //במידה והתשובה נכונה
				setTimeout(function () {
					var instance = createjs.Sound.play("YES"); //צליל משוב של הצלחה
		
				}, 500);
				var yes = new lib.yes(); //וי ירוק המסמן הצלחה
				yes.x = event.currentTarget.x + 125;
				yes.y = event.currentTarget.y + 47;
				yes.name = "correct";
		
				stage.addChild(yes);
		
				yesno[qnum][rnd][rnd1] = true; //שמירה במערך הבודק אם התשובה נענתה בצורה נכונה, שאכן התשובה נכונה
				console.log(answers[qnum]);
				console.log(event.currentTarget.name);
				if (myBtns[qnum].length == 4) { //אנימציות למשחק בעל 4 קטגוריות
					if (num == 0) { //אנימציה בהתאם למספר הפחית שנבחרה
						handi.gotoAndPlay(1);
		
					} else if (num == 1) {
						handi.gotoAndPlay(17); //הפנייה לפריים שבו מתרחשת האנימציה המתאימה לאותה הפחית
					} else if (num == 2) {
						handi.gotoAndPlay(31);
		
		
					} else if (num == 3) {
						handi.gotoAndPlay(47);
		
					}
				}
				if (myBtns[qnum].length == 3) { //אנימציות למשחק בעל 3 קטגוריות
					if (num == 0) { //אם הפחית שניבחרה היא הפחית הראשונה אז תעשה את האנימציה במיקום לפי הפחית
						handi.gotoAndPlay(81);
		
					} else if (num == 1) {
						handi.gotoAndPlay(95);
		
						stage.addChildAt((stage.getChildByName("handN")), stage.getNumChildren() - 1);
					} else if (num == 2) {
						handi.gotoAndPlay(109);
		
		
					}
				}
				var myAsum = 0; //משתנה לסכימת סך המסיחים הקיימים במשחק
				for (i = 0; i < myBtns[qnum].length; i++) {
		
					myAsum += answers[qnum][i].length;
		
				}
				var myframe = 40 / myAsum; //עלייה במד בהתאם לכמות המסיחים שיש במשחק, חלקי מספר הפריים שיש למד
				var newF = 0;
				newF = selfHome.fill.currentFrame + myframe; //אם התשובה נכונה עלייה במד מהפריים הנוכחי שבו נמצא המד
		
				if (newF < 40 && newF > 39) { //במידה והפריים אינו עגול ומתקרב לסוף, עיגול הפריים
					newF = Math.round(newF);
				}
				selfHome.fill.gotoAndStop(newF);
				console.log(newF + "הפריים");
		
			} else { //במידה והקטגוריה שנבחרה אינה נכונה
				handi.gotoAndPlay(62); //הפעלת האנימציה מתאימה
				setTimeout(function () { //הפעלת הצליל המתאים למשוב לאי הצלחה
					var instance = createjs.Sound.play("NO");
				}, 890);
				var no = new lib.no(); //איקס אדום כמשוב לתשובה לא נכונה
				no.x = event.currentTarget.x + 125;
				no.y = event.currentTarget.y + 47;
				no.name = "false1";
				stage.addChild(no);
		
			}
		
			setTimeout(function () { //לאחר שנייה הסרת היד מהבמה והצגת כפתור המשך לשאלה הבאה
				var next = new lib.btnNext();
				next.x = 470;
				next.y = 480;
				next.name = "nextQ";
				stage.addChild(next);
				next.addEventListener('click', myNext);
				next.addEventListener('mouseover', myClick_mouseover);
		
				toRemove("handN");
			}, 1000);
		
		
			for (var i = 0; i < myBtns[qnum].length; i++) { //לאחר מענה הסרת האפשרות ללחוץ על הפחיות
				stage.getChildByName("btn" + i).removeEventListener('click', myClick);
			}
		
		
		}
		function myNext() { //מעבר לשאלה הבאה
		
			toRemove("correct");
			toRemove("false1");
			toRemove("timerEnd");
			if (typeof txt != 'string') {
				toRemove("pic");
				toRemove("boardW2");
				toRemove("exit1");
				selfHome.direc.text = "";
				toRemove("nextQ");
		
			}
			var check = true;
		
			for (i = 0; i < myBtns[qnum].length; i++) { //בדיקה אם כל התשובות נענו בצורה נכונה
				if (answers[qnum][i].length == yesno[qnum][i].length) {
					for (n = 0; n < answers[qnum][i].length; n++) {
						if (yesno[qnum][i][n] != true) {
							check = false;
						}
		
		
					}
				} else {
					check = false;
				}
		
			}
		
		
			if (check == true) { //אם כל התשובות נענו בצורה נכונה המשחק נגמר
		
		
				end();
				table();
			} else { //אם לא כל התשובות נענו נכון, המשך לשאלה הבאה
				create();
				for (var i = 0; i < myBtns[qnum].length; i++) {
					stage.getChildByName("btn" + i).addEventListener('click', myClick);
				}
		
			}
		}
		
		
		
		function toRemove(thing) { //פונקציה להסרת אלמנטים דינמיים מהבמה
			var toRemove = stage.getChildByName(thing);
			stage.removeChild(toRemove);
		}
		function end() { //מופעלת בסיום המשחק
		
			selfHome.direc.text = ""; //הסרת ההנחייה מהבמה
			var countEnd = 0;
			//	var lengthArray=0;
			var myAsum = 0;
			for (i = 0; i < myBtns[qnum].length; i++) {
		
				myAsum += answers[qnum][i].length;
		
			}
			for (i = 0; i < myBtns[qnum].length; i++) { //סכימת הציון בהתאם למספר ניסיונות המענה לכל שאלה
		
				for (a = 0; a < myScore[qnum][i].length; a++) {
					countEnd += 100 / (myAsum * (myScore[qnum][i][a]));
		
				}
		
			}
			clearInterval(timer); //הסרת האינרוול
			selfHome.stand.visible = false;
			selfHome.fill.visible = false;
			selfHome.kav.visible = false;
			selfHome.flags.visible = false;
			selfHome.myCL.visible = false;
			selfHome.GameName.visible = false;
			var gameover = new createjs.Text(); //כיתוב לסיום המשחק הנוכחי בהתאם למשחק שנבחר
			gameover.color = "black";
			gameover.font = "22pt Arial";
			if (myBtns[qnum].length == 4) {
				gameover.text = "!סיימת את המשחק מנגינת היריד";
		
			}
			if (myBtns[qnum].length == 3) {
				gameover.text = "!סיימת את המשחק אישים ביריד";
		
			}
		
			var cocavit = new createjs.Text(); //הסבר לכוכבית המופיעה במידה והתשובה נענה ביותר מניסיון אחד והנחייה שניתן לעבור על התמונה שמופיעה בטבלה להגדלה
			cocavit.color = "black";
			cocavit.font = "12pt Arial";
			cocavit.text = "מענה לאחר יותר מניסיון אחד | ניתן להגדיל את התמונה במעבר עכבר";
			cocavit.name = "coca";
			if (myBtns[qnum].length == 4) { //מיקום הטקסט בהתאם למשחק הנבחר לפני מספר הקטגוריות בו
				cocavit.x = 885;
			} else {
				cocavit.x = 780;
			}
			cocavit.y = 97;
			cocavit.textAlign = "right";
			stage.addChild(cocavit);
		
			var cocavit2 = new createjs.Text(); //הכוכבית שמופיעה בהסבר
			cocavit2.color = "red";
			cocavit2.font = "14pt Arial";
			cocavit2.text = " * ";
			cocavit2.name = "coca2";
			if (myBtns[qnum].length == 4) {
				cocavit2.x = 900;
			} else {
				cocavit2.x = 795;
			}
			cocavit2.y = 97;
			cocavit2.textAlign = "right";
			stage.addChild(cocavit2);
		
			gameover.name = "finish"; //הוספת לבמה של הטקסט הכותרת בסוף המשחק
			gameover.x = 315;
			gameover.y = 25;
			stage.addChild(gameover);
		
			var gamescore = new createjs.Text(); //טקסט לציון שקיבל המשתמש במשחק
			gamescore.color = "black";
			gamescore.font = "22pt Arial";
			gamescore.text = "הציון " + Math.round(countEnd); //עיגול המספר המתקבל בציון כך שיוצג מספר עגול
			gamescore.x = 620;
			gamescore.y = 60;
			gamescore.name = "gamescore";
			stage.addChild(gamescore); //הוספת טקסט הציון לבמה
		
			var gamelong = new createjs.Text(); //משך הזמן לקח למשתמש
			gamelong.color = "black";
			gamelong.font = "22pt Arial";
			var mintutesfirst = (timeCount / 60).toString(); //משתנה לדקות
			var minutes = mintutesfirst.slice(0, 1); //חלוקת הזמן מהמשתנה שסכמנו וחילקנו ב 60 ולקיחת הדקות בלבד
			var secondes = timeCount;
			if (timeCount > 60) { //אם הזמן שלקח מעל דקה החסרה כך שיקבלו השניות
				var secondes = timeCount - (60 * parseInt(minutes));
			}
			gamelong.text = "בזמן של " + " " + "0" + minutes + ":" + secondes; //טקסט המציג את הזמן
			if (secondes < 10) { //אם מספר השניות קטן מ10 הוספת 0 לפני
				gamelong.text = "בזמן של " + " " + "0" + minutes + ":" + "0" + secondes;
		
			}
			if (secondes == 60) {
				gamelong.text = "בזמן של " + " " + "0" + minutes + ":" + "00";
		
			}
			gamelong.name = "gamelong";
			gamelong.x = 270;
			gamelong.y = 60;
			stage.addChild(gamelong); //הוספת הזמן לבמה
		
		
			selfHome.what.text = ""; //הסרת ההנחייה של המשחק
		
			selfHome.board1.alpha = 0; //הסרת הלוח 
			toRemove("txtquestion");
		
			for (i = 0; i < myBtns[qnum].length; i++) { //הסרת הפחיות מהבמה
				toRemove("btn" + i);
				toRemove("t" + i);
		
			}
		
			selfHome.timer1.text = ""; //הסרת הזמן שנספר בשעון מהבמה
		
		}
		
		function table() { //יצירת טבלה מסכמת
			if (myBtns[qnum].length == 4) { //במידה והמשחק בעל 4 קטגוריות טבלה בעלת 4 עמודות
		
				var table1 = new lib.TableLK();
				table1.x = 80;
				table1.y = 115;
				table1.name = "myTable";
		
				stage.addChild(table1);
		
		
			}
			if (myBtns[qnum].length == 3) { //במידה והמשחק בעל 4 קטגוריות טבלה בעלת 3 עמודות
		
				var table2 = new lib.myTable2LK();
				table2.x = 180;
				table2.y = 115;
				table2.name = "myTable2";
		
				stage.addChild(table2);
			}
		
			var myAgain = new lib.PlayAgainLK(); //כפתור ,לשחק מחדש, באותו המשחק
			myAgain.x = 620;
			myAgain.y = 575;
			myAgain.name = "myagaink";
			stage.addChild(myAgain);
			myAgain.addEventListener("click", startOver);
			myAgain.addEventListener('mouseover', myClick_mouseover);
		
		
			var myfinish = new lib.finishLK(); //כפתור סיום וחזרה למשחק ההתחלתי
			myfinish.x = 370;
			myfinish.y = 575;
			myfinish.name = "myfinishk";
			stage.addChild(myfinish);
		
			myfinish.addEventListener("click", home);
			myfinish.addEventListener('mouseover', myClick_mouseover);
		
		
			for (i = 0; i < myBtns[qnum].length; i++) { //השורה הראשונה בטבלה המציגה את הקטגוריות
				var output = new createjs.Text();
				output.color = "black";
				output.font = "14pt Arial";
		
				var tabletitle = myBtns[qnum][i].split(" ");
		
				if (tabletitle.length > 1) { //במידה וכמות המילים בקטגוריה גדולה מ 1
					tabletitle.textAlign = "right";
					for (a = 1; a <= tabletitle.length; a++) {
						if (a != 1) {
							output.text += tabletitle[a - 1] + " ";
						}
						if (a == 1) {
							output.text = tabletitle[a - 1] + " ";
						}
						if (a % 4 == 0) {
							output.text += "\n";
						}
		
					}
				} else { //במידה וישנה מילה אחת בקטגוריה
					output.text = tabletitle;
				}
				output.name = "tt" + i;
				if (myBtns[qnum].length == 4) { //מיקום הקטגוריות בהתאם לכמות
					output.x += 275 + i * 200;
				}
		
				if (myBtns[qnum].length == 3) { //מיקום הקטגוריות בהתאם לכמות
					output.x += 375 + i * 200;
				}
				output.y = 120;
				output.textAlign = "right";
				stage.addChild(output);
		
		
				for (n = 0; n < answers[qnum][i].length; n++) { //כתיבת המסיחים תחת כל אחת מהקטגוריה, באותה העמודה
					var txt1 = answers[qnum][i][n];
		
					if (typeof txt1 === 'string') { //במידה והמסיח הינו טקסט
		
						var output1 = new createjs.Text();
						output1.color = "black";
						output1.font = "12pt Arial";
						var x = answers[qnum][i][n];
						var myprint = x.split(" ");
						output1.textAlign = "right";
						output1.text = "";
						output1.name = "output1" + n;
						if (myprint.length > 1) {
							output1.textAlign = "right";
							for (a = 1; a <= myprint.length; a++) { //כתיבת המסיחים כך שמספר המילים המקסימלי בשורה הינו 4
								output1.text += myprint[a - 1] + " ";
								if (a % 4 == 0) {
									output1.text += "\n";
								}
		
							}
						} else {
							output1.text = answers[qnum][i][n];
						}
						if (myBtns[qnum].length == 4) { //מיקום המסיחים כאשר יש 4 קטגוריות
							output1.x += 275 + i * 200;
						}
						if (myBtns[qnum].length == 3) { //מיקום המסיחים כאשר יש 3 קטגוריות
							output1.x += 375 + i * 200;
						}
		
						output1.y = 55 * n + 200;
						stage.addChild(output1);
						output1.name = "output1" + n;
		
						console.log(txt1);
		
						if (myScore[qnum][i][n] > 1) { //במידה ומספר ניסיונות המענה היה גבוה מ 1 הוספת כוכבית על יד המסיח
							var output2 = new createjs.Text();
							output2.color = "red";
							output2.font = "12pt Arial";
							output2.text = "*";
		
							output2.textAlign = "right";
							output2.name = "output2" + n;
							if (myBtns[qnum].length == 4) { //מיקום הכוכבית כאשר היו 4 קטגוריות במשחק
								output2.x += 282 + i * 200;
							}
							if (myBtns[qnum].length == 3) { //מיקום הכוכבית כאשר היו 3 קטגוריות במשחק
								output2.x += 382 + i * 200;
							}
		
							output2.y = 55 * n + 200;
							stage.addChild(output2);
		
							console.log("כוכבית");
						}
		
					} else { //אם המסיח מסוג תמונה
						var whitemini = new lib.boardmini; //הוספת לוח (ריבוע לבן) שעליו תמוקם התמונה
						if (myBtns[qnum].length == 4) { //מיקום כאשר במשחק היו 4 קטגוריות
							whitemini.x = 245 + i * 200;
						}
						if (myBtns[qnum].length == 3) { //מיקום כאשר במשחק היו 3 קטגוריות
							whitemini.x = 345 + i * 200;
						}
		
						whitemini.y = 60 * n + 200;
						whitemini.textAlign = "right";
						whitemini.name = "boardW3" + n;
		
						//הבאת תמונה מהספריה שתשב בתוך המסגרת
						//הבאת תמונה מהספריה שתשב בתוך המסגרת
						var pic2 = new txt1();
		
						//יצירת משתנה שהערך שלו יהיה זה שלפיו יישתנה גודל התמונה
						var scaleValue = 0;
		
						//מציאת הערך שלפיו נשנה את גודל התמונה בעזרת פונקציה ושינוי הגודל
		
						scaleValue = resizeImage(whitemini, pic2);
		
						pic2.scaleX = scaleValue;
						pic2.scaleY = scaleValue;
		
						stage.addChild(whitemini);
						whitemini.addChild(pic2);
						whitemini.addEventListener('mouseover', zoomtable); //הוספת פונקציה למעבר עכבר על התמונה (טכנית על הלוח מתחת לתמונה), כם שניתן יהיה להגדיל אותה
						whitemini.addEventListener('mouseout', outtable); //הסרת העכבר מהתמנה יחזיר אותה לגודלה המקורי
						if (myScore[qnum][i][n] > 1) { //במידה והמסיח מסוג תמונה ונענה לאחר יותר מניסיון אחד- הוספת כוכבית
							var output3 = new createjs.Text();
							output3.color = "red";
							output3.font = "12pt Arial";
							output3.text = "*";
							output3.textAlign = "right";
							if (myBtns[qnum].length == 4) { //במידה והיו 4 קטגוריות במשחק
								output3.x += 278 + i * 200;
							}
							if (myBtns[qnum].length == 3) { //במידה והיו 3 קטגוריות במשחק
								output3.x += 378 + i * 200;
							}
							output3.y = 50 * n + 200;
							stage.addChild(output3);
							output3.name = "output3" + n;
							console.log("כוכבית");
						}
		
					}
		
		
				}
			}
		
		
		
		}
		
		
		function startOver() { //פונקציה להפעלה מחדש של אותו המשחק, איתחול על האלמנטים
			//הסרת כל האלמנטים המתקשרים למסך הסיכום
			toRemove("gamescore");
			toRemove("gamelong");
			toRemove("finish");
			toRemove("myTable");
			toRemove("myTable2");
			toRemove("myfinishk");
			toRemove("myagaink");
			toRemove("coca");
			toRemove("coca2");
		
			for (i = 0; i < myBtns[qnum].length; i++) { //הסרת כל האלמנטים המתקשרים לטבלה
				toRemove("tt" + i);
				for (n = 0; n < answers[qnum][i].length; n++) {
					toRemove("output1" + n);
					toRemove("output2" + n);
					toRemove("output3" + n);
					toRemove("boardW3" + n);
		
		
		
				}
		
		
			}
			timeCount = 0; //אתחול הזמן
		
			myScore = [ //אתחול מערך הציון
				[
					[],
					[],
					[],
					[]
				],
				[
					[],
					[],
					[],
					[]
				]
			];
			yesno = [ //אתחול מערך הבודק אם התשובה נענתה נכון או לא
				[
					[],
					[],
					[],
					[]
				],
				[
					[],
					[],
					[],
					[]
				]
			];
		
			newF = 0; //אתחול המיקום של הפריים
			selfHome.fill.gotoAndStop(newF); //חזרה לפריים ההתחלתי של המד
			create2(); //הפעלת הפונקציה ההתחלתית למשתנים הקבועים במשחק
			create(); //הפעלת הפונקציה למשתנים המשתנים לאורך המשחק
		}
		
		function zoomtable(event) { //פונקציה למעבר עכבר על התמונה בטבלה
			event.currentTarget.scaleX = 2;
		
			event.currentTarget.scaleY = 2;
		
			stage.addChildAt(event.currentTarget, stage.getNumChildren() - 1);
		
		
		}
		function outtable(event) { //פונקציה להסרת העכבר מהתמונה בטבלה והחזרת התמונה לגודל המקורי
			event.currentTarget.scaleX = 1;
		
			event.currentTarget.scaleY = 1;
		}
		function home() { //חזרה למסך הפתיחה הראשי, לבחירת המשחק
			toRemove("odot1"); // הסרת אודות על מנת להעלות מחדש כך שיהיה מעל לתמונת הרקע
			toRemove("site");
			for (i = 0; i < myBtns[qnum].length; i++) { //הסרת הפחיות מהבמה
				toRemove("btn" + i);
				toRemove("t" + i);
		
			}
			selfHome.direc.text = ""; //הסרת ההנחייה מהבמה
			var countEnd = 0;
			//	var lengthArray=0;
			var myAsum = 0;
			for (i = 0; i < myBtns[qnum].length; i++) {
		
				myAsum += answers[qnum][i].length;
		
			}
		
			clearInterval(timer); //הסרת האינרוול
			//הסרת כל האלמנטים שלא רלוונטיים
			selfHome.stand.visible = false;
			selfHome.fill.visible = false;
			selfHome.kav.visible = false;
			selfHome.flags.visible = false;
			selfHome.myCL.visible = false;
			selfHome.GameName.visible = false;
			toRemove("correct");
			toRemove("false1");
			toRemove("nextQ");
			toRemove("timerEnd");
			toRemove("boardW2");
			toRemove("txtquestion");
			toRemove("handN");
			toRemove("myodoti");
		
			timeCount = 0; // אתחולהמשתנהלסכימתהזמן
		
			mychoice = 0; //אתחול המשתנה לבחירת המשחק
			qnum = 0; //המשחק שנבחר
			myScore = [ //אתחול מערך הציון
				[
					[],
					[],
					[],
					[]
				],
				[
					[],
					[],
					[],
					[]
				]
			];
			yesno = [ //אתחול מערך הבודק אם התשובה נענתה נכון או לא
				[
					[],
					[],
					[],
					[]
				],
				[
					[],
					[],
					[],
					[]
				]
			];
			var backfirst = new lib.backg(); //הוספת הרקע למסך הפתיחה
			backfirst.name = "backf";
			backfirst.x = 925;
			backfirst.y = 0;
			stage.addChild(backfirst);
			newF = 0; //אתחול המיקום של הפריים
			selfHome.fill.gotoAndStop(newF); //חזרה לפריים ההתחלתי של המד
			var forcombo = new lib.forcomb(); //הוספת הקומפוננטה לבחירת המשחק ואתחול כל הפנקציות והאלמנטים המתקשרים לקומפוננטות
			forcombo.x = 645;
			forcombo.y = 490;
			forcombo.name = "myCombo";
			stage.addChild(forcombo);
		
			forcombo.startbtn.alpha = 0.3;
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
			function mycb_change(evt) {
		
				console.log(evt.currentTarget.value);
				mychoice = evt.currentTarget.value;
				//אם נבחר הערך הראשון - "בחר נושא
				if (mychoice == 0) {
					//ניטרול כפתור "בחר
					forcombo.startbtn.alpha = 0.3;
					forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
				}
				if (mychoice == 1) {
					//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
					forcombo.startbtn.alpha = 1;
					qnum = 0;
					for (i = 0; i < myBtns[qnum].length; i++) {
		
					}
					forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
		
				}
				if (mychoice == 2) {
					//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
					forcombo.startbtn.alpha = 1;
					qnum = 1;
					for (i = 0; i < myBtns[qnum].length; i++) {
		
					}
					forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
		
				}
		
			}
		
			//לחיצה על בחר
			function fl_ClickToPosition() {
				create2();
				create();
				toRemove("backf");
				toRemove("myCombo");
				console.log(qnum);
		
		
			}
			//במידה ונמצאים במסך הסיכום מחיקת הטבלה, הכפתורים, הציון והזמן
			toRemove("gamescore");
			toRemove("gamelong");
			toRemove("finish");
			toRemove("myTable");
			toRemove("myTable2");
			toRemove("myfinishk");
			toRemove("myagaink");
			toRemove("coca");
			toRemove("coca2");
		
			for (i = 0; i < myBtns[qnum].length; i++) { //הסרת כל האלמנטים המתקשרים לטבלה
				toRemove("tt" + i);
				for (n = 0; n < answers[qnum][i].length; n++) {
					toRemove("output1" + n);
					toRemove("output2" + n);
					toRemove("output3" + n);
					toRemove("boardW3" + n);
		
		
		
				}
		
		
			}
			var odot1 = new lib.odotdy(); //העלאת האודות לבמה מחדש
			odot1.name = "odot1";
			odot1.x = 7;
			odot1.y = 10;
			stage.addChild(odot1);
			odot1.addEventListener('mouseover', myClick_mouseover);
		
			odot1.addEventListener("click", pressOdot);
		
			var logo1 = new lib.mylogo(); //החזרת הלוגו לבמה שיהיה מעל לרקע
			logo1.name = "logo";
			logo1.x = 870;
			logo1.y = 3;
			stage.addChild(logo1);
		
			logo1.addEventListener("click", home);
			logo1.addEventListener('mouseover', myClick_mouseover)
		}
		stage.enableMouseOver(); //הפעלת הסמן של העכבר שישתנה בהתאם למעבר עכבר על אובייקטים לחיצים
		
		function myClick_mouseover(event) { //שיני סמן העכבר במעבר על אובייקטים לחיצים
			event.currentTarget.cursor = "pointer";
		}
		playSound("yesSound");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.flags = new lib.flags();
	this.flags.parent = this;
	this.flags.setTransform(469.5,571.5,1,1,0,0,0,372.5,16.5);

	this.board1 = new lib.myboard();
	this.board1.parent = this;
	this.board1.setTransform(478,174.7,1,1,0,0,0,130,70.7);

	this.GameName = new cjs.Text("", "bold 14px 'Arial'");
	this.GameName.name = "GameName";
	this.GameName.textAlign = "center";
	this.GameName.lineHeight = 18;
	this.GameName.lineWidth = 344;
	this.GameName.parent = this;
	this.GameName.setTransform(480,10.7,1.433,1.362);

	this.kav = new lib.kav();
	this.kav.parent = this;
	this.kav.setTransform(875.3,284.6,1,1,0,0,0,6.9,92.3);

	this.fill = new lib.fill1();
	this.fill.parent = this;
	this.fill.setTransform(875.5,367.5);

	this.timer1 = new cjs.Text("", "bold 22px 'Arial'");
	this.timer1.name = "timer1";
	this.timer1.textAlign = "center";
	this.timer1.lineHeight = 27;
	this.timer1.lineWidth = 34;
	this.timer1.parent = this;
	this.timer1.setTransform(242,174.4,0.949,1.006);

	this.myCL = new lib.myCL();
	this.myCL.parent = this;
	this.myCL.setTransform(242.5,184.2,1,1,0,0,0,43.5,43.6);

	this.direc = new cjs.Text("", "bold 12px 'Arial'");
	this.direc.name = "direc";
	this.direc.textAlign = "right";
	this.direc.lineHeight = 16;
	this.direc.lineWidth = 88;
	this.direc.parent = this;
	this.direc.setTransform(737.1,148,1.219,1.451);

	this.what = new cjs.Text("", "12px 'Arial'");
	this.what.name = "what";
	this.what.textAlign = "center";
	this.what.lineHeight = 15;
	this.what.lineWidth = 344;
	this.what.parent = this;
	this.what.setTransform(459.5,42.6,1.433,1.362);

	this.stand = new lib.stand();
	this.stand.parent = this;
	this.stand.setTransform(467.4,310.6,1,1,0,0,0,412.4,284.6);

	this.instance = new lib.backgroundOpacity();
	this.instance.parent = this;
	this.instance.setTransform(-10,2,1.5,1.646);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAAQIAAgf");
	this.shape.setTransform(850,131.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.stand},{t:this.what},{t:this.direc},{t:this.myCL},{t:this.timer1},{t:this.fill},{t:this.kav},{t:this.GameName},{t:this.board1},{t:this.flags}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(470,297,966.1,597.5);
// library properties:
lib.properties = {
	width: 960,
	height: 590,
	fps: 15,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/4.2.18_atlas_P_.png", id:"4.2.18_atlas_P_"},
		{src:"images/4.2.18_atlas_NP_.jpg", id:"4.2.18_atlas_NP_"},
		{src:"sounds/yesSound.mp3", id:"yesSound"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js", id:"an.CSS"},
		{src:"components/ui/src/combobox.js", id:"an.ComboBox"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;