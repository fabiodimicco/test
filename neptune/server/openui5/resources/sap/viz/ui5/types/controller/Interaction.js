/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.controller.Interaction");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.controller.Interaction",{metadata:{library:"sap.viz",properties:{"supportedEventNames":{type:"string[]",group:"",defaultValue:['mouseup','mousedown','mousemove','mouseout','mouseover','touchstart'],deprecated:true},"enableMouseMove":{type:"boolean",group:"",defaultValue:true,deprecated:true},"enableMouseOver":{type:"boolean",group:"",defaultValue:true,deprecated:true},"enableMouseOut":{type:"boolean",group:"",defaultValue:true,deprecated:true},"supportLassoEvent":{type:"boolean",group:"",defaultValue:true,deprecated:true},"holdSelection":{type:"boolean",group:"",defaultValue:false,deprecated:true},"preserveSelectionWhenDragging":{type:"boolean",group:"",defaultValue:false,deprecated:true},"decorations":{type:"any",group:"",defaultValue:null}},aggregations:{"selectability":{type:"sap.viz.ui5.types.controller.Interaction_selectability",multiple:false},"pan":{type:"sap.viz.ui5.types.controller.Interaction_pan",multiple:false,deprecated:true}}}});
sap.viz.ui5.types.controller.Interaction.prototype.getSelectability=function(){return this._getOrCreate("selectability")};
sap.viz.ui5.types.controller.Interaction.prototype.getPan=function(){return this._getOrCreate("pan")}

