(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{925:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n(0),r=n.n(i),c=n(1),o=n(166),l=n(14),s=n(15),m=n(17),u=n(16),d=n(18),g=n(11),b=n(233),p=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,i=t.title,o=t.backgroundImg,l=t.link;return r.a.createElement("div",{className:n.iAmDiv},r.a.createElement(c.j,{container:!0,alignItems:"center",justify:"center",className:n.root,style:{backgroundImage:"url("+o+")"},onClick:function(){return Object(a.j)(l,e.props.history)}},r.a.createElement(c.t,{variant:"h4",className:n.title},i)))}}]),t}(r.a.Component),h=Object(b.f)(Object(g.withStyles)(function(e){return{root:{height:"400px",backgroundSize:"cover",backgroundPosition:"center",backgroundColor:"#d3dbe2",cursor:"pointer",marginBottom:35},title:{color:"white",fontWeight:"900",textAlign:"center"},iAmDiv:{}}})(p)),j=n(924),f=Object(j.a)({root:{backgroundColor:"#F6F6F6",cursor:"pointer",marginBottom:35}}),k=function(e){var t=f(),n=e.left,i=e.right,o=e.link,l=e.history;return r.a.createElement(c.j,{container:!0,alignItems:"center",className:t.root,onClick:function(){return Object(a.j)(o,l)}},r.a.createElement(c.j,{item:!0,container:!0,direction:"column",justify:"flex-start",alignItems:"center",sm:5},n),r.a.createElement(c.j,{item:!0,sm:7,container:!0,direction:"column",justify:"flex-end",alignItems:"center"},i))},E=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.data;return n.length?r.a.createElement(c.j,{container:!0,alignItems:"stretch",className:t.root},r.a.createElement(c.j,{item:!0,md:6,className:t.left},r.a.createElement(h,{link:"/articles/"+n[0].id,backgroundImg:n[0].sections[0].medias[0].url,title:Object(a.k)(n[0].sections[0].title)}),n[1]&&r.a.createElement(k,{link:"/articles/"+n[1].id,left:r.a.createElement("div",{style:{height:"300px",backgroundSize:"cover",backgroundImage:"url("+n[1].sections[0].medias[0].url+")",width:"100%",backgroundPosition:"center"}}),right:r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(c.t,{style:{padding:"0 20px"},variant:"subtitle1"},n[1].sections[0].title,"      "),r.a.createElement("br",null),r.a.createElement(c.t,{style:{padding:"0 20px",color:"rgb(159, 159, 159)"}},Object(a.h)(n[1].sections[0].description)))})),r.a.createElement(c.j,{item:!0,md:6,className:t.right},n[2]&&r.a.createElement(k,{link:"/articles/"+n[2].id,right:r.a.createElement("div",{style:{height:"300px",backgroundSize:"cover",backgroundImage:"url("+n[2].sections[0].medias[0].url+")",width:"100%",backgroundPosition:"center"}}),left:r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(c.t,{style:{padding:"0 20px"},variant:"subtitle1"},n[2].sections[0].title),r.a.createElement("br",null),r.a.createElement(c.t,{style:{padding:"0 20px",color:"rgb(159, 159, 159)"}},Object(a.h)(n[2].sections[0].description)))}),n[3]&&r.a.createElement(h,{link:"/articles/"+n[3].id,title:Object(a.k)(n[3].sections[0].title),backgroundImg:n[3].sections[0].medias[0].url}))):null}}]),t}(r.a.Component),v=Object(g.withStyles)(function(e){return{root:{},smallDiv:{height:"200px",backgroundPosition:"center",backgroundRepeat:"no-repeat"},bigDiv:{height:"400px",backgroundPosition:"center",backgroundRepeat:"no-repeat"},left:{paddingRight:20,paddingLeft:30},right:{paddingLeft:20,paddingRight:30}}})(E);t.default=function(e){var t=e.hasFeedsToShow,n=e.latestArticle,i=e.feeds,l=e.history;return t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(c.j,{item:!0,xs:12},r.a.createElement(o.a,{data:n.map(function(e){return e.sections[0].medias[0]}),title:n.map(function(e){return e.sections[0].title})||"",onClick:function(){return Object(a.j)("/articles/".concat(n.id),l)}})),r.a.createElement(c.j,{item:!0,xs:12,style:{marginTop:80}},r.a.createElement(v,{data:i.filter(function(e,t){return Object(a.i)(e.sections)})})))}}}]);
//# sourceMappingURL=1.7ebc338e.chunk.js.map