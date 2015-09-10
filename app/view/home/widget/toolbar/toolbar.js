/**
 * @author [dbxiao]
 * @date   [2015-08-27]
 * @widget [toolbar]
 * @desc   [工具栏]
 */

var toolbar = function(option){
	this._option = {
		title : "xphone",
		back  : false,
		menu  : false
	};
	$.extend(this._option, option);
	this.init();
};

toolbar.view = {};

toolbar.prototype = {
	/** [init 程序入口] */
	init : function(){
		this.view();
		this.renderToobar();
		this.handle();
	},

	/** [view 初始化DOM] */
	view : function(){
		toolbar.view = {
			"WGT_TB_BACK"  : $("._WGT_TB_BACK"),
			"WGT_TB_MENU"  : $("._WGT_TB_MENU"),
			"WGT_TB_TITLE" : $("._WGT_TB_TITLE")
		};
	},

	/** [randerToobar 渲染toolbar] */
	renderToobar : function(){
		debugger;
		this._option.back == true ? toolbar.view.WGT_TB_BACK.css("visibility", "visible") : 
									toolbar.view.WGT_TB_BACK.css("visibility", "hidden");
		this._option.menu == true ? toolbar.view.WGT_TB_MENU.css("visibility", "visible") : 
									toolbar.view.WGT_TB_MENU.css("visibility", "hidden");

		toolbar.view.WGT_TB_TITLE.html(this._option.title);
	},

	/** [handle 事件绑定] */
	handle : function(){
		var _this = this;
		var data = {};
	}
};

module.exports = toolbar;