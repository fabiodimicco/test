/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/RenderManager','sap/ui/core/support/Plugin'],function(q,R,P){"use strict";var $=q;var D=P.extend("sap.ui.core.support.plugins.Debugging",{constructor:function(s){P.apply(this,["sapUiSupportDebugging","Debugging",s]);if(!this.isToolPlugin()){throw Error()}this._oStub=s;this._aEventIds=[this.getId()+"ReceiveClasses",this.getId()+"ReceiveClassMethods"];this._breakpointId="sapUiSupportBreakpoint";this._aClasses=[];this._mAddedClasses={};this._sSelectedClass=""}});D.prototype.init=function(s){P.prototype.init.apply(this,arguments);if(this.isToolPlugin()){var _=this.$();_.on("keyup",'#sapUiSupportDebuggingClassInput',$.proxy(this._autoComplete,this));_.on("blur",'#sapUiSupportDebuggingClassInput',$.proxy(this._updateSelectOptions,this));_.on("change",'#sapUiSupportDebuggingClassSelect',$.proxy(this._selectOptionsChanged,this));_.on("click",'#sapUiSupportDebuggingAddClass',$.proxy(this._onAddClassClicked,this));_.on("click",'#sapUiSupportDebuggingClassList li div',$.proxy(this._onSelectClass,this));_.on("click",'#sapUiSupportDebuggingClassList li img.remove-class',$.proxy(this._onRemoveClass,this));_.on("keyup",'#sapUiSupportDebuggingMethodInput',$.proxy(this._autoComplete,this));_.on("blur",'#sapUiSupportDebuggingMethodInput',$.proxy(this._updateSelectOptions,this));_.on("change",'#sapUiSupportDebuggingMethodSelect',$.proxy(this._selectOptionsChanged,this));_.on("click",'#sapUiSupportDebuggingAddBreakpoint',$.proxy(this._onAddBreakpointClicked,this));_.on("click",'#sapUiSupportDebuggingBreakpointList li img.remove-breakpoint',$.proxy(this._onRemoveBreakpoint,this));this.renderContainer();this._oStub.sendEvent(this._breakpointId+"RequestClasses",{callback:this.getId()+"ReceiveClasses"})}else{}};D.prototype.exit=function(s){P.prototype.exit.apply(this,arguments);if(this.isToolPlugin()){var _=this.$();_.off("keyup",'#sapUiSupportDebuggingClassInput');_.on("blur",'#sapUiSupportDebuggingClassInput');_.on("change",'#sapUiSupportDebuggingClassSelect');_.on("click",'#sapUiSupportDebuggingAddClass');_.on("click",'#sapUiSupportDebuggingClassList li div');_.on("click",'#sapUiSupportDebuggingClassList li img.remove-class');_.on("keyup",'#sapUiSupportDebuggingMethodInput');_.on("blur",'#sapUiSupportDebuggingMethodInput');_.on("change",'#sapUiSupportDebuggingMethodSelect');_.on("click",'#sapUiSupportDebuggingAddBreakpoint');_.on("click",'#sapUiSupportDebuggingBreakpointList li img.remove-breakpoint')}};D.prototype.renderContainer=function(){var r=sap.ui.getCore().createRenderManager();r.write('<div id="sapUiSupportDebuggingClassContainer" class="sapUiSupportDottedContainer"></div>');r.write('<div id="sapUiSupportDebuggingMethodContainer" class="sapUiSupportDottedContainer"></div>');r.flush(this.$().get(0));r.destroy()};D.prototype.renderClasses=function(){var t=this;var c=this._aClasses;var r=sap.ui.getCore().createRenderManager();r.write('<span style="margin-right:5px">Class:</span>');r.write('<select id="sapUiSupportDebuggingClassSelect" class="sapUiSupportAutocomplete"><option></option>');$.each(c,function(i,v){if(typeof(t._mAddedClasses[v])==='undefined')r.write('<option>'+v+'</option>')});r.write('</select>');r.write('<input id="sapUiSupportDebuggingClassInput" class="sapUiSupportAutocomplete" type="text"/>');r.write('<button id="sapUiSupportDebuggingAddClass" class="sapUiSupportBtn">Add</button>');r.write('<hr class="no-border"/><ul id="sapUiSupportDebuggingClassList" class="sapUiSupportList">');$.each(c,function(i,v){if(typeof(t._mAddedClasses[v])==='undefined')return;var b=t._mAddedClasses[v].bpCount;var a="";if(b){a=b.active+" / "+b.all}r.write('<li data-class-name="'+v+'"');if(t._sSelectedClass===v)r.write(' class="selected"');r.write('><div><span class="className">'+v+'</span>'+'<span class="breakpoints">'+a+'</span></div>'+'<img class="remove-class" style="cursor:pointer;margin-left:5px" '+'src="../../debug/images/delete.gif" alt="X"></li>')});r.write('</ul>');r.flush($("#sapUiSupportDebuggingClassContainer").get(0));r.destroy()};D.prototype.renderMethods=function(m){var r=sap.ui.getCore().createRenderManager();if(typeof(m)==='undefined'){r.write('<p style="text-align:center;font-weight: bold">Please add a class to the list on the left side</p>');r.flush($("#sapUiSupportDebuggingMethodContainer").get(0));r.destroy();return}r.write('<span style="margin-right:5px">Method:</span>');r.write('<select id="sapUiSupportDebuggingMethodSelect" class="sapUiSupportAutocomplete"><option></option>');$.each(m,function(i,v){if(!v.active)r.write('<option data-method-type="'+v.type+'">'+v.name+'</option>')});r.write('</select>');r.write('<input id="sapUiSupportDebuggingMethodInput" class="sapUiSupportAutocomplete" type="text"/>');r.write('<button id="sapUiSupportDebuggingAddBreakpoint" class="sapUiSupportBtn">Add breakpoint</button>');r.write('<hr class="no-border"/><ul id="sapUiSupportDebuggingBreakpointList" class="sapUiSupportList sapUiSupportBreakpointList">');$.each(m,function(i,v){if(!v.active)return;r.write('<li data-method-type="'+v.type+'"><span>'+v.name+'</span>'+'<img class="remove-breakpoint" style="cursor:pointer;margin-left:5px" '+'src="../../debug/images/delete.gif" alt="Remove"></li>')});r.write('</ul>');r.flush($("#sapUiSupportDebuggingMethodContainer").get(0));r.destroy()};D.prototype.onsapUiSupportDebuggingReceiveClasses=function(e){this._aClasses=JSON.parse(e.getParameter("classes"));this.renderClasses();this.renderMethods();$('#sapUiSupportDebuggingClassInput').focus()};D.prototype.onsapUiSupportDebuggingReceiveClassMethods=function(e){var m=JSON.parse(e.getParameter("methods"));this.renderMethods(m);var c=e.getParameter("className");var b=JSON.parse(e.getParameter("breakpointCount"));this._mAddedClasses[c]={bpCount:b};var a=$('li[data-class-name="'+c+'"] span.breakpoints');a.text(b.active+" / "+b.all).show();$('#sapUiSupportDebuggingMethodInput').focus()};D.prototype._autoComplete=function(e){var a=$(e.target);if(e.keyCode==q.sap.KeyCodes.ENTER){this._updateSelectOptions(e);if(a.attr('id')==="sapUiSupportDebuggingClassInput"){this._onAddClassClicked()}else{this._onAddBreakpointClicked()}}if(e.keyCode>=q.sap.KeyCodes.ARROW_LEFT&&e.keyCode<=q.sap.KeyCodes.ARROW_DOWN)return;var b=a.prev("select"),I=a.val();if(I=="")return;var o=b.find("option").map(function(){return $(this).val()}).get();var O;for(var i=0;i<o.length;i++){O=o[i];if(O.toUpperCase().indexOf(I.toUpperCase())==0){var c=a.cursorPos();if(e.keyCode==q.sap.KeyCodes.BACKSPACE){c--}a.val(O);a.selectText(c,O.length);break}}return};D.prototype._onAddClassClicked=function(){var c=$("#sapUiSupportDebuggingClassInput").val();this._mAddedClasses[c]={};this.renderClasses();$('#sapUiSupportDebuggingClassInput').focus()};D.prototype._onRemoveClass=function(e){var c=$(e.target).prev().find('span.className').text();delete this._mAddedClasses[c];var w=false;if(this._sSelectedClass===c){this._sSelectedClass="";w=true}this._oStub.sendEvent(this._breakpointId+"RemoveAllClassBreakpoints",{className:c});this.renderClasses();if(w){this.renderMethods()}$('#sapUiSupportDebuggingClassInput').focus()};D.prototype._onAddBreakpointClicked=function(){this.changeBreakpoint($("#sapUiSupportDebuggingClassList li.selected span.className").text(),$("#sapUiSupportDebuggingMethodInput").val(),$("#sapUiSupportDebuggingMethodSelect option:selected").attr("data-method-type"),true)};D.prototype._onRemoveBreakpoint=function(e){this.changeBreakpoint($("#sapUiSupportDebuggingClassList li.selected span.className").text(),$(e.target).prev().text(),$(e.target).parent("li").attr("data-method-type"),false)};D.prototype._updateSelectOptions=function(e){var s=e.srcElement||e.target;if(s.tagName=="INPUT"){var v=s.value;s=s.previousSibling;var o=s.options;for(var i=0;i<o.length;i++){var t=o[i].value||o[i].text;if(t.toUpperCase()==v.toUpperCase()){s.selectedIndex=i;break}}}var a=s.selectedIndex;var c=s.options[a].value||s.options[a].text;if(s.nextSibling&&s.nextSibling.tagName=="INPUT"){s.nextSibling.value=c}};D.prototype._selectOptionsChanged=function(e){var s=e.srcElement||e.target;var i=s.nextSibling;i.value=s.options[s.selectedIndex].value};D.prototype._onSelectClass=function(e){var a=$(e.target).parents("li");if(a.hasClass("selected"))return;var c=a.find('span.className').text();a.addClass("selected").siblings("li").removeClass("selected");this._sSelectedClass=c;this._oStub.sendEvent(this._breakpointId+"RequestClassMethods",{className:c,callback:this.getId()+"ReceiveClassMethods"})};D.prototype._isClassSelected=function(){var s=false;$.each(this._mClasses,function(i,v){if(v.selected===true)s=true});return s};D.prototype.changeBreakpoint=function(c,m,t,a){this._oStub.sendEvent(this._breakpointId+"ChangeClassBreakpoint",{className:c,methodName:m,active:a,type:parseInt(t),callback:this.getId()+"ReceiveClassMethods"})};return D},true);

