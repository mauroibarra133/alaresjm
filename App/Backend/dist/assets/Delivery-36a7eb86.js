import{r as p,R as P,a as M,S as D,C as O,j as r,s as E,N as R,b as k,A as G,O as B,u as Q,P as L,g as F}from"./index-9b424e26.js";import{u as T}from"./useCart-2a003118.js";import{l as U,c as H,g as V}from"./index-fa08e96a.js";import{M as q}from"./Modal-45bbe8c3.js";var S={};Object.defineProperty(S,"__esModule",{value:!0});var C=S.loadMercadoPago=void 0;const N="https://sdk.mercadopago.com/js/v2",K=/^https:\/\/sdk\.mercadopago\.com\/js\/v2\/?(\?.*)?$/,I="MercadoPago has already been initialized in your window, please remove the duplicate import",W="MercadoPago.js not available",X="Failed to load MercadoPago.js",Z=()=>{for(var i=document.querySelectorAll(`script[src^="${N}"`),c=0;c<i.length;c++){var t=i[c];if(K.test(t.src))return t}return null},J=()=>{const i=document.createElement("script");i.src=N;const c=document.head||document.body;if(!c)throw new Error("Expected document.body or document.head not to be null. MercadoPago requires a <body> or a <head> element, please add on your project.");return c.appendChild(i),i};let j=null;const Y=()=>(j!==null||(j=new Promise((i,c)=>{if(typeof window>"u"){i(null);return}if(window.MercadoPago){console.warn(I),i(window.MercadoPago);return}try{let t=Z();t?console.warn(I):t||(t=J()),t.addEventListener("load",()=>{window.MercadoPago?i(window.MercadoPago):c(new Error(W))}),t.addEventListener("error",()=>{c(new Error(X))})}catch(t){c(t);return}})),j);C=S.loadMercadoPago=Y;var $=globalThis&&globalThis.__awaiter||function(i,c,t,o){function l(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function u(e){try{s(o.next(e))}catch(d){a(d)}}function f(e){try{s(o.throw(e))}catch(d){a(d)}}function s(e){e.done?n(e.value):l(e.value).then(u,f)}s((o=o.apply(i,c||[])).next())})};class x{static getInstance(){return $(this,void 0,void 0,function*(){if(this.publicKey)return this.loadedInstanceMercadoPago||(yield C(),this.loadedInstanceMercadoPago=!0),this.instanceMercadoPago||(this.instanceMercadoPago=new window.MercadoPago(this.publicKey,this.options)),this.instanceMercadoPago;console.error("Expected the PUBLIC_KEY to render the MercadoPago SDK React")})}}x.publicKey=null;x.options={};x.instanceMercadoPago=void 0;x.loadedInstanceMercadoPago=!1;function z(i,c){return Object.keys(i).length===Object.keys(c).length&&Object.keys(i).every(o=>Object.prototype.hasOwnProperty.call(c,o)&&i[o]===c[o])}const ee=(i,c)=>{const t=Object.assign(Object.assign({},c),{frontEndStack:"react"}),o=!z(x.options,t);(i!==x.publicKey||o)&&(x.publicKey=i,x.options=t,x.instanceMercadoPago=void 0)},te=200;var ne=globalThis&&globalThis.__awaiter||function(i,c,t,o){function l(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function u(e){try{s(o.next(e))}catch(d){a(d)}}function f(e){try{s(o.throw(e))}catch(d){a(d)}}function s(e){e.done?n(e.value):l(e.value).then(u,f)}s((o=o.apply(i,c||[])).next())})};const oe=()=>ne(void 0,void 0,void 0,function*(){}),ae=()=>{},re=i=>{console.error(i)};var ie=globalThis&&globalThis.__awaiter||function(i,c,t,o){function l(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function u(e){try{s(o.next(e))}catch(d){a(d)}}function f(e){try{s(o.throw(e))}catch(d){a(d)}}function s(e){e.done?n(e.value):l(e.value).then(u,f)}s((o=o.apply(i,c||[])).next())})};const se=({settings:i,name:c,divId:t,controller:o})=>ie(void 0,void 0,void 0,function*(){const l=yield x.getInstance(),n=l==null?void 0:l.bricks();window[o]=yield n==null?void 0:n.create(c,t,i)}),ce=({onReady:i=ae,onError:c=re,onSubmit:t=oe,customization:o,initialization:l,locale:n})=>(p.useEffect(()=>{let a;const u={settings:{initialization:l,customization:o,locale:n,callbacks:{onReady:i,onSubmit:t,onError:c}},name:"wallet",divId:"walletBrick_container",controller:"walletBrickController"};return a=setTimeout(()=>{se(u)},te),()=>{var f;clearTimeout(a),(f=window.walletBrickController)===null||f===void 0||f.unmount()}},[o,l,i,c,t]),P.createElement("div",{id:"walletBrick_container"}));globalThis&&globalThis.__awaiter;globalThis&&globalThis.__awaiter;globalThis&&globalThis.__awaiter;globalThis&&globalThis.__awaiter;globalThis&&globalThis.__awaiter;globalThis&&globalThis.__awaiter;globalThis&&globalThis.__awaiter;async function de(i,c,t,o,l,n){try{const a=await M.post(`${D}/create_preference`,{items:i,address:c,extra:{tipoPago:t,tipoEntrega:o,notaPedido:l,user_id:n}});return console.log("response preference",a),a}catch(a){throw console.log(a),new O}}const le="data:image/webp;base64,UklGRvQAAABXRUJQVlA4WAoAAAAQAAAAHQAAHQAAQUxQSJkAAAABkBCAbRg2ghIogWImgiIohiIo3vZHSRlExAQgXGyP3dp4yEnNmz23ZsR5yKDnqQ6cx/zPnuf1j98ZQE1MRVOAIwEdGTU3imbrG/Y37ZMlFVCS+uQ5CnHfdabD+DAtqYCS1HN0n/4VoImb32h/s5ejBjoDKhpx4gKWo1sAqHf7H/AV8X++aZz5gkjLN97IF52YuF+L7bGbGyEAVlA4IDQAAAAwAwCdASoeAB4APxF4s1IsJySisBgIAYAiCWIAyNQYTVHAAP7wakt6paUE4s2QbCb1lAAA",ue="data:image/webp;base64,UklGRsAAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSFoAAAABYAhJkqRGWZRBGZNGGZRDaZT75kOIiAlASuqWwtE03aVY8G4z4T0kALvHDmgm+L1osXFpQ3ca+B8OThrJrWSoayNsw881E+AzA8AJAeCwR+SuSob6eOiWSKRWUDggQAAAAHADAJ0BKhQAFAA+6W6vUikmJCKoCAEgHQllAL9xwFkADdxwAAD+8USVIyDev6A76NpWwvHHhg5avxgpa43QAAA=";function fe({id:i,nombre:c,preciogrande:t,preciochico:o,descripcion:l,quantity:n,priceSelected:a,addToCart:u,removeProductFromCart:f}){let s;const{setPriceSelected:e}=T(),d=p.useId(),b=g=>{s=g.target.value,e(i,s==="Grande"?t:o,s==="Grande"?3:1)};return r.jsxs("div",{className:"order__item",children:[r.jsxs("div",{className:"order__item-r1",children:[r.jsx("p",{className:"order__name",children:c.toUpperCase()}),r.jsxs("select",{value:a==t?"Grande":"Chico",onChange:b,name:d,id:d,className:"order__item-selectsize",children:[r.jsx("option",{value:"Grande",disabled:t==0,children:"Grande"}),r.jsx("option",{value:"Chico",disabled:o==0,children:"Chico"})]}),r.jsx("p",{className:"order__price",children:`$${a*n}`})]}),r.jsxs("div",{className:"order__item-r2",children:[r.jsx("p",{className:"order__desc",children:l.toUpperCase()}),r.jsxs("div",{className:"order__buttons",children:[r.jsx("img",{src:le,alt:"Sumar Item",onClick:u}),r.jsx("p",{children:n}),r.jsx("img",{src:ue,alt:"Restar item",onClick:f})]})]})]})}function me(){return r.jsxs(he,{children:[r.jsx(pe,{children:" El carrito está vacio"}),r.jsx(Ae,{to:"/carta",children:r.jsx(_e,{className:"button",children:"Ver Carta"})})]})}const he=E.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
`,pe=E.p`
    text-align: center;
