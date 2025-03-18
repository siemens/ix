"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5153],{4763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>M,contentTitle:()=>F,default:()=>$,frontMatter:()=>B,metadata:()=>r,toc:()=>_});const r=JSON.parse('{"id":"components/tree/code","title":"code","description":"Development","source":"@site/docs/components/tree/code.mdx","sourceDirName":"components/tree","slug":"/components/tree/code","permalink":"/version-alpha/docs/components/tree/code","draft":false,"unlisted":false,"editUrl":"https://github.com/siemens/ix/tree/main/packages/documentation/docs/components/tree/code.mdx","tags":[],"version":"current","frontMatter":{}}');var i=t(65723),a=t(65598),l=t(34197),o=(t(17787),t(61838));function d(e){const n={h3:"h3",h4:"h4",...(0,a.R)(),...e.components};return o.A||c("ApiTable",!1),o.A.Code||c("ApiTable.Code",!0),o.A.EventHeader||c("ApiTable.EventHeader",!0),o.A.PropertyHeader||c("ApiTable.PropertyHeader",!0),o.A.Text||c("ApiTable.Text",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"api-for-ix-tree",children:"API for ix-tree"}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(o.A,{id:"property-context",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"context",singleFramework:""}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Selection and collapsed state management"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"{ [x: string]: TreeItemContext; }"}),(0,i.jsx)(o.A.Code,{name:"Default",children:"{}"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-model",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"model",singleFramework:""}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Tree model"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"{ [x: string]: TreeItem<any>; }"}),(0,i.jsx)(o.A.Code,{name:"Default",children:"{}"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-renderItem",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"renderItem",singleFramework:""}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Render function of tree items"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"<T = any>(index: number, data: T, dataList: T[], context: TreeContext, update: (callback: UpdateCallback) => void) => HTMLElement"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-root",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"root",singleFramework:""}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Initial root element will not be rendered"}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"root"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"string"})]}),"\n",(0,i.jsx)(n.h4,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(o.A,{id:"event-contextChange",children:[(0,i.jsx)(o.A.EventHeader,{name:"contextChange"}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Context changed"}),(0,i.jsx)(o.A.Code,{name:"Event",children:"contextChange"}),(0,i.jsx)(o.A.Code,{name:"Detail",children:"{ [x: string]: TreeItemContext; }"})]}),"\n",(0,i.jsxs)(o.A,{id:"event-nodeClicked",children:[(0,i.jsx)(o.A.EventHeader,{name:"nodeClicked",children:(0,i.jsx)(l.df,{message:"1.5.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Node clicked event"}),(0,i.jsx)(o.A.Code,{name:"Event",children:"nodeClicked"}),(0,i.jsx)(o.A.Code,{name:"Detail",children:"string"})]}),"\n",(0,i.jsxs)(o.A,{id:"event-nodeRemoved",children:[(0,i.jsx)(o.A.EventHeader,{name:"nodeRemoved"}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Emits removed nodes"}),(0,i.jsx)(o.A.Code,{name:"Event",children:"nodeRemoved"}),(0,i.jsx)(o.A.Code,{name:"Detail",children:"any"})]}),"\n",(0,i.jsxs)(o.A,{id:"event-nodeToggled",children:[(0,i.jsx)(o.A.EventHeader,{name:"nodeToggled",children:(0,i.jsx)(l.df,{message:"1.5.0"})}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Node toggled event"}),(0,i.jsx)(o.A.Code,{name:"Event",children:"nodeToggled"}),(0,i.jsx)(o.A.Code,{name:"Detail",children:"{ id: string; isExpaned: boolean; }"})]})]})}function s(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}function m(e){const n={h3:"h3",h4:"h4",...(0,a.R)(),...e.components};return o.A||h("ApiTable",!1),o.A.Code||h("ApiTable.Code",!0),o.A.EventHeader||h("ApiTable.EventHeader",!0),o.A.PropertyHeader||h("ApiTable.PropertyHeader",!0),o.A.Text||h("ApiTable.Text",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"api-for-ix-tree-item",children:"API for ix-tree-item"}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(o.A,{id:"property-context",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"context",singleFramework:""}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Context"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"TreeItemContext"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-hasChildren",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"hasChildren",singleFramework:""}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Has tree item children"}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"has-children"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"boolean"}),(0,i.jsx)(o.A.Code,{name:"Default",children:"false"})]}),"\n",(0,i.jsxs)(o.A,{id:"property-text",children:[(0,i.jsx)(o.A.PropertyHeader,{name:"text",singleFramework:""}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Text"}),(0,i.jsx)(o.A.Code,{name:"Attribute",children:"text"}),(0,i.jsx)(o.A.Code,{name:"Type",children:"string"})]}),"\n",(0,i.jsx)(n.h4,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(o.A,{id:"event-itemClick",children:[(0,i.jsx)(o.A.EventHeader,{name:"itemClick"}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Click on item not on the expand&#x2F;collapse icon"}),(0,i.jsx)(o.A.Code,{name:"Event",children:"itemClick"}),(0,i.jsx)(o.A.Code,{name:"Detail",children:"void"})]}),"\n",(0,i.jsxs)(o.A,{id:"event-toggle",children:[(0,i.jsx)(o.A.EventHeader,{name:"toggle"}),(0,i.jsx)(o.A.Text,{name:"Description",children:"Expand&#x2F;Collapsed toggled"}),(0,i.jsx)(o.A.Code,{name:"Event",children:"toggle"}),(0,i.jsx)(o.A.Code,{name:"Detail",children:"void"})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var x=t(89403);function u(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { TreeModel } from '@siemens/ix';\nimport { IxTree } from '@siemens/ix-react';\nimport { useState } from 'react';\n\ntype TreeData = {\n  name: string;\n};\n\nexport default () => {\n  const [model] = useState<TreeModel<TreeData>>({\n    root: {\n      id: 'root',\n      data: {\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n      },\n      hasChildren: false,\n      children: [],\n    },\n  });\n  return (\n    <div\n      style={{\n        display: 'block',\n        position: 'relative',\n        width: '100%',\n        height: '40rem',\n      }}\n    >\n      <IxTree root=\"root\" model={model}></IxTree>\n    </div>\n  );\n};\n"})})}function j(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}function v(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { Component } from '@angular/core';\nimport { TreeModel } from '@siemens/ix';\n\n@Component({\n  selector: 'app-example',\n  template: ` <div class=\"example\">\n    <ix-tree root=\"root\" [model]=\"model\"></ix-tree>\n  </div>`,\n  styles: [\n    `\n      .example {\n        display: block;\n        position: relative;\n        height: 32rem;\n        width: 100%;\n      }\n    `,\n  ],\n})\nexport default class Tree {\n  model: TreeModel<{\n    name: string;\n  }> = {\n    root: {\n      id: 'root',\n      data: {\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n      },\n      hasChildren: false,\n      children: [],\n    },\n  };\n}\n"})})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}function C(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-vue",children:"<script setup lang=\"ts\">\nimport { TreeModel } from '@siemens/ix';\nimport { IxTree } from '@siemens/ix-vue';\nimport { onMounted, ref } from 'vue';\n\ntype TreeData = {\n  name: string;\n};\n\nconst model = ref<TreeModel<TreeData>>();\n\nonMounted(() => {\n  model.value = {\n    root: {\n      id: 'root',\n      data: {\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n      },\n      hasChildren: false,\n      children: [],\n    },\n  };\n});\n<\/script>\n\n<template>\n  <div style=\"display: block; position: relative; width: 100%; height: 40rem\">\n    <IxTree root=\"root\" :model=\"model\"></IxTree>\n  </div>\n</template>\n"})})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(C,{...e})}):C(e)}function T(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Tree example</title>\n  </head>\n  <body>\n    <div style=\"height: 8rem; width: 100%\">\n      <ix-tree root=\"root\" id=\"tree\"></ix-tree>\n    </div>\n\n    <script>\n      (async function () {\n        await window.customElements.whenDefined('ix-tree');\n        const tree = document.getElementById('tree');\n\n        tree.model = {\n          root: {\n            id: 'root',\n            data: null,\n            hasChildren: true,\n            children: ['sample'],\n          },\n          sample: {\n            id: 'sample',\n            data: {\n              name: 'Sample',\n            },\n            hasChildren: true,\n            children: ['sample-child-1', 'sample-child-2'],\n          },\n          'sample-child-1': {\n            id: 'sample-child-1',\n            data: {\n              name: 'Sample Child 1',\n            },\n            hasChildren: false,\n            children: [],\n          },\n          'sample-child-2': {\n            id: 'sample-child-2',\n            data: {\n              name: 'Sample Child 2',\n            },\n            hasChildren: false,\n            children: [],\n          },\n        };\n      })();\n    <\/script>\n    <script type=\"module\" src=\"./init.js\"><\/script>\n  </body>\n</html>\n"})})}function A(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(T,{...e})}):T(e)}function y(e){return(0,i.jsx)(x.A,{name:"tree",source:{react:{"tree.tsx":j},angular:{"tree.ts":f},vue:{"tree.vue":g},html:{"tree.html":A}},files:{react:{"tree.tsx":"react/tree.tsx"},angular:{"tree.ts":"angular/tree.ts"},vue:{"tree.vue":"vue/tree.vue"},html:{"tree.html":"html/tree.html"}},height:e.height,onlyFramework:e.onlyFramework})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}function w(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { TreeContext, TreeModel } from '@siemens/ix';\nimport { iconCut, iconPrint, iconStar } from '@siemens/ix-icons/icons';\nimport { IxButton, IxIcon, IxTree } from '@siemens/ix-react';\nimport { useState } from 'react';\n\ntype TreeData = {\n  name: string;\n  icon: string;\n};\n\nexport default () => {\n  const [context, setContext] = useState<TreeContext>();\n  const [model] = useState<TreeModel<TreeData>>({\n    root: {\n      id: 'root',\n      data: {\n        icon: '',\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n        icon: iconStar,\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n        icon: iconCut,\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n        icon: iconPrint,\n      },\n      hasChildren: false,\n      children: [],\n    },\n  });\n\n  function expandAndSelect() {\n    setContext({\n      sample: {\n        isExpanded: true,\n        isSelected: false,\n      },\n      'sample-child-2': {\n        isSelected: true,\n        isExpanded: false,\n      },\n    });\n  }\n\n  return (\n    <div\n      style={{\n        display: 'block',\n        position: 'relative',\n        width: '100%',\n        height: '40rem',\n      }}\n    >\n      <IxButton\n        onClick={expandAndSelect}\n        ghost\n        style={{ marginBottom: '2rem' }}\n      >\n        Expand Tree\n      </IxButton>\n      <IxTree\n        root=\"root\"\n        model={model}\n        context={context}\n        onContextChange={({ detail }) => {\n          setContext(detail);\n        }}\n        renderItem={(data: TreeData) => (\n          <div\n            style={{\n              display: 'flex',\n              alignItems: 'center',\n            }}\n          >\n            <IxIcon\n              name={data.icon}\n              size=\"16\"\n              style={{\n                marginInlineEnd: '0.5rem',\n              }}\n            />\n            {data.name}\n          </div>\n        )}\n      ></IxTree>\n    </div>\n  );\n};\n"})})}function k(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}function E(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { Component } from '@angular/core';\nimport { TreeContext, TreeModel } from '@siemens/ix';\n\ntype TreeData = {\n  name: string;\n  icon: string;\n};\n\n@Component({\n  selector: 'app-example',\n  styles: [\n    `\n      .example {\n        display: block;\n        position: relative;\n        height: 32rem;\n        width: 100%;\n      }\n    `,\n  ],\n  template: `<div class=\"example\">\n    <ix-button\n      id=\"expand\"\n      ghost\n      style=\"margin-bottom: 2rem\"\n      (click)=\"expandAndSelect()\"\n      >Expand Tree</ix-button\n    >\n    <ix-tree\n      root=\"root\"\n      [model]=\"model\"\n      [context]=\"context\"\n      [renderItem]=\"treeItem\"\n    ></ix-tree>\n    <ng-template #treeItem let-item>\n      <div style=\"display: flex; align-items: center\">\n        <ix-icon [name]=\"item.icon\" size=\"16\" style=\"margin-inline-end: 0.5rem\"></ix-icon>\n        {{ item.name }}\n      </div>\n    </ng-template>\n  </div>`,\n})\nexport default class TreeCustom {\n  context: TreeContext = {};\n  model: TreeModel<TreeData> = {\n    root: {\n      id: 'root',\n      data: {\n        icon: '',\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n        icon: 'star',\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n        icon: 'cut',\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n        icon: 'print',\n      },\n      hasChildren: false,\n      children: [],\n    },\n  };\n\n  expandAndSelect() {\n    this.context = {\n      sample: {\n        isExpanded: true,\n        isSelected: false,\n      },\n      'sample-child-2': {\n        isSelected: true,\n        isExpanded: false,\n      },\n    };\n  }\n}\n"})})}function S(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(E,{...e})}):E(e)}function I(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-vue",children:"<script setup lang=\"ts\">\nimport { TreeContext, TreeModel } from '@siemens/ix';\nimport { IxButton, IxTree } from '@siemens/ix-vue';\nimport { defineComponent, onMounted, ref } from 'vue';\n\ntype TreeData = {\n  name: string;\n  icon: string;\n};\n\nconst context = ref<TreeContext>();\nconst model = ref<TreeModel<TreeData>>();\n\nfunction renderItem(data: TreeData) {\n  return defineComponent({\n    setup: () => {\n      data;\n    },\n    template: `\n    <div style=\"display: flex; align-items: center\">\n      <IxIcon :name=\"data.icon\" size=\"16\" style=\"margin-inline-end: 0.5rem\" />\n      {{ data.name }}\n    </div>`,\n  });\n}\n\nfunction expandAndSelect() {\n  context.value = {\n    sample: {\n      isExpanded: true,\n      isSelected: false,\n    },\n    'sample-child-2': {\n      isSelected: true,\n      isExpanded: false,\n    },\n  };\n}\n\nonMounted(() => {\n  model.value = {\n    root: {\n      id: 'root',\n      data: {\n        icon: '',\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n        icon: 'star',\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n        icon: 'cut',\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n        icon: 'print',\n      },\n      hasChildren: false,\n      children: [],\n    },\n  };\n});\n<\/script>\n\n<template>\n  <div style=\"display: block; position: relative; width: 100%; height: 40rem\">\n    <IxButton @click=\"expandAndSelect\" ghost style=\"margin-bottom: 2rem\">\n      Expand Tree\n    </IxButton>\n    <IxTree\n      root=\"root\"\n      :model=\"model\"\n      :context=\"context\"\n      @contextChange=\"({ detail }) => (context = detail)\"\n    >\n    </IxTree>\n  </div>\n</template>\n"})})}function D(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(I,{...e})}):I(e)}function N(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Tree custom example</title>\n    <script>\n      import { addIcons } from '@siemens/ix-icons';\n      import { iconStar, iconCut, iconPrint } from '@siemens/ix-icons/icons';\n\n      addIcons({ iconStar, iconCut, iconPrint });\n    <\/script>\n  </head>\n  <body>\n    <div style=\"height: 8rem; width: 100%\">\n      <ix-button id=\"expand\" ghost style=\"margin-bottom: 2rem\"\n        >Expand Tree</ix-button\n      >\n      <ix-tree root=\"root\" id=\"tree\"></ix-tree>\n    </div>\n\n    <script>\n      (async function () {\n        await window.customElements.whenDefined('ix-tree');\n        const tree = document.getElementById('tree');\n\n        const expandButton = document.getElementById('expand');\n        expandButton.addEventListener('click', () => {\n          tree.context = {\n            sample: {\n              isExpanded: true,\n              isSelected: false,\n            },\n            'sample-child-2': {\n              isSelected: true,\n              isExpanded: false,\n            },\n          };\n        });\n\n        tree.renderItem = (index, item, dataList, context, update) => {\n          const el = document.createElement('ix-tree-item');\n          el.hasChildren = item.hasChildren;\n          el.context = context[item.id];\n\n          const div = document.createElement('div');\n          div.style.display = 'flex';\n\n          const name = document.createElement('span');\n          const icon = document.createElement('ix-icon');\n          icon.name = item.data.icon;\n          icon.style.marginRight = '0.5rem';\n\n          div.appendChild(icon);\n          div.appendChild(name);\n\n          name.innerText = item.data.name;\n\n          el.appendChild(div);\n\n          update((updateTreeItem) => {\n            name.innerText = updateTreeItem.data.name;\n          });\n\n          return el;\n        };\n\n        tree.model = {\n          root: {\n            id: 'root',\n            data: null,\n            hasChildren: true,\n            children: ['sample'],\n          },\n          sample: {\n            id: 'sample',\n            data: {\n              name: 'Sample',\n              icon: 'star',\n            },\n            hasChildren: true,\n            children: ['sample-child-1', 'sample-child-2'],\n          },\n          'sample-child-1': {\n            id: 'sample-child-1',\n            data: {\n              name: 'Sample Child 1',\n              icon: 'cut',\n            },\n            hasChildren: false,\n            children: [],\n          },\n          'sample-child-2': {\n            id: 'sample-child-2',\n            data: {\n              name: 'Sample Child 2',\n              icon: 'print',\n            },\n            hasChildren: false,\n            children: [],\n          },\n        };\n      })();\n    <\/script>\n    <script type=\"module\" src=\"./init.js\"><\/script>\n  </body>\n</html>\n"})})}function R(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(N,{...e})}):N(e)}function H(e){return(0,i.jsx)(x.A,{name:"tree-custom",source:{react:{"tree-custom.tsx":k},angular:{"tree-custom.ts":S},vue:{"tree-custom.vue":D},html:{"tree-custom.html":R}},files:{react:{"tree-custom.tsx":"react/tree-custom.tsx"},angular:{"tree-custom.ts":"angular/tree-custom.ts"},vue:{"tree-custom.vue":"vue/tree-custom.vue"},html:{"tree-custom.html":"html/tree-custom.html"}},height:e.height,onlyFramework:e.onlyFramework})}function P(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(H,{...e})}):H(e)}const B={},F=void 0,M={},_=[{value:"Development",id:"development",level:2},{value:"Basic",id:"basic",level:3},{value:"Custom tree node",id:"custom-tree-node",level:3},{value:"API for ix-tree",id:"api-for-ix-tree",level:3},{value:"Properties",id:"properties",level:4},{value:"Events",id:"events",level:4},{value:"API for ix-tree-item",id:"api-for-ix-tree-item",level:3},{value:"Properties",id:"properties",level:4},{value:"Events",id:"events",level:4}];function L(e){const n={h2:"h2",h3:"h3",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,i.jsx)(n.h3,{id:"basic",children:"Basic"}),"\n",(0,i.jsx)(b,{height:"16rem"}),"\n",(0,i.jsx)(n.h3,{id:"custom-tree-node",children:"Custom tree node"}),"\n",(0,i.jsx)(P,{height:"12rem"}),"\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(p,{})]})}function $(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(L,{...e})}):L(e)}},61838:(e,n,t)=>{t.d(n,{b:()=>h,A:()=>p});var r=t(68643),i=t(35478),a=t(51038),l=t(17787);const o={AnchorButton:"AnchorButton_X7SC",AnchorHeader:"AnchorHeader_kjZv",NoButtonBorder:"NoButtonBorder_Hb7W",ApiTableText:"ApiTableText_hDT2"};var d=t(65723);function s(e){let{children:n,id:t}=e;return(0,d.jsx)(r.A,{children:()=>(0,d.jsx)("div",{className:"api-table container ml-0 mb-8",id:t,children:(0,d.jsx)("div",{className:"bg-[transparent] rounded-lg overflow-hidden border-solid border-[1px] border-[var(--theme-color-soft-bdr)]",children:n})})})}function c(e){let{children:n,name:t,type:r,singleFramework:a}=e;const{framework:o}=(0,i.u)();let s=t;return"vue"!==o&&"angular"!==o&&"html"!==o||(s=t.split("").map(((e,n)=>e.toUpperCase()===e?`${0!==n?"-":""}${e.toLowerCase()}`:e)).join("")),(0,d.jsxs)("div",{className:"flex bg-[var(--theme-color-2)] text-[var(--theme-color-std-text)] p-4 border-solid border-0 border-b border-[var(--theme-color-soft-bdr)] anchor",children:[(0,d.jsxs)("div",{className:"flex items-center font-bold",children:[s,(0,d.jsx)("a",{href:`#${r??"property"}-${t}`,className:"hash-link","aria-label":`Direct link to ${t}`,title:`Direct link to ${t}`})]}),(0,d.jsxs)("div",{className:"flex items-center ml-auto gap-2",children:[n,a?"":(0,d.jsx)(l.A,{})]})]})}function m(e){let{children:n,name:t}=e;return(0,d.jsxs)("div",{className:o.ApiTableText,children:[(0,d.jsx)("div",{className:"px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]",children:t}),(0,d.jsx)("div",{className:"w-auto p-4",children:n})]})}s.PropertyHeader=c,s.EventHeader=function(e){let{children:n,name:t}=e;const{framework:r}=(0,i.u)();let a=t;return"react"===r&&(a=`on${t.charAt(0).toUpperCase()}${t.slice(1)}`),(0,d.jsx)(c,{name:a,type:"event",children:n})},s.SlotHeader=function(e){let{children:n,name:t}=e;return(0,d.jsx)(c,{name:t,type:"slot",children:n})},s.Text=m,s.Code=function(e){let{children:n,name:t}=e;return(0,d.jsx)(m,{name:t,children:(0,d.jsx)("code",{className:"p-1",children:n})})};const p=s;function h(e){let{children:n,right:t,anchorName:r,anchorLabel:i,noBottomBorder:l,onClick:s}=e;return(0,d.jsxs)("div",{className:(0,a.A)(o.AnchorHeader,{[o.NoButtonBorder]:l}),children:[(0,d.jsx)("div",{className:"flex items-center font-bold w-full",children:(0,d.jsxs)("button",{onClick:s,className:(0,a.A)("all-unset",o.AnchorButton),tabIndex:0,children:[n,(0,d.jsx)("a",{href:`#${r}`,className:"hash-link","aria-label":i,title:i})]})}),(0,d.jsx)("div",{className:"flex items-center ml-auto gap-2",children:t})]})}},34197:(e,n,t)=>{t.d(n,{k$:()=>o,PI:()=>m,df:()=>l});const r={Tag:"Tag_JPbC",Since:"Since_Ybno",FormReady:"FormReady_rKLF",Deprecated:"Deprecated_M0Gf",Redirect:"Redirect_eyq7",Link:"Link_YkBF"};var i=t(65723);function a(e){let{children:n}=e;return(0,i.jsx)("div",{className:r.Tag,children:n})}function l(e){let{message:n}=e;return(0,i.jsx)(a,{children:(0,i.jsxs)("div",{className:r.Since,children:["Since ",n]})})}function o(e){let{message:n}=e;return(0,i.jsx)(a,{children:(0,i.jsxs)("div",{className:r.Deprecated,children:["Deprecated ",n]})})}var d=t(22155),s=t(52961),c=t(51038);function m(e){let{link:n,children:t}=e;return(0,i.jsx)(a,{children:(0,i.jsxs)("div",{className:(0,c.A)(r.Redirect),children:[d.createElement("ix-icon",{name:s.B7e,color:"color-primary",size:"16"}),(0,i.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",className:r.Link,children:t})]})})}}}]);