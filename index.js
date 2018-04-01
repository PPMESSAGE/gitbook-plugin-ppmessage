
var window = require('window');

module.exports = {
    book: {
    },

    hooks: {
        'finish': function() {
            var _app_uuid = this.config.get("app_uuid") || 'a600998e-efff-11e5-9d9f-02287b8c0ebf' ,
                _ppmessage_url = this.config.get("ppmessage_url") || 'https://ppmessage.cn/ppcom/assets/pp-library.min.js';
                
            window.ppSettings = {
                app_uuid:_app_uuid
            };

            (function(){
                var w=window,d=document;
                function l() {
                    var a=d.createElement('script');
                    a.type='text/javascript';
                    a.async=!0;
                    a.charset='utf-8';
                    a.src=_ppmessage_url;
                    var b=d.getElementsByTagName('script')[0];
                    b.parentNode.insertBefore(a,b)
                }
                l();
            })();
        }
    }
};
