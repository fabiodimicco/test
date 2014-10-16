/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.layout.form.GridLayout");jQuery.sap.require("sap.ui.layout.library");jQuery.sap.require("sap.ui.layout.form.FormLayout");sap.ui.layout.form.FormLayout.extend("sap.ui.layout.form.GridLayout",{metadata:{library:"sap.ui.layout",properties:{"singleColumn":{type:"boolean",group:"Misc",defaultValue:false}}}});jQuery.sap.require("sap.ui.layout.form.GridContainerData");jQuery.sap.require("sap.ui.layout.form.GridElementData");(function(){sap.ui.layout.form.GridLayout.prototype.toggleContainerExpanded=function(c){this.rerender()};sap.ui.layout.form.GridLayout.prototype.contentOnAfterRendering=function(f,c){sap.ui.layout.form.FormLayout.prototype.contentOnAfterRendering.apply(this,arguments);if(c.getMetadata().getName()!="sap.ui.commons.Image"){c.$().css("width","100%")}};sap.ui.layout.form.GridLayout.prototype.onLayoutDataChange=function(e){if(this.getDomRef()){this.rerender()}};sap.ui.layout.form.GridLayout.prototype.onsaptabnext=function(e){var r=sap.ui.getCore().getConfiguration().getRTL();if(!r){this.tabForward(e)}else{this.tabBack(e)}};sap.ui.layout.form.GridLayout.prototype.onsaptabprevious=function(e){var r=sap.ui.getCore().getConfiguration().getRTL();if(!r){this.tabBack(e)}else{this.tabForward(e)}};sap.ui.layout.form.GridLayout.prototype.findFieldOfElement=function(e,s,l){if(!l){return sap.ui.layout.form.FormLayout.prototype.findPrevFieldOfElement.apply(this,arguments)}if(!e.getVisible()){return}var f=e.getFields();var n;var I=f.length;s=I-1;for(var i=s;i>=0;i--){var F=f[i];var L=F.$().offset().left;if(l<L&&i!=0){continue}var d=this._getDomRef(F);if((!F.getEnabled||F.getEnabled())&&d){n=d;break}}return n};sap.ui.layout.form.GridLayout.prototype.findFieldBelow=function(c,e){var C=e.getParent();var a=C.indexOfFormElement(e);var n;if(C.getVisible()){var E=C.getFormElements();var m=E.length;var i=a+1;var l=c.$().offset().left;while(!n&&i<m){var e=E[i];n=this.findFieldOfElement(e,0,l);i++}}if(!n){var f=C.getParent();a=f.indexOfFormContainer(C);n=this.findFirstFieldOfFirstElementInNextContainer(f,a+1)}return n};sap.ui.layout.form.GridLayout.prototype.findFieldAbove=function(c,e){var C=e.getParent();var a=C.indexOfFormElement(e);var n;if(C.getVisible()){var E=C.getFormElements();var i=a-1;var l=c.$().offset().left;while(!n&&i>=0){var e=E[i];n=this.findFieldOfElement(e,0,l);i--}}if(!n){var f=C.getParent();a=f.indexOfFormContainer(C);n=this.findLastFieldOfLastElementInPrevContainer(f,a-1)}return n}}());

