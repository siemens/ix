function o(i){let n,u=new Promise(e=>n=e),r,t=e=>{e!==void 0&&(r=t.current=e,i?.(e),n?.(e))};return t.current=r,t.waitForCurrent=async()=>(await u,r),t}export{o as a};
