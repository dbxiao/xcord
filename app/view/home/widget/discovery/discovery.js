/**
 * @author [dbxiao]
 * @date   [2015-09-08]
 * @widget [discovery]
 * @desc   [探索导航widget]
 */

var discovery = function(option){
	this._option = {
		//option code is here
	};
	$.extend(this._option, option);
	this.init();
};

discovery.view = {};

discovery.prototype = {

	/** [init 程序入口] */
	init : function(){
		this.view();
		this.handle();


	},

	/** [view 初始化DOM] */
	view : function(){
		discovery.view = {
			"DIS_UL" : $("._DIS_UL")
		};
	},

	/** [handle 事件绑定] */
	handle : function(){
		var _this = this;
		var data = "",
			ref  = "";
		discovery.view.DIS_UL.on("click", ".dis-item", function(){
			data = $(this).attr("data");
			switch(data){
				case "xiangji" : 
					ref = window.open('file:///android_asset/www/view/xphone/home/page/camera/camera.html', '_blank', 'location=no');
					break;
				default : 
					ref = window.open('http://www.baidu.com', '_blank', 'location=no');
					break;
			};
		});
	}
};

module.exports = discovery;