(this["webpackJsonpreact-colors"]=this["webpackJsonpreact-colors"]||[]).push([[0],{329:function(e,a,t){},630:function(e,a,t){},633:function(e,a,t){},637:function(e,a,t){},638:function(e,a,t){},814:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(9),c=t.n(r),l=t(50),i=(t(329),t(52)),s=t(128),d=t(28),m=t(29),u=t(34),h=t(33),p=t(24),b=t(815),j=t(296),f=t.n(j),g=(t(330),t(3)),O=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).deletePalette=function(e){e.stopPropagation(),o.props.handleDelete(o.props.id)},o}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors,r=e.handleClick,c=n.map((function(e){return Object(g.jsx)("div",{className:a.miniColor,style:{backgroundColor:e.color}},e.name)}));return Object(g.jsxs)("div",{className:a.root,onClick:r,children:[Object(g.jsx)(f.a,{className:a.deleteIcon,onClick:this.deletePalette}),Object(g.jsx)("div",{className:a.colors,children:c}),Object(g.jsxs)("h5",{className:a.title,children:[t," ",Object(g.jsx)("span",{className:a.emoji,children:o})]})]})}}]),t}(o.Component),v=Object(b.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{transition:"0.2s",opacity:1}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},delete:{},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",heigh:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:10,opacity:0}})(O),x=(t(630),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(d.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).goToPalette=function(a){e.props.history.push("palette/".concat(a))},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,n=a.classes;return Object(g.jsx)("div",{className:"homepage "+n.root,children:Object(g.jsxs)("div",{className:n.container,children:[Object(g.jsxs)("nav",{className:n.nav,children:[Object(g.jsx)("h1",{children:"React Colors"}),Object(g.jsx)(l.b,{to:"/palette/new",children:"Create Palette"})]}),Object(g.jsx)("div",{className:n.palette,children:t.map((function(a){return Object(o.createElement)(v,Object(i.a)(Object(i.a)({},a),{},{handleClick:function(){return e.goToPalette(a.id)},handleDelete:e.props.deletePalette,key:a.id,id:a.id}))}))})]})})}}]),t}(o.Component)),C=Object(b.a)({root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center"},container:{width:"50%",display:"flex",alignItems:"flex-start",flexWrap:"wrap"},nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white",alignItems:"center","& a":{color:"white",textDecoration:"none"}},palette:{boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(4, 30%)",gridGap:"3%"}})(x),w=t(307),y=t(873),N=t(878),S=t(875),k=t(874),P=(t(632),t(633),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).handleChange=function(a){e.setState({format:a.target.value}),e.props.handleChange(a.target.value),e.setState({open:!0}),setTimeout((function(){e.setState({open:!1})}),1e3)},e.handleClose=function(e){console.log(e)},e.Alert=function(e){return Object(g.jsx)(k.a,Object(i.a)({elevation:6,variant:"filled"},e))},e.state={format:"hex",open:!1},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showLevel;return Object(g.jsxs)("header",{className:"Navbar",children:[Object(g.jsx)("div",{className:"logo",children:Object(g.jsx)(l.b,{to:"/",children:"reactcolorpicker"})}),o?Object(g.jsxs)("div",{className:"slider-container",children:[Object(g.jsxs)("span",{children:["Level: ",a]}),Object(g.jsx)("div",{className:"slider",children:Object(g.jsx)(w.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t})})]}):"",Object(g.jsx)("div",{className:"select-container",children:Object(g.jsxs)(y.a,{value:this.state.format,onChange:this.handleChange,children:[Object(g.jsx)(N.a,{value:"hex",children:"HEX - #fffff"}),Object(g.jsx)(N.a,{value:"rgb",children:"RGB - rgb(255, 255, 255)"}),Object(g.jsx)(N.a,{value:"rgba",children:"RGBA - rgba(255, 255, 255, 1.0)"})]})}),Object(g.jsx)(S.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,message:"successfull",onClose:this.handleClose,children:Object(g.jsxs)(this.Alert,{severity:"success",style:{backgroundColor:"#4c5561"},children:[" ","Format changed - ",this.state.format.toUpperCase()]})})]})}}]),t}(o.Component)),F=function(e){return Object(g.jsxs)("footer",{className:"Palette-footer",children:[Object(g.jsxs)("h1",{children:[e.paletteName," ",e.emoji]}),Object(g.jsx)("h2",{children:"\xa9 by Haris Iqbal, All rights reserved"})]})},B=t(301),A=t(83),I=t.n(A),D=(t(637),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).changeCopyState=function(){e.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1400)}))},e.state={copied:!1},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.paletteId,n=e.id,r=e.showLink,c=this.state.copied,i=I()(t).luminance()<=.08,s=I()(t).luminance()>=.6;return Object(g.jsx)(B.CopyToClipboard,{text:t,onCopy:this.changeCopyState,children:Object(g.jsxs)("div",{style:{background:t},className:"ColorBox",children:[Object(g.jsx)("div",{style:{background:t},className:"copy-overlay ".concat(c?"show":"")}),Object(g.jsxs)("div",{className:"copy-msg ".concat(c?"show":""),children:[Object(g.jsx)("h1",{className:"".concat(s&&"dark-text"),children:"copied"}),Object(g.jsx)("p",{className:"".concat(s&&"dark-text"),children:this.props.background})]}),Object(g.jsxs)("div",{className:"copy-container",children:[Object(g.jsx)("div",{className:"box-content",children:Object(g.jsx)("span",{className:"".concat(i&&"light-text"),children:a})}),Object(g.jsx)("button",{className:"copy-button ".concat(s&&"dark-text-forCopy"),children:"+"})]}),r?Object(g.jsxs)(l.b,{to:"/palette/".concat(o,"/").concat(n),onClick:function(e){return e.stopPropagation()},children:[Object(g.jsx)("span",{className:"see-more ".concat(s&&"dark-text"),children:"More"})," "]}):""]})})}}]),t}(o.Component)),E=(t(638),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).changeLevel=function(a){e.setState({level:a})},e.changeFormat=function(a){e.setState({format:a})},e.state={level:500,format:"hex"},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state,a=e.level,t=e.format,o=this.props.palette,n=o.colors,r=o.paletteName,c=o.emoji,l=o.id,i=n[a].map((function(e,a){return Object(g.jsx)(D,{showLink:!0,id:e.id,background:e[t],name:e.name,paletteId:l},e.id)}));return Object(g.jsxs)("div",{className:"Palette",children:[Object(g.jsx)(P,{level:a,changeLevel:this.changeLevel,handleChange:this.changeFormat,showLevel:!0}),Object(g.jsx)("div",{className:"Palette-colors",children:i}),Object(g.jsx)(F,{paletteName:r,emoji:c})]})}}]),t}(o.Component)),L=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).gatherShades=function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter((function(e){return e.id===a})));return t.slice(1)},o.changeFormat=function(e){o.setState({format:e})},o._shades=o.gatherShades(o.props.palette,o.props.colorId),o.state={format:"hex"},o}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=this._shades.map((function(a){return Object(g.jsx)(D,{name:a.name,background:a[e.state.format],showLink:!1},a.name)}));return Object(g.jsxs)("div",{className:"SingleColorPalette Palette",children:[Object(g.jsx)(P,{showLevel:!1,handleChange:this.changeFormat}),Object(g.jsxs)("div",{className:"Palette-colors",children:[a,Object(g.jsx)("div",{className:"go-back ColorBox",children:Object(g.jsx)(l.b,{to:"/palette/".concat(this.props.palette.id),className:"back-button",children:"GO BACK"})})]}),Object(g.jsx)(F,{paletteName:this.props.palette.paletteName,emoji:this.props.palette.emoji})]})}}]),t}(o.Component),G=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83d\udc96",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\udf89",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udf54",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83e\udded",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\udff3\u200d\ud83c\udf08",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\udf08",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\u2b50",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],R=t(51),M=t(208),T=t(7),U=t(871),q=t(876),W=t(312),H=t(872),V=t(858),z=t(306),J=t.n(z),Y=t(867),K=t(105),_=t(302),Q=t.n(_),X={root:{width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",marginBottom:"-3.5px"},boxContent:Object(R.a)({position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},"color","white"),deleteIcon:{position:"absolute",right:"0.5rem",top:"5px",color:"white",cursor:"pointer","&:hover":{transition:"0.1s",transform:"scale(1.2)",color:"black"},"&:active":{transition:"0.1s"}}},$=Object(K.b)((function(e){return Object(g.jsx)("div",{className:e.classes.root,style:{backgroundColor:e.color},children:Object(g.jsxs)("div",{className:e.classes.boxContent,children:[Object(g.jsx)("span",{children:e.name}),Object(g.jsx)(Q.a,{className:e.classes.deleteIcon,onClick:e.handleClick})]})})})),Z=Object(b.a)(X)($),ee=Object(K.a)((function(e){var a=e.colors,t=e.removeColor;return Object(g.jsx)("div",{style:{height:"100%"},children:a.colors.map((function(e,a){return Object(g.jsx)(Z,{index:a,color:e.color,name:e.name,handleClick:function(){return t(e.name)}},e.name)}))})})),ae=t(868),te=t(869),oe=t(870),ne=t(304),re=t.n(ne),ce=t(862),le=t(866),ie=t(864),se=t(865),de=t(863),me=t(77),ue=t(308),he=(t(649),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).handleClickOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1}),e.props.hideForm()},e.handlePaletteNameChange=function(a){e.setState(Object(R.a)({},a.target.name,a.target.value))},e.handlePaletteNameSubmit=function(a){e.setState({emojiPicker:!0,open:!1,newPaletteName:a})},e.handleFinalSubmit=function(a){e.props.handleSubmit(e.state.newPaletteName,a)},e.state={open:!0,newPaletteName:"",emojiPicker:!1},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;me.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))}))}},{key:"render",value:function(){var e=this,a=this.state.newPaletteName;return Object(g.jsxs)("div",{children:[Object(g.jsx)(ce.a,{open:this.state.emojiPicker,children:Object(g.jsx)(ue.a,{onSelect:function(a){return e.handleFinalSubmit(a.native)}})}),Object(g.jsxs)(ce.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title",children:[Object(g.jsx)(de.a,{id:"form-dialog-title",children:"Choose a Palette Name"}),Object(g.jsxs)(me.ValidatorForm,{onSubmit:function(){return e.handlePaletteNameSubmit(a)},children:[Object(g.jsxs)(ie.a,{children:[Object(g.jsx)(se.a,{children:"Please enter a name for your beautiful palette. Make sure it's unique."}),Object(g.jsx)(me.TextValidator,{label:"Palette Name",onChange:this.handlePaletteNameChange,value:a,name:"newPaletteName",margin:"normal",validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Palette Name Already Exists"]})]}),Object(g.jsxs)(le.a,{children:[Object(g.jsx)(Y.a,{onClick:this.handleClose,color:"primary",children:"Cancel"}),Object(g.jsx)(Y.a,{variant:"contained",color:"primary",type:"submit",children:"Save Palette"})]})]})]})]})}}]),t}(o.Component)),pe=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).handlePaletteNameChange=function(e){o.setState(Object(R.a)({},e.target.name,e.target.value))},o.showForm=function(){o.setState({formShowing:!0})},o.hideForm=function(){o.setState({formShowing:!1})},o.state={newPaletteName:"",formShowing:!1},o}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.handleDrawerOpen,n=e.handleSubmit;return Object(g.jsxs)("div",{className:a.root,children:[Object(g.jsx)(ae.a,{}),Object(g.jsxs)(te.a,{position:"fixed",color:"default",className:Object(T.a)(a.appBar,Object(R.a)({},a.appBarShift,t)),children:[Object(g.jsxs)(oe.a,{children:[Object(g.jsx)(V.a,{color:"inherit","aria-label":"open drawer",onClick:o,edge:"start",className:Object(T.a)(a.menuButton,t&&a.hide),children:Object(g.jsx)(re.a,{})}),Object(g.jsx)(W.a,{variant:"h6",noWrap:!0,children:"Create A Palette"})]}),Object(g.jsxs)("div",{className:a.navBtns,children:[Object(g.jsx)(Y.a,{className:a.headerButton,variant:"contained",color:"secondary",children:Object(g.jsx)(l.b,{style:{textDecoration:"none",color:"white"},to:"/",children:"GO Back"})}),Object(g.jsx)(Y.a,{className:a.headerButton,variant:"contained",color:"primary",onClick:this.showForm,children:"Save"})]})]}),this.state.formShowing&&Object(g.jsx)(he,{handleSubmit:n,palettes:this.props.palettes,hideForm:this.hideForm})]})}}]),t}(o.Component),be=t(305),je=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).updateCurrentColor=function(e){console.log(e),o.setState({currentColor:e.hex})},o.handleChange=function(e){o.setState(Object(R.a)({},e.target.name,e.target.value))},o.handleSubmit=function(){var e={color:o.state.currentColor,name:o.state.newName};o.props.addNewColors(e),o.setState({newName:"",currentColor:"teal"})},o.state={currentColor:"teal",newName:""},o}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;me.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.props.colors.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),me.ValidatorForm.addValidationRule("isColorUnique",(function(a){return e.props.colors.colors.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"render",value:function(){var e=this.props,a=e.isPaletteFull,t=e.classes,o=this.state.currentColor;return Object(g.jsxs)("div",{children:[Object(g.jsx)(be.ChromePicker,{color:o,onChangeComplete:this.updateCurrentColor,className:t.picker}),Object(g.jsxs)(me.ValidatorForm,{onSubmit:this.handleSubmit,children:[Object(g.jsx)(me.TextValidator,{value:this.state.newName,className:t.colorNameInput,onChange:this.handleChange,name:"newName",margin:"normal",placeholder:"Color Name",validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["this field is required","color name must be unique","color already exists"]}),Object(g.jsx)(Y.a,{variant:"contained",color:"primary",style:{backgroundColor:o},type:"submit",disabled:a,className:t.addColor,children:a?"Palette Full":"Add Colors"})]})]})}}]),t}(o.Component),fe=350,ge=Object(U.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(fe,"px)"),marginLeft:fe,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:fe,flexShrink:0},drawerPaper:{width:fe,display:"flex",alignItems:"center"},drawerHeader:Object(i.a)(Object(i.a)({display:"flex",alignItems:"center",width:"100%",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px) ",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-350},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},navBtns:{color:"black",marginRight:"1rem"},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"},picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"2rem",marginTop:"1rem",fontSize:"2rem",height:"4rem"},colorNameInput:{width:"100%",height:"40px"},headerButton:{margin:"0 0.5rem"}}})),Oe=function(e){var a=ge(),t=n.a.useState(!1),o=Object(M.a)(t,2),r=o[0],c=o[1],l=n.a.useState({colors:e.palettes[0].colors}),i=Object(M.a)(l,2),d=i[0],m=i[1];n.a.useEffect((function(){}));var u=d.colors.length>=20;return Object(g.jsxs)("div",{className:a.root,children:[Object(g.jsx)(pe,{open:r,classes:a,palettes:e.palettes,handleDrawerOpen:function(){c(!0)},handleSubmit:function(a,t){var o={paletteName:a,colors:d.colors,id:a.toLowerCase().replace(/ /g,"-"),emoji:t};e.savePalette(o),e.history.push("/")}}),Object(g.jsxs)(q.a,{className:a.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:a.drawerPaper},children:[Object(g.jsx)("div",{className:a.drawerHeader,children:Object(g.jsx)(V.a,{onClick:function(){c(!1)},children:Object(g.jsx)(J.a,{})})}),Object(g.jsx)(H.a,{}),Object(g.jsxs)("div",{className:a.container,children:[Object(g.jsx)(W.a,{variant:"h4",gutterBottom:!0,children:"Design Your Palette"}),Object(g.jsxs)("div",{className:a.buttons,children:[Object(g.jsx)(Y.a,{variant:"contained",color:"secondary",onClick:function(){m({colors:[]})},className:a.button,children:"Clear Palette"}),Object(g.jsx)(Y.a,{variant:"contained",color:"primary",disabled:u,onClick:function(){var a=e.palettes.map((function(e){return e.colors})).flat(),t=a[Math.floor(Math.random()*a.length)];m({colors:[].concat(Object(s.a)(d.colors),[t])})},className:a.button,children:"Random Color"})]}),Object(g.jsx)(je,{isPaletteFull:u,colors:d,classes:a,addNewColors:function(e){m({colors:[].concat(Object(s.a)(d.colors),[e])})}})]})]}),Object(g.jsxs)("main",{className:Object(T.a)(a.content,Object(R.a)({},a.contentShift,r)),children:[Object(g.jsx)("div",{className:a.drawerHeader}),Object(g.jsx)(ee,{colors:d,removeColor:function(e){m({colors:d.colors.filter((function(a){return a.name!==e}))})},axis:"xy",onSortEnd:function(e){var a=e.oldIndex,t=e.newIndex;m((function(e){var o=e.colors;return{colors:Object(K.c)(o,a,t)}}))}})]})]})},ve=t(207),xe=[50,100,200,300,400,500,600,700,800,900],Ce=function(e,a){return I.a.scale((t=e,[I()(t).darken(1.4).hex(),t,"#fff"])).mode("lab").colors(a);var t},we=function(e){var a,t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object(ve.a)(xe);try{for(o.s();!(a=o.n()).done;){var n=a.value;t.colors[n]=[]}}catch(d){o.e(d)}finally{o.f()}var r,c=Object(ve.a)(e.colors);try{for(c.s();!(r=c.n()).done;){var l=r.value,i=Ce(l.color,10).reverse();for(var s in i)t.colors[xe[s]].push({name:"".concat(l.name," ").concat(xe[s]),id:l.name.toLowerCase().replace(/ /g,"- "),hex:i[s],rgb:I()(i[s]).css(),rgba:I()(i[s]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(d){c.e(d)}finally{c.f()}return t},ye=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;Object(d.a)(this,t),(o=a.call(this,e)).findPalette=function(e){return o.state.palettes.find((function(a){return a.id===e}))},o.savePalette=function(e){o.setState({palettes:[].concat(Object(s.a)(o.state.palettes),[e])},o.syncLocalStorage)},o.deletePalette=function(e){o.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),o.syncLocalStorage)},o.syncLocalStorage=function(){window.localStorage.setItem("palettes",JSON.stringify(o.state.palettes))};var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||G},o}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return Object(g.jsxs)(p.c,{children:[Object(g.jsx)(p.a,{exact:!0,path:"/palette/new",render:function(a){return Object(g.jsx)(Oe,Object(i.a)(Object(i.a)({},a),{},{palettes:e.state.palettes,savePalette:e.savePalette}))}}),Object(g.jsx)(p.a,{exact:!0,path:"/",render:function(a){return Object(g.jsx)(C,Object(i.a)(Object(i.a)({palettes:e.state.palettes},a),{},{deletePalette:e.deletePalette}))}}),Object(g.jsx)(p.a,{exact:!0,path:"/palette/:id",render:function(a){return Object(g.jsx)(E,{palette:we(e.findPalette(a.match.params.id))})}}),Object(g.jsx)(p.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return Object(g.jsx)(L,{palette:we(e.findPalette(a.match.params.paletteId)),routeProps:a,colorId:a.match.params.colorId})}})]})}}]),t}(o.Component),Ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Se(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(g.jsx)(l.a,{children:Object(g.jsx)(ye,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");Ne?(!function(e,a){fetch(e).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Se(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Se(a,e)}))}}()}},[[814,1,2]]]);
//# sourceMappingURL=main.4f19d0f7.chunk.js.map