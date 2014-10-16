/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/Model','./ResourcePropertyBinding'],function(q,M,R){"use strict";var a=M.extend("sap.ui.model.resource.ResourceModel",{constructor:function(d){M.apply(this,arguments);this.sDefaultBindingMode=sap.ui.model.BindingMode.OneTime;this.mSupportedBindingModes={"OneWay":false,"TwoWay":false,"OneTime":true};this.oData=d;if(d&&(d.bundleUrl||d.bundleName)){this.ResourceBundle=this.loadResourceBundle(d)}else{throw new Error("Neither bundleUrl nor bundleName are given. One of these is mandatory.")}},metadata:{publicMethods:["getResourceBundle"]}});a.prototype.loadResourceBundle=function(d){var c=sap.ui.getCore().getConfiguration(),r,u,l,i;l=d.bundleLocale;if(!l){l=c.getLanguage()}i=c.getOriginInfo();u=d.bundleUrl;if(d.bundleName){u=q.sap.getModulePath(d.bundleName,'.properties')}r=q.sap.resources({url:u,locale:l,includeInfo:i});return r};a.prototype.enhance=function(d){var c=this.loadResourceBundle(d);if(c){this.ResourceBundle._enhance(c)}};a.prototype.bindProperty=function(p){var b=new R(this,p);return b};a.prototype.getProperty=function(p){return this.ResourceBundle.getText(p)};a.prototype.getResourceBundle=function(){return this.ResourceBundle};a.prototype._handleLocalizationChange=function(){if(this.oData&&(this.oData.bundleUrl||this.oData.bundleName)){this.ResourceBundle=this.loadResourceBundle(this.oData)}};return a},true);

