import{Y as H,ca as Y}from"./chunk-XTUMK6K6.js";import{a as $}from"./chunk-KM4BJSLL.js";import{b as B,c as U}from"./chunk-G3UCZUFV.js";import"./chunk-UVLSFSUT.js";import{n as G}from"./chunk-DKYG7G7H.js";import"./chunk-ASKA45PQ.js";import"./chunk-4TDNJBFX.js";import{d as V}from"./chunk-RSOBT5NQ.js";import{Aa as b,Fb as l,Ga as S,Gb as s,Hb as m,Ib as N,Lb as j,Nb as h,T as f,V as C,Wb as z,X as y,Xa as I,Xb as d,Za as F,Zb as L,_ as x,ab as R,ba as c,ea as _,hb as p,j as g,ja as M,ka as P,mb as E,nb as k,pa as O,ra as A,tb as D,ua as w,ub as T,ya as v}from"./chunk-PVGROEOM.js";var Q=[{path:"",redirectTo:"conversion",pathMatch:"full"},{path:"conversion",loadComponent(){return import("./chunk-LOVWVS6B.js").then(i=>i.ConversionComponent)}},{path:"piezometric",loadComponent(){return import("./chunk-IFRB2ZYW.js").then(i=>i.PiezometricComponent)}},{path:"flow",loadComponent(){return import("./chunk-CJR6WVVB.js").then(i=>i.FlowComponent)}},{path:"**",redirectTo:"conversion",pathMatch:"full"}];var ee="@",te=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=c(O);loadingSchedulerFn=c(ne,{optional:!0});_engine;constructor(e,n,o,r,a){this.doc=e,this.delegate=n,this.zone=o,this.animationType=r,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-YTL3XI4S.js").then(o=>o),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(o=>{throw new C(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:r})=>{this._engine=o(this.animationType,this.doc);let a=new r(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,n){let o=this.delegate.createRenderer(e,n);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let r=new u(o);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let K=a.createRenderer(e,n);r.use(K),this.scheduler??=this.injector.get(A,null,{optional:!0}),this.scheduler?.notify(11)}).catch(a=>{r.use(o)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){F()};static \u0275prov=y({token:i,factory:i.\u0275fac})}return i})(),u=class{delegate;replay=[];\u0275type=1;constructor(t){this.delegate=t}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,n,o){this.delegate.insertBefore(t,e,n,o)}removeChild(t,e,n){this.delegate.removeChild(t,e,n)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,o){this.delegate.setAttribute(t,e,n,o)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,o){this.delegate.setStyle(t,e,n,o)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){this.shouldReplay(e)&&this.replay.push(o=>o.setProperty(t,e,n)),this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n,o){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(t,e,n,o)),this.delegate.listen(t,e,n,o)}shouldReplay(t){return this.replay!==null&&t.startsWith(ee)}},ne=new x("");function X(i="animations"){return v("NgAsyncAnimations"),_([{provide:R,useFactory:(t,e,n)=>new te(t,e,n,i),deps:[V,B,w]},{provide:S,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Z={providers:[Y(Q),X()]};var q=(()=>{class i{ngOnInit(){}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-menu"]],decls:11,vars:0,consts:[["mat-raised-button","","routerLink","conversion"],["mat-raised-button","","routerLink","piezometric"],["mat-raised-button","","routerLink","flow"]],template:function(n,o){n&1&&(l(0,"section")(1,"ul")(2,"li")(3,"button",0),d(4,"Convers\xE3o"),s()(),l(5,"li")(6,"button",1),d(7,"Piezometria"),s()(),l(8,"li")(9,"button",2),d(10,"Vaz\xE3o"),s()()()())},dependencies:[H,$],styles:["[_nghost-%COMP%]   section[_ngcontent-%COMP%]{width:500px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;list-style-type:none;padding:0;margin:0 0 25px;width:100%}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:20;padding:5px;gap:10px;border-radius:5px;cursor:pointer}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{word-break:break-word}@media screen and (max-width: 500px){[_nghost-%COMP%]   section[_ngcontent-%COMP%]{max-width:400px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{max-width:450px;display:flex;flex-direction:column}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:20;margin:0}}@media screen and (max-width: 400px){[_nghost-%COMP%]   section[_ngcontent-%COMP%]{max-width:330px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{max-width:350px;display:flex;flex-direction:column}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:20;margin:0}}@media screen and (max-width: 300px){[_nghost-%COMP%]   section[_ngcontent-%COMP%]{max-width:200px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{max-width:250px;display:flex;flex-direction:column}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:20;margin:0}}"]})}}return i})();var oe=()=>[import("./chunk-CM4IHXQU.js").then(i=>i.RouterOutlet)];function ie(i,t){i&1&&m(0,"router-outlet")}function re(i,t){if(i&1){let e=N();l(0,"textarea",3,0),j("input",function(){M(e);let o=z(1),r=h();return P(r.auto_grow(o))}),d(2),s()}if(i&2){let e=h();I(2),L("      ",e.typeAi(),`
      `)}}var J=(()=>{class i{constructor(){this.title="saneamento",this.#e=c(G),this.typeAi=b(""),this.bootAi=`Intelig\xEAncia Artificial
Boot Intelig\xEAncia Artificial ... Ok!
Montando Sistema Neural ........ Ok!
Conectando Sistema Neural ...... Ok!
Configurando o Algoritmo........ Ok!
Carregando C\xE1lculos ............ Ok!
Montando Sistema SPA ........... Ok!`,this.shuffleBoot=[]}#e;ngOnInit(){this.typeInicial()}shuffleArray(e){for(let n=e.length-1;n>0;n--){let o=Math.floor(Math.random()*(n+1));[e[n],e[o]]=[e[o],e[n]]}return e}typeInicial(){let e=new g,n=[];this.#e.typeSignalArticle$.pipe(f(e)).subscribe(o=>{this.typeAi.set(o)}),new Promise(o=>{this.#e.startTyping(this.bootAi),o()})}auto_grow(e){e.style.height="5px",e.style.height=e.scrollHeight+"px"}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-root"]],decls:9,vars:0,consts:[["text",""],[6e3],[1,"container"],[3,"input"]],template:function(n,o){n&1&&(l(0,"section")(1,"div",2)(2,"h1"),d(3,"C\xE1lculo Saneamento Hidr\xE1ulico"),s(),m(4,"app-menu"),E(5,ie,1,0)(6,re,3,1),D(7,5,oe,null,6,null,null,1,k),T(),s()())},dependencies:[q],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:5px}section[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:20px;margin-bottom:30px;border-radius:5px;box-shadow:0 0 10px #0000001a;background-color:#fff}textarea[_ngcontent-%COMP%]{width:300px;background:#000;height:150px;overflow:hidden;resize:none;background-color:#000;color:#fff;white-space:pre-wrap;text-align:justify}"]})}}return i})();U(J,Z).catch(i=>console.error(i));
