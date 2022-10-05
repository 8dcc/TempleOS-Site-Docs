"use strict";(self.webpackChunktempleos_simplified=self.webpackChunktempleos_simplified||[]).push([[882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||r;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const r={},a="Introduction",s={unversionedId:"guide/intro",id:"guide/intro",title:"Introduction",description:"The Temple Operating System (abbrev. TempleOS) is a one of a kind Operating System; in fact, TempleOS has made quite a name for itself, becoming a well known legend across the interwebs; from 4Chan to OSDev, you're bound to find some connotation to it.",source:"@site/docs/guide/intro.mdx",sourceDirName:"guide",slug:"/guide/intro",permalink:"/guide/intro",tags:[],version:"current",frontMatter:{},sidebar:"guide",next:{title:"Installation",permalink:"/category/docusaurus-guides"}},l={},p=[{value:"Quirks",id:"quirks",level:2},{value:"Understanding These Quirks",id:"understanding-these-quirks",level:3},{value:"A Little History Lesson",id:"a-little-history-lesson",level:3},{value:"Understanding Our Goals",id:"understanding-our-goals",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.templeos.org/"},"The Temple Operating System")," (",(0,i.kt)("em",{parentName:"p"},"abbrev.")," TempleOS) is a one of a kind Operating System; in fact, TempleOS has made quite a name for itself, becoming a well known legend across the interwebs; from 4Chan to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.osdev.org/Notable_Projects"},"OSDev"),", you're bound to find some connotation to it."),(0,i.kt)("h2",{id:"quirks"},"Quirks"),(0,i.kt)("p",null,"To understand the popularity of TempleOS, requires a simple glance at it - and may a little bit of technological appreciation \ud83d\ude04. Some of the things that make TempleOS astonishing are just the smaller, normally unnoticable things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TempleOS was created by a single person, ",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=UCgoxQCf5Jg"},(0,i.kt)("strong",{parentName:"a"},"Terrence Andrew Davis")),', developed entirely by hand from 2005 - 2017 (The name changed throughout the years, until it was named "TempleOS").'),(0,i.kt)("li",{parentName:"ul"},'It is entirely Ring-0; essentially meaning that every task on the operating system is performed at the same privilege level, in this case on the lowest-most ring. This is a bold design choice as it means TempleOS is more susceptible to viruses - or on a more realistic level; user mistake - as no permission is needed to "elevate" a task (think of "sudo", and the "User Access Control" / "Admin Prompt" on Linux and Windows, respectively).'),(0,i.kt)("li",{parentName:"ul"},"TempleOS is extremely lightweight; with the largest ISO file being only 16.5MB. This may not sound impressive until you consider how large modern day programs are, let alone a full operating system."),(0,i.kt)("li",{parentName:"ul"},"TempleOS utilizes ",(0,i.kt)("em",{parentName:"li"},"non-preemptive multi-tasking"),', a "legacy" multitasking technique that allocates an entire CPU to a task until the task is completed. Most modern OSs have stopped using this technique; Windows stopped using this in version 3.1, MacOS also stopped around this time too.'),(0,i.kt)("li",{parentName:"ul"},'Finally, TempleOS makes use of 16-bit color display with a resolution of 640x480, which is not the "industry standard", especially for the modern-era.',(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/screenshots/templeos.png",alt:"TempleOS' Interface"})))),(0,i.kt)("h3",{id:"understanding-these-quirks"},"Understanding These Quirks"),(0,i.kt)("p",null,"Accepting these peculiar design decisions implies taking a sympathetic look at TempleOS's Creator. Terry Davis unfortunately suffered from ",(0,i.kt)("a",{parentName:"p",href:"https://www.mayoclinic.org/diseases-conditions/schizophrenia/symptoms-causes/syc-20354443"},"Schizophrenia"),", a saddening illness that makes one's sense of reality drift away. Originally working in the high tech industry, Terry began to experience visible and auditory hallucinations. It was around this time that Terry claimed to have been instructed by God to work on His operating system; A Temple dedicated to God based upon the prophicised Third Temple from the Bible. Terry claimed that God admired perfiction, and as such was commanded to construct TempleOS exaclty as He said so.   "),(0,i.kt)("h3",{id:"a-little-history-lesson"},"A Little History Lesson"),(0,i.kt)("div",{class:"doc-left"},(0,i.kt)("a",{href:"https://templeos.org/",imageanchor:"1"}),(0,i.kt)("img",{align:"right",src:"/img/youngterry.jpg",border:"0"}),"Terry began to make an appreance for himself when he started posting about TempleOS (most of the time; besides from the occasional rant, and seemingly \"nonsense\") on platforms like Reddit, and The OSDev Forums. Shortly after Terry had gained a following, he followed up by uploading videos daily, either fun videos about his life, TempleOS, or random rants. Terry began to show racism, and voiced it online, going as far as to voicing this open to an African-American man on the street... It's unclear if Terry's racism was supressed prior to Schizophrenia, but a story I've heard is that he was trolled by members of the Forum site, 4chan. As a result of his racism, Terry was deplatformed."),(0,i.kt)("br",null),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f  ",(0,i.kt)("strong",{parentName:"p"},"Note")," ",(0,i.kt)("br",null),"\nTempleOS Simplified does not glorify / incourage Racism of any kind. Additionally, this site attempts to have an un-biased opinion when talking about TempleOS; we do not agree nor disagree with the idea that Terry was able to communicate with God, or that an indivdual can through his OS.")),(0,i.kt)("p",null,"Regardless of Terry's actions, he was still able to do something amazing; dedicating the rest of his life to one project alone. Irrespective of Terry's condition, he should not be looked down upon, in fact, we should accept that he was probably one of the smartest - if not; most committed - programmer to live. Terry's story goes to show what we can achieve when we put our mind to it, regardless of any \"disabilities\" or illnesses."),(0,i.kt)("h2",{id:"understanding-our-goals"},"Understanding Our Goals"),(0,i.kt)("p",null,"This site will hopefully unravel the beauty of TempleOS, so if you're a person who'd like to learn TempleOS, or even a person who is skeptical about the practicality of TempleOS; then this site is for you. It is worth mentioning that all information on the site assumes you have a fundamental understanding of Operating Systems, computing components, and optionally programming."),(0,i.kt)("p",null,"Without further ado, let us move on; in the following pages you'll learn how to install TempleOS and how to properly utilize such a system."))}m.isMDXComponent=!0}}]);