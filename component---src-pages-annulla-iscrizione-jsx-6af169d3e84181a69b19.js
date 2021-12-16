"use strict";(self.webpackChunkpadigitale2026=self.webpackChunkpadigitale2026||[]).push([[822],{7274:function(e,t,a){a.d(t,{V:function(){return i}});var n=a(7294),r=a(5900),s=a.n(r),i=function(e){var t=e.bgColor,a=void 0===t?"":t,r=e.xPadding,i=void 0===r||r,l=e.className,o=e.yPaddingXLScreen,c=void 0===o||o,u=e.Tag,m=void 0===u?"div":u,d=e.ariaLabelledBy,p=e.children,g=s()("py-5",{"bg-primary":"primary"===a,"lightgrey-bg-a2":"light"===a},l),y=s()("container",{"py-xl-5":c,"px-3 px-md-0":i});return n.createElement("div",{className:g},n.createElement(m,{className:y,"aria-labelledby":d},p))}},2891:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});var n=a(7294),r=a(8634),s=a(2656),i=a.n(s),l=a(5444),o=a(2980),c=a(7274),u=a(974),m=JSON.parse('{"initial":{"title":"Annullare l\'iscrizione agli aggiornamenti?","body":"Annullando l’iscrizione non riceverai ulteriori comunicazioni<br>o aggiornamenti da PA Digitale 2026","button":"Annulla Iscrizione"},"error":{"title":"Errore nella conferma","body":"Abbiamo riscontrato un problema tecnico: per favore riprova inviando nuovamente la richiesta.","button":"Riprova"},"success":{"title":"Iscrizione aggiornamenti annullata <svg role=\\"img\\" focusable=\\"false\\" aria-label=\\"successo\\" class=\\"icon\\" width=\\"28\\" height=\\"28\\" viewBox=\\"0 0 28 28\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M14.0003 27.3334C6.63653 27.3334 0.666992 21.3639 0.666992 14.0001C0.666992 6.63628 6.63653 0.666748 14.0003 0.666748C17.5365 0.666748 20.9279 2.07151 23.4284 4.57199C25.9289 7.07248 27.3337 10.4639 27.3337 14.0001C27.3337 21.3639 21.3641 27.3334 14.0003 27.3334ZM20.8003 8.53341L21.7337 9.46675L11.3337 19.6001L5.06699 13.4667L6.00033 12.5334L11.3337 17.7334L20.8003 8.53341ZM14.0003 2.00008C20.6277 2.00008 26.0003 7.37266 26.0003 14.0001C26.0003 20.6275 20.6277 26.0001 14.0003 26.0001C7.37291 26.0001 2.00033 20.6275 2.00033 14.0001C2.00033 7.37266 7.37291 2.00008 14.0003 2.00008Z\\" fill=\\"#008255\\"/></svg>","body":"Hai annullato l\'iscrizione: non riceverai ulteriori comunicazioni<br> o aggiornamenti da PA Digitale 2026","button":"Torna alla Homepage"}}'),d=a(7046),p=a(9063),g=d.do,y=g.title,b=g.description,v=(0,p.QM)({title:{fontSize:"27px",fontWeight:"700",color:"#33485C"}}),x="initial",h="loading",f="success",E="error",C=function(e,t){var a=t.type,n=t.payload;return a===x?{status:x}:a===h?{status:h,data:n}:a===E?{status:E,data:n}:a===f?{status:f,data:n}:e},N=function(e){var t=e.location,a=v(),s=new URLSearchParams(t.search),d=s.get("address"),p=s.get("uuid"),g=(0,l.K2)("2767305448").site.siteMetadata.apiUrl,N={};N.status=p&&d?x:E;var L=(0,n.useReducer)(C,N),k=L[0],w=L[1],z=(0,n.useCallback)((0,r.Z)(i().mark((function e(){var t,a,n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w({type:h,payload:{}}),t={crossDomain:!0,method:"PATCH",headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,fetch(g+"/users/"+d+"/"+p+"/unsubscribe",t);case 5:return a=e.sent,n=a.status,e.next=9,a.json();case 9:r=e.sent,w(n>=200&&n<=299?{type:f,payload:{message:r,status:n}}:{type:E,payload:{message:r,status:n}}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),w({type:E,payload:e.t0});case 16:case"end":return e.stop()}}),e,null,[[2,13]])}))),[g]);return n.createElement(n.Fragment,null,n.createElement(u.H,{title:y,description:b}),n.createElement("h1",{className:"sr-only"},y),n.createElement(c.V,null,k.status===x&&n.createElement("div",{className:"text-center text-primary"},n.createElement("div",{className:a.title},m[k.status].title),n.createElement("div",{className:"my-4 text-dark",dangerouslySetInnerHTML:{__html:m[k.status].body}}),n.createElement(o.zx,{onClick:z,type:"button",className:"btn text-uppercase btn-primary","aria-label":"Annulla iscrizione",color:"primary"},m[k.status].button)),k.status===h&&n.createElement("div",{className:"progress-spinner progress-spinner-active mx-auto mt-5"},n.createElement("span",{className:"sr-only"},"Caricamento...")),k.status===f&&n.createElement("div",{className:"text-center text-primary"},n.createElement("div",{className:a.title,dangerouslySetInnerHTML:{__html:m[k.status].title}}),n.createElement("div",{className:"my-4 text-dark",dangerouslySetInnerHTML:{__html:m[k.status].body}}),n.createElement(l.rU,{to:"/",className:"btn text-uppercase btn-primary"},m[k.status].button)),k.status===E&&n.createElement("div",{className:"text-center text-primary"},n.createElement("div",{className:"display-3"},m[k.status].title),n.createElement("div",{className:"my-4 text-dark",dangerouslySetInnerHTML:{__html:m[k.status].body}}),n.createElement(o.zx,{type:"button",className:"btn text-uppercase btn-danger",onClick:z},m[k.status].button))))},L=function(e){return n.createElement(N,e)}}}]);
//# sourceMappingURL=component---src-pages-annulla-iscrizione-jsx-6af169d3e84181a69b19.js.map