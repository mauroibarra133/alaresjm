import{r as t,b as q,j as e,v as z,o as B,k as D,q as C,x as P,y as A,z as T,B as R,D as k,F as V,G as O,u as U,H as L,P as $}from"./index-2e9bb68a.js";import{e as W}from"./eye-slash-d3ee0e19.js";import{F as H}from"./FormVacio-d0d82b2d.js";import{u as Z,d as Y,g as J}from"./reservas.services-50a10895.js";import{p as K}from"./pencil-solid-d38e41d0.js";import{c as F}from"./xmark-solid-4f97102d.js";import{M as I}from"./Modal-643efe5c.js";import{L as Q}from"./LoaderComponent-06ad75c7.js";function X({showModalUpdate:r,reserva:s,handleCloseModalUpdate:c}){var i,u,_,S,a,d,M;const m=t.useId(),g=t.useId(),f=t.useId(),x=new Date(s.fecha).toISOString().split("T")[0],{register:o,handleSubmit:N,formState:j,setValue:y}=q({mode:"onBlur"}),[h,v]=t.useState({isSubmitted:!1,isGood:!1,msg:""}),{errors:l}=j;function b(){h.isGood?(v({isSubmitted:!1,isGood:!1,msg:""}),c()):v({isSubmitted:!1,isGood:!1,msg:""})}function p(n,E="Hubo un error al modificar tu reserva"){v({isSubmitted:!0,isGood:n,msg:n?"Tu reserva ha sido modificada correctamente":E})}async function w(n){if(n.cliente==s.cliente_reserva&&parseInt(n.comensales)==s.cantidad_personas&&n.fecha==x&&n.hora==s.hora&&n.zona==s.lugar)v({isSubmitted:!0,isGood:!1,msg:"No se ha modificado ningun campo"});else{if(!C(n.hora,n.fecha)){p(!1,"La hora ingresada es antigua");return}(await Z(s.id,{...n,estado:"A Confirmar"})).status===200?p(!0):p(!1)}}return t.useEffect(()=>{y("zona",s.lugar)}),e.jsx(e.Fragment,{children:r&&e.jsxs("div",{className:"modal-modificar",children:[e.jsx("h1",{children:"Modificar Datos"}),e.jsx("img",{className:"modal-closebutton",src:F,alt:"Close Button",onClick:c}),e.jsx("div",{className:"modal-modificar__container",children:e.jsxs("form",{className:"reservas__form",onSubmit:N(w),children:[e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",children:"Fecha"}),e.jsx("input",{type:"date",defaultValue:x,...o("fecha",{required:!0,validate:z})})]}),((i=l.fecha)==null?void 0:i.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"La fecha es requerida."}),((u=l.fecha)==null?void 0:u.type)==="validate"&&e.jsx("p",{role:"alert",className:"form-error",children:"La fecha es pasada."})]}),e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",children:"Hora"}),e.jsx("input",{type:"time",defaultValue:s.hora,...o("hora",{required:!0,validate:B})})]}),((_=l.hora)==null?void 0:_.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"La hora es requerida."}),((S=l.hora)==null?void 0:S.type)==="validate"&&e.jsx("p",{role:"alert",className:"form-error",children:"Debe ser entre las 19:00hs y 23:00hs."})]}),e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:m,children:"Numero de comensales"}),e.jsx("input",{type:"number",id:m,defaultValue:s.cantidad_personas,...o("comensales",{required:!0})})]}),((a=l.comensales)==null?void 0:a.type)==="required"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{role:"alert",className:"form-error",children:"La cantidad de comensales"}),e.jsx("p",{role:"alert",className:"form-error",children:" es requerida."})]})]}),e.jsx("div",{className:"reservas__row",children:e.jsxs("div",{children:[e.jsx("label",{htmlFor:g,children:"Zona a reservar"}),e.jsxs("select",{name:g,id:g,...o("zona",{required:!0}),children:[e.jsx("option",{value:"Terraza",children:"Terraza"}),e.jsx("option",{value:"Terraza Norte",children:"Terraza Norte"}),e.jsx("option",{value:"Salon",children:"Salon"}),e.jsx("option",{value:"Patio",children:"Patio"})]})]})}),e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:f,children:"A nombre de"}),e.jsx("input",{type:"text",name:f,id:f,defaultValue:s.cliente_reserva,...o("cliente",{required:!0,pattern:D})})]}),((d=l.cliente)==null?void 0:d.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"El nombre es requerido"}),((M=l.cliente)==null?void 0:M.type)==="pattern"&&e.jsx("p",{role:"alert",className:"form-error",children:"El nombre solo debe incluir letras"})]}),e.jsx("div",{className:"button__wrapper",children:e.jsx("button",{className:"button",type:"submit",children:"ACTUALIZAR"})})]})}),e.jsx(I,{isSubmitted:h.isSubmitted,isGoodStatus:h.isGood,handleSubmit:b,msg:h.msg,offset:-120})]})})}const ee=[{status:"A Confirmar",img:k},{status:"Reservado",img:V},{status:"Cancelado",img:O}];function se({booking:r,fechaHoy:s}){const c=new Date(r.fecha).toISOString().split("T")[0],m=1,[g,f]=t.useState(window.innerWidth>768),[x,o]=t.useState({isClicked:!1,isGood:!1,msg:""}),[N,j]=t.useState(!1);function y(i){const u=ee.find(_=>_.estado===i);return u?u.img:null}function h(){o({isClicked:!1,isGood:!1})}function v(){j(!1)}function l(i,u){o({isClicked:!0,isGood:i,msg:u})}async function b(){if(c>=s){const i=T(r.hora);R(i)>=m?(await Y(r.id)).status==200?l(!0,"Reserva cancelada correctamente"):l(!1,"Hubo un error al eliminar su reserva, intente mas tarde"):l(!1,`No se puede cancelar la reserva faltando menos de ${m} hora/s`)}}async function p(){if(c==s){const i=T(r.hora);R(i)>=m?j(!0):l(!1,`No se puede modificar la reserva faltando menos de ${m} hora/s`)}else c>s&&j(!0)}const w=`${c.substring(8,10)}/${c.substring(5,7)}`;return t.useEffect(()=>{const i=()=>{f(window.innerWidth>768)};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),e.jsxs("div",{className:"datos__body-row",children:[e.jsx("div",{className:"datos__body-dato",children:w}),e.jsx("div",{className:"datos__body-dato",children:r.hora}),e.jsxs("div",{className:"datos__body-dato datos__body-comensales",children:[e.jsx("img",{src:P,className:"user-icon",alt:"Cantidad de personas"}),r.cantidad_personas]}),e.jsx("div",{className:"datos__body-dato",children:r.lugar}),e.jsxs("div",{className:"datos__body-dato",children:[e.jsx("img",{src:y(),alt:r.estado,className:"status-img"}),g&&e.jsx("p",{children:r.estado})]}),e.jsxs("div",{className:"datos__body-dato acciones",children:[e.jsx("img",{src:K,alt:"Modificar",className:C(r.hora,c)?"new":"old",onClick:()=>p()}),e.jsx("img",{src:F,alt:"Eliminar",className:C(r.hora,c)?"new":"old",onClick:()=>b()})]}),e.jsx(I,{isSubmitted:x.isClicked,isGoodStatus:x.isGood,handleSubmit:h,msg:x.msg,position:"top"}),N&&e.jsx(A,{comp:"reserva",children:e.jsx(X,{showModalUpdate:N,reserva:r,handleCloseModalUpdate:v})})]},r.id)}function me(){const{auth:r}=U(),[s,c]=t.useState([]),[m,g]=t.useState(!0),[f,x]=t.useState({isSubmitted:!1,existError:!1,msg:""}),[o,N]=t.useState(1),[j,y]=t.useState(0),[h,v]=t.useState([]),[l,b]=t.useState(!0),p=6,w=new Date().toISOString().split("T")[0];t.useEffect(()=>{async function a(){if(b(!0),r.data.user_id)try{const d=await J({user_id:r.data.user_id});c(d.data.data)}catch{}finally{b(!1)}}a()},[r.data.user_id]),t.useEffect(()=>{const a=[];for(let d=1;d<=Math.ceil((i().length==0?1:i().length)/p);d++)a.push(d);v(a),S(1)},[s,m]);function i(){if(s.length<=0)return[];if(m){const a=s.filter(d=>{if(L(d.fecha)>=L(w))return d});return a.length<=0?[]:a}else return s}function u(){const d=L(new Date);if(s.length<=0)return e.jsx(H,{msg:"Aun no tienes ninguna reserva hoy",msgButton:"RESERVAR",goTo:"reservas"});{const M=i();return M.length<=0?e.jsx(H,{msg:"Aun no tienes ninguna reserva hoy",msgButton:"RESERVAR",goTo:"reservas"}):M.slice(j,p+j).map(n=>{const E=n.fecha,G=new Date(E).toLocaleDateString();return e.jsx(se,{fechaLegible:G,booking:n,fechaHoy:d},n.id)})}}function _(){x({isSubmitted:!1,existError:!1,msg:""}),document.body.classList.remove("disable-scroll")}function S(a){a!==o&&(window.scrollTo(0,10),N(a),y((a-1)*p))}return e.jsxs("div",{className:"misreservas__container",children:[e.jsx($,{pathPrev:"Home",pathActual:"Mis Reservas",goTo:"home"}),e.jsxs("div",{className:"misreservas__form",children:[e.jsxs("div",{className:"misreservas__filter",onClick:()=>g(!m),children:[e.jsx("img",{src:W,alt:"Icono de oculto"}),e.jsx("p",{children:m?"Mostrar reservas antiguas":"Ocultar reservas antiguas"})]}),e.jsxs("div",{className:"misreservas__datos",children:[e.jsxs("div",{className:"datos__header",children:[e.jsx("p",{className:"datos__header-column",children:"Fecha"}),e.jsx("p",{className:"datos__header-column",children:"Hora"}),e.jsx("p",{className:"datos__header-column",children:"Comens."}),e.jsx("p",{className:"datos__header-column",children:"Lugar"}),e.jsx("p",{className:"datos__header-column",children:"Estado"}),e.jsx("p",{className:"datos__header-column",children:"Acciones"})]}),e.jsx("div",{className:"datos__body",children:l?e.jsx(Q,{size:"small",color:"orange"}):u()})]})]}),h.length>1&&e.jsx("div",{className:"misreservas__paginacion-wrapper",children:e.jsxs("div",{className:"misreservas__paginacion",children:[e.jsx("div",{className:"misreservas__pagina--button",children:e.jsx("p",{onClick:()=>S(o-1==0?o:o-1),children:"Previo"})}),s&&h.map(a=>e.jsx("div",{className:"misreservas__pagina",onClick:()=>S(a),children:e.jsx("p",{className:`${a==o?"active":""}`,children:a})},a)),e.jsx("div",{className:"misreservas__pagina--button",children:e.jsx("p",{onClick:()=>S(o+1>h.length?o:o+1),children:"Siguiente"})})]})}),e.jsx(I,{isSubmitted:f.isSubmitted,isGoodStatus:!f.existError,msg:f.msg,handleSubmit:_})]})}export{me as default};