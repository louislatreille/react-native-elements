"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9563,3422],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(a),k=r,u=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2358:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>d,toc:()=>s,default:()=>k});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),o=a(5999),i=["components"],p={id:"overlay",title:"Overlay"},c=void 0,d={unversionedId:"overlay",id:"version-3.4.2/overlay",isDocsHomePage:!1,title:"Overlay",description:"The Overlay is a view that floats above an app\u2019s content. Overlays are an easy",source:"@site/versioned_docs/version-3.4.2/overlay.md",sourceDirName:".",slug:"/overlay",permalink:"/docs/3.4.2/overlay",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/overlay.md",version:"3.4.2",frontMatter:{id:"overlay",title:"Overlay"},sidebar:"version-3.4.2/docs",previous:{title:"ListItem",permalink:"/docs/3.4.2/listitem"},next:{title:"Pricing",permalink:"/docs/3.4.2/pricing"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Also See",id:"also-see",children:[]}],m={toc:s};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Overlay is a view that floats above an app\u2019s content. Overlays are an easy\nway to inform or request information from the user."),(0,l.kt)("img",{src:"/img/overlay.png",width:"400"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { Button, Overlay } from 'react-native-elements';\n\nconst OverlayExample = () => {\n  const [visible, setVisible] = useState(false);\n\n  const toggleOverlay = () => {\n    setVisible(!visible);\n  };\n\n  return (\n    <View>\n      <Button title=\"Open Overlay\" onPress={toggleOverlay} />\n\n      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>\n        <Text>Hello from Overlay!</Text>\n      </Overlay>\n    </View>\n  );\n};\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Web-platform specific note:"),(0,l.kt)("p",{parentName:"blockquote"},"You ",(0,l.kt)("strong",{parentName:"p"},"must")," pass a valid React Native ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/modal"},(0,l.kt)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",(0,l.kt)("a",{parentName:"p",href:"#modalcomponent"},(0,l.kt)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",(0,l.kt)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native-web"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Overlay ModalComponent={Modal} ... />\n...\n")),(0,l.kt)("hr",null),(0,l.kt)(o.default,{mdxType:"Props"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"also-see"},"Also See"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/dialog"},"Dialog")))}k.isMDXComponent=!0},5999:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>m});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),o=["components"],i={},p=void 0,c={unversionedId:"props/overlay",id:"version-3.4.2/props/overlay",isDocsHomePage:!1,title:"overlay",description:"Props",source:"@site/versioned_docs/version-3.4.2/props/overlay.md",sourceDirName:"props",slug:"/props/overlay",permalink:"/docs/3.4.2/props/overlay",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/overlay.md",version:"3.4.2",frontMatter:{}},d=[{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>children</code>",id:"children",children:[]},{value:"<code>backdropStyle</code>",id:"backdropstyle",children:[]},{value:"<code>fullScreen</code>",id:"fullscreen",children:[]},{value:"<code>isVisible</code>",id:"isvisible",children:[]},{value:"<code>ModalComponent</code>",id:"modalcomponent",children:[]},{value:"<code>overlayStyle</code>",id:"overlaystyle",children:[]},{value:"<code>onBackdropPress</code>",id:"onbackdroppress",children:[]}]}],s={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Also receives all\n",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/modal#props"},"Modal")," props")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#backdropstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"backdropStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#children"},(0,l.kt)("inlineCode",{parentName:"a"},"children"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#fullscreen"},(0,l.kt)("inlineCode",{parentName:"a"},"fullScreen"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#isvisible"},(0,l.kt)("inlineCode",{parentName:"a"},"isVisible"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#modalcomponent"},(0,l.kt)("inlineCode",{parentName:"a"},"ModalComponent"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onbackdroppress"},(0,l.kt)("inlineCode",{parentName:"a"},"onBackdropPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#overlaystyle"},(0,l.kt)("inlineCode",{parentName:"a"},"overlayStyle")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"children"},(0,l.kt)("inlineCode",{parentName:"h3"},"children")),(0,l.kt)("p",null,"What the modal will render"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"React Element"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"backdropstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"backdropStyle")),(0,l.kt)("p",null,"Style of the backdrop container"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View Style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fullscreen"},(0,l.kt)("inlineCode",{parentName:"h3"},"fullScreen")),(0,l.kt)("p",null,"If set to true, the modal will take up the entire screen width and height"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"isvisible"},(0,l.kt)("inlineCode",{parentName:"h3"},"isVisible")),(0,l.kt)("p",null,"If true, the overlay is visible"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"modalcomponent"},(0,l.kt)("inlineCode",{parentName:"h3"},"ModalComponent")),(0,l.kt)("p",null,"override React Native ",(0,l.kt)("inlineCode",{parentName:"p"},"Modal")," component (usable for web-platform)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"React Native Component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Modal")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"overlaystyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"overlayStyle")),(0,l.kt)("p",null,"style of the actual overlay"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View Style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onbackdroppress"},(0,l.kt)("inlineCode",{parentName:"h3"},"onBackdropPress")),(0,l.kt)("p",null,"handler for backdrop press (only works when ",(0,l.kt)("inlineCode",{parentName:"p"},"fullscreen")," is false)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))))}m.isMDXComponent=!0}}]);