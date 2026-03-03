var a=(e,r,s)=>(e.addEventListener(r,s),()=>{e.removeEventListener(r,s)}),o=e=>{let r=e.map(({callback:s,element:t,eventType:n})=>a(t,n,s));return()=>r.forEach(s=>s())};export{a,o as b};
