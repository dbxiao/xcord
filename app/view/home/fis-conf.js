var product = "xphone",
    namespace = "home";

fis.config.merge({
    product : product,
    namespace : namespace,
    
    pack:{
        'pkg/home_widget.js': [ 
            /widget\/(.*?).js$/
        ],
        'pkg/home_widget.css': [
            /widget\/(.*?).css$/
        ]
    },
    deploy : {
        /** 编译到本地local环境，webroot目录 */
        local : [
            {
                from : "/view",
                include : '**.html',
                to : "../../x-output/webroot/"
            },
            {
                from : "/res",
                include : /.*\.(?:js|css|png|jpg|gif|tpl).*/,
                to : "../../x-output/webroot/"
            }
        ],

        /** 编译到cordova环境，cordova目录 */
        cordova : [
            {
                from : "/view",
                include : '**.html',
                to : "../../x-output/cordova/www/",
                replace : {
                    from : "/res/",
                    to   : "file:///android_asset/www/res/"
                }
            },
            {
                from : "/res",
                include : /.*\.(?:js|css|png|jpg|gif|tpl).*/,
                to : "../../x-output/cordova/www/",
                replace : {
                    from : "/res/",
                    to   : "file:///android_asset/www/res/"
                }
            }
        ]
    }
});