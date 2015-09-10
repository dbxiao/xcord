/**
 * @class   [home-注册路由]
 * @author  [dbxiao]
 * @data    [2015-06]
 */
var home = [
    /**
     * VIEW
     */
	{   //首页
        'path'  : /^\/home$/gi,
        'view'  : 'xphone/home/page/index/index'
    },
    {   //首页
        'path'  : /^\/list$/gi,
        'view'  : 'xphone/home/page/list/list'
    },
    {   //首页
        'path'  : /^\/camera$/gi,
        'view'  : 'xphone/home/page/camera/camera'
    }

];
module.exports = home;