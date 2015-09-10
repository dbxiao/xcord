/**
 * @author:dbxiao
 * @data:2014-11-11
 * @module:checkRouterPage
 */

/** Agent */
var routerAgent = require('./routerAgent');

/**
 * [routerCheckAction 路由主程序]
 * @param  {String} _path [访问url]
 */
var routerCheckAction = function(_path) {
    //默认页面配置
    var action = {
    	"path":_path , 
    	"view":"pc/home/page/index"
    };

    for (x in routerAgent ) {
        if (_path.match(routerAgent[x].path)) {
            action = routerAgent[x];
            break;
        } else if (_path.match(/^(\/webroot\/static)/gi)) {
            action.view = "";
            break;
        } else {
            continue;
        }
    }
    return action;
};

module.exports = routerCheckAction;