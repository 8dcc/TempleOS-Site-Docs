"use strict";(self.webpackChunktempleos_simplified=self.webpackChunktempleos_simplified||[]).push([[240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={id:"datastructs",title:"Data Structures"},l="Data structures",i={unversionedId:"holyc/datastructs",id:"holyc/datastructs",title:"Data Structures",description:"Data structures are cool structures that store data.",source:"@site/docs/holyc/datastructs.mdx",sourceDirName:"holyc",slug:"/holyc/datastructs",permalink:"/holyc/datastructs",tags:[],version:"current",frontMatter:{id:"datastructs",title:"Data Structures"}},s={},u=[{value:"HashTable",id:"hashtable",level:2},{value:"Fifo",id:"fifo",level:2},{value:"Circular Queue",id:"circular-queue",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-structures"},"Data structures"),(0,o.kt)("p",null,"Data structures are cool structures that store data."),(0,o.kt)("h2",{id:"hashtable"},"HashTable"),(0,o.kt)("p",null,"Hash tables are like dictionaries you can add stuff to on the fly,each ",(0,o.kt)("inlineCode",{parentName:"p"},"CTask")," has a hash table which you can get via ",(0,o.kt)("inlineCode",{parentName:"p"},"Fs")," .\n",(0,o.kt)("em",{parentName:"p"},"Each item in the hash table has a type and str"),",to look for a define do this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-holyc"},'#define ONION 10\nCHashDefineStr *d=HashFind("ONION",Fs->hash_table,HTT_DEFINE_STR);\n"%s\\n",d->data;\n')),(0,o.kt)("p",null,"In TempleOS,you can add items to the table,we first need to MAlloc an item first, then fill in the table"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-holyc"},'CHashDefineStr *d=CAlloc(sizeof(CHashDefineStr));\nd->str=StrNew("Hello"); //Must allocate string on heap\nd->type=HTT_DEFINE_STR;\nd->data=StrNew("10");\nHashAdd(d,Fs->hash_table);\n//We added the macro Hello into the hash table\n"%d\\n",Hello;\n')),(0,o.kt)("p",null,"You can make your own hash-tables via",(0,o.kt)("inlineCode",{parentName:"p"},"HashTableNew"),". ",(0,o.kt)("strong",{parentName:"p"},"The size must be a power of 2"),". You can free it with ",(0,o.kt)("inlineCode",{parentName:"p"},"HashTableDel"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-holyc"},'CHashTable *ht=HashTableNew(0x100);\nCHashGeneric *ent=CAlloc(sizeof CHashGeneric);\nent->user_data0=1;\nent->user_data1=2;\nent->user_data2=3;\nent->type=HTT_FRAME_PTR;\nent->str=StrNew("look");\nHashAdd(ent,ht);\nCHashGeneric *g=HashFind("look",ht,HTT_FRAME_PTR);\n"%d,%d,%d\\n",g->user_data0,g->user_data1,g->user_data2;\nHashTableDel(ht);\n')),(0,o.kt)("p",null,"As you may have seen,each ",(0,o.kt)("inlineCode",{parentName:"p"},"CHash")," item has a type.\nHere is a list of he some of the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTT")," types and what class they use\n|Type|Class|Notes|\n|------|------|---|\n|HTT_INVALID|None| Cannot be selected|\n|HTT_GLBL_VAR|",(0,o.kt)("inlineCode",{parentName:"p"},"CHashGlblVar*"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"->data_addr")," points to data|\n|HTT_CLASS|",(0,o.kt)("inlineCode",{parentName:"p"},"CHashClass*"),"|Can be used for metadata|\n|HTT_FRAME_PTR|",(0,o.kt)("inlineCode",{parentName:"p"},"CHashGeneric*"),"|This can be set with| ",(0,o.kt)("inlineCode",{parentName:"p"},"FramePtrAdd"),"(use ",(0,o.kt)("inlineCode",{parentName:"p"},"FramePtr")," to get)|"),(0,o.kt)("h2",{id:"fifo"},"Fifo"),(0,o.kt)("p",null,'Fifo means "First In First Out". It is like a ',(0,o.kt)("em",{parentName:"p"},"stack")," of papers,the first paper you put in is the first one you get out,",(0,o.kt)("strong",{parentName:"p"},"In TempleOS,CFifo's must be aligned to a power of 2.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-holyc"},"CFifoI64 *fifo=FifoI64New(0x100);\n")),(0,o.kt)("p",null,"We can insert items via ",(0,o.kt)("inlineCode",{parentName:"p"},"FifoI64Ins"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-holyc"},"I64 bottom;\nFifoI64Ins(fifo,1);\nFifoI64Ins(fifo,2);\nFifoI64Ins(fifo,3); //1 is on bottom\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"FifoI64Rem")," to remove an item."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-holyc"},'FifoI64Rem(fifo,&bottom);\n"%d\\n",bottom;\nFifoI64Rem(fifo,&bottom);\n"%d\\n",bottom;\nFifoI64Rem(fifo,&bottom);\n"%d\\n",bottom;\nFifoI64Del(fifo);\n')),(0,o.kt)("p",null,"There are 2 variants of Fifo's in TempleOS,the ",(0,o.kt)("inlineCode",{parentName:"p"},"CFifoI64"),",",(0,o.kt)("inlineCode",{parentName:"p"},"CFifoU8"),". One hold's ",(0,o.kt)("inlineCode",{parentName:"p"},"I64"),"'s and the other holds ",(0,o.kt)("inlineCode",{parentName:"p"},"U8"),"'s."),(0,o.kt)("p",null,"Once a Fifo gets full,the oldest item will be removed for you(It's initial size it created with ",(0,o.kt)("inlineCode",{parentName:"p"},"FifoI64New/FifoU8New"),"). You can get the current size via ",(0,o.kt)("inlineCode",{parentName:"p"},"FifoI64Cnt"),".  You can empty all items in the fifo with ",(0,o.kt)("inlineCode",{parentName:"p"},"FifoI64Flush"),",or you can peak at the bottom by doing this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-holyc"},"I64 bottom;\nFifoI64Peek(fifo,&bottom);\n")),(0,o.kt)("h2",{id:"circular-queue"},"Circular Queue"),(0,o.kt)("p",null," These are useful as(unlike an array) you do not need to resize an array to add more items,and removing items is very easy. A ",(0,o.kt)("em",{parentName:"p"},"Circular Queue")," is bodacious as it a chain of items,and inserting/removing items only requires editing one chain link(and not the whole chain). So what does it look like in action."),(0,o.kt)("p",null," You will need to have your class have he base class of ",(0,o.kt)("inlineCode",{parentName:"p"},"CQue")," . You can do it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-holyc"},"class CQInt:CQue { //CQue is the baseclass\n   I64 value;\n};\n")),(0,o.kt)("p",null," Each node has a ",(0,o.kt)("inlineCode",{parentName:"p"},"last")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," member,which point to the previous and next item in the chain. ",(0,o.kt)("strong",{parentName:"p"},"Each chain item has a head element"),",and because the chains are circular,the chain starts and ends at head. So when we loop,we check for the head element,here is part of an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-holyc"},'"I have %d elements.\\n",QueCnt(head); //ONLY call on head\n//The queue is circular. It starts AND ENDS at head\nCQInt *cur=head->next; //Goto element after head\nwhile(cur!=head) { //Ends at head\n   "I found a %d\\n",cur->value;\n   cur=cur->next;\n}\n')),(0,o.kt)("p",null," When we create a chain link,we ",(0,o.kt)("inlineCode",{parentName:"p"},"CAlloc")," it to allocation some memory for it. Use",(0,o.kt)("inlineCode",{parentName:"p"},"QueInit")," to initialize the node .We use ",(0,o.kt)("inlineCode",{parentName:"p"},"QueIns(new,head->last);")," to add it. With that being said,let's see the full example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-holyc"},'class CQInt:CQue {\n    I64 value;\n};\nCQue *head=CAlloc(sizeof CQue);\nCQInt *one=CAlloc(sizeof CQInt);\nCQInt *two=CAlloc(sizeof CQInt);\nCQInt *three=CAlloc(sizeof CQInt);\nQueInit(head);\nQueInit(one);\nQueInit(two);\nQueInit(three);\n//\none->value=1;\ntwo->value=2;\nthree->value=3;\n\n//inserted element goes on the left.\nQueIns(one,head->last); //last now points to one\nQueIns(two,head->last); //last now points to two\nQueIns(three,head->last); //last now points to three\n\n"I have %d elements.\\n",QueCnt(head); //ONLY call on head\n//The queue is circular. It starts AND ENDS at head\nCQInt *cur=head->next; //Goto element after head\nwhile(cur!=head) { //Ends at head\n    "I found a %d\\n",cur->value;\n    cur=cur->next;\n}\nQueDel(head); //Bye bye\n')))}p.isMDXComponent=!0}}]);