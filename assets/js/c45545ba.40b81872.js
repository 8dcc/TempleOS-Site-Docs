"use strict";(self.webpackChunktempleos_simplified=self.webpackChunktempleos_simplified||[]).push([[567],{3905:(A,g,C)=>{C.d(g,{Zo:()=>i,kt:()=>s});var I=C(7294);function e(A,g,C){return g in A?Object.defineProperty(A,g,{value:C,enumerable:!0,configurable:!0,writable:!0}):A[g]=C,A}function t(A,g){var C=Object.keys(A);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(A);g&&(I=I.filter((function(g){return Object.getOwnPropertyDescriptor(A,g).enumerable}))),C.push.apply(C,I)}return C}function n(A){for(var g=1;g<arguments.length;g++){var C=null!=arguments[g]?arguments[g]:{};g%2?t(Object(C),!0).forEach((function(g){e(A,g,C[g])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(C)):t(Object(C)).forEach((function(g){Object.defineProperty(A,g,Object.getOwnPropertyDescriptor(C,g))}))}return A}function a(A,g){if(null==A)return{};var C,I,e=function(A,g){if(null==A)return{};var C,I,e={},t=Object.keys(A);for(I=0;I<t.length;I++)C=t[I],g.indexOf(C)>=0||(e[C]=A[C]);return e}(A,g);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);for(I=0;I<t.length;I++)C=t[I],g.indexOf(C)>=0||Object.prototype.propertyIsEnumerable.call(A,C)&&(e[C]=A[C])}return e}var r=I.createContext({}),o=function(A){var g=I.useContext(r),C=g;return A&&(C="function"==typeof A?A(g):n(n({},g),A)),C},i=function(A){var g=o(A.components);return I.createElement(r.Provider,{value:g},A.children)},l={inlineCode:"code",wrapper:function(A){var g=A.children;return I.createElement(I.Fragment,{},g)}},c=I.forwardRef((function(A,g){var C=A.components,e=A.mdxType,t=A.originalType,r=A.parentName,i=a(A,["components","mdxType","originalType","parentName"]),c=o(C),s=e,d=c["".concat(r,".").concat(s)]||c[s]||l[s]||t;return C?I.createElement(d,n(n({ref:g},i),{},{components:C})):I.createElement(d,n({ref:g},i))}));function s(A,g){var C=arguments,e=g&&g.mdxType;if("string"==typeof A||e){var t=C.length,n=new Array(t);n[0]=c;var a={};for(var r in g)hasOwnProperty.call(g,r)&&(a[r]=g[r]);a.originalType=A,a.mdxType="string"==typeof A?A:e,n[1]=a;for(var o=2;o<t;o++)n[o]=C[o];return I.createElement.apply(null,n)}return I.createElement.apply(null,C)}c.displayName="MDXCreateElement"},9417:(A,g,C)=>{C.r(g),C.d(g,{assets:()=>r,contentTitle:()=>n,default:()=>l,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var I=C(7462),e=(C(7294),C(3905));const t={id:"graphics",title:"Graphics",author:"nrootconauto"},n="Fun with Graphics",a={unversionedId:"holyc/graphics",id:"holyc/graphics",title:"Graphics",description:"Graphics are the things your user see's,and TempleOS can do much more than just text. Graphics are done via CDC's also known as Drawing Contexts. Each window has a function pointer in Fs->draw_it which points to drawing function. Let's see what it looks like.",source:"@site/docs/holyc/graphics.mdx",sourceDirName:"holyc",slug:"/holyc/graphics",permalink:"/holyc/graphics",tags:[],version:"current",frontMatter:{id:"graphics",title:"Graphics",author:"nrootconauto"},sidebar:"holyc",previous:{title:"Data Structures",permalink:"/holyc/datastructs"},next:{title:"Make an Example App",permalink:"/holyc/grpaint"}},r={},o=[{value:"Drawing Contexts",id:"drawing-contexts",level:2},{value:"Transformations",id:"transformations",level:2},{value:"Transformations(2)",id:"transformations2",level:2},{value:"Super Color Dithering",id:"super-color-dithering",level:2}],i={toc:o};function l(A){let{components:g,...t}=A;return(0,e.kt)("wrapper",(0,I.Z)({},i,t,{components:g,mdxType:"MDXLayout"}),(0,e.kt)("h1",{id:"fun-with-graphics"},"Fun with Graphics"),(0,e.kt)("p",null,"Graphics are the things your user see's,and TempleOS can do much more than just text. Graphics are done via ",(0,e.kt)("inlineCode",{parentName:"p"},"CDC"),"'s also known as Drawing Contexts. Each window has a function pointer in ",(0,e.kt)("inlineCode",{parentName:"p"},"Fs->draw_it")," which points to drawing function. Let's see what it looks like.\n",(0,e.kt)("img",{alt:"Simple",src:C(9174).Z,width:"332",height:"174"})),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-holyc"},"//The first argument is the CTask being fdraw\nU0 DrawIt(CTask *,CDC *dc) {\n  dc->color=BLUE;\n  GrRect(dc,0,0,100,100);\n}\nFs->draw_it=&DrawIt;\n")),(0,e.kt)("p",null,"Here we will use a function pointer to draw the screen.",(0,e.kt)("br",{parentName:"p"}),"\n","The function used here takes 2 arguments,the ",(0,e.kt)("inlineCode",{parentName:"p"},"CTask"),"and the ",(0,e.kt)("inlineCode",{parentName:"p"},"CDC"),".",(0,e.kt)("br",{parentName:"p"}),"\n","The ",(0,e.kt)("inlineCode",{parentName:"p"},"CDC")," is a drawing context,and we use functions to draw on it like ",(0,e.kt)("inlineCode",{parentName:"p"},"GrRect"),".",(0,e.kt)("br",{parentName:"p"}),"\n","We can also edit the dc directly to change the color of the drawer."),(0,e.kt)("p",null,"There are other Graphics functions as well..."),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-holyc"},'U0 DrawIt(CTask *,CDC *dc) {\n  dc->color=BLUE;\n  GrLine(dc,0,0,100,100);\n  GrCircle(dc,100,100,50);\n  dc->color=RED;\n  GrFillCircle(dc,0,0,,50);\n  GrPlot(dc,100,100); //Single point\n  GrRect(dc,200,200,100,100);\n  dc->color=YELLOW;\n  GrPrint(dc,0,0,"Hello %s","World");\n}\nFs->draw_it=&DrawIt;\n')),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"More",src:C(4729).Z,width:"425",height:"371"})),(0,e.kt)("h2",{id:"drawing-contexts"},"Drawing Contexts"),(0,e.kt)("p",null,"Drawing contexts are what let us actually draw to the screen.",(0,e.kt)("br",{parentName:"p"}),"\n","We can create drawing contexts with ",(0,e.kt)("inlineCode",{parentName:"p"},"DCNew(w,h)"),". These aren't draw to the Screen, but you can blot them to the screen via ",(0,e.kt)("inlineCode",{parentName:"p"},"GrBlot")),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-holyc"},"CDC *new=DCNew(100,100);\nDCClear(new);\n//Clear our new CDC\nnew->color=CYAN;\nGrRect(new,0,0,50,50);\n\nU0 DrawIt(CTask *,CDC *dc){\n  GrBlot(dc,100,100,new);\n}\nFs->draw_it=&DrawIt;\n")),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"g3",src:C(5136).Z,width:"381",height:"261"})),(0,e.kt)("p",null,"We can access the same image in 2 different drawing contexts,we can do this via ",(0,e.kt)("inlineCode",{parentName:"p"},"DCAlias"),(0,e.kt)("br",{parentName:"p"}),"\n",(0,e.kt)("inlineCode",{parentName:"p"},"DCAlias")," will make a copy of a CDC,but it will point to the same image in RAM.",(0,e.kt)("br",{parentName:"p"}),"\n","Here's an Example:"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-holyc"}," CDC *old=DCNew(100,100);\n DCClear(old); //Clear our new CDC\n old->color=CYAN;\n GrRect(old,0,0,50,50);\n CDC *new=DCAlias(old); //We are going to modify old's contents through new\n new->color=YELLOW;\n GrRect(new,50,50,50,50);\n GrBlot(NULL,0,0,old); //old was modified by new\n Sleep(1000);\n DCFill;\n DCDel(old); //Free our CDC's\n DCDel(new);\n")),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"graphics4",src:C(9824).Z,width:"318",height:"180"})),(0,e.kt)("h2",{id:"transformations"},"Transformations"),(0,e.kt)("p",null,"TempleOS uses transformation matrices to do things like rotation and scaling and other 3D stuff. These transformations can be combined. Here,we rotate a circle around the center by using 2 transformations here,a Z rotation,and a translation transformation. The Z rotation is good for 2D transformations,and we set the center of the rotation to 50,50 via ",(0,e.kt)("strong",{parentName:"p"},"Mat4x4TranslationEqu"),". It looks silly and epic. ",(0,e.kt)("strong",{parentName:"p"},"We must also enable transformations via DCF_TRANSFORMATION"),',( and use a graphics function typically ending in "3")'),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-holyc"},"CDC *dc=DCNew(100,100);\n dc->r=Mat4x4IdentNew;\n DCFill;\n dc->flags|=DCF_TRANSFORMATION;\n F64 rotx=0;\n for(;rotx<=2*pi;rotx+=(2*pi/100.)) {\n        DCFill(dc);\n         Mat4x4IdentEqu(dc->r); //Reset our transformation\n         Mat4x4RotZ(dc->r,rotx);\n         Mat4x4TranslationEqu(dc->r,50,50,0);\n          dc->color=YELLOW;\n         GrRect3(dc,0,0,0,50,50);\n         DCFill;\n         GrBlot(,100,100,dc);\n         Sleep(33);\n }\n DCDel(dc);\n DCFill;\n")),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"spin_yellow",src:C(7640).Z,width:"400",height:"240"})),(0,e.kt)("p",null,"Try switching up the X_Y_Z rotations."),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"The Z axis points towards the screen."),(0,e.kt)("li",{parentName:"ul"},"The X axis points to the left."),(0,e.kt)("li",{parentName:"ul"},"The Y axis points up.")),(0,e.kt)("h2",{id:"transformations2"},"Transformations(2)"),(0,e.kt)("p",null,"Transformations use a matrix,which I wont explain the mathematics in much detail here.",(0,e.kt)("br",{parentName:"p"}),"\n",'There is a thing called the identity matrix,which is the "default" matrix.',(0,e.kt)("br",{parentName:"p"}),"\n","To reset the drawing context's matrix,do this"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-holyc"},"Mat4x4IdentEqu(dc->R);\n// Or if you want a new Matrix\ndc->R=Mat4x4IdentNew;\n")),(0,e.kt)("p",null,"We can combine transformations on a single matrix,be sure to do them in the order you want"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-holyc"}," CDC *dc=DCNew(200,200);\n dc->r=Mat4x4IdentNew;\n DCFill;\n dc->flags|=DCF_TRANSFORMATION;\n F64 rotx=0;\n for(;rotx<=2*pi;rotx+=(2*pi/100.)) {\n         DCFill(dc);\n         Mat4x4IdentEqu(dc->r);\n         Mat4x4RotX(dc->r,rotx);\n         Mat4x4RotY(dc->r,rotx);\n         Mat4x4RotZ(dc->r,rotx);\n         //Be sure to translate to the center\n         Mat4x4TranslationEqu(dc->r,50,50,0);\n         Mat4x4Scale(dc->r,2.);\n         dc->color=YELLOW;\n         GrRect3(dc,0,0,0,50,50);\n         DCFill;\n         GrBlot(,100,100,dc);\n         Sleep(33);\n }\n DCDel(dc);\n DCFill;\n")),(0,e.kt)("p",null,"We can use depth buffer,now for a cube without the top and bottom"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"Use ",(0,e.kt)("em",{parentName:"li"},"DCDepthBufAlloc")," to allocate a depth buffer"),(0,e.kt)("li",{parentName:"ul"},"Be sure to ",(0,e.kt)("em",{parentName:"li"},"DCDepthBufRst")," after each call!!!."),(0,e.kt)("li",{parentName:"ul"},"The z buffer is symbolic and is only used for checking if an item is behind another. It doesn't shrink at stuff goes farther away.")),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-holyc"}," CD3I32 poly[4]= {{-100,-100,-100},{100,-100,-100},{100,100,-100},{-100,100,-100}};\n I64 colors[4]= {BLUE,YELLOW,GREEN,CYAN};\n CDC *dc=DCNew(200,200);\n dc->r=Mat4x4IdentNew;\n DCDepthBufAlloc(dc);\n DCFill;\n dc->flags|=DCF_TRANSFORMATION;\n F64 rotx=0,roty;\n CD3I32 cube[6][6];\n I64 i=0,i2=0;\n I64 *trans=Mat4x4IdentNew;\n for(rotx=0.; rotx<=(2.*pi)-1.; rotx+=2*pi/4.) {\n     //Mat4x4TranslationEqu(trans,50,50,50);\n     Mat4x4IdentEqu(trans);\n     Mat4x4RotX(trans,rotx);\n     Mat4x4RotY(trans,roty);\n     for(i2=0; i2!=4; i2++) {\n         MemCpy(&cube[i][i2],&poly[i2],sizeof(CD3I32));\n         Mat4x4MulXYZ(trans,&cube[i][i2].x,&cube[i][i2].y,&cube[i][i2].z);\n     }\n     i++;\n }\n for(rotx=0; rotx<=2*pi; rotx+=(2*pi/100.)) {\n     DCFill(dc);\n     DCDepthBufRst(dc);\n     Mat4x4IdentEqu(dc->r);\n     Mat4x4RotX(dc->r,rotx);\n     Mat4x4RotY(dc->r,rotx);\n     Mat4x4RotZ(dc->r,rotx);\n     Mat4x4Scale(dc->r,.5);\n     Mat4x4TranslationEqu(dc->r,0,0,3000);\n     for(i2=0; i2!=6; i2++) {\n         dc->color=colors[i2];\n         GrFillPoly3(dc,4,cube[i2]);\n     }\n     DCFill;\n     GrBlot(,100,100,dc);\n     Sleep(33);\n }\n DCDel(dc);\n DCFill;\n")),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"cubeish",src:C(2280).Z,width:"318",height:"233"})),(0,e.kt)("p",null,"Eariler I said that Z doesnt shrink as you go farther,that's because we need a transformation callback!",(0,e.kt)("br",{parentName:"p"}),"\n","We can put such a callback in ",(0,e.kt)("inlineCode",{parentName:"p"},"CDC.transform")," with the ",(0,e.kt)("inlineCode",{parentName:"p"},"DCF_TRANSFORMATION")," flag. We divide by z to get a simulate going back.",(0,e.kt)("br",{parentName:"p"}),"\n","Let's make a shrinking rectangle"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-holyc"}," #define SCRN_SCALE 512\n U0 Transform(CDC *dc,I64 *x,I64 *y,I64 *z)\n {\n   I64 zz;\n   Mat4x4MulXYZ(dc->r,x,y,z);\n   zz=SCRN_SCALE/3+*z;\n   if (zz<1) zz=1;\n   *x=SCRN_SCALE/2* *x/zz;\n   *y=SCRN_SCALE/2* (*y)/zz;\n   *x+=dc->x;\n   *y+=dc->y;\n   *z+=dc->z;\n }\n CDC *dc=DCAlias;\n dc->transform=&Transform;\n dc->flags|=DCF_TRANSFORMATION;\n I64 dist=0;\n dc->z=-60;\n for(dist=0;dist!=100;dist++) {\n     Mat4x4TranslationEqu(dc->r,0,0,dist);\n     dc->color=LTRED;\n     GrRect3(dc,0,0,0,100,100);\n     Refresh;\n     Sleep(3);\n     DCFill;\n }\n")),(0,e.kt)("h2",{id:"super-color-dithering"},"Super Color Dithering"),(0,e.kt)("p",null,"Colors can be combined via dithering via ",(0,e.kt)("inlineCode",{parentName:"p"},"ROPF_DITHER"),". Let's see an example."),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-holyc"}," CDC *dc=DCAlias;\n I64 cnt;\n for(cnt=0;cnt!=100;cnt++) {\n     dc->color=LTRED+YELLOW<<16+ROPF_DITHER;\n     GrRect3(dc,0,0,0,100,100);\n     Refresh;\n     DCFill;\n }\n")),(0,e.kt)("p",null,"We can do a sort of 3d shading with ",(0,e.kt)("inlineCode",{parentName:"p"},"ROPF_PROBABILITY_DITHER"),(0,e.kt)("strong",{parentName:"p"},"(it get weird with primitive operations,so use ",(0,e.kt)("inlineCode",{parentName:"strong"},"GrFloodFill"),")")),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-holyc"}," CDC *dc=DCAlias;\n I64 cnt;\n for(cnt=0;cnt!=100;cnt++) {\n     dc->color=BLACK;\n     GrRect(dc,0,0,100,100);\n     dc->color=LTRED+YELLOW<<16+ROPF_PROBABILITY_DITHER;\n     dc->dither_probability_u16=U16_MAX*ToF64(cnt)/100.;\n     GrFloodFill(dc,10,10);\n     Refresh;\n     DCFill;\n }\n DCDel(dc);\n")),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"prob_shad",src:C(5421).Z,width:"318",height:"233"})))}l.isMDXComponent=!0},2280:(A,g,C)=>{C.d(g,{Z:()=>I});const I=C.p+"assets/images/cubeish-3c604b86f4f505b540b1993128326331.gif"},9174:(A,g,C)=>{C.d(g,{Z:()=>I});const I=C.p+"assets/images/graphics1-fae9c4c805ed0880e153f7ae71401807.png"},4729:(A,g,C)=>{C.d(g,{Z:()=>I});const I=C.p+"assets/images/graphics2-f9f885359907851157c27a32320bce2e.png"},5136:(A,g,C)=>{C.d(g,{Z:()=>I});const I="data:image/png;base64,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ZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOmQ2NTk2YjQ4LTI5NjUtNGUyNy04NzFkLTc5MTE2ZWQyODE5NSIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozZmZhZDZjMC0wOGYwLTQ5YjEtYTVlMS1iOWY0MGIwOWJlNTIiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxOWQxOWI4Ni1iZTg4LTRhMmEtYWIzNi01ZDM0NDFkMGY5OTYiCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IkxpbnV4IgogICBHSU1QOlRpbWVTdGFtcD0iMTY1NTU5OTEzMDkyOTYwNyIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjIyIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiPgogICA8aXB0Y0V4dDpMb2NhdGlvbkNyZWF0ZWQ+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpMb2NhdGlvbkNyZWF0ZWQ+CiAgIDxpcHRjRXh0OkxvY2F0aW9uU2hvd24+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpMb2NhdGlvblNob3duPgogICA8aXB0Y0V4dDpBcnR3b3JrT3JPYmplY3Q+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpBcnR3b3JrT3JPYmplY3Q+CiAgIDxpcHRjRXh0OlJlZ2lzdHJ5SWQ+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpSZWdpc3RyeUlkPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyYWY4OWZhYy1lOWQ3LTRmMGEtODZjOS00M2RlYmEwYjk0NTQiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoTGludXgpIgogICAgICBzdEV2dDp3aGVuPSIrMDA6MDAiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogICA8cGx1czpJbWFnZVN1cHBsaWVyPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6SW1hZ2VTdXBwbGllcj4KICAgPHBsdXM6SW1hZ2VDcmVhdG9yPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6SW1hZ2VDcmVhdG9yPgogICA8cGx1czpDb3B5cmlnaHRPd25lcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkNvcHlyaWdodE93bmVyPgogICA8cGx1czpMaWNlbnNvcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkxpY2Vuc29yPgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+1yDzIgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+YGEwAmMsosjUoAAAM/SURBVHja7dzRisIwEEDRyeIvNh/ZfOT4ENhdcRcE24mUc5609aGE9jIqpGVmAByktRERmdt8O8Z4/syXZQKK6Q6gO4DuAOgOoDsAugPoDoDuALoD6A6A7gC6A6A7gO4A6A6gO4DuAOgOoDsAugPoDoDuALoD6A6A7gC6A/C2Hr1H1x2gLjoRsceuO0B1dHQHqI6O7gCnm8WZ9dEdYE16dAeoTs/NcgCV6THvAAvoDqA7gO4A6A6gOwC6A+gOgO4AugPoDoDuALoDoDuA7gDoDqA7gO4A6A6gOwDvuvi+7m2MT7ys3j/wojLT84B5B9AdAN0BdAdAdwDdAdAdQHcA3QHQHUB3AHQH0B0A3QF0B9AdAN0BdAdAdwDdAfilR+/RdQeoi05E7LHrDlAdHd0BqqOjO8DpZnFmfXQHWJMe3QGq03OzHEBlesw7wAK6A+gOoDsAugPoDoDuALoDoDtAOfvvANXRCfvvAEuioztAdXR0Bzid/XeA9enRHaA6PfbfAUrTozvA8TJHxJivt+2xPL5nAUuYd4BTtLY9TkA/zDuAeQe47AQ0dAc4Xub2/aPyX6ciIlpmXrqvzX3w8u2SFoGD9H+O+z8LWDUQmHcw71DMvAPoDqA7ALoD6A6A7gC6A6A7gO4AugOgO4DuAOgOoDsAugPoDqA7ALoD6A6A7gC6A6A7gO4AugOgO4DuAOgOoDsAugPoDoDuALoD6A6A7gC6A6A7gO4A6A6gO4DuAOgOoDsAugPoDoDuALoD6A5AlZaZVgEw7wC6A6A7gO4A6A6gOwC6A+gOoDsAugPoDoDuALoDoDuA7gC6A6A7gO4A6A6gOwC6A+gOoDsAugPoDoDuALoDoDuA7gDoDqA7gO4A6A6gOwC6A+gOgO4AugPoDoDuALoDoDuA7gDoDqA7gO4A6A6gOwC6A+gOgO4AugPoDoDuALoDoDuA7gDoDqA7ALoD6A6gOwC6A+gOgO4AugOgO4DuALoDoDuA7gDoDqA7ALoD6A6gOwC6A+gOgO4AugOgO4DuAOgOoDuA7gDoDqA7ALoD6A6A7gC6A+gOgO4AugOgO4DuAOgOoDuA7gDoDqA7ALoD6A6A7gC6A3AHEA9YtjKo62sAAAAASUVORK5CYIINCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tMzg3MDM5OTU4OTI1OTY4ODYzNDYzODg5ODc3NjM3LS0NCgAAAAAAAAAAAAAAERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},9824:(A,g,C)=>{C.d(g,{Z:()=>I});const I=C.p+"assets/images/graphics4-0ef0862db416cd97b8efe76d3df2fa82.png"},5421:(A,g,C)=>{C.d(g,{Z:()=>I});const I=C.p+"assets/images/prob_shad-ecfd07dd41bbd8cc7e12d1ffcad75494.gif"},7640:(A,g,C)=>{C.d(g,{Z:()=>I});const I=C.p+"assets/images/spin_yellow-692fdf73df4341cee604f4e6e4f4b538.gif"}}]);