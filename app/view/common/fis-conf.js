var product = "xphone",
    namespace = "common";

fis.config.merge({
    product : product,
    namespace : namespace,
    roadmap:{
        path:[
            /*** 模板编译规则（将所有html文件发布到view目录）*/
            {
                reg : /^\/(page|layout|widget)\/(.+\.html)$/i,
                isMod : false,
                release : '/view/${product}/${namespace}/$1/$2',
                id : '$1/$2'
            },
            /*** 静态文件编译规则（将所有静态文件发布到static目录）*/
            {
                reg : /^\/(page|layout|widget|static)\/(.*\.(js|css|jpg|png|gif|tpl))$/i,
                isMod : false,
                release : '/res/${product}/${namespace}/$1/$2',
                id : '$1/$2'
            }
        ]
    },
    pack:{
        //base-all.js
        "static/js/import/base-all.js": [
            /static\/js\/lib\/(.*?).js$/,
            /static\/js\/extend\/(.*?).js$/,
            /static\/js\/util\/(.*?).js$/
        ],
        //base-all.css
        "static/css/import/base-all.css": [
            /static\/css\/(.*?).css$/
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
                include : /.*\.(?:js|css|png|jpg|gif|tpl|eot|svg|ttf|woff).*/,
                to : "../../x-output/webroot/"
            }
        ],

        /** 编译到cordova环境，cordova目录 */
        cordova : [
            {
                from : "/view",
                include : '**.html',
                to : "../../x-output/cordova/www/"
            },
            {
                from : "/res",
                include : /.*\.(?:js|css|png|jpg|gif|tpl|eot|svg|ttf|woff).*/,
                to : "../../x-output/cordova/www/"
            }
        ]
    }
});