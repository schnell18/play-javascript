(function(){
    var domain = '.ucloud.cn';
    var host = 'docs.ucloud.cn';
    var setSiteId = '6';
    var trackerUrl = 'console-analytics.ucloud.cn';

    var performance = window.performance;
    function loadScript(trackerScript, success, fail) {
        var script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.src = trackerScript;

        var head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(script);

        script.onload = success;
        script.onerror = fail;
    }

    function initClickReport() {
        var reportTags = ['BUTTON', 'A', 'INPUT', 'LABEL', 'SELECT', 'OPTION'];
        var REPORT_CATEGORY = 'CLICKS';
        // 点击上报事件捕获，在捕获阶段获取
        document.addEventListener(
            'click',
            function (e) {
                if (!e || !e.target) {
                    return;
                }

                var target = e.target;
                var tagName = target.tagName;
                var type = target.getAttribute('type') || '',
                    upperCaseTagName = tagName.toUpperCase();
                if (!reportTags.includes(upperCaseTagName)) {
                    return;
                }

                if (upperCaseTagName === 'INPUT' && (type === 'text' || type === 'password')) {
                    return;
                }

                var href, _target;
                var info = {};
                info.text = target.value || target.innerText;
                if (tagName === 'A') {
                    info.tag = tagName;
                    info.href = target.getAttribute('href') || '';
                    info.target = target.getAttribute('target') || '';
                }

                window._paq.push(['trackEvent', REPORT_CATEGORY, 'CLICK_' + tagName, JSON.stringify(info)]);
            },
            true
        );
    }

    function piwikExists(success) {
        // In case of TMS,  we load a first container_XXX.js which triggers aynchronously the loading of the standard Piwik.js
        // this will avoid the error throwed in initMatomo when window.Piwik is undefined
        // if window.Piwik is still undefined when counter reaches 3000ms we reject and go to error

        var checkInterval = 50;
        var timeout = 3000;
        var waitStart = Date.now();

        var interval = setInterval(function() {
            if (window.Piwik) {
                clearInterval(interval);

                return success();
            }

            if (Date.now() >= waitStart + timeout) {
                clearInterval(interval);

                console.error("[matomo]: window.Piwik undefined after waiting for " + timeout + "ms");
            }
        }, checkInterval);
    }

    var cookie = {
        get: function(name){
            if (document.cookie.length <= 0) {
                return '';
            }

            var start = document.cookie.indexOf(name + '=');
            var end = document.cookie.indexOf(';', start);

            end = end < 0 ? document.cookie.length : end;

            return start < 0 ? '' : unescape(document.cookie.substring(start + name.length + 1, end));
        },
        set: function(name, value, age){
            var str = name + '=' + escape(value);
            var max = age ? ';max-age=' + age : '';
            var exp = new Date(Date.now() + 24 * 3600 * 1000 * 365).toUTCString();

            document.cookie = str + max + ';path=/;expires=' + exp + ';domain=' + domain;
        }
    };

    function init(params, success) {
        var setSiteId = params.setSiteId;
        var trackerUrl = params.trackerUrl;

        var trackerScript = "//" + trackerUrl + "/m.js";
        var trackerEndpoint = "//" + trackerUrl + "/m.php";

        window._paq = window._paq || [];
        window._paq.push(['setTrackerUrl', trackerEndpoint]);
        window._paq.push(['setSiteId', setSiteId]);
        window._paq.push(['enableLinkTracking']);

        initClickReport();

        loadScript(trackerScript, function(){
            piwikExists(function(){
                success();
            });
        }, function(error){
            if (error.target) {
                return console.error(
                    "[matomo] An error occurred trying to load " + error.target.src + ". If the file exists you may have an ad- or trackingblocker enabled."
                );
            }

            console.error(error);
        })
    }

    init({ setSiteId: setSiteId, trackerUrl: trackerUrl }, function(){
        trackUrlChanged();
    });

    var USER_EMAIL;
    function setUserEmail(email) {
        if (email) {
            USER_EMAIL = email;
        }

        return USER_EMAIL;
    }

    function uuid() {
        var d = new Date().getTime();
        if (performance && typeof performance.now === 'function') {
            (d += performance.now()), (d *= 1000);
        }

        var u = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });

        return u;
    }

    function getSid() {
        var id = cookie.get('das_session');

        if (!id) {
            id = uuid();
            cookie.set('das_session', id);
        }

        return id;
    }

    function trackUrlChanged(url) {
        url = url || window.location.pathname + window.location.search;
        if(host !== window.location.host){
            return;
        }

        window._paq = window._paq || [];
        try {
            window._paq.push(['setUserId', USER_EMAIL]);
            window._paq.push(['setCustomVariable', '1', 'sid', getSid(), 'page']);
            window._paq.push(['setCustomVariable', '2', 'uid', cookie.get('U_USER_ID'), 'page']);
            window._paq.push(['setCustomVariable', '3', 'cid', cookie.get('U_COMPANY_ID'), 'page']);
            if (url) {
                window._paq.push(['setCustomUrl', url]);
                window._paq.push(['setDocumentTitle', document.title]);
            }

            window._paq.push(['trackPageView']);
        } catch (e) {
            console.error(e);
        }
    }

    window._paqSetUserEmail = setUserEmail;
    window._paqTrackUrlChanged = trackUrlChanged;
})(window);