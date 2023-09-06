import{e as T,r as t,u as w,b as E,j as e,P as R,v as F,o as z,p as G,k as I,q as L}from"./index-cd58f39f.js";import{M as A}from"./Modal-62063fd8.js";import{a as M}from"./reservas.services-633f42b2.js";function D(){var m,h,u,x,p,j,v,f;const N=T(),c=t.useId(),l=t.useId(),i=t.useId(),{auth:_}=w(),{register:a,handleSubmit:S,formState:g}=E({mode:"onBlur"}),{errors:s}=g,[o,n]=t.useState({isSubmitted:!1,isGood:!1,msg:""});function y(){o.isGood&&(n({isSubmitted:!1,isGood:!1,msg:""}),N("/mis-reservas")),n({isSubmitted:!1,isGood:!1,msg:""})}function d(r,b="Tu reserva no se ha podido confirmar.Intente mas tarde"){n({isSubmitted:!0,isGood:r,msg:r==!0?"Tu reserva se ha registrado correctamente":b})}async function q(r){if(!L(r.hora,r.fecha)){d(!1,"La hora ingresada es antigua");return}try{await M(r.fecha,r.hora,_.data.user_id,r.comensales,r.zona,r.cliente),d(!0)}catch{d(!1)}}return e.jsxs("div",{className:"reservas__container",children:[e.jsx(R,{pathPrev:"Home",pathActual:"Reservas",goTo:"Home"}),e.jsx("div",{className:"reservas__title",children:e.jsx("h2",{children:"RESERVAS"})}),e.jsx("div",{className:"reservas__form-wrapper",children:e.jsxs("form",{className:"reservas__form",onSubmit:S(q),children:[e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",children:"Fecha"}),e.jsx("input",{type:"date",...a("fecha",{required:!0,validate:F})})]}),((m=s.fecha)==null?void 0:m.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"La fecha es requerida."}),((h=s.fecha)==null?void 0:h.type)==="validate"&&e.jsx("p",{role:"alert",className:"form-error",children:"La fecha es pasada."})]}),e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",children:"Hora"}),e.jsx("input",{type:"time",...a("hora",{required:!0,validate:z})})]}),((u=s.hora)==null?void 0:u.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"La hora es requerida."}),((x=s.hora)==null?void 0:x.type)==="validate"&&e.jsx("p",{role:"alert",className:"form-error",children:"Debe ser entre las 19:00hs y 23:00hs."})]}),e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:c,children:"Numero de comensales"}),e.jsx("input",{type:"number",id:c,...a("comensales",{required:!0,validate:G})})]}),((p=s.comensales)==null?void 0:p.type)==="required"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{role:"alert",className:"form-error",children:"La cantidad de comensales"}),e.jsx("p",{role:"alert",className:"form-error",children:" es requerida."})]}),((j=s.comensales)==null?void 0:j.type)==="validate"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{role:"alert",className:"form-error",children:s.comensales.message}),e.jsx("p",{role:"alert",className:"form-error"})]})]}),e.jsx("div",{className:"reservas__row",children:e.jsxs("div",{children:[e.jsx("label",{htmlFor:l,children:"Zona a reservar"}),e.jsxs("select",{name:l,id:l,...a("zona",{required:!0}),children:[e.jsx("option",{value:"Terraza",children:"Terraza"}),e.jsx("option",{value:"Terraza Norte",children:"Terraza Norte"}),e.jsx("option",{value:"Salon",children:"Salon"}),e.jsx("option",{value:"Patio",children:"Patio"})]})]})}),e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:i,children:"A nombre de"}),e.jsx("input",{type:"text",name:i,id:i,...a("cliente",{required:!0,pattern:I})})]}),((v=s.cliente)==null?void 0:v.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"El nombre es requerido"}),((f=s.cliente)==null?void 0:f.type)==="pattern"&&e.jsx("p",{role:"alert",className:"form-error",children:"El nombre solo debe incluir letras"})]}),e.jsx("div",{className:"button__wrapper",children:e.jsx("button",{className:"button",type:"submit",children:"RESERVAR"})})]})}),o.isSubmitted&&e.jsx(A,{isSubmitted:o.isSubmitted,isGoodStatus:o.isGood,handleSubmit:y,msg:o.msg})]})}export{D as default};