`,Ae=E(R)`
    width: 100%;
    display: flex;
    justify-content: center;
`,_e=E.button`
    display: flex;
    width: fit-content;
    height: 2rem;
    padding: 0.5rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    text-align: center;
    font-size: 0.8125rem;
    font-family: 'Amiri';
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.00163rem;
    text-transform: uppercase;
    border: none;
    background-color: var(--gray-1);

    &:hover{
    cursor: pointer;
    transform: scale(1.1);
    background-color: var(--gray-3);
}
`;function we({onSubmit:i,total:c,preferenceId:t,isOrderedEft:o}){var y,m,h,_,w;const l=p.useId(),n=p.useId(),a=p.useId(),u=p.useId(),f=p.useId(),{register:s,watch:e,formState:d,handleSubmit:b,reset:g}=k({mode:"onTouched"}),{errors:A}=d;return p.useEffect(()=>{o.isSubmitted&&g()},[o.isSubmitted,g]),r.jsxs("form",{className:"form-container",onSubmit:b(i),children:[r.jsxs("div",{className:"order__note-container",children:[r.jsx("label",{htmlFor:f,children:"Nota de pedido"}),r.jsx("textarea",{name:f,id:f,cols:"30",rows:"5",placeholder:"Por ej: quiero la hamburguesa sin lechuga y las papas sin panceta",...s("notaPedido")})]}),r.jsxs("div",{className:"order__form",children:[r.jsxs("div",{className:"form__row",children:[r.jsx("label",{htmlFor:u,children:"Tipo Entrega"}),r.jsxs("select",{name:u,id:u,...s("tipoEntrega",{required:"Debes incluir como sera entregado"}),children:[r.jsx("option",{value:"1",children:"Delivery"}),r.jsx("option",{value:"2",children:"Retirar en el local"})]})]}),r.jsxs("div",{className:"form__row",children:[r.jsx("label",{htmlFor:l,children:"Direccion"}),r.jsxs("div",{children:[r.jsx("input",{type:"text",id:l,...s("direccionCliente",{required:"Debes incluir la direccion",disabled:e("tipoEntrega")!=="1",pattern:G})}),((y=A.direccionCliente)==null?void 0:y.type)==="pattern"&&r.jsx("p",{role:"alert",className:"form-error input-error",children:"Algunos caracteres no estan permitidos"}),((m=A.direccionCliente)==null?void 0:m.type)==="required"&&r.jsx("p",{role:"alert",className:"form-error input-error",children:A.direccionCliente.message})]})]}),r.jsxs("div",{className:"form__row",children:[r.jsx("label",{htmlFor:n,children:"Tipo Pago"}),r.jsxs("select",{name:n,id:n,...s("tipoPago",{required:"Debes incluir como pagar tu pedido"}),children:[r.jsx("option",{value:"1",children:"Efectivo"}),r.jsx("option",{value:"2",children:"Transferencia"})]})]}),r.jsxs("div",{className:"form__row",children:[r.jsx("label",{htmlFor:a,children:"Abono con"}),r.jsxs("div",{children:[r.jsx("input",{type:"text",id:a,...s("montoEft",{required:"Debes incluir con cuanto efectivo nos pagas.",disabled:e("tipoPago")==="2",pattern:{value:B,message:"Solo se permiten numeros"},validate:()=>e("montoEft")>=c||"El monto a pagar debe ser superior al total"})}),((h=A.montoEft)==null?void 0:h.type)==="required"&&r.jsx("p",{role:"alert",className:"form-error input-error",children:A.montoEft.message}),((_=A.montoEft)==null?void 0:_.type)==="pattern"&&r.jsx("p",{role:"alert",className:"form-error input-error",children:A.montoEft.message}),((w=A.montoEft)==null?void 0:w.type)==="validate"&&r.jsx("p",{role:"alert",className:"form-error input-error",children:A.montoEft.message})]})]})]}),r.jsxs("div",{className:"order__button",children:[r.jsx("button",{type:"submit",className:"order__confirmar button",disabled:c==0,children:"Confirmar Pedido"}),t&&e("tipoPago")==="2"&&r.jsx(ce,{initialization:{preferenceId:t,redirectMode:"modal"},className:"button mp_button"})]})]})}const xe=U("/");function ge(){ee("TEST-803ddd42-4075-4c56-934e-c037302ed0d6");const[i,c]=p.useState(0),[t,o]=p.useState(null),[l,n]=p.useState({isSubmitted:!1,goodStatus:!1}),{auth:a}=Q(),{cart:u,clearCart:f,addToCart:s,removeProductFromCart:e,modifyCart:d}=T();console.log(u),p.useEffect(()=>{new URLSearchParams(window.location.search).get("collection_status")&&f()},[]),p.useEffect(()=>{(()=>{const h=u.reduce((_,w)=>_+w.priceSelected*w.quantity,0);c(h)})()},[u]);function b(){n({isSubmitted:!1,goodStatus:!1})}async function g({direccionCliente:m,tipoPago:h,tipoEntrega:_,notaPedido:w}){try{return await de(d(u),m,h,_,w,a.data.user_id)}catch(v){return v}}const A=async m=>{if(m.tipoPago=="2")try{const _=(await g(m)).data.response.id;_&&o(_)}catch{n({isSubmitted:!0,goodStatus:!1})}else try{const h=new Date,_=h.toISOString(),w=await H(_,a.data.user_id,m.direccionCliente,m.notaPedido,parseInt(m.total),parseInt(m.tipoPago),parseInt(m.tipoEntrega),parseInt(m.montoEft),d(u));if(w.status>=200&&w.status<300){const v=await V({date:h});xe.emit("newOrder",v.data.data[0]),n({isSubmitted:!0,goodStatus:!0}),f()}}catch(h){n({isSubmitted:!0,goodStatus:!1}),console.log(h)}},y=m=>{const h={...m,carritoItems:u,total:i};A(h)};return r.jsx(r.Fragment,{children:r.jsxs("div",{className:"delivery__container",children:[r.jsx(L,{pathPrev:"Home",pathActual:ge.name,goTo:"Home"}),r.jsxs("div",{className:"order__container",children:[r.jsx("div",{className:"order__items",children:u.length===0?r.jsx(me,{}):u.map(m=>r.jsx(fe,{...m,addToCart:()=>s(m),removeProductFromCart:()=>e(m)},F()))}),r.jsxs("div",{className:"order__total",children:[r.jsx("p",{className:"order__total-name",children:"TOTAL"}),r.jsx("p",{className:"order__total-price",children:`$${i}`})]}),r.jsx("div",{className:"order__button",children:r.jsx("button",{className:"button",onClick:f,children:"Limpiar Carrito"})})]}),r.jsx(we,{onSubmit:y,total:i,preferenceId:t,isOrderedEft:l}),r.jsx(q,{isSubmitted:l.isSubmitted,handleSubmit:b,isGoodStatus:l.goodStatus,position:"top",msg:l.goodStatus?"Tu pedido ha sido realizado correctamente!":"Tu pedido no pudo ser procesado, intente nuevamente!"})]})})}export{ge as default};
