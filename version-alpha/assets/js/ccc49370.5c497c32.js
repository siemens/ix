"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3249],{91758:(e,t,n)=>{n.d(t,{_:()=>l,u:()=>o});var a=n(22155),s=n(7642),r=n(65723);const i=a.createContext(null);function l(e){let{children:t,content:n}=e;const s=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,r.jsx)(i.Provider,{value:s,children:t})}function o(){const e=(0,a.useContext)(i);if(null===e)throw new s.dV("DocProvider");return e}},93981:(e,t,n)=>{n.d(t,{A:()=>P});n(22155);var a=n(51038),s=n(30751),r=n(65723);function i(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var l=n(98810);const o={title:"title_RUZn"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,s.e7)(),{permalink:c,title:d}=n,u=i?"h1":"h2";return(0,r.jsx)(u,{className:(0,a.A)(o.title,t),children:i?d:(0,r.jsx)(l.A,{to:c,children:d})})}var d=n(52295),u=n(16587),m=n(53792);const g={container:"container_XuWf"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function f(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e;const{metadata:n}=(0,s.e7)(),{date:i,readingTime:l}=n,o=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,a.A)(g.container,"margin-vert--md",t),children:[(0,r.jsx)(f,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(h,{readingTime:l})]})]});var c}var v=n(16247);const j={authorCol:"authorCol_F0fF",imageOnlyAuthorRow:"imageOnlyAuthorRow_jT8e",imageOnlyAuthorCol:"imageOnlyAuthorCol_WGf4"};function b(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,s.e7)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,r.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",l?j.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,r.jsx)("div",{className:(0,a.A)(!l&&(o?"col col--12":"col col--6"),l?j.imageOnlyAuthorCol:j.authorCol),children:(0,r.jsx)(v.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(p,{}),(0,r.jsx)(b,{})]})}var N=n(39998),_=n(66159);function L(e){let{children:t,className:n}=e;const{isBlogPostPage:i}=(0,s.e7)();return(0,r.jsx)("div",{id:i?N.LU:void 0,className:(0,a.A)("markdown",n),children:(0,r.jsx)(_.A,{children:t})})}var y=n(8017),T=n(74157),C=n(9559);function k(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function w(e){const{blogPostTitle:t,...n}=e;return(0,r.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(k,{})})}function H(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:n,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,m=n.length>0;if(!(m||u||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,a.A)("row","margin-top--sm",y.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(C.A,{tags:n})})}),e&&(0,r.jsx)(T.A,{className:(0,a.A)("margin-top--sm",y.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,a.A)("col",{"col--9":u}),children:(0,r.jsx)(C.A,{tags:n})}),u&&(0,r.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":m}),children:(0,r.jsx)(w,{blogPostTitle:i,to:e.permalink})})]})}function P(e){let{children:t,className:n}=e;const l=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,a.A)(l,n),children:[(0,r.jsx)(A,{}),(0,r.jsx)(L,{children:t}),(0,r.jsx)(H,{})]})}},64735:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(22155);var a=n(51038),s=n(38187),r=n(8017),i=n(30751),l=n(13207),o=n(93981),c=n(52295),d=n(14922),u=n(65723);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,i.e7)(),{title:n,description:a,date:r,tags:l,authors:o,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(s.be,{title:c.title_meta??n,description:a,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:r}),o.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var h=n(736);function f(){const e=(0,i.J_)();return(0,u.jsx)(h.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n(90553),p=n(28133);function v(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:s}=(0,i.e7)(),{nextItem:r,prevItem:c,frontMatter:d}=a,{hide_table_of_contents:g,toc_min_heading_level:h,toc_max_heading_level:f}=d;return(0,u.jsxs)(l.A,{sidebar:t,toc:!g&&s.length>0?(0,u.jsx)(x.A,{toc:s,minHeadingLevel:h,maxHeadingLevel:f}):void 0,children:[(0,u.jsx)(p.A,{metadata:a}),(0,u.jsx)(o.A,{children:n}),(r||c)&&(0,u.jsx)(m,{nextItem:r,prevItem:c})]})}function j(e){const t=e.content;return(0,u.jsx)(i.in,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(s.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(f,{}),(0,u.jsx)(v,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},20982:(e,t,n)=>{n.d(t,{A:()=>c});n(22155);var a=n(51038),s=n(44846),r=n(8017),i=n(89282),l=n(65723);function o(e){let{className:t}=e;return(0,l.jsx)(i.A,{type:"caution",title:(0,l.jsx)(s.Rc,{}),className:(0,a.A)(t,r.G.common.unlistedBanner),children:(0,l.jsx)(s.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.AE,{}),(0,l.jsx)(o,{...e})]})}},28133:(e,t,n)=>{n.d(t,{A:()=>d});n(22155);var a=n(51038),s=n(44846),r=n(8017),i=n(89282),l=n(65723);function o(e){let{className:t}=e;return(0,l.jsx)(i.A,{type:"caution",title:(0,l.jsx)(s.Yh,{}),className:(0,a.A)(t,r.G.common.draftBanner),children:(0,l.jsx)(s.TT,{})})}var c=n(20982);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:a}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||a.unlisted)&&(0,l.jsx)(c.A,{}),a.draft&&(0,l.jsx)(o,{})]})}},14922:(e,t,n)=>{n.d(t,{A:()=>i});n(22155);var a=n(51038),s=n(98810),r=n(65723);function i(e){const{permalink:t,title:n,subLabel:i,isNext:l}=e;return(0,r.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},90553:(e,t,n)=>{n.d(t,{A:()=>c});n(22155);var a=n(51038),s=n(47111);const r={tableOfContents:"tableOfContents_QBpl",docItemContainer:"docItemContainer_n_AH"};var i=n(65723);const l="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,a.A)(r.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(s.A,{...n,linkClassName:l,linkActiveClassName:o})})}},47111:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(22155),s=n(26152);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>l(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:r,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),c=o(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(91758),m=n(98810),g=n(65723);function h(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,g.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,g.jsxs)("li",{children:[(0,g.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,g.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const f=a.memo(h);var x=n(62934);function p(){const{metadata:e}=(0,u.u)(),t=(0,x.zy)(),[n,s]=(0,a.useState)(null),[r,i]=(0,a.useState)(null),[l,o]=(0,a.useState)(null),[c,d]=(0,a.useState)(0),[m]=(0,a.useState)(new URLSearchParams(t.search));return(0,a.useEffect)((()=>{const n=e.frontMatter["component-tabs"],a=new URLSearchParams(t.search),r=a.has("current-tabs"),l=a.get("current-tabs");i(n),o(l),s(r)}),[t,t.search,e]),(0,a.useEffect)((()=>{if(null===n||!r)return void d(-1);const e=r.findIndex((e=>e===l));d(e)}),[n,r,d,l]),{componentTabs:r,searchParams:m,hasQueryString:n,currentTab:l,currentIndex:c}}function v(e){const{metadata:t}=(0,u.u)(),n=e.toc,[s,r]=(0,a.useState)(n),{currentIndex:i}=p();return(0,a.useEffect)((()=>{if("component"!==t.frontMatter["doc-type"])return;let e=n[i];e&&r(e.children)}),[i,r,t]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(f,{...e,toc:s})})}function j(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:u,...m}=e;const h=(0,s.p)(),f=c??h.tableOfContents.minHeadingLevel,x=u??h.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>i({toc:r(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:f,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:f,maxHeadingLevel:x}}),[l,o,f,x])),(0,g.jsx)(v,{toc:p,className:n,linkClassName:l,...m})}},92719:(e,t,n)=>{n.d(t,{A:()=>l});n(22155);var a=n(51038),s=n(98810);const r={tag:"tag_Xt3t",tagRegular:"tagRegular_ERAk",tagWithCount:"tagWithCount_sVej"};var i=n(65723);function l(e){let{permalink:t,label:n,count:l,description:o}=e;return(0,i.jsxs)(s.A,{href:t,title:o,className:(0,a.A)(r.tag,l?r.tagWithCount:r.tagRegular),children:[n,l&&(0,i.jsx)("span",{children:l})]})}},9559:(e,t,n)=>{n.d(t,{A:()=>o});n(22155);var a=n(51038),s=n(52295),r=n(92719);const i={tags:"tags_LgPJ",tag:"tag_eq5o"};var l=n(65723);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.A)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(r.A,{...e})},e.permalink)))})]})}},44846:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>i,TT:()=>d,Uh:()=>l,Yh:()=>c});n(22155);var a=n(52295),s=n(736),r=n(65723);function i(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(s.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);