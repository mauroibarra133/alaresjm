import{r as o,b as F,j as e,i as G,p as B,q as D,w as P,t as A,v as V,u as k,P as O}from"./index-742b257e.js";import{e as U}from"./eye-slash-d3ee0e19.js";import{F as R}from"./FormVacio-fed2e834.js";import{v as $,a as W,c as C,d as Z,e as T,f as H,t as L}from"./functions-49b582f3.js";import{u as Y,d as J,g as K}from"./reservas.services-61d4428f.js";import{p as Q}from"./pencil-solid-d38e41d0.js";import{c as q}from"./xmark-solid-4f97102d.js";import{M as I}from"./Modal-675bf55b.js";import{L as X}from"./LoaderComponent-f51d41ef.js";function ee({showModalUpdate:a,reserva:s,handleCloseModalUpdate:c}){var t,h,_,S,r,d,E;const m=o.useId(),g=o.useId(),f=o.useId(),p=new Date(s.fecha).toISOString().split("T")[0],{register:i,handleSubmit:N,formState:j,setValue:y}=F({mode:"onBlur"}),[u,v]=o.useState({isSubmitted:!1,isGood:!1,msg:""}),{errors:l}=j;function b(){u.isGood?(v({isSubmitted:!1,isGood:!1,msg:""}),c()):v({isSubmitted:!1,isGood:!1,msg:""})}function x(n,M="Hubo un error al modificar tu reserva"){v({isSubmitted:!0,isGood:n,msg:n?"Tu reserva ha sido modificada correctamente":M})}async function w(n){if(n.cliente==s.cliente_reserva&&parseInt(n.comensales)==s.cantidad_personas&&n.fecha==p&&n.hora==s.hora&&n.zona==s.lugar)v({isSubmitted:!0,isGood:!1,msg:"No se ha modificado ningun campo"});else{if(!C(n.hora,n.fecha)){x(!1,"La hora ingresada es antigua");return}(await Y(s.id,{...n,estado:"A Confirmar"})).status===200?x(!0):x(!1)}}return o.useEffect(()=>{y("zona",s.lugar)}),e.jsx(e.Fragment,{children:a&&e.jsxs("div",{className:"modal-modificar",children:[e.jsx("h1",{children:"Modificar Datos"}),e.jsx("img",{className:"modal-closebutton",src:q,alt:"Close Button",onClick:c}),e.jsx("div",{className:"modal-modificar__container",children:e.jsxs("form",{className:"reservas__form",onSubmit:N(w),children:[e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",children:"Fecha"}),e.jsx("input",{type:"date",defaultValue:p,...i("fecha",{required:!0,validate:$})})]}),((t=l.fecha)==null?void 0:t.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"La fecha es requerida."}),((h=l.fecha)==null?void 0:h.type)==="validate"&&e.jsx("p",{role:"alert",className:"form-error",children:"La fecha es pasada."})]}),e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",children:"Hora"}),e.jsx("input",{type:"time",defaultValue:s.hora,...i("hora",{required:!0,validate:W})})]}),((_=l.hora)==null?void 0:_.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"La hora es requerida."}),((S=l.hora)==null?void 0:S.type)==="validate"&&e.jsx("p",{role:"alert",className:"form-error",children:"Debe ser entre las 19:00hs y 23:00hs."})]}),e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:m,children:"Numero de comensales"}),e.jsx("input",{type:"number",id:m,defaultValue:s.cantidad_personas,...i("comensales",{required:!0})})]}),((r=l.comensales)==null?void 0:r.type)==="required"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{role:"alert",className:"form-error",children:"La cantidad de comensales"}),e.jsx("p",{role:"alert",className:"form-error",children:" es requerida."})]})]}),e.jsx("div",{className:"reservas__row",children:e.jsxs("div",{children:[e.jsx("label",{htmlFor:g,children:"Zona a reservar"}),e.jsxs("select",{name:g,id:g,...i("zona",{required:!0}),children:[e.jsx("option",{value:"Terraza",children:"Terraza"}),e.jsx("option",{value:"Terraza Norte",children:"Terraza Norte"}),e.jsx("option",{value:"Salon",children:"Salon"}),e.jsx("option",{value:"Patio",children:"Patio"})]})]})}),e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:f,children:"A nombre de"}),e.jsx("input",{type:"text",name:f,id:f,defaultValue:s.cliente_reserva,...i("cliente",{required:!0,pattern:G})})]}),((d=l.cliente)==null?void 0:d.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"El nombre es requerido"}),((E=l.cliente)==null?void 0:E.type)==="pattern"&&e.jsx("p",{role:"alert",className:"form-error",children:"El nombre solo debe incluir letras"})]}),e.jsx("div",{className:"button__wrapper",children:e.jsx("button",{className:"button",type:"submit",children:"ACTUALIZAR"})})]})}),u.isSubmitted&&e.jsx(I,{isSubmitted:u.isSubmitted,isGoodStatus:u.isGood,handleSubmit:b,msg:u.msg,offset:-120})]})})}const se=[{status:"A Confirmar",img:P},{status:"Reservado",img:A},{status:"Cancelado",img:V}];function ae({booking:a,fechaHoy:s}){const c=new Date(a.fecha).toISOString().split("T")[0],m=1,[g,f]=o.useState(window.innerWidth>768),[p,i]=o.useState({isClicked:!1,isGood:!1,msg:""}),[N,j]=o.useState(!1);function y(t){const h=se.find(_=>_.estado===t);return h?h.img:null}function u(){i({isClicked:!1,isGood:!1})}function v(){j(!1)}function l(t,h){i({isClicked:!0,isGood:t,msg:h})}async function b(){if(c>=s){const t=T(a.hora);H(t)>=m?(await J(a.id)).status==200?l(!0,"Reserva cancelada correctamente"):l(!1,"Hubo un error al eliminar su reserva, intente mas tarde"):l(!1,`No se puede cancelar la reserva faltando menos de ${m} hora/s`)}}async function x(){if(c==s){const t=T(a.hora);H(t)>=m?j(!0):l(!1,`No se puede modificar la reserva faltando menos de ${m} hora/s`)}else c>s&&j(!0)}const w=`${c.substring(8,10)}/${c.substring(5,7)}`;return o.useEffect(()=>{const t=()=>{f(window.innerWidth>768)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),e.jsxs("div",{className:"datos__body-row",children:[e.jsx("div",{className:"datos__body-dato",children:w}),e.jsx("div",{className:"datos__body-dato",children:a.hora}),e.jsxs("div",{className:"datos__body-dato datos__body-comensales",children:[e.jsx("img",{src:B,className:"user-icon",alt:"Cantidad de personas"}),a.cantidad_personas]}),e.jsx("div",{className:"datos__body-dato",children:a.lugar}),e.jsxs("div",{className:"datos__body-dato",children:[e.jsx("img",{src:y(Z(a.estado)),alt:a.estado,className:"status-img"}),g&&e.jsx("p",{children:a.estado})]}),e.jsxs("div",{className:"datos__body-dato acciones",children:[e.jsx("img",{src:Q,alt:"Modificar",className:C(a.hora,c)?"new":"old",onClick:()=>x()}),e.jsx("img",{src:q,alt:"Eliminar",className:C(a.hora,c)?"new":"old",onClick:()=>b()})]}),p.isSubmitted&&e.jsx(I,{isSubmitted:p.isClicked,isGoodStatus:p.isGood,handleSubmit:u,msg:p.msg,position:"top"}),N&&e.jsx(D,{comp:"reserva",children:e.jsx(ee,{showModalUpdate:N,reserva:a,handleCloseModalUpdate:v})})]},a.id)}function he(){const{auth:a}=k(),[s,c]=o.useState([]),[m,g]=o.useState(!0),[f,p]=o.useState({isSubmitted:!1,existError:!1,msg:""}),[i,N]=o.useState(1),[j,y]=o.useState(0),[u,v]=o.useState([]),[l,b]=o.useState(!0),x=6,w=new Date().toISOString().split("T")[0];o.useEffect(()=>{async function r(){if(b(!0),a.data.user_id)try{const d=await K({user_id:a.data.user_id});c(d.data.data)}catch{}finally{b(!1)}}r()},[a.data.user_id]),o.useEffect(()=>{const r=[];for(let d=1;d<=Math.ceil((t().length==0?1:t().length)/x);d++)r.push(d);v(r),S(1)},[s,m]);function t(){if(s.length<=0)return[];if(m){const r=s.filter(d=>{if(L(d.fecha)>=L(w))return d});return r.length<=0?[]:r}else return s}function h(){const d=L(new Date);if(s.length<=0)return e.jsx(R,{msg:"Aun no tienes ninguna reserva hoy",msgButton:"RESERVAR",goTo:"reservas"});{const E=t();return E.length<=0?e.jsx(R,{msg:"Aun no tienes ninguna reserva hoy",msgButton:"RESERVAR",goTo:"reservas"}):E.slice(j,x+j).map(n=>{const M=n.fecha,z=new Date(M).toLocaleDateString();return e.jsx(ae,{fechaLegible:z,booking:n,fechaHoy:d},n.id)})}}function _(){p({isSubmitted:!1,existError:!1,msg:""}),document.body.classList.remove("disable-scroll")}function S(r){r!==i&&(window.scrollTo(0,10),N(r),y((r-1)*x))}return e.jsxs("div",{className:"misreservas__container",children:[e.jsx(O,{pathPrev:"Home",pathActual:"Mis Reservas",goTo:"home"}),e.jsxs("div",{className:"misreservas__form",children:[e.jsxs("div",{className:"misreservas__filter",onClick:()=>g(!m),children:[e.jsx("img",{src:U,alt:"Icono de oculto"}),e.jsx("p",{children:m?"Mostrar reservas antiguas":"Ocultar reservas antiguas"})]}),e.jsxs("div",{className:"misreservas__datos",children:[e.jsxs("div",{className:"datos__header",children:[e.jsx("p",{className:"datos__header-column",children:"Fecha"}),e.jsx("p",{className:"datos__header-column",children:"Hora"}),e.jsx("p",{className:"datos__header-column",children:"Comens."}),e.jsx("p",{className:"datos__header-column",children:"Lugar"}),e.jsx("p",{className:"datos__header-column",children:"Estado"}),e.jsx("p",{className:"datos__header-column",children:"Acciones"})]}),e.jsx("div",{className:"datos__body",children:l?e.jsx(X,{size:"small",color:"orange"}):h()})]})]}),t().length>0&&e.jsx("div",{className:"button",children:"RESERVAR"}),u.length>1&&e.jsx("div",{className:"misreservas__paginacion-wrapper",children:e.jsxs("div",{className:"misreservas__paginacion",children:[e.jsx("div",{className:"misreservas__pagina--button",children:e.jsx("p",{onClick:()=>S(i-1==0?i:i-1),children:"Previo"})}),s&&u.map(r=>e.jsx("div",{className:"misreservas__pagina",onClick:()=>S(r),children:e.jsx("p",{className:`${r==i?"active":""}`,children:r})},r)),e.jsx("div",{className:"misreservas__pagina--button",children:e.jsx("p",{onClick:()=>S(i+1>u.length?i:i+1),children:"Siguiente"})})]})}),f.isSubmitted,e.jsx(I,{isSubmitted:f.isSubmitted,isGoodStatus:!f.existError,msg:f.msg,handleSubmit:_})]})}export{he as default};
