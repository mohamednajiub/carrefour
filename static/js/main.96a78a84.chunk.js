(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(15),i=a.n(r),c=(a(72),a(73),a(3)),o=a(4),s=a(6),u=a(5),m=a(7),d=(a(74),a(40)),p=a.n(d),_=a(22),h={paymentMethods:{name:"Payment Methods",source:"./images/paymentMethods.png"},logos:{carrfour:{name:"Carrfour",source:"./images/carrfourLogo.png"},nasNav:{name:"NasNav",source:"./images/nasnavLogo.png"}}},g=[{label:"All Categories",value:"allCategories"},{label:"Fresh Food",value:"freshFood"},{label:"Drinks",value:"drinks"},{label:"Baby",value:"baby"}],E=[{source:"./images/carousel/image(1).png",title:"FAST FOOD ON CARREFOUR HERE NOW",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",link:"/link"},{source:"./images/carousel/image(2).png",title:"FAST FOOD ON CARREFOUR HERE NOW",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",link:"/link"}],b=[{source:"./images/slider/phone.png",title:"Smart Phone",link:"/smart-phone"},{source:"./images/slider/baby.png",title:"Baby World",link:"/baby-world"},{source:"./images/slider/healthfood.png",title:"Healthe Food",link:"/health-food"},{source:"./images/slider/tv.png",title:"Smart TV'S",link:"/smart-tvs"},{source:"./images/slider/supermarket.png",title:"Super Market",link:"/super-market"},{source:"./images/slider/water.png",title:"Pepsi Water",link:"/pepsi-water"}],f=[{place:"City Stars",link:"/city-stars",source:"./images/branches/branch(1).png"},{place:"City Stars",link:"/city-stars",source:"./images/branches/branch(2).png"},{place:"City Stars",link:"/city-stars",source:"./images/branches/branch(3).png"},{place:"City Stars",link:"/city-stars",source:"./images/branches/branch(4).png"}],v=[{productName:"Pampers Premiun Core New",source:"./images/hotDeals/hotdeal(1).png",price:"199$",sale:"50%",lastUpdate:"2019/01/01",category:{slug:"baby-world",title:"Baby World"}},{productName:"Pampers Premiun Core New",source:"./images/hotDeals/hotdeal(2).png",price:"199$",sale:"50%",lastUpdate:"2019/01/01",category:{slug:"home",title:"Home"}},{productName:"Pampers Premiun Core New",source:"./images/hotDeals/hotdeal(3).png",price:"199$",sale:"50%",lastUpdate:"2019/01/01",category:{slug:"smart-phones",title:"Smart Phones"}},{productName:"Pampers Premiun Core New",source:"./images/hotDeals/hotdeal(4).png",price:"199$",sale:"50%",lastUpdate:"2019/01/01",category:{slug:"smart-phones",title:"Smart Phones"}}],N=[{title:"Sports Products",source:"./images/productsCollections/sports.png",link:"/sports-products"},{title:"Food Products",source:"./images/productsCollections/food.png",link:"/food-products"},{title:"Smart Products",source:"./images/productsCollections/smart.png",link:"/smart-products"}],S=a(32),y=a(57),k=a(12),C=a(41),I=a.n(C),O=function(e){return l.a.createElement("li",{className:I.a.NavigationItem},l.a.createElement(k.c,{to:e.link,exact:e.exact,activeClassName:I.a.active},e.children))},P=function(e){return l.a.createElement("nav",null,l.a.createElement("ul",{className:[e.className,y.NavigationItems].join(" ")},e.linksItems.map(function(e,t){return l.a.createElement(O,{key:t,link:e.link},e.icon,e.title)})))},j=a(13),B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedOption:{label:"EGP",value:"egp"},currencies:[{label:"EGP",value:"egp"},{label:"USD",value:"usd"},{label:"EUR",value:"eur"}],linksItems:[{link:"/stores",title:"Stores",icon:l.a.createElement(j.d,null)},{link:"/works-time",title:"Works Time",icon:l.a.createElement(j.a,null)},{link:"/contact-us",title:"Contact us",icon:l.a.createElement(j.b,null)}]},a.handleChange=function(e){a.setState({selectedOption:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:_.InformationHeader},l.a.createElement("div",{className:_.RightSection},l.a.createElement("img",{src:h.paymentMethods.source,alt:h.paymentMethods.name}),l.a.createElement(S.a,{value:this.state.selectedOption,onChange:this.handleChange,options:this.state.currencies,className:_.Select})),l.a.createElement(P,{linksItems:this.state.linksItems,className:_.InformationNav}))}}]),t}(n.Component),w=a(11),D=a(58),L=function(e){return l.a.createElement("div",{className:D.Logo,style:{height:e.height}},l.a.createElement("img",{src:e.source,alt:e.name}))},x=a(14),T=a(43),A=a.n(T),F=function(e){return l.a.createElement("button",{type:e.type,className:[A.a.Button,A.a[e.btnType],e.className].join(" "),onClick:e.clicked,disabled:e.disabled},e.children)},R=a(8),M=a(62),U=function(e){return l.a.createElement(k.b,{to:e.Link,className:[e.className,M.Button].join(" ")},e.children)},H=a(63),W=function(e){return l.a.createElement("div",{className:[e.className,H.Button].join(" ")},e.numberOfNotifications)},q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={selectedCategory:{label:"All Categories",value:"allCategories"}},a.handleChange=function(e){a.setState({selectedCategory:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:w.Actions},l.a.createElement(L,{source:h.logos.carrfour.source,name:h.logos.carrfour.title}),l.a.createElement("div",{className:w.SearchSection},l.a.createElement(S.a,{value:this.state.selectedCategory,onChange:this.handleChange,options:g,className:w.Categories,styles:{control:function(){return{width:200,display:"flex",border:"1px solid #ccc",borderRadius:"5px",borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0,height:"35px"}}}}),l.a.createElement(x.d,{enableReinitialize:!0,initialValues:{search:""},render:function(e){return l.a.createElement(x.c,{className:w.SearchForm},l.a.createElement("div",{className:w.Input},l.a.createElement(x.b,{type:"search",id:"search",name:"search",placeholder:"Search",className:w.InputElement}),l.a.createElement(x.a,{name:"search"})),l.a.createElement(F,{className:w.Submit,type:"submit",btnType:"Default",disabled:e.isSubmitting},l.a.createElement(j.e,null)))}})),l.a.createElement("div",{className:w.ButtonsSection},l.a.createElement(U,{Link:"/cart"},l.a.createElement(j.g,null)),l.a.createElement(W,{numberOfNotifications:5,className:w.Notifications}),l.a.createElement(U,{Link:"/login",className:w.Login},l.a.createElement(R.i,null),"Login")))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={linksItems:[{link:"/smart-phone",title:"Smart Phone",icon:l.a.createElement(j.c,null)},{link:"/super-market",title:"Super Market",icon:l.a.createElement(j.f,null)},{link:"/babys",title:"Babys",icon:l.a.createElement(R.e,null)},{link:"/girls",title:"Girls",icon:l.a.createElement(R.g,null)},{link:"/health-care",title:"Health Care",icon:l.a.createElement(R.d,null)},{link:"/baby-world",title:"Baby World",icon:l.a.createElement(R.b,null)},{link:"/clothes",title:"Clothes",icon:l.a.createElement(R.h,null)},{link:"/food",title:"Food",icon:l.a.createElement(R.f,null)}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("div",{className:p.a.Toolbar},l.a.createElement("div",{className:"container"},l.a.createElement(B,null))),l.a.createElement("div",{className:"container"},l.a.createElement(q,null),l.a.createElement("div",{className:"MainNav"},l.a.createElement(P,{linksItems:this.state.linksItems,className:p.a.MainNav}))))}}]),t}(n.Component),V=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(z,null),l.a.createElement("main",null,this.props.children))}}]),t}(n.Component),G=a(31),J=a.n(G),Y=(a(52),a(53),a(18)),K=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,autoplay:!0,autoplaySpeed:5e3,slidesToScroll:1,accessibility:!1,arrows:!1,pauseOnHover:!0,dotsClass:["slick-dots",Y.Dots].join(" ")};return l.a.createElement("div",{className:Y.Slider},l.a.createElement(J.a,e,E.map(function(e,t){return l.a.createElement("div",{key:t,className:Y.Slide},l.a.createElement("img",{src:e.source,alt:e.title}),e.title||e.details?l.a.createElement("div",{className:Y.Overlay},l.a.createElement("h2",null,e.title),l.a.createElement("p",null,e.details),e.link?l.a.createElement(U,{Link:e.link,className:Y.SliderLink},l.a.createElement(R.a,null)):null):null)})))}}]),t}(n.Component),$=a(44),Q=a(64),X=function(e){return l.a.createElement("div",{className:[e.className,Q.Titles].join(" ")},l.a.createElement("h3",null,e.title),l.a.createElement("h4",null,e.subtitle))},Z=a(34),ee=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:Z.Slider},l.a.createElement(J.a,{dots:!1,infinite:!0,speed:1e3,slidesToShow:6,autoplay:!0,autoplaySpeed:5e3,slidesToScroll:1,accessibility:!1,arrows:!1,pauseOnHover:!0},b.map(function(e,t){return l.a.createElement("div",{key:t,className:Z.Slide},l.a.createElement("div",{className:Z.ImageContainer},l.a.createElement("img",{src:e.source,alt:e.title})),l.a.createElement("h3",null,e.title))})))}}]),t}(n.Component),te=a(45),ae=function(e){return l.a.createElement("div",{className:te.Label},l.a.createElement(U,{className:te.Icon},e.icon),l.a.createElement("div",null,l.a.createElement("h4",null,e.title),l.a.createElement("h5",null,e.subtitle)))},ne=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={categories:[{icon:l.a.createElement(R.c,null),title:"free shipping",subtitle:"while not exectly line"},{icon:l.a.createElement(R.c,null),title:"free shipping",subtitle:"while not exectly line"},{icon:l.a.createElement(R.c,null),title:"free shipping",subtitle:"while not exectly line"},{icon:l.a.createElement(R.c,null),title:"free shipping",subtitle:"while not exectly line"}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:$.Categories},l.a.createElement("div",{className:"container"},l.a.createElement(X,{title:"shopping by category",subtitle:"online shopping for everything"}),l.a.createElement(ee,null),l.a.createElement("div",{className:$.IconCategories},this.state.categories.map(function(e){return l.a.createElement(ae,{icon:e.icon,title:e.title,subtitle:e.subtitle})}))))}}]),t}(n.Component),le=a(35),re=a(46),ie=function(e){return l.a.createElement(k.b,{to:e.link,className:re.Branch},l.a.createElement("img",{src:e.source,alt:e.place}),l.a.createElement("div",{className:re.Overlay},l.a.createElement("h4",null,e.place)))},ce=function(){return l.a.createElement("div",{className:le.BranchesContainer},l.a.createElement("div",{className:"container"},l.a.createElement(X,{className:le.Title,title:"browse by branch",subtitle:"choose the branch closest to you"}),l.a.createElement("div",{className:le.Branches},f.map(function(e){return l.a.createElement(ie,{link:e.link,place:e.place,source:e.source})}))))},oe=a(47),se=a(9),ue=function(e){return l.a.createElement("section",{className:[se.Product,e.className].join(" ")},e.sale?l.a.createElement("div",{className:se.Sale},l.a.createElement("p",null,"Sale ",l.a.createElement("span",null,e.sale))):null,l.a.createElement("div",{className:se.ProductDetails},l.a.createElement("img",{src:e.source,alt:e.productName}),l.a.createElement("div",{className:se.Prices},l.a.createElement("span",{className:se.Price},e.price),l.a.createElement("span",{className:se.Descount},parseInt(e.price)*parseInt(e.sale)/100,"$")),l.a.createElement("p",null,e.productName),l.a.createElement("div",{className:se.Actions},l.a.createElement(x.d,{enableReinitialize:!0,initialValues:{quentety:0},render:function(e){return l.a.createElement(x.c,{className:se.SearchForm},l.a.createElement("div",{className:se.Input},l.a.createElement(x.b,{type:"number",id:"quentety",name:"quentety",className:se.InputElement}),l.a.createElement(x.a,{name:"quentety"})),l.a.createElement(F,{className:se.Submit,type:"submit",btnType:"Default",disabled:e.isSubmitting},"Add"))}}))),e.lastUpdate?l.a.createElement("time",{dateTime:e.lastUpdate},"Last Update: ",e.lastUpdate," "):null)},me=(n.Component,a(65)),de=a(48),pe=function(e){return l.a.createElement("section",{className:de.ProductCollection},l.a.createElement("img",{src:e.source,alt:e.title}),l.a.createElement("div",{className:de.Overlay},l.a.createElement("h4",null,e.title),l.a.createElement(k.b,{to:e.Link},"Shop Now")))},_e=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("section",{className:me.ProductsCollections},N.map(function(e){return l.a.createElement(pe,e)})))},he=a(66),ge=a.n(he),Ee=a(23),be=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).onFilterChange=function(e){void 0===a.iso&&(a.iso=new ge.a("#grid-container",{itemSelector:".grid-item",layoutMode:"fitRows",percentPosition:!0,fitRows:{gutter:".gutter-sizer"}})),"*"===e?a.iso.arrange({filter:"*"}):a.iso.arrange({filter:".".concat(e)})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.Data;return l.a.createElement("section",{className:Ee.IsotopeContainer},l.a.createElement("div",{className:"container"},l.a.createElement("header",{className:Ee.InfoContainer},l.a.createElement(X,{title:this.props.componentTitle,subtitle:this.props.componentSubtitle}),l.a.createElement("div",{className:"button-group filter-button-group grid-filters"},l.a.createElement("div",{className:"tabs is-centered is-toggle"},l.a.createElement("ul",{className:Ee.FilterLinks,id:"portfolio-filters"},l.a.createElement("li",{"data-filter":"*",onClick:function(){e.onFilterChange("*")}},"All"),t.map(function(t,a){return l.a.createElement("li",{key:a,"data-filter":t.category.slug,onClick:function(a){e.onFilterChange(t.category.slug,a)}},t.category.title)}))))),l.a.createElement("div",{className:"grid ".concat(Ee.ItemsContainer),id:"grid-container"},l.a.createElement("div",{className:"grid-sizer"}),l.a.createElement("div",{className:"gutter-sizer"}),t&&t.length>0?t.map(function(e,t){return l.a.createElement(ue,Object.assign({key:t,className:"grid-item ".concat(e.category.slug)},e))}):null)))}}]),t}(n.Component);var fe=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(V,null,l.a.createElement(K,null),l.a.createElement(ne,null),l.a.createElement(ce,null),l.a.createElement(be,{componentTitle:"hot deals",componentSubtitle:"new hot deals now",Data:v}),l.a.createElement(_e,null),l.a.createElement(be,{componentTitle:"our products",componentSubtitle:"Browse our fascinating sections!",Data:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(k.a,null,l.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},11:function(e,t,a){e.exports={Input:"SearchSection_Input__1L5Us",Label:"SearchSection_Label__6I4VW",InputElement:"SearchSection_InputElement__7dmre",Actions:"SearchSection_Actions__3Jqs2",SearchSection:"SearchSection_SearchSection__2t5mF",Categories:"SearchSection_Categories__z5tSY",control:"SearchSection_control__2LMMq",SearchForm:"SearchSection_SearchForm__1_LJA",Submit:"SearchSection_Submit__10k34",ButtonsSection:"SearchSection_ButtonsSection__1rjFZ",Notifications:"SearchSection_Notifications__1_cRl",Login:"SearchSection_Login__2tkJC"}},18:function(e,t,a){e.exports={Slider:"Carousel_Slider__3DXW9","slick-list":"Carousel_slick-list__3qKFO",Slide:"Carousel_Slide__37Bmy",Overlay:"Carousel_Overlay__3ciIs",SliderLink:"Carousel_SliderLink__37iDL",Dots:"Carousel_Dots__3538D","slick-active":"Carousel_slick-active__2PET3"}},22:function(e,t,a){e.exports={InformationHeader:"Information_InformationHeader__27QYJ",InformationNav:"Information_InformationNav__2OWIb",active:"Information_active__3Vn-Z",RightSection:"Information_RightSection__2Iexh",Select:"Information_Select__2PuDU"}},23:function(e,t,a){e.exports={IsotopeContainer:"Isotope_IsotopeContainer__1bsS2",InfoContainer:"Isotope_InfoContainer__gCw-r",FilterLinks:"Isotope_FilterLinks__WimI9",active:"Isotope_active__2SKRq",ItemsContainer:"Isotope_ItemsContainer__3zBVK","gutter-sizer":"Isotope_gutter-sizer__2vn9T"}},34:function(e,t,a){e.exports={Slider:"Slider_Slider__23O3n","slick-list":"Slider_slick-list__3bd6X",Slide:"Slider_Slide__1kfBB",ImageContainer:"Slider_ImageContainer__2KNnc"}},35:function(e,t,a){e.exports={BranchesContainer:"Branches_BranchesContainer__GkG_I",Branches:"Branches_Branches__2zAp7"}},40:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar___IylV",MainNav:"Toolbar_MainNav__1VWjR",active:"Toolbar_active__2Kagg"}},41:function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SyIo"}},43:function(e,t,a){e.exports={Button:"Button_Button__MzshR",Default:"Button_Default__Ay_AG",Success:"Button_Success__3G5Km",Danger:"Button_Danger__2BVQG"}},44:function(e,t,a){e.exports={Categories:"Categories_Categories__2rH1h",IconCategories:"Categories_IconCategories__1kyIm"}},45:function(e,t,a){e.exports={Label:"Label_Label__YgMPl",Icon:"Label_Icon__sInge"}},46:function(e,t,a){e.exports={Branch:"Branch_Branch__13JvP",Overlay:"Branch_Overlay__2_mcm"}},47:function(e,t,a){e.exports={HotDeals:"HotDeals_HotDeals__1uG86",DealsContainer:"HotDeals_DealsContainer__Ur0g1"}},48:function(e,t,a){e.exports={ProductCollection:"ProductCollection_ProductCollection__eU6lw",Overlay:"ProductCollection_Overlay__2xnW5"}},57:function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__2BQps"}},58:function(e,t,a){e.exports={Logo:"Logo_Logo__26MIi"}},62:function(e,t,a){e.exports={Button:"LinkButton_Button__3P51a",Default:"LinkButton_Default__3P9YC",Success:"LinkButton_Success__3SLv_",Danger:"LinkButton_Danger__21eXs"}},63:function(e,t,a){e.exports={Button:"Notifications_Button__2MbP-",Default:"Notifications_Default__P9dOw",Success:"Notifications_Success__3XBLL",Danger:"Notifications_Danger__1DNvY"}},64:function(e,t,a){e.exports={Titles:"Titles_Titles__1sHcx"}},65:function(e,t,a){e.exports={ProductsCollections:"ProductsCollections_ProductsCollections__3xF5t"}},67:function(e,t,a){e.exports=a(105)},72:function(e,t,a){},73:function(e,t,a){e.exports={App:"App_App__29Mhx"}},74:function(e,t,a){},9:function(e,t,a){e.exports={Input:"Product_Input__3Yxb1",Label:"Product_Label__ajqQk",InputElement:"Product_InputElement__2Daqa",Product:"Product_Product__25udb",Sale:"Product_Sale__m22Ob",ProductDetails:"Product_ProductDetails__CLscs",Prices:"Product_Prices__1tTQR",Price:"Product_Price__3EaF1",Descount:"Product_Descount__cZm7V",Actions:"Product_Actions__5plYn"}}},[[67,1,2]]]);
//# sourceMappingURL=main.96a78a84.chunk.js.map