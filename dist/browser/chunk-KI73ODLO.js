import{a as ne}from"./chunk-D57BPV7U.js";import{$ as K,$a as P,A as Fe,Aa as qe,Ab as oe,Ba as w,Bb as tt,Ca as Ue,Cb as re,Da as x,E as ce,Ea as He,Eb as it,F as f,Fa as Ge,Gb as nt,H as _,Ha as X,I as l,Ka as ge,La as ee,Lb as be,M as B,Ma as te,Mb as Ce,N as o,Nb as xe,O as r,Ob as ye,P as d,Pb as we,Q as $,Qb as ot,R as Q,Ra as j,S as fe,Sb as rt,T as Y,Ta as y,Tb as st,U as v,Ua as Ze,V as u,Va as ze,Y as Ae,Ya as E,Z as ue,Za as g,_ as J,_a as O,a as Me,aa as Re,ab as M,ba as s,bb as $e,ca as q,cb as k,d as H,db as F,e as G,f as L,fb as Qe,gb as A,h,hb as Ye,i as Z,ia as Ne,ib as Je,ja as je,jb as R,kb as Ke,l as I,la as b,lb as We,m as T,ma as De,mb as ie,oa as Ve,ob as D,p as de,q as ke,qb as he,sb as Xe,tb as et,u as z,ua as Le,va as Be,w as a,wa as W,x as c,xa as U,xb as ve,yb as _e}from"./chunk-HRXOJPG4.js";import"./chunk-GAL4ENT6.js";var Se={production:!1,api:"http://localhost:8080"};var V=class{getNoCacheRequestOptions(m,e){return{headers:new ge({"Cache-control":"no-cache,no-store",Expires:"0",Pragma:"no-cache",loading:e||""}),withCredentials:!0,responseType:m}}getHttpHeaders(){return new ge({"Content-type":"application/json"})}getServiceUrl(m){return Se.api?Se.api+m:m}};var se="/user",_t=se+"/login",bt=se+"/verifyEmail/{userId}/token/{token}",Ct="{userId}",xt="{token}",yt=se+"/forgetpassword",wt=se+"/resetpassword",N=(()=>{class t extends V{constructor(e,n){super(),this.http=e,this.cookieService=n}login(e,n){let i=new ee().set("username",e).set("password",n),p=this.getServiceUrl(_t);return this.http.get(p,{headers:this.getHttpHeaders(),params:i})}verifyEmail(e,n){let i=this.getServiceUrl(bt.replace(Ct,e).replace(xt,n));return this.http.get(i,{headers:this.getHttpHeaders()})}changepassword(e){let n=new ee().set("username",e),i=this.getServiceUrl(yt);return this.http.get(i,{headers:this.getHttpHeaders(),params:n})}resetpassword(e,n){let i=new ee().set("password",e).set("newpassword",n),p=this.getServiceUrl(wt);return this.http.get(p,{headers:this.getHttpHeaders(),params:i})}static{this.\u0275fac=function(n){return new(n||t)(L(te),L(R))}}static{this.\u0275prov=H({token:t,factory:t.\u0275fac})}}return t})();function It(t,m){t&1&&(o(0,"span"),s(1,"Username is required"),r())}function Tt(t,m){if(t&1&&(o(0,"div",17),f(1,It,2,0,"span",18),r()),t&2){let e=u();a(),l("ngIf",e.f.username.errors.required)}}function Et(t,m){t&1&&(o(0,"span"),s(1,"Password is required"),r())}function Ot(t,m){t&1&&(o(0,"span"),s(1,"Password must be at least 6 characters"),r())}function Pt(t,m){if(t&1&&(o(0,"div",17),f(1,Et,2,0,"span",18),d(2,"br"),f(3,Ot,2,0,"span",18),r()),t&2){let e=u();a(),l("ngIf",e.f.password.errors.required),a(2),l("ngIf",e.f.password.errors.minlength)}}var Oe=(()=>{class t{constructor(e,n,i,p,C,pe){this.toastMessageService=e,this.activatedRoute=n,this.formBuilder=i,this.router=p,this.authenticationService=C,this.cookieService=pe,this.loading=!1,this.submitted=!1,this.showVerifyBanner=!1}get f(){return this.loginForm.controls}ngOnInit(){this.activatedRoute.params.subscribe(e=>{e&&e.id&&this.activateEmailParams(e.id,e.token)}),this.loginForm=this.formBuilder.group({username:["",g.required],password:["",[g.required,g.minLength(6)]]})}login(){if(this.submitted=!0,this.loginForm.invalid){this.router.navigate(["/home/start"]);return}this.loading=!0,this.router.navigate(["/home/start"])}activateEmailParams(e,n){this.authenticationService.verifyEmail(e,n).subscribe(i=>{console.log(i),i&&(this.showVerifyBanner=!0)})}static{this.\u0275fac=function(n){return new(n||t)(c(ne),c(j),c(A),c(y),c(N),c(R))}}static{this.\u0275cmp=h({type:t,selectors:[["app-login"]],decls:29,vars:4,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["href",z`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,"rel","stylesheet"],[1,"container"],[1,"card","bg-white"],[1,"card-body"],[1,"text-center","text-primary","mb-4","fw-bold"],[3,"ngSubmit","formGroup"],[1,"mb-3"],[1,"form-label","fw-400"],["type","number","formControlName","username","maxlength","10","placeholder","Enter your user name",1,"form-control"],["class","text-danger mt-1",4,"ngIf"],["type","password","formControlName","password","placeholder","Enter your password",1,"form-control"],["type","submit",1,"btn","btn-primary","w-100",3,"disabled"],[1,"text-center","mt-3"],["routerLink","/forgot-password",1,"text-primary"],[1,"text-danger","mt-1"],[4,"ngIf"]],template:function(n,i){n&1&&(o(0,"html",0)(1,"head"),d(2,"meta",1)(3,"meta",2),o(4,"title"),s(5,"Login"),r(),d(6,"link",3),r(),o(7,"body")(8,"div",4)(9,"div",5)(10,"div",6)(11,"h2",7),s(12,"Login"),r(),o(13,"form",8),v("ngSubmit",function(){return i.login()}),o(14,"div",9)(15,"label",10),s(16,"User Name"),r(),d(17,"input",11),f(18,Tt,2,1,"div",12),r(),o(19,"div",9)(20,"label",10),s(21,"Password"),r(),d(22,"input",13),f(23,Pt,4,2,"div",12),r(),o(24,"button",14),s(25,"Login"),r(),o(26,"p",15)(27,"a",16),s(28,"Forgot password?"),r()()()()()()()()),n&2&&(a(13),l("formGroup",i.loginForm),a(5),l("ngIf",i.submitted&&i.f.username.errors),a(5),l("ngIf",i.submitted&&i.f.password.errors),a(),l("disabled",i.loading))},dependencies:[x,M,E,$e,O,P,Qe,k,F,Ze],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0}.landing-background[_ngcontent-%COMP%]{background:#00f}h1[_ngcontent-%COMP%]{margin-bottom:10px;color:#ffffffab;font-weight:700;background:none}[_ngcontent-%COMP%]::placeholder{color:#fff;opacity:1}.container[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;justify-content:center;flex-direction:column;align-items:center}.row[_ngcontent-%COMP%]{position:relative}.row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:relative;margin:10px;padding:10px;outline:none;background:none;border:0px;border-bottom:2px solid rgba(255,255,255,.6196078431);font-family:"Baloo Bhai 2",cursive}.row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;margin-top:10px;padding:10px}.btn[_ngcontent-%COMP%]{color:#fff;padding-left:5px;padding-right:5px;float:right;transition:.3s}.btn[_ngcontent-%COMP%]:hover{background:#ffffff42}.error[_ngcontent-%COMP%]{color:#ff8c8c}.view-center[_ngcontent-%COMP%]{height:300px;width:400px;margin:auto}',`body[_ngcontent-%COMP%] {
            background: linear-gradient(135deg, #667eea, #764ba2);
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .card[_ngcontent-%COMP%] {
            width: 100%;
            max-width: 400px;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .form-control[_ngcontent-%COMP%] {
            border-radius: 8px;
        }
        .btn-primary[_ngcontent-%COMP%] {
            background-color: #4a90e2;
            border: none;
            border-radius: 8px;
        }
        .btn-primary[_ngcontent-%COMP%]:hover {
            background-color: #357ae8;
        }`]})}}return t})();var Mt=t=>({"is-invalid":t});function kt(t,m){t&1&&(o(0,"div",9),s(1,"Username is required"),r())}function Ft(t,m){if(t&1&&(o(0,"div",7),f(1,kt,2,0,"div",8),r()),t&2){let e=u();a(),l("ngIf",e.f.username.errors.required)}}var at=(()=>{class t{constructor(e,n,i,p){this.route=e,this.formBuilder=n,this.router=i,this.authenticationService=p,this.loading=!1,this.submitted=!1}ngOnInit(){this.changePasswordForm=this.formBuilder.group({username:["",g.required]})}get f(){return this.changePasswordForm.controls}forgetpassword(){console.log(this.changePasswordForm.value),this.submitted=!0,!this.changePasswordForm.invalid&&(this.loading=!0,this.authenticationService.changepassword(this.changePasswordForm.value.username).subscribe(e=>{console.log(e),e?this.router.navigate(["/login"]):this.loading=!1},e=>{this.loading=!1}))}static{this.\u0275fac=function(n){return new(n||t)(c(j),c(A),c(y),c(N))}}static{this.\u0275cmp=h({type:t,selectors:[["app-forgot-password"]],decls:11,vars:6,consts:[[1,"container"],[1,""],["name","form",3,"ngSubmit","formGroup"],[1,"form-group","row"],["formControlName","username","placeholder","Enter your email","type","text",3,"ngClass"],["style","position: absolute; top: -188px;right: -489px;","class","invalid-feedback",4,"ngIf"],[1,"btn","btn-md","landing-btn",3,"disabled"],[1,"invalid-feedback",2,"position","absolute","top","-188px","right","-489px"],["class","error",4,"ngIf"],[1,"error"]],template:function(n,i){n&1&&(o(0,"div",0)(1,"div",1)(2,"h1"),s(3,"Forget Password"),r(),o(4,"form",2),v("ngSubmit",function(){return i.forgetpassword()}),o(5,"div",3),d(6,"input",4),f(7,Ft,2,1,"div",5),r(),o(8,"div",3)(9,"button",6),s(10,"Submit"),r()()()()()),n&2&&(a(4),l("formGroup",i.changePasswordForm),a(2),l("ngClass",b(4,Mt,i.submitted&&i.f.username.errors)),a(),l("ngIf",i.submitted&&i.f.username.errors),a(2),l("disabled",i.loading))},dependencies:[w,x,M,E,O,P,k,F],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0}h1[_ngcontent-%COMP%]{margin-bottom:10px;color:#ffffffab;font-weight:700;background:none;font-family:"Baloo Bhai 2",cursive}[_ngcontent-%COMP%]::placeholder{color:#fff;opacity:1}.container[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;justify-content:center;flex-direction:column;align-items:center}.row[_ngcontent-%COMP%]{position:relative}.row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:relative;margin:10px;padding:10px;outline:none;background:none;border:0px;border-bottom:2px solid #ffffff9e;font-family:"Baloo Bhai 2",cursive}.row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;margin-top:10px;padding:10px}.btn[_ngcontent-%COMP%]{color:#fff;padding-left:5px;padding-right:5px;float:right;transition:.3s}.btn[_ngcontent-%COMP%]:hover{background:#ffffff42}.error[_ngcontent-%COMP%]{color:#ff8c8c}']})}}return t})();var me=(()=>{class t extends V{constructor(e){super(),this.http=e}getAll(){}register(e){return this.http.post(this.getServiceUrl("/user/register"),e)}delete(e){return this.http.delete("users/")}static{this.\u0275fac=function(n){return new(n||t)(L(te))}}static{this.\u0275prov=H({token:t,factory:t.\u0275fac})}}return t})();var lt=["container"],Nt=t=>[t,"p-toast-message"],jt=(t,m,e,n)=>({showTransformParams:t,hideTransformParams:m,showTransitionParams:e,hideTransitionParams:n}),Dt=t=>({value:"visible",params:t}),Vt=(t,m)=>({$implicit:t,closeFn:m}),Lt=t=>({$implicit:t});function Bt(t,m){t&1&&fe(0)}function qt(t,m){if(t&1&&($(0),f(1,Bt,1,0,"ng-container",4),Q()),t&2){let e=u();a(),l("ngTemplateOutlet",e.headlessTemplate)("ngTemplateOutletContext",De(2,Vt,e.message,e.onCloseIconClick))}}function Ut(t,m){if(t&1&&d(0,"span"),t&2){let e=u(3);B("p-toast-message-icon pi "+e.message.icon)}}function Ht(t,m){t&1&&d(0,"CheckIcon"),t&2&&_("aria-hidden",!0)("data-pc-section","icon")}function Gt(t,m){t&1&&d(0,"InfoCircleIcon"),t&2&&_("aria-hidden",!0)("data-pc-section","icon")}function Zt(t,m){t&1&&d(0,"TimesCircleIcon"),t&2&&_("aria-hidden",!0)("data-pc-section","icon")}function zt(t,m){t&1&&d(0,"ExclamationTriangleIcon"),t&2&&_("aria-hidden",!0)("data-pc-section","icon")}function $t(t,m){if(t&1&&(o(0,"span",13),$(1),f(2,Ht,1,2,"CheckIcon",6)(3,Gt,1,2,"InfoCircleIcon",6)(4,Zt,1,2,"TimesCircleIcon",6)(5,zt,1,2,"ExclamationTriangleIcon",6),Q(),r()),t&2){let e=u(3);_("aria-hidden",!0)("data-pc-section","icon"),a(2),l("ngIf",e.message.severity==="success"),a(),l("ngIf",e.message.severity==="info"),a(),l("ngIf",e.message.severity==="error"),a(),l("ngIf",e.message.severity==="warn")}}function Qt(t,m){if(t&1&&($(0),f(1,Ut,1,2,"span",8)(2,$t,6,6,"span",9),o(3,"div",10)(4,"div",11),s(5),r(),o(6,"div",12),s(7),r()(),Q()),t&2){let e=u(2);a(),l("ngIf",e.message.icon),a(),l("ngIf",!e.message.icon),a(),_("data-pc-section","text"),a(),_("data-pc-section","summary"),a(),q(e.message.summary),a(),_("data-pc-section","detail"),a(),q(e.message.detail)}}function Yt(t,m){t&1&&fe(0)}function Jt(t,m){if(t&1&&d(0,"span"),t&2){let e=u(3);B("pt-1 text-base p-toast-message-icon pi "+e.message.closeIcon)}}function Kt(t,m){t&1&&d(0,"TimesIcon",16),t&2&&(l("styleClass","p-toast-icon-close-icon"),_("aria-hidden",!0)("data-pc-section","closeicon"))}function Wt(t,m){if(t&1){let e=Y();o(0,"button",14),v("click",function(i){I(e);let p=u(2);return T(p.onCloseIconClick(i))})("keydown.enter",function(i){I(e);let p=u(2);return T(p.onCloseIconClick(i))}),f(1,Jt,1,2,"span",8)(2,Kt,1,3,"TimesIcon",15),r()}if(t&2){let e=u(2);_("aria-label",e.closeAriaLabel)("data-pc-section","closebutton"),a(),l("ngIf",e.message.closeIcon),a(),l("ngIf",!e.message.closeIcon)}}function Xt(t,m){if(t&1&&(o(0,"div",5),f(1,Qt,8,7,"ng-container",6)(2,Yt,1,0,"ng-container",4)(3,Wt,3,4,"button",7),r()),t&2){let e=u();l("ngClass",e.message==null?null:e.message.contentStyleClass),_("data-pc-section","content"),a(),l("ngIf",!e.template),a(),l("ngTemplateOutlet",e.template)("ngTemplateOutletContext",b(6,Lt,e.message)),a(),l("ngIf",(e.message==null?null:e.message.closable)!==!1)}}function ei(t,m){if(t&1){let e=Y();o(0,"p-toastItem",3),v("onClose",function(i){I(e);let p=u();return T(p.onMessageClose(i))})("@toastAnimation.start",function(i){I(e);let p=u();return T(p.onAnimationStart(i))})("@toastAnimation.done",function(i){I(e);let p=u();return T(p.onAnimationEnd(i))}),r()}if(t&2){let e=m.$implicit,n=m.index,i=u();l("message",e)("index",n)("life",i.life)("template",i.template)("headlessTemplate",i.headlessTemplate)("@toastAnimation",void 0)("showTransformOptions",i.showTransformOptions)("hideTransformOptions",i.hideTransformOptions)("showTransitionOptions",i.showTransitionOptions)("hideTransitionOptions",i.hideTransitionOptions)}}var ti=(()=>{class t{zone;config;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;onClose=new de;containerViewChild;timeout;constructor(e,n){this.zone=e,this.config=n}ngAfterViewInit(){this.initTimeout()}initTimeout(){this.message?.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message?.life||this.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick=e=>{this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),e.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.clearTimeout()}static \u0275fac=function(n){return new(n||t)(c(ke),c(he))};static \u0275cmp=h({type:t,selectors:[["p-toastItem"]],viewQuery:function(n,i){if(n&1&&ue(lt,5),n&2){let p;J(p=K())&&(i.containerViewChild=p.first)}},hostAttrs:[1,"p-element"],inputs:{message:"message",index:[2,"index","index",U],life:[2,"life","life",U],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},features:[ce],decls:5,vars:18,consts:[["container",""],["notHeadless",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"mouseenter","mouseleave","ngClass"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-toast-message-content",3,"ngClass"],[4,"ngIf"],["type","button","class","p-toast-icon-close p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[3,"class",4,"ngIf"],["class","p-toast-message-icon",4,"ngIf"],[1,"p-toast-message-text"],[1,"p-toast-summary"],[1,"p-toast-detail"],[1,"p-toast-message-icon"],["type","button","pRipple","",1,"p-toast-icon-close","p-link",3,"click","keydown.enter"],[3,"styleClass",4,"ngIf"],[3,"styleClass"]],template:function(n,i){if(n&1){let p=Y();o(0,"div",2,0),v("mouseenter",function(){return I(p),T(i.onMouseEnter())})("mouseleave",function(){return I(p),T(i.onMouseLeave())}),f(2,qt,2,5,"ng-container",3)(3,Xt,4,8,"ng-template",null,1,Le),r()}if(n&2){let p=Re(4);B(i.message==null?null:i.message.styleClass),l("ngClass",b(9,Nt,"p-toast-message-"+(i.message==null?null:i.message.severity)))("@messageState",b(16,Dt,Ve(11,jt,i.showTransformOptions,i.hideTransformOptions,i.showTransitionOptions,i.hideTransitionOptions))),_("id",i.message==null?null:i.message.id)("data-pc-name","toast")("data-pc-section","root"),a(2),l("ngIf",i.headlessTemplate)("ngIfElse",p)}},dependencies:()=>[w,x,Ge,rt,be,xe,we,Ce,ye],encapsulation:2,data:{animation:[ve("messageState",[tt("visible",oe({transform:"translateY(0)",opacity:1})),re("void => *",[oe({transform:"{{showTransformParams}}",opacity:0}),_e("{{showTransitionParams}}")]),re("* => void",[_e("{{hideTransitionParams}}",oe({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0})}return t})(),mt=(()=>{class t{document;renderer;messageService;cd;config;key;autoZIndex=!0;baseZIndex=0;life=3e3;style;styleClass;get position(){return this._position}set position(e){this._position=e,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";breakpoints;onClose=new de;containerViewChild;templates;messageSubscription;clearSubscription;messages;messagesArchieve;template;headlessTemplate;_position="top-right";constructor(e,n,i,p,C){this.document=e,this.renderer=n,this.messageService=i,this.cd=p,this.config=C}styleElement;id=We();ngOnInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e)if(Array.isArray(e)){let n=e.filter(i=>this.canAdd(i));this.add(n)}else this.canAdd(e)&&this.add([e])}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}ngAfterViewInit(){this.breakpoints&&this.createStyle()}add(e){this.messages=this.messages?[...this.messages,...e]:[...e],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...e]:[...e]),this.cd.markForCheck()}canAdd(e){let n=this.key===e.key;return n&&this.preventOpenDuplicates&&(n=!this.containsMessage(this.messages,e)),n&&this.preventDuplicates&&(n=!this.containsMessage(this.messagesArchieve,e)),n}containsMessage(e,n){return e?e.find(i=>i.summary===n.summary&&i.detail==n.detail&&i.severity===n.severity)!=null:!1}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"message":this.template=e.template;break;case"headless":this.headlessTemplate=e.template;break;default:this.template=e.template;break}})}onMessageClose(e){this.messages?.splice(e.index,1),this.onClose.emit({message:e.message}),this.cd.detectChanges()}onAnimationStart(e){e.fromState==="void"&&(this.renderer.setAttribute(this.containerViewChild?.nativeElement,this.id,""),this.autoZIndex&&this.containerViewChild?.nativeElement.style.zIndex===""&&ie.set("modal",this.containerViewChild?.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(e){e.toState==="void"&&this.autoZIndex&&Ke.isEmpty(this.messages)&&ie.clear(this.containerViewChild?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",ot.setAttribute(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let n in this.breakpoints){let i="";for(let p in this.breakpoints[n])i+=p+":"+this.breakpoints[n][p]+" !important;";e+=`
                    @media screen and (max-width: ${n}) {
                        .p-toast[${this.id}] {
                           ${i}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",e)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.containerViewChild&&this.autoZIndex&&ie.clear(this.containerViewChild.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}static \u0275fac=function(n){return new(n||t)(c(qe),c(Fe),c(D),c(Be),c(he))};static \u0275cmp=h({type:t,selectors:[["p-toast"]],contentQueries:function(n,i,p){if(n&1&&Ae(p,Xe,4),n&2){let C;J(C=K())&&(i.templates=C)}},viewQuery:function(n,i){if(n&1&&ue(lt,5),n&2){let p;J(p=K())&&(i.containerViewChild=p.first)}},hostAttrs:[1,"p-element"],inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",W],baseZIndex:[2,"baseZIndex","baseZIndex",U],life:[2,"life","life",U],style:"style",styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",W],preventDuplicates:[2,"preventDuplicates","preventDuplicates",W],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[ce],decls:3,vars:5,consts:[["container",""],[1,"p-toast","p-component",3,"ngClass","ngStyle"],[3,"message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose",4,"ngFor","ngForOf"],[3,"onClose","message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions"]],template:function(n,i){n&1&&(o(0,"div",1,0),f(2,ei,1,10,"p-toastItem",2),r()),n&2&&(B(i.styleClass),l("ngClass","p-toast-"+i._position)("ngStyle",i.style),a(2),l("ngForOf",i.messages))},dependencies:[w,Ue,He,ti],styles:[`@layer primeng{.p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{display:flex;align-items:flex-start}.p-toast-message-text{flex:1 1 auto}.p-toast-top-right{top:20px;right:20px}.p-toast-top-left{top:20px;left:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{top:20px;left:50%;transform:translate(-50%)}.p-toast-bottom-center{bottom:20px;left:50%;transform:translate(-50%)}.p-toast-center{left:50%;top:50%;min-width:20vw;transform:translate(-50%,-50%)}.p-toast-icon-close{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative;flex:none}.p-toast-icon-close.p-link{cursor:pointer}}
`],encapsulation:2,data:{animation:[ve("toastAnimation",[re(":enter, :leave",[nt("@*",it())])])]},changeDetection:0})}return t})(),pt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=G({imports:[X,st,be,xe,we,Ce,ye,et]})}return t})();var Pe=t=>({"is-invalid":t});function ni(t,m){t&1&&(o(0,"div",11),s(1,"Username is required"),r())}function oi(t,m){if(t&1&&(o(0,"div",9),f(1,ni,2,0,"div",10),r()),t&2){let e=u();a(),l("ngIf",e.f.username.errors.required)}}function ri(t,m){t&1&&(o(0,"div",11),s(1,"Email is required"),r())}function si(t,m){t&1&&(o(0,"div",11),s(1," Email not valid. "),r())}function ai(t,m){if(t&1&&(o(0,"div",9),f(1,ri,2,0,"div",10)(2,si,2,0,"div",10),r()),t&2){let e=u();a(),l("ngIf",e.f.emailId.errors.required),a(),l("ngIf",e.f.emailId.errors==null?null:e.f.emailId.errors.email)}}function li(t,m){t&1&&(o(0,"div",11),s(1,"Password is required"),r())}function mi(t,m){t&1&&(o(0,"div",11),s(1,"Password must be at least 6 characters"),r())}function pi(t,m){if(t&1&&(o(0,"div",9),f(1,li,2,0,"div",10)(2,mi,2,0,"div",10),r()),t&2){let e=u();a(),l("ngIf",e.f.password.errors.required),a(),l("ngIf",e.f.password.errors.minlength)}}var dt=(()=>{class t{constructor(e,n,i,p,C,pe){this.toastMessageService=e,this.formBuilder=n,this.userService=i,this.router=p,this.cookieService=C,this.messageService=pe,this.loading=!1,this.submitted=!1,this.regularExpression=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"}get f(){return this.registerForm.controls}ngOnInit(){this.cookieService.get("username")&&this.router.navigate(["/home"]),this.registerForm=this.formBuilder.group({emailId:["",[g.required,g.email]],username:["",[g.required,g.minLength(2)]],password:["",g.required]})}onSubmit(){if(this.submitted=!0,!this.registerForm.invalid){if(!this.regularExpression.test(this.registerForm.value.password)){this.messageService.add({severity:"warn",summary:"warn",detail:"Password should contain atleast one number and one special character"}),this.toastMessageService.showMessage("Password should contain atleast one number and one special character","warn");return}this.loading=!0,this.registerForm.value.password=btoa(this.registerForm.value.password),this.userService.register(this.registerForm.value).pipe(Me()).subscribe(e=>{e.status==="302"&&(this.loading=!1,this.messageService.add({severity:"warn",summary:"warn",detail:e.message})),e.status==="200"?(this.messageService.add({severity:"success",summary:"success",detail:e.message}),alert(e.message),this.router.navigate(["/login"])):this.messageService.add({severity:"warn",summary:"warn",detail:e.message})},e=>{this.loading=!1})}}static{this.\u0275fac=function(n){return new(n||t)(c(ne),c(A),c(me),c(y),c(R),c(D))}}static{this.\u0275cmp=h({type:t,selectors:[["ng-component"]],features:[Ne([D])],decls:18,vars:14,consts:[[1,"container"],[1,""],[3,"ngSubmit","formGroup"],[1,"form-group","row"],["autocomplete","off","formControlName","username","type","text","placeholder","Choose your username",3,"ngClass"],["style","position: absolute; top: -188px;right: -489px;","class","invalid-feedback",4,"ngIf"],["autocomplete","off","formControlName","emailId","type","email","placeholder","Enter email",3,"ngClass"],["autocomplete","off","formControlName","password","type","password","placeholder","Enter your password",3,"ngClass"],[1,"btn","btn-md","landing-btn",3,"disabled"],[1,"invalid-feedback",2,"position","absolute","top","-188px","right","-489px"],["class","error",4,"ngIf"],[1,"error"]],template:function(n,i){n&1&&(d(0,"p-toast"),o(1,"div",0)(2,"div",1)(3,"h1"),s(4,"Register"),r(),o(5,"form",2),v("ngSubmit",function(){return i.onSubmit()}),o(6,"div",3),d(7,"input",4),f(8,oi,2,1,"div",5),r(),o(9,"div",3),d(10,"input",6),f(11,ai,3,2,"div",5),r(),o(12,"div",3),d(13,"input",7),f(14,pi,3,2,"div",5),r(),o(15,"div",3)(16,"button",8),s(17,"Submit"),r()()()()()),n&2&&(a(5),l("formGroup",i.registerForm),a(2),l("ngClass",b(8,Pe,i.submitted&&i.f.username.errors)),a(),l("ngIf",i.submitted&&i.f.username.errors),a(2),l("ngClass",b(10,Pe,i.submitted&&i.f.emailId.errors)),a(),l("ngIf",i.submitted&&i.f.emailId.errors),a(2),l("ngClass",b(12,Pe,i.submitted&&i.f.password.errors)),a(),l("ngIf",i.submitted&&i.f.password.errors),a(2),l("disabled",i.loading))},dependencies:[w,x,M,E,O,P,mt,k,F],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0}h1[_ngcontent-%COMP%]{margin-bottom:10px;color:#ffffffab;font-weight:700;background:none;font-family:"Baloo Bhai 2",cursive}[_ngcontent-%COMP%]::placeholder{color:#fff;opacity:1}.container[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;justify-content:center;flex-direction:column;align-items:center}.row[_ngcontent-%COMP%]{position:relative}.row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:relative;margin:10px;padding:10px;outline:none;background:none;border:0px;border-bottom:2px solid #ffffff9e;font-family:"Baloo Bhai 2",cursive}.row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;margin-top:10px;padding:10px}.btn[_ngcontent-%COMP%]{color:#fff;padding-left:5px;padding-right:5px;float:right;transition:.3s}.btn[_ngcontent-%COMP%]:hover{background:#ffffff42}.error[_ngcontent-%COMP%]{color:#ff8c8c}']})}}return t})();var ct=(()=>{class t{constructor(e,n){this.router=e,this.cookieService=n}ngOnInit(){this.cookieService.get("user")&&this.router.navigate(["/home"])}static{this.\u0275fac=function(n){return new(n||t)(c(y),c(R))}}static{this.\u0275cmp=h({type:t,selectors:[["app-firstpage"]],decls:26,vars:0,consts:[[1,"header-section"],[1,"container"],[1,"logo"],["href","./index.html"],["src","assets/assets/img/logo.png","alt",""],[1,"nav-menu"],[1,"mainmenu","mobile-menu"],[1,"active"],[3,"click"],[1,"primary-btn","signup-btn",2,"color","white",3,"click"],["id","mobile-menu-wrap"],["data-setbg","../assets/img/gallery/bg.jpg",1,"hero-section","hero-bg","set-bg"],[1,"row"],[1,"col-lg-8"],[1,"hero-text"]],template:function(n,i){n&1&&(o(0,"body")(1,"header",0)(2,"div",1)(3,"div",2)(4,"a",3),d(5,"img",4),r()(),o(6,"div",5)(7,"nav",6)(8,"ul")(9,"li",7)(10,"a",3),s(11,"Home"),r()(),o(12,"li")(13,"a",8),v("click",function(){return i.router.navigate(["contact"])}),s(14,"Contacts"),r()()()(),o(15,"a",9),v("click",function(){return i.router.navigate(["login"])}),s(16,"Login"),r()(),d(17,"div",10),r()(),o(18,"section",11)(19,"div",1)(20,"div",12)(21,"div",13)(22,"div",14),d(23,"span"),o(24,"h1"),s(25,"Aloka Transport"),r()()()()()()())},styles:['.landing-btn[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin-left:10px;color:#fff;border:1px solid #ffff;background:#ffffff12;transition:.3s}.hero-bg[_ngcontent-%COMP%]{background-image:url("./media/bg-AMRC3JZR.jpg")}.landing-btn[_ngcontent-%COMP%]:hover{background:#ffffff40}']})}}return t})();var ft=t=>({"is-invalid":t});function di(t,m){t&1&&(o(0,"div",10),s(1,"Password is required"),r())}function ci(t,m){t&1&&(o(0,"div",10),s(1,"Password must be at least 6 characters"),r())}function fi(t,m){if(t&1&&(o(0,"div",8),f(1,di,2,0,"div",9)(2,ci,2,0,"div",9),r()),t&2){let e=u();a(),l("ngIf",e.f.password.errors.required),a(),l("ngIf",e.f.password.errors.minlength)}}function ui(t,m){t&1&&(o(0,"div",10),s(1,"Password is required"),r())}function gi(t,m){t&1&&(o(0,"div",10),s(1,"Password must be at least 6 characters"),r())}function hi(t,m){if(t&1&&(o(0,"div",8),f(1,ui,2,0,"div",9)(2,gi,2,0,"div",9),r()),t&2){let e=u();a(),l("ngIf",e.f.password.errors.required),a(),l("ngIf",e.f.password.errors.minlength)}}var ut=(()=>{class t{constructor(e,n,i,p){this.route=e,this.formBuilder=n,this.router=i,this.authenticationService=p,this.loading=!1,this.submitted=!1,this.regularExpression=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/}get f(){return this.resetPasswordForm.controls}ngOnInit(){this.id=this.route.snapshot.params.id,this.resetPasswordForm=this.formBuilder.group({password:["",[g.required,g.minLength(6)]],repassword:["",[g.required,g.minLength(6)]]})}resetpassword(){if(this.submitted=!0,!this.resetPasswordForm.invalid){if(this.resetPasswordForm.value.password!==this.resetPasswordForm.value.repassword){alert("password not matched");return}if(!this.regularExpression.test(this.resetPasswordForm.value.password)){alert("password should contain atleast one number and one special character");return}this.loading=!0,this.authenticationService.resetpassword(this.resetPasswordForm.value.password,this.resetPasswordForm.value.repassword).subscribe(e=>{console.log(e),e?this.router.navigate(["/login"]):this.loading=!1},e=>{this.loading=!1})}}static{this.\u0275fac=function(n){return new(n||t)(c(j),c(A),c(y),c(N))}}static{this.\u0275cmp=h({type:t,selectors:[["app-reset-password"]],decls:17,vars:11,consts:[[1,"container"],[1,""],["name","form",3,"ngSubmit","formGroup"],[1,"form-group","row"],["formControlName","password","placeholder","Enter your new password","type","password",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["formControlName","repassword","placeholder","Enter again your new password again","type","password",3,"ngClass"],[1,"btn","btn-md","landing-btn",2,"font-size","x-large",3,"disabled"],[1,"invalid-feedback"],["class","error",4,"ngIf"],[1,"error"]],template:function(n,i){n&1&&(o(0,"div",0)(1,"div",1)(2,"h1"),s(3,"Reset Password("),o(4,"span"),s(5),r(),s(6,")"),r(),o(7,"form",2),v("ngSubmit",function(){return i.resetpassword()}),o(8,"div",3),d(9,"input",4),f(10,fi,3,2,"div",5),r(),o(11,"div",3),d(12,"input",6),f(13,hi,3,2,"div",5),r(),o(14,"div",3)(15,"button",7),s(16,"Submit"),r()()()()()),n&2&&(a(5),q(i.id),a(2),l("formGroup",i.resetPasswordForm),a(2),l("ngClass",b(7,ft,i.submitted&&i.f.password.errors)),a(),l("ngIf",i.submitted&&i.f.password.errors),a(2),l("ngClass",b(9,ft,i.submitted&&i.f.password.errors)),a(),l("ngIf",i.submitted&&i.f.password.errors),a(2),l("disabled",i.loading))},dependencies:[w,x,M,E,O,P,k,F],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0}h1[_ngcontent-%COMP%]{margin-bottom:10px;color:#ffffffab;font-weight:700;background:none;font-family:"Baloo Bhai 2",cursive}[_ngcontent-%COMP%]::placeholder{color:#fff;opacity:1}.container[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;justify-content:center;flex-direction:column;align-items:center}.row[_ngcontent-%COMP%]{position:relative}.row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:relative;margin:10px;padding:10px;outline:none;background:none;border:0px;border-bottom:2px solid #ffffff9e;font-family:"Baloo Bhai 2",cursive}.row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;margin-top:10px;padding:10px}.btn[_ngcontent-%COMP%]{color:#fff;padding-left:5px;padding-right:5px;float:right;transition:.3s}.btn[_ngcontent-%COMP%]:hover{background:#ffffff42}.error[_ngcontent-%COMP%]{color:#ff8c8c}']})}}return t})();var gt=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-contacts"]],standalone:!0,features:[je],decls:122,vars:0,consts:[["id","site-header"],[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark","fixed-top"],[1,"container"],["href","/",1,"navbar-brand","fw-bold"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],[1,"mt-5"],[1,"bg-light","py-5"],[1,"container","py-5"],[1,"row","g-5"],[1,"col-xl-6"],[1,"row","row-cols-md-2","g-4"],["data-aos","fade-up","data-aos-delay","200",1,"aos-item"],[1,"aos-item__inner"],[1,"bg-light","hvr-shutter-out-horizontal","d-block","p-3"],[1,"d-flex","justify-content-start"],[1,"fa-solid","fa-envelope","h3","pe-2"],[1,"h5"],["data-aos","fade-up","data-aos-delay","400",1,"aos-item"],[1,"fa-solid","fa-phone","h3","pe-2"],["data-aos","fade-up","data-aos-delay","600",1,"aos-item","mt-4"],[1,"fa-solid","fa-location-pin","h3","pe-2"],["data-aos","fade-up","data-aos-delay","800",1,"aos-item"],[1,"mt-4","w-100","aos-item__inner"],["src",z`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7531959174976!2d77.332801!3d28.577173000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce452adb968ef%3A0xdc0b6634905a9b57!2sKartik%20Fitness%20Zone!5e0!3m2!1sen!2sin!4v1730977670802!5m2!1sen!2sin`,"width","500","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],["href","https://www.maps.ie/distance-area-calculator.html"],[1,"pb-4"],[1,"row","g-4"],[1,"col-6","mb-3"],["for","exampleFormControlInput13",1,"form-label"],["type","text","id","exampleFormControlInput13","placeholder","John",1,"form-control"],["for","exampleFormControlInput14",1,"form-label"],["type","text","id","exampleFormControlInput14","placeholder","Doe",1,"form-control"],[1,"mb-3"],["for","exampleFormControlInput15",1,"form-label"],["type","email","id","exampleFormControlInput15","placeholder","name@example.com",1,"form-control"],["for","exampleFormControlInput16",1,"form-label"],["type","tel","id","exampleFormControlInput16","placeholder","+1234567890",1,"form-control"],[1,"form-label","mr-2"],["aria-label","Default select example",1,"form-select"],["value","1"],["value","2"],["for","exampleFormControlTextarea1",1,"form-label"],["id","exampleFormControlTextarea1","rows","3",1,"form-control"],["type","button",1,"btn","btn-dark"],[1,"footer-section"],[1,"row"],[1,"col-md-4"],[1,"contact-option"],["data-setbg","assets/img/footer-signup.jpg",1,"subscribe-option","set-bg"],[1,"so-text"],["action","#",1,"subscribe-form"],["type","text","placeholder","Enter Your Mail"],["type","submit"],[1,"fa","fa-send"],[1,"copyright-text"],["href","#"]],template:function(n,i){n&1&&(o(0,"header",0)(1,"nav",1)(2,"div",2)(3,"a",3),s(4,"Aloka Transport"),r(),o(5,"button",4),d(6,"span",5),r()()()(),o(7,"section",6)(8,"div",7),d(9,"div",2),r()(),o(10,"main")(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"div",14)(18,"div",15),d(19,"i",16),o(20,"span",17),s(21,"Email"),r()(),d(22,"span"),r()()(),o(23,"div",18)(24,"div",13)(25,"div",14)(26,"div",15),d(27,"i",19),o(28,"span",17),s(29,"Phone"),r()(),o(30,"span"),s(31,"098918 96166"),r()()()()(),o(32,"div",20)(33,"div",13)(34,"div",14)(35,"div",15),d(36,"i",21),o(37,"span",17),s(38,"Office location"),r()(),o(39,"span"),s(40,"A-48, Shaheed Arjun Sardana Marg, A Block, Sector 26, Noida, Uttar Pradesh 201301"),r()()()(),o(41,"div",22)(42,"div",23)(43,"iframe",24)(44,"a",25),s(45,"measure acres/hectares on map"),r()()()()(),o(46,"div",10)(47,"h2",26),s(48,"Leave a message"),r(),o(49,"div",27)(50,"div",28)(51,"label",29),s(52,"Fname"),r(),d(53,"input",30),r(),o(54,"div",28)(55,"label",31),s(56,"Lname"),r(),d(57,"input",32),r()(),o(58,"div",33)(59,"label",34),s(60,"Email"),r(),d(61,"input",35),r(),o(62,"div",33)(63,"label",36),s(64,"Phone"),r(),d(65,"input",37),r(),o(66,"div",33)(67,"label",38),s(68,"Country"),r(),o(69,"select",39)(70,"option",40),s(71,"USA"),r(),o(72,"option",41),s(73,"Non USA"),r()()(),o(74,"div",33)(75,"label",42),s(76,"Message"),r(),d(77,"textarea",43),r(),o(78,"button",44),s(79,"Send Message"),r()()()()(),o(80,"footer",45)(81,"div",2)(82,"div",46)(83,"div",47)(84,"div",48)(85,"span"),s(86,"Phone"),r(),o(87,"p"),s(88,"098918 96166"),r()()(),o(89,"div",47)(90,"div",48)(91,"span"),s(92,"Address"),r(),o(93,"p"),s(94,"A-48, Shaheed Arjun Sardana Marg, A Block, Sector 26, Noida, Uttar Pradesh 201301"),r()()(),o(95,"div",47)(96,"div",48)(97,"span"),s(98,"Email"),r()()()(),o(99,"div",49)(100,"div",50)(101,"h4"),s(102,"Subscribe To Our Mailing List"),r(),o(103,"p"),s(104,"Sign up to receive the latest information "),r()(),o(105,"form",51),d(106,"input",52),o(107,"button",53),d(108,"i",54),r()()(),o(109,"div",55)(110,"ul")(111,"li")(112,"a",56),s(113,"Term&Use"),r()(),o(114,"li")(115,"a",56),s(116,"Privacy Policy"),r()()(),o(117,"p"),s(118,"\xA9"),r(),o(119,"p"),s(120," Copyright \xA9"),s(121," All rights reserved "),r()()()())}})}}return t})();var ht=[{path:"",component:ct},{path:"login",component:Oe},{path:"contact",component:gt},{path:"verifyEmail/:id/token/:token",component:Oe},{path:"register",component:dt},{path:"forgot-password",component:at},{path:"reset-password/:id",component:ut}];var Pn=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=G({providers:[me,N],imports:[X,Ye,pt,Je,ze.forChild(ht)]})}}return t})();export{Pn as LandingModule};
