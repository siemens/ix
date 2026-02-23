import{i as r}from"./chunk-NEUIV72S.js";import{a as o}from"./chunk-QAU7FEDV.js";import{a as n,d as e,e as s,g as l}from"./chunk-AG3ZGMX6.js";import"./chunk-IXF2NW34.js";var d=`:host(.event-list-item-outline) .event-list-item{--ix-event-list-item--color-border:var(
    --theme-event-item-outline--border
  );--ix-event-list-item--background:var(
    --theme-event-item-outline--background
  );--ix-event-list-item--background--hover:var(
    --theme-event-item-outline--background--hover
  );--ix-event-list-item--background--active:var(
    --theme-event-item-outline--background--active
  );--ix-event-list-item--background--selected:var(
    --theme-event-item-outline--background--selected
  );--ix-event-list-item--border--hover:var(
    --theme-event-item-outline--border--hover
  );--ix-event-list-item--border--active:var(
    --theme-event-item-outline--border--active
  );--ix-event-list-item--border--selected:var(
    --theme-event-item-outline--border--selected
  );--ix-event-list-item--border--disabled:var(
    --theme-event-item-outline--border--disabled
  )}:host(.event-list-item-filled) .event-list-item{--ix-event-list-item--color-border:var(
    --theme-event-item-filled--border
  );--ix-event-list-item--background:var(
    --theme-event-item-filled--background
  );--ix-event-list-item--background--hover:var(
    --theme-event-item-filled--background--hover
  );--ix-event-list-item--background--active:var(
    --theme-event-item-filled--background--active
  );--ix-event-list-item--background--selected:var(
    --theme-event-item-filled--background--selected
  );--ix-event-list-item--border--hover:var(
    --theme-event-item-filled--border--hover
  );--ix-event-list-item--border--active:var(
    --theme-event-item-filled--border--active
  );--ix-event-list-item--border--selected:var(
    --theme-event-item-filled--border--selected
  );--ix-event-list-item--border--disabled:var(
    --theme-event-item-filled--border--disabled
  )}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .event-list-item{display:flex;align-items:center;position:relative;height:var(--event-list-item-height, 2.5rem);max-height:var(--event-list-item-height, 2.5rem);border-radius:var(--event-list-item-border-radius, 0.25rem);background-color:var(--ix-event-list-item--background);overflow:hidden;transition:var(--theme-default-time);cursor:pointer;margin-bottom:var(--event-list-item-margin-bottom, 0.5rem)}:host .event-list-item .indicator{height:100%;width:0.5rem;max-width:0.5rem;min-width:0.5rem;border-top-left-radius:var(--event-list-item-border-radius, 0.25rem);border-bottom-left-radius:var(--event-list-item-border-radius, 0.25rem)}:host .event-list-item .indicator-empty{border:var(--theme-weak-bdr-1);border-right:none}:host .event-list-item .event-list-item-container{display:flex;flex-grow:1;width:calc(100% - (1rem + 0.5rem));height:100%;border:0.062rem solid;border-color:var(--ix-event-list-item--color-border);border-top-left-radius:0;border-top-right-radius:var(--event-list-item-border-radius, 0.25rem);border-bottom-left-radius:0;border-bottom-right-radius:var(--event-list-item-border-radius, 0.25rem);border-left:none;padding-left:1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .event-list-item .event-content{display:flex;align-items:center;width:100%;height:var(--event-list-item-height, 100%);max-height:var(--event-list-item-height, 100%);white-space:var(--event-list-item-content-white-space, inherit);overflow:hidden;padding-inline-end:0.5rem}:host .event-list-item .chevron-icon{margin-left:auto;margin-right:0.5rem;opacity:0.6;align-self:center}:host .event-list-item:not(.selected):not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected):not(.disabled):not(:disabled):hover,:host .event-list-item:not(.selected):not(.disabled):not(:disabled).hover{background-color:var(--ix-event-list-item--background--hover)}:host .event-list-item:not(.selected):not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected):not(.disabled):not(:disabled):active,:host .event-list-item:not(.selected):not(.disabled):not(:disabled).active{background-color:var(--ix-event-list-item--background--active)}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled):hover,:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled).hover{border-color:var(--ix-event-list-item--border--hover)}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled){cursor:pointer}:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled):active,:host .event-list-item:not(.selected) .event-list-item-container:not(.disabled):not(:disabled).active{border-color:var(--ix-event-list-item--border--active)}:host .event-list-item.selected .event-list-item-container{background-color:var(--ix-event-list-item--background--selected);border-color:var(--ix-event-list-item--border--selected)}:host .event-list-item[disabled],:host .event-list-item.disabled{pointer-events:none}:host .event-list-item[disabled] .event-list-item-container,:host .event-list-item.disabled .event-list-item-container{background-color:var(--ix-event-list-item--background--disabled);border-color:var(--ix-event-list-item--border--disabled)}:host(.disabled){pointer-events:none}`,b=(()=>{let i=class{constructor(t){n(this,t),this.itemClick=l(this,"itemClick",7),this.variant="outline",this.selected=!1,this.disabled=!1,this.chevron=!1}handleItemClick(){this.itemClick.emit()}render(){var t;let a=!((t=this.itemColor)===null||t===void 0)&&t.startsWith("--theme")?`var(${this.itemColor})`:`var(--theme-${this.itemColor})`;return e(s,{key:"02fcb2f3a05a1232d22fd3eb291b44b8d89fc86e",class:{disabled:this.disabled,[`event-list-item-${this.variant}`]:!0}},e("div",{key:"1be188ee2249ac5e71f507e888a34de67ecaff1e",role:"listitem","aria-disabled":o(this.disabled),class:{"event-list-item":!0,selected:this.selected,disabled:this.disabled}},e("div",{key:"55cf5e38c423987164775a625c9d7b34a525476e",class:`indicator ${this.itemColor?"":"indicator-empty"}`,style:{"background-color":this.itemColor?a:"inherit",opacity:`${this.disabled?.4:1}`}}),e("div",{key:"4bb869189f6929ab61199f8ca2ed503f003ee053",class:"event-list-item-container"},e("div",{key:"18829fab0a53958d46479f23cdfe1f6d56f4e1ad",class:"event-content"},e("slot",{key:"a74622d40ea8f575988950c1d63754a7035781f0"})),this.chevron&&e("ix-icon",{key:"6be7177f0da6a90ac26b93aa84c5b64e40da6e10",name:r,size:"16",class:"chevron-icon","aria-hidden":"true"}))))}};return i.style=d,i})();export{b as ix_event_list_item};
//# sourceMappingURL=ix-event-list-item.entry-67SY6V4S.js.map
