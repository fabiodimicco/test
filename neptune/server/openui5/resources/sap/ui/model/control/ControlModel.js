/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/Model','./ControlPropertyBinding'],function(q,M,C){"use strict";var a=M.extend("sap.ui.model.control.ControlModel",{constructor:function(c){M.apply(this,arguments);this.oControl=c;this.oControl.attachEvent("_change",this.checkUpdate,this);this.oElements=[]}});a.prototype.destroy=function(){this.oControl.detachEvent("_change",this.checkUpdate,this)};a.prototype.addFacadeComponent=function(e){var i=q.inArray(e,this.oElements);if(i<0){this.oElements.push(e);e.attachEvent("_change",this.checkUpdate,this)}};a.prototype.removeFacadeComponent=function(e){var i=q.inArray(e,this.oElements);if(i>=0){this.oElements.splice(i,1);e.detachEvent("_change",this.checkUpdate,this)}};a.prototype.bindProperty=function(p,c){c=c||this.oControl;if(c!==this.oControl){this.addFacadeComponent(c)}return new C(this,p,c)};a.prototype.checkUpdate=function(e){if(this._onchange){this._onchange(e)}if(this.aBindings.length){var b=this.aBindings.slice(0);q.each(b,function(i,B){B.checkUpdate()})}};return a},true);

