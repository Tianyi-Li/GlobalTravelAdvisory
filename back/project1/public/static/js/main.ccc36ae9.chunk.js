(this.webpackJsonpreactexercises=this.webpackJsonpreactexercises||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(11),l=a(15),c=a(26),s=a(32),i=a(28),u=a(72),d=a.n(u),m=a(130),p=a(153),h=a(74),f=Object(h.a)({typography:{useNextVariants:!0},palette:{common:{black:"#000",white:"#fff"},background:{paper:"#fff",default:"#fafafa"},primary:{light:"#7986cb",main:"rgba(3, 18, 106, 1)",dark:"#303f9f",contrastText:"#fff"},secondary:{light:"#ff4081",main:"rgba(134, 4, 248, 1)",dark:"#c51162",contrastText:"#fff"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},text:{primary:"rgba(3, 9, 165, 1)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"}}}),g=a(131),v=a(134),b=a(135),y=a(136),E=a(45),x=function(){return n.a.createElement(m.a,{theme:f},n.a.createElement(g.a,null,n.a.createElement(v.a,{style:{textAlign:"center",paddingTop:"3vh"}},n.a.createElement("img",{src:"./travelicon.png",alt:"travel"})),n.a.createElement(b.a,{title:"World Wide Travel Alerts",color:"inherit",style:{textAlign:"center",paddingTop:"1vh"}}),n.a.createElement(y.a,{style:{paddingTop:0}},n.a.createElement("br",null),n.a.createElement(E.a,{color:"primary",style:{float:"right",paddingRight:"1vh",fontSize:"smaller"}},"\xa9Tianyi Li - 2020"))))},C=a(12),O=a.n(C),T=a(23),j=a(137),k=a(77),F=a(138),A=a(139),w=a(140),S=a(141),P=(a(58),function(e){var t=Object(r.useReducer)((function(e,t){return Object(c.a)({},e,{},t)}),{resArr:[]}),a=Object(l.a)(t,2),o=a[0],s=a[1];Object(r.useEffect)((function(){i()}),[]);var i=function(){var t=Object(T.a)(O.a.mark((function t(){var a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.dataFromChild("running setup..."),t.next=4,fetch("http://localhost:5000/graphql",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({query:"{setupalerts}"})});case 4:return a=t.sent,t.next=7,a.json();case 7:r=t.sent,e.dataFromChild("alerts collection setup completed"),s({resArr:r.data.setupalerts.replace(/([.])\s*(?=[A-Z])/g,"$1|").split("|")}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),e.dataFromChild("Problem loading server data - ".concat(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return n.a.createElement(m.a,{theme:f},n.a.createElement(g.a,null,n.a.createElement(v.a,{style:{textAlign:"center",paddingTop:"3vh"}},n.a.createElement("img",{src:"./travelicon.png",alt:"travel"})),n.a.createElement(b.a,{title:"World Wide Travel Alerts",color:"inherit",style:{textAlign:"center",paddingTop:"1vh"}}),n.a.createElement(y.a,null,n.a.createElement(E.a,{variant:"h6",color:"inherit",align:"center",style:{fontWeight:"bold"}},"Alert Setup - Details"),n.a.createElement(j.a,{component:k.a},n.a.createElement(F.a,null,n.a.createElement(A.a,null,o.resArr.map((function(e){return n.a.createElement(w.a,{key:o.resArr.indexOf(e)},n.a.createElement(S.a,{component:"th",scope:"row"},e))}))))))))}),q=a(149),N=a(144),W=a(145),L=a(150),J=function(e){var t=Object(r.useReducer)((function(e,t){return Object(c.a)({},e,{},t)}),{countries:[],travellerName:"",selectedcountry:"",reset:!1}),a=Object(l.a)(t,2),o=a[0],s=a[1];Object(r.useEffect)((function(){u()}),[]);var i=function(){var t=Object(T.a)(O.a.mark((function t(){var a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/graphql",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({query:'mutation {postadvisory(travellername: "'.concat(o.travellerName,'", name: "').concat(o.selectedcountry,'") {travellername,name,date, text}}')})});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,e.dataFromChild("added advisory on ".concat(r.data.postadvisory.date)),s({travellerName:"",selectedcountry:"",reset:!0}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e.dataFromChild("Problem loading server data - ".concat(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(T.a)(O.a.mark((function t(){var a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.dataFromChild("running setup..."),t.next=4,fetch("http://localhost:5000/graphql",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({query:"{countries}"})});case 4:return a=t.sent,t.next=7,a.json();case 7:r=t.sent,e.dataFromChild("found ".concat(r.data.countries.length," countries")),s({countries:r.data.countries}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),e.dataFromChild("Problem loading server data - ".concat(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}(),d=void 0===o.travellerName||""===o.travellerName||void 0===o.selectedcountry||""===o.selectedcountry;return n.a.createElement(m.a,{theme:f},n.a.createElement(g.a,null,n.a.createElement(v.a,{style:{textAlign:"center",paddingTop:"3vh"}},n.a.createElement("img",{src:"./travelicon.png",alt:"travel"})),n.a.createElement(b.a,{title:"World Wide Travel Alerts",color:"inherit",style:{textAlign:"center",paddingTop:"1vh"}}),n.a.createElement(y.a,null,n.a.createElement(E.a,{variant:"h6",color:"inherit",align:"center",style:{fontWeight:"bold"}},"Add Advisory"),n.a.createElement(q.a,{label:"Traveller's name",onChange:function(e){s({travellerName:e.target.value})},value:o.travellerName,style:{paddingTop:"2vh",paddingBottom:0}}),n.a.createElement(L.a,{id:"country",options:o.countries,getOptionLabel:function(e){return e},style:{width:300,paddingTop:"2vh",paddingBottom:0},onChange:function(e,t){s(t?{selectedcountry:t}:{selectedcountry:""})},key:o.reset,renderInput:function(e){return n.a.createElement(q.a,Object.assign({},e,{label:"countries",variant:"outlined",fullWidth:!0}))}}),n.a.createElement("br",null),n.a.createElement(N.a,{style:{justifyContent:"center"}},n.a.createElement(W.a,{color:"primary",variant:"contained",onClick:i,disabled:d},"ADD ADVISORY")))))},R=a(154),D=a(146),B=a(151),V=function(e){var t=Object(r.useReducer)((function(e,t){return Object(c.a)({},e,{},t)}),{autoCompleteArr:[],radioValue:"traveller",arrForTable:[],autoCompleteKey:"",textFieldLabel:"traveller"}),a=Object(l.a)(t,2),o=a[0],s=a[1];Object(r.useEffect)((function(){x()}),[]);var i=function(){var t=Object(T.a)(O.a.mark((function t(a){var r,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/graphql",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({query:'{alertsforsubregion(subregion:"'.concat(a,'") {country,name,text,date,region,subregion}}')})});case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,e.dataFromChild("found ".concat(n.data.alertsforsubregion.length," alerts for ").concat(a)),s({arrForTable:n.data.alertsforsubregion}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e.dataFromChild("Problem loading server data - ".concat(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=Object(T.a)(O.a.mark((function t(){var a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/graphql",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({query:"{subregions}"})});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,e.dataFromChild("found ".concat(r.data.subregions.length," sub regions")),s({autoCompleteArr:r.data.subregions}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e.dataFromChild("Problem loading server data - ".concat(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(T.a)(O.a.mark((function t(a){var r,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/graphql",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({query:'{alertsforregion(region:"'.concat(a,'") {country,name,text,date,region,subregion}}')})});case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,e.dataFromChild("found ".concat(n.data.alertsforregion.length," alerts for ").concat(a)),s({arrForTable:n.data.alertsforregion}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e.dataFromChild("Problem loading server data - ".concat(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(T.a)(O.a.mark((function t(){var a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/graphql",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({query:"{regions}"})});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,e.dataFromChild("found ".concat(r.data.regions.length," regions")),s({autoCompleteArr:r.data.regions}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e.dataFromChild("Problem loading server data - ".concat(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(T.a)(O.a.mark((function t(a){var r,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/graphql",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({query:'{alertsfortravellers(travellername:"'.concat(a,'"){travellername,name,date,text}}')})});case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,e.dataFromChild("found ".concat(n.data.alertsfortravellers.length," alerts for ").concat(a)),s({arrForTable:n.data.alertsfortravellers}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e.dataFromChild("Problem loading server data - ".concat(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(T.a)(O.a.mark((function t(){var a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/graphql",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({query:"{travellers}"})});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,e.dataFromChild("found ".concat(r.data.travellers.length," travellers")),s({autoCompleteArr:r.data.travellers}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e.dataFromChild("Problem loading server data - ".concat(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return n.a.createElement(m.a,{theme:f},n.a.createElement(g.a,null,n.a.createElement(v.a,{style:{textAlign:"center",paddingTop:"3vh"}},n.a.createElement("img",{src:"./travelicon.png",alt:"travel"})),n.a.createElement(b.a,{title:"World Wide Travel Alerts",color:"inherit",style:{textAlign:"center",paddingTop:"1vh"}}),n.a.createElement(y.a,null,n.a.createElement(E.a,{variant:"h6",color:"inherit",align:"center",style:{fontWeight:"bold"}},"List Advisories By:"),n.a.createElement(R.a,{"aria-label":"position",name:"position",value:o.radioValue,onChange:function(e){"traveller"===e.target.value?x():"region"===e.target.value?p():"sub-region"===e.target.value&&u(),s({radioValue:e.target.value,autoCompleteKey:e.target.value,textFieldLabel:e.target.value,arrForTable:[]})},row:!0},n.a.createElement(D.a,{value:"traveller",control:n.a.createElement(B.a,{color:"primary"}),label:"Traveller",labelPlacement:"start"}),n.a.createElement(D.a,{value:"region",control:n.a.createElement(B.a,{color:"primary"}),label:"Region",labelPlacement:"start"}),n.a.createElement(D.a,{value:"sub-region",control:n.a.createElement(B.a,{color:"primary"}),label:"Sub-Region",labelPlacement:"start"})),n.a.createElement(L.a,{id:"travellers",options:o.autoCompleteArr,getOptionLabel:function(e){return e},style:{width:300,paddingTop:"2vh",paddingBottom:0},onChange:function(e,t){t&&("traveller"===o.textFieldLabel?h(t):"region"===o.textFieldLabel?d(t):"sub-region"===o.textFieldLabel&&i(t))},key:o.autoCompleteKey,renderInput:function(e){return n.a.createElement(q.a,Object.assign({},e,{label:o.textFieldLabel,variant:"outlined",fullWidth:!0}))}}),n.a.createElement(j.a,{component:k.a},n.a.createElement(F.a,null,n.a.createElement(A.a,null,o.arrForTable.map((function(e){return n.a.createElement(w.a,{key:Math.random().toString()},n.a.createElement(S.a,{component:"th",scope:"row"},e.name),n.a.createElement(S.a,{component:"th",scope:"row"},e.text," ",n.a.createElement("br",null)," ",e.date))}))))))))},M=a(147),I=a(148),K=a(143),H=a(75),z=a(155),Y=function(){var e=Object(r.useReducer)((function(e,t){return Object(c.a)({},e,{},t)}),{snackBarMsg:"",msgFromParent:"data from parent",gotData:!1,anchorEl:null}),t=Object(l.a)(e,2),a=t[0],o=t[1],u=function(){o({anchorEl:null})},h=function(e){o({snackBarMsg:e,gotData:!0})};return n.a.createElement(m.a,{theme:f},n.a.createElement(M.a,{position:"static"},n.a.createElement(I.a,null,n.a.createElement(E.a,{variant:"h6",color:"inherit"},"Travel Alerts"),n.a.createElement(K.a,{onClick:function(e){o({anchorEl:e.currentTarget})},color:"inherit",style:{marginLeft:"auto",paddingRight:"1vh"}},n.a.createElement(d.a,null)),n.a.createElement(H.a,{id:"simple-menu",anchorEl:a.anchorEl,open:Boolean(a.anchorEl),onClose:u},n.a.createElement(z.a,{component:s.b,to:"/home",onClick:u},"Home"),n.a.createElement(z.a,{component:s.b,to:"/reset",onClick:u},"Reset Alerts"),n.a.createElement(z.a,{component:s.b,to:"/advisory",onClick:u},"Add Advisory"),n.a.createElement(z.a,{component:s.b,to:"/listadvisory",onClick:u},"List Advisory")))),n.a.createElement("div",null,n.a.createElement(i.b,{exact:!0,path:"/",render:function(){return n.a.createElement(i.a,{to:"/home"})}}),n.a.createElement(i.b,{path:"/reset",render:function(){return n.a.createElement(P,{dataFromChild:h})}}),n.a.createElement(i.b,{path:"/advisory",render:function(){return n.a.createElement(J,{dataFromChild:h})}}),n.a.createElement(i.b,{path:"/listadvisory",render:function(){return n.a.createElement(V,{dataFromChild:h})}}),n.a.createElement(i.b,{path:"/home",component:x})),n.a.createElement(p.a,{open:a.gotData,message:a.snackBarMsg,autoHideDuration:3e3,onClose:function(){o({gotData:!1})}}))};Object(o.render)(n.a.createElement(s.a,null,n.a.createElement(Y,null)),document.querySelector("#root"))},58:function(e,t,a){},88:function(e,t,a){e.exports=a(100)}},[[88,1,2]]]);