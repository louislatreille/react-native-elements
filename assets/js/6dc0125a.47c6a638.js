"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1590,6829],{33215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>k});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=n(51402),i=n(26763),p=["components"],d={id:"header",title:"Header"},m=void 0,c={unversionedId:"header",id:"version-3.4.2/header",title:"Header",description:"Note:",source:"@site/versioned_docs/version-3.4.2/header.md",sourceDirName:".",slug:"/header",permalink:"/docs/3.4.2/header",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/header.md",tags:[],version:"3.4.2",frontMatter:{id:"header",title:"Header"},sidebar:"version-3.4.2/docs",previous:{title:"Floating Action Button",permalink:"/docs/3.4.2/fab"},next:{title:"Icon",permalink:"/docs/3.4.2/icon"}},s={},k=[{value:"Usage",id:"usage",level:2},{value:"Header with default components",id:"header-with-default-components",level:3},{value:"Left aligned center component",id:"left-aligned-center-component",level:3},{value:"Header with custom components passed in through props",id:"header-with-custom-components-passed-in-through-props",level:3},{value:"Header with mixed components",id:"header-with-mixed-components",level:3},{value:"Header with custom components passed in as children",id:"header-with-custom-components-passed-in-as-children",level:3},{value:"Component precedence",id:"component-precedence",level:3},{value:"Header customisability",id:"header-customisability",level:3},{value:"LinearGradient Usage",id:"lineargradient-usage",level:2}],u={toc:k};function h(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.4.2/getting_started#step-3-setup-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,o.kt)("inlineCode",{parentName:"p"},"Header"),"."),(0,o.kt)("p",null,"Headers are navigation components that display information and actions relating\nto the current screen."),(0,o.kt)("img",{alt:"Header",src:(0,l.Z)("img/header.png")}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"header-with-default-components"},"Header with default components"),(0,o.kt)("p",null,"For quick setup we provide default components, which are React Native Elements\nIcon for left/right buttons and React Native Text for title. You can customize\nthem with configuration objects passed in as props."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Header\n  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}\n  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}\n  rightComponent={{ icon: 'home', color: '#fff' }}\n/>\n")),(0,o.kt)("h3",{id:"left-aligned-center-component"},"Left aligned center component"),(0,o.kt)("img",{alt:"Header",src:(0,l.Z)("img/header-left.png")}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Header\n  placement=\"left\"\n  leftComponent={{ icon: 'menu', color: '#fff' }}\n  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}\n  rightComponent={{ icon: 'home', color: '#fff' }}\n/>\n")),(0,o.kt)("h3",{id:"header-with-custom-components-passed-in-through-props"},"Header with custom components passed in through props"),(0,o.kt)("p",null,"You can pass in your custom components like this too."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Header\n  leftComponent={<MyCustomLeftComponent />}\n  centerComponent={<MyCustomCenterComponent />}\n  rightComponent={<MyCustomRightComponent />}\n/>\n")),(0,o.kt)("h3",{id:"header-with-mixed-components"},"Header with mixed components"),(0,o.kt)("p",null,"You can also mix the content, for example you can have default components\ndefined by configuration combined with custom components. Passing a render\nfunction that returns a React Element is valid too."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Header\n  leftComponent={<MyCustomLeftComponent />}\n  centerComponent={this.renderCenterComponent()}\n  rightComponent={{ icon: 'home', style: { color: '#fff' } }}\n/>\n")),(0,o.kt)("h3",{id:"header-with-custom-components-passed-in-as-children"},"Header with custom components passed in as children"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Header>\n  <MyCustomLeftComponent />\n  <MyCustomCenterComponent />\n  <MyCustomRightComponent />\n</Header>\n")),(0,o.kt)("h3",{id:"component-precedence"},"Component precedence"),(0,o.kt)("p",null,"Components defined through children take precedence over components passed in as props, so in this case ",(0,o.kt)("inlineCode",{parentName:"p"},"<MyCustomLeftComponent>")," will be rendered instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"leftComponent={{ icon: 'menu' }}"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Header leftComponent={{ icon: 'menu' }}>\n  <MyCustomLeftComponent />\n  <MyCustomCenterComponent />\n  <MyCustomRightComponent />\n</Header>\n")),(0,o.kt)("h3",{id:"header-customisability"},"Header customisability"),(0,o.kt)("p",null,"We wanted the Header to be as customisable as possible, so you are free to try\ndifferent combinations of props. For example, if you want to change the left,\ncenter, or right component's layout, you can adjust the ",(0,o.kt)("inlineCode",{parentName:"p"},"containerStyle")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Header\n  statusBarProps={{ barStyle: 'light-content' }}\n  barStyle=\"light-content\" // or directly\n  leftComponent={<MyCustomLeftComponent />}\n  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}\n  containerStyle={{\n    backgroundColor: '#3D6DCC',\n    justifyContent: 'space-around',\n  }}\n/>\n")),(0,o.kt)("hr",null),(0,o.kt)(i.default,{mdxType:"Props"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"lineargradient-usage"},"LinearGradient Usage"),(0,o.kt)("p",null,"Using LinearGradient in React Native Elements is supported through the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient"},"react-native-linear-gradient"),"\npackage. If you're using expo or create-react-native-app then you can use\n",(0,o.kt)("inlineCode",{parentName:"p"},"linearGradientProps")," prop right out the box with no additional setup."),(0,o.kt)("p",null,"For react-native-cli users, make sure to follow the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project"},"installation instructions"),"\nand use it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Header } from 'react-native-elements';\nimport LinearGradient from 'react-native-linear-gradient';\n\n...\n\n<Header\n  ViewComponent={LinearGradient} // Don't forget this!\n  linearGradientProps={{\n    colors: ['red', 'pink'],\n    start: { x: 0, y: 0.5 },\n    end: { x: 1, y: 0.5 },\n  }}\n/>\n")))}h.isMDXComponent=!0},26763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={},p=void 0,d={unversionedId:"props/header",id:"version-3.4.2/props/header",title:"header",description:"Props",source:"@site/versioned_docs/version-3.4.2/props/header.md",sourceDirName:"props",slug:"/props/header",permalink:"/docs/3.4.2/props/header",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/header.md",tags:[],version:"3.4.2",frontMatter:{}},m={},c=[{value:"Props",id:"props",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>backgroundColor</code>",id:"backgroundcolor",level:3},{value:"<code>backgroundImage</code>",id:"backgroundimage",level:3},{value:"<code>backgroundImageStyle</code>",id:"backgroundimagestyle",level:3},{value:"<code>elevated</code>",id:"elevated",level:3},{value:"<code>barStyle</code>",id:"barstyle",level:3},{value:"<code>centerComponent</code>",id:"centercomponent",level:3},{value:"<code>centerContainerStyle</code>",id:"centercontainerstyle",level:3},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>leftComponent</code>",id:"leftcomponent",level:3},{value:"<code>leftContainerStyle</code>",id:"leftcontainerstyle",level:3},{value:"<code>linearGradientProps</code>",id:"lineargradientprops",level:3},{value:"<code>placement</code>",id:"placement",level:3},{value:"<code>rightComponent</code>",id:"rightcomponent",level:3},{value:"<code>rightContainerStyle</code>",id:"rightcontainerstyle",level:3},{value:"<code>statusBarProps</code>",id:"statusbarprops",level:3},{value:"<code>ViewComponent</code>",id:"viewcomponent",level:3}],s={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#backgroundcolor"},(0,o.kt)("inlineCode",{parentName:"a"},"backgroundColor"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#backgroundimage"},(0,o.kt)("inlineCode",{parentName:"a"},"backgroundImage"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#backgroundimagestyle"},(0,o.kt)("inlineCode",{parentName:"a"},"backgroundImageStyle"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#barstyle"},(0,o.kt)("inlineCode",{parentName:"a"},"barStyle"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#centercomponent"},(0,o.kt)("inlineCode",{parentName:"a"},"centerComponent"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#centercontainerstyle"},(0,o.kt)("inlineCode",{parentName:"a"},"centerContainerStyle"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#containerstyle"},(0,o.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#leftcomponent"},(0,o.kt)("inlineCode",{parentName:"a"},"leftComponent"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#leftcontainerstyle"},(0,o.kt)("inlineCode",{parentName:"a"},"leftContainerStyle"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#lineargradientprops"},(0,o.kt)("inlineCode",{parentName:"a"},"linearGradientProps"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#placement"},(0,o.kt)("inlineCode",{parentName:"a"},"placement"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#elevated"},(0,o.kt)("inlineCode",{parentName:"a"},"elevated"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rightcomponent"},(0,o.kt)("inlineCode",{parentName:"a"},"rightComponent"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rightcontainerstyle"},(0,o.kt)("inlineCode",{parentName:"a"},"rightContainerStyle"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#statusbarprops"},(0,o.kt)("inlineCode",{parentName:"a"},"statusBarProps"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#viewcomponent"},(0,o.kt)("inlineCode",{parentName:"a"},"ViewComponent")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("h3",{id:"backgroundcolor"},(0,o.kt)("inlineCode",{parentName:"h3"},"backgroundColor")),(0,o.kt)("p",null,"sets backgroundColor of the parent component"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"string"),(0,o.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"backgroundimage"},(0,o.kt)("inlineCode",{parentName:"h3"},"backgroundImage")),(0,o.kt)("p",null,"sets backgroundImage for parent component"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"object (image)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"backgroundimagestyle"},(0,o.kt)("inlineCode",{parentName:"h3"},"backgroundImageStyle")),(0,o.kt)("p",null,"styling for backgroundImage in the main container"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"style"),(0,o.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"elevated"},(0,o.kt)("inlineCode",{parentName:"h3"},"elevated")),(0,o.kt)("p",null,"elevation for header"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"barstyle"},(0,o.kt)("inlineCode",{parentName:"h3"},"barStyle")),(0,o.kt)("p",null,"Sets the color of the status bar text."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"'default', 'light-content', 'dark-content'"),(0,o.kt)("td",{parentName:"tr",align:"center"},"'default' (",(0,o.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/statusbar.html#barstyle"},"source"),")")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"centercomponent"},(0,o.kt)("inlineCode",{parentName:"h3"},"centerComponent")),(0,o.kt)("p",null,"define your center component here"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"{ text: string, ",(0,o.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/text.html#props"},"...Text props"),"}",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"OR"),(0,o.kt)("br",null),"{ icon: string, ",(0,o.kt)("a",{parentName:"td",href:"/docs/3.4.2/props/icon#props"},"...Icon props"),"} ",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"OR"),(0,o.kt)("br",null)," React element or component"),(0,o.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"centercontainerstyle"},(0,o.kt)("inlineCode",{parentName:"h3"},"centerContainerStyle")),(0,o.kt)("p",null,"styling for container around the centerComponent"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"style"),(0,o.kt)("td",{parentName:"tr",align:"center"},"{ flex: 3 }")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"containerstyle"},(0,o.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,o.kt)("p",null,"styling around the main container"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"style"),(0,o.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"leftcomponent"},(0,o.kt)("inlineCode",{parentName:"h3"},"leftComponent")),(0,o.kt)("p",null,"define your left component here"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"{ text: string, ",(0,o.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/text.html#props"},"...Text props"),"}",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"OR"),(0,o.kt)("br",null),"{ icon: string, ",(0,o.kt)("a",{parentName:"td",href:"/docs/3.4.2/props/icon#props"},"...Icon props"),"} ",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"OR"),(0,o.kt)("br",null)," React element or component"),(0,o.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"leftcontainerstyle"},(0,o.kt)("inlineCode",{parentName:"h3"},"leftContainerStyle")),(0,o.kt)("p",null,"styling for container around the leftComponent"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"style"),(0,o.kt)("td",{parentName:"tr",align:"center"},"{ flex: 1 }")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"lineargradientprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"linearGradientProps")),(0,o.kt)("p",null,"displays a linear gradient. See ",(0,o.kt)("a",{parentName:"p",href:"#lineargradient-usage"},"usage"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"{",(0,o.kt)("a",{parentName:"td",href:"https://github.com/react-native-community/react-native-linear-gradient#additional-props"},"...Gradient props"),"}"),(0,o.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"placement"},(0,o.kt)("inlineCode",{parentName:"h3"},"placement")),(0,o.kt)("p",null,"Alignment for title"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"'left', 'center' or 'right'"),(0,o.kt)("td",{parentName:"tr",align:"center"},"'center'")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"rightcomponent"},(0,o.kt)("inlineCode",{parentName:"h3"},"rightComponent")),(0,o.kt)("p",null,"define your right component here"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"{ text: string, ",(0,o.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/text.html#props"},"...Text props"),"}",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"OR"),(0,o.kt)("br",null),"{ icon: string, ",(0,o.kt)("a",{parentName:"td",href:"/docs/3.4.2/props/icon#props"},"...Icon props"),"} ",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"OR"),(0,o.kt)("br",null)," React element or component"),(0,o.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"rightcontainerstyle"},(0,o.kt)("inlineCode",{parentName:"h3"},"rightContainerStyle")),(0,o.kt)("p",null,"styling for container around the rightComponent"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"style"),(0,o.kt)("td",{parentName:"tr",align:"center"},"{ flex: 1 }")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"statusbarprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"statusBarProps")),(0,o.kt)("p",null,"accepts all props for StatusBar"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"{ ",(0,o.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/statusbar.html#props"},"...StatusBar props")," }"),(0,o.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"viewcomponent"},(0,o.kt)("inlineCode",{parentName:"h3"},"ViewComponent")),(0,o.kt)("p",null,"component for container"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"React Native Component"),(0,o.kt)("td",{parentName:"tr",align:"center"},"ImageBackground")))))}k.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(n),k=r,u=s["".concat(p,".").concat(k)]||s[k]||c[k]||o;return n?a.createElement(u,l(l({ref:t},m),{},{components:n})):a.createElement(u,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);