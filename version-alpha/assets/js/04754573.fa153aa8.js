"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1628],{21248:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"icons/design-new-icons","title":"Designing new icons","description":"When designing new icons beyond the existing library, follow our detailed guidelines to ensure consistency and quality. Be sure to consider both the technical and formal requirements outlined.","source":"@site/docs/icons/design-new-icons.md","sourceDirName":"icons","slug":"/icons/design-new-icons","permalink":"/version-alpha/docs/icons/design-new-icons","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/icons/design-new-icons.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Designing new icons","title":"Designing new icons","hide_table_of_contents":false,"doc-type":"banner","component-tabs":[""],"no_single_tab":true,"description":"When designing new icons beyond the existing library, follow our detailed guidelines to ensure consistency and quality. Be sure to consider both the technical and formal requirements outlined."},"sidebar":"icons","previous":{"title":"Icon usage","permalink":"/version-alpha/docs/icons/icon-usage"},"next":{"title":"Developing with icons","permalink":"/version-alpha/docs/icons/developing-with-icons"}}');var t=i(65723),o=i(65598);const r={sidebar_position:2,sidebar_label:"Designing new icons",title:"Designing new icons",hide_table_of_contents:!1,"doc-type":"banner","component-tabs":[""],no_single_tab:!0,description:"When designing new icons beyond the existing library, follow our detailed guidelines to ensure consistency and quality. Be sure to consider both the technical and formal requirements outlined."},l="",a={},c=[{value:"Considerations",id:"considerations",level:2},{value:"Technical requirements",id:"technical-requirements",level:3},{value:"Formal requirements",id:"formal-requirements",level:3},{value:"Icon design guidelines",id:"icon-design-guidelines",level:2},{value:"1. Icon grid size",id:"1-icon-grid-size",level:3},{value:"2. In-app icon design grid",id:"2-in-app-icon-design-grid",level:3},{value:"Exceptions to the clearance zone",id:"exceptions-to-the-clearance-zone",level:4},{value:"3. Light weight icons",id:"3-light-weight-icons",level:3},{value:"4. Simple and geometric",id:"4-simple-and-geometric",level:3},{value:"5. Stroke widths",id:"5-stroke-widths",level:3},{value:"6. Gaps",id:"6-gaps",level:3},{value:"7. Strikethrough, cuts and cutouts",id:"7-strikethrough-cuts-and-cutouts",level:3},{value:"8. The technical finish",id:"8-the-technical-finish",level:3},{value:"Prepare your icon for integration",id:"prepare-your-icon-for-integration",level:4},{value:"Integrate in Figma",id:"integrate-in-figma",level:4},{value:"Export for development",id:"export-for-development",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:""})}),"\n",(0,t.jsx)(n.h2,{id:"considerations",children:"Considerations"}),"\n",(0,t.jsx)(n.p,{children:"Before you start designing your specific icon set for your application, consider the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make sure the icons you need are not already in the library"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Maybe the icon already exists under a slightly different name or it might be planned for a future release so please double check or ask us when in doubt"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Consider using more generic icons than creating multiple very specific new ones (e.g.: Use the generic "add" icon instead of creating an "add-wireless-device" icon)'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Do not create alternatives to existing icons just for the sake of your own look"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ask other designers within your company about the existence of an icon, to prevent creation of duplicates"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Finally: Entrust a professional designer with the task of designing an icon"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"technical-requirements",children:"Technical requirements"}),"\n",(0,t.jsx)(n.p,{children:'Icons in our design system are monochromatic. They will be colored during runtime, depending on the context they are being used in. For more technical requirements see the "Code" tab above.'}),"\n",(0,t.jsx)(n.h3,{id:"formal-requirements",children:"Formal requirements"}),"\n",(0,t.jsx)(n.p,{children:"New icons should follow the app icon guidelines below for a consistent look & feel across applications. For Siemens applications it is mandatory to follow these guidelines."}),"\n",(0,t.jsx)(n.h2,{id:"icon-design-guidelines",children:"Icon design guidelines"}),"\n",(0,t.jsxs)(n.p,{children:["These guidelines extend the basic guidelines on ",(0,t.jsx)(n.a,{href:"https://brandville.siemens.com/en/design-elements/icons/ui-icons",children:"Siemens brandville"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"1-icon-grid-size",children:"1. Icon grid size"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The basic icon grid size is 24\u271524"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_801_253.png",alt:"Basic grid"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-in-app-icon-design-grid",children:"2. In-app icon design grid"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the design grid component \u201cIcon Design Grid\u201d from the \u201cAssets\u201d library as background for creating new icons"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The design grid helps to limit the icon boundaries to achieve an evenly optical weight of different icon shapes"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The clearance zone (red area) should not be touched by the icon (for exceptions see below)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The lines represent the boundaries of key shapes or just mark the center"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_801_856.png",alt:"In-app icon design grid"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the portrait key shape for vertically oriented shapes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_802_17540.png",alt:"Portrait key shapes"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the landscape key shape for horizontally oriented shapes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_802_19334.png",alt:"Landscape key shapes"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the square key shape for square icons"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_802_23090.png",alt:"Square key shapes"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the circle key shape for round icons"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_802_23091.png",alt:"Circle key shapes"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exceptions-to-the-clearance-zone",children:"Exceptions to the clearance zone"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Icons with attributes: Icons can be enhanced with attributes. These attributes are allowed to touch the clearance zone but should keep at least 1px space to the outer boundary"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_802_23092.png",alt:"Exception 1: icon attributes"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Optical fixes: Shapes are allowed to touch the clearance zone to equalize visual effects with pointed shapes or single strokes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_802_23093.png",alt:"Exception 2: optical fixes"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-light-weight-icons",children:"3. Light weight icons"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Prefer strokes and outlines over filled shapes"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Please provide a filled variant of the icon as well, where possible and potentially useful. It can be used in situations when more visual weight is required. The filled variant gets the name suffix \u201c-filled\u201d."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_808_23094.png",alt:"Normal and filled variant"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"4-simple-and-geometric",children:"4. Simple and geometric"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Keep icons as simple as possible"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Avoid complex symbols or symbol combinations whenever possible"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create icons from geometric shapes"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Prefer sharp corners and straight lines"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use rounded corners and endings only to support the characteristics of the represented object"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_808_23095.png",alt:"Simple and geometric shapes"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"5-stroke-widths",children:"5. Stroke widths"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Default stroke width is 2px"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In case icon readability can't be guaranteed otherwise, stroke widths of 1.5px or even 1x are also allowed. Before doing that please make sure all rules from section 4 are followed."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_809_23096.png",alt:"Stroke widths"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"6-gaps",children:"6. Gaps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Anti-aliasing effects can lead to blurry borders and edges"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use 2px gaps to visually separate two shapes from each other"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Avoid unsafe patterns of alternating between set pixel and no pixel. In the worst case such shapes cannot be visually distinguished anymore."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_809_23097.png",alt:"Gaps and unsafe pattern"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"7-strikethrough-cuts-and-cutouts",children:"7. Strikethrough, cuts and cutouts"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A diagonal strikethrough is used to symbolize the opposite of an icon or an unavailability (e.g. show & hide, switch off alarm)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A diagonal strikethrough starts from top left and ends at the bottom right (refers to the crossbar of letter \u201cN\u201d for \u201cNo\u201d), followed by a 2px space above right"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use at least 1px space for cuts or cutouts (be aware of \u201cunsafe patterns\u201d, see 6.)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"/version-alpha/figma/wEptRgAezDU1z80Cn3eZ0o_810_23098.png",alt:"Strikethroughs and gaps"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"8-the-technical-finish",children:"8. The technical finish"}),"\n",(0,t.jsx)(n.h4,{id:"prepare-your-icon-for-integration",children:"Prepare your icon for integration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The icon size (including clearance zone) must be 24x24"}),"\n",(0,t.jsx)(n.li,{children:"The icon must not contain strokes (convert all strokes to outlines)"}),"\n",(0,t.jsx)(n.li,{children:"Combine all icon parts to one single shape by using boolean operations"}),"\n",(0,t.jsx)(n.li,{children:"Name the remaining shape \u201cVector\u201d, otherwise color overrides will not work properly in Figma"}),"\n",(0,t.jsx)(n.li,{children:"Make sure the shape is set to \u201cScale\u201d in the \u201cConstraints\u201d settings in Figma, otherwise the resizing will not work properly"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"integrate-in-figma",children:"Integrate in Figma"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a component from your icon"}),"\n",(0,t.jsx)(n.li,{children:"Use a short, descriptive and unique name - also consider adding a project or application suffix to the icon name to prevent naming collisions with other external icons"}),"\n",(0,t.jsx)(n.li,{children:'"Publish" the document with your icon(s) and it will be available as library in your document assets'}),"\n",(0,t.jsx)(n.li,{children:"Activate your library in the design document"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"export-for-development",children:"Export for development"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create an instance of your icon (this can be done in the same document the icon is stored in)"}),"\n",(0,t.jsx)(n.li,{children:"Resize this instance to 512\xd7512 (target size for development integration)"}),"\n",(0,t.jsx)(n.li,{children:"Check if the scaling works properly (check scaling settings, if not)"}),"\n",(0,t.jsx)(n.li,{children:"Export the instance as SVG"}),"\n",(0,t.jsxs)(n.li,{children:["Check the SVG code and remove any title attributes (",(0,t.jsx)(n.code,{children:"<title> ... </title>"}),") to make sure no unintentional tooltips appear on the icon"]}),"\n",(0,t.jsx)(n.li,{children:"Make sure the name of the SVG file matches the icon name to avoid confusion"}),"\n",(0,t.jsx)(n.li,{children:"Hand the SVG over to your development"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},65598:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(22155);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);