"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9564,6638],{71871:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},15236:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(83117),r=n(67294),o=n(5730),l=n(34875),i=n(86010);const p="tabItem_LplD";function d(e){var t,n,o,d=e.lazy,s=e.block,m=e.defaultValue,u=e.values,c=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=u?u:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(N,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var C=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==C&&!N.some((function(e){return e.value===C})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),f=v.tabGroupChoices,b=v.setTabGroupChoices,y=(0,r.useState)(C),A=y[0],T=y[1],w=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var D=f[c];null!=D&&D!==A&&N.some((function(e){return e.value===D}))&&T(D)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),a=N[n].value;a!==A&&(E(t),T(a),null!=c&&b(c,a))},B=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},k)},N.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return w.push(e)},onKeyDown:B,onFocus:x,onClick:x},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":A===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(g.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function s(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},25067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={},p=void 0,d={unversionedId:"component_usage/Tooltip",id:"version-4.0.0-rc.0/component_usage/Tooltip",title:"Tooltip",description:"---",source:"@site/versioned_docs/version-4.0.0-rc.0/component_usage/Tooltip.mdx",sourceDirName:"component_usage",slug:"/component_usage/Tooltip",permalink:"/docs/component_usage/Tooltip",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.0/component_usage/Tooltip.mdx",tags:[],version:"4.0.0-rc.0",frontMatter:{}},s={},m=[],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Web-platform specific note"),":"),(0,o.kt)("p",{parentName:"blockquote"},"You ",(0,o.kt)("strong",{parentName:"p"},"must")," pass a valid React Native ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/modal"},(0,o.kt)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",(0,o.kt)("a",{parentName:"p",href:"#modalcomponent"},(0,o.kt)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",(0,o.kt)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-web"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Tooltip ModalComponent={Modal} ... />\n...\n")),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Tooltip","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tooltip%2C%20Text%2C%20colors%20%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Dimensions%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0A%0Aconst%20%7B%20height%20%7D%20%3D%20Dimensions.get('window')%3B%0A%0Atype%20ToolTipComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20TooltipComponent%3A%20React.FunctionComponent%3CToolTipComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20toolProps%20%3D%20%7B%7D%3B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20marginVertical%3A%20height%20%2F%208%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3Eno%20caret!%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20withPointer%3D%7Bfalse%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3Ewithout%20caret%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7Bcolors.primary%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7Bcolors.secondary%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3ETooltip%20info%20goes%20here%20too.%20Find%20tooltip%20everywhere%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20width%3A%20200%2C%20height%3A%2060%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20width%3A%20145%2C%20height%3A%20130%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'Some%20big%20text%20full%20of%20important%20stuff%20for%20the%20super%20duper%20user%20that%20our%20design%20has%20been%20created%20for'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EHUGE%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7Bcolors.primary1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EMore%20attention%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7Bcolors.primary2%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EI'm%20different%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Aview%3A%20%7B%0A%20%20display%3A%20'flex'%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20justifyContent%3A%20'space-evenly'%2C%0A%20%20marginVertical%3A%2050%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20TooltipComponent%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0},90096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=(n(15236),n(71871),n(19583),n(25067)),i=["components"],p={id:"tooltip",title:"Tooltip"},d=void 0,s={unversionedId:"components/tooltip",id:"version-4.0.0-rc.0/components/tooltip",title:"Tooltip",description:"Tooltips display informative text when users tap on an element.",source:"@site/versioned_docs/version-4.0.0-rc.0/components/Tooltip.mdx",sourceDirName:"components",slug:"/components/tooltip",permalink:"/docs/components/tooltip",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.0/components/Tooltip.mdx",tags:[],version:"4.0.0-rc.0",frontMatter:{id:"tooltip",title:"Tooltip"},sidebar:"docs",previous:{title:"Tile",permalink:"/docs/components/tile"},next:{title:"Getting Started",permalink:"/docs/universe"}},m={},u=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],c={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tooltips display informative text when users tap on an element."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(l.default,{mdxType:"Usage"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ModalComponent")),(0,o.kt)("td",{parentName:"tr",align:null},"typeof Component"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Override React Native ",(0,o.kt)("inlineCode",{parentName:"td"},"Modal")," component (usable for web-platform).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"backgroundColor")),(0,o.kt)("td",{parentName:"tr",align:null},"ColorValue"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"#617080")),(0,o.kt)("td",{parentName:"tr",align:null},"Sets backgroundColor of the tooltip and pointer.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"closeOnlyOnBackdropPress")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Flag to determine whether to disable auto hiding of tooltip when touching/scrolling anywhere inside the active tooltip popover container. When ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", Tooltip closes only when overlay backdrop is pressed (or) highlighted tooltip button is pressed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{}")),(0,o.kt)("td",{parentName:"tr",align:null},"Passes style object to tooltip container")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"height")),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"40")),(0,o.kt)("td",{parentName:"tr",align:null},"Tooltip container height. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"highlightColor")),(0,o.kt)("td",{parentName:"tr",align:null},"ColorValue"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"transparent")),(0,o.kt)("td",{parentName:"tr",align:null},"Color to highlight the item the tooltip is surrounding.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onClose")),(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Function")),(0,o.kt)("td",{parentName:"tr",align:null},"Function which gets called on closing the tooltip.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onOpen")),(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Function")),(0,o.kt)("td",{parentName:"tr",align:null},"Function which gets called on opening the tooltip.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"overlayColor")),(0,o.kt)("td",{parentName:"tr",align:null},"ColorValue"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"#fafafa14")),(0,o.kt)("td",{parentName:"tr",align:null},"Color of overlay shadow when tooltip is open.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pointerColor")),(0,o.kt)("td",{parentName:"tr",align:null},"ColorValue"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"#617080")),(0,o.kt)("td",{parentName:"tr",align:null},"Color of tooltip pointer, it defaults to the ",(0,o.kt)("a",{parentName:"td",href:"#backgroundcolor"},(0,o.kt)("inlineCode",{parentName:"a"},"backgroundColor"))," if none is passed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pointerStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Style to be applied on the pointer.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"popover")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReactElement<{}, string")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"JSXElementConstructor<any>>")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Component to be rendered as the display container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"skipAndroidStatusBar")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Force skip StatusBar height when calculating element position. Pass ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," if Tooltip used inside react-native Modal component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"toggleAction")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onPress")),(0,o.kt)("td",{parentName:"tr",align:null},"Define type of action that should trigger tooltip. Available options ",(0,o.kt)("em",{parentName:"td"},"onPress"),", ",(0,o.kt)("em",{parentName:"td"},"onLongPress"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"toggleOnPress")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")),(0,o.kt)("td",{parentName:"tr",align:null},"Flag to determine to toggle or not the tooltip on press.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"visible")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"To show the tooltip.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"width")),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"150")),(0,o.kt)("td",{parentName:"tr",align:null},"Tooltip container width. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"withOverlay")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")),(0,o.kt)("td",{parentName:"tr",align:null},"Flag to determine whether or not display overlay shadow when tooltip is open.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"withPointer")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")),(0,o.kt)("td",{parentName:"tr",align:null},"Flag to determine whether or not to display the pointer."))))))}k.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);