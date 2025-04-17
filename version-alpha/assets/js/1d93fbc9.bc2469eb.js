"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9968],{5362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"components/category-filter/guide","title":"Category filter - Usage","description":"The category filter component enhances data navigation and user experience. We typically use a category filter to efficiently navigate large data sets, and it\'s particularly useful for complex data scenarios. The filter also enhances the user experience by providing autocomplete suggestions and customizable filter conditions.","source":"@site/docs/components/category-filter/guide.md","sourceDirName":"components/category-filter","slug":"/components/category-filter/guide","permalink":"/version-alpha/docs/components/category-filter/guide","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/category-filter/guide.md","tags":[],"version":"current","frontMatter":{"doc-type":"tab-item"},"sidebar":"components","previous":{"title":"Category filter","permalink":"/version-alpha/docs/components/category-filter/"},"next":{"title":"Code","permalink":"/version-alpha/docs/components/category-filter/code"}}');var s=n(65723),r=n(65598);const o={"doc-type":"tab-item"},a="Category filter - Usage",l={},c=[{value:"Options",id:"options",level:2},{value:"Behavior",id:"behavior",level:2},{value:"States",id:"states",level:2},{value:"Dos and Don\u2019ts",id:"dos-and-donts",level:2},{value:"Related",id:"related",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"category-filter---usage",children:"Category filter - Usage"})}),"\n",(0,s.jsx)(t.p,{children:"The category filter component enhances data navigation and user experience. We typically use a category filter to efficiently navigate large data sets, and it's particularly useful for complex data scenarios. The filter also enhances the user experience by providing autocomplete suggestions and customizable filter conditions."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_1799_38402.png",alt:"Category filter overview"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Container"}),"\n",(0,s.jsx)(t.li,{children:"Search icon"}),"\n",(0,s.jsx)(t.li,{children:"Input chip"}),"\n",(0,s.jsx)(t.li,{children:"Clear button"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Categories"}),": Select these predefined groups to narrow down searches or browsing. The categories are customizable and should be defined based on the specific needs of your application or website."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Suggestions"}),": These are potential search terms that appear as users begin to type in the input field. The aim is to assist users by predicting their intended search or category, thereby speeding up the input process and reducing potential errors."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Non-selectable categories"}),": This option is useful in scenarios where the user should not be able to select certain categories. This could be due to categories that are irrelevant in the current context, restricted through user permissions or dependent on other conditions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Repeat categories"}),": Allows users to select the same category more than once. This can be useful when users want to apply different filter conditions to the same category."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Placeholder"}),": Use to provide guidance or context to users when the category filter is empty."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Icon"}),': The default icon is "search". Changing or hiding the icon within the category filter enhances the user experience and improves visual communication.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Plain text"}),": Provides the possibility to do a plain text search without choosing a specific category."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Static operator"}),": Use to restrict the filter condition to either equal (=) or not equal (!=). This is useful when it doesn't make sense, or is not applicable, to let the user decide between equal and not equal. By default, the filter condition is without restriction."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"behavior",children:"Behavior"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Default"}),": The category filter is designed to adapt to the user\u2019s needs and the context it\u2019s used in. As soon as the user starts typing, the filter begins to apply, narrowing down the available options based on user input. This provides a dynamic and responsive user experience."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Filter conditions"}),": These are the operators that determine how the filter matches the user\u2019s input against the available categories. Available are equals (=) and not equals (!=). These conditions provide flexibility and precision in filtering, allowing users to find exactly what they\u2019re looking for."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Display modes"}),": The different modes are automatically detected by the component itself. If the user enters more than one row of search terms it automatically increases the size. When it comes to more then two lines of search terms it applies a scrollbar automatically."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Autocomplete"}),": When the user starts typing it can automatically suggest possible matches. This helps with speeding up the input process and reducing potential errors."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Category selection"}),": The behavior of category selection can vary. It can be configured as non-selectable, multi-selectable or single-selectable depending on the specific application needs and context."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Without category selection"}),": Use without category selection if user input alone is sufficient to filter the data, such as when the data is not well-organized into distinct categories, or if the categories are too numerous/complex."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Visual feedback"}),": When a category is selected, it\u2019s highlighted and a chip is added to the input field. If a user chooses to delete a category, the chip is removed and the data is unfiltered, allowing for further filtering."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"states",children:"States"}),"\n",(0,s.jsx)(t.p,{children:"Category filter has six states: Default, hover, active, disabled, read-only and focused."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_1799_38415.png",alt:"Category filter states"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Read-only"}),": By setting the category filter to read-only, accidental data modifications or deletions can be prevented. This can be particularly useful when dealing with critical or sensitive information that should not be altered without proper authorization."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Disabled"}),": This state is typically applied when the element is not applicable to the current context or when certain conditions must be met before the category filter can be enabled."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"dos-and-donts",children:"Dos and Don\u2019ts"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Do use if you have a large amount of content or products organized into different categories"}),"\n",(0,s.jsx)(t.li,{children:"Do use when catering to a diverse user base with different interests or needs"}),"\n",(0,s.jsx)(t.li,{children:"Do use if your content or products are organized into distinct categories or topics"}),"\n",(0,s.jsx)(t.li,{children:"Do use to make it easier for users to refine their search queries and receive more targeted results"}),"\n",(0,s.jsx)(t.li,{children:"Don\u2019t use if your content is minimal or not organized into distinct categories"}),"\n",(0,s.jsx)(t.li,{children:"Don\u2019t use if it\u2019s not the primary method of navigation"}),"\n",(0,s.jsx)(t.li,{children:"Don\u2019t use if it slows down the user experience"}),"\n",(0,s.jsx)(t.li,{children:"Don\u2019t use if your users are not familiar with the category names"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related",children:"Related"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../expanding-search",children:"Expanding search"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../input",children:"Input"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../select",children:"Select"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../dropdown-button",children:"Dropdown button"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},65598:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(22155);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);