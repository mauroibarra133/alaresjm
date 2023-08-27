import{r as t,b as T,j as e,k as y,O,E as R}from"./index-dfffccc7.js";import{a as G}from"./dudas.services-091b3894.js";import{M as w}from"./Modal-81ca4c6b.js";function Y(){var p,x,j,f,b,S,N,_,v;const g=t.useId(),n=t.useId(),l=t.useId(),i=t.useId(),d=t.useId(),c=t.useId(),[u,E]=t.useState(!1),[s,m]=t.useState({isSubmitted:!1,goodStatus:!1}),{register:o,handleSubmit:q,formState:I,reset:L}=T({mode:"onBlur"}),{errors:r,isValid:C}=I;function k(){Object.keys(r).length==0&&E(!u)}function F(){m({isSubmitted:!1,goodStatus:!1})}function h(a){m({isSubmitted:!0,goodStatus:a})}async function M(a){try{await G(a),L(),h(!0)}catch{h(!1)}}return e.jsxs("div",{className:`hero-contactanos__container ${u?"active":""}`,name:"#contacto",children:[e.jsxs("div",{className:"hero-contactanos__title",children:[e.jsx("h2",{children:"Contactanos"}),e.jsx("p",{children:"Contrata nuestro servicio de Foodtrack o haznos tus preguntas!"})]}),e.jsxs("form",{id:g,className:"hero-contactanos__form",onSubmit:q(M),children:[e.jsxs("div",{className:"hero-contactanos__inputs",children:[e.jsxs("div",{className:"hero-contactanos__input",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:n,children:"Nombre"}),e.jsx("input",{id:n,type:"text",placeholder:"Ej: Juan",...o("nombre",{pattern:y,required:!0,maxLength:50,minLength:2})})]}),((p=r.nombre)==null?void 0:p.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"Nombre es requerido"}),((x=r.nombre)==null?void 0:x.type)==="pattern"&&e.jsx("p",{role:"alert",className:"form-error",children:"Solo deben incluir letras"})]}),e.jsxs("div",{className:"hero-contactanos__input",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:l,children:"Apellido"}),e.jsx("input",{id:l,type:"text",placeholder:"Ej: Gonzales",...o("apellido",{pattern:y,required:!0,maxLength:50,minLength:2})})]}),((j=r.apellido)==null?void 0:j.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"El apellido es requerido"}),((f=r.apellido)==null?void 0:f.type)==="pattern"&&e.jsx("p",{role:"alert",className:"form-error",children:"Solo deben incluir letras"})]}),e.jsxs("div",{className:"hero-contactanos__input",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:i,children:"Telefono"}),e.jsx("input",{id:i,type:"tel",placeholder:"Ej: 3525-6491324",...o("telefono",{pattern:O,required:!0,minLength:6})})]}),((b=r.telefono)==null?void 0:b.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"El numero es requerido"}),((S=r.telefono)==null?void 0:S.type)==="pattern"&&e.jsx("p",{role:"alert",className:"form-error",children:"Solo debe incluir numeros"})]}),e.jsxs("div",{className:"hero-contactanos__input",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:d,children:"Mail"}),e.jsx("input",{id:d,type:"email",placeholder:"Ej: alares@gmail.com",...o("mail",{pattern:R,required:!0,minLength:8})})]}),((N=r.mail)==null?void 0:N.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"El mail es requerido"})]}),e.jsxs("div",{className:"hero-contactanos__input",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:c,children:"Tu duda"}),e.jsx("textarea",{name:"duda",id:c,cols:"30",rows:"10",placeholder:"Ej: Como contrato el servicio de foodtruck?",...o("descripcion",{required:!0,minLength:10})})]}),((_=r.descripcion)==null?void 0:_.type)==="required"&&e.jsx("p",{role:"alert",className:"form-error",children:"La duda es requerida"}),((v=r.descripcion)==null?void 0:v.type)==="minLength"&&e.jsx("p",{role:"alert",className:"form-error",children:"Debe ser mayor a 10 caracteres"})]})]}),e.jsx("button",{className:"hero-contactanos__button button",type:"submit",onClick:k,disabled:!C,children:"Enviar"})]}),e.jsx(w,{isSubmitted:s.isSubmitted,handleSubmit:F,isGoodStatus:s.goodStatus,msg:s.goodStatus?"Tu duda y/o inquietud se ha enviado correctamente!":"Tu consulta no ha sido enviada correctamente. Porfavor intente mas tarde."})]})}export{Y as default};
