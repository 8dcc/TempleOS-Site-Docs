"use strict";(self.webpackChunktempleos_simplified=self.webpackChunktempleos_simplified||[]).push([[346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={id:"printing",title:"Printing"},i="Printing like a pro",o={unversionedId:"holyc/printing",id:"holyc/printing",title:"Printing",description:"Printing in TempleOS means printing to the screen(not to paper).",source:"@site/docs/holyc/print.mdx",sourceDirName:"holyc",slug:"/holyc/printing",permalink:"/holyc/printing",tags:[],version:"current",frontMatter:{id:"printing",title:"Printing"},sidebar:"holyc",previous:{title:"Getting Started",permalink:"/holyc/getting-started-hc"},next:{title:"Data Structures",permalink:"/holyc/datastructs"}},p={},u=[{value:"Basic formatting",id:"basic-formatting",level:2},{value:"z/Z Formating",id:"zz-formating",level:2},{value:"Auxiliary value",id:"auxiliary-value",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"printing-like-a-pro"},"Printing like a pro"),(0,r.kt)("p",null,"Printing in TempleOS means printing to the screen(not to paper).\nIf you want to print a string,just type the string like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},'"Hello World\\n";\n')),(0,r.kt)("h2",{id:"basic-formatting"},"Basic formatting"),(0,r.kt)("p",null,"The print routine in TempleOS takes some (or no) arguments,you provide arguments like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},'"%d,%d,%d\\n",1,2,3;\n')),(0,r.kt)("p",null,"The arguments are ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),",",(0,r.kt)("inlineCode",{parentName:"p"},"2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," here and the format code is ",(0,r.kt)("inlineCode",{parentName:"p"},"d"),"(Integer decimal).\nThere are various formatting codes for different types of data,to use a floating point number,use ",(0,r.kt)("em",{parentName:"p"},"n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},'"Pi is %n\\n",3.14;\n\n')),(0,r.kt)("p",null,"The basic formatting codes are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S"),(0,r.kt)("td",{parentName:"tr",align:null},"Define string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"U8*"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"Uppercase charactor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"U8/U64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"p or P"),(0,r.kt)("td",{parentName:"tr",align:null},"Pointer to named symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Pointer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x or X"),(0,r.kt)("td",{parentName:"tr",align:null},"Hexidecimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Pointer/",(0,r.kt)("inlineCode",{parentName:"td"},"I64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D"),(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CDate"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CDate"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"q"),(0,r.kt)("td",{parentName:"tr",align:null},"Quoted string(turns '\"' into escape sequences)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"U8*"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q"),(0,r.kt)("td",{parentName:"tr",align:null},"Reverse quoted string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"U8*"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DefineLst")," entry(Takes 2 arguments)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"U8 *")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"I64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"z"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-entry of \\0 terminated string(Takes 2 arguments)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"U8 *")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"I64"))))),(0,r.kt)("h2",{id:"zz-formating"},"z/Z Formating"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DefineLst"),"'s are things whose items are separated by ",(0,r.kt)("inlineCode",{parentName:"p"},"\\0"),"s,they look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},'DefineLstLoad("SOME_LIST","a\\0b\\0c\\0");\n')),(0,r.kt)("p",null,"We can use the list like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},' DefineLstLoad("SOME_LIST","a\\0b\\0c\\0");\n I64 i;\n for(i=0;i!=3;i++)\n   "HERE:%Z\\n",i,"SOME_LIST";\n')),(0,r.kt)("h2",{id:"auxiliary-value"},"Auxiliary value"),(0,r.kt)("p",null,"The auxiliary value does various things for different format codes.\nFor ",(0,r.kt)("inlineCode",{parentName:"p"},"c"),",it repeats the character X times,we can do it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},"\"c%h3cl\\n\",'o';\n")),(0,r.kt)("p",null,"For numbers,it will set the decimal point of the number(useful for ",(0,r.kt)("inlineCode",{parentName:"p"},"F64"),"'s).\nFor example if we want to view a number in units of 1000,we can do this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},'"%h3n\\n",1234567.; //Be sure to use a . to get a F64\n')),(0,r.kt)("p",null,'We get do negative numbers too for "milli" units'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},'"%h-3n\\n",0.123456;\n')),(0,r.kt)("p",null,'We can have the Print routine choose the auxiliary for us using "?".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},'"%h?n\\n",1234567.;\n')),(0,r.kt)("p",null,"This is really cool. We can use an arbitrary value as the auxiliary value using ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"}," I64 repeat=10;\n \"t%h*cn\\n\",repeat,'e';\n")))}d.isMDXComponent=!0}}]);