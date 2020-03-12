(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{684:function(e,t,n){"use strict";n.r(t);n(155);var a=n(0),r=n.n(a),o=n(685),i=n(822),c=n.n(i),s=n(823),l=n.n(s),u=(n(156),n(157),n(688)),m=n.n(u),d=(n(841),n(843)),p=n.n(d),h=n(673),f=n.n(h),v=function(e){var t,n=e.Component,a=void 0===n?"button":n,o=e.children,i=e.onClick,c=e.variant,s=e.small,l=e.className,u=m()(f.a.root,l,((t={})[f.a.primary]="primary"===c,t[f.a.secondary]="secondary"===c,t[f.a.small]=!!s,t));return r.a.createElement(a,{className:u,onClick:i},o)},g=function(e){var t,n=e.completed,a=e.toggleComplete,o=e.small,i=void 0===o||o,c=m()(((t={})[f.a.completeInactive]=!n,t[f.a.completeActive]=n,t));return r.a.createElement(v,{small:i,onClick:a,className:c},n?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{width:14,height:14,className:f.a.completeIcon})," ",r.a.createElement("span",{className:f.a.completeLabel},"Completed")," ",r.a.createElement("span",{className:f.a.completeLabelHover},"Remove from completed")):"Mark as completed")},E=r.a.createContext(),b=n(844),y=n.n(b),w=n(674),k=n.n(w),N=function(e){var t,n,o,i=e.id,c=e.title,s=e.type,l=e.children,u=Object(a.useRef)(),d=parseInt(i),p=Object(a.useContext)(E),h=p.activeExc,f=p.setActiveExc,b=p.completed,w=p.setCompleted,N=h===d,_=b.includes(d);Object(a.useEffect)(function(){N&&u.current&&u.current.scrollIntoView()},[N]);var C=Object(a.useCallback)(function(){return f(N?null:d)},[N,d]),x=Object(a.useCallback)(function(){return f(d+1)}),M=Object(a.useCallback)(function(){var e=_?b.filter(function(e){return e!==d}):[].concat(b,[d]);w(e)},[_,b,d]),A=m()(k.a.root,((t={})[k.a.expanded]=N,t[k.a.wide]=N&&"slides"===s,t[k.a.completed]=!N&&_,t)),j=m()(k.a.title,((n={})[k.a.titleExpanded]=N,n));return r.a.createElement("section",{ref:u,id:i,className:A},r.a.createElement("h2",{className:j,onClick:C},r.a.createElement("span",null,r.a.createElement("span",{className:m()(k.a.id,(o={},o[k.a.idCompleted]=_,o))},d),c),"slides"===s&&r.a.createElement(y.a,{className:k.a.icon})),N&&r.a.createElement("div",null,l,r.a.createElement("footer",{className:k.a.footer},r.a.createElement(g,{completed:_,toggleComplete:M}),r.a.createElement(v,{onClick:x,variant:"secondary",small:!0},"Next"))))},_=n(20),C=n.n(_),x=(n(98),n(845),n(97),n(846)),M=n(675),A=n.n(M),j=function(e){var t=e.expanded,n=void 0!==t&&t,o=e.actions,i=void 0===o?[]:o,c=e.children,s=Object(a.useState)(n),l=s[0],u=s[1],m=Object(a.useCallback)(function(){return u(!l)},[l]);return r.a.createElement("aside",{className:A.a.root},l&&c&&r.a.createElement("div",{className:A.a.content},c),r.a.createElement("menu",{className:A.a.actions},c&&r.a.createElement("button",{className:A.a.label,onClick:m},l?"Hide hints":"Show hints"),i.map(function(e,t){var n=e.text,a=e.onClick;return r.a.createElement("button",{className:A.a.label,key:t,onClick:a},n)})))},S=n(676),z=n.n(S);var T=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={Juniper:null,showSolution:!1,key:0},t}C()(t,e);var a=t.prototype;return a.handleShowSolution=function(){this.setState({showSolution:!0})},a.handleReset=function(){this.setState({showSolution:!1,key:this.state.key+1})},a.updateJuniper=function(){var e=this;this.state.Juniper||Promise.resolve().then(n.bind(null,331)).then(function(t){e.setState({Juniper:t.default})})},a.componentDidMount=function(){this.updateJuniper()},a.componentDidUpdate=function(){this.updateJuniper()},a.render=function(){var e=this,t=this.state,n=t.Juniper,a=t.showSolution,i=this.props,c=i.id,s=i.source,l=i.solution,u=i.test,m=i.children,d=s||"exc_"+c,p=l||"solution_"+c,h=u||"test_"+c,f={cell:z.a.cell,input:z.a.input,button:z.a.button,output:z.a.output},g=[{text:"Show solution",onClick:function(){return e.handleShowSolution()}},{text:"Reset",onClick:function(){return e.handleReset()}}];return r.a.createElement(o.b,{query:"1719272222",render:function(t){var o,i=t.site.siteMetadata.testTemplate,c=t.site.siteMetadata.juniper,s=c.repo,l=c.branch,u=c.kernelType,E=c.debug,b=c.lang,y=(o=t.allCode,Object.assign.apply(Object,[{}].concat(o.edges.map(function(e){var t,n=e.node;return(t={})[n.name]=n.code,t})))),w=y[d],k=y[p],N=y[h];return r.a.createElement("div",{className:z.a.root,key:e.state.key},n&&r.a.createElement(n,{msgButton:null,classNames:f,repo:s,branch:l,lang:b,kernelType:u,debug:E,actions:function(e){var t=e.runCode;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{onClick:function(){return t()}},"Run Code"),N&&r.a.createElement(v,{variant:"primary",onClick:function(){return t(function(e){return function(e,t,n){var a=n.replace(/"/g,'\\"');return e.replace(/\${solutionEscaped}/g,a).replace(/\${solution}/g,n).replace(/\${test}/g,t)}(i,N,e)})}},"Submit"))}},a?k:w),r.a.createElement(j,{actions:g},m))},data:x})},t}(r.a.Component),q=n(691),O=n(847),P=n(720),L=n.n(P),R=(n(677),n(678)),I=n.n(R);function D(e,t){var n;return((n=e.allMarkdownRemark,Object.assign.apply(Object,[{}].concat(n.edges.map(function(e){var t,n=e.node;return(t={})[n.fields.slug.replace("/","")]=n.rawMarkdownBody,t}))))[t]||"").split("\n---\n").map(function(e){return e.trim()})}var H=function(e){function t(){return e.apply(this,arguments)||this}C()(t,e);var a=t.prototype;return a.componentDidMount=function(){Promise.resolve().then(n.t.bind(null,848,7)).then(function(e){var t=e.default;window.Reveal=t,window.marked=L.a,Promise.resolve().then(n.t.bind(null,849,7)).then(function(e){e.RevealMarkdown.init(),t.initialize({center:!1,progress:!1,showNotes:!0,controls:!0,width:"100%",height:600,minScale:.75,maxScale:1})})})},a.componentWillUnmount=function(){delete window.Reveal,delete window.marked,delete n.c[848],delete n.c[849]},a.render=function(){var e=this.props.source,t=m()("reveal","show-notes",I.a.reveal),n=m()("slides",I.a.slides);return r.a.createElement("div",{className:I.a.root},r.a.createElement("div",{className:t},r.a.createElement(o.b,{query:"1922309225",render:function(t){var a=D(t,e);return r.a.createElement("div",{className:n},a.map(function(e,t){return r.a.createElement("section",{key:t,"data-markdown":"","data-separator-notes":"^Notes:"},r.a.createElement("textarea",{"data-template":!0,defaultValue:e}))}))},data:O})))},t}(r.a.Component),B=n(679),J=n.n(B),F=function(e){var t=e.id,n=void 0===t?"0":t,o=e.children,i=void 0===o?[]:o,c=Object(a.useState)(null),s=c[0],l=c[1],u=Object(a.useState)(null),d=u[0],p=u[1],h=Object(a.useCallback)(function(){return p(s)},[s]),f=i.filter(function(e){return"\n"!==e});return r.a.createElement(r.a.Fragment,null,f.map(function(e,t){var a=e.key,o=e.props;return r.a.createElement("p",{key:a,className:J.a.option},r.a.createElement("input",{className:J.a.input,name:"choice-"+n,id:"choice-"+n+"-"+t,value:t,type:"radio",checked:s===t,onChange:function(){return l(t)}}),r.a.createElement("label",{className:J.a.label,htmlFor:"choice-"+n+"-"+t,dangerouslySetInnerHTML:{__html:"<span>"+o.text+"</span>"}}))}),r.a.createElement(v,{variant:"primary",onClick:h},"Submit"),f.map(function(e,t){var n,a,o=e.key,i=e.props,c=!!i.correct;return d===t?r.a.createElement("div",{key:o,className:m()(J.a.answer,(n={},n[J.a.correct]=c,n))},r.a.createElement("strong",{className:m()(J.a.answerLabel,(a={},a[J.a.answerLabelCorrect]=c,a))},c?"That's correct! ":"Incorrect. "),i.children):null}))},$=n(693),V=new l.a({createElement:r.a.createElement,components:{exercise:N,slides:H,codeblock:T,choice:F,opt:function(e){return e.children},a:q.a,hr:$.b,h3:$.a,ol:$.e,ul:$.f,li:$.d,code:$.c}}).Compiler,U=n(699),W=n(680),Q=n.n(W);n.d(t,"pageQuery",function(){return G});t.default=function(e){var t=e.data,n=e.location,i=t.markdownRemark,s=t.site.siteMetadata.courseId,l=i.frontmatter,u=i.htmlAst,m=l.title,d=l.description,p=l.prev,h=l.next,f=l.id,g=Object(a.useState)(null),b=g[0],y=g[1],w=c()(s+"-completed-"+f,[]),k=w[0],N=w[1],_=V(u),C=[{slug:p,text:"« Previous Chapter"},{slug:h,text:"Next Chapter »"}];return Object(a.useEffect)(function(){n.hash&&y(parseInt(n.hash.split("#")[1]))},[n.hash]),r.a.createElement(E.Provider,{value:{activeExc:b,setActiveExc:function(e){window.location.hash=""+e,y(e)},completed:k,setCompleted:N}},r.a.createElement(U.a,{title:m,description:d},_,r.a.createElement("section",{className:Q.a.pagination},C.map(function(e){var t=e.slug,n=e.text;return r.a.createElement("div",{key:t},t&&r.a.createElement(v,{variant:"secondary",small:!0,onClick:function(){return Object(o.c)(t)}},n))}))))};var G="3199094430"},685:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=n(96),s=n.n(c);n.d(t,"a",function(){return s.a}),n.d(t,"c",function(){return c.navigate});n(690);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},690:function(e,t,n){var a;e.exports=(a=n(696))&&a.default||a},691:function(e,t,n){"use strict";n.d(t,"a",function(){return h});n(97);var a=n(292),r=n.n(a),o=n(0),i=n.n(o),c=n(5),s=n.n(c),l=n(685),u=n(688),m=n.n(u),d=n(667),p=n.n(d),h=function(e){var t,n=e.children,a=e.to,o=e.href,c=e.onClick,s=e.variant,u=e.hidden,d=e.className,h=r()(e,["children","to","href","onClick","variant","hidden","className"]),f=a||o,v=/(http(s?)):\/\//gi.test(f),g=m()(p.a.root,d,((t={})[p.a.hidden]=u,t[p.a.secondary]="secondary"===s,t));return v?i.a.createElement("a",Object.assign({href:f,className:g,target:"_blank",rel:"noopener nofollow noreferrer"},h),n):f&&/^#/.test(f)||c?i.a.createElement("a",{href:f,onClick:c,className:g},n):i.a.createElement(l.a,Object.assign({to:f,className:g},h),n)};h.propTypes={children:s.a.node.isRequired,to:s.a.string,href:s.a.string,onClick:s.a.func,variant:s.a.oneOf(["secondary",null]),hidden:s.a.bool,className:s.a.string}},693:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"e",function(){return u}),n.d(t,"f",function(){return m}),n.d(t,"d",function(){return d});var a=n(0),r=n.n(a),o=n(668),i=n.n(o),c=function(e){var t=e.children;return r.a.createElement("h3",{className:i.a.h3},t)},s=function(){return r.a.createElement("hr",{className:i.a.hr})},l=function(e){var t=e.children;return r.a.createElement("code",{className:i.a.code},t)},u=function(e){var t=e.children;return r.a.createElement("ol",{className:i.a.ol},t)},m=function(e){var t=e.children;return r.a.createElement("ul",{className:i.a.ul},t)},d=function(e){var t=e.children;return r.a.createElement("li",{className:i.a.li},t)}},694:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,a.createElement("path",{d:"M129.4 159.4l-29.8 2.1 5.1-49.3-29.8 49.5-19.6 1.3-20.1-47.3-5.3 50.7L0 168.5 12.3 51.4l25.4-1.8 30.7 68.6 45.5-73.9 27.9-2zM219.6 110.5l-5 43-29.8 2 4.9-42.9-36.2-71.1 33.4-2.3 19 42.6 29.4-46 35.7-2.5zM410.3 34.1c10.2 7.5 15.9 18 17.1 31.8l-30.9 4.5c-2.1-14-10.6-20.3-23.4-19.4a31.9 31.9 0 0 0-22.7 11.2c-5.9 6.8-9.1 15.6-9.8 26-1.5 20.5 9.3 30.9 25.2 29.8s24.8-9.3 28.7-23.7l31 1.2a60.8 60.8 0 0 1-20.6 34.2 62.1 62.1 0 0 1-36.8 14.7c-18.2 1.3-32.7-3.3-43.5-13.6s-15.4-25-14.1-43.9 7.7-32.5 19.2-43.7 25.8-17.5 42.9-18.7c15-1.1 27.7 2.1 37.7 9.6zM544.7 29.5c11.4 10.6 17 25 16.2 43.3s-6.6 32.2-17.8 43.5-25.4 17.7-42.9 18.9-33.7-3.2-45.1-13.8-17-25.1-16.3-43.4 6.6-32.2 17.8-43.5 25.7-17.7 43.1-18.9 33.5 3.4 45 13.9zm-75.6 49.8c.1 19.7 11.6 30.7 29.5 29.4 19.8-1.3 32.2-15.9 32.1-37.2-.1-19.7-11.6-30.7-29.6-29.4-19.8 1.3-32.1 15.9-32 37.2zM680.8 20c11.4 10.6 16.9 24.9 16.2 43.3s-6.6 32.2-17.8 43.5-25.5 17.7-43 18.9-33.6-3.3-45-13.8-17-25.1-16.3-43.5 6.6-32.1 17.8-43.5 25.6-17.6 43.1-18.8 33.5 3.4 45 13.9zm-75.7 49.7c.2 19.8 11.7 30.8 29.6 29.5 19.8-1.4 32.1-15.9 32.1-37.2-.2-19.7-11.7-30.7-29.6-29.5-19.8 1.4-32.1 16-32.1 37.2zM737.7 90.3l45.9-3.2-2.7 26.8-75.8 5.3L717.4 2.1 747.3 0zM119.8 240.9c10.1 7.5 15.8 18 17.1 31.7l-30.9 4.5c-2.1-14-10.6-20.2-23.4-19.3A31.6 31.6 0 0 0 59.9 269c-5.9 6.8-9.2 15.6-9.9 26-1.5 20.5 9.3 30.9 25.3 29.8s24.8-9.4 28.6-23.8l31 1.3c-3.2 14-10 25.4-20.6 34.2a63.1 63.1 0 0 1-36.7 14.7c-18.3 1.3-32.7-3.3-43.5-13.6s-15.5-25-14.1-43.9 7.6-32.5 19.1-43.8 25.8-17.5 43-18.7c15-1 27.6 2.2 37.7 9.7zM254.1 236.3c11.5 10.5 17 24.9 16.3 43.3s-6.6 32.2-17.8 43.5-25.5 17.6-43 18.9-33.6-3.3-45.1-13.8-16.9-25.1-16.2-43.5 6.6-32.1 17.8-43.5 25.6-17.6 43.1-18.8 33.5 3.4 44.9 13.9zM178.5 286c.2 19.8 11.7 30.8 29.6 29.5 19.8-1.4 32.1-15.9 32-37.2-.1-19.7-11.6-30.7-29.5-29.5-19.8 1.4-32.2 16-32.1 37.2zM396.7 211l-7 68.2c-3.8 32.4-23.1 51.8-54.5 54-16.2 1.1-28.8-2.7-37.5-11.4s-12-21.2-10.2-37.3l6.9-66.4 29.8-2.1-7.3 67.3c-1.6 16.5 4.5 24.3 18.4 23.3s23-10 24.7-27l6.9-66.6zM477.6 278.9l18.1 41.4-31.2 2.1-16.3-37.7-14.4 1-4.1 39.2-29.8 2.1 12.3-117.1 48.2-3.4c11.9-.8 21.6 2.2 28.8 9.2s10.5 16.6 9.6 29c-1.8 16.6-8.9 27.9-21.2 34.2zm-41-19.9l18.8-1.3c7.5-.6 12.3-5.1 13.1-13.2s-3.1-11.8-10.4-11.3l-18.9 1.4zM595.8 205.6c8.1 6.1 11.8 14.8 11 26.1l-30.3 3.4c.5-8-3.5-12.2-11.4-11.7s-14 5.2-14.6 11.9 2.9 7.9 16.8 10.5 22.9 6 29.3 11 9.6 12.4 8.9 22.5c-2 24.7-21.3 36.9-44.1 38.1-15 1-26.7-1.6-35.4-7.8s-12.4-15.6-11.4-27.8l30.4-3.2c-.6 8.7 5 13.6 14.4 13s15.3-4.5 15.6-11.2-4.9-9-16.8-11.1-19.7-4.4-27.5-9-11.5-12.9-10.6-24.3a38.9 38.9 0 0 1 12.2-26.1c7.4-7.2 17.7-11.4 30.7-12.3s24.8 1.7 32.8 8zM699.8 216.3l-46 3.2-1.8 17.6 39.4-2.8-2.8 26.2-39.5 2.7-2 19.9 46.2-3.2-2.9 26.7-75.9 5.4 12.3-117.1 75.8-5.3z"}))}r.defaultProps={width:"783.6",height:"351.4",viewBox:"0 0 783.6 351.4"},e.exports=r,r.default=r},696:function(e,t,n){"use strict";n.r(t);n(97);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=n(159),s=n(11),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},697:function(e){e.exports={data:{site:{siteMetadata:{title:"My cool online course",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique libero at est congue, sed vestibulum tortor laoreet. Aenean egestas massa non commodo consequat. Curabitur faucibus, sapien vitae euismod imperdiet, arcu erat semper urna, in accumsan sapien dui ac mi. Pellentesque felis lorem, semper nec velit nec, consectetur placerat enim.",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique libero at est congue, sed vestibulum tortor laoreet. Aenean egestas massa non commodo consequat. Curabitur faucibus, sapien vitae euismod imperdiet, arcu erat semper urna.",showProfileImage:!0,footerLinks:[{text:"Website",url:"https://spacy.io"},{text:"Source",url:"https://github.com/ines/course-starter-python"},{text:"Built with ♥",url:"https://github.com/ines/course-starter-python"}]}}}}},698:function(e){e.exports={data:{site:{siteMetadata:{title:"My cool online course",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique libero at est congue, sed vestibulum tortor laoreet. Aenean egestas massa non commodo consequat. Curabitur faucibus, sapien vitae euismod imperdiet, arcu erat semper urna, in accumsan sapien dui ac mi. Pellentesque felis lorem, semper nec velit nec, consectetur placerat enim.",slogan:"A free online course",siteUrl:"https://course-starter-python.netlify.com",twitter:"spacy_io",fonts:"IBM+Plex+Mono:500|IBM+Plex+Sans:700|Lato:400,400i,700,700i"}}}}},699:function(e,t,n){"use strict";var a=n(697),r=n(0),o=n.n(r),i=n(685),c=n(698),s=n(721),l=n.n(s),u=function(e){var t=e.title,n=e.description;return o.a.createElement(i.b,{query:m,render:function(e){var a=e.site.siteMetadata,r=t?t+" · "+a.title:a.title+" · "+a.slogan,i=n||a.description,c=a.siteUrl+"/social.jpg",s=[{name:"description",content:i},{property:"og:title",content:r},{property:"og:description",content:i},{property:"og:type",content:"website"},{property:"og:site_name",content:a.title},{property:"og:image",content:c},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:image",content:c},{name:"twitter:creator",content:"@"+a.twitter},{name:"twitter:site",content:"@"+a.twitter},{name:"twitter:title",content:r},{name:"twitter:description",content:i}];return o.a.createElement(l.a,{defer:!1,htmlAttributes:{lang:"en"},title:r,meta:s},a.fonts&&o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+a.fonts,rel:"stylesheet"}))},data:c})},m="463181092",d=n(691),p=n(693),h=n(694),f=n.n(h),v=(n(669),n(670)),g=n.n(v);t.a=function(e){var t=e.isHome,n=e.title,r=e.description,c=e.children;return o.a.createElement(i.b,{query:"2688331134",render:function(e){var a=e.site.siteMetadata;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{title:n,description:r}),o.a.createElement("main",{className:g.a.root},!t&&o.a.createElement("h1",{className:g.a.logo},o.a.createElement(d.a,{hidden:!0,to:"/"},o.a.createElement(f.a,{width:150,height:54,"aria-label":a.title}))),o.a.createElement("div",{className:g.a.content},(n||r)&&o.a.createElement("header",{className:g.a.header},n&&o.a.createElement("h1",{className:g.a.title},n),r&&o.a.createElement("p",{className:g.a.description},r)),c),o.a.createElement("footer",{className:g.a.footer},o.a.createElement("div",{className:g.a.footerContent},o.a.createElement("section",{className:g.a.footerSection},o.a.createElement(p.a,null,"About this course"),o.a.createElement("p",null,a.description)),o.a.createElement("section",{className:g.a.footerSection},o.a.createElement(p.a,null,"About me"),a.showProfileImage&&o.a.createElement("img",{src:"/profile.jpg",alt:"",className:g.a.profile}),o.a.createElement("p",null,a.bio)),a.footerLinks&&o.a.createElement("ul",{className:g.a.footerLinks},a.footerLinks.map(function(e,t){var n=e.text,a=e.url;return o.a.createElement("li",{key:t,className:g.a.footerLink},o.a.createElement(d.a,{variant:"secondary",to:a},n))}))))))},data:a})}},843:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,a.createElement("path",{d:"M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z"}))}r.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},e.exports=r,r.default=r},844:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,[a.createElement("path",{d:"M23.8 2.5A2.5 2.5 0 0 0 21.3 0H2.5A2.5 2.5 0 0 0 0 2.5v9.9a2.5 2.5 0 0 0 2.3 2.5v-1A1.5 1.5 0 0 1 1 12.4V2.5A1.5 1.5 0 0 1 2.5 1h18.8a1.5 1.5 0 0 1 1.5 1.5v3h1zM2.3 13.9v1z M23.5 20.3H4.8a2.5 2.5 0 0 1-2.5-2.5V8a2.5 2.5 0 0 1 2.5-2.5h18.7A2.5 2.5 0 0 1 26 8v9.8a2.5 2.5 0 0 1-2.5 2.5zM4.8 6.5A1.4 1.4 0 0 0 3.3 8v9.8a1.4 1.4 0 0 0 1.5 1.5h18.7a1.4 1.4 0 0 0 1.5-1.5V8a1.4 1.4 0 0 0-1.5-1.5z M15.8 9.5h7.1v1h-7.1z M15.8 12.4h7.1v1h-7.1z M15.9 15.3H23v1h-7.1z M4.9 10h1.5v6.5H4.9zM7.4 11.7h1.5v4.74H7.4zM10 11.7h1.5v4.74H10z",key:0}),a.createElement("circle",{cx:"14.1",cy:"10",r:"0.7",key:1}),a.createElement("circle",{cx:"14.1",cy:"12.9",r:"0.7",key:2}),a.createElement("circle",{cx:"14.2",cy:"15.8",r:"0.7",key:3})])}r.defaultProps={width:"24",height:"32",viewBox:"0 0 26 17",fill:"currentColor"},e.exports=r,r.default=r},846:function(e){e.exports={data:{site:{siteMetadata:{testTemplate:'from wasabi import Printer\n__msg__ = Printer()\n__solution__ = """${solution}"""\n\n${solution}\n\n${test}\n\ntry:\n    test()\nexcept AssertionError as e:\n    __msg__.fail(e)',juniper:{repo:"ines/course-starter-python",branch:"binder",kernelType:"python3",lang:"python",debug:!1}}},allCode:{edges:[{node:{name:"exc_01_03",code:'import json\n\n# This code will run relative to the root of the repo, so we can load files\nwith open("exercises/bookquotes.json") as f:\n    DATA = json.loads(f.read())\n\n# Print the first record in the DATA\nprint(___[____])\n\n# Assign the length of DATA to some_var\nsome_var = ___\n'}},{node:{name:"solution_01_03",code:'import json\n\n# This code will run relative to the root of the repo, so we can load files\nwith open("exercises/bookquotes.json") as f:\n    DATA = json.loads(f.read())\n\n# Print the first record in the DATA\nprint(DATA[0])\n\n# Assign the length of DATA to some_var\nsome_var = len(DATA)\n'}},{node:{name:"test_01_03",code:'def test():\n    # Here we can either check objects created in the solution code, or the\n    # string value of the solution, available as __solution__. A helper for\n    # printing formatted messages is available as __msg__. See the testTemplate\n    # in the meta.json for details.\n\n    # If an assertion fails, the message will be displayed\n    assert "print(DATA[0])" in __solution__, "Are you printing the first record?"\n    assert some_var == len(DATA), "Are you getting the correct length?"\n\n    __msg__.good("Well done!")\n'}}]}}}},847:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{rawMarkdownBody:'\n# Introduction\n\nNotes: Text at the end of a slide prefixed like this will be displayed as\nspeaker notes on the side. Slides can be separated with a divider: ---.\n\n---\n\n# This is a slide\n\n```python\n# Print something\nprint("Hello world")\n```\n\n```out\nHello world\n```\n\n- Slides can have code, bullet points, tables and pretty much all other Markdown\n  elements.\n- This is another bullet point.\n\n<img src="profile.jpg" alt="This image is in /static" width="25%">\n\nNotes: Some more notes go here\n\n---\n\n# Let\'s practice!\n\nNotes: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique\nlibero at est congue, sed vestibulum tortor laoreet. Aenean egestas massa non\ncommodo consequat. Curabitur faucibus, sapien vitae euismod imperdiet, arcu erat\nsemper urna, in accumsan sapien dui ac mi. Pellentesque felis lorem, semper nec\nvelit nec, consectetur placerat enim.\n',fields:{slug:"/chapter1_01_introduction"}}}]}}}}}]);
//# sourceMappingURL=component---src-templates-chapter-js-dc6b6cdaac806dead5cb.js.map