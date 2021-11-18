"use strict";(self.webpackChunkpadigitale2026=self.webpackChunkpadigitale2026||[]).push([[493],{9092:function(e,t,i){var a=i(4038),n=i(1531),r=i(7294),o=i(2565),l=i.n(o),s=i(3033),c=function(e){var t=e.className,i=e.cssModule,o=e.innerRef,c=e.tag,m=(0,n.Z)(e,["className","cssModule","innerRef","tag"]),d=(0,s.mx)(l()(t,"card-body"),i);return r.createElement(c,(0,a.Z)({},m,{className:d,ref:o}))};c.defaultProps={tag:"div"},t.Z=c},8578:function(e,t,i){var a=i(4038),n=i(1531),r=i(7294),o=i(2565),l=i.n(o),s=i(3033),c=function(e){var t=e.className,i=e.cssModule,o=e.tag,c=(0,n.Z)(e,["className","cssModule","tag"]),m=(0,s.mx)(l()(t,"card-text"),i);return r.createElement(o,(0,a.Z)({},c,{className:m}))};c.defaultProps={tag:"p"},t.Z=c},6791:function(e,t,i){var a=i(4038),n=i(1531),r=i(7294),o=i(2565),l=i.n(o),s=i(3033),c=function(e){var t=e.className,i=e.cssModule,o=e.tag,c=(0,n.Z)(e,["className","cssModule","tag"]),m=(0,s.mx)(l()(t,"card-title"),i);return r.createElement(o,(0,a.Z)({},c,{className:m}))};c.defaultProps={tag:"div"},t.Z=c},6921:function(e,t,i){var a=i(4038),n=i(1531),r=i(7294),o=i(2565),l=i.n(o),s=i(3033),c=function(e){var t=e.className,i=e.cssModule,o=e.fluid,c=e.tag,m=(0,n.Z)(e,["className","cssModule","fluid","tag"]),d="container";!0===o?d="container-fluid":o&&(d="container-"+o);var p=(0,s.mx)(l()(t,d),i);return r.createElement(c,(0,a.Z)({},m,{className:p}))};c.defaultProps={tag:"div"},t.Z=c},1581:function(e,t,i){i.d(t,{M:function(){return s}});var a=i(7294),n=i(9063),r=i(5900),o=i.n(r),l=(0,n.QM)({heroImg:{position:"absolute",right:"0",top:"0",maxHeight:"100%",maxWidth:"100%","@media (max-width: 992px)":{position:"relative",margin:"0 auto"},"&.full":{width:"100%",objectFit:"cover","@media (max-width: 992px)":{position:"absolute",right:"0",top:"0"}}}}),s=function(e){var t=e.image,i=e.className,n=l(),r=o()(n.heroImg,i);return a.createElement("img",{src:"/assets/"+t,alt:"",className:r})}},4507:function(e,t,i){i.d(t,{P:function(){return u}});var a=i(7294),n=i(9063),r=i(2980),o=i(6667),l=i(7798),s=i(6879),c=i(1581),m=function(e){var t=e.classButton,i=e.href,n=e.label,r=e.ariaLabel,o=e.rel,l=e.target;return a.createElement("a",{className:"btn btn-sm "+t,href:i,"aria-label":r,rel:o,target:l},n)},d=i(276),p=(0,n.QM)({heroImg:{position:"relative",width:"100%",maxHeight:"25rem",objectFit:"contain",objectPosition:"right","@media (max-width: 992px)":{objectPosition:"center"}},heroTitle:{composes:"no_doc title-hero",fontSize:"2.222rem","@media (max-width: 992px)":{display:"flex",justifyContent:"center",fontSize:"1.778rem",textAlign:"center"}},contentWrapper:{composes:"it-hero-text-wrapper",paddingLeft:"0 !important",zIndex:2,"@media (max-width: 992px)":{marginBottom:"4rem"}},heroWrapper:{composes:"it-hero-wrapper",position:"relative",display:"flex",padding:"0 0 2rem","&:not(.overlap)":{minHeight:"auto","& .container .it-hero-text-wrapper":{padding:"5rem 0","@media (max-width: 992px)":{padding:"4rem 0 1rem"},"& .title-hero":{fontSize:"2.5rem","@media (min-width: 992px)":{maxWidth:"26.2rem",fontSize:"2.667rem",display:"block"}},"& p":{"@media (min-width: 992px)":{maxWidth:"26.2rem"}}}},"&.overlap":{marginBottom:"-7rem",paddingBottom:"11rem"},"@media (max-width: 992px)":{flexDirection:"column",paddingBottom:"5rem"},"&.bg-white":{backgroundColor:"#fff","& .it-hero-text-wrapper.bg-white span, h1, h2, h3, p":{color:"#33485C"}},"&.bg-blue":{backgroundColor:"#0066CC","& .bg-blue":{color:"#fff"}},"&.bg-blue .btn":{color:"#0066CC"},"& .container .it-hero-text-wrapper":{"@media (min-width: 992px)":{}},"& .container .it-hero-text-wrapper p":{fontFamily:"Titillium Web,Geneva,Tahoma,sans-serif",fontSize:"1.333rem","@media (max-width: 992px)":{fontSize:"1.25rem"}},"& .container .it-hero-text-wrapper .btn":{fontSize:"1rem"},"&.it-hero-wrapper .it-hero-text-wrapper .it-btn-container":{position:"relative"}},buttonContainer:{composes:"it-btn-container",display:"flex","& .btn.btn-light:hover":{background:"#e9e6f2",color:"#004d99"},"& .btn+.btn":{marginLeft:"1.875rem"},"@media (max-width: 992px)":{justifyContent:"center",flexDirection:"column",alignItems:"center","& .btn+.btn":{marginLeft:"0",marginTop:"1.875rem"}}},heroContentContainer:{composes:"container","&.container":{},"& .it-hero-text-wrapper":{padding:"5.333rem 0 0"}},imageContainer:{composes:"pr-0 offset-lg-1 mt-4 mt-lg-0",position:"absolute",right:"0",top:"0","@media (max-width: 992px)":{position:"relative"}}}),u=function(e){var t=e.title,i=e.body,n=e.theme,u=e.image,g=e.firstButtonLabel,f=e.firstButtonAriaLabel,h=e.firstButtonClass,b=e.firstButtonHref,x=e.secondButtonLabel,v=e.secondButtonClass,E=e.secondButtonHref,z=e.overlap,N=e.noButton,C=e.titleId,S=p();return a.createElement(r.VM,null,a.createElement("div",{className:S.heroWrapper+" "+(z?"overlap":"")+" "+n},a.createElement("section",{"aria-labelledby":C,className:S.heroContentContainer},a.createElement(o.Z,null,a.createElement(l.Z,{xs:"12",lg:"5",className:"offset-lg-1"},a.createElement("div",{className:S.contentWrapper+" "+n},a.createElement("div",null,a.createElement(s.L,{id:C,Tag:"h3",title:t,className:S.heroTitle}),a.createElement(d.o,{text:i}),a.createElement("div",{className:S.buttonContainer},N?"":a.createElement(m,{classButton:h,label:g,href:b,ariaLabel:f,target:"_blank",rel:"noreferrer"}),x?a.createElement(m,{classButton:v,label:x,href:E}):"")))),a.createElement(l.Z,{xs:12,lg:5,className:S.imageContainer},a.createElement(c.M,{image:u,className:S.heroImg}))))))}},276:function(e,t,i){i.d(t,{o:function(){return r}});var a=i(7294),n=(0,i(9063).QM)({paragraph:{composes:"d-lg-block",fontFamily:"Titillium Web,Geneva,Tahoma,sans-serif","@media (max-width: 992px)":{textAlign:"center"}}}),r=function(e){var t=e.text,i=n();return a.createElement("p",{className:i.paragraph,dangerouslySetInnerHTML:{__html:t}})}},6879:function(e,t,i){i.d(t,{L:function(){return r}});var a=i(7294),n=i(5444),r=function(e){var t=e.linkTo,i=void 0===t?null:t,r=e.title,o=e.className,l=void 0===o?"":o,s=e.Tag,c=void 0===s?"h3":s,m=e.id;return a.createElement(c,{id:m,className:"h2 mb-4"},i?a.createElement(n.rU,{to:i,className:"text-decoration-none "+l},r):a.createElement("span",{className:""+l},r))}},8021:function(e,t,i){i.d(t,{F:function(){return u}});var a=i(7294),n=i(6667),r=i(7798),o=i(2980),l=i(9092),s=i(6791),c=i(8578),m=i(9063),d=i(5444),p=(0,m.QM)({layout:{composes:"offset-lg-1 px-3","& a":{"&:focus":{outline:"2px solid #ff9900",boxShadow:"none"}}},tag:{fontSize:"0.888rem",color:"#33485C",lineHeight:"1.5",marginBottom:"0.555rem",textTransform:"uppercase",textAlign:"center",fontWeight:"600","@media (min-width: 768px)":{textAlign:"left"}},cleanLink:{textDecoration:"none","&:hover":{textDecoration:"none"},"&:focus":{outline:"2px solid #ff9900",boxShadow:"none"}},resetButton:{padding:"0",border:"0",textAlign:"left",fontWeight:"normal",height:"100%",backgroundColor:"transparent","&:focus":{outline:"2px solid #ff9900",boxShadow:"none"}},colCard:{composes:"mb-3 mb-md-0 col-card","&+.col-card":{"@media (min-width: 768px)":{marginLeft:"30px"}}},sectionTitle:{fontSize:"1.555rem",color:"#33485C",lineHeight:"1.15",marginBottom:"3.333rem",fontWeight:"700",textAlign:"center","@media (min-width: 768px)":{fontSize:"1.777rem",textAlign:"left",lineHeight:"1.25",marginBottom:"2.666rem"}},cardWrapper:{composes:"rounded",boxShadow:"0px 0px 80px rgba(0, 43, 85, 0.1)",height:"100%",cursor:"pointer","&:hover":{"&.card.card-teaser":{"& h5.card-title":{textDecoration:"underline"}}},"@media (min-width: 768px)":{minHeight:"11.666rem"},"& + .card":{marginTop:"0.888rem"},"&.card.card-teaser":{"& h5.card-title":{color:"#0066CC",fontSize:"1.555rem",fontWeight:"600",letterSpacing:"-0.25px",lineHeight:"1.4",marginBottom:"0.888rem"},"& .card-text":{fontSize:"0.888rem",color:"#33485C",lineHeight:"1.5"}}}}),u=function(e){var t=p(),i=e.title,m=e.supportList,u=e.buttonLabel,g=e.handleToggle;return a.createElement(a.Fragment,null,a.createElement("div",{className:"section section-muted"},a.createElement("h3",{id:"support-section",className:"sr-only"},"Supporto"),a.createElement("section",{className:"container","aria-labelledby":"support-section"},a.createElement(n.Z,null,a.createElement(r.Z,{md:8,lg:6,className:t.layout},a.createElement("p",{className:t.tag},"Supporto"),a.createElement("h4",{className:t.sectionTitle},i))),a.createElement(n.Z,null,a.createElement(r.Z,{className:t.layout},a.createElement(n.Z,null,m.map((function(e){return a.createElement(r.Z,{key:e.title,md:5,lg:3,className:t.colCard},e.isModal?a.createElement("div",{onClick:g,className:t.resetButton},a.createElement(o.Zb,{teaser:!0,noWrapper:!0,className:t.cardWrapper},a.createElement(l.Z,null,a.createElement(s.Z,{tag:"h5",className:t.cardTitle},e.title),a.createElement(c.Z,{className:t.cardText},e.description)))):a.createElement(d.rU,{to:"/faq",className:t.cleanLink},a.createElement(o.Zb,{teaser:!0,noWrapper:!0,className:t.cardWrapper},a.createElement(l.Z,null,a.createElement(s.Z,{tag:"h5",className:t.cardTitle},e.title),a.createElement(c.Z,{className:t.cardText},e.description)))))}))))),e.buttonLabel&&a.createElement(n.Z,null,a.createElement(r.Z,{md:8,lg:6,className:t.layout+" mt-5"},a.createElement(d.rU,{to:"/supporto",className:"btn btn-primary text-uppercase","aria-label":"Scopri di più sulla pagina supporto"},u))))))}},9074:function(e,t,i){i.r(t),i.d(t,{default:function(){return R}});var a=i(5938),n=i(7294),r=i(8334),o=i(9063),l=i(2619),s=i(4319),c=i(2980),m=i(9092),d=i(5444),p=i(6380),u=i(4087),g=(0,o.QM)({collapseWrapper:{composes:"card card-bg rounded",display:"flex",flexDirection:"row-reverse",position:"relative","&.card.card-bg":{marginBottom:"1.778rem",marginLeft:"0",marginRight:"0"},"&:after":{content:"unset"}},cardWrapper:{width:"100%"},cardHeader:{display:"flex",justifyContent:"space-between",padding:"1.333rem 0.778rem",flexDirection:"column",alignItems:"center","@media (min-width: 992px)":{flexDirection:"row",flexWrap:"wrap",padding:"1.778rem 2.222rem"}},cardTitle:{fontSize:"1.111rem",lineHeight:"1.25",fontWeight:"bold",alignSelf:"flex-start",maxWidth:"calc(100% - 3.5rem)","& span":{fontWeight:"normal"},"@media (min-width: 992px)":{maxWidth:"70%",fontSize:"1.778rem",paddingBottom:"0.833rem"}},cardTags:{"@media (min-width: 992px)":{display:"flex",alignItems:"baseline",flexBasis:"100%",marginTop:"-1.111rem"},"& .tag-title":{textTransform:"uppercase",marginBottom:"0.444rem",textAlign:"center",fontSize:"0.875rem",lineHeight:"1.4","@media (min-width: 992px)":{marginBottom:"0",marginRight:"0.444rem",fontSize:"0.778rem"}},"& .tag-wrapper":{display:"flex",flexWrap:"wrap",justifyContent:"center","@media (min-width: 992px)":{justifyContent:"flex-start",maxWidth:"70%"}},"& .tag":{padding:"2px 16px",borderRadius:"12px",border:"1px solid #E6E9F2",fontSize:"0.778rem",fontWeight:"600",marginBottom:"0.444rem",marginRight:"0.444rem","&::last-child":{marginRight:"0"}}},cardHeaderValue:{fontSize:"3.111rem",lineHeight:"1.15",textAlign:"center",marginBottom:"0.889rem","& span":{display:"block",fontSize:"0.889rem",fontWeight:"bold"},"@media (min-width: 992px)":{marginBottom:"0",textAlign:"right"}},collapseAccordion:{"& .card-wrapper":{paddingBottom:"0"},"& .card":{"&:after":{content:"unset"}},"& .card-body":{padding:"1.333rem 0.778rem",display:"flex",flexDirection:"column","@media (min-width: 992px)":{padding:"0.444rem 2.222rem 1.778rem"},"& .description":{"@media (min-width: 992px)":{maxWidth:"44rem"}}},"& .stalls":{fontSize:"0.875rem",lineHeight:"1.4",letterSpacing:"0.5px",textTransform:"uppercase","@media (min-width: 992px)":{fontSize:"0.778rem"},"& span":{fontWeight:"600",textTransform:"lowercase"}},"& .access":{fontSize:"0.778rem",lineHeight:"1.4",letterSpacing:"0.5px",textTransform:"uppercase",display:"flex",alignItems:"baseline",marginBottom:"1rem","& span":{flexShrink:"0",marginRight:"0.313rem"},"& a":{fontSize:"1.125rem",lineHeight:"1",fontWeight:"600",color:"#0066CC",textTransform:"capitalize",textDecoration:"none","@media (min-width: 992px)":{fontSize:"1rem"},"&:hover":{textDecoration:"underline"}}}},linkAccordion:{textAlign:"right","@media (min-width: 992px)":{marginTop:"2.222rem"},"& a":{textDecoration:"none",display:"inline-flex",alignItems:"center",fontSize:"0.778rem","& img":{marginLeft:"0.444rem"},"&:hover":{textDecoration:"underline"}}},button:{borderTopLeftRadius:"0",borderBottomRightRadius:"0",backgroundColor:"#DAE3EC",padding:"0.444rem",position:"absolute",right:"0",boxShadow:"none",backgroundImage:"url(/assets/chevron-down.svg)",backgroundRepeat:"no-repeat",backgroundPosition:"center","&:focus":{outline:"2px solid #ff9900",boxShadow:"none"},"&:hover, &:focus":{backgroundColor:"#0066CC",backgroundImage:"url(/assets/chevron-down-white.svg)"},'&[aria-expanded="true"]':{backgroundColor:"#0066CC",backgroundImage:"url(/assets/chevron-up-white.svg)","&:hover, &:focus":{backgroundImage:"url(/assets/chevron-up-white.svg)"}},"@media (max-width: 991px)":{maxHeight:"95px",height:"100%",minWidth:"2.667rem"},"@media (min-width: 992px)":{position:"static",minWidth:"5.333rem",padding:"0.667rem 1.333rem",borderTopLeftRadius:"0",borderBottomLeftRadius:"0",borderBottomRightRadius:"4px"}}}),f=function(e){var t=g(),i=e.data,a=i.id,r=i.number,o=i.title,l=i.money,s=i.tags,f=i.description,h=i.stalls,b=i.accessLabel,x=i.accessSectionId,v=i.moreInfoLabel,E=i.moreInfoLink,z=(0,n.useContext)(p.P),N=(z[0],z[1]);return n.createElement(n.Fragment,null,n.createElement("div",{className:t.collapseWrapper,role:"listitem",id:a},n.createElement(c.zx,{onClick:function(){e.handleToggle(e.id)},"aria-expanded":e.id===e.active,className:t.button,"aria-label":"Dettaglio opportunità "+r+" "+o,"aria-controls":"Misure-accordion-"+a}),n.createElement("div",{id:"Misure-accordion-"+a,className:t.cardWrapper},n.createElement("div",{className:t.cardHeader},n.createElement("h4",{className:t.cardTitle},n.createElement("span",null,r)," ",o),n.createElement("div",{className:t.cardHeaderValue,dangerouslySetInnerHTML:{__html:l}}),n.createElement("div",{className:t.cardTags},n.createElement("p",{className:"tag-title"},"Beneficiari"),n.createElement("div",{className:"tag-wrapper"},s.map((function(e){return n.createElement("div",{key:e.label,className:"tag"},e.label)}))))),n.createElement(c.UO,{isOpen:e.id===e.active,className:t.collapseAccordion},n.createElement(c.Zb,null,n.createElement(m.Z,null,n.createElement("p",{className:"description"},f),n.createElement("p",{className:"stalls"},"Platea potenziale: ",n.createElement("span",null,h)),n.createElement("div",{className:"access"},n.createElement("span",null,"Modalità di accesso:")," ",n.createElement(d.rU,{className:t.accessLink,to:"/come-funziona",onClick:function(){return N({type:"SET:HOW_SECTION_ID",payload:{howId:x}})}},n.createElement("p",null,b))),n.createElement("div",{className:t.linkAccordion},n.createElement(u.d,{linkTo:E,ariaLabel:v+", "+o+", (Collegamento esterno - Apre su nuova scheda)"},v,n.createElement("img",{src:"/assets/external-icon.svg",alt:""})))))))))},h=(0,o.QM)({section:{padding:"0"},selectWrapper:{composes:"bootstrap-select-wrapper",marginBottom:"2.667rem","& > label":{position:"unset",transform:"unset",lineHeight:"1.4",fontSize:"0.778rem",marginBottom:"0.444rem",display:"inline-block",textTransform:"uppercase",fontWeight:"normal"},'& [class$="-container"]':{maxWidth:"410px","&.is-open":{'& [class$="-control"]':{borderBottomLeftRadius:"0",borderBottomRightRadius:"0"}},"&.not-all":{'& [class$="-control"]':{backgroundColor:"#0066CC"}}},"& .css-1pahdxg-control":{outline:"2px solid #ff9900 !important",boxShadow:"none"},'& [class$="-control"]':{cursor:"pointer",backgroundColor:"#5D6F81",maxHeight:"48px",border:"0",padding:"0.555rem 1.333rem",'& [class$="-singleValue"]':{color:"#fff",fontWeight:"bold"},'& [class$="-indicatorSeparator"]':{display:"none"},'& [class$="-indicatorContainer"]':{padding:"0"},"& svg":{color:"#fff"},'& [class$="-ValueContainer"]':{padding:"0"}},'& [class$="-menu"]':{marginTop:"0",borderTopLeftRadius:"0",borderTopRightRadius:"0",boxShadow:"0 2px 20px 0 rgb(0 0 0 / 10%)","& .css-11uursq-option":{fontWeight:"bold"},'& [class$="-option"]':{cursor:"pointer",backgroundColor:"#fff",color:"#0066CC",fontSize:"0.889rem",lineHeight:"1.5","&:hover":{fontWeight:"bold"}}}}}),b={option:function(e,t){return Object.assign({},e,{fontWeight:t.isSelected?"bold":"normal"})}},x=function(e){var t=h(),i=(0,n.useState)(l.hW),a=i[0],r=i[1],o=(0,n.useState)(-1),c=o[0],m=o[1],d=(0,n.useState)(null),u=d[0],g=d[1],x=(0,n.useState)(l.KO[0]),v=x[0],E=x[1],z=(0,n.useState)(!1),N=(z[0],z[1]),C=(0,n.useState)(!0),S=C[0],w=C[1],T=(0,n.useContext)(p.P)[0].sectionId,y=function(e){m(c===e?-1:e)};return(0,n.useEffect)((function(){T&&document.querySelector("#"+T).scrollIntoView({behavior:"smooth"})}),[T]),(0,n.useEffect)((function(){e.externalFilter&&(E(e.externalFilter),g(e.externalFilter),document.querySelector("#filter-beneficiaries").scrollIntoView({behavior:"smooth"}))}),[e.externalFilter]),(0,n.useEffect)((function(){if(null!=u)if("tutti"!==u.value){for(var e=[],t=0;t<l.hW.length;t++){l.hW[t].tags.filter((function(e){return e.value===u.value})).length&&e.push(l.hW[t])}r(e),w(!1)}else w(!0),r(l.hW)}),[u]),n.createElement(n.Fragment,null,n.createElement("div",{className:t.section},n.createElement("h3",{className:"sr-only",id:"lista-misure-hader"},"Elenco opportunità"),n.createElement("div",{className:"container mt-5 px-3",id:"filter-beneficiaries"},n.createElement("div",{className:t.selectWrapper},n.createElement("label",{htmlFor:"beneficiaries"},"Beneficiari"),n.createElement(s.ZP,{styles:b,isSearchable:!1,value:u||v,inputId:"beneficiaries",onChange:function(e){return g(e)},onMenuOpen:function(){return N(!0)},onMenuClose:function(){return N(!1)},options:l.KO,placeholder:!1,className:S?"":"not-all","aria-label":"Scegli una opzione"})),n.createElement("div",{role:"list"},a.map((function(e,t){return n.createElement(n.Fragment,{key:e.title},n.createElement(f,{data:e,handleToggle:y,id:t,active:c}))}))))))},v=i(8021),E=i(4507),z=i(6921),N=i(6667),C=i(7798),S=(0,o.QM)({modalButtonContainer:{border:"1px solid #0066CC",padding:"0.5rem 5.556rem",display:"flex",justifyContent:"space-between",alignItems:"center","& .description":{margin:"0",fontSize:"1.333rem",fontWeight:"700",color:"#33485C",maxWidth:"60%"},"& .btn":{padding:"0.444rem 0.889rem",whiteSpace:"nowrap"},"@media (max-width: 991px)":{flexDirection:"column",padding:"0.889rem 1.333rem","& p":{maxWidth:"100%",marginBottom:"1rem"}}},buttonTitle:{fontSize:"1.556rem",fontWeight:"600",color:"#33485C","@media (max-width: 992px)":{textAlign:"center"}},buttonInfo:{fontSize:"0.889rem",fontWeight:"400",color:"#33485C","@media (max-width: 992px)":{display:"block",textAlign:"center"}},button:{"&:focus":{outline:"2px solid #ff9900",boxShadow:"none"}}}),w=function(e){var t=e.label,i=e.buttonLabel,a=e.hasTitle,r=e.handleToggle,o=S();return n.createElement(n.Fragment,null,a?n.createElement(z.Z,{className:"px-3"},n.createElement(N.Z,{className:"align-items-center mb-4"},n.createElement(C.Z,{sm:12,lg:3},n.createElement("span",{className:o.buttonTitle},"Le misure")),n.createElement(C.Z,{sm:12,lg:9},n.createElement("span",{className:o.buttonInfo},"M1C1 ",n.createElement("strong",null,"DIGITALIZZAZIONE, INNOVAZIONE E SICUREZZA NELLA PA"))))):"",n.createElement(z.Z,{className:"px-3"},n.createElement(N.Z,null,n.createElement(C.Z,{lg:12},n.createElement("div",{className:o.modalButtonContainer},n.createElement("p",{className:"description"},n.createElement("strong",null,t)),n.createElement(c.zx,{className:o.button,color:"primary",onClick:r},i))))))},T=i(974),y=i(7046).bX,I=y.title,L=y.description,A=(r.CL,r.hO),W=l.LL,Z=l.PB,k=(0,o.QM)({manageSpaces:{paddingBottom:"4rem"}}),B=function(e){var t=k(),i=(0,n.useContext)(p.P),a=i[0].modalState,r=i[1];return n.createElement(n.Fragment,null,n.createElement(T.H,{title:I,description:L}),n.createElement("div",{className:"sr-only"},n.createElement("h2",null,l.u2)),n.createElement(E.P,{title:W.title,body:W.body,image:"opportunity-hero.webp",theme:"bg-white flex-column-reverse",noButton:!0}),n.createElement("div",{className:t.manageSpaces},n.createElement(w,{label:Z.label,buttonLabel:Z.buttonLabel,handleToggle:function(){r({type:"SET:TOGGLE_MODAL"})},hasTitle:!0}),n.createElement(x,{externalFilter:e.filter}),n.createElement(w,{label:Z.label,buttonLabel:Z.buttonLabel,handleToggle:function(){r({type:"SET:TOGGLE_MODAL"})}})),n.createElement(v.F,{supportList:A.cards,title:A.title,buttonLabel:A.buttonLabel,initialState:a,handleToggle:function(){r({type:"SET:TOGGLE_MODAL"})}}))},R=function(e){var t=e.location,i=(0,n.useState)(null),r=i[0],o=i[1],l=(0,n.useContext)(p.P);(0,a.Z)(l[0]);var s=l[1];return(0,n.useEffect)((function(){null!==t.state&&o(t.state.filter)}),[]),(0,n.useEffect)((function(){return s({type:"SET:ACTIVE_HEADER",payload:{activeItem:"misure"}}),function(){s({type:"SET:ACTIVE_HEADER"})}}),[]),n.createElement(B,{filter:r})}},5938:function(e,t,i){function a(e){if(null==e)throw new TypeError("Cannot destructure undefined")}i.d(t,{Z:function(){return a}})},8334:function(e){e.exports=JSON.parse('{"u2":"Homepage - PA digitale 2026","CL":{"title":"Italia digitale 2026","body":"Il 27% delle risorse totali del PNRR è dedicato alla crescita digitale del Paese. Italia digitale 2026 è la strategia promossa dal <strong>Ministro per l\'innovazione tecnologica e la transizione digitale</strong> all’interno del PNRR","firstButtonLabel":"VAI AL SITO","firstButtonAriaLabel":"VAI AL SITO Italia digitale 2026 (Collegamento esterno - Apre su nuova scheda)","linkTo":"https://innovazione.gov.it/dipartimento/focus/italia-digitale-2026/"},"lV":{"W3":"COME FUNZIONA PA digitale 2026","TN":"Come accedere alle misure del PNRR","d1":"<strong>PA digitale 2026</strong> è la piattaforma per accedere alle risorse dedicate alla <strong>transizione digitale</strong> e assistere le amministrazioni nel percorso verso Italia digitale 2026","eQ":"SCOPRI DI PIÙ","QF":"Scopri di più su come accedere alle opportunità del PNRR","XZ":"VEDI I BENEFICIARI"},"gp":"Notizie e aggiornamenti","fr":{"T":"Le misure","_":[{"number":1.1,"title":"Infrastrutture digitali","id":"inf-dig"},{"number":1.2,"title":"Abilitazione e facilitazione migrazione al Cloud","id":"abili-faci-migr"},{"number":"1.3.1","title":"Piattaforma Digitale Nazionale Dati","id":"piatt-dig-naz"},{"number":"1.3.2","title":"Sportello Digitale Unico","id":"sport-digi-unic"},{"number":"1.4.1","title":"Esperienza dei servizi pubblici","id":"esp-serv-pubb"},{"number":"1.4.2","title":"Accessibilità","id":"access"},{"number":"1.4.3","title":"Adozione PagoPA e app IO","id":"adoz-pago"},{"number":"1.4.4","title":"Adozione identità digitale","id":"adoz-id"},{"number":"1.4.5","title":"Digitalizzazione degli avvisi pubblici","id":"digi-avvisi"},{"number":"1.4.6","title":"MaaS","id":"maas"},{"number":1.5,"title":"Cybersecurity","id":"cyber"},{"number":1.6,"title":"Digitalizzazione grandi amministrazioni centrali","id":"digi-gran-amm"},{"number":"1.7.1","title":"Servizio civile digitale","id":"servi-civi"},{"number":"1.7.2","title":"Centri di facilitazione digitale","id":"centri-facili"}]},"SH":[{"id":1,"category":"Notizia","title":"Mobility as a Service for Italy, l\'esito della Manifestazione di interesse","description":"Pubblicato l’esito della Manifestazione di interesse rivolta ai Comuni capoluogo delle 14 Città metropolitane.","source":"Fonte: innovazione.gov.it","linkTo":"https://innovazione.gov.it/notizie/articoli/mobility-as-a-service-for-italy-l-esito-della-manifestazione-di-interesse/"},{"id":2,"category":"Novità","title":"Dal 15 novembre certificati anagrafici online e gratuiti per i cittadini","description":"Accedendo all\'Anagrafe nazionale, per la prima volta i cittadini italiani potranno scaricare i certificati anagrafici online in maniera autonoma.","source":"Fonte: innovazione.gov.it","linkTo":"https://innovazione.gov.it/notizie/articoli/dal-15-novembre-certificati-anagrafici-online-e-gratuiti-per-i-cittadini/"},{"id":3,"category":"Comunicato stampa","title":"DL PNRR: 250 milioni per le competenze digitali degli italiani","description":"Tutte le novità introdotte dal Decreto per l\'attuazione del PNRR.","source":"Fonte: innovazione.gov.it","linkTo":"https://innovazione.gov.it/notizie/comunicati-stampa/dl-pnrr-250-milioni-per-le-competenze-digitali-degli-italiani/"},{"id":4,"category":"Notizia","title":"Cloud Italia, presentati gli indirizzi strategici per la Pubblica Amministrazione","description":"Le sfide della strategia: assicurare l’autonomia tecnologica del Paese, garantire il controllo sui dati e aumentare la resilienza dei servizi digitali.","source":"Fonte: innovazione.gov.it","linkTo":"https://innovazione.gov.it/notizie/articoli/cloud-italia-presentati-gli-indirizzi-strategici-per-la-pubblica-amministrazione/ "}],"hO":{"tag":"Supporto","title":"Scrivici per chiarimenti o per contribuire con le tue idee al progetto","buttonLabel":"scopri di più","cards":[{"title":"Domande frequenti","description":"Scopri i dettagli dell’iniziativa e le informazioni chiave sulle opportunità del PNRR","isModal":false},{"title":"Contatti","description":"Compila il modulo per inviarci i tuoi suggerimenti o per avere chiarimenti sull’iniziativa","isModal":true}]},"J1":{"W3":"le misure del pnrr","TN":"Il punto di accesso alle risorse per la transizione digitale della PA","d1":"PA digitale 2026 è la piattaforma che consente alle amministrazioni di richiedere i fondi del PNRR dedicati alla transizione digitale, rendicontare l’avanzamento dei progetti e ricevere assistenza"},"rx":[{"id":1,"title":"Fase 1, conoscere le misure","description":"Dall’<strong>autunno del 2021</strong> informazioni e aggiornamenti per conoscere le <strong>misure del PNRR per la digitalizzazione della PA</strong> e scoprire il <strong>funzionamento degli avvisi pubblici</strong>, la cui pubblicazione è prevista per la <strong>primavera del 2022</strong>.","image":"home-carousel-1.svg","imageMobile":"home-carousel-mobile-1.svg","button":"scopri di più","buttonAriaLabel":"Scopri di più su domande frequenti e contatti","linkTo":"/misure"},{"id":2,"title":"Fase 2, partecipare agli avvisi","description":"Dalla <strong>primavera del 2022</strong> saranno pubblicati i <strong>primi avvisi del PNRR dedicati alla digitalizzazione della PA</strong>. Attraverso un’area riservata le amministrazioni potranno compilare un modulo online per <strong>aderire alle misure e richiedere i finanziamenti dedicati</strong>.","image":"home-carousel-2.svg","imageMobile":"home-carousel-mobile-2.svg","button":"scopri di più","buttonAriaLabel":"Scopri di più su domande frequenti e contatti","linkTo":"/come-funziona"},{"id":3,"title":"Fase 3, avviare i progetti","description":"Dall’<strong>estate del 2022</strong> le amministrazioni potranno <strong>avviare i primi progetti</strong>: un team dedicato fornirà alle PA assistenza tecnica nell’implementazione delle iniziative; un sistema di rendicontazione online organizzato per obiettivi semplificherà il percorso delle amministrazioni.","image":"home-carousel-3.svg","imageMobile":"home-carousel-mobile-3.svg","button":"scopri di più","buttonAriaLabel":"Scopri di più su domande frequenti e contatti","linkTo":"/come-funziona"}]}')}}]);
//# sourceMappingURL=component---src-pages-misure-jsx-e81ee4492a9af7f4140f.js.map