/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/Object'],function(q,B){"use strict";var T=B.extend("sap.ui.model.Type",{constructor:function(){B.apply(this,arguments);this.sName="Type"},metadata:{"abstract":true,publicMethods:["getName"]}});T.prototype.getName=function(){return this.sName};return T},true);

