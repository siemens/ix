"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4813],{18123:(e,t,n)=>{n.d(t,{A:()=>r});n(22155);var a=n(51666),s=n(63428),i=n(65723);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.A,{permalink:n,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(s.A,{permalink:r,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},16296:(e,t,n)=>{n.d(t,{A:()=>C});n(22155);var a=n(70851),s=n(21324),i=n(65723);function r(e){let{children:t,className:n}=e;return(0,i.jsx)("article",{className:n,children:t})}var l=n(99497);const o={title:"title_EN7r"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:r}=(0,s.e7)(),{permalink:c,title:d}=n,g=r?"h1":"h2";return(0,i.jsx)(g,{className:(0,a.A)(o.title,t),children:r?d:(0,i.jsx)(l.A,{to:c,children:d})})}var d=n(51666),g=n(28399),u=n(45012);const m={container:"container_QfGH"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,g.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,i.jsx)(i.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,i.jsx)("time",{dateTime:t,children:n})}function x(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,s.e7)(),{date:r,readingTime:l}=n,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,a.A)(m.container,"margin-vert--md",t),children:[(0,i.jsx)(p,{date:r,formattedDate:(c=r,o.format(new Date(c)))}),void 0!==l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{}),(0,i.jsx)(h,{readingTime:l})]})]});var c}var A=n(36186);const b={authorCol:"authorCol_uXer",imageOnlyAuthorRow:"imageOnlyAuthorRow_mb4u",imageOnlyAuthorCol:"imageOnlyAuthorCol_rzlW"};function f(e){let{className:t}=e;const{metadata:{authors:n},assets:r}=(0,s.e7)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,i.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",l?b.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,i.jsx)("div",{className:(0,a.A)(!l&&(o?"col col--12":"col col--6"),l?b.imageOnlyAuthorCol:b.authorCol),children:(0,i.jsx)(A.A,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(c,{}),(0,i.jsx)(j,{}),(0,i.jsx)(f,{})]})}var T=n(30392),N=n(75349);function w(e){let{children:t,className:n}=e;const{isBlogPostPage:r}=(0,s.e7)();return(0,i.jsx)("div",{id:r?T.LU:void 0,className:(0,a.A)("markdown",n),children:(0,i.jsx)(N.A,{children:t})})}var _=n(99669),y=n(3979),k=n(47127);function P(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){const{blogPostTitle:t,...n}=e;return(0,i.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,i.jsx)(P,{})})}function U(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:n,title:r,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,g=!t&&o,u=n.length>0;if(!(u||g||l))return null;if(t){const e=!!(l||d||c);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,a.A)("row","margin-top--sm",_.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(k.A,{tags:n})})}),e&&(0,i.jsx)(y.A,{className:(0,a.A)("margin-top--sm",_.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,a.A)("col",{"col--9":g}),children:(0,i.jsx)(k.A,{tags:n})}),g&&(0,i.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":u}),children:(0,i.jsx)(R,{blogPostTitle:r,to:e.permalink})})]})}function C(e){let{children:t,className:n}=e;const l=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(r,{className:(0,a.A)(l,n),children:[(0,i.jsx)(v,{}),(0,i.jsx)(w,{children:t}),(0,i.jsx)(U,{})]})}},26582:(e,t,n)=>{n.d(t,{A:()=>r});n(22155);var a=n(21324),s=n(16296),i=n(65723);function r(e){let{items:t,component:n=s.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.in,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},63499:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});n(22155);var a=n(70851),s=n(51666),i=n(16553),r=n(99669),l=n(54831),o=n(99497),c=n(98563),d=n(18123),g=n(29377),u=n(26582),m=n(31064),h=n(98696),p=n(65723);function x(e){let{tag:t}=e;const n=(0,l.ZD)(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.be,{title:n,description:t.description}),(0,p.jsx)(g.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:a,listMetadata:i}=e;const r=(0,l.ZD)(t);return(0,p.jsxs)(c.A,{sidebar:a,children:[t.unlisted&&(0,p.jsx)(m.A,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(h.A,{as:"h1",children:r}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(o.A,{href:t.allTagsPath,children:(0,p.jsx)(s.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(u.A,{items:n}),(0,p.jsx)(d.A,{metadata:i})]})}function A(e){return(0,p.jsxs)(i.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(j,{...e})]})}},31064:(e,t,n)=>{n.d(t,{A:()=>c});n(22155);var a=n(70851),s=n(55050),i=n(99669),r=n(51343),l=n(65723);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(s.Rc,{}),className:(0,a.A)(t,i.G.common.unlistedBanner),children:(0,l.jsx)(s.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.AE,{}),(0,l.jsx)(o,{...e})]})}},63428:(e,t,n)=>{n.d(t,{A:()=>r});n(22155);var a=n(70851),s=n(99497),i=n(65723);function r(e){const{permalink:t,title:n,subLabel:r,isNext:l}=e;return(0,i.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},91627:(e,t,n)=>{n.d(t,{A:()=>l});n(22155);var a=n(70851),s=n(99497);const i={tag:"tag_AWfM",tagRegular:"tagRegular_CSmV",tagWithCount:"tagWithCount_n0J3"};var r=n(65723);function l(e){let{permalink:t,label:n,count:l,description:o}=e;return(0,r.jsxs)(s.A,{href:t,title:o,className:(0,a.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[n,l&&(0,r.jsx)("span",{children:l})]})}},47127:(e,t,n)=>{n.d(t,{A:()=>o});n(22155);var a=n(70851),s=n(51666),i=n(91627);const r={tags:"tags_PlSD",tag:"tag_bSgw"};var l=n(65723);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(i.A,{...e})},e.permalink)))})]})}},54831:(e,t,n)=>{n.d(t,{ZD:()=>r,uz:()=>l});n(22155);var a=n(51666),s=n(28399);n(65723);function i(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function r(e){const t=i();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}const l=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},55050:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});n(22155);var a=n(51666),s=n(30367),i=n(65723);function r(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(s.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},51343:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(91382),s=n(57974),i=n(65723);function r(e){switch(e.type){case"info":return(0,i.jsx)(s.A,{icon:(0,i.jsx)(a.tc,{name:"info"}),...e});case"warning":return(0,i.jsx)(s.A,{icon:(0,i.jsx)(a.tc,{name:"warning-filled"}),...e});default:return(0,i.jsx)(s.A,{...e})}}}}]);