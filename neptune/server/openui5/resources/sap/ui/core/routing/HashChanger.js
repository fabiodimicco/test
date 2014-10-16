// Copyright (c) 2013 SAP AG, All Rights Reserved
sap.ui.define(['jquery.sap.global','sap/ui/base/EventProvider','sap/ui/thirdparty/signals','sap/ui/thirdparty/hasher'],function(q,E,s,h){"use strict";var H=E.extend("sap.ui.core.routing.HashChanger",{constructor:function(){E.apply(this)}});H.prototype.init=function(){if(this._initialized){q.sap.log.info("this HashChanger instance has already been initialized.");return false}hasher.changed.add(this.fireHashChanged,this);if(!hasher.isActive()){hasher.initialized.addOnce(this.fireHashChanged,this);hasher.init()}else{this.fireHashChanged(hasher.getHash())}this._initialized=true;return this._initialized};H.prototype.fireHashChanged=function(n,o){this.fireEvent("hashChanged",{newHash:n,oldHash:o})};H.prototype.setHash=function(a){this.fireEvent("hashSet",{sHash:a});hasher.setHash(a)};H.prototype.replaceHash=function(a){this.fireEvent("hashReplaced",{sHash:a});hasher.replaceHash(a)};H.prototype.getHash=function(){return hasher.getHash()};H.prototype.destroy=function(){hasher.changed.remove(this.fireHashChanged,this);E.prototype.destroy.apply(this,arguments)};(function(){var _;H.getInstance=function(){if(!_){_=new H()}return _};H.replaceHashChanger=function(o){if(_){q.extend(o.mEventRegistry,_.mEventRegistry);_.destroy()}_=o}}());return H},true);

