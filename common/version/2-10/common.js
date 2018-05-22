!function(){var t;t=function(){function t(){this._cookieNamePrefix="_five_crm_",this._domain="",this._sessionLength=2,this._cookieExpiryDays=365,this._additionalParams=[],this._utmParams=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","utm_5crm","network","placement","adposition","matchtype","keyword","device","target","ifsearch:search","ifcontent:content","adtype","devicemodel","ifmobile:mobile"],this.setCurrentSession(),this.checkGUID(),this.utmPresentInUrl()&&this.writeUtmCookieFromParams()}return t.prototype.checkGUID=function(){var t,e;if(t="guid",e=this.readCookie(t),!e){var o=this.generateGUID();this.createCookie(t,o,this._sessionLength/24,null,this._domain)}},t.prototype.generateGUID=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},t.prototype.createCookie=function(t,e,o,n,i,r){var a,u,s,c,m,h;h=null,o&&(m=new Date,m.setTime(m.getTime()+24*o*60*60*1e3),h=m),u=null!=h?"; expires="+h.toGMTString():"",s=null!=n?"; path="+n:"; path=/",a=null!=i?"; domain="+i:"",c=null!=r?"; secure":"",document.cookie=this._cookieNamePrefix+t+"="+escape(e)+u+s+a+c},t.prototype.readCookie=function(t){var e,o,n,i;for(i=this._cookieNamePrefix+t+"=",o=document.cookie.split(";"),n=0;n<o.length;){for(e=o[n];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(i))return e.substring(i.length,e.length);n++}return null},t.prototype.jsonp=function(){var t={};return t.send=function(t,e){var o=e.callbackName||"callback"+Math.round(1e5*Math.random()),n=e.onSuccess||function(){},i=e.onTimeout||function(){},r=e.timeout||10,a=window.setTimeout(function(){window[o]=function(){},i()},1e3*r);window[o]=function(t){window.clearTimeout(a),n(t)};var u=document.createElement("script");u.type="text/javascript",u.async=!0,u.charset="utf-8",u.src=t+"&callback="+o,document.getElementsByTagName("head")[0].appendChild(u)},t}(),t.prototype.getCookie=function(t){for(var e=t+"=",o=document.cookie.split(";"),n=0;n<o.length;n++){for(var i=o[n];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(e))return i.substring(e.length,i.length)}return""},t.prototype.getParameterByName=function(t){var e,o,n;return t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),o="[\\?&]"+t+"=([^&#]*)",e=new RegExp(o),n=e.exec(window.location.search),n?decodeURIComponent(n[1].replace(/\+/g," ")):""},t.prototype.utmPresentInUrl=function(){var t,e,o,n;for(n=this._utmParams,t=0,e=n.length;e>t;t++)if(o=n[t],this.getParameterByName(o))return!0;return!1},t.prototype.writeCookie=function(t,e,o){this.createCookie(t,e,o||this._cookieExpiryDays,null,this._domain)},t.prototype.writeUtmCookieFromParams=function(){var t,e,o,n,i;for(n=this._utmParams,t=0,e=n.length;e>t;t++)o=n[t],i=this.getParameterByName(o),this.writeCookie(o,i)},t.prototype.visits=function(){return this.readCookie("visits")},t.prototype.getGAID=function(t){var e=this.getCookie("_ga");if(e&&""!=e){var o=e.split(".");t.gaid=o[2]+"."+o[3]}return""},t.prototype.getYAID=function(t){var e=this.getCookie("_ym_uid");if(e&&""!=e){var o=Object.keys(window),n=new RegExp("^yaCounter.*"),i=[];o.forEach(function(t){null!=n.exec(t)&&i.push(t)});var r=null;if(i.length>0){var a=i[0].split("yaCounter");r=a[1]}r&&(t.yaid=e,t.ya_counter=r)}return""},t.prototype.checkUTM=function(t){var e,o=this,n=["utm_source","utm_campaign","utm_medium","utm_term","utm_content","utm_5crm","keyword","guid"];n.forEach(function(n){e=o.readCookie(n),e?t[n]=unescape(e):t[n]=""})},t.prototype.setCurrentSession=function(){var t,e;t="current_session",e=this.readCookie(t),e||this.createCookie(t,"true",this._sessionLength/24,null,this._domain)},t}();var e;e=function(){function e(){this.utmCookie=new t,this.isInit=!0}return e}(),FIVE_CRM_GLOBAL.UtmForm=new e}(window);