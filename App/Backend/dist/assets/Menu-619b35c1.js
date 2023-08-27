import{j as e,u as v,g as _,r as c,P as k,N as B}from"./index-183b0b0a.js";import{g as P,a as E}from"./productos.services-4f389007.js";import{u as U}from"./useCart-b6895950.js";import{M as Q}from"./Modal-24a39e88.js";function w({name:t,isActive:o,onClick:r}){function s(){r()}return e.jsx("div",{className:`menu__tag ${o?"active":""} `,onClick:s,children:e.jsx("p",{children:t})})}const C="data:image/webp;base64,UklGRlABAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSPkAAAABkLpt2/n30q8Xs5WUF3es2U7eqtqSl+ytGs1mN3+2bdvmB8ciYgI41O3L525U4aTtl1SVzD3hEAM/d9U32WyuK1UOSt97sXfiuOWJvWd/QLHRhe3+DdA0n8NBWUoelYEi6b0bAlNJ2KcQEPh+ikCZaRrOA0iu1uKkTB050W3QjK5i7fw1yuBA0YfEdNPMqPa3ChD4Xnj97IXp86dfulGgKfjj7+jqaHR2ccUo8Lv56OyVx48fP35y5+yDBhQgcRz5s5uRnZWTUf7nazgSEAQ8bnkSA7A2vteDBiTBf9p+FOLkwNXZc5MmSPJvNSGQhB5b9kIYEJhLAAEAVlA4IDAAAAAQAwCdASoUABQAPulur1IpJiQiqAgBIB0JZwBTAAUJBMAA/vFM6/CmGpgAH8AAAAA=";function N({isProductInCart:t,removeProductFromCart:o,addToCart:r,product:s,setCartClick:i}){const{auth:m}=v();async function d(){if(m.isLogin)return i(!1),t?o(s):r(s);i(!0)}return console.log(s),e.jsxs("div",{className:"menu__item",children:[e.jsxs("div",{className:"menu__item-r1",children:[e.jsx("div",{className:"menu__name-price",children:e.jsx("p",{className:"menu__item-name",children:s.nombre.toString().toUpperCase()})}),e.jsxs("div",{className:"menu__prices",children:[e.jsx("div",{className:"menu__img",style:{backgroundColor:t?"#fb9999":"#E8E8E8"},onClick:()=>d(),children:e.jsx("img",{src:C,className:"menu__icono-cart",alt:"Carrito"})}),e.jsxs("div",{className:"menu__item-price",children:[e.jsxs("p",{className:`${s.preciochico?"":"inactive"}`,children:[" ",s.preciochico?"$"+s.preciochico:""," "]}),e.jsx("p",{className:`${s.preciogrande?"":"inactive"}`,children:`${s.preciogrande?"$"+s.preciogrande:""}`})]})]})]}),e.jsx("div",{className:"menu__item-r2",children:e.jsx("p",{className:"menu__item-desc",children:s.descripcion.toString().toUpperCase()})})]})}function y({products:t,checkProductInCart:o,removeProductFromCart:r,addToCart:s,categories:i,setCartClick:m}){const d=(A,u)=>A.filter(a=>a.id_categoria==u).map(a=>{const x=o(a);return e.jsx(N,{isProductInCart:x,removeProductFromCart:r,addToCart:s,product:a,setCartClick:m},_())}),h=(A,u)=>A.map((f,a)=>e.jsxs("div",{className:"menu-item__wrapper",children:[e.jsx("div",{className:"menu-item__title",children:e.jsx("h2",{children:f.nombre})}),e.jsx("div",{className:"menu-items__wrapper",children:d(u,a+1)})]},a));return e.jsx(e.Fragment,{children:h(i,t)})}function M(){const[t,o]=c.useState([]),[r,s]=c.useState([]),[i,m]=c.useState(null),[d,h]=c.useState(!1),[A,u]=c.useState(!1),{addToCart:f,checkProductInCart:a,removeProductFromCart:x}=U(),{auth:p}=v(),j=c.useRef(null);c.useEffect(()=>{const n=new IntersectionObserver(g=>{g.forEach(l=>{l.intersectionRatio>.25?u(!1):u(!0)})},{threshold:.25});return j.current&&n.observe(j.current),()=>{j.current&&n.unobserve(j.current)}},[]),c.useEffect(()=>{async function n(){P().then(l=>o(l)).catch(l=>console.log(l))}async function g(){E().then(l=>s(l))}g(),n()},[]);function b(n){m(i===n?null:n)}function S(){return r.filter(n=>n.id_categoria==i)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"menu__container",children:[e.jsx(k,{pathPrev:"Home",pathActual:"Carta",goTo:"Home"}),e.jsx("div",{className:"menu__tags-container",children:e.jsx("div",{className:"menu__tags",children:t&&t.map(n=>e.jsx(w,{name:n.nombre,isActive:i===n.id,onClick:()=>b(n.id)},_()))})}),e.jsx("div",{className:"menu__title-sizes",children:e.jsx("p",{children:"Chicas / Grandes"})}),e.jsx("div",{className:`menu__menu ${i==null?"menu__menu--initial":""}`,children:i==null?e.jsx(y,{products:r,checkProductInCart:a,removeProductFromCart:x,addToCart:f,categories:t,setCartClick:h}):S().map(n=>{const g=a(n);return e.jsx(N,{isProductInCart:g,removeProductFromCart:x,addToCart:f,product:n,setCartClick:h},_())})}),A&&e.jsx(B,{to:"/delivery",children:e.jsxs("div",{className:"flotant-cart",children:[e.jsx("p",{children:"Carrito"}),e.jsx("img",{src:C,alt:"Carrito"})]})})]}),e.jsx("div",{ref:j}),e.jsx(Q,{isSubmitted:d&&!p.isLogin,position:"top",handleSubmit:()=>h(!1),msg:p.isLogin?"":"Debes estar logueado para usar el carrito"})]})}export{M as default};