"use strict";(self.webpackChunktempleos_simplified=self.webpackChunktempleos_simplified||[]).push([[86],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=u(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const o={id:"virtualized",title:"\ud83d\udc7e Virtualized",sidebar_position:1},l="Virtualized",r={unversionedId:"guide/installing/virtualized",id:"guide/installing/virtualized",title:"\ud83d\udc7e Virtualized",description:"This page is for installing TempleOS on a virtual machine. If you wish to install on Bare Metal; skip this page.",source:"@site/docs/guide/installing/virtualized.mdx",sourceDirName:"guide/installing",slug:"/guide/installing/virtualized",permalink:"/guide/installing/virtualized",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"virtualized",title:"\ud83d\udc7e Virtualized",sidebar_position:1},sidebar:"guide",previous:{title:"Avaliable Methods",permalink:"/guide/installing/methods"},next:{title:"Keybinding",permalink:"/Keybinding"}},s={},u=[{value:"VMWare Workstation",id:"vmware-workstation",level:3},{value:"VirtualBox",id:"virtualbox",level:3},{value:"QEMU",id:"qemu",level:3},{value:"QEMU Side Note:",id:"qemu-side-note",level:4},{value:"Moving Forward",id:"moving-forward",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"virtualized"},"Virtualized"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This page is for installing TempleOS on a virtual machine. If you wish to install on Bare Metal; skip this page.")," "),(0,i.kt)("p",null,"Virtual machines provide a substitute for a real machine (in contrast to bare metal). Virtual machines are based on  computer architectures and provide functionality of a physical computer. Installing a virtual machine is a relatively simple process."),(0,i.kt)("p",null,"First you'll need to select which virtual machine software suits you, each one has their own quirks, which will be touched on breifly."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.vmware.com/au/products/workstation-player.html"},"VMWare Player"),": Free/Paid, Audio Support, GUI, Win/Linux"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/"},"Oracle VirtualBox"),": Free, Open Source, GUI, Mac(Intel-only)/Win/Linux"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.google.com/search?client=firefox-b-d&q=QEMU"},"QEMU"),": Free, Open Source, Audio Support, CLI, Mac/Win/Linux/Other(Unix)")),(0,i.kt)("p",null,"Next you'll need to acquire the TempleOS ISO from ",(0,i.kt)("a",{parentName:"p",href:"https://templeos.org/Downloads/TempleOS.ISO"},"here"),", Or curl it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://templeos.org/Downloads/TempleOS.ISO -o templeos.iso\n")),(0,i.kt)("p",null,"From this point forward, the steps required for an install depends on the VM software you have selected. Below you can find the sections corresponding to the respective software."),(0,i.kt)("h3",{id:"vmware-workstation"},"VMWare Workstation"),(0,i.kt)("ol",null,(0,i.kt)("li",null,'Upon launching VMWare Player, select Create a new virtual machine and select "Typical".'),(0,i.kt)("li",null,'Select the "Use ISO Image" option then "Browse" and open the TempleOS.ISO that you downloaded.'),(0,i.kt)("li",null,'On the next menu; select "3. Other", then make sure to edit the version and set it to "Other 64-bit".'),(0,i.kt)("li",null,"Now you can enter the name for your VM and an install location."),(0,i.kt)("li",null,"Select the HDD space; a couple of GBs is fine, now select how you want your disks setup."),(0,i.kt)("li",null,"Finally you'll be greeted with a review of your Virtual Machine. Before finishing, press customize Hardware and increase your RAM to a minimum of 512MB or a recommended 2GBs. While you're here you can increase your cores.")),(0,i.kt)("p",null,'Now it\'s time to actually boot into TempleOS. Once booted, you\'ll be granted with a dialogue. Press "Y" to the first option, and "Y" again for the latter. TempleOS will now be installing on the virtual disk. Once finished, you\'ll be prompted with two additional dialogues, simply press "N" for both. To exit VMWare you\'ll need to press ',(0,i.kt)("kbd",null,"Ctrl"),"+",(0,i.kt)("kbd",null,"Alt")," to unlock your mouse, and exit the virtual machine. Once you've exited the virtual machine:"),(0,i.kt)("ol",null,(0,i.kt)("li",null,'Re-open VMWare Workstation if it was closed, reselect the virtual machine and press "edit virtual machine settings" at the bottom.'),(0,i.kt)("li",null,'Select "CD/DVD" and change it to "use a physical drive".'),(0,i.kt)("li",null,'Start the virtual machine, if granted with a warning message, just select "No".')),(0,i.kt)("p",null,"Congratulations, you've just installed TempleOS in VMWare Workstation."),(0,i.kt)("h3",{id:"virtualbox"},"VirtualBox"),(0,i.kt)("p",null,'Upon opening VirtualBox, select the "New" button:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Enter a name for your virtual machine, you can name it anything. For Type select "Other" and the version, select "Other/Unknown (64-bit)".')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next, you'll be required to enter the amount memory to use; generally TempleOS only needs 512MB to boot, however, be safe and give it around 2 to 4 Gigabytes of RAM.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'After memory, you\'ll be prompted for a hard disk, select "Create a virtual hard disk now". On the next screen select "VDI", next "Dynamically allocated". Finally, for the HD size, just enter in 2GBs and create.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You should now be able to launch, open doing so select the TempleOS ISO that you downloaded.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the left panel, you should be prompted to install TempleOS, all you'll need to do is press ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," 3 times (Easier than installing Linux). At this point, you're all good to go.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Remove the live CD by selecting the Virtual Machine, going to "Settings", "Storage" and removing the ISO. This will allow you to boot into the fresh installation.'))),(0,i.kt)("h3",{id:"qemu"},"QEMU"),(0,i.kt)("p",null,"This sections is designed specifically for Linux (and possibly MacOS), I usually recommend using QEMU as it's completely free and cross-platform. Additionally, QEMU supports audio output for TempleOS."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once you have the ISO saved somewhere on your disk, we can create a Virtual Disk Image:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"qemu-img create -f qcow2 temple 2G\n")),(0,i.kt)("i",null,"qemu-img is the program for managing disks, create will create a disk, -f is a file flag and we chose a qcow2 file, temple will be the name of the file, and 2G means 2 gigabytes in size.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now time to load the live CD: (It's also worth mentioning if you ever mess up your install of TempleOS, just re-run this to get the base version)."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"qemu-system-x86_64 -m 512M -enable-kvm -drive file=temple -cdrom templeos.iso -boot order=d -audiodev alsa,id=snd0 -machine pcspk-audiodev=snd0\n")),(0,i.kt)("i",null,"Don't worry too much about the audio paramaters at the end unless something goes wrong, if you need change `alsa` to `pa`. Feel free to change around certain settings, for example the ram.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Installing onto the Virtual Disk. Upon starting up TempleOS, follow the prompts and install to the CD, after doing so, boot into the CD run:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"qemu-system-x86_64 -m 512M -enable-kvm -drive file=temple -audiodev alsa,id=snd0 -machine pcspk-audiodev=snd0\n")),(0,i.kt)("i",null,"You can see here that we have effectively removed the CD-ROM and the boot order"))),(0,i.kt)("h4",{id:"qemu-side-note"},"QEMU Side Note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The sound is incredibly loud sometimes; turn down your output for the love of God. I found this out the hard way; screaming "Fuck my ears", as I had an error and subsequently the screeching of the error sound at 100%, my ears are still recovering to this day.'),(0,i.kt)("li",{parentName:"ul"},"Also in case you can't exit TempleOS, just press CONTROL + ALT + G to bring your mouse back (this won't work in fullscreen; so probably don't use fullscreen). I mean I was honestly stuck twice, I couldn't kill the program using my Linux shortcut, nor could I switch windows on my WM; ended up having to just turn my PC's power off. \ud83d\ude05"),(0,i.kt)("li",{parentName:"ul"},"I'd like to thank ",(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/TempleOS_Official/comments/ewtp0n/templeos_with_sound_in_qemulinux_host/"},"u/tinkeros")," on Reddit for the updated QEMU commands.")),(0,i.kt)("h3",{id:"moving-forward"},"Moving Forward"),(0,i.kt)("p",null,"If everything has gone to plan, you should now have TempleOS installed on a virtual machine, ready to access at anytime. If you're ready to continue learning, move ahead to the next chapter, otherwise if you'd like you can play around with TempleOS a little more."))}d.isMDXComponent=!0}}]);