var _pub = {};
var _pri = {};


alert("list");

_pub = {
	init : function(){

		//webos.util.setCookie("hello","1");
		_pub.getCookie();
		_pub.initMap();
	},
	getCookie : function(){
		alert(webos.util.getCookie("hello"));
	},
	scroll : function(){
		var myScroll;
		myScroll = new IScroll('#wrapper', {
			scrollbars: true,
			mouseWheel: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'scale',
			fadeScrollbars: true
		});
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	},
	initMap : function(){
		// 百度地图API功能
		var map = new BMap.Map("allmap");    // 创建Map实例
		map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
		map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
		map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
		map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	}
};

_pub.init();
