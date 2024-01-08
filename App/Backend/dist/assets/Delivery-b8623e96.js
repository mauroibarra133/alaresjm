import{r as h,R as G,a as k,S as Q,C as F,j as r,s as P,N as U,b as q,A as V,O as H,u as L,P as Y}from"./index-742b257e.js";import{u as R}from"./useCart-78ae86a7.js";import{g as W}from"./functions-49b582f3.js";import{l as K,c as X,g as J}from"./index-48ddda69.js";import{L as z}from"./LoaderComponent-f51d41ef.js";import{M as Z}from"./Modal-675bf55b.js";var D={};Object.defineProperty(D,"__esModule",{value:!0});var B=D.loadMercadoPago=void 0;const O="https://sdk.mercadopago.com/js/v2",$=/^https:\/\/sdk\.mercadopago\.com\/js\/v2\/?(\?.*)?$/,M="MercadoPago has already been initialized in your window, please remove the duplicate import",ee="MercadoPago.js not available",te="Failed to load MercadoPago.js",ne=()=>{for(var i=document.querySelectorAll(`script[src^="${O}"`),c=0;c<i.length;c++){var t=i[c];if($.test(t.src))return t}return null},oe=()=>{const i=document.createElement("script");i.src=O;const c=document.head||document.body;if(!c)throw new Error("Expected document.body or document.head not to be null. MercadoPago requires a <body> or a <head> element, please add on your project.");return c.appendChild(i),i};let C=null;const ae=()=>(C!==null||(C=new Promise((i,c)=>{if(typeof window>"u"){i(null);return}if(window.MercadoPago){console.warn(M),i(window.MercadoPago);return}try{let t=ne();t?console.warn(M):t||(t=oe()),t.addEventListener("load",()=>{window.MercadoPago?i(window.MercadoPago):c(new Error(ee))}),t.addEventListener("error",()=>{c(new Error(te))})}catch(t){c(t);return}})),C);B=D.loadMercadoPago=ae;var re=globalThis&&globalThis.__awaiter||function(i,c,t,o){function d(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function u(e){try{l(o.next(e))}catch(s){a(s)}}function f(e){try{l(o.throw(e))}catch(s){a(s)}}function l(e){e.done?n(e.value):d(e.value).then(u,f)}l((o=o.apply(i,c||[])).next())})};class b{static getInstance(){return re(this,void 0,void 0,function*(){if(this.publicKey)return this.loadedInstanceMercadoPago||(yield B(),this.loadedInstanceMercadoPago=!0),this.instanceMercadoPago||(this.instanceMercadoPago=new window.MercadoPago(this.publicKey,this.options)),this.instanceMercadoPago;console.error("Expected the PUBLIC_KEY to render the MercadoPago SDK React")})}}b.publicKey=null;b.options={};b.instanceMercadoPago=void 0;b.loadedInstanceMercadoPago=!1;function ie(i,c){return Object.keys(i).length===Object.keys(c).length&&Object.keys(i).every(o=>Object.prototype.hasOwnProperty.call(c,o)&&i[o]===c[o])}const se=(i,c)=>{const t=Object.assign(Object.assign({},c),{frontEndStack:"react"}),o=!ie(b.options,t);(i!==b.publicKey||o)&&(b.publicKey=i,b.options=t,b.instanceMercadoPago=void 0)},ce=200;var le=globalThis&&globalThis.__awaiter||function(i,c,t,o){function d(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function u(e){try{l(o.next(e))}catch(s){a(s)}}function f(e){try{l(o.throw(e))}catch(s){a(s)}}function l(e){e.done?n(e.value):d(e.value).then(u,f)}l((o=o.apply(i,c||[])).next())})};const de=()=>le(void 0,void 0,void 0,function*(){}),ue=()=>{},fe=i=>{console.error(i)};var me=globalThis&&globalThis.__awaiter||function(i,c,t,o){function d(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function u(e){try{l(o.next(e))}catch(s){a(s)}}function f(e){try{l(o.throw(e))}catch(s){a(s)}}function l(e){e.done?n(e.value):d(e.value).then(u,f)}l((o=o.apply(i,c||[])).next())})};const pe=({settings:i,name:c,divId:t,controller:o})=>me(void 0,void 0,void 0,function*(){const d=yield b.getInstance(),n=d==null?void 0:d.bricks();window[o]=yield n==null?void 0:n.create(c,t,i)}),he=({onReady:i=ue,onError:c=fe,onSubmit:t=de,customization:o,initialization:d,locale:n})=>(h.useEffect(()=>{let a;const u={settings:{initialization:d,customization:o,locale:n,callbacks:{onReady:i,onSubmit:t,onError:c}},name:"wallet",divId:"walletBrick_container",controller:"walletBrickController"};return a=setTimeout(()=>{pe(u)},ce),()=>{var f;clearTimeout(a),(f=window.walletBrickController)===null||f===void 0||f.unmount()}},[o,d,i,c,t]),G.createElement("div",{id:"walletBrick_container"}));globalThis&&globalThis.__awaiter;globalThis&&globalThis.__awaiter;globalThis&&globalThis.__awaiter;globalThis&&globalThis.__awaiter;globalThis&&globalThis.__awaiter;globalThis&&globalThis.__awaiter;globalThis&&globalThis.__awaiter;async function Ae(i,c,t,o,d,n){try{return await k.post(`${Q}/create_preference`,{items:i,address:c,extra:{tipoPago:t,tipoEntrega:o,notaPedido:d,user_id:n}},{headers:{"Content-Type":"application/json"}})}catch(a){throw console.error("Error al realizar la solicitud a Mercado Pago:",a),new F}}const we="data:image/webp;base64,UklGRvQAAABXRUJQVlA4WAoAAAAQAAAAHQAAHQAAQUxQSJkAAAABkBCAbRg2ghIogWImgiIohiIo3vZHSRlExAQgXGyP3dp4yEnNmz23ZsR5yKDnqQ6cx/zPnuf1j98ZQE1MRVOAIwEdGTU3imbrG/Y37ZMlFVCS+uQ5CnHfdabD+DAtqYCS1HN0n/4VoImb32h/s5ejBjoDKhpx4gKWo1sAqHf7H/AV8X++aZz5gkjLN97IF52YuF+L7bGbGyEAVlA4IDQAAAAwAwCdASoeAB4APxF4s1IsJySisBgIAYAiCWIAyNQYTVHAAP7wakt6paUE4s2QbCb1lAAA",ge="data:image/webp;base64,UklGRsAAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSFoAAAABYAhJkqRGWZRBGZNGGZRDaZT75kOIiAlASuqWwtE03aVY8G4z4T0kALvHDmgm+L1osXFpQ3ca+B8OThrJrWSoayNsw881E+AzA8AJAeCwR+SuSob6eOiWSKRWUDggQAAAAHADAJ0BKhQAFAA+6W6vUikmJCKoCAEgHQllAL9xwFkADdxwAAD+8USVIyDev6A76NpWwvHHhg5avxgpa43QAAA=";function be({id:i,nombre:c,preciogrande:t,preciochico:o,descripcion:d,quantity:n,priceSelected:a,addToCart:u,removeProductFromCart:f}){let l;const{setPriceSelected:e}=R(),s=h.useId(),w=x=>{l=x.target.value,e(i,l==="Grande"?t:o,l==="Grande"?3:1)};return r.jsxs("div",{className:"order__item",children:[r.jsxs("div",{className:"order__item-r1",children:[r.jsx("p",{className:"order__name",children:c.toUpperCase()}),r.jsxs("select",{value:a==t?"Grande":"Chico",onChange:w,name:s,id:s,className:"order__item-selectsize",children:[t!=0&&r.jsx("option",{value:"Grande",disabled:t==0,children:"Grande"}),o!=0&&r.jsx("option",{value:"Chico",disabled:o==0,children:"Chico"})]}),r.jsx("p",{className:"order__price",children:`$${a*n}`})]}),r.jsxs("div",{className:"order__item-r2",children:[r.jsx("p",{className:"order__desc",children:d.toUpperCase()}),r.jsxs("div",{className:"order__buttons",children:[r.jsx("img",{src:we,alt:"Sumar Item",onClick:u}),r.jsx("p",{children:n}),r.jsx("img",{src:ge,alt:"Restar item",onClick:f})]})]})]})}function xe(){return r.jsxs(ye,{children:[r.jsx(_e,{children:" El carrito está vacio"}),r.jsx(je,{to:"/carta",children:r.jsx(ve,{className:"button",children:"Ver Carta"})})]})}const ye=P.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
`,_e=P.p`
    text-align: center;
