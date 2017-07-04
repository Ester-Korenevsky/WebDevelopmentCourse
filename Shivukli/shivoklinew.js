(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"shivoklinew_atlas_", frames: [[851,203,129,125],[644,0,317,201],[963,0,49,50],[851,330,118,119],[848,451,112,81],[644,203,205,207],[522,621,204,203],[728,621,201,204],[644,412,202,207],[0,0,642,493],[0,495,520,213]]}
];


// symbols:



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["shivoklinew_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = ss["shivoklinew_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32 = function() {
	this.spriteSheet = ss["shivoklinew_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34 = function() {
	this.spriteSheet = ss["shivoklinew_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34copy = function() {
	this.spriteSheet = ss["shivoklinew_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["shivoklinew_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["shivoklinew_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["shivoklinew_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["shivoklinew_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.deg = function() {
	this.spriteSheet = ss["shivoklinew_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.tsdgr = function() {
	this.spriteSheet = ss["shivoklinew_atlas_"];
	this.gotoAndStop(10);
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


(lib.workers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("מחפשי עבודה", "14px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 20;
	this.text.lineWidth = 118;
	this.text.parent = this;
	this.text.setTransform(59,-19.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoMC+IAAl7IQZAAIAAF7g");
	this.shape.setTransform(8.5,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.workers, new cjs.Rectangle(-61,-26.3,122,40.1), null);


(lib.un3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap34copy();
	this.instance.parent = this;
	this.instance.setTransform(-33.8,-24.5,0.605,0.605);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.un3, new cjs.Rectangle(-33.8,-24.5,67.8,49), null);


(lib.un2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap34copy();
	this.instance.parent = this;
	this.instance.setTransform(-33.8,-24.5,0.605,0.605);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.un2, new cjs.Rectangle(-33.8,-24.5,67.8,49), null);


(lib.un1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap34copy();
	this.instance.parent = this;
	this.instance.setTransform(-33.8,-24.5,0.605,0.605);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.un1, new cjs.Rectangle(-33.8,-24.5,67.8,49), null);


(lib.twitter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-31.5,-32,0.314,0.314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.twitter, new cjs.Rectangle(-31.5,-32,63.1,64.1), null);


(lib.textTw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("טוויטר מתאים לאנשים שרוצים לפרסם את עצמם ואת דעותיהם באופן .בינלאומי נרחב", "11px 'Assistant SemiBold'");
	this.text.textAlign = "right";
	this.text.lineHeight = 16;
	this.text.lineWidth = 84;
	this.text.parent = this;
	this.text.setTransform(38.8,-35.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AnaoQIO1AAIAAQhIu1AAg");
	this.shape.setTransform(-2.9,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textTw, new cjs.Rectangle(-51.4,-38.2,97,107.7), null);


(lib.textIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("אינסטגראם מתאימה לאוהבי עיצוב. הפרסום מכיל תמונות עיצוביות ,טקסטורות צבעים .ואפקטים", "11px 'Assistant SemiBold'");
	this.text.textAlign = "right";
	this.text.lineHeight = 16;
	this.text.lineWidth = 84;
	this.text.parent = this;
	this.text.setTransform(52.4,-27.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AnaoFIO1AAIAAQLIu1AAg");
	this.shape.setTransform(10.5,22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textIn, new cjs.Rectangle(-38,-30.2,97,105.7), null);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("לינקדאין מתאימה לכל מי שמחפש עבודה. הפרסום נעשה בצורה .מקצועית ורצינית", "11px 'Assistant SemiBold'");
	this.text.textAlign = "right";
	this.text.lineHeight = 16;
	this.text.lineWidth = 84;
	this.text.parent = this;
	this.text.setTransform(65.4,-34.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AnaoGIO1AAIAAQNIu1AAg");
	this.shape.setTransform(24.1,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-24.4,-37.2,97,105.8), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("פייסבוק מתאימה לרוב סוגי העסקים כאשר  הפרסום נעשה לפי פילוח שוק לפי .העדפת  קהל  היעד", "11px 'Assistant SemiBold'");
	this.text.textAlign = "right";
	this.text.lineHeight = 16;
	this.text.lineWidth = 90;
	this.text.parent = this;
	this.text.setTransform(58.3,-43.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AnvoRIPfAAIAAQjIvfAAg");
	this.shape.setTransform(13.5,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(-37,-47,101.1,107.9), null);


(lib.students = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("סטודנטים", "14px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 20;
	this.text.lineWidth = 101;
	this.text.parent = this;
	this.text.setTransform(39,-19.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(66,66,66,0)").ss(0.1,1,1).p("AnpiuIPTAAIAAFdIvTAAg");
	this.shape.setTransform(101,-16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnpCvIAAldIPTAAIAAFdg");
	this.shape_1.setTransform(-8,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.students, new cjs.Rectangle(-64,-35,215,51.6), null);


(lib.soldier = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("חיילים", "14px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 20;
	this.text.lineWidth = 105;
	this.text.parent = this;
	this.text.setTransform(48,-28.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(66,66,66,0)").ss(0.1,1,1).p("AmoiaINRAAIAAE1ItRAAg");
	this.shape.setTransform(110.5,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmoCbIAAk1INRAAIAAE1g");
	this.shape_1.setTransform(7.5,-10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.soldier, new cjs.Rectangle(-59,-30.3,213,42.4), null);


(lib.profileT2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.text = new cjs.Text("תמונת הפרופיל צריכה לייצג בצורה הטובה ביותר את העסק שלכם. מידות התמונה צריכות להיות :180 .על 180 פיקסלים", "11px 'Assistant SemiBold'");
	this.text.textAlign = "right";
	this.text.lineHeight = 16;
	this.text.lineWidth = 116;
	this.text.parent = this;
	this.text.setTransform(-0.4,-11.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#89C6D4").ss(1.5).p("AqJCsIABgSQAEgcASgVQAYgdAgAAINJAAIhSu8IgFguIABAFIAOA9IDEOlIACAKICugHQAhAAAXAdQASAVAEAcIABASAKKCuIAALWQgBAlgWAcQgXAcghAAIx1AAQggAAgYgcQgWgcgBglIAArW");
	this.shape.setTransform(-57.2,-24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ao6PIQggAAgXgcQgYgdAAgoIAAgEQABAkAXAcQAXAcAgAAIR1ABQAggBAYgcQAWgcABgkQgBAkgWAcQgYAcggABIx1gBQggAAgXgcQgXgcgBgkIAArWIAAgCIABgTQAGgbARgVQAXgcAggBINJAAIAAgBIhTu7IgDgqIAOA9IgOg9IgBgMIAPBJIDEOmIACALICugIQAgABAYAcQARAVAEAbIACATIAAACIAALWIAAAEQAAAogXAdQgYAcggABgAC5u7g");
	this.shape_1.setTransform(-57.2,-20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.profileT2, new cjs.Rectangle(-123.2,-123.9,132,200), null);


(lib.profile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap24();
	this.instance.parent = this;
	this.instance.setTransform(-30,-29.1,0.466,0.466);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.profile, new cjs.Rectangle(-30,-29.1,60.2,58.3), null);


(lib.people = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("קהלי יעד: ", "bold 18px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 26;
	this.text.lineWidth = 136;
	this.text.parent = this;
	this.text.setTransform(68,-21.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.people, new cjs.Rectangle(-70,-23.6,140,47.3), null);


(lib.page = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.deg();
	this.instance.parent = this;
	this.instance.setTransform(-177,-125,0.551,0.508);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.page, new cjs.Rectangle(-177,-125,354,250.4), null);


(lib.linkd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(-31.7,-32.5,0.314,0.314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.linkd, new cjs.Rectangle(-31.7,-32.5,63.5,65), null);


(lib.inste = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-32,-31.8,0.314,0.314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.inste, new cjs.Rectangle(-32,-31.8,64.1,63.8), null);


(lib.howtodo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("", "12px 'Assistant-Bold'", "#2C2C2C");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-57,194.8);

	this.text_1 = new cjs.Text("עברו על חלקי העמוד המסומנים כדי לגלות טיפים.", "bold 12px 'Assistant'", "#2C2C2C");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 238;
	this.text_1.parent = this;
	this.text_1.setTransform(119,-27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.howtodo2, new cjs.Rectangle(-159,-29.6,280,242.1), null);


(lib.howtodo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("עברו על הרשת המבוקשת או על קהלי היעד כדי לגלות מה מתאים למי. \nלחצו על הרשת הרצויה כדי לראות טיפים.", "bold 12px 'Assistant'", "#333333");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 426;
	this.text.parent = this;
	this.text.setTransform(246.1,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.howtodo, new cjs.Rectangle(-181.9,-4.7,430,43.8), null);


(lib.highschool = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("תלמידי תיכון", "14px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 20;
	this.text.lineWidth = 116;
	this.text.parent = this;
	this.text.setTransform(65.4,-60.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,255,0)").ss(1,1,1).p("ArAjMIWBAAIAAGZI2BAAIAAhh");
	this.shape.setTransform(147.5,-32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArADNIAAmZIWBAAIAABgIAAE5g");
	this.shape_1.setTransform(6.5,-41.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.highschool, new cjs.Rectangle(-64,-62.2,283,51.7), null);


(lib.facefade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap34();
	this.instance.parent = this;
	this.instance.setTransform(-27.2,-27.5,0.462,0.462);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.facefade, new cjs.Rectangle(-27.2,-27.5,54.6,55), null);


(lib.face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-45,-32,0.314,0.314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.face, new cjs.Rectangle(-45,-32,64.4,65), null);


(lib.coverT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.text = new cjs.Text("תמונת הקאבר מוסיפה אווירה לעמוד שלכם . כדאי לבחור תמונה שמתאימה .לתמונת הפרופיל שלכם \nמידות התמונה צריכות להיות : 828 על .315 פיקסלים", "11px 'Assistant SemiBold'");
	this.text.textAlign = "right";
	this.text.lineHeight = 16;
	this.text.lineWidth = 164;
	this.text.parent = this;
	this.text.setTransform(145.1,-6.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#89C6D4").ss(1.5).p("ANclsIzzAAIl2jRIC4DZIkFgIQgyAAgjAdQgjAeAAApIAAL1QAAApAjAeQAjAdAyAAIa2AAQAxAAAjgdQAkgeAAgqIAAr0QAAgpgkgeQgjgdgxAAg");
	this.shape.setTransform(65.1,21.3,0.878,0.931);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuwIqQgjgeAAgpIAAr0QAAgqAjgdQAkgeAxAAIEGAIIi4jZIF2DRITyAAQAyAAAjAeQAkAdAAAqIAAL0QAAApgkAeQgjAdgyAAI62ABQgxgBgkgdg");
	this.shape_1.setTransform(65.1,22.2,0.878,0.931);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,153,51,0)").ss(0.1,1,1).p("AEYGBIovAAIAAsBIIvAA");
	this.shape_2.setTransform(252,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-34.8,304.8,113);


(lib.cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tsdgr();
	this.instance.parent = this;
	this.instance.setTransform(-134,-50.4,0.516,0.474);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cover, new cjs.Rectangle(-134,-50.4,268.1,101), null);


(lib.axe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap32();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,-13.7,0.551,0.551);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.axe, new cjs.Rectangle(-13.5,-13.7,27,27.6), null);


(lib.arts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.textField_4 = new cjs.Text(" אוהבי עיצוב", "14px 'Assistant'");
	this.textField_4.name = "textField_4";
	this.textField_4.textAlign = "right";
	this.textField_4.lineHeight = 20;
	this.textField_4.lineWidth = 100;
	this.textField_4.parent = this;
	this.textField_4.setTransform(47.6,-22);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(66,66,66,0)").ss(0.1,1,1).p("AnLizIOXAAIAAFnIuXAAg");
	this.shape.setTransform(154,-75.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnLCMIAAkXIOXAAIAAEXg");
	this.shape_1.setTransform(7,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.textField_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arts, new cjs.Rectangle(-54.4,-94.7,255.4,105.8), null);


(lib.adults = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("מבוגרים", "14px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 20;
	this.text.lineWidth = 77;
	this.text.parent = this;
	this.text.setTransform(39.3,-27.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(66,66,66,0)").ss(0.1,1,1).p("Ah8kNIAAhfIGAAAAjlkNIAAivIHpAAIAABQIHgAAAoRiGIAAgoAkrEiIAACbIm4AAIAApDIDSAAAJJDDIl/AAAJJDDQhXGRDymRgAoRDDQA9gcg9kt");
	this.shape.setTransform(12.5,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjJEYIjnAAIAAhfQA9gcg9ktIAAgoIAAhfIEsAAIBpAAIHLAAQhYEdgtCzQgNA0gJArg");
	this.shape_1.setTransform(2.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,0,102,0)").s().p("AnzG9IAApDIDSAAQA9Etg9AcIAABfIDmAAIAACbgAAKkNIAAivIHqAAIAABQImBAAIAABfg");
	this.shape_2.setTransform(-11.5,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.adults, new cjs.Rectangle(-62.5,-46.5,150,91), null);


(lib.aboutT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.text = new cjs.Text("העלו פוסטים שיעניינו את קהל היעד שלכם: תמונות יפות, בדיחות, או טיפים .רלוונטיים בתחום העסק שלכם", "11px 'Assistant SemiBold'");
	this.text.textAlign = "right";
	this.text.lineHeight = 16;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(285.3,-50.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#89C6D4").ss(1.5).p("AOaiaIx5AAIrxoKIJGIRIjsgHQgtAAggAbQggAbAAAmIAAKxQAAAlAgAbQAgAbAtAAIYQAAQAsAAAggbQAggbAAgmIAAqwQAAgmgggbQgggbgsAAg");
	this.shape.setTransform(191.2,-46.7,0.973,0.903);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AreKfQgfgbAAgmIAAqxQAAglAfgbQAggbAtAAIDsAHIpFoRILxIKIR4AAQAtAAAfAbQAgAbAAAlIAAKxQAAAlggAcQgfAagtAAI4QABQgtAAgggbg");
	this.shape_1.setTransform(193.8,-44.9,0.973,0.903);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(66,66,66,0)").ss(0.1,1,1).p("ArtlnIXbAAIAALPI3bAAg");
	this.shape_2.setTransform(486.5,-37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.aboutT, new cjs.Rectangle(90.1,-112.5,472.5,133.5), null);


(lib.about = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap28();
	this.instance.parent = this;
	this.instance.setTransform(-80,-47,0.507,0.463);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.about, new cjs.Rectangle(-80,-47,160.7,93), null);


(lib.reka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.reka = new lib.cover();
	this.reka.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.reka).wait(1));

}).prototype = getMCSymbolPrototype(lib.reka, new cjs.Rectangle(-134,-50.4,268.1,101), null);


(lib.about1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.movieClip_2 = new lib.about();
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(-2.5,0,1.072,1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.about1, new cjs.Rectangle(-88.3,-47,172.2,93), null);


// stage content:
(lib.shivoklinew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//הסתרת האובייקטים
		this.profile.alpha=0;
		this.profileT2.alpha=0;
		this.page.alpha=0;
		this.text1.alpha =0;
		this.text2.alpha =0;
		this.coverT.alpha=0;
		this.reka.alpha=0;
		this.aboutT.alpha=0;
		this.about1.alpha=0;
		this.axe.alpha=0;
		this.textIn.alpha=0;
		this.textTw.alpha=0;
		this.facefade.alpha=0;
		this.howtodo2.alpha=0;
		this.un1.alpha=0;
		this.un2.alpha=0;
		this.un3.alpha=0;
		
		//מעבר עכבר על מחפשי עבודה
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.workers.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler() {
		
		
			this.text1.alpha = 1;
			this.text2.alpha = 1;
		this.arts.alpha=0.4;
			this.soldier.alpha=0.4;
			this.adults.alpha=0.4;
			this.highschool.alpha=0.4;
			this.students.alpha=0.4;
			this.inste.alpha=0.1;
			this.twitter.alpha=0.1;
			
		}
		
		
		// יציאת עכבר ממחפשי עבודה 
		
		this.workers.addEventListener("mouseout", fl_MouseOutHandler2.bind(this));
		
		function fl_MouseOutHandler2()
		{
			
			this.text1.alpha=0;
				this.text2.alpha=0;
			this.arts.alpha=1;
			this.soldier.alpha=1;
			this.adults.alpha=1;
			this.highschool.alpha=1;
			this.students.alpha=1;
			this.inste.alpha=1;
			this.twitter.alpha=1;
			
			
		}
		
		//מעבר עכבר על פייסבוק
		this.face.addEventListener("mouseover", fl_MouseOverHandler1.bind(this));
		
		function fl_MouseOverHandler1()
		{
			
			this.highschool.alpha=0.4;
			this.arts.alpha=0.4;
			this.text1.alpha=1;
			this.inste.alpha=0.1;
			this.twitter.alpha=0.1;
			this.linkd.alpha=0.1;
		}
		
		//יציאת עכבר מפייסבוק
		
		this.face.addEventListener("mouseout", fl_MouseOutHandler_f.bind(this));
		
		function fl_MouseOutHandler_f() {
			
			this.text1.alpha=0;
			this.highschool.alpha=1;
			this.arts.alpha=1;
			this.inste.alpha=1;
			this.twitter.alpha=1;
			this.linkd.alpha=1;
		}
		
		// מעבר עכבר על אינסטגרם
		
		this.inste.addEventListener("mouseover", fl_MouseOverHandler_In.bind(this));
		
		function fl_MouseOverHandler_In()
		{
			
			this.soldier.alpha=0.4;
			this.workers.alpha=0.4;
			this.adults.alpha=0.4;
			this.students.alpha=0.4;
			this.twitter.alpha=0.1;
			this.linkd.alpha=0.1;
			this.face.alpha=0.1;
			this.textIn.alpha=1;
			this.un2.alpha=1;
		}
		
		//יציאה ממעבר עכבר על אינסטגם
		
		
		this.inste.addEventListener("mouseout", fl_MouseOutHandler_In2.bind(this));
		
		function fl_MouseOutHandler_In2()
		{
		this.arts.alpha=1;
			
			this.soldier.alpha=1;
			this.workers.alpha=1;
			this.adults.alpha=1;
			this.students.alpha=1;
			this.textIn.alpha=0;
			this.twitter.alpha=1;
			this.linkd.alpha=1;
			this.face.alpha=1;
			this.un2.alpha=0;
		}
		
		
		//מעבר עכבר על אוהבי עיצוב
		
		
		
		this.arts.addEventListener("mouseover", fl_MouseOverHandler_Ar.bind(this));
		
		function fl_MouseOverHandler_Ar()
		{
			
		this.twitter.alpha=0.1;
			this.linkd.alpha=0.1;	
			this.face.alpha=0.1;
			this.highschool.alpha=0.4;
			this.soldier.alpha=0.4;
			this.workers.alpha=0.4;
			this.adults.alpha=0.4;
			this.students.alpha=0.4;
			this.textIn.alpha=1;
		}
		
		//יציאה ממעבר עכבר על אוהבי עיצוב
		
		
		this.arts.addEventListener("mouseout", fl_MouseOutHandler_Ar2.bind(this));
		
		function fl_MouseOutHandler_Ar2()
		{
			this.twitter.alpha=1;
			this.linkd.alpha=1;	
			this.face.alpha=1;
			this.textIn.alpha=0;
			this.highschool.alpha=1;
			this.soldier.alpha=1;
			this.workers.alpha=1;
			this.adults.alpha=1;
			this.students.alpha=1;
			
		}
		
		
		//מעבר עכבר על סטודנטים
		this.students.addEventListener("mouseover", fl_MouseOverHandler_St.bind(this));
		
		function fl_MouseOverHandler_St()
		{
		this.soldier.alpha=0.4;
			this.workers.alpha=0.4;
			this.arts.alpha=0.4;
			this.highschool.alpha=0.4;
			this.adults.alpha=0.4;
			this.inste.alpha=0.1;
			this.text1.alpha=1;
			this.text2.alpha=1;
			this.textTw.alpha=1;
			
		}
		
		
		//יציאה ממעבר עכבר על סטודנטים
		
		this.students.addEventListener("mouseout", fl_MouseOutHandler_St2.bind(this));
		
		function fl_MouseOutHandler_St2()
		{
		this.soldier.alpha=1;
			this.workers.alpha=1;
			this.arts.alpha=1;
			this.highschool.alpha=1;
			this.adults.alpha=1;
			this.inste.alpha=1;
			this.text1.alpha=0;
			this.text2.alpha=0;
			this.textTw.alpha=0;
		}
		
		//מעבר עכבר על חיילים
		
		this.soldier.addEventListener("mouseover", fl_MouseOverHandler_So.bind(this));
		
		function fl_MouseOverHandler_So()
		{
		this.workers.alpha=0.4;
			this.arts.alpha=0.4;
			this.highschool.alpha=0.4;
			this.adults.alpha=0.4;
			this.students.alpha=0.4;
			this.text1.alpha=1;
			this.inste.alpha=0.1;
			this.linkd.alpha=0.1;
			this.twitter.alpha=0.1;
			
		}
		
		
		//יציאה ממעבר עכבר על חיילים
		
		this.soldier.addEventListener("mouseout", fl_MouseOutHandler_So2.bind(this));
		function fl_MouseOutHandler_So2()
		{
			this.workers.alpha=1;
			this.arts.alpha=1;
			this.highschool.alpha=1;
			this.adults.alpha=1;
			this.students.alpha=1;
			this.text1.alpha=0;
			this.inste.alpha=1;
			this.linkd.alpha=1;
			this.twitter.alpha=1;
		}
		
		
		//מעבר עכבר על תלמידי תיכון
		
		this.highschool.addEventListener("mouseover", fl_MouseOverHandler_High.bind(this));
		
		function fl_MouseOverHandler_High()
		{
		this.workers.alpha=0.4;
			this.arts.alpha=0.4;
			this.soldier.alpha=0.4;
			this.adults.alpha=0.4;
			this.students.alpha=0.4;
			this.textIn.alpha=1;
			this.face.alpha=0.1;
			this.linkd.alpha=0.1;
			this.twitter.alpha=0.1;
		}
		
		//יציאה ממעבר עכבר על תלמידי תיכון
		
		this.highschool.addEventListener("mouseout", fl_MouseOutHandler_High2.bind(this));
		
		function fl_MouseOutHandler_High2()
		{
		this.workers.alpha=1;
			this.arts.alpha=1;
			this.soldier.alpha=1;
			this.adults.alpha=1;
			this.students.alpha=1;
			this.textIn.alpha=0;
			this.face.alpha=1;
			this.linkd.alpha=1;
			this.twitter.alpha=1;	
		}
		
		// מעבר עכבר על מבוגרים 
		
		this.adults.addEventListener("mouseover", fl_MouseOverHandler_Ad.bind(this));
		
		function fl_MouseOverHandler_Ad()
		{
			
			this.inste.alpha=0.1;
			this.soldier.alpha=0.4;
			this.workers.alpha=0.4;
			this.arts.alpha=0.4;
			this.students.alpha=0.4;
			this.highschool.alpha=0.4;
			this.text1.alpha=1;
			this.text2.alpha=1;
			this.textTw.alpha=1;
			
			
		}
		
		//יציאה ממעבר עכבר על מבוגרים 
		this.adults.addEventListener("mouseout", fl_MouseOutHandler_Ad2.bind(this));
		
		function fl_MouseOutHandler_Ad2()
		{
		this.inste.alpha=1;
			this.soldier.alpha=1;
			this.workers.alpha=1;
			this.arts.alpha=1;
			this.students.alpha=1;
			this.highschool.alpha=1;
			this.text1.alpha=0;
			this.text2.alpha=0;
			this.textTw.alpha=0;
		}
		
		
		//מעבר עכבר על לינקדין 
		this.linkd.addEventListener("mouseover", fl_MouseOverHandler_Li.bind(this));
		
		function fl_MouseOverHandler_Li()
		{
			this.twitter.alpha=0.1;
			this.inste.alpha=0.1;	
			this.face.alpha=0.1;
			this.highschool.alpha=0.4;
			this.soldier.alpha=0.4;
			
			this.arts.alpha=0.4;
			this.text2.alpha=1;
			this.un3.alpha=1;
			
		}
		
		//יציאה ממעבר עכבר על לינקדין
		this.linkd.addEventListener("mouseout", fl_MouseOutHandler_Li2.bind(this));
		
		function fl_MouseOutHandler_Li2()
		{
			this.twitter.alpha=1;
			this.inste.alpha=1;	
			this.face.alpha=1;
			this.highschool.alpha=1;
			this.soldier.alpha=1;
			
			this.arts.alpha=1;
			this.text2.alpha=0;
			this.un3.alpha=0;
		}
		
		
		// מעבר עכבר על טוויטר
		
		this.twitter.addEventListener("mouseover", fl_MouseOverHandler_T.bind(this));
		
		function fl_MouseOverHandler_T()
		{
		this.inste.alpha=0.1;
			this.linkd.alpha=0.1;	
			this.face.alpha=0.1;
			this.arts.alpha=0.4;
			this.soldier.alpha=0.4;
			this.highschool.alpha=0.4;
			this.textTw.alpha=1;
			this.workers.alpha=0.4;
			this.un1.alpha=1;
		}
		
		
		//יציאה ממעבר עכבר על טוויטר
		
		this.twitter.addEventListener("mouseout", fl_MouseOutHandler_T2.bind(this));
		
		function fl_MouseOutHandler_T2()
		{
			this.inste.alpha=1;
			this.linkd.alpha=1;	
			this.face.alpha=1;
			this.arts.alpha=1;
			this.soldier.alpha=1;
			this.highschool.alpha=1;
			this.textTw.alpha=0;
			this.workers.alpha=1;
			this.un1.alpha=0;
		}
		
		// לחיצה על פייסבוק
		
		this.face.addEventListener("click", fl_MouseClickHandler_Fc.bind(this));
		function fl_MouseClickHandler_Fc(event)
		{
			this.inste.mouseEnabled=false;
			this.twitter.mouseEnabled=false;
			this.face.mouseEnabled=false;
			this.linkd.mouseEnabled=false;
			
			this.page.alpha=1;
			
		this.profile.alpha=1;
			this.reka.alpha=1;
			this.about1.alpha=1;
			
			this.axe.alpha=1;
			this.arts.alpha=0;
			this.arts.mouseEnabled=false;
			this.highschool.alpha=0;
			this.highschool.mouseEnabled=false;
			this.people.alpha=0;
			this.howtodo.alpha=0;
			this.howtodo2.alpha=1;
			
			this.adults.alpha=0.4;
			this.adults.mouseEnabled=false;
			this.students.alpha=0.4;
			this.students.mouseEnabled=false;
			this.workers.alpha=0.4;
			this.workers.mouseEnabled=false;
			this.soldier.alpha=0.4;
			this.soldier.mouseEnabled=false;
			
			this.facefade.alpha=0.4;
			this.inste.alpha=0;
			this.linkd.alpha=0;	
			this.face.alpha=0;
			this.twitter.alpha=0;
			
			
			
		
		}
		
		// מעבר עכבר על הפרופיל 
		
		this.profile.addEventListener("mouseover", fl_MouseOverHandler_P.bind(this));
		
		function fl_MouseOverHandler_P()
		{
		
		this.profileT2.alpha=1;	
			this.arts.alpha=0;
			this.highschool.alpha=0;
			this.face.mouseEnabled=false;
			this.face.alpha=0;
		
		}
		
		// יציאה ממעבר עכבר על פרופיל
		this.profile.addEventListener("mouseout", fl_MouseOutHandler_P2.bind(this));
		
		function fl_MouseOutHandler_P2()
		{
		this.profileT2.alpha=0;	
		}
		
		//מעבר עכבר על הקאבר
		
		this.reka.addEventListener("mouseover", fl_MouseOverHandler_R.bind(this));
		
		function fl_MouseOverHandler_R()
		{
			this.coverT.alpha=1;
			this.arts.alpha=0;
			this.highschool.alpha=0;
			
		}
		
		// יציאה ממעבר עכבר על הקאבר
		this.reka.addEventListener("mouseout", fl_MouseOutHandler_R2.bind(this));
		
		function fl_MouseOutHandler_R2()
		{
			this.coverT.alpha=0;
		}
		
		
		//מעבר עכבר על אודות
		
		this.about1.addEventListener("mouseover", fl_MouseOverHandler_A.bind(this));
		
		function fl_MouseOverHandler_A()
		{
			this.aboutT.alpha=1;
			this.arts.alpha=0;
			this.highschool.alpha=0;
			
		}
		
		
		// יציאה ממעבר עכבר על אודות
		
		
		this.about1.addEventListener("mouseout", fl_MouseOutHandler_A2.bind(this));
		
		function fl_MouseOutHandler_A2()
		{
		this.aboutT.alpha=0;	
		}
		
		// לחיצה על האיקס ליציאה מהדף
		
		this.axe.addEventListener("click", fl_MouseClickHandler_AX.bind(this));
		
		function fl_MouseClickHandler_AX()
		{
			this.inste.alpha=1;
			this.linkd.alpha=1;	
			this.face.alpha=1;
			this.twitter.alpha=1;
			this.page.alpha=0;
			
			this.highschool.alpha=1;
			this.highschool.mouseEnabled=true;
			this.adults.alpha=1;
			this.adults.mouseEnabled=true;
			this.students.alpha=1;
			this.students.mouseEnabled=true;
			this.workers.alpha=1;
			this.workers.mouseEnabled=true;
			this.soldier.alpha=1;
			this.soldier.mouseEnabled=true;
			this.arts.alpha=1;
			this.arts.mouseEnabled=true;
			
			this.facefade.alpha=0.4;
			
			this.reka.alpha=0;
			this.profile.alpha=0;
			this.about1.alpha=0;
			this.people.alpha=1;
			this.facefade.alpha=0;
			
			this.twitter.mouseEnabled=true;
			this.face.mouseEnabled=true;
			this.linkd.mouseEnabled=true;
			this.inste.mouseEnabled=true;
			
			
			this.axe.alpha=0;
			this.howtodo.alpha=1;
			this.howtodo2.alpha=0;
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.coverT = new lib.coverT();
	this.coverT.parent = this;
	this.coverT.setTransform(437.4,337.1,1.221,1.221,0,0,0,84,36.6);
	new cjs.ButtonHelper(this.coverT, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.coverT).wait(1));

	// textTw
	this.text2 = new lib.text2();
	this.text2.parent = this;
	this.text2.setTransform(411,344.3,1.221,1.221);

	this.text1 = new lib.text1();
	this.text1.parent = this;
	this.text1.setTransform(54.4,355.1,1.221,1.221);

	this.textTw = new lib.textTw();
	this.textTw.parent = this;
	this.textTw.setTransform(199.8,344.6,1.221,1.221,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.textTw},{t:this.text1},{t:this.text2}]}).wait(1));

	// Actions
	this.workers = new lib.workers();
	this.workers.parent = this;
	this.workers.setTransform(574.1,277.2,1.221,1.221,0,0,0,0.1,0.1);

	this.howtodo2 = new lib.howtodo2();
	this.howtodo2.parent = this;
	this.howtodo2.setTransform(330.8,99.7,1.221,1.221);

	this.people = new lib.people();
	this.people.parent = this;
	this.people.setTransform(565.5,184.2,1.221,1.221);

	this.facefade = new lib.facefade();
	this.facefade.parent = this;
	this.facefade.setTransform(613.5,167.4,1.221,1.221,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.facefade},{t:this.people},{t:this.howtodo2},{t:this.workers}]}).wait(1));

	// axe
	this.axe = new lib.axe();
	this.axe.parent = this;
	this.axe.setTransform(496.4,143.3,0.789,0.789,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.axe).wait(1));

	// textIn
	this.textIn = new lib.textIn();
	this.textIn.parent = this;
	this.textIn.setTransform(304.2,336.2,1.221,1.221,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.textIn).wait(1));

	// Layer 2
	this.aboutT = new lib.aboutT();
	this.aboutT.parent = this;
	this.aboutT.setTransform(197.3,445,1.221,1.221);

	this.profileT2 = new lib.profileT2();
	this.profileT2.parent = this;
	this.profileT2.setTransform(146,339.9,1.221,1.221);

	this.about1 = new lib.about1();
	this.about1.parent = this;
	this.about1.setTransform(229.5,355.5,1.315,1.326,0,0,0,0.1,0.1);

	this.reka = new lib.reka();
	this.reka.parent = this;
	this.reka.setTransform(298.8,207.5,1.308,1.318,0,0,0,0.1,0.1);

	this.profile = new lib.profile();
	this.profile.parent = this;
	this.profile.setTransform(84.4,187.6,1.366,1.35,0,0,0,0.1,0.1);

	this.page = new lib.page();
	this.page.parent = this;
	this.page.setTransform(256.7,296,1.221,1.221,0,0,0,0.1,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqTHjIAAieIhtAAIAAsnIYBAAIAAPFg");
	this.shape.setTransform(411.7,423.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.page},{t:this.profile},{t:this.reka},{t:this.about1},{t:this.profileT2},{t:this.aboutT}]}).wait(1));

	// Layer 1
	this.un3 = new lib.un3();
	this.un3.parent = this;
	this.un3.setTransform(465.5,189.3,1.221,1.221);

	this.un2 = new lib.un2();
	this.un2.parent = this;
	this.un2.setTransform(346.8,185.7,1.221,1.221,0,0,0,0.1,0.1);

	this.un1 = new lib.un1();
	this.un1.parent = this;
	this.un1.setTransform(224.7,185.7,1.221,1.221,0,0,0,0.1,0.1);

	this.howtodo = new lib.howtodo();
	this.howtodo.parent = this;
	this.howtodo.setTransform(172.2,69.6,1.221,1.221,0,0,0,0.1,0.1);

	this.inste = new lib.inste();
	this.inste.parent = this;
	this.inste.setTransform(313.9,239.8,1.221,1.221);

	this.text = new cjs.Text("טיפים לעיצוב ושיווק ברשתות החברתיות ", "bold 18px 'Assistant'", "#FF9900");
	this.text.textAlign = "right";
	this.text.lineHeight = 26;
	this.text.lineWidth = 312;
	this.text.parent = this;
	this.text.setTransform(463.6,12.9,1.136,1.136);

	this.twitter = new lib.twitter();
	this.twitter.parent = this;
	this.twitter.setTransform(193.8,241.3,1.221,1.221,0,0,0,0.1,0.1);

	this.highschool = new lib.highschool();
	this.highschool.parent = this;
	this.highschool.setTransform(566.7,370.2,1.221,1.221);

	this.soldier = new lib.soldier();
	this.soldier.parent = this;
	this.soldier.setTransform(588.8,374,1.221,1.221,0,0,0,0.1,0.1);

	this.arts = new lib.arts();
	this.arts.parent = this;
	this.arts.setTransform(589.9,405.4,1.221,1.221);

	this.students = new lib.students();
	this.students.parent = this;
	this.students.setTransform(598.6,236.4,1.221,1.221,0,0,0,0.1,0.1);

	this.adults = new lib.adults();
	this.adults.parent = this;
	this.adults.setTransform(601.5,450.3,1.221,1.221);

	this.linkd = new lib.linkd();
	this.linkd.parent = this;
	this.linkd.setTransform(435.8,240.6,1.221,1.221,0,0,0,0.1,0);

	this.face = new lib.face();
	this.face.parent = this;
	this.face.setTransform(86.8,240.6,1.221,1.221);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("EgxaAAAMBi1AAA");
	this.shape_1.setTransform(329.3,119.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,51,255,0)").ss(1,1,1).p("AGMp3ICLAAIBsAAAqCq6ISZAAIAABDIAAP+IyZAAAKDK7Ij3AA");
	this.shape_2.setTransform(694.5,118.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.face},{t:this.linkd},{t:this.adults},{t:this.students},{t:this.arts},{t:this.soldier},{t:this.highschool},{t:this.twitter},{t:this.text},{t:this.inste},{t:this.howtodo},{t:this.un1},{t:this.un2},{t:this.un3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(280,250.6,933.1,492.9);
// library properties:
lib.properties = {
	width: 660,
	height: 480,
	fps: 9,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/shivoklinew_atlas_.png?1499080957240", id:"shivoklinew_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;