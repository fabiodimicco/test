/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.viz.ui5.Bar");jQuery.sap.require("sap.viz.library");jQuery.sap.require("sap.viz.ui5.core.BaseChart");sap.viz.ui5.core.BaseChart.extend("sap.viz.ui5.Bar",{metadata:{library:"sap.viz",aggregations:{"general":{type:"sap.viz.ui5.types.RootContainer",multiple:false},"interaction":{type:"sap.viz.ui5.types.controller.Interaction",multiple:false},"title":{type:"sap.viz.ui5.types.Title",multiple:false},"legendGroup":{type:"sap.viz.ui5.types.Legend",multiple:false},"legend":{type:"sap.viz.ui5.types.legend.Common",multiple:false},"toolTip":{type:"sap.viz.ui5.types.Tooltip",multiple:false},"xyContainer":{type:"sap.viz.ui5.types.XYContainer",multiple:false},"dataLabel":{type:"sap.viz.ui5.types.Datalabel",multiple:false},"xAxis":{type:"sap.viz.ui5.types.Axis",multiple:false},"yAxis":{type:"sap.viz.ui5.types.Axis",multiple:false},"background":{type:"sap.viz.ui5.types.Background",multiple:false},"plotArea":{type:"sap.viz.ui5.types.Bar",multiple:false}},events:{"selectData":{},"deselectData":{},"showTooltip":{deprecated:true},"hideTooltip":{deprecated:true},"initialized":{}}}});sap.viz.ui5.Bar.M_EVENTS={'selectData':'selectData','deselectData':'deselectData','showTooltip':'showTooltip','hideTooltip':'hideTooltip','initialized':'initialized'};
sap.viz.ui5.Bar.prototype.getVIZChartType=function(){return"viz/bar"};
sap.viz.ui5.Bar.prototype.getGeneral=function(){return this._getOrCreate("general")};
sap.viz.ui5.Bar.prototype.getInteraction=function(){return this._getOrCreate("interaction")};
sap.viz.ui5.Bar.prototype.getTitle=function(){return this._getOrCreate("title")};
sap.viz.ui5.Bar.prototype.getLegendGroup=function(){return this._getOrCreate("legendGroup")};
sap.viz.ui5.Bar.prototype.getLegend=function(){return this._getOrCreate("legend")};
sap.viz.ui5.Bar.prototype.getToolTip=function(){return this._getOrCreate("toolTip")};
sap.viz.ui5.Bar.prototype.getXyContainer=function(){return this._getOrCreate("xyContainer")};
sap.viz.ui5.Bar.prototype.getDataLabel=function(){return this._getOrCreate("dataLabel")};
sap.viz.ui5.Bar.prototype.getXAxis=function(){return this._getOrCreate("xAxis")};
sap.viz.ui5.Bar.prototype.getYAxis=function(){return this._getOrCreate("yAxis")};
sap.viz.ui5.Bar.prototype.getBackground=function(){return this._getOrCreate("background")};
sap.viz.ui5.Bar.prototype.getPlotArea=function(){return this._getOrCreate("plotArea")};
sap.viz.ui5.Bar.prototype.attachSelectData=function(d,h,l){return this._attachVIZEvent("selectData",d,h,l)};
sap.viz.ui5.Bar.prototype.detachSelectData=function(h,l){return this._detachVIZEvent("selectData",h,l)};
sap.viz.ui5.Bar.prototype.attachDeselectData=function(d,h,l){return this._attachVIZEvent("deselectData",d,h,l)};
sap.viz.ui5.Bar.prototype.detachDeselectData=function(h,l){return this._detachVIZEvent("deselectData",h,l)};
sap.viz.ui5.Bar.prototype.attachShowTooltip=function(d,h,l){return this._attachVIZEvent("showTooltip",d,h,l)};
sap.viz.ui5.Bar.prototype.detachShowTooltip=function(h,l){return this._detachVIZEvent("showTooltip",h,l)};
sap.viz.ui5.Bar.prototype.attachHideTooltip=function(d,h,l){return this._attachVIZEvent("hideTooltip",d,h,l)};
sap.viz.ui5.Bar.prototype.detachHideTooltip=function(h,l){return this._detachVIZEvent("hideTooltip",h,l)};
sap.viz.ui5.Bar.prototype.attachInitialized=function(d,h,l){return this._attachVIZEvent("initialized",d,h,l)};
sap.viz.ui5.Bar.prototype.detachInitialized=function(h,l){return this._detachVIZEvent("initialized",h,l)};