`,je=P(U)`
    width: 100%;
    display: flex;
    justify-content: center;
`,ve=P.button`
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
`;function Ee({onSubmit:i,total:c,preferenceId:t,isOrderedEft:o,loading:d,isTrashed:n,setTrashStatus:a}){var v,E,S,I,m;const u=h.useId(),f=h.useId(),l=h.useId(),e=h.useId(),s=h.useId(),{register:w,watch:x,formState:N,handleSubmit:j,reset:_}=q({mode:"onTouched",defaultValues:{notaPedido:"",direccionCliente:"",montoEft:"",tipoEntrega:"1"}}),{errors:g}=N;return h.useEffect(()=>{o.isSubmitted&&_()},[o.isSubmitted,_]),h.useEffect(()=>{n&&(_({notaPedido:"",direccionCliente:"",montoEft:""}),a())},[n]),r.jsxs("form",{className:"form-container",onSubmit:j(i),children:[r.jsxs("div",{className:"order__note-container",children:[r.jsx("label",{htmlFor:s,children:"Nota de pedido"}),r.jsx("textarea",{name:s,id:s,cols:"30",rows:"5",placeholder:"Por ej: quiero la hamburguesa sin lechuga y las papas sin panceta",...w("notaPedido")})]}),r.jsxs("div",{className:"order__form",children:[r.jsxs("div",{className:"form__row",children:[r.jsx("label",{htmlFor:e,children:"Tipo Entrega"}),r.jsxs("select",{name:e,id:e,...w("tipoEntrega",{required:"Debes incluir como sera entregado"}),children:[r.jsx("option",{value:"1",children:"Delivery"}),r.jsx("option",{value:"2",children:"Retirar en el local"})]})]}),r.jsxs("div",{className:"form__row",children:[r.jsx("label",{htmlFor:u,children:"Direccion"}),r.jsxs("div",{children:[r.jsx("input",{type:"text",id:u,...w("direccionCliente",{required:"Debes incluir la direccion",disabled:x("tipoEntrega")!=="1",pattern:V})}),((v=g.direccionCliente)==null?void 0:v.type)==="pattern"&&r.jsx("p",{role:"alert",className:"form-error input-error",children:"Algunos caracteres no estan permitidos"}),((E=g.direccionCliente)==null?void 0:E.type)==="required"&&r.jsx("p",{role:"alert",className:"form-error input-error",children:g.direccionCliente.message})]})]}),r.jsxs("div",{className:"form__row",children:[r.jsx("label",{htmlFor:f,children:"Tipo Pago"}),r.jsxs("select",{name:f,id:f,...w("tipoPago",{required:"Debes incluir como pagar tu pedido"}),children:[r.jsx("option",{value:"1",children:"Efectivo"}),r.jsx("option",{value:"2",children:"Transferencia"})]})]}),r.jsxs("div",{className:"form__row",children:[r.jsx("label",{htmlFor:l,children:"Abono con"}),r.jsxs("div",{children:[r.jsx("input",{type:"text",id:l,...w("montoEft",{required:"Debes incluir con cuanto efectivo nos pagas.",disabled:x("tipoPago")==="2",pattern:{value:H,message:"Solo se permiten números"},validate:p=>{const A=parseInt(p);if(A>=c*2)return"El monto no puede ser tan grande";if(A<c)return"El monto a pagar debe ser superior al total"}})}),((S=g.montoEft)==null?void 0:S.type)==="required"&&r.jsx("p",{role:"alert",className:"form-error input-error",children:g.montoEft.message}),((I=g.montoEft)==null?void 0:I.type)==="pattern"&&r.jsx("p",{role:"alert",className:"form-error input-error",children:g.montoEft.message}),((m=g.montoEft)==null?void 0:m.type)==="validate"&&r.jsx("p",{role:"alert",className:"form-error input-error",children:g.montoEft.message})]})]})]}),r.jsxs("div",{className:"order__button",children:[r.jsx("button",{type:"submit",className:"order__confirmar button",disabled:c==0,children:d?r.jsx(z,{size:"small",color:"mp-color"}):"Confirmar pedido"}),t&&x("tipoPago")==="2"&&r.jsx(he,{initialization:{preferenceId:t,redirectMode:"modal"},className:"button mp_button"})]})]})}const Se="data:image/webp;base64,UklGRh4DAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSLICAAABGTJp2xDb20T0P9iqfh6QNNu2aT37i23bdlpfunbST9Pmn0jPTrpu2Wzatnn57Hc+3O9crH2eqr6qiAlw4DaSIrl3e2+5jukHlDTGqPGWm26QtlzFfHXDUS8poqUdpvEaKOegrdKUGM/wk+mWuVQYdvIXaq8NFNijmj85E73C3nJ+Y+2wFXsz+PXSeOwN4FdEB+y100AVV4IkjzJVcmuuvyGGGGuMIQaRXU/PZfnstVc+++yNOEb6GGOIIYYYa4jA0/7xymefffbaWzlQndXf0EOMRqCV8cNn9XfDV3mBH6/+Ph6OMKqUX+ofC6/9FhgTYVfBPyfLVqRgqkIqARXTRlICSUpISiA+T5CQxJZmoFY6CyphQLdPXErwAkwY0O3z2FSB07G7GwFBiw0dKbwzFb/FtozmWMmxBU8w9MJrTR74nvphi2vIdNuN5OHrzCHHvUTGWWqllhz85dSBnyk/TGIi5Ixqz/Tn5pf5niGE3LPRJBf0VT96yimFbVuYHF+otznN7bJjJIQ8tcBdLdXxl1MDdg1x1FXExSF1Y4PhiPXqeMopA55JcQpzc4w0guuPX05JhE1rw+Oz9jXpr30ek7fFR1vEmyhpBP78F0u6YBW+poM0oQojAkSWrTPJb70o7UiEZBDMLKOmAX1UUp6mmNCRwry4DJjBv+6pf6BCLy6OjwSBgCZ8aAiITnmawqGF5jBaIAyAJ23h6fjQqdqKwEzxaDq8duBvuyi2DC4tKwpFMKDB5wnRoUnnYSvYNOVp1FfCLUa/7hWQmRJuN4EHwYKTZePBBv23DEw2j1/RguCJ4OQnEQiTyHz8p7x3eHgN6Q4ZRcM/8gAHd2FDb5DVDFzWVlj3rHFYFTBhNQKuoxY7qgeof1Yg8DpvqGWWGK2HKpjt/3vtjAsIg4rahTRqLwJWUDggRgAAAHAGAJ0BKoAAgAA+kUihTKWkIyIgiACwEglpbuF0kABPbYi8QVHPbEXiCo57Yi8QVHPbEXiCo57Yi8QTYAD+/1JPYoAAAAA=",Ie=K("/");function Re(){se("APP_USR-aaad6c69-62aa-4d6b-a9fd-e744881e088a");const[i,c]=h.useState(0),[t,o]=h.useState(null),[d,n]=h.useState(null),[a,u]=h.useState({isSubmitted:!1,goodStatus:!1}),[f,l]=h.useState(!1),{auth:e}=L(),{cart:s,clearCart:w,addToCart:x,removeProductFromCart:N,modifyCart:j}=R();h.useEffect(()=>{new URLSearchParams(window.location.search).get("collection_status")&&w()},[]),h.useEffect(()=>{(()=>{const p=s.reduce((A,y)=>A+y.priceSelected*y.quantity,0);c(p)})()},[s]);function _(){u({isSubmitted:!1,goodStatus:!1})}async function g({direccionCliente:m,tipoPago:p,tipoEntrega:A,notaPedido:y}){try{return await Ae(j(s),m,p,A,y,e.data.user_id)}catch(T){return T}}const v=async m=>{if(m.tipoPago=="2")try{const p=await g(m),A=p.data.response.id;console.log("Preference ID traido: ",p),A&&(console.log("ID",A),o(A))}catch{u({isSubmitted:!0,goodStatus:!1})}else try{const p=new Date,A=p.toISOString(),y=await X(A,e.data.user_id,m.direccionCliente,m.notaPedido,parseInt(m.total),parseInt(m.tipoPago),parseInt(m.tipoEntrega),parseInt(m.montoEft),j(s));if(y.status>=200&&y.status<300){const T=await J({date:p});Ie.emit("newOrder",T.data.data[0]),u({isSubmitted:!0,goodStatus:!0}),w()}}catch(p){u({isSubmitted:!0,goodStatus:!1}),console.log(p)}l(!1)},E=m=>{l(!0);const p={...m,carritoItems:s,total:i};v(p)};function S(){n(!0),w()}function I(){n(!1)}return r.jsx(r.Fragment,{children:r.jsxs("div",{className:"delivery__container",children:[r.jsx(Y,{pathPrev:"Home",pathActual:"Delivery",goTo:"Home"}),r.jsxs("div",{className:"order__container",children:[r.jsx("div",{className:"order__items",children:s.length===0?r.jsx(xe,{}):s.map(m=>r.jsx(be,{...m,addToCart:()=>x(m),removeProductFromCart:()=>N(m)},W()))}),r.jsxs("div",{className:"order__total",children:[r.jsx("p",{className:"order__total-name",children:"TOTAL"}),r.jsx("p",{className:"order__total-price",children:`$${i}`})]}),r.jsx("div",{className:"order__button",children:r.jsx("button",{className:"button delete_cart_button",onClick:S,children:r.jsx("img",{src:Se,alt:"Trash Button"})})})]}),r.jsx(Ee,{onSubmit:E,total:i,preferenceId:t,isOrderedEft:a,loading:f,setTrashStatus:I,isTrashed:d}),a.isSubmitted&&r.jsx(Z,{isSubmitted:a.isSubmitted,handleSubmit:_,isGoodStatus:a.goodStatus,position:"top",msg:a.goodStatus?"Tu pedido ha sido realizado correctamente!":"Tu pedido no pudo ser procesado, intente nuevamente!"})]})})}export{Re as default};