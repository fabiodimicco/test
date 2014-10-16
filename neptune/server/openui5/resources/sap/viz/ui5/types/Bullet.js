/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.types.Bullet");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Bullet",{metadata:{library:"sap.viz",properties:{"orientation":{type:"sap.viz.ui5.types.Bullet_orientation",group:"",defaultValue:sap.viz.ui5.types.Bullet_orientation.vertical,deprecated:true},"colorPalette":{type:"string[]",group:"",defaultValue:['#2479BC','#d6d6d6','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF','#95D4AB','#EAE98F','#F9BE92','#EC9A99','#BC98BD','#1EB7B2','#73C03C','#F48323','#EB271B','#D9B5CA','#AED1DA','#DFECB2','#FCDAB0','#F5BCB4']},"drawingEffect":{type:"sap.viz.ui5.types.Bullet_drawingEffect",group:"",defaultValue:sap.viz.ui5.types.Bullet_drawingEffect.normal},"isRoundCorner":{type:"boolean",group:"",defaultValue:false,deprecated:true},"referenceValuesColorPalette":{type:"string[]",group:"",defaultValue:['#FCDCDA','#FEECDA','#DDF3E4']}},aggregations:{"toolTip":{type:"sap.viz.ui5.types.Bullet_tooltip",multiple:false,deprecated:true}}}});
sap.viz.ui5.types.Bullet.prototype.getToolTip=function(){return this._getOrCreate("toolTip")}

