!function(){var e;e=function(){function e(){this._cookieNamePrefix="_five_crm_",this._domain="",this._sessionLength=2,this._cookieExpiryDays=365,this._additionalParams=[],this._utmParams=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","network","placement","adposition","matchtype","keyword","device","target","ifsearch:search","ifcontent:content","adtype","devicemodel","ifmobile:mobile"],this.setCurrentSession(),this.checkGUID(),this.utmPresentInUrl()&&this.writeUtmCookieFromParams()}return e.prototype.checkGUID=function(){var e,t;if(e="guid",t=this.readCookie(e),!t){var i=this.generateGUID();this.createCookie(e,i,this._sessionLength/24,null,this._domain)}},e.prototype.generateGUID=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},e.prototype.createCookie=function(e,t,i,o,r,n){var s,a,u,c,m,h;h=null,i&&(m=new Date,m.setTime(m.getTime()+24*i*60*60*1e3),h=m),a=null!=h?"; expires="+h.toGMTString():"",u=null!=o?"; path="+o:"; path=/",s=null!=r?"; domain="+r:"",c=null!=n?"; secure":"",document.cookie=this._cookieNamePrefix+e+"="+escape(t)+a+u+s+c},e.prototype.readCookie=function(e){var t,i,o,r;for(r=this._cookieNamePrefix+e+"=",i=document.cookie.split(";"),o=0;o<i.length;){for(t=i[o];" "===t.charAt(0);)t=t.substring(1,t.length);if(0===t.indexOf(r))return t.substring(r.length,t.length);o++}return null},e.prototype.getParameterByName=function(e){var t,i,o;return e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),i="[\\?&]"+e+"=([^&#]*)",t=new RegExp(i),o=t.exec(window.location.search),o?decodeURIComponent(o[1].replace(/\+/g," ")):""},e.prototype.utmPresentInUrl=function(){var e,t,i,o;for(o=this._utmParams,e=0,t=o.length;t>e;e++)if(i=o[e],this.getParameterByName(i))return!0;return!1},e.prototype.writeCookie=function(e,t,i){this.createCookie(e,t,i||this._cookieExpiryDays,null,this._domain)},e.prototype.writeUtmCookieFromParams=function(){var e,t,i,o,r;for(o=this._utmParams,e=0,t=o.length;t>e;e++)i=o[e],r=this.getParameterByName(i),this.writeCookie(i,r)},e.prototype.visits=function(){return this.readCookie("visits")},e.prototype.setCurrentSession=function(){var e,t;e="current_session",t=this.readCookie(e),t||this.createCookie(e,"true",this._sessionLength/24,null,this._domain)},e}();var t;t=function(){function t(){this.utmCookie=new e}return t}(),FIVE_CRM_GLOBAL.UtmForm=new t}(window);