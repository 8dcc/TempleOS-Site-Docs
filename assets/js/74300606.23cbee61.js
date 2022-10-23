"use strict";(self.webpackChunktempleos_simplified=self.webpackChunktempleos_simplified||[]).push([[337],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=d(n),k=r,c=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(c,o(o({ref:e},m),{},{components:n})):a.createElement(c,o({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7781:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={id:"doldoc",title:"DolDoc"},o="DolDoc",i={unversionedId:"holyc/doldoc",id:"holyc/doldoc",title:"DolDoc",description:"DolDoc means dollar sign documents. It's uses a notation of dollar signs to specifiy the layout of a document",source:"@site/docs/holyc/doldoc_ui.mdx",sourceDirName:"holyc",slug:"/holyc/doldoc",permalink:"/holyc/doldoc",tags:[],version:"current",frontMatter:{id:"doldoc",title:"DolDoc"},sidebar:"holyc",previous:{title:"Make an Example App",permalink:"/holyc/grpaint"}},p={},d=[{value:"Attributes",id:"attributes",level:2},{value:"List of DolDoc flags",id:"list-of-doldoc-flags",level:2},{value:"DolDoc programming API.",id:"doldoc-programming-api",level:2},{value:"Basics",id:"basics",level:3},{value:"User interfaces",id:"user-interfaces",level:3},{value:"Menu",id:"menu",level:2},{value:"Reference",id:"reference",level:2},{value:"List of DolDoc codes",id:"list-of-doldoc-codes",level:3},{value:"Argument codes",id:"argument-codes",level:3}],m={toc:d};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"doldoc"},"DolDoc"),(0,r.kt)("p",null,"DolDoc means dollar sign documents. It's uses a notation of dollar signs to specifiy the layout of a document\n",(0,r.kt)("strong",{parentName:"p"},"You will need to press $ twice in TempleOS as pressing it normally puts it in escape mode."),"\nLet's see some basic usage of DolDoc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},'"$BG,BLUE$$FG,YELLOW$I am yellow.$FD$$BD$\\n";\n')),(0,r.kt)("p",null,"Here we see we have yellow on a blue background. We use ",(0,r.kt)("inlineCode",{parentName:"p"},"FD")," ",(0,r.kt)("inlineCode",{parentName:"p"},"BD")," to set the forground and background to their defualt colors,and FULL reference of the codes is at the bottom of this page,but here are some common ones:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TX"),(0,r.kt)("td",{parentName:"tr",align:null},"Text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FD"),(0,r.kt)("td",{parentName:"tr",align:null},"Use(or change) default foreground color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BD"),(0,r.kt)("td",{parentName:"tr",align:null},"Use(or change) default background color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FG"),(0,r.kt)("td",{parentName:"tr",align:null},"Set foreground color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BG"),(0,r.kt)("td",{parentName:"tr",align:null},"Set background color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BK"),(0,r.kt)("td",{parentName:"tr",align:null},"Turn blink on or off with 1 or 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BT"),(0,r.kt)("td",{parentName:"tr",align:null},"Button ",(0,r.kt)("strong",{parentName:"td"},"Surround with newlines to make space for button border"))))),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,"DolDoc entries can have attributes and arguments. For example ",(0,r.kt)("em",{parentName:"p"},"BG")," here takes a color argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},'"$BG,BLUE$I am blue,$$FD";\n')),(0,r.kt)("p",null,"Some arguments take names,like ",(0,r.kt)("inlineCode",{parentName:"p"},"LM"),"(left macro) takes a string that is inputed to the terminal when pressed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},'"\\n\\n$BT,\\"ONIONS\\",LM=\\"Beep;\\n\\"$\\n\\n"; //We specified a \\n in LM to simulate pressing enter.\n')),(0,r.kt)("p",null,"There are attributes too,they start with the plus or minus sign. Lets see an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},' "$TX+CX,\\"CENTER\\"$";\n')),(0,r.kt)("p",null,"Now we can see that the text is centered."),(0,r.kt)("h2",{id:"list-of-doldoc-flags"},"List of DolDoc flags"),(0,r.kt)("p",null,"To use an flags,use a plus or minus sign to add/remove the flag from the item.\nExample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},' "$TX+CX+H,\\"I have CX and H flags.\\"$\\n";\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Descrition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"H"),(0,r.kt)("td",{parentName:"tr",align:null},"Will prevenet CL from deleteing it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L"),(0,r.kt)("td",{parentName:"tr",align:null},"Will tell the thing to behave as a link")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TR"),(0,r.kt)("td",{parentName:"tr",align:null},"Will tell the thing to behave as a tree")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LS"),(0,r.kt)("td",{parentName:"tr",align:null},"Will tell the thing to act as a list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PU"),(0,r.kt)("td",{parentName:"tr",align:null},"Will cuase macro text to run in a popup")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"Will cuase a tree to e collapsed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"Will set the exit and save flag on a macro")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q"),(0,r.kt)("td",{parentName:"tr",align:null},"Will set a exit and not-save flag on a macro")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RD"),(0,r.kt)("td",{parentName:"tr",align:null},"Refresh data on screen update")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UD"),(0,r.kt)("td",{parentName:"tr",align:null},"Update data on typing")))),(0,r.kt)("h2",{id:"doldoc-programming-api"},"DolDoc programming API."),(0,r.kt)("h3",{id:"basics"},"Basics"),(0,r.kt)("p",null,"Sometimes you will want to do more with DolDoc.\nTo get the current DolDoc of the task,use ",(0,r.kt)("inlineCode",{parentName:"p"},"DocPut")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"DocPrint")," to print to that document."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},'DocPrint(DocPut,"\\n\\n$$BT+CX,\\"Hello\\"$$\\n\\n");\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DocPrint")," will return a ",(0,r.kt)("inlineCode",{parentName:"p"},"CDocEntry"),". We can poke at it's data to make it do stuff.\nHere are some of the interesting fields of ",(0,r.kt)("inlineCode",{parentName:"p"},"CDocEntry")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"}," class CDocEntry:CDocEntryBase {\n     I64(*left_cb)(CDoc*,CDocEntry*)\n     I64(*right_cb)(CDoc*,CDocEntry*)\n     U8 *data;\n };\n")),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"left_cb"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"right_cb"),",we must set the ",(0,r.kt)("inlineCode",{parentName:"p"},"DOCEF_LEFT_CB"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"DOCEF_RIGHT_CB")," flags in ",(0,r.kt)("inlineCode",{parentName:"p"},"de_flags"),".\nHere is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},' I64 Beep2(CDoc *,CDocEntry *) {\n    Beep;\n }\n CDocEntry *de=DocPrint(DocPut,"\\n\\n$$BT+CX,\\"Hello\\"$$\\n\\n");\n de->de_flags|=DOCEF_LEFT_CB;\n de->left_cb=&Beep2;\n')),(0,r.kt)("p",null,"Make sure you print whole DolDoc commands with ",(0,r.kt)("inlineCode",{parentName:"p"},"DocPrint"),",if you want to do otherwise use ",(0,r.kt)("inlineCode",{parentName:"p"},"DocPrintPartial"),". If you want print multiple DolDoc commands at once,use ",(0,r.kt)("inlineCode",{parentName:"p"},"DocPrintAtomic"),".\nIf you want to type one file into another,use ",(0,r.kt)("inlineCode",{parentName:"p"},"DocType(doc,filename)")),(0,r.kt)("p",null,"Say you want to save a ",(0,r.kt)("inlineCode",{parentName:"p"},"DolDoc"),",we can do this 2 ways,we can save to memory or a file.\nTo save to memory,do use ",(0,r.kt)("inlineCode",{parentName:"p"},"DocSave"),","),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"}," I64 len;\n U8 *mem=DocSave(DocPut,&len);\n //Do whatever\n Free(mem);\n")),(0,r.kt)("p",null,"Or to save to a file,use ",(0,r.kt)("inlineCode",{parentName:"p"},"DocWrite")," after defining the filename at ",(0,r.kt)("inlineCode",{parentName:"p"},"DocNew"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},' CDoc *doc=DocNew("Filename.DD"); //The document\'s filename detirmined at it\'s creation.\n DocPrint("$TX,\\"Hello World\\"$");\n DocWrite(doc);\n DocDel(doc);\n')),(0,r.kt)("h3",{id:"user-interfaces"},"User interfaces"),(0,r.kt)("p",null,"You may want to create user interfaces using DolDoc. There are numerous ways to do this,one way to do this is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"DocMenu"),". This will return a value as defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"LE")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"RE"),". These mean left expression and right expression ",(0,r.kt)("strong",{parentName:"p"},"and are DolDoc attributes(see reference)"),". Let's see an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},'U0 CreateDialog() {\n    CDocEntry *nums[3];\n    I64 i;\n      DocClear(DocPut);\n      "$$TX+CX,\\"Pick a number:\\"$$\\n";\n      for(i=0;i!=3;i++) {\n          nums[i]=DocPrint(DocPut,"\\n\\n$$BT+CX,\\"%d\\",LE=%d$$\\n\\n",i,i);\n    }\n    DocBottom(DocPut);\n    switch(DocMenu(DocPut)) {\n    start:\n        DocClear(DocPut);\n    case 0:\n            "You picked nothing lol.\\n";\n            break;\n  case 1:\n            "One is the one\\n";\n            break;\n    case 2:\n            "Two is too good\\n";\n            break;\n    end:\n      }\n }\n CreateDialog;\n')),(0,r.kt)("p",null," Sometimes you want a form for your application,so we need to up the ante. To do this we ",(0,r.kt)("inlineCode",{parentName:"p"},"DocForm"),"\nThis uses the a class's ",(0,r.kt)("a",{parentName:"p",href:"metadata"},"metadata"),",so we need to make a class first with Metadata."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},'class CInput {\n      //Be sure to use -P with strings\n      U8 name[STR_LEN] format "$$DA-P,A=\\"NAME:%s\\"$$\\n"; //Data\n      I64 age format "$$DA,A=\\"AGE:%d\\"$$\\n"; //Data\n      Bool is_tall format "$$CB,\\"Is tall\\"$$\\n"; //Check box\n};\n')),(0,r.kt)("p",null," We can then call ",(0,r.kt)("inlineCode",{parentName:"p"},"DocForm")," with a pointer to a class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},'CInput inp;\nPopUpForm(&inp);\n"%s is %d years old\\n",inp.name,inp.age;\nif(inp.is_tall)\n     "Tall!\\n";\n')),(0,r.kt)("h2",{id:"menu"},"Menu"),(0,r.kt)("p",null," A menu can be accessed via the logo key,it appears at the top of the screen. You can make your own menus via ",(0,r.kt)("inlineCode",{parentName:"p"},"MenuPush"),". A menu will send a key-press to your program when you select an item(or another type of message if you want). A typical ",(0,r.kt)("inlineCode",{parentName:"p"},"MenuPush")," looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},' MenuPush(\n     "File {"\n//1st is message(Default is MSG_KEY_DOWN)\n//2nd is charctor\n//3rd is scancode\n     "  Exit(,CH_SHIFT_ESC,);"\n     "}"\n     "Fruit {"\n     "    Apple(,\'apple\',);"\n     "    Banana(,\'banana\',);"\n     "    Berry(,\'berry\',);"\n     "}"\n     "Vegetable {"\n     "    Carrot(,\'carrot\',);"\n     "    Celery(,\'celery\',);"\n     "}"\n );\n')),(0,r.kt)("p",null," As you  can see,the 1st argument to the entries is the message(which defaults to MSG_KEY_DOWN). The next 2 arguments are passed to the task via ",(0,r.kt)("inlineCode",{parentName:"p"},"ScanMsg"),"(used by ",(0,r.kt)("inlineCode",{parentName:"p"},"GetKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ScanKey"),"),so you can put any type of message you want.\nLet's see it in action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-holyc"},'U0 MenuLoop() {\n   I64 ch;\n   MenuPush(\n     "File {"\n     "  Exit(,CH_SHIFT_ESC,);"\n     "}"\n     "Fruit {"\n     "    Apple(,\'apple\',);"\n     "    Banana(,\'banana\',);"\n     "    Berry(,\'berry\',);"\n     "}"\n     "Vegetable {"\n     "    Carrot(,\'carrot\',);"\n     "    Celery(,\'celery\',);"\n     "}"\n   );\n   "Access stuff from the menu!!\\n";\n   while(ch=GetKey) {\n       if(ch==CH_SHIFT_ESC) break;\n       "Got a %c\\n",ch;\n   }\n   MenuPop;\n}\nMenuLoop;\n')),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"list-of-doldoc-codes"},"List of DolDoc codes"),(0,r.kt)("p",null,"Use these for making DolDoc entities "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TX"),(0,r.kt)("td",{parentName:"tr",align:null},"Text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CR"),(0,r.kt)("td",{parentName:"tr",align:null},"Newline")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SR"),(0,r.kt)("td",{parentName:"tr",align:null},"Wordwrap line")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CU"),(0,r.kt)("td",{parentName:"tr",align:null},"Cursor pos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TB"),(0,r.kt)("td",{parentName:"tr",align:null},"Tab")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CL"),(0,r.kt)("td",{parentName:"tr",align:null},"Clear items without +H")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PB"),(0,r.kt)("td",{parentName:"tr",align:null},"Page break")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PL"),(0,r.kt)("td",{parentName:"tr",align:null},"Page length")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LM"),(0,r.kt)("td",{parentName:"tr",align:null},"Left margin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RM"),(0,r.kt)("td",{parentName:"tr",align:null},"Right margin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HD"),(0,r.kt)("td",{parentName:"tr",align:null},"Header margin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FO"),(0,r.kt)("td",{parentName:"tr",align:null},"Bottom margin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Indents X indents,can be negative")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FD"),(0,r.kt)("td",{parentName:"tr",align:null},"Use(or change) default foreground color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BD"),(0,r.kt)("td",{parentName:"tr",align:null},"Use(or change) default background color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FG"),(0,r.kt)("td",{parentName:"tr",align:null},"Set foreground color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BG"),(0,r.kt)("td",{parentName:"tr",align:null},"Set background color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PT"),(0,r.kt)("td",{parentName:"tr",align:null},"Prompt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WW"),(0,r.kt)("td",{parentName:"tr",align:null},"Use 1 to trigger word wrap, 0 to disable word wrap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UL"),(0,r.kt)("td",{parentName:"tr",align:null},"Use 1 to trigger underline, 0 to disable it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IV"),(0,r.kt)("td",{parentName:"tr",align:null},"Use 1 to trigger inverting the text's colors,0 to disable it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BK"),(0,r.kt)("td",{parentName:"tr",align:null},"Turn blink on or off with 1 or 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SX"),(0,r.kt)("td",{parentName:"tr",align:null},"Pick a number -7 through 7 to shift the text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SY"),(0,r.kt)("td",{parentName:"tr",align:null},"Pick a number -7 through 7 to shift the text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CM"),(0,r.kt)("td",{parentName:"tr",align:null},"Takes 2 arguments X movement and Y movement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LK"),(0,r.kt)("td",{parentName:"tr",align:null},"Link,will be explained later")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BT"),(0,r.kt)("td",{parentName:"tr",align:null},"Button, ",(0,r.kt)("strong",{parentName:"td"},"surround with newlines to make space for the button border"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CB"),(0,r.kt)("td",{parentName:"tr",align:null},"Checkbox")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LS"),(0,r.kt)("td",{parentName:"tr",align:null},"Define a define list with ",(0,r.kt)("em",{parentName:"td"},"D")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"DefineLstLoad"),",this will let you select items from a list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MA"),(0,r.kt)("td",{parentName:"tr",align:null},"Macro,will run code with is clicked,use ",(0,r.kt)("strong",{parentName:"td"},"LM")," to set the macro text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TR"),(0,r.kt)("td",{parentName:"tr",align:null},"Tree,use indent to nest the trees and use a negative indent to un-nest the trees.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HL"),(0,r.kt)("td",{parentName:"tr",align:null},"Turn syntax highlighting on with 1 or 0.")))),(0,r.kt)("h3",{id:"argument-codes"},"Argument codes"),(0,r.kt)("p",null,"You use a comma and the name to specify an argument value."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"T"),(0,r.kt)("th",{parentName:"tr",align:null},"The tag(displayed text) is set with this"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LEN"),(0,r.kt)("td",{parentName:"tr",align:null},"LEN sets the length of the DA field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"Links use this for link location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D"),(0,r.kt)("td",{parentName:"tr",align:null},"LS and list-likes use this for setting the ",(0,r.kt)("inlineCode",{parentName:"td"},"DefineLstLoad"),"'ed string that has the list items in it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LE"),(0,r.kt)("td",{parentName:"tr",align:null},"Left expression,will evaluate this expression's value when left clicked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RE"),(0,r.kt)("td",{parentName:"tr",align:null},"Right expression,will evaluate this expression")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LM"),(0,r.kt)("td",{parentName:"tr",align:null},"Left macro text,will put the text in input buffer when clicked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RM"),(0,r.kt)("td",{parentName:"tr",align:null},"Right macro text,will put the text in input buffer when clicked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RT"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the raw type of the data of the item,use ",(0,r.kt)("inlineCode",{parentName:"td"},"I8-64"),",or ",(0,r.kt)("inlineCode",{parentName:"td"},"U8-64")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"F64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"U"),(0,r.kt)("td",{parentName:"tr",align:null},"User data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SCX"),(0,r.kt)("td",{parentName:"tr",align:null},"Scroll X in col columns")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SX"),(0,r.kt)("td",{parentName:"tr",align:null},"Shift plus or minus 7 pixels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SY"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as above but for Y coordinates")))))}u.isMDXComponent=!0}}]);