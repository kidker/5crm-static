!function(){FIVE_CRM_GLOBAL.calltracking={config:{path:{getPhone:"http://api2.5crm.ru/crm/api_new/public/ctm/calltracking/get-phone",refreshCookie:"http://api2.5crm.ru/crm/api_new/public/ctm/calltracking/refresh-cookie"}},data:{},methods:{checkUTM:function(e){var o,t=["utm_source","utm_campaign","utm_medium","utm_term","utm_content","keyword","guid"];t.forEach(function(t){o=FIVE_CRM_GLOBAL.UtmForm.utmCookie.readCookie(t),o?e[t]=o.replace("%7D","").replace("%7B",""):e[t]=null})},encodeQueryData:function(e){var o=[];for(var t in e)o.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return o.join("&")},jsonp:function(e,o){"use strict";function t(e,o){var t=document.createElement("script");return t.src=e+(e.indexOf("?")>=0?"&":"?")+"callback="+o,t}if(!e.Promise)throw"Promise not available. Use a polyfill! http://promisesaplus.com/implementations";return function(n){return new Promise(function(r,a){var c="jsonp_callback_"+Math.round(1e5*Math.random()),i=t(n,c);i.onerror=a,o.appendChild(i),/callback=?/.test(n)&&(n=n.replace("=?","="+c)),e[c]=function(t){r(t),e[c]=null,delete e[c],o.removeChild(i)}})}}(this,document.body),getGenStaticData:function(){return"url="+encodeURIComponent(window.location.href)+"&project_token="+FIVE_CRM_GLOBAL.common.project_token+"&public_token="+FIVE_CRM_GLOBAL.common.public_token},buildQueryData:function(){var e=this;return e.encodeQueryData(FIVE_CRM_GLOBAL.calltracking.data)},getDataForRefresh:function(){var e=this;return FIVE_CRM_GLOBAL.calltracking.config.path.refreshCookie+"?format=json&jsoncallback=?&"+e.getGenStaticData()+"&"+e.buildQueryData()},getDataForFetch:function(){var e=this;return FIVE_CRM_GLOBAL.calltracking.config.path.getPhone+"?format=json&jsoncallback=?&"+e.getGenStaticData()+"&"+e.buildQueryData()},pastePhoneNumber:function(e){console.log("pastePhoneNumber, phone = "+e);for(var o=document.getElementsByClassName("five_crm_calltracking_phone"),t=0;t<o.length;t++)o[t].innerHTML=e},fetch:function(){var e=this;e.checkUTM(FIVE_CRM_GLOBAL.calltracking.data),e.jsonp(e.getDataForFetch()).then(function(o){console.log(o),"true"==o.ans?(o.phone="test_phone",FIVE_CRM_GLOBAL.calltracking.data.phone=o.phone,e.pastePhoneNumber(o.phone)):console.log("error 2")})["catch"](function(e){console.log("error 3")})},intervalRefreshCookies:function(){var e=this;setInterval(function(){e.refreshCookie()},84e4)},refreshCookie:function(){var e=this;e.requestRefreshCookies()},requestRefreshCookies:function(){var e=this;e.jsonp(e.getDataForRefresh()).then(function(o){console.log(o),"true"==o.ans?(console.log("-->>"),o.phone="+66666666",e.saveCookie(),FIVE_CRM_GLOBAL.calltracking.data.phone=o.phone,e.pastePhoneNumber(o.phone)):console.log("error 5")})["catch"](function(e){console.log("error 4")})},checkCookies:function(){return!!FIVE_CRM_GLOBAL.UtmForm.utmCookie.readCookie("calltracking_obj")},addMinutes:function(e,o){return new Date(e.getTime()+6e4*o)},saveCookie:function(){var e=this;FIVE_CRM_GLOBAL.UtmForm.utmCookie.writeCookie("calltracking_obj",JSON.stringify(FIVE_CRM_GLOBAL.calltracking.data),e.addMinutes(new Date,15))}},init:function(){var e=this;e.methods.checkCookies()?(e.data=JSON.parse(unescape(FIVE_CRM_GLOBAL.UtmForm.utmCookie.readCookie("calltracking_obj"))),e.methods.refreshCookie(),e.methods.intervalRefreshCookies()):(e.methods.fetch(),e.methods.saveCookie(),e.methods.intervalRefreshCookies())}},FIVE_CRM_GLOBAL.calltracking.init()}(window);