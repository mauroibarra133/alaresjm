import{e as T,r as t,u as w,b as E,j as e,P as R,v as F,o as L,p as z,k as I,q as M}from"./index-39b704a7.js";import{M as P}from"./Modal-58cfa6eb.js";import{a as A}from"./reservas.services-228d6422.js";function O(){var m,h,u,x,p,j,v,f;const N=T(),d=t.useId(),o=t.useId(),l=t.useId(),{auth:_}=w(),{register:a,handleSubmit:S,formState:g}=E({mode:"onBlur"}),{errors:s}=g,[i,c]=t.useState({isSubmitted:!1,isGood:!1,msg:""});function y(){c({isSubmitted:!1,isGood:!1,msg:""}),N("/")}function n(r,b="Tu reserva no se ha podido confirmar.Intente mas tarde"){c({isSubmitted:!0,isGood:r,msg:r==!0?"Tu reserva se ha registrado correctamente":b})}async function q(r){if(!M(r.hora,r.fecha)){n(!1,"La hora ingresada es antigua");return}try{await A(r.fecha,r.hora,_.data.user_id,r.comensales,r.zona,r.cliente),n(!0)}catch{n(!1)}}return e.jsxs("div",{className:"reservas__container",children:[e.jsx(R,{pathPrev:"Home",pathActual:"Reservas",goTo:"Home"}),e.jsx("div",{className:"reservas__title",children:e.jsx("h2",{children:"RESERVAS"})}),e.jsx("div",{className:"reservas__form-wrapper",children:e.jsxs("form",{className:"reservas__form",onSubmit:S(q),children:[e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",children:"Fecha"}),e.jsx("input",{type:"date",...a("fecha",{required:!0,validate:F})})]}),((m=s.fecha)==null?void 0:m.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"La fecha es requerida."}),((h=s.fecha)==null?void 0:h.type)==="validate"&&e.jsx("p",{role:"alert",className:"form-error",children:"La fecha es pasada."})]}),e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",children:"Hora"}),e.jsx("input",{type:"time",...a("hora",{required:!0,validate:L})})]}),((u=s.hora)==null?void 0:u.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"La hora es requerida."}),((x=s.hora)==null?void 0:x.type)==="validate"&&e.jsx("p",{role:"alert",className:"form-error",children:"Debe ser entre las 19:00hs y 23:00hs."})]}),e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:d,children:"Numero de comensales"}),e.jsx("input",{type:"number",id:d,...a("comensales",{required:!0,validate:z})})]}),((p=s.comensales)==null?void 0:p.type)==="required"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{role:"alert",className:"form-error",children:"La cantidad de comensales"}),e.jsx("p",{role:"alert",className:"form-error",children:" es requerida."})]}),((j=s.comensales)==null?void 0:j.type)==="validate"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{role:"alert",className:"form-error",children:"La cantidad debe ser mayor a cero"}),e.jsx("p",{role:"alert",className:"form-error"})]})]}),e.jsx("div",{className:"reservas__row",children:e.jsxs("div",{children:[e.jsx("label",{htmlFor:o,children:"Zona a reservar"}),e.jsxs("select",{name:o,id:o,...a("zona",{required:!0}),children:[e.jsx("option",{value:"Terraza",children:"Terraza"}),e.jsx("option",{value:"Terraza Norte",children:"Terraza Norte"}),e.jsx("option",{value:"Salon",children:"Salon"}),e.jsx("option",{value:"Patio",children:"Patio"})]})]})}),e.jsxs("div",{className:"reservas__row",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:l,children:"A nombre de"}),e.jsx("input",{type:"text",name:l,id:l,...a("cliente",{required:!0,pattern:I})})]}),((v=s.cliente)==null?void 0:v.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"El nombre es requerido"}),((f=s.cliente)==null?void 0:f.type)==="pattern"&&e.jsx("p",{role:"alert",className:"form-error",children:"El nombre solo debe incluir letras"})]}),e.jsx("div",{className:"button__wrapper",children:e.jsx("button",{className:"button",type:"submit",children:"RESERVAR"})})]})}),e.jsx(P,{isSubmitted:i.isSubmitted,isGoodStatus:i.isGood,handleSubmit:y,msg:i.msg})]})}export{O as default};
