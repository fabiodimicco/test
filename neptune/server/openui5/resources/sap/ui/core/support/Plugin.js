/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/Object','jquery.sap.dom','jquery.sap.script'],function(q,B){"use strict";var P=B.extend("sap.ui.core.support.Plugin",{constructor:function(i,t,s){B.apply(this);this._id=i?i:q.sap.uid();this._title=t?t:"";this._bActive=false;this._aEventIds=[];this._bIsToolPlugin=s.getType()===sap.ui.core.support.Support.StubType.TOOL}});P.prototype.init=function(s){for(var i=0;i<this._aEventIds.length;i++){var h=this["on"+this._aEventIds[i]];if(h&&q.isFunction(h)){s.attachEvent(this._aEventIds[i],h,this)}}this._bActive=true};P.prototype.exit=function(s){for(var i=0;i<this._aEventIds.length;i++){var h=this["on"+this._aEventIds[i]];if(h&&q.isFunction(h)){s.detachEvent(this._aEventIds[i],h,this)}}this._bActive=false};P.prototype.getId=function(){return this._id};P.prototype.getTitle=function(){return this._title};P.prototype.isToolPlugin=function(){return this._bIsToolPlugin};P.prototype.$=function(s){var r=q.sap.byId(s?this.getId()+"-"+s:this.getId());if(r.length==0&&!s){r=q("<DIV/>",{id:this.getId()});r.appendTo(q(".sapUiSupportCntnt"))}return r};P.prototype.isActive=function(){return this._bActive};return P},true);

