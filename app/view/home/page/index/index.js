var _pub = {};
var _pri = {};

_pri.view = {
	"PAGE_INDEX" : $("._PAGE_INDEX")
};

_pub = {
	init : function(){
		_pub.listen();
	},

	changeTab : function(nav){
		_pri.view.PAGE_INDEX.find(".on").removeClass("on");
		_pri.view.PAGE_INDEX.find("."+nav).addClass("on");
		_pub.getPicture();
	},

	listen : function(){
		webos.broadcast.listen("WGT_NAV_CHANGE", function(data){
			_pub.changeTab(data.nav);
		});
	}
};

_pub.init();
