"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1226,1775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,B=d["".concat(u,".").concat(m)]||d[m]||l[m]||s;return n?o.createElement(B,a(a({ref:t},i),{},{components:n})):o.createElement(B,a({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<s;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18476:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>u,contentTitle:()=>p,metadata:()=>i,toc:()=>l,default:()=>m});var o=n(87462),r=n(63366),s=(n(67294),n(3905)),a=n(750),c=["components"],u={},p=void 0,i={unversionedId:"components/usage/ButtonGroup/ButtonGroup",id:"components/usage/ButtonGroup/ButtonGroup",title:"ButtonGroup",description:"Using components",source:"@site/docs/components/usage/ButtonGroup/ButtonGroup.mdx",sourceDirName:"components/usage/ButtonGroup",slug:"/components/usage/ButtonGroup/",permalink:"/docs/next/components/usage/ButtonGroup/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/ButtonGroup/ButtonGroup.mdx",tags:[],version:"current",frontMatter:{}},l=[{value:"Using components",id:"using-components",children:[],level:3}],d={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(a.default,{mdxType:"Snack"}),(0,s.kt)("h3",{id:"using-components"},"Using components"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"constructor () {\n  super()\n  this.state = {\n    selectedIndex: 2\n  }\n  this.updateIndex = this.updateIndex.bind(this)\n}\nupdateIndex (selectedIndex) {\n  this.setState({selectedIndex})\n}\n\nconst component1 = () => <Text>Hello</Text>\nconst component2 = () => <Text>World</Text>\nconst component3 = () => <Text>ButtonGroup</Text>\n\nrender () {\n  const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]\n  const { selectedIndex } = this.state\n  return (\n    <ButtonGroup\n      onPress={this.updateIndex}\n      selectedIndex={selectedIndex}\n      buttons={buttons}\n      containerStyle={{height: 100}} />\n  )\n}\n")))}m.isMDXComponent=!0},750:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>u,metadata:()=>p,toc:()=>i,default:()=>d});var o=n(87462),r=n(63366),s=(n(67294),n(3905)),a=["components"],c={},u=void 0,p={unversionedId:"components/usage/ButtonGroup/snack/index",id:"components/usage/ButtonGroup/snack/index",title:"index",description:"",source:"@site/docs/components/usage/ButtonGroup/snack/index.md",sourceDirName:"components/usage/ButtonGroup/snack",slug:"/components/usage/ButtonGroup/snack/",permalink:"/docs/next/components/usage/ButtonGroup/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/ButtonGroup/snack/index.md",tags:[],version:"current",frontMatter:{}},i=[],l={toc:i};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"snack-player","data-snack-name":"RNE ButtonGroup","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7BuseState%7D%20from%20'react'%0Aimport%20%7B%20ButtonGroup%20%7D%20from%20'react-native-elements'%0Aimport%20%7B%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default()%20%3D%3E%20%7B%0A%20%20const%20%5BselectedIndex%2C%20setSelectedIndex%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BselectedIndexes%2C%20setSelectedIndexes%5D%20%3D%20useState(%5B0%2C%202%2C%203%5D)%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EUsing%20Strings%3C%2FText%3E%0A%20%20%20%20%20%20%3CButtonGroup%0A%20%20%20%20%20%20%20%20buttons%3D%7B%5B'SIMPLE'%2C%20'BUTTON'%2C%20'GROUP'%5D%7D%0A%20%20%20%20%20%20%20%20selectedIndex%3D%7BselectedIndex%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setSelectedIndex(value)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginBottom%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButtonGroup%0A%20%20%20%20%20%20%20%20buttons%3D%7B%5B'Multiple'%2C%20'Select'%2C%20'Button'%2C%20'Group'%5D%7D%0A%20%20%20%20%20%20%20%20selectMultiple%0A%20%20%20%20%20%20%20%20selectedIndexes%3D%7BselectedIndexes%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setSelectedIndexes(value)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginBottom%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EUsing%20Components%3C%2FText%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20subHeader%3A%20%7B%0A%20%20%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20%20%20color%20%3A%20%22white%22%2C%0A%20%20%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20%20%20paddingVertical%20%3A%205%2C%0A%20%20%20%20marginBottom%20%3A%2010%0A%20%20%7D%0A%7D)","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0}}]);