!function(){var e=FIVE_CRM_GLOBAL.calltracking;e.config={path:{getPhone:FIVE_CRM_GLOBAL.common.api_path+"ctm/calltracking/get-phone",refreshCookie:FIVE_CRM_GLOBAL.common.api_path+"ctm/calltracking/refresh-cookie"}},e.data={},e.methods={encodeQueryData:function(e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")},getGenStaticData:function(){return"url="+encodeURIComponent(window.location.hostname)+"&public_token="+FIVE_CRM_GLOBAL.common.public_token},buildQueryData:function(){var e=this;return e.encodeQueryData(FIVE_CRM_GLOBAL.calltracking.data)},getDataForRefresh:function(){var e=this;return FIVE_CRM_GLOBAL.calltracking.config.path.refreshCookie+"?format=json&"+e.getGenStaticData()+"&"+e.buildQueryData()},getDataForFetch:function(){var e=this;return FIVE_CRM_GLOBAL.calltracking.config.path.getPhone+"?format=json&"+e.getGenStaticData()+"&"+e.buildQueryData()},getLinkElement:function(e,t){var n=document.createElement("a");return n.setAttribute("href","tel:+"+e),n.innerHTML=t,n.style.color="#000",n.style.textDecoration="none",n},phoneNumberFormat:function(t){var n="";if(Object.keys(e.settings).length>0&&""!=e.settings.mask)for(var o=e.settings.mask,a=0,r=0;r<o.length;r++)"9"==o[r]&&11>a?(n+=t[a],a++):n+=o[r];else"8800"!=t.substr(0,4)&&(n+="+"),n+=t.substr(0,1),n+=" ("+t.substr(1,3)+") ",n+=t.substr(4,3)+"-",n+=t.substr(7,2)+"-",n+=t.substr(9,2);return n},pastePhoneNumber:function(e){var t=document.getElementsByClassName("five_crm_calltracking_phone"),n=this;"7800"==e.substr(0,4)&&(e=e.replace("7800","8800"));for(var o=n.phoneNumberFormat(e),a=n.getLinkElement(e,o),r=0;r<t.length;r++)t[r].innerHTML="",t[r].appendChild(a.cloneNode(!0))},fetch:function(){var e=this;FIVE_CRM_GLOBAL.UtmForm.utmCookie.checkUTM(FIVE_CRM_GLOBAL.calltracking.data),FIVE_CRM_GLOBAL.UtmForm.utmCookie.getGAID(FIVE_CRM_GLOBAL.calltracking.data),FIVE_CRM_GLOBAL.UtmForm.utmCookie.getYAID(FIVE_CRM_GLOBAL.calltracking.data),FIVE_CRM_GLOBAL.UtmForm.utmCookie.jsonp.send(e.getDataForFetch(),{onSuccess:function(t){t.ans?(FIVE_CRM_GLOBAL.calltracking.data.phone=t.phone,e.pastePhoneNumber(t.phone)):console.warn("[5CRM->widget->calltracking->msg]: "+t.msg)}})},intervalRefreshCookies:function(){var e=this,t=0,n=14,o=1,a=setInterval(function(){t++,e.refreshCookie(),t>=o&&clearInterval(a)},6e4*n)},refreshCookie:function(){var e=this;e.requestRefreshCookies()},requestRefreshCookies:function(){var e=this;FIVE_CRM_GLOBAL.UtmForm.utmCookie.jsonp.send(e.getDataForRefresh(),{onSuccess:function(t){t.ans?(e.saveCookie(),FIVE_CRM_GLOBAL.calltracking.data.phone=t.phone,e.pastePhoneNumber(t.phone)):console.warn("[5CRM->widget->calltracking->msg]: "+t.msg)}})},checkCookies:function(){return!!FIVE_CRM_GLOBAL.UtmForm.utmCookie.readCookie("calltracking_obj")},addMinutes:function(e,t){return new Date(e.getTime()+6e4*t)},saveCookie:function(){var e=this;FIVE_CRM_GLOBAL.UtmForm.utmCookie.writeCookie("calltracking_obj",JSON.stringify(FIVE_CRM_GLOBAL.calltracking.data),e.addMinutes(new Date,15))}},e.checkLoadCommonJs=function(){var e=this;FIVE_CRM_GLOBAL.UtmForm.isInit?e.run():setTimeout(function(){e.checkLoadCommonJs()},300)},e.initSettings=function(){},e.run=function(){var t=this;e.settings?e.initSettings():e.settings={},t.methods.checkCookies()?(t.data=JSON.parse(unescape(FIVE_CRM_GLOBAL.UtmForm.utmCookie.readCookie("calltracking_obj"))),t.methods.refreshCookie(),t.methods.intervalRefreshCookies()):(t.methods.fetch(),t.methods.saveCookie(),t.methods.intervalRefreshCookies())},e.init=function(){var e=this;e.checkLoadCommonJs()},e.init()}(window);