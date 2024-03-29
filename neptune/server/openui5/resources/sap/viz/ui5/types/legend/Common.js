/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.legend.Common");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.legend.Common",{metadata:{library:"sap.viz",properties:{"visible":{type:"boolean",group:"",defaultValue:true},"formatString":{type:"string",group:"",defaultValue:'null',deprecated:true},"isHierarchical":{type:"boolean",group:"",defaultValue:false},"isScrollable":{type:"boolean",group:"",defaultValue:false},"position":{type:"sap.viz.ui5.types.legend.Common_position",group:"",defaultValue:sap.viz.ui5.types.legend.Common_position.right,deprecated:true},"type":{type:"sap.viz.ui5.types.legend.Common_type",group:"",defaultValue:sap.viz.ui5.types.legend.Common_type.ColorLegend,deprecated:true},"alignment":{type:"sap.viz.ui5.types.legend.Common_alignment",group:"",defaultValue:sap.viz.ui5.types.legend.Common_alignment.start,deprecated:true},"drawingEffect":{type:"sap.viz.ui5.types.legend.Common_drawingEffect",group:"",defaultValue:sap.viz.ui5.types.legend.Common_drawingEffect.normal}},aggregations:{"title":{type:"sap.viz.ui5.types.legend.Common_title",multiple:false}}}});
sap.viz.ui5.types.legend.Common.prototype.getTitle=function(){return this._getOrCreate("title")}

