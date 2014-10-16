/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var O=sap.ui.base.Object.extend("sap.ui.model.odata.ODataAnnotations",{constructor:function(m,a,l){"use strict";this.oModel=m;this.oMetadata=null;this.oAnnotations=null;this.bInitialized=false;this.bLoaded=false;this.bLoadAsync=l;this.xPath=null;this.sAnnotationURI=a;this.oXMLDoc=null;this.error=null;this.oAlias={};this.bValidXML=true;this.oRequestHandle=null;this.xmlCompatVersion=false;if(a){this.loadXML();if(!l){if(this.error){q.sap.log.error("OData annotations could not be loaded: "+this.error.message)}}}}});O.prototype.getAnnotationsData=function(){return this.oAnnotations};O.prototype._parseAliases=function(a){var r=this.xPath.selectNodes(this.oXMLDoc,"//edmx:Reference",this.oXMLDoc);for(var i=0;i<r.length;i+=1){var b=this.xPath.nextNode(r,i);var c=this.xPath.selectNodes(this.oXMLDoc,"./edmx:Include",b);if(c&&c.length>0){var d=this.xPath.nextNode(c,0);if(d.getAttribute("Alias")){this.oAlias[d.getAttribute("Alias")]=d.getAttribute("Namespace")}else{this.oAlias[d.getAttribute("Namespace")]=d.getAttribute("Namespace")}}var e=this.xPath.selectNodes(this.oXMLDoc,"./edmx:IncludeAnnotations",b);if(e.length>0){for(var j=0;j<e.length;j+=1){var f=this.xPath.nextNode(e,j);if(f.getAttribute("TargetNamespace")){var A=f.getAttribute("TargetNamespace");if(!a[A]){a[A]={}}a[A][f.getAttribute("TermNamespace")]=b.getAttribute("Uri")}else{a[f.getAttribute("TermNamespace")]=b.getAttribute("Uri")}}}}};O.prototype.parse=function(){var m={},s,S={},a,A={},t,T,b,c,M,d,e,f,g,h,p,j,k,l,n,o,r,v,u,w,x,y,z;this.xPath=this.getXPath();this.oMetadata=this.oModel.getServiceMetadata();if(this.bInitialized){return this.oAnnotations}this.oXMLDoc=this.xPath.setNameSpace(this.oXMLDoc);s=this.xPath.selectNodes(this.oXMLDoc,"//d:Schema",this.oXMLDoc);for(var i=0;i<s.length;i+=1){a=this.xPath.nextNode(s,i);S.Alias=a.getAttribute("Alias");S.Namespace=a.getAttribute("Namespace")}this._parseAliases(A);if(A){m.annotationReferences=A}m.aliasDefinitions=this.oAlias;t=this.xPath.selectNodes(this.oXMLDoc,"//d:Term",this.oXMLDoc);if(t.length>0){T={};for(var B=0;B<t.length;B+=1){b=this.xPath.nextNode(t,B);c=this.replaceWithAlias(b.getAttribute("Type"),this.oAlias);T["@"+S.Alias+"."+b.getAttribute("Name")]=c}m.termDefinitions=T}M=this.getAllPropertiesMetadata(this.oMetadata);if(M.extensions){m.propertyExtensions=M.extensions}d=this.xPath.selectNodes(this.oXMLDoc,"//d:Annotations ",this.oXMLDoc);for(var B=0;B<d.length;B+=1){e=this.xPath.nextNode(d,B);if(e.hasChildNodes()===false){continue}f=e.getAttribute("Target");g=f.split(".")[0];if(g&&this.oAlias[g]){f=f.replace(new RegExp(g,""),this.oAlias[g])}h=f;p=null;if(f.indexOf("/")>0){h=f.split("/")[0];p=f.replace(h+"/","")}if(!m[h]){m[h]={}}if(p){if(!m.propertyAnnotations){m.propertyAnnotations={}}if(!m.propertyAnnotations[h]){m.propertyAnnotations[h]={}}m.propertyAnnotations[h][p]={};j=this.xPath.selectNodes(this.oXMLDoc,"./d:Annotation",e);for(var C=0;C<j.length;C+=1){k=this.xPath.nextNode(j,C);if(k.hasChildNodes()===false){l=this.replaceWithAlias(k.getAttribute("Term"));m.propertyAnnotations[h][p][l]=this.getPropertyValueAttributes(k)}}}else{n=h.replace(this.oAlias[g],g);j=this.xPath.selectNodes(this.oXMLDoc,"./d:Annotation",e);for(var D=0;D<j.length;D+=1){k=this.xPath.nextNode(j,D);o=k.getAttribute("Qualifier");r=this.replaceWithAlias(k.getAttribute("Term"));if(o){r+="#"+o}v=this.getPropertyValue(this.oXMLDoc,k,n);v=this.setEdmTypes(v,M.types,h,S);m[h][r]=v}u=this.xPath.selectNodes(this.oXMLDoc,"//d:Annotations[contains(@Target, '"+n+"')]//d:PropertyValue[contains(@Path, '/')]//@Path",this.oXMLDoc);for(i=0;i<u.length;i+=1){w=this.xPath.nextNode(u,i);x=w.value;if(m.propertyAnnotations){if(m.propertyAnnotations[h]){if(m.propertyAnnotations[h][x]){continue}}}y=x.split('/');if(this.isNavProperty(h,y[0],this.oMetadata)){if(!m.expand){m.expand={}}if(!m.expand[h]){m.expand[h]={}}m.expand[h][y[0]]=y[0]}}z=this.xPath.selectNodes(this.oXMLDoc,"//d:Annotations[contains(@Target, '"+n+"')]//d:Path[contains(., '/')]",this.oXMLDoc);for(i=0;i<z.length;i+=1){w=this.xPath.nextNode(z,i);x=this.xPath.getNodeText(w);if(m.propertyAnnotations[h]){if(m.propertyAnnotations[h][x]){continue}}if(!m.expand){m.expand={}}if(!m.expand[h]){m.expand[h]={}}y=x.split('/');if(this.isNavProperty(h,y[0],this.oMetadata)){if(!m.expand){m.expand={}}if(!m.expand[h]){m.expand[h]={}}m.expand[h][y[0]]=y[0]}}}}this.oAnnotations=m;this.bInitialized=true;this.oModel.fireAnnotationsLoaded({annotations:this});return this.oAnnotations};O.prototype.getXPath=function(){var x={};if(this.xmlCompatVersion){x={setNameSpace:function(o){o.setProperty("SelectionNamespaces",'xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx" xmlns:d="http://docs.oasis-open.org/odata/ns/edm"');o.setProperty("SelectionLanguage","XPath");return o},selectNodes:function(o,x,i){return i.selectNodes(x)},nextNode:function(n){return n.nextNode()},getNodeText:function(n){return n.text}}}else{x={setNameSpace:function(o){return o},nsResolver:function(p){var n={"edmx":"http://docs.oasis-open.org/odata/ns/edmx","d":"http://docs.oasis-open.org/odata/ns/edm"};return n[p]||null},selectNodes:function(o,p,i){var a=o.evaluate(p,i,this.nsResolver,7,null);a.length=a.snapshotLength;return a},nextNode:function(n,i){return n.snapshotItem(i)},getNodeText:function(n){return n.textContent}}}return x};O.prototype.setXML=function(x,X){var t=this;if(sap.ui.Device.browser.internet_explorer){this.oXMLDoc=new ActiveXObject("Microsoft.XMLDOM");this.oXMLDoc.loadXML(X);this.xmlCompatVersion=true}else if(x){this.oXMLDoc=x}else{this.oXMLDoc=new DOMParser().parseFromString(X,'application/xml')}if(this.oXMLDoc.getElementsByTagName("parsererror").length>0){return false}else{if(q.isEmptyObject(this.oModel.getServiceMetadata())){this.oModel.attachInternalMetadataLoaded(function(){t.parse()})}else{this.parse()}return true}};O.prototype.loadXML=function(){var t=this;var a={url:this.sAnnotationURI,async:this.bLoadAsync};var h=function _handleFail(j,s){if(t.oRequestHandle&&t.oRequestHandle.bSuppressErrorHandlerCall){return}t.oRequestHandle=null;t.error={message:s,response:j.response};t.oModel._handleError(t.error)};var H=function(d,T,j){t.oRequestHandle=null;if(!t.setXML(j.responseXML,j.responseText)){h(j,"Malformed XML document")}};this.oRequestHandle=q.ajax(a).done(H).fail(h)};O.prototype.getAllPropertiesMetadata=function(m){var M={},P={},o={},b=false,n,e,c,E={},a={},d={},f=false,g,C,s,t,h,r;for(var i=m.dataServices.schema.length-1;i>=0;i-=1){M=m.dataServices.schema[i];if(M.entityType){n=M.namespace;e=M.entityType;c=M.complexType;for(var j in e){E=e[j];d={};if(E.hasStream&&E.hasStream==="true"){continue}for(var k in E.property){g=E.property[k];if(g.type.substring(0,n.length)===n){for(var l in c){if(c[l].name===g.type.substring(n.length+1)){for(k in c[l].property){C=c[l].property[k];a[c[l].name+"/"+C.name]=C.type}}}}else{s=g.name;t=g.type;for(var p in g.extensions){h=g.extensions[p];if((h.name==="display-format")&&(h.value==="Date")){t="Edm.Date"}else{f=true;if(!d[s]){d[s]={}}if(h.namespace&&!d[s][h.namespace]){d[s][h.namespace]={}}d[s][h.namespace][h.name]=h.value}}a[s]=t}}if(!P[n+"."+E.name]){P[n+"."+E.name]={}}P[n+"."+E.name]=a;if(f){if(!o[n+"."+E.name]){b=true}o[n+"."+E.name]={};o[n+"."+E.name]=d}}}}if(b){r={types:P,extensions:o}}else{r={types:P}}return r};O.prototype.setEdmTypes=function(p,P,t,s){var o,e='';for(var a in p){if(p[a]){o=p[a];if(o.Value&&o.Value.Path){e=this.getEdmType(o.Value.Path,P,t,s);if(e){p[a].EdmType=e}continue}if(o.Path){e=this.getEdmType(o.Path,P,t,s);if(e){p[a].EdmType=e}continue}if(o.Facets){p[a].Facets=this.setEdmTypes(o.Facets,P,t,s);continue}if(o.Data){p[a].Data=this.setEdmTypes(o.Data,P,t,s);continue}if(a==="Data"){p.Data=this.setEdmTypes(o,P,t,s);continue}if(o.Value&&o.Value.Apply){p[a].Value.Apply.Parameters=this.setEdmTypes(o.Value.Apply.Parameters,P,t,s);continue}if(o.Value&&o.Type&&(o.Type==="Path")){e=this.getEdmType(o.Value,P,t,s);if(e){p[a].EdmType=e}}}}return p};O.prototype.getEdmType=function(p,P,t,s){if((p.charAt(0)==="@")&&(p.indexOf(s.Alias)===1)){p=p.slice(s.Alias.length+2)}if(p.indexOf("/")>=0){if(P[p.slice(0,p.indexOf("/"))]){t=p.slice(0,p.indexOf("/"));p=p.slice(p.indexOf("/")+1)}}for(var a in P[t]){if(p===a){return P[t][a]}}};O.prototype.getPropertyValueAttributes=function(d){var a="",b="",i,p={};for(i=0;i<d.attributes.length;i+=1){if((d.attributes[i].name!=="Property")&&(d.attributes[i].name!=="Term")){a=d.attributes[i].name;b=d.attributes[i].value}}if(a.length>0){p[a]=this.replaceWithAlias(b)}return p};O.prototype.getSimpleNodeValue=function(x,d){var v={},s,a,p,b,c,e;if(d.hasChildNodes()){s=this.xPath.selectNodes(x,"./d:String",d);if(s.length>0){a=this.xPath.nextNode(s,0);v["String"]=this.xPath.getNodeText(a)}else{p=this.xPath.selectNodes(x,"./d:Path",d);if(p.length>0){b=this.xPath.nextNode(p,0);v["Path"]=this.xPath.getNodeText(b)}else{c=this.xPath.selectNodes(x,"./d:Apply",d);if(c.length>0){e=this.xPath.nextNode(c,0);v["Apply"]=this.getApplyFunctions(x,e,this.xPath)}}}}return v};O.prototype.getPropertyValue=function(x,d,t){var p={},r,a,n,b,c,u,e,f,P={},g,h,i,j,k;var l=this.getXPath();if(d.hasChildNodes()){r=this.xPath.selectNodes(x,"./d:Record | ./d:Collection/d:Record | ./d:Collection/d:If/d:Record",d);if(r.length){a=0;for(n=0;n<r.length;n+=1){b=this.xPath.nextNode(r,n);c=this.getPropertyValues(x,b,t);if(b.getAttribute("Type")){c["RecordType"]=this.replaceWithAlias(b.getAttribute("Type"))}if(a===0){if(b.nextElementSibling||(b.parentNode.nodeName==="Collection")||(b.parentNode.nodeName==="If")){p=[];p.push(c)}else{p=c}}else{p.push(c)}a+=1}}else{u=this.xPath.selectNodes(x,"./d:UrlRef",d);if(u.length>0){for(n=0;n<u.length;n+=1){e=this.xPath.nextNode(u,n);p["UrlRef"]=this.getSimpleNodeValue(x,e)}}else{u=this.xPath.selectNodes(x,"./d:Url",d);if(u.length>0){for(n=0;n<u.length;n+=1){e=this.xPath.nextNode(u,n);p["Url"]=this.getSimpleNodeValue(x,e)}}else{k=this.xPath.selectNodes(x,"./d:Collection/d:AnnotationPath | ./d:Collection/d:PropertyPath",d);if(k.length>0){p=[];for(n=0;n<k.length;n+=1){f=this.xPath.nextNode(k,n);P={};P[f.nodeName]=l.getNodeText(f);p.push(P)}}else{p=this.getPropertyValueAttributes(d);g=this.xPath.selectNodes(x,"./d:Annotation",d);h={};for(i=0;i<g.length;i+=1){h=this.xPath.nextNode(g,i);if(h.hasChildNodes()===false){j=this.replaceWithAlias(h.getAttribute("Term"));p[j]=this.getPropertyValueAttributes(h)}}}}}}}else{p=this.getPropertyValueAttributes(d)}return p};O.prototype.getPropertyValues=function(x,d,t){var p={},a={},b,n,c,e,f,g,h,i,j,k;b=this.xPath.selectNodes(x,"./d:Annotation",d);for(n=0;n<b.length;n+=1){a=this.xPath.nextNode(b,n);if(a.hasChildNodes()===false){c=this.replaceWithAlias(a.getAttribute("Term"));p[c]=this.getPropertyValueAttributes(a)}}e=this.xPath.selectNodes(x,"./d:PropertyValue",d);if(e.length>0){for(f=0;f<e.length;f+=1){g=this.xPath.nextNode(e,f);h=g.getAttribute("Property");p[h]=this.getPropertyValue(x,g,t);i=this.xPath.selectNodes(x,"./d:Apply",g);j=null;for(k=0;k<i.length;k+=1){j=this.xPath.nextNode(i,k);if(j){p[h]={};p[h]['Apply']=this.getApplyFunctions(x,j)}}}}else{p=this.getPropertyValue(x,d,t)}return p};O.prototype.getApplyFunctions=function(x,a){var b={},p,c=null,d=[],i;p=this.xPath.selectNodes(x,"./d:*",a);for(i=0;i<p.length;i+=1){c=this.xPath.nextNode(p,i);switch(c.nodeName){case"Apply":d.push({"Type":"Apply","Value":this.getApplyFunctions(x,c)});break;case"LabeledElement":d.push({"Name":c.getAttribute("Name"),"Value":this.getSimpleNodeValue(x,c)});break;default:d.push({"Type":c.nodeName,"Value":this.xPath.getNodeText(c)});break}}b['Name']=a.getAttribute('Function');b['Parameters']=d;return b};O.prototype.isNavProperty=function(e,p,m){var M,i,n,E,j,k;for(i=m.dataServices.schema.length-1;i>=0;i-=1){M=m.dataServices.schema[i];if(M.entityType){n=M.namespace+".";E=M.entityType;for(k=E.length-1;k>=0;k-=1){if(n+E[k].name===e&&E[k].navigationProperty){for(j=0;j<E[k].navigationProperty.length;j+=1){if(E[k].navigationProperty[j].name===p){return true}}}}}}return false};O.prototype.replaceWithAlias=function(v,a){if(a===undefined){a=this.oAlias}for(var A in a){if(v.indexOf(A+".")>=0){v=v.replace(A+".",a[A]+".");return v}}return v};O.prototype.destroy=function(){if(this.oRequestHandle){this.oRequestHandle.bSuppressErrorHandlerCall=true;this.oRequestHandle.abort();this.oRequestHandle=null}sap.ui.base.Object.prototype.destroy.apply(this,arguments)};return O},true);

