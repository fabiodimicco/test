/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/LocaleData'],function(q,L){"use strict";var D=function(){throw new Error()};D.oDateInfo={oDefaultFormatOptions:{style:"medium"},aFallbackFormatOptions:[{style:"short"},{style:"medium"},{pattern:"yyyy-MM-dd"},{pattern:"yyyyMMdd"}],getPattern:function(l,s){return l.getDatePattern(s)},oRequiredParts:{"text":true,"year":true,"weekYear":true,"month":true,"day":true}};D.oDateTimeInfo={oDefaultFormatOptions:{style:"medium"},aFallbackFormatOptions:[{style:"short"},{style:"medium"},{pattern:"yyyy-MM-dd'T'hh:mm:ss"},{pattern:"yyyyMMdd hhmmss"}],getPattern:function(l,s){var d=l.getDateTimePattern(s),a=l.getDatePattern(s),t=l.getTimePattern(s);return d.replace("{1}",a).replace("{0}",t)},oRequiredParts:{"text":true,"year":true,"weekYear":true,"month":true,"day":true,"hour0_23":true,"hour1_24":true,"hour0_11":true,"hour1_12":true}};D.oTimeInfo={oDefaultFormatOptions:{style:"medium"},aFallbackFormatOptions:[{style:"short"},{style:"medium"},{pattern:"hh:mm:ss"},{pattern:"hhmmss"}],getPattern:function(l,s){return l.getTimePattern(s)},oRequiredParts:{"text":true,"hour0_23":true,"hour1_24":true,"hour0_11":true,"hour1_12":true}};D.getInstance=function(f,l){return this.getDateInstance(f,l)};D.getDateInstance=function(f,l){return this.createInstance(f,l,this.oDateInfo)};D.getDateTimeInstance=function(f,l){return this.createInstance(f,l,this.oDateTimeInfo)};D.getTimeInstance=function(f,l){return this.createInstance(f,l,this.oTimeInfo)};D.createInstance=function(f,l,I){var F=q.sap.newObject(this.prototype);if(f instanceof sap.ui.core.Locale){l=f;f=undefined}if(!l){l=sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale()}F.oLocale=l;F.oLocaleData=L.getInstance(l);F.oFormatOptions=q.extend(false,{},I.oDefaultFormatOptions,f);if(!F.oFormatOptions.pattern){F.oFormatOptions.pattern=I.getPattern(F.oLocaleData,F.oFormatOptions.style)}if(!I.aFallbackFormats){I.aFallbackFormats=[];q.each(I.aFallbackFormatOptions,function(i,f){var o=D.createInstance(f,l,I);o.bIsFallback=true;I.aFallbackFormats.push(o)})}F.aFallbackFormats=I.aFallbackFormats;F.oRequiredParts=I.oRequiredParts;F.init();return F};D.prototype.init=function(){this.aMonthsAbbrev=this.oLocaleData.getMonths("abbreviated");this.aMonthsWide=this.oLocaleData.getMonths("wide");this.aMonthsAbbrevSt=this.oLocaleData.getMonthsStandAlone("abbreviated");this.aMonthsWideSt=this.oLocaleData.getMonthsStandAlone("wide");this.aDaysAbbrev=this.oLocaleData.getDays("abbreviated");this.aDaysWide=this.oLocaleData.getDays("wide");this.aDaysAbbrevSt=this.oLocaleData.getDaysStandAlone("abbreviated");this.aDaysWideSt=this.oLocaleData.getDaysStandAlone("wide");this.aDayPeriods=this.oLocaleData.getDayPeriods("abbreviated");this.aFormatArray=this.parseJavaDateFormat(this.oFormatOptions.pattern)};D.prototype.oStates={"G":"era","y":"year","Y":"weekYear","M":"month","L":"monthStandalone","w":"weekInYear","W":"weekInMonth","D":"dayInYear","d":"day","F":"dayOfWeekInMonth","E":"dayNameInWeek","c":"dayNameInWeekStandalone","u":"dayNumberOfWeek","a":"amPmMarker","H":"hour0_23","k":"hour1_24","K":"hour0_11","h":"hour1_12","m":"minute","s":"second","S":"millisecond","z":"timezoneGeneral","Z":"timezoneRFC822","X":"timezoneISO8601"};D.prototype.format=function(d,u){if(u===undefined){u=this.oFormatOptions.UTC}var b=[],p,a=u?d.getUTCDay():d.getDay(),c=u?d.getUTCDate():d.getDate(),m=u?d.getUTCMonth():d.getMonth(),y=u?d.getUTCFullYear():d.getFullYear(),M=u?d.getUTCMilliseconds():d.getMilliseconds(),s=u?d.getUTCSeconds():d.getSeconds(),e=u?d.getUTCMinutes():d.getMinutes(),h=u?d.getUTCHours():d.getHours(),t=Math.abs(d.getTimezoneOffset()),P=d.getTimezoneOffset()>0,H=Math.floor(t/60),f=t%60,Y,w,g,r;for(var i=0;i<this.aFormatArray.length;i++){p=this.aFormatArray[i];switch(p.sType){case"text":b.push(p.sValue);break;case"day":b.push(q.sap.padLeft(String(c),"0",p.iDigits));break;case"dayNameInWeek":if(p.iDigits<4){b.push(this.aDaysAbbrev[a])}else if(p.iDigits>=4){b.push(this.aDaysWide[a])}break;case"dayNameInWeekStandalone":if(p.iDigits<4){b.push(this.aDaysAbbrevSt[a])}else if(p.iDigits>=4){b.push(this.aDaysWideSt[a])}break;case"dayNumberOfWeek":b.push(a||7);break;case"month":if(p.iDigits==3){b.push(this.aMonthsAbbrev[m])}else if(p.iDigits>=4){b.push(this.aMonthsWide[m])}else{b.push(q.sap.padLeft(String(m+1),"0",p.iDigits))}break;case"monthStandalone":if(p.iDigits==3){b.push(this.aMonthsAbbrevSt[m])}else if(p.iDigits>=4){b.push(this.aMonthsWideSt[m])}else{b.push(q.sap.padLeft(String(m+1),"0",p.iDigits))}break;case"era":b.push("AD");break;case"year":case"weekYear":Y=""+y;if(p.iDigits==2&&Y.length>2){Y=Y.substr(Y.length-2)}b.push(q.sap.padLeft(Y,"0",p.iDigits));break;case"weekInYear":w="";if(d.getWeek){w+=d.getWeek()}b.push(q.sap.padLeft(w,"0",p.iDigits));break;case"hour0_23":b.push(q.sap.padLeft(String(h),"0",p.iDigits));break;case"hour1_24":if(h==0){g="24"}else{g=String(h)}b.push(q.sap.padLeft(g,"0",p.iDigits));break;case"hour0_11":if(h>11){g=String(h-12)}else{g=String(h)}b.push(q.sap.padLeft(g,"0",p.iDigits));break;case"hour1_12":if(h>12){g=String(h-12)}else if(h==0){g="12"}else{g=String(h)}b.push(q.sap.padLeft(g,"0",p.iDigits));break;case"minute":b.push(q.sap.padLeft(String(e),"0",p.iDigits));break;case"second":b.push(q.sap.padLeft(String(s),"0",p.iDigits));break;case"millisecond":b.push(q.sap.padLeft(String(M),"0",p.iDigits));break;case"amPmMarker":var j=h<12?0:1;b.push(this.aDayPeriods[j]);break;case"timezoneGeneral":if(p.iDigits>3&&d.getTimezoneLong){b.push(d.getTimezoneLong());break}else if(d.getTimezoneShort){b.push(d.getTimezoneShort());break}b.push("GMT");case"timezoneISO8601":if(!u&&t!=0){b.push(P?"-":"+");b.push(q.sap.padLeft(String(H),"0",2));b.push(":");b.push(q.sap.padLeft(String(f),"0",2))}else{b.push("Z")}break;case"timezoneRFC822":if(!u&&t!=0){b.push(P?"-":"+");b.push(q.sap.padLeft(String(H),"0",2));b.push(q.sap.padLeft(String(f),"0",2))}break}}r=b.join("");if(sap.ui.getCore().getConfiguration().getOriginInfo()){r=new String(r);r.originInfo={source:"Common Locale Data Repository",locale:this.oLocale.toString(),style:this.oFormatOptions.style,pattern:this.oFormatOptions.pattern}}return r};D.prototype.parse=function(v,u){if(u===undefined){u=this.oFormatOptions.UTC}var d,I=0,e=false,a=null,m=null,y=null,h=null,M=null,s=null,b=null,p=false,P,c,t=null,V=true,r=this.oRequiredParts;function f(C){return C>=48&&C<=57}function g(w){var x=0;while(x<w&&f(v.charCodeAt(I+x))){x++}return v.substr(I,x)}function j(w){var i;for(i=0;i<w.length;i++){if(v.indexOf(w[i],I)==I){return w[i]}}return null}function k(w){var i;for(i=0;i<w.length;i++){if(v.indexOf(w[i],I)==I){return i}}return null}function l(w){var x=v.charAt(I)=="+"?-1:1;I++;c=g(2);var z=parseInt(c,10);I=I+2;if(w){I++}c=g(2);I=I+2;t=parseInt(c,10);t=(t+60*z)*x}function n(w,x){if(w in r&&x){V=false}}v=q.trim(v);for(var i=0;i<this.aFormatArray.length;i++){P=this.aFormatArray[i];switch(P.sType){case"text":if(v.indexOf(P.sValue,I)==I){I+=P.sValue.length}else{n(P.sType,this.aFormatArray[i+1].sType in r)}break;case"day":c=g(Math.max(P.iDigits,2));n(P.sType,c==="");I+=c.length;a=parseInt(c,10);break;case"dayNameInWeek":case"dayNameInWeekStandalone":c=j(this.aDaysWide);if(c){I+=c.length;break}c=j(this.aDaysWideSt);if(c){I+=c.length;break}c=j(this.aDaysAbbrev);if(c){I+=c.length;break}c=j(this.aDaysAbbrevSt);if(c){I+=c.length;break}break;case"dayNumberOfWeek":c=g(P.iDigits);I+=c.length;break;case"month":case"monthStandalone":if(P.iDigits<3){c=g(Math.max(P.iDigits,2));n(P.sType,c==="");m=parseInt(c,10)-1;I+=c.length}else{m=k(this.aMonthsWide);if(m!=null){I+=this.aMonthsWide[m].length;break}m=k(this.aMonthsWideSt);if(m!=null){I+=this.aMonthsWideSt[m].length;break}m=k(this.aMonthsAbbrev);if(m!=null){I+=this.aMonthsAbbrev[m].length;break}m=k(this.aMonthsAbbrevSt);if(m!=null){I+=this.aMonthsAbbrevSt[m].length;break}n(P.sType,true)}break;case"era":break;case"year":case"weekYear":if(P.iDigits==1){c=g(4);I+=c.length}else if(P.iDigits==2){c=g(2);if(c.length==2){y=parseInt(c,10);if(y<90){c="20"+c}else{c="19"+c}I+=2}else{I+=c.length}}else{c=g(P.iDigits);I+=c.length}n(P.sType,c==="");y=parseInt(c,10);break;case"weekInYear":break;case"hour0_23":c=g(Math.max(P.iDigits,2));n(P.sType,c==="");I+=c.length;h=parseInt(c,10);break;case"hour1_24":c=g(Math.max(P.iDigits,2));n(P.sType,c==="");I+=c.length;h=parseInt(c,10);if(h==24){h=0}break;case"hour0_11":c=g(Math.max(P.iDigits,2));n(P.sType,c==="");I+=c.length;h=parseInt(c,10);break;case"hour1_12":c=g(Math.max(P.iDigits,2));n(P.sType,c==="");I+=c.length;h=parseInt(c,10);if(h==12){h=0}break;case"minute":c=g(Math.max(P.iDigits,2));n(P.sType,c==="");I+=c.length;M=parseInt(c,10);break;case"second":c=g(Math.max(P.iDigits,2));n(P.sType,c==="");I+=c.length;s=parseInt(c,10);break;case"millisecond":c=g(Math.max(P.iDigits,3));c=q.sap.padRight(c,"0",3);I+=c.length;b=parseInt(c,10);break;case"amPmMarker":var A=this.aDayPeriods[0],o=this.aDayPeriods[1];if(v.indexOf(A,I)==I){p=false;I+=2}else if(v.indexOf(o,I)==I){p=true;I+=2}break;case"timezoneGeneral":var T=v.substring(I,I+3);if(T==="GMT"||T==="UTC"){I=I+3}else if(v.substring(I,I+2)==="UT"){I=I+2}else if(v.charAt(I)=="Z"){I=I+1;t=0;break}else{q.sap.log.error(v+" cannot be parsed correcly by sap.ui.core.format.DateFormat: The given timezone is not supported!");break}case"timezoneISO8601":if(v.charAt(I)=="Z"){I=I+1;t=0;break}l(true);break;case"timezoneRFC822":l(false);break}if(!V){break}}if(I<v.length){V=false}if(p){h+=12}if(V){if(t!=null){d=new Date(0);d.setUTCFullYear(y||1970);d.setUTCMonth(m||0);d.setUTCDate(a||1);d.setUTCHours(h||0);d.setUTCMinutes((M||0)+t);d.setUTCSeconds(s||0);d.setUTCMilliseconds(b||0)}else if(u){d=new Date(0);d.setUTCFullYear(y||1970);d.setUTCMonth(m||0);d.setUTCDate(a||1);d.setUTCHours(h||0);d.setUTCMinutes(M||0);d.setUTCSeconds(s||0);d.setUTCMilliseconds(b||0)}else{d=new Date(1970,0,1,0,0,0);d.setFullYear(y||1970);d.setMonth(m||0);d.setDate(a||1);d.setHours(h||0);d.setMinutes(M||0);d.setSeconds(s||0);d.setMilliseconds(b||0)}return d}if(!this.bIsFallback){q.each(this.aFallbackFormats,function(i,F){d=F.parse(v);if(d){return false}});return d}return null};D.prototype.parseJavaDateFormat=function(f){var F=[],i,Q=false,c=null,s="",n="";for(i=0;i<f.length;i++){var C=f.charAt(i),N,p,P;if(Q){if(C=="'"){p=f.charAt(i-1);P=f.charAt(i-2);N=f.charAt(i+1);if(p=="'"&&P!="'"){Q=false}else if(N=="'"){i+=1}else{Q=false;continue}}if(s=="text"){c.sValue+=C}else{c={sType:"text",sValue:C};F.push(c);s="text"}}else{if(C=="'"){Q=true}else if(this.oStates[C]){n=this.oStates[C];if(s==n){c.iDigits++}else{c={sType:n,iDigits:1};F.push(c);s=n}}else{if(s=="text"){c.sValue+=C}else{c={sType:"text",sValue:C};F.push(c);s="text"}}}}return F};return D},true);

