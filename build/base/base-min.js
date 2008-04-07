YUI.add("base",function(D){D.use("attribute");var A=D.lang,C=D.object;D.CANCEL="yui:cancel";var B=function(){D.log("constructor called","life","Base");this.init.apply(this,arguments);};B.NAME="base";B._instances={};B.build=function(I,F,L,H){var M=B.build._getTemplate(I),P=I.NAME,N,E,J,O,K;F=F||[];L=L||[];F.splice(0,0,I);L.splice(0,0,"ATTRS","PLUGINS","CLASSNAMES");O=F.length;K=L.length;for(J=0;J<O;J++){N=F[J];D.mix(M,N,true);M._build.f.push(N);P=P+":"+D.stamp(N);}M.prototype={};if(L){for(J=0;J<K;J++){var G=L[J];if(C.owns(I,G)){M[G]=A.isArray(I[G])?[]:{};}}}for(J=0;J<O;J++){N=F[J];if(L){D.aggregate(M,N,false,L);}D.augment(M,N,true);}if(H){for(J=0;J<H.length;J++){E=H[J];M.prototype[E]=B.build._wrappedFn(E);}}M._build.id=P;M.NAME=I.NAME;M.prototype.hasImpl=B.build._impl;M.prototype.constructor=M;return M;};B.build._getTemplate=function(E){function F(){var H=F._build.f;for(var G=0;G<H.length;G++){H[G].apply(this,arguments);}return this;}F._build={id:null,f:[]};return F;};B.build._impl=function(F){if(this.constructor._build){var H=this.constructor._build.f,E=H.length,G;for(G=0;G<E;G++){if(H[G]===F){return true;}}}return false;};B.build._wrappedFn=function(E){return function(){var J=this.constructor._build.f,F=J.length,H,G,I;for(G=0;G<F;G++){H=J[G].prototype[E];if(H){I=H.apply(this,arguments);}}};};B.create=function(G,I,H){var K=D.Base.build(G,I),E=D.array(arguments,2,true);var J=function(){};J.prototype=K.prototype;D.mix(J,K);return K.apply(new J(),E);};B.prototype={init:function(E){D.log("init called","life","Base");if(this.fire("beforeInit")!==D.Base.CANCEL){D.Base._instances[D.stamp(this)]=this;this._before={};this._destroyed=false;this._initialized=false;this._eventHandlers={};this.name=this.constructor.NAME;this._initHierarchy(E);this._initialized=true;}return this;},destroy:function(){D.log("destroy called","life","Base");if(this.fire("beforeDestroy")!==D.Base.CANCEL){this._destroyHierarchy();this._destroyed=true;this.fire("destroy");}return this;},attachListeners:function(H,G,F){var I=this._eventHandles,E;if(!I[H]){I[H]=E=[];D.each(G,function(L,K,J){if(K.indexOf(":")!==-1){E[E.length]=D.on(K,L);}else{E[E.length]=this.on(K,L);}},this);}else{if(F){this.detachListeners(H);this.attachListeners(H,G);}}},detachListeners:function(H){var I=this._eventHandles;var F=I[H];if(F){var E=F.length;for(var G=0;G<E;G++){G.detach();}delete I[H];}},_getClasses:function(){if(!this._classes){var F=this.constructor,E=[];while(F&&F.prototype){E.unshift(F);F=F.superclass?F.superclass.constructor:null;}this._classes=E;}return this._classes.concat();},_initHierarchy:function(G){var F,E,J,I=this._getClasses();for(var H=0;H<I.length;H++){J=I[H];if(J.ATTRS){D.each(G,function(M,L){G[L]={value:M};});F=D.merge(J.ATTRS,G);D.log("configuring "+J.NAME+"attributes","info","Base");for(E in F){if(C.owns(F,E)){var K=F[E];if(G&&C.owns(G,E)){K=G[E];}this.addAtt(E,K);}}}if(J.prototype.initializer){J.prototype.initializer.apply(this,arguments);}}},_destroyHierarchy:function(){var E=this.constructor;while(E&&E.prototype){if(E.prototype.destructor){E.prototype.destructor.apply(this,arguments);}E=E.superclass?E.superclass.constructor:null;}},before:function(E,F){this._before[E]=this._before[E]||[];this._before[E].push(F);},on:function(){this.subscribe.apply(this,arguments);},toString:function(){return B.NAME+"["+"]";}};D.Base=B.build(B,[D.Attribute]);},"3.0.0");YAHOO.register("base",YUI.Base,{version:"@VERSION@",build:"@BUILD@"});