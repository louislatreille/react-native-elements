"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6859,6763],{35395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=r(51402),l=r(95654),p=["components"],d={id:"card",title:"Card"},c=void 0,s={unversionedId:"card",id:"version-3.4.2/card",title:"Card",description:"Cards are a great way to display information, usually containing content and",source:"@site/versioned_docs/version-3.4.2/card.md",sourceDirName:".",slug:"/card",permalink:"/docs/3.4.2/card",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/card.md",tags:[],version:"3.4.2",frontMatter:{id:"card",title:"Card"},sidebar:"version-3.4.2/docs",previous:{title:"ButtonGroup",permalink:"/docs/3.4.2/button_group"},next:{title:"CheckBox",permalink:"/docs/3.4.2/checkbox"}},u={},m=[{value:"Usage",id:"usage",level:2}],k={toc:m};function v(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cards are a great way to display information, usually containing content and\nactions about a single subject. Cards can contain images, buttons, text and\nmore."),(0,o.kt)("img",{alt:"Card Component",src:(0,i.Z)("img/card.png")}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const users = [\n {\n    name: 'brynn',\n    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'\n },\n ... // more users here\n]\n\nimport { View, Text, Image } from 'react-native'\nimport { Card, ListItem, Button, Icon } from 'react-native-elements'\n\n// implemented without image with header\n<Card>\n  <Card.Title>CARD WITH DIVIDER</Card.Title>\n  <Card.Divider/>\n  {\n    users.map((u, i) => {\n      return (\n        <View key={i} style={styles.user}>\n          <Image\n            style={styles.image}\n            resizeMode=\"cover\"\n            source={{ uri: u.avatar }}\n          />\n          <Text style={styles.name}>{u.name}</Text>\n        </View>\n      );\n    })\n  }\n</Card>\n\n// implemented without image without header, using ListItem component\n <Card containerStyle={{padding: 0}} >\n  {\n    users.map((u, i) => <ListItem key={i} />)\n  }\n</Card>\n\n\n// implemented with Text and Button as children\n<Card>\n  <Card.Title>HELLO WORLD</Card.Title>\n  <Card.Divider/>\n  <Card.Image source={require('../images/pic2.jpg')}>\n    <Text style={{marginBottom: 10}}>\n      The idea with React Native Elements is more about component structure than actual design.\n    </Text>\n    <Button\n      icon={<Icon name='code' color='#ffffff' />}\n      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}\n      title='VIEW NOW' />\n  </Card.Image>\n</Card>\n")),(0,o.kt)("hr",null),(0,o.kt)(l.default,{mdxType:"Props"}),(0,o.kt)("hr",null))}v.isMDXComponent=!0},95654:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={},p=void 0,d={unversionedId:"props/card",id:"version-3.4.2/props/card",title:"card",description:"Props",source:"@site/versioned_docs/version-3.4.2/props/card.md",sourceDirName:"props",slug:"/props/card",permalink:"/docs/3.4.2/props/card",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/card.md",tags:[],version:"3.4.2",frontMatter:{}},c={},s=[{value:"Props",id:"props",level:2},{value:"Child Components",id:"child-components",level:2},{value:"Card.Divider",id:"carddivider",level:3},{value:"Card.Title",id:"cardtitle",level:3},{value:"Card.Image",id:"cardimage",level:3},{value:"Card.FeaturedTitle",id:"cardfeaturedtitle",level:3},{value:"Card.FeaturedSubtitle",id:"cardfeaturedsubtitle",level:3},{value:"Reference",id:"reference",level:2},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>wrapperStyle</code>",id:"wrapperstyle",level:3}],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#containerstyle"},(0,o.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#wrapperstyle"},(0,o.kt)("inlineCode",{parentName:"a"},"wrapperStyle")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"child-components"},"Child Components"),(0,o.kt)("h3",{id:"carddivider"},"Card.Divider"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Receives all ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.4.2/props/divider#props"},"Divider")," props.")),(0,o.kt)("h3",{id:"cardtitle"},"Card.Title"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Receives all ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.4.2/props/text#props"},"Text")," props.")),(0,o.kt)("h3",{id:"cardimage"},"Card.Image"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Receives all ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.4.2/props/image#props"},"Image")," props.")),(0,o.kt)("h3",{id:"cardfeaturedtitle"},"Card.FeaturedTitle"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Receives all ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.4.2/props/text#props"},"Text")," props.")),(0,o.kt)("h3",{id:"cardfeaturedsubtitle"},"Card.FeaturedSubtitle"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Receives all ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.4.2/props/text#props"},"Text")," props.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("h3",{id:"containerstyle"},(0,o.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,o.kt)("p",null,"outer container style (optional)"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"wrapperstyle"},(0,o.kt)("inlineCode",{parentName:"h3"},"wrapperStyle")),(0,o.kt)("p",null,"inner container style (optional)"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"none")))))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);