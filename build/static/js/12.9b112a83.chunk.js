(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{864:function(e,t,a){"use strict";a.r(t);var n,r=a(5),c=a(30),i=a.n(c),o=a(50),l=a(48),p=a(0),s=a.n(p),d=a(43),u=a(202),m=a(204),f=(a(60),a(785)),O=a(203),E=a(13),h=a.n(E),b=a(845),g=(a(843),a(40)),y=a(103),x=a(6),v=a(804),I=a(17),C=a(10),N=a(41),T=Object(u.a)({wrapper:{padding:"0 9%",display:"flex"},formGroup:{flex:1,margin:"0 10px","&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},formInput:{width:"100%",height:40,borderRadius:2,border:"1px #dadada solid",padding:"0 15px",transition:"border 0.3s","&:focus":{border:"1px black solid"}},inputSet:{margin:"15px -5px -5px","&:first-child":{marginTop:-5}},inputGroup:{display:"flex"},inputWrapper:{display:"flex",flex:1,margin:5},phoneInput:{display:"flex","& > div":{flex:1},"& > div > input":{width:"100%"}},item:{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"calc(100% - 30)",padding:15},itemThumb:{padding:"0px 10px",width:50,height:50,objectFit:"contain"},itemInfo:{display:"flex",flex:1,flexDirection:"row",alignItems:"center",flexWrap:"wrap"},itemName:{flex:1,minWidth:200,fontSize:16,"& > span":{fontSize:14,color:"#333"}},itemPrice:{padding:"15px 0px",fontSize:14,"& > span":{fontSize:14}},couponForm:{width:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",margin:"15px 0px","& > div":{flex:3},"& > input":{minWidth:200,height:30,borderRadius:3}},checkCouponBtn:{backgroundColor:"transparent",border:"none",cursor:"pointer",transition:"opacity 0.3s",fontSize:14,"&:hover":{opacity:.6}},summary:{padding:15},summaryRow:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",padding:"5px 0px",fontSize:14,"& > *":{fontSize:14}},actionBtn:(n={backgroundColor:"transparent",border:"none",display:"flex",width:"100%",justifyContent:"center",alignItems:"center",fontSize:14},Object(l.a)(n,"border","1px black solid"),Object(l.a)(n,"transition","opacity 0.3s"),Object(l.a)(n,"borderRadius",3),Object(l.a)(n,"padding",10),Object(l.a)(n,"cursor","pointer"),Object(l.a)(n,"&:hover, &:disabled",{opacity:.6,border:"1px #BBB solid"}),n),termsnConditions:{paddingTop:25,"& > span":{color:"#777",fontSize:12}},placeholder:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"35px 0",fontSize:24},"@media (max-width: 1200px)":{inputGroup:{display:"block"},inputSet:{"&:last-child":{marginTop:30}}},"@media (max-width: 600px)":{wrapper:{display:"block"},formGroup:{margin:0,"&:last-child":{marginTop:60}},inputGroup:{display:"block"},inputSet:{"&:last-child":{marginTop:30}}}});t.default=Object(m.a)(Object(d.b)(function(e){return{items:e.cart.items,order:e.cart.order,rates:e.cart.rates||[]}},function(e,t){return{quoteShippingFee:function(){var t=Object(o.a)(i.a.mark(function t(a,n){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.Checkout.getShippingRate({items:a.map(function(e){return{id:e.id,qty:e.qty}}),shipping:{address:n,country:"HK"}});case 2:if(!((r=t.sent)||[]).length){t.next=8;break}return console.log(r),t.abrupt("return",e({type:x.w,payload:r}));case 8:O.b.error("Failed to calculate shipping fee",{position:O.b.POSITION.TOP_RIGHT});case 9:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}(),placeOrder:function(){var a=Object(o.a)(i.a.mark(function a(n){var c,o;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,c=t.cookies.get("cart"),o=null,c){a.next=8;break}return a.next=5,g.a.Checkout.getCart();case 5:o=a.sent,(c=(((((o||{}).data||{}).data||{}).rows||[]).shift()||{}).id)&&t.cookies.set("cart",c);case 8:return a.next=10,g.a.Checkout.placeOrderWithoutLogin(Object(r.a)({},n,{items:c}));case 10:(((o=a.sent)||{}).data||{}).result&&(t.cookies.remove("cart"),e({type:x.q,payload:[]}),O.b.success("Order successed.",{position:O.b.POSITION.TOP_RIGHT})),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),O.b.error(((a.t0.response.data||{}).messages||[]).join("\n")||a.t0.message,{position:O.b.POSITION.TOP_RIGHT});case 17:case"end":return a.stop()}},a,null,[[0,14]])}));return function(e){return a.apply(this,arguments)}}(),updateOrder:function(t){return e({type:x.h,payload:t})},checkCoupons:function(){var e=Object(o.a)(i.a.mark(function e(t){var a,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length<1)){e.next=4;break}O.b.error("Please enter the coupon code(s).",{position:O.b.POSITION.TOP_RIGHT}),e.next=14;break;case 4:return e.prev=4,e.next=7,g.a.Checkout.getPromoCode(t);case 7:(((a=e.sent)||{}).data||{}).result&&(n=[],r=((a.data.data||{}).rows||[]).reduce(function(e,t){return e[t.code]=t,e},{}),t.split(/ *, */).filter(function(e){return e}).forEach(function(e){r[e]||n.push("".concat(e," is invalid."))}),n.length>0?O.b.error(n.join("\n"),{position:O.b.POSITION.TOP_RIGHT}):O.b.success("All coupons are valid.",{position:O.b.POSITION.TOP_RIGHT})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),O.b.error(((e.t0.response.data||{}).messages||[]).join("\n")||e.t0.message,{position:O.b.POSITION.TOP_RIGHT});case 14:case"end":return e.stop()}},e,null,[[4,11]])}));return function(t){return e.apply(this,arguments)}}()}})(function(e){var t=T(),a=e.items,n=e.order,c=e.rates,i=function(){var t=e.order||{contact:{},shipping:{},payment:{}};return((t.contact||{}).first_name||"").length&&((t.contact||{}).last_name||"").length&&((t.contact||{}).phone||"").length&&((t.shipping||{}).address||"").length&&((t.payment||{}).card||"").length&&((t.payment||{}).exp_date||"").length&&((t.payment||{}).csc||"").length}();return s.a.createElement("div",null,s.a.createElement(y.a,{title:Object(N.a)(C.a.CHECKOUT)}),(a||[]).length?s.a.createElement("div",{className:t.wrapper},s.a.createElement("div",{className:t.formGroup,style:{flex:3}},s.a.createElement("h3",null,s.a.createElement(I.a,{keyOfI18n:C.a.CHECKOUT_BILLING_DETAIL})),s.a.createElement("div",null,s.a.createElement("div",{className:t.inputSet},s.a.createElement("div",{className:t.inputGroup},s.a.createElement("div",{className:t.inputWrapper},s.a.createElement("input",{type:"text",className:t.formInput,placeholder:Object(N.a)(C.a.FIRST_NAME),onChange:function(t){return e.updateOrder(Object(r.a)({},e.order,{contact:Object(r.a)({},(e.order||{}).contact,{first_name:t.target.value})}))}})),s.a.createElement("div",{className:t.inputWrapper},s.a.createElement("input",{type:"text",className:t.formInput,placeholder:Object(N.a)(C.a.LAST_NAME),onChange:function(t){return e.updateOrder(Object(r.a)({},e.order,{contact:Object(r.a)({},(e.order||{}).contact,{last_name:t.target.value})}))}}))),s.a.createElement("div",{className:t.inputGroup},s.a.createElement("div",{className:t.inputWrapper},s.a.createElement("input",{type:"text",className:t.formInput,placeholder:Object(N.a)(C.a.EMAIL_ADDRESS),onChange:function(t){return e.updateOrder(Object(r.a)({},e.order,{contact:Object(r.a)({},(e.order||{}).contact,{email:t.target.value})}))}})),s.a.createElement("div",{className:t.inputWrapper},s.a.createElement(b.a,{type:"text",className:h()(t.formInput,t.phoneInput),placeholder:Object(N.a)(C.a.CHECKOUT_BILLING_DETAIL_PHONE_PLACEHOLDER),onChange:function(t){return e.updateOrder(Object(r.a)({},e.order,{contact:Object(r.a)({},(e.order||{}).contact,{phone:t})}))}}))),s.a.createElement("div",{className:t.inputWrapper},s.a.createElement("input",{type:"text",className:t.formInput,placeholder:Object(N.a)(C.a.CHECKOUT_BILLING_STREET_ADDRESS),onChange:function(t){return e.updateOrder(Object(r.a)({},e.order,{shipping:Object(r.a)({},(e.order||{}).shipping,{address:t.target.value})}))}}))),s.a.createElement("h3",{style:{paddingTop:"15px"}},s.a.createElement(I.a,{keyOfI18n:C.a.CHECKOUT_PAYMENT_INFOFORMATION})),s.a.createElement("div",{className:t.inputSet},s.a.createElement("div",{className:t.inputWrapper},s.a.createElement(f.a,{format:"#### #### #### ####",className:t.formInput,placeholder:Object(N.a)(C.a.CHECKOUT_BILLING_DETAIL_VISA_PLACEHOLDER),onValueChange:function(t){var a=t.value;return e.updateOrder(Object(r.a)({},e.order,{payment:Object(r.a)({},(e.order||{}).payment,{card:a})}))}})),s.a.createElement("div",{className:t.inputGroup},s.a.createElement("div",{className:t.inputWrapper},s.a.createElement(f.a,{format:"##/##",className:t.formInput,placeholder:Object(N.a)(C.a.CHECKOUT_BILLING_EXPIRY_DATE),mask:["M","M","Y","Y"],onValueChange:function(t){var a=t.formattedValue;return e.updateOrder(Object(r.a)({},e.order,{payment:Object(r.a)({},(e.order||{}).payment,{exp_date:a})}))}})),s.a.createElement("div",{className:t.inputWrapper},s.a.createElement(f.a,{format:"###",className:t.formInput,placeholder:Object(N.a)(C.a.CHECKOUT_BILLING_CVC),onValueChange:function(t){var a=t.value;return e.updateOrder(Object(r.a)({},e.order,{payment:Object(r.a)({},(e.order||{}).payment,{csc:a})}))}})))))),s.a.createElement("div",{className:t.formGroup,style:{flex:2}},s.a.createElement("div",null,s.a.createElement("h3",null,s.a.createElement(I.a,{keyOfI18n:C.a.CHECKOUT_YOUR_ORDER_SUMMARY})),s.a.createElement("div",{style:{width:"calc(100% - 30px)",border:"1px #dadada solid",borderRadius:2,padding:"15px"}},(a||[]).map(function(e,a){return s.a.createElement("div",{key:"item-".concat(a),className:t.item},s.a.createElement("img",{className:t.itemThumb,src:(e.media||[])[0]}),s.a.createElement("div",{className:t.itemInfo},s.a.createElement("div",{className:t.itemName},e.name,s.a.createElement("br",null),s.a.createElement("span",null,e.variant)),s.a.createElement("div",{className:t.itemPrice},s.a.createElement(f.a,{value:e.price,thousandSeparator:!0,prefix:"HK$",displayType:"text"})," x ",e.qty)))}),s.a.createElement("div",{style:{height:.5,backgroundColor:"#dadada"}})," ",s.a.createElement("div",{className:t.couponForm},s.a.createElement("div",{className:t.inputWrapper},s.a.createElement("input",{type:"text",className:t.formInput,placeholder:Object(N.a)(C.a.PROMO_CODE_TYPE_YOUR_PROMO_CODE_HERE),onChange:function(t){return e.updateOrder(Object(r.a)({},e.order,{coupons:t.target.value}))}})),s.a.createElement("div",{style:{display:"flex",justifyContent:"center",flex:1}},s.a.createElement("button",{type:"button",className:t.checkCouponBtn,onClick:function(t){return e.checkCoupons((e.order||{}).coupons||"")},disabled:!((n||{}).coupons||"").length},s.a.createElement(I.a,{keyOfI18n:C.a.PROMO_CODE_CHECK_BTN})))),s.a.createElement("div",{style:{height:.5,backgroundColor:"#dadada"}})," ",s.a.createElement("div",{className:t.summary},s.a.createElement("div",{className:t.summaryRow},s.a.createElement(I.a,{keyOfI18n:C.a.CHECKOUT_SUBTOTAL}),s.a.createElement(f.a,{value:(a||[]).reduce(function(e,t){return e+t.qty*t.price},0),thousandSeparator:!0,prefix:"HK$",displayType:"text"})),s.a.createElement("div",{className:t.summaryRow},s.a.createElement(I.a,{keyOfI18n:C.a.CHECKOUT_SHIPPING_FEE}),s.a.createElement(f.a,{value:function(){var t=Object.keys((e.order||{}).shippings||{})[0]||"",a=((e.order||{}).shippings||{})[t];return((c.filter(function(e){return e.id==a})[0]||{}).rates||{})[t]}()||"-",thousandSeparator:!0,prefix:"HK$",displayType:"text"}))),s.a.createElement("div",{style:{height:.5,backgroundColor:"#dadada"}})," ",s.a.createElement("div",{className:t.summary},c.length?s.a.createElement("div",null,s.a.createElement(v.a,{placeholder:"Select Courier",onChange:function(t){var a=t.value;return e.updateOrder(Object(r.a)({},e.order,{shippings:Object(l.a)({},a.split(":")[0],a.split(":")[1])}))},options:c.map(function(e){return{value:"".concat(Object.keys(e.rates)[0],":").concat(e.id),label:"".concat(e.name," - HK$").concat(Object.values(e.rates)[0])}})}),s.a.createElement("div",{className:t.termsnConditions},s.a.createElement("span",null,s.a.createElement(I.a,{keyOfI18n:C.a.TERM_AND_CONDITIONS}))),s.a.createElement("button",{className:t.actionBtn,style:{marginTop:15},onClick:function(t){e.placeOrder(e.order)},disabled:!i||!Object.keys(n.shippings||{}).length},s.a.createElement(I.a,{keyOfI18n:C.a.PLACE_ORDER}))):s.a.createElement("button",{className:t.actionBtn,onClick:function(t){return e.quoteShippingFee(a,e.order.shipping.address)},disabled:!i},s.a.createElement(I.a,{keyOfI18n:C.a.CONTINUE_SHIPPING}))))))):s.a.createElement("div",{className:t.placeholder},s.a.createElement("div",{style:{fontSize:24}},s.a.createElement(I.a,{keyOfI18n:C.a.CHECKOUT_YOU_HAVE_NOT_PUT_ANY_ITEMS_IN_CART})),s.a.createElement("div",{style:{fontSize:24,display:"flex",flexDirection:"row",alignItems:"center",padding:"5px 0px"}},s.a.createElement(I.a,{keyOfI18n:C.a.GOTO}),"\xa0",s.a.createElement("button",{type:"button",style:{fontSize:24,border:"none",backgroundColor:"transparent",textDecoration:"underline",cursor:"pointer"},onClick:function(t){return e.history.push("/products")}},s.a.createElement(I.a,{keyOfI18n:C.a.PRODUCTS})))))}))}}]);
//# sourceMappingURL=12.9b112a83.chunk.js.map