"use strict";(self.webpackChunktempleos_simplified=self.webpackChunktempleos_simplified||[]).push([[918],{2286:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(7294),l=n(6010),c=n(5214),o=n(4474),r=n(7597),s=n(4970),i=n(1575),m=n(1074),d=n(9649);const u="docItemContainer_p3Qu",E="docItemCol_nDMA",v="tocMobile_diN6",p="authorWrapper_KfVU",h="authorBox_qNDk",_="authorName_LMRP";var f=n(1548),k=n(4067),g=n(7459);function N(e){var t;const{content:n}=e,{metadata:l,frontMatter:c,assets:o}=n,{keywords:r}=c,{description:s,title:i}=l,m=null!=(t=o.image)?t:c.image;return a.createElement(f.d,{title:i,description:s,keywords:r,image:m})}function Z(e){const{content:t}=e,{metadata:n,frontMatter:p}=t,{hide_title:h,hide_table_of_contents:_,toc_min_heading_level:N,toc_max_heading_level:Z}=p,{title:w}=n,b=!h&&void 0===t.contentTitle,x=(0,f.iP)(),C=!_&&t.toc&&t.toc.length>0,L=C&&("desktop"===x||"ssr"===x);return console.log({DocContent:t}),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,l.Z)("col",!_&&E)},a.createElement(o.Z,null),a.createElement("div",{className:u},a.createElement("article",null,a.createElement(k.Z,null),a.createElement(r.Z,null),C&&a.createElement(m.Z,{toc:t.toc,minHeadingLevel:N,maxHeadingLevel:Z,className:(0,l.Z)(f.kM.docs.docTocMobile,v)}),a.createElement("div",{className:(0,l.Z)(f.kM.docs.docMarkdown,"markdown")},b&&a.createElement("header",null,a.createElement(d.Z,{as:"h1"},w)),a.createElement(g.Z,null,a.createElement(t,null))),p&&a.createElement(M,{author:null==p?void 0:p.author}),a.createElement(s.Z,e)),a.createElement(c.Z,{previous:n.previous,next:n.next}))),L&&a.createElement("div",{className:"col col--3"},a.createElement(i.Z,{toc:t.toc,minHeadingLevel:N,maxHeadingLevel:Z,className:f.kM.docs.docTocDesktop})))}function w(e){const t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(f.FG,{className:t},a.createElement(N,e),a.createElement(Z,e))}function M(e){let{author:t}=e;const[n,l]=(0,a.useState)(null),[c,o]=(0,a.useState)(!0);if((0,a.useEffect)((()=>{(async()=>{o(!0);const e=await fetch("https://api.github.com/users/"+t);if(!e.ok)return void o(!1);const n=await e.json();l(n),o(!1)})()}),[]),c||!n)return a.createElement(a.Fragment,null);return a.createElement("div",{className:p},a.createElement("div",{className:h,onClick:()=>{window.open("https://github.com/"+t,"_blank")}},a.createElement("img",{src:n.avatar_url}),a.createElement("div",null,a.createElement("span",null,"Written by"),a.createElement("span",{className:_},n.login))))}}}]);