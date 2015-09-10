var toolbar = require("home:widget/toolbar/toolbar.js");

var _pub = {};
var _pri = {};

_pri.view = {
	"CAMERA_BTN" : $("._CAMERA_BTN")
};

_pub = {
	/** [init 程序入口] */
	init : function(){
		document.addEventListener("deviceready", _pub.onDeviceReady, false);
		_pub.initToolbar();
		_pub.handle();
	},

	view : function(){

	},

	/** [initToolbar 定义toolbar] */
	initToolbar : function(){
		new toolbar({
			"back" : true,
			"title" : "相机"
		});
	},

	/** [onDeviceReady 设备准备就绪方法] */
	onDeviceReady : function(){
		alert(JSON.stringify(navigator.camera));
	},

	/** [getPicture 获取图片] */
	getPicture : function(){
		navigator.camera.getPicture(_pub.onSuccess, _pub.onFail, {
			quality: 80
		});
	},

	/** [onSuccess 获取图片成功回调] */
	onSuccess : function (imageData) {
	    var image = document.getElementById('myImage');
	    image.src = "data:image/jpeg;base64," + imageData;
	},

	/** [onFail 获取图片失败回调] */
	onFail : function (message) {
	    alert('Failed because: ' + message);
	},

	/** handle */
	handle : function(){
		_pri.view.CAMERA_BTN.on("click", function(){
			_pub.getPicture();
		});
	}
};

_pub.init();
