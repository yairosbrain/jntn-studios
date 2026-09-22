document.addEventListener('DOMContentLoaded',()=>{
    const c=document.getElementById('cart-toggle'),d=document.getElementById('cart-drawer'),x=document.getElementById('close-cart');
    const t=()=>{
        const o=d.classList.toggle('open');
        c.setAttribute('aria-expanded',o);
        d.setAttribute('aria-hidden',!o);
    };
    c.addEventListener('click',t);
    x.addEventListener('click',t);
});