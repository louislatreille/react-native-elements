"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9822],{87686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var a=n(83117),i=n(80102),l=(n(67294),n(3905)),r=["components"],o={title:"React Native Elements 1.0",author:"Core Team",authorURL:"https://opencollective.com/react-native-elements#team"},p=void 0,m={permalink:"/blog/2019/01/27/1.0-release",source:"@site/blog/2019-01-27-1.0-release.md",title:"React Native Elements 1.0",description:"React Native Elements has UI elements that are easy to use & really customizable. It also has theming, platform specific search bars, React Native Web support, and much more.",date:"2019-01-27T00:00:00.000Z",formattedDate:"January 27, 2019",tags:[],readingTime:7.64,truncated:!1,authors:[{name:"Core Team",url:"https://opencollective.com/react-native-elements#team"}],frontMatter:{title:"React Native Elements 1.0",author:"Core Team",authorURL:"https://opencollective.com/react-native-elements#team"},prevItem:{title:"Version 2.3 Upgrade Guide",permalink:"/blog/2020/08/10/2.3-upgrade-guide"},nextItem:{title:"React Native Web",permalink:"/blog/2018/12/13/react-native-web"}},s={authorsImageUrls:[void 0]},d=[{value:"Installation",id:"installation",level:2},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"<code>Avatar</code>",id:"avatar",level:3},{value:"<code>Badge</code>",id:"badge",level:3},{value:"<code>Button</code>",id:"button",level:3},{value:"<code>ButtonGroup</code>",id:"buttongroup",level:3},{value:"<code>Card</code>",id:"card",level:3},{value:"<code>Form</code>",id:"form",level:3},{value:"<code>Header</code>",id:"header",level:3},{value:"<code>SearchBar</code>",id:"searchbar",level:3},{value:"<code>List</code>",id:"list",level:3},{value:"<code>ListItem</code>",id:"listitem",level:3},{value:"<code>PricingCard</code>",id:"pricingcard",level:3},{value:"<code>Text</code>",id:"text",level:3},{value:"New features",id:"new-features",level:2},{value:"Assorted fixes &amp; improvements",id:"assorted-fixes--improvements",level:2},{value:"Ecosystem and web support",id:"ecosystem-and-web-support",level:2},{value:"Independent Projects",id:"independent-projects",level:3},{value:"Web Support",id:"web-support",level:3}],u={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"React Native Elements has UI elements that are easy to use & really customizable. It also has theming, platform specific search bars, ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/necolas/react-native-web"},"React Native Web")," support, and much more.")),(0,l.kt)("p",null,"It's finally here! Let's put our hands together and welcome React Native Elements 1.0 \ud83c\udf89"),(0,l.kt)("p",null,"This release is centered around making RNE components that everyone loves more intuitive to use & stable. This is not to say that all the work is done, but this is definitely a giant leap in the right direction and one that we have been working on for over a year."),(0,l.kt)("p",null,"I want like to say thank you to our users for using RNE and giving us feedback through issues on the repo and also the contributors who have the taken time to contribute and help improve RNE together. Finally, I'd like to say a big thanks to ",(0,l.kt)("a",{parentName:"p",href:"https://twitter.com/roach_iam"},"Kyle Roach")," and ",(0,l.kt)("a",{parentName:"p",href:"https://twitter.com/xaviervllgr"},"Xavier Villel\xe9gier")," without whom this project would not have been as awesome as it is today!!"),(0,l.kt)("p",null,"This blog post is meant to serve as a migration guide for upgrading to ",(0,l.kt)("inlineCode",{parentName:"p"},'react-native-elements: "^1.0.0"')," from ",(0,l.kt)("inlineCode",{parentName:"p"},"0.19.1")," and also a way to document and share all the breaking changes, new features and other improvements in this release. For those updating from ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0.0-beta7")," you can view those release notes ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-elements/react-native-elements/releases/tag/v1.0.0"},"here"),"."),(0,l.kt)("p",null,"The wait is over!! Get excited, cause we certainly are. 14K \ud83c\udf1f and counting..."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"First, install the library using your favorite package manager: ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn add react-native-elements")),(0,l.kt)("p",null,"Also if you are using an older version, just update the ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native-elements")," version in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"^1.0.0")),(0,l.kt)("h2",{id:"breaking-changes"},"Breaking changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Updated all components that have the ",(0,l.kt)("inlineCode",{parentName:"p"},"component")," prop to ",(0,l.kt)("inlineCode",{parentName:"p"},"Component")," prop as per convention (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-elements/react-native-elements/pull/1479"},"#1479"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Some colors have been removed from the colors file and some changed. Here's the list of colors from 0.19.1."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  primary: '#9E9E9E',\n  primary1: '#4d86f7',\n  primary2: '#6296f9',\n  secondary: '#8F0CE8',\n  secondary2: '#00B233',\n  secondary3: '#00FF48',\n  grey0: '#393e42',\n  grey1: '#43484d',\n  grey2: '#5e6977',\n  grey3: '#86939e',\n  grey4: '#bdc6cf',\n  grey5: '#e1e8ee',\n  dkGreyBg: '#232323',\n  greyOutline: '#bbb',\n  searchBg: '#303337',\n  disabled: '#dadee0',\n  white: '#ffffff',\n  error: '#ff190c',\n};\n")),(0,l.kt)("h3",{id:"avatar"},(0,l.kt)("inlineCode",{parentName:"h3"},"Avatar")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Props ",(0,l.kt)("inlineCode",{parentName:"li"},"small"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"medium"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"large"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"xlarge")," have been removed. Usage is now ",(0,l.kt)("inlineCode",{parentName:"li"},'size="small"')," etc. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1098"},"#1098"))),(0,l.kt)("h3",{id:"badge"},(0,l.kt)("inlineCode",{parentName:"h3"},"Badge")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wrapperStyle")," prop has been removed - use ",(0,l.kt)("inlineCode",{parentName:"li"},"containerStyle")," prop instead (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1545"},"#1545"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"badgeStyle")," prop replaces previous behaviour of ",(0,l.kt)("inlineCode",{parentName:"li"},"containerStyle")," prop (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1545"},"#1545"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"element")," prop which was undocumented is removed - use ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," prop instead (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1545"},"#1545"),")"),(0,l.kt)("li",{parentName:"ul"},"can no longer render children - instead use ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," prop which now supports rendering react components (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1545"},"#1545"),")")),(0,l.kt)("h3",{id:"button"},(0,l.kt)("inlineCode",{parentName:"h3"},"Button")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"By default on Android there's no more elevation (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1538"},"#1538"),"). To get elevation, use the ",(0,l.kt)("inlineCode",{parentName:"li"},"raised")," prop."),(0,l.kt)("li",{parentName:"ul"},"Renamed ",(0,l.kt)("inlineCode",{parentName:"li"},"textStyle")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"titleStyle")),(0,l.kt)("li",{parentName:"ul"},"Renamed ",(0,l.kt)("inlineCode",{parentName:"li"},"containerViewStyle")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"containerStyle")),(0,l.kt)("li",{parentName:"ul"},"Removed props ",(0,l.kt)("inlineCode",{parentName:"li"},"transparent")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"outline")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1540"},"#1540"),"). Instead use the ",(0,l.kt)("inlineCode",{parentName:"li"},"type")," prop.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'// Transparent\n<Button type="clear" />\n\n// Outline\n<Button type="outline" />\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Removed props ",(0,l.kt)("inlineCode",{parentName:"li"},"secondary"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"secondary2"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"secondary3"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"primary1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"primary2"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"backgroundColor"),". Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"buttonStyle")," prop to set the background color."),(0,l.kt)("li",{parentName:"ul"},"Removed ",(0,l.kt)("inlineCode",{parentName:"li"},"iconComponent")," prop. If you want to use a different Icon component - the ",(0,l.kt)("inlineCode",{parentName:"li"},"icon")," prop supports custom elements."),(0,l.kt)("li",{parentName:"ul"},"Removed ",(0,l.kt)("inlineCode",{parentName:"li"},"loadingRight")," prop. Loading indicator ",(0,l.kt)("strong",{parentName:"li"},"displays without title"),". May re-add in future."),(0,l.kt)("li",{parentName:"ul"},"Removed ",(0,l.kt)("inlineCode",{parentName:"li"},"borderRadius")," prop. To control the border radius use the ",(0,l.kt)("inlineCode",{parentName:"li"},"buttonStyle")," prop."),(0,l.kt)("li",{parentName:"ul"},"Removed props ",(0,l.kt)("inlineCode",{parentName:"li"},"color"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"fontSize"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"fontWeight"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"fontFamily"),". Instead use the ",(0,l.kt)("inlineCode",{parentName:"li"},"titleStyle")," prop to set attributes for the title."),(0,l.kt)("li",{parentName:"ul"},"Removed ",(0,l.kt)("inlineCode",{parentName:"li"},"large")," prop. May re-add in future.")),(0,l.kt)("h3",{id:"buttongroup"},(0,l.kt)("inlineCode",{parentName:"h3"},"ButtonGroup")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"disableSelected")," prop has been removed (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1587"},"#1587"),")")),(0,l.kt)("h3",{id:"card"},(0,l.kt)("inlineCode",{parentName:"h3"},"Card")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fontFamily")," prop is deprecated - instead use ",(0,l.kt)("inlineCode",{parentName:"li"},"titleStyle")," prop (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1587"},"#1659"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"flexDirection")," prop is deprecated - instead use ",(0,l.kt)("inlineCode",{parentName:"li"},"wrapperStyle")," prop (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1587"},"#1659"),")")),(0,l.kt)("h3",{id:"form"},(0,l.kt)("inlineCode",{parentName:"h3"},"Form")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"FormInput")," been renamed to ",(0,l.kt)("inlineCode",{parentName:"p"},"Input")," (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-elements/react-native-elements/pull/497"},"#497"),")"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clearText")," method renamed to ",(0,l.kt)("inlineCode",{parentName:"li"},"clear")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"textInputRef")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"containerRef")," props removed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"normalizeFontSize")," prop removed. You can use the ",(0,l.kt)("inlineCode",{parentName:"li"},"normalize")," helper along with the ",(0,l.kt)("inlineCode",{parentName:"li"},"inputStyle")," prop to normalize font sizes."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"FormLabel")," has been removed. This is now built into the ",(0,l.kt)("inlineCode",{parentName:"p"},"Input")," component by use of ",(0,l.kt)("inlineCode",{parentName:"p"},"label")," prop. Props ",(0,l.kt)("inlineCode",{parentName:"p"},"labelStyle")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"labelProps")," can be used to customize it.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"FormValidationMessage")," has been removed. This is now built into the ",(0,l.kt)("inlineCode",{parentName:"p"},"Input")," component by use of ",(0,l.kt)("inlineCode",{parentName:"p"},"errorMessage")," prop. Props ",(0,l.kt)("inlineCode",{parentName:"p"},"errorStyle")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"errorProps")," can be used to customize it."))),(0,l.kt)("h3",{id:"header"},(0,l.kt)("inlineCode",{parentName:"h3"},"Header")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Props ",(0,l.kt)("inlineCode",{parentName:"li"},"innerContainerStyles"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"outerContainerStyles")," removed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1221"},"#1221"),". Instead use the ",(0,l.kt)("inlineCode",{parentName:"li"},"containerStyle")," prop for main styling, along with props ",(0,l.kt)("inlineCode",{parentName:"li"},"leftContainerStyle"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"centerContainerStyle"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"rightContainerStyle")," when needed.")),(0,l.kt)("h3",{id:"searchbar"},(0,l.kt)("inlineCode",{parentName:"h3"},"SearchBar")),(0,l.kt)("p",null,"SearchBar now supports different platform styles! To get an iOS or Android themed SearchBar, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"platform")," prop. ",(0,l.kt)("inlineCode",{parentName:"p"},'platform="ios"')," or ",(0,l.kt)("inlineCode",{parentName:"p"},'platform="android"')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"noIcon")," prop removed. Instead to remove the search icon use the ",(0,l.kt)("inlineCode",{parentName:"li"},"searchIcon")," prop. E.g ",(0,l.kt)("inlineCode",{parentName:"li"},"searchIcon={null}")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"showLoadingIcon")," prop renamed to ",(0,l.kt)("inlineCode",{parentName:"li"},"showLoading")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/837"},"#837")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"containerRef")," prop removed")),(0,l.kt)("h3",{id:"list"},(0,l.kt)("inlineCode",{parentName:"h3"},"List")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"List")," component has been removed!")," ",(0,l.kt)("inlineCode",{parentName:"li"},"List")," was just a regular React Native View with some small margin styles. It wasn't actually needed to use the ",(0,l.kt)("inlineCode",{parentName:"li"},"ListItem")," component. Instead we recommend using the ",(0,l.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/flatlist"},(0,l.kt)("inlineCode",{parentName:"a"},"FlatList"))," or ",(0,l.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/sectionlist"},(0,l.kt)("inlineCode",{parentName:"a"},"SectionList"))," components from React Native which function both as Views and also displaying items, pull to refresh and more."),(0,l.kt)("li",{parentName:"ul"},"If you want to apply the same styles that the ",(0,l.kt)("inlineCode",{parentName:"li"},"List")," component provided prior to 1.0, ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/issues/1565#issuecomment-436982251"},"see this comment"),".")),(0,l.kt)("h3",{id:"listitem"},(0,l.kt)("inlineCode",{parentName:"h3"},"ListItem")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"leftIconOnPress"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"leftIconOnLongPress"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"leftIconUnderlayColor"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"leftIconContainerStyle"),", removed. The ",(0,l.kt)("inlineCode",{parentName:"li"},"leftIcon")," prop can accept props.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<ListItem\n  title=\"Yea\"\n  leftIcon={{ name: 'home', onPress: () => alert('hello') }}\n/>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"avatar"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"avatarStyle"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"avatarContainerStyle"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"roundAvatar"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"avatarOverlayContainerStyle")," removed. Avatars can now be customized using the ",(0,l.kt)("inlineCode",{parentName:"li"},"rightAvatar")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"leftAvatar")," props which can either render a custom element or an object that describes the props from Avatar.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<ListItem\n  leftAvatar={{\n    title: 'MD',\n    rounded: false,\n    containerStyle: { margin: 5 },\n    onPress: () => alert('hey'),\n  }}\n  rightAvatar={{ title: 'DW', onLongPress: () => alert('hey') }}\n/>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wrapperStyle")," prop removed. Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"containerStyle")," prop instead."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"titleNumberOfLines"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"subtitleNumberOfLines"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"rightTitleNumberOfLines")," props removed. Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"titleProps"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"rightTitleProps"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"subtitleProps")," props to pass props for each..")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<ListItem titleProps={{ numberOfLines: 4 }} />\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hideChevron")," removed. Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"chevron")," prop instead. However, the behaviour is swapped ",(0,l.kt)("inlineCode",{parentName:"li"},"hideChevron={true}")," behaves like ",(0,l.kt)("inlineCode",{parentName:"li"},"chevron={false}")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chevronColor")," removed. The ",(0,l.kt)("inlineCode",{parentName:"li"},"chevron")," prop now can accept an object describing it's appearance.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<ListItem chevron={{ color: 'pink' }} />\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fontFamily")," removed. Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"titleStyle")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"subTitleStyle")," props to set change the text styling"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"titleContainerStyle")," removed. Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"titleStyle")," prop instead."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rightTitleContainerStyle")," removed. Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"rightTitleStyle")," prop instead."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"subtitleContainerStyle")," removed. Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"subtitleStyle")," prop instead."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"label")," prop removed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"switchButton"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"onSwitch"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"switchDisabled"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"switchOnTintColor"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"switchThumbTintColor"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"switchTintColor"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"switched")," removed. Instead use the ",(0,l.kt)("inlineCode",{parentName:"li"},"switch")," prop wich accepts an object describing its props."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"textInput"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputAutoCapitalize"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputAutoCorrect"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputAutoFocus"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputEditable"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputKeyboardType"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputMaxLength"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputMultiline"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputOnChangeText"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputOnFocus"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputOnBlur"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputSelectTextOnFocus"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputReturnKeyType"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputValue"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputSecure"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputStyle"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputContainerStyle"),",",(0,l.kt)("inlineCode",{parentName:"li"},"textInputPlaceholder")," removed. We now expose a single ",(0,l.kt)("inlineCode",{parentName:"li"},"input")," prop which accepts an object describing its props."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"onPressRightIcon")," removed. Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"rightIcon")," prop which can accept an object now describing its props.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<ListItem rightIcon={{ name: 'home', onPress: () => console.log('clicked') }} />\n")),(0,l.kt)("h3",{id:"pricingcard"},(0,l.kt)("inlineCode",{parentName:"h3"},"PricingCard")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"titleFont")," removed. Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"titleStyle")," prop instead to customize the title. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1231"},"#1231")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pricingFont")," removed. Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"pricingStyle")," prop instead to customize the price. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1231"},"#1231")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"infoFont")," removed. Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"infoStyle")," prop instead to customize the info. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1231"},"#1231")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"buttonFont")," removed. Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"button")," prop with a ",(0,l.kt)("inlineCode",{parentName:"li"},"buttonStyle")," key to set this.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<PricingCard button={{ buttonStyle: { fontFamily: 'Arial' } }} />\n")),(0,l.kt)("h3",{id:"text"},(0,l.kt)("inlineCode",{parentName:"h3"},"Text")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fontFamily")," prop is removed - instead use ",(0,l.kt)("inlineCode",{parentName:"li"},"style")," prop (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1587"},"#1659"),")")),(0,l.kt)("h2",{id:"new-features"},"New features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Support for React Native Web - read more on it ",(0,l.kt)("a",{parentName:"li",href:"/blog/2018/12/13/react-native-web"},"here")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1664"},"#1664"),")"),(0,l.kt)("li",{parentName:"ul"},"Theming support across components - easily build light & dark modes and theme your components from one place (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1454"},"#1454"),")"),(0,l.kt)("li",{parentName:"ul"},"New ",(0,l.kt)("inlineCode",{parentName:"li"},"<Image />")," Component - displays images with a placeholder and smooth image load transitioning (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1582"},"#1582"),")"),(0,l.kt)("li",{parentName:"ul"},"New ",(0,l.kt)("inlineCode",{parentName:"li"},"<Input />")," Component - a branch new and improved replacement for ",(0,l.kt)("inlineCode",{parentName:"li"},"<FormInput />")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/497"},"#497"),")"),(0,l.kt)("li",{parentName:"ul"},"New ",(0,l.kt)("inlineCode",{parentName:"li"},"withBadge")," HOC allows you to easily add badges to icons and other components (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1604"},"#1604"),")"),(0,l.kt)("li",{parentName:"ul"},'New "mini badge" with the ',(0,l.kt)("inlineCode",{parentName:"li"},"<Badge />")," component - Perfect for status indicators and notifications ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1545"},"#1545")),(0,l.kt)("li",{parentName:"ul"},"New Tap Rating ",(0,l.kt)("inlineCode",{parentName:"li"},"<AirbnbRating />")," component - powered by ",(0,l.kt)("inlineCode",{parentName:"li"},"react-native-ratings")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1671"},"#1671"),")"),(0,l.kt)("li",{parentName:"ul"},"Platform-specific ",(0,l.kt)("inlineCode",{parentName:"li"},"<SearchBar />")," component - drop-in usage with native look and feel (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/837"},"#837"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<Slider />")," Component - supports ",(0,l.kt)("inlineCode",{parentName:"li"},"vertical")," orientation (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1698"},"#1698"),")"),(0,l.kt)("li",{parentName:"ul"},"Button types! Easily have solid, clear, and outline buttons with one prop. (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1540"},"#1540"),")"),(0,l.kt)("li",{parentName:"ul"},"Background image support in the ",(0,l.kt)("inlineCode",{parentName:"li"},"<Header />")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1556"},"#1556"),")"),(0,l.kt)("li",{parentName:"ul"},"Add support for ",(0,l.kt)("inlineCode",{parentName:"li"},"AntDesign")," icons (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1529"},"#1529"),")")),(0,l.kt)("h2",{id:"assorted-fixes--improvements"},"Assorted fixes & improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated ",(0,l.kt)("inlineCode",{parentName:"li"},"react-native-vector-icons")," peerDependency to ",(0,l.kt)("inlineCode",{parentName:"li"},">4.2.0")),(0,l.kt)("li",{parentName:"ul"},"Expose ",(0,l.kt)("inlineCode",{parentName:"li"},"helpers")," methods that are used internally"),(0,l.kt)("li",{parentName:"ul"},"Close to 100% types coverage"),(0,l.kt)("li",{parentName:"ul"},"Docs",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Add descriptions for every Component (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1527"},"#1527"),")"),(0,l.kt)("li",{parentName:"ul"},"Add central place to show supported icon sets (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1532"},"#1532"),")"),(0,l.kt)("li",{parentName:"ul"},"Added Showcase section to display apps using RNE (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/1704"},"#1704"),")")))),(0,l.kt)("h2",{id:"ecosystem-and-web-support"},"Ecosystem and web support"),(0,l.kt)("h3",{id:"independent-projects"},"Independent Projects"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mock iOS Settings Screen - Check it out on the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Monte9/react-native-elements-app"},"RNE-App here"))),(0,l.kt)("h3",{id:"web-support"},"Web Support"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Follow ",(0,l.kt)("a",{parentName:"li",href:"/blog/2018/12/13/react-native-web"},"this detailed Blog Post")," to use RNElements with RNWeb")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Lastly, here is the RNE v1 release in numbers:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"470 commits (with over 272 PR's)"),(0,l.kt)("li",{parentName:"ul"},"371 files changes (52,920 additions and 32,737 deletions)"),(0,l.kt)("li",{parentName:"ul"},"Over 80 contributors"),(0,l.kt)("li",{parentName:"ul"},"Over \\$1500 awarded to contributors"))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Thanks for reading! Feel free to share this post if you enjoyed reading it."),(0,l.kt)("p",null,"If you run into any trouble using RNE, please open a new issue ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-elements/react-native-elements/issues"},"here"),". Also if you want to support us, you can contribute to our Open Collective ",(0,l.kt)("a",{parentName:"p",href:"https://opencollective.com/react-native-elements"},"here"),"."))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=i,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(k,r(r({ref:t},s),{},{components:n})):a.createElement(k,r({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);