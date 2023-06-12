var OneTrustStub=function(t){"use strict";var e=new function(){this.optanonCookieName="OptanonConsent",this.optanonHtmlGroupData=[],this.optanonHostData=[],this.genVendorsData=[],this.vendorsServiceData=[],this.IABCookieValue="",this.oneTrustIABCookieName="eupubconsent",this.oneTrustIsIABCrossConsentEnableParam="isIABGlobal",this.isStubReady=!0,this.geolocationCookiesParam="geolocation",this.EUCOUNTRIES=["BE","BG","CZ","DK","DE","EE","IE","GR","ES","FR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE","GB","HR","LI","NO","IS"],this.stubFileName="otSDKStub",this.DATAFILEATTRIBUTE="data-domain-script",this.bannerScriptName="otBannerSdk.js",this.mobileOnlineURL=[],this.isMigratedURL=!1,this.migratedCCTID="[[OldCCTID]]",this.migratedDomainId="[[NewDomainId]]",this.userLocation={country:"",state:""}};(l=c=c||{})[l.Days=1]="Days",l[l.Weeks=7]="Weeks",l[l.Months=30]="Months",l[l.Years=365]="Years",(l=n=n||{}).Name="OTGPPConsent",l[l.ChunkSize=4e3]="ChunkSize",l.ChunkCountParam="GPPCookiesCount",(l={CPRA:8,8:"CPRA",CCPA:8})[8]="CCPA",l[l.CDPA=9]="CDPA",l[l.USNATIONAL=7]="USNATIONAL",l[l.COLORADO=10]="COLORADO",l[l.UCPA=11]="UCPA",l[l.CTDPA=12]="CTDPA";var i,n,a="otpreview",o=(n.Name,"PRODUCTION"),s=((l={})[c.Days]="PCenterVendorListLifespanDay",l[c.Weeks]="LfSpnWk",l[c.Months]="PCenterVendorListLifespanMonth",l[c.Years]="LfSpnYr",r.prototype.camelize=function(t){return t.split("-").map((function(t,e){return 0===e?t:t[0].toUpperCase()+t.slice(1)})).join("")},r.prototype.strToObj=function(t){for(var e={},i=t.split(";").map((function(t){return t.trim()})),n=0,a=void 0;n<i.length;++n)if(/:/.test(i[n])){if(!(a=i[n].split(/:(.+)/))[1])return null;e[this.camelize(a[0])]=a[1].trim()}return e},r);function r(){var t=this;this.implementThePolyfill=function(){var e=t,i=Element.prototype.setAttribute;return Element.prototype.setAttribute=function(t,n){if("style"!==t.toLowerCase()&&i.apply(this,[t,n]),"style"!==t.toLowerCase()||n||this.removeAttribute("style"),"style"===t.toLowerCase()&&n){this.removeAttribute("style");var a,o=e.strToObj(n);for(a in o)this.style[a]=o[a]}},!0}}(n=i=i||{}).ping="ping",n.addEventListener="addEventListener",n.removeEventListener="removeEventListener",n.hasSection="hasSection",n.getSection="getSection",n.getField="getField",n.getGPPData="getGPPData";var p=new function(){var t=this;this.LOCATOR_NAME="__gppLocator",this.win=window,this.customInit="CUSTOMINIT",this.init=function(){t.win.__gpp&&"function"==typeof t.win.__gpp||(t.win.__gpp=t.executeGppApi,window.addEventListener("message",t.messageHandler,!1),t.addFrame(t.LOCATOR_NAME))},this.removeGppApi=function(){delete t.win.__gpp;var e=document.querySelectorAll("iframe[name="+t.LOCATOR_NAME+"]")[0];e&&e.parentElement.removeChild(e)},this.executeGppApi=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var a=null==(a=t.win)?void 0:a.__gpp;if(a.queue=a.queue||[],a.events=a.events||[],!e.length||1===e.length&&"queue"===e[0])return a.queue;if(1===e.length&&"events"===e[0])return a.events;var o=e[0],s=1<e.length?e[1]:null,r=2<e.length?e[2]:null;switch(o){case i.ping:return t.getPingRequest(s);case i.addEventListener:return t.addEventListener(s,r);case i.removeEventListener:return t.removeEventListener(r);default:return void t.addToQueue(o,s,r)}},this.getPingRequest=function(t){var e={gppVersion:1,cmpStatus:"stub",cmpDisplayStatus:"hidden",apiSupport:["uspcav1","uspvav1"],currentAPI:"",cmpId:Number.parseInt("28")};return t&&t(e,!0),e},this.addFrame=function(e){var i,n=t.win.document,a=Boolean(t.win.frames[e]);return a||(n.body?((i=n.createElement("iframe")).style.cssText="display:none",i.name=e,i.setAttribute("title","GPP Locator"),n.body.appendChild(i)):setTimeout((function(){t.addFrame(e)}),5)),!a},this.addEventListener=function(e,i){var n,a=t.win.__gpp;return a.events=a.events||[],null!=(n=a)&&n.lastId||(a.lastId=0),a.lastId++,a.events.push({id:a.lastId,callback:e,parameter:i}),{eventName:"listenerRegistered",listenerId:a.lastId,data:!0,pingData:t.getPingRequest()}},this.removeEventListener=function(e){var i=!1,n=t.win.__gpp;return n.events=n.events||[],n.events=n.events.filter((function(t){return t.id.toString()!==e.toString()||!(i=!0)})),{eventName:"listenerRemoved",listenerId:e,data:i,pingData:t.getPingRequest()}},this.addToQueue=function(e,i,n){var a=t.win.__gpp;a.queue=a.queue||[],a.queue.push([e,i,n])},this.messageHandler=function(e){var i,n,a="string"==typeof e.data;try{i=a?JSON.parse(e.data):e.data}catch(t){i=null}i&&i.__gppCall&&(n=i.__gppCall,(0,t.win.__gpp)(n.command,(function(t,i){t={__gppReturn:{returnValue:t,success:i,callId:n.callId}},e&&e.source&&e.source.postMessage&&e.source.postMessage(a?JSON.stringify(t):t,e.origin||"*")}),n.parameter))},this.customInit||this.init()},l=(u.prototype.initConsentSDK=function(){this.initCustomEventPolyfill(),this.ensureHtmlGroupDataInitialised(),this.setStubScriptElement(),this.setOTDataLayer(),this.getParam(),this.fetchBannerSDKDependency(),this.captureNonce()},u.prototype.captureNonce=function(){this.nonce=e.stubScriptElement.nonce||e.stubScriptElement.getAttribute("nonce")||null},u.prototype.fetchBannerSDKDependency=function(){this.setDomainDataFileURL(),this.crossOrigin=e.stubScriptElement.getAttribute("crossorigin")||null,this.previewMode="true"===e.stubScriptElement.getAttribute("data-preview-mode"),this.otFetch(e.bannerDataParentURL,this.getLocation.bind(this))},u.prototype.setDomainIfBulkDomainEnabled=function(t){var i=t&&t.TenantFeatures,n=window.location.hostname,a=t.Domain,s=t.BulkDomainCheckUrl;i&&i.CookieV2BulkDomainManagement&&n!==a&&t.ScriptType===o&&((i=window.sessionStorage)&&i.getItem("bulkDomainMgmtEnabled")?this.handleBulkDomainMgmt({isValid:"true"===window.sessionStorage.getItem("bulkDomainMgmtEnabled")},t):(a={location:e.storageBaseURL.replace(/^https?:\/\//,""),domainId:this.domainId,url:n},this.otFetch(s,this.handleBulkDomainMgmt,!1,a,t)))},u.prototype.getLocation=function(t){if(this.setDomainIfBulkDomainEnabled(t),(t.TenantFeatures&&t.TenantFeatures.CookieV2CSP||t.CookieV2CSPEnabled)&&this.nonce&&(this.setAttributePolyfillIsActive=!0,(new s).implementThePolyfill()),!t.RuleSet[0].Type)return this.iabTypeAdded=!1,window.__cmp=this.executeCmpApi,window.__tcfapi=this.executeTcfApi,this.intializeIabStub(),this.addBannerSDKScript(t);var i,n=window;n.OneTrust&&n.OneTrust.geolocationResponse?(n=n.OneTrust.geolocationResponse,this.setGeoLocation(n.countryCode,n.stateCode),this.addBannerSDKScript(t)):(n=this.readCookieParam(e.optanonCookieName,e.geolocationCookiesParam))||t.SkipGeolocation?(i=n.split(";")[0],n=n.split(";")[1],this.setGeoLocation(i,n),this.addBannerSDKScript(t)):this.getGeoLocation(t)},u.prototype.handleBulkDomainMgmt=function(t,e){window.sessionStorage&&window.sessionStorage.setItem("bulkDomainMgmtEnabled",JSON.stringify(t.isValid)),t.isValid&&(e.Domain=window.location.hostname)},u.prototype.getGeolocationURL=function(t){t.TenantFeatures;var i=""+e.stubScriptElement.getAttribute("src").split(e.stubFileName)[0]+t.Version;return new RegExp("^file://","i").test(i)&&t.MobileSDK?(i="/"+t.GeolocationUrl.replace(/^(http|https):\/\//,"").split("/").slice(1).join("/")+".js",e.storageBaseURL+i):t.GeolocationUrl},u.prototype.geoLocationJsonCallback=function(t,e){e&&this.setGeoLocation(e.country,e.state),this.addBannerSDKScript(t)},u.prototype.getGeoLocation=function(t){var e=this.getGeolocationURL(t);this.otFetch(e,this.geoLocationJsonCallback.bind(this,t),!0)},u.prototype.setOTDataLayer=function(){var t="data-dLayer-ignore",i=e.stubScriptElement.hasAttribute(t);t=e.stubScriptElement.getAttribute(t);this.otDataLayer={ignore:i&&"true"===t||i&&""===t,name:e.stubScriptElement.getAttribute("data-dLayer-name")||"dataLayer"}},u.prototype.setGeoLocation=function(t,i){e.userLocation={country:t,state:i=void 0===i?"":i}},u.prototype.otFetch=function(t,i,n,a,o){void 0===n&&(n=!1),void 0===a&&(a=null);var s=window.sessionStorage&&window.sessionStorage.getItem("otPreviewData");if(new RegExp("^file://","i").test(t))this.otFetchOfflineFile(t,i);else if(0<=t.indexOf("/consent/")&&this.previewMode&&s)s=JSON.parse(s).domainJson,i(s);else{e.mobileOnlineURL.push(t);var r=new XMLHttpRequest;if(r.onload=function(t){var e;this&&this.responseText?e=this.responseText:t&&t.target&&(e=t.target.responseText),o?i(JSON.parse(e),o):i(JSON.parse(e))},r.onerror=function(){i()},r.open("GET",t),r.withCredentials=!1,n&&r.setRequestHeader("accept","application/json"),a)for(var p in a)r.setRequestHeader(p,a[p]);r.send()}},u.prototype.otFetchOfflineFile=function(t,e){var i=(t=t.replace(".json",".js")).split("/"),n=i[i.length-1].split(".js")[0];this.jsonp(t,(function(){e(window[n])}))},u.prototype.jsonp=function(t,i){var n=document.createElement("script");n.setAttribute("src",t),this.nonce&&n.setAttribute("nonce",this.nonce),n.async=!0,n.type="text/javascript",this.crossOrigin&&n.setAttribute("crossorigin",this.crossOrigin),document.getElementsByTagName("head")[0].appendChild(n),new RegExp("^file://","i").test(t)||e.mobileOnlineURL.push(t),i&&(n.onload=n.onerror=function(){i()})},u.prototype.getRegionSet=function(t){var i,n,a,o=e.userLocation,s=t.RuleSet.filter((function(t){return!0===t.Default}));if(!o.country&&!o.state)return s&&0<s.length?s[0]:null;for(var r=o.state.toLowerCase(),p=o.country.toLowerCase(),l=0;l<t.RuleSet.length;l++)if(!0===t.RuleSet[l].Global)a=t.RuleSet[l];else{var u=t.RuleSet[l].States;if(u[p]&&0<=u[p].indexOf(r)){n=t.RuleSet[l];break}0<=t.RuleSet[l].Countries.indexOf(p)&&(i=t.RuleSet[l])}return n||i||a},u.prototype.ensureHtmlGroupDataInitialised=function(){this.initializeIABData(),this.initializeGroupData(),this.initializeHostData(),this.initializeGenVenData()},u.prototype.initializeGroupData=function(){var t=this.readCookieParam(e.optanonCookieName,"groups");t&&(e.optanonHtmlGroupData=this.deserialiseStringToArray(t))},u.prototype.initializeHostData=function(){var t=this.readCookieParam(e.optanonCookieName,"hosts");t&&(e.optanonHostData=this.deserialiseStringToArray(t))},u.prototype.initializeGenVenData=function(){var t=this.readCookieParam(e.optanonCookieName,"genVendors");t&&(e.genVendorsData=this.deserialiseStringToArray(t))},u.prototype.initializeIABData=function(){this.validateIABGDPRApplied(),this.validateIABGlobalScope()},u.prototype.validateIABGlobalScope=function(){var t=this.readCookieParam(e.optanonCookieName,e.oneTrustIsIABCrossConsentEnableParam);t?"true"===t?(e.hasIABGlobalScope=!0,e.isStubReady=!1):(e.hasIABGlobalScope=!1,e.IABCookieValue=this.getCookie(e.oneTrustIABCookieName)):e.isStubReady=!1},u.prototype.validateIABGDPRApplied=function(){var t=this.readCookieParam(e.optanonCookieName,e.geolocationCookiesParam).split(";")[0];t?this.isBoolean(t)?e.oneTrustIABgdprAppliesGlobally="true"===t:e.oneTrustIABgdprAppliesGlobally=0<=e.EUCOUNTRIES.indexOf(t):e.isStubReady=!1},u.prototype.isBoolean=function(t){return"true"===t||"false"===t},u.prototype.readCookieParam=function(t,e){var i,n,a,o;if(t=this.getCookie(t)){for(n={},a=t.split("&"),i=0;i<a.length;i+=1)o=a[i].split("="),n[decodeURIComponent(o[0])]=decodeURIComponent(o[1]).replace(/\+/g," ");return e&&n[e]?n[e]:e&&!n[e]?"":n}return""},u.prototype.getCookie=function(t){if(this.isAmp){var e=JSON.parse(window.localStorage.getItem(this.domainId))||{};if(e)return e[t]||null}for(var i,n=t+"=",a=document.cookie.split(";"),o=0;o<a.length;o+=1){for(i=a[o];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(n))return i.substring(n.length,i.length)}return null},u.prototype.updateGtmMacros=function(){for(var t=[],i=e.optanonHtmlGroupData.length,n=0;n<i;n++)this.endsWith(e.optanonHtmlGroupData[n],":1")&&t.push(e.optanonHtmlGroupData[n].replace(":1",""));for(i=e.optanonHostData.length,n=0;n<i;n++)this.endsWith(e.optanonHostData[n],":1")&&t.push(e.optanonHostData[n].replace(":1",""));for(i=e.genVendorsData.length,n=0;n<i;n++)this.endsWith(e.genVendorsData[n],":1")&&t.push(e.genVendorsData[n].replace(":1",""));for(i=e.vendorsServiceData.length,n=0;n<i;n++)this.endsWith(e.vendorsServiceData[n],":1")&&t.push(e.vendorsServiceData[n].replace(":1",""));var a,o=","+this.serialiseArrayToString(t)+",",s=(window.OnetrustActiveGroups=o,window.OptanonActiveGroups=o,window),r=(this.otDataLayer.ignore||void 0===s[this.otDataLayer.name]?this.otDataLayer.ignore||(s[this.otDataLayer.name]=[{event:"OneTrustLoaded",OnetrustActiveGroups:o},{event:"OptanonLoaded",OptanonActiveGroups:o}]):s[this.otDataLayer.name].constructor===Array&&(s[this.otDataLayer.name].push({OnetrustActiveGroups:o}),s[this.otDataLayer.name].push({OptanonActiveGroups:o})),new CustomEvent("consent.onetrust",{detail:t}));!this.otDataLayer.ignore&&t.length&&(s[this.otDataLayer.name].constructor===Array&&s[this.otDataLayer.name].push({event:"OneTrustGroupsUpdated",OnetrustActiveGroups:o}),a=new CustomEvent("OneTrustGroupsUpdated",{detail:t})),setTimeout((function(){t.length&&window.dispatchEvent(r),a&&window.dispatchEvent(a)}))},u.prototype.deserialiseStringToArray=function(t){return t?t.split(","):[]},u.prototype.endsWith=function(t,e){return-1!==t.indexOf(e,t.length-e.length)},u.prototype.serialiseArrayToString=function(t){return t.toString()},u.prototype.setStubScriptElement=function(){e.stubScriptElement=document.querySelector("script[src*='"+e.stubFileName+"']");var t=e.stubScriptElement&&0<=e.stubScriptElement.getAttribute("src").indexOf("did=");e.stubScriptElement&&e.stubScriptElement.hasAttribute(e.DATAFILEATTRIBUTE)?this.domainId=e.stubScriptElement.getAttribute(e.DATAFILEATTRIBUTE).trim():t?this.domainId=e.stubScriptElement.getAttribute("src").split("did=")[1]:e.stubScriptElement||(e.stubScriptElement=document.querySelector("script[src*='"+e.migratedCCTID+"']"),e.stubScriptElement&&(e.isMigratedURL=!0,this.domainId=e.migratedDomainId.trim()))},u.prototype.setDomainDataFileURL=function(){var t=e.stubScriptElement.getAttribute("src"),i=-1<t.indexOf("/consent");t&&(e.isMigratedURL?e.storageBaseURL=t.split("/consent/"+e.migratedCCTID)[0]:e.storageBaseURL=(i?t.split("/consent"):t.split("/scripttemplates/"+e.stubFileName))[0]),this.storageBaseURL=e.storageBaseURL,this.isPreview&&-1===this.domainId.indexOf("test")?this.domainId=this.domainId+"-test":this.isPreview=!1,e.bannerBaseDataURL=e.storageBaseURL&&e.storageBaseURL+"/consent/"+this.domainId,e.bannerDataParentURL=e.bannerBaseDataURL+"/"+this.domainId+".json"},u.prototype.initCustomEventPolyfill=function(){if("function"==typeof window.CustomEvent)return!1;function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i}t.prototype=window.Event.prototype,window.CustomEvent=t},u.prototype.removeTcf=function(){delete window.__tcfapi;var t=document.querySelectorAll("iframe[name='__tcfapiLocator']")[0];t&&t.parentElement.removeChild(t)},u.prototype.getParamForIE=function(){return{get:function(t){return null===(t=new RegExp("[?&]"+t+"=([^&#]*)").exec(window.location.search))?null:decodeURI(t[1])||""}}},u.prototype.getParam=function(){window.document.documentMode||!window.URLSearchParams?this.urlParams=this.getParamForIE():this.urlParams=new URLSearchParams(window.location.search);var t="true"===this.urlParams.get("otreset"),e="true"===this.urlParams.get("otpreview"),i=(this.geoFromUrl=(this.urlParams.get("otgeo")||"").toLowerCase(),this.readCookieParam(a,"expiry")),n=this.readCookieParam(a,"geo");this.isReset=t||i&&new Date(i)<new Date,this.isPreview=!this.isReset&&(e||i&&new Date(i)>new Date),this.setGeoParam(this.geoFromUrl||n)},u.prototype.setGeoParam=function(t){var e;t&&((e=window).OneTrust||(e.OneTrust={}),t=t.split(","),e.OneTrust.geolocationResponse={countryCode:t[0],stateCode:t[1]})},u);function u(){var t=this;this.iabType=null,this.iabTypeAdded=!0,this.crossOrigin=null,this.isAmp=!1,this.domainId="",this.isReset=!1,this.isPreview=!1,this.geoFromUrl="",this.nonce="",this.setAttributePolyfillIsActive=!1,this.storageBaseURL="",this.charset=null,this.addBannerSDKScript=function(i){var n=t.getRegionSet(i),a=(n.GCEnable||(t.updateGtmMacros(),t.gtmUpdated=!0),t.iabTypeAdded&&("IAB"!==n.Type&&"IAB2"!==n.Type||(t.iabType=n.Type,t.intializeIabStub()),"IAB2"!==n.Type)&&t.removeTcf(),n.IsGPPEnabled?p.init():p.removeGppApi(),e.stubScriptElement.cloneNode(!0)),o=i.UseSDKRefactor?(e.isMigratedURL&&(a.src=e.storageBaseURL+"/scripttemplates/new/scripttemplates/"+e.stubFileName+".js"),e.storageBaseURL+"/scripttemplates/new/scripttemplates/"+i.Version+"/"+e.bannerScriptName):"5.11.0"===i.Version?(e.isMigratedURL&&(a.src=e.storageBaseURL+"/scripttemplates/old/scripttemplates/"+e.stubFileName+".js"),e.storageBaseURL+"/scripttemplates/old/scripttemplates/5.11.0/"+e.bannerScriptName):(e.isMigratedURL&&(a.src=e.storageBaseURL+"/scripttemplates/"+e.stubFileName+".js"),e.storageBaseURL+"/scripttemplates/"+i.Version+"/"+e.bannerScriptName);["charset","data-language","data-document-language","data-domain-script","crossorigin","data-ignore-ga"].forEach((function(t){e.stubScriptElement.getAttribute(t)&&a.setAttribute(t,e.stubScriptElement.getAttribute(t))})),t.charset=e.stubScriptElement.getAttribute("charset"),t.isAmp=!!e.stubScriptElement.getAttribute("amp"),window.otStubData={bannerBaseDataURL:e.bannerBaseDataURL,crossOrigin:t.crossOrigin,domainData:i,domainId:t.domainId,geoFromUrl:t.geoFromUrl,isAmp:t.isAmp,isPreview:t.isPreview,isReset:t.isReset,mobileOnlineURL:e.mobileOnlineURL,nonce:t.nonce,otDataLayer:t.otDataLayer,regionRule:n,setAttributePolyfillIsActive:t.setAttributePolyfillIsActive,storageBaseURL:t.storageBaseURL,stubElement:a,urlParams:t.urlParams,userLocation:e.userLocation,gtmUpdated:t.gtmUpdated,previewMode:t.previewMode,charset:t.charset},t.jsonp(o,null)},this.intializeIabStub=function(){var e=window;t.iabTypeAdded?("IAB"===t.iabType?void 0===e.__cmp&&(window.__cmp=t.executeCmpApi):void 0===e.__tcfapi&&(window.__tcfapi=t.executeTcfApi),t.addIabFrame()):t.addBackwardIabFrame(),e.receiveOTMessage=t.receiveIabMessage,(e.attachEvent||window.addEventListener)("message",e.receiveOTMessage,!1)},this.addIabFrame=function(){var e=window,i="IAB"===t.iabType?"__cmpLocator":"__tcfapiLocator";!e.frames[i]&&(e.document.body?t.addLocator(i,"CMP"):setTimeout(t.addIabFrame,5))},this.addBackwardIabFrame=function(){var e=window,i="__cmpLocator";!!e.frames[i]||(e.document.body?t.addLocator(i,"CMP"):setTimeout(t.addIabFrame,5)),i="__tcfapiLocator";!e.frames[i]&&(e.document.body?t.addLocator(i,"TCF"):setTimeout(t.addIabFrame,5))},this.addLocator=function(t,e){var i=window,n=i.document.createElement("iframe");(function(t,e,i){function n(t){return t?(";"!==(t=t.trim()).charAt(t.length-1)&&(t+=";"),t.trim()):null}void 0===i&&(i=!1);var a=n(t.getAttribute("style")),o=n(e);e="",e=i&&a?function(){for(var t=a.split(";").concat(o.split(";")).filter((function(t){return 0!==t.length})),e="",i="",n=t.length-1;0<=n;n--){var s=t[n].substring(0,t[n].indexOf(":")+1).trim();e.indexOf(s)<0&&(e+=s,i+=t[n]+";")}return i}():o,t.setAttribute("style",e)})(n,"display: none;",!0),n.name=t,n.setAttribute("title",e+" Locator"),i.document.body.appendChild(n)},this.receiveIabMessage=function(e){var i,n,a,o,s,r,p="string"==typeof e.data,l={};try{l=p?JSON.parse(e.data):e.data}catch(s){}l.__cmpCall&&"IAB"===t.iabType?(i=l.__cmpCall.callId,n=l.__cmpCall.command,s=l.__cmpCall.parameter,t.executeCmpApi(n,s,(function(t,a){t={__cmpReturn:{returnValue:t,success:a,callId:i,command:n}},e.source.postMessage(p?JSON.stringify(t):t,e.origin)}))):l.__cmpCall&&"IAB2"===t.iabType&&console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1"),l.__tcfapiCall&&"IAB2"===t.iabType?(a=l.__tcfapiCall.callId,o=l.__tcfapiCall.command,s=l.__tcfapiCall.parameter,r=l.__tcfapiCall.version,t.executeTcfApi(o,s,(function(t,i){t={__tcfapiReturn:{returnValue:t,success:i,callId:a,command:o}},e&&e.source&&e.source.postMessage&&e.source.postMessage(p?JSON.stringify(t):t,"*")}),r)):l.__tcfapiCall&&"IAB"===t.iabType&&console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")},this.executeCmpApi=function(){for(var i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];t.iabType="IAB";var a=i[0],o=i[1],s=i[2];if("function"==typeof s&&a)if(e.isStubReady&&e.IABCookieValue)switch(a){case"ping":t.getPingRequest(s,!0);break;case"getConsentData":t.getConsentDataRequest(s);break;default:t.addToQueue(a,o,s)}else t.addToQueue(a,o,s)},this.executeTcfApi=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];if(t.iabType="IAB2",!e.length)return window.__tcfapi.a||[];var n=e[0],a=e[1],o=e[2],s=e[3];"function"==typeof o&&n&&("ping"===n?t.getPingRequest(o):t.addToQueue(n,a,o,s))},this.addToQueue=function(e,i,n,a){var o=window,s="IAB"===t.iabType?"__cmp":"__tcfapi";o[s].a=o[s].a||[],o[s].a.push([e,i,n,a])},this.getPingRequest=function(i,n){var a,o;void 0===n&&(n=!1),i&&(o=!(a={}),"IAB"===t.iabType?(a={gdprAppliesGlobally:e.oneTrustIABgdprAppliesGlobally,cmpLoaded:n},o=!0):"IAB2"===t.iabType&&(a={gdprApplies:e.oneTrustIABgdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub",displayStatus:"stub",apiVersion:"2.0",cmpVersion:void 0,cmpId:void 0,gvlVersion:void 0,tcfPolicyVersion:void 0},o=!0),i(a,o))},this.getConsentDataRequest=function(t){t&&e.IABCookieValue&&t({gdprApplies:e.oneTrustIABgdprAppliesGlobally,hasGlobalScope:e.hasIABGlobalScope,consentData:e.IABCookieValue},!0)},this.initConsentSDK()}var c=new l;return t.OtSDKStub=l,t.otSdkStub=c,t}({});