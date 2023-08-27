import{b as E,r as o,e as v,u as L,j as s,P as y,l as w,E as I,f as q,h as R,N as x,i as A}from"./index-183b0b0a.js";import{M as P}from"./Modal-24a39e88.js";function M(){var c,d,m,u,p,g;const{register:t,handleSubmit:h,formState:_}=E({mode:"onBlur"}),{errors:e}=_,i=o.useId(),n=o.useId(),j=v(),{isLogued:N}=L(),[a,l]=o.useState({isSubmitted:!1,existError:!1,msg:""});function b(){l({isSubmitted:!1,existError:!1,msg:""}),document.body.classList.remove("disable-scroll"),a.existError||j("/")}async function f(S){try{const r=await A(S);console.log(r),r.status>=200&&r.status<300&&(N(),l({isSubmitted:!0,existError:!1,msg:"Ha sido logueado correctamente"}),document.body.classList.add("disable-scroll"))}catch(r){l({isSubmitted:!0,existError:!0,msg:r.message}),document.body.classList.add("disable-scroll"),console.log(r.message)}}return s.jsxs("div",{className:"login__container",children:[s.jsx(y,{pathPrev:"Home",pathActual:"Login",goTo:"Home"}),s.jsxs("div",{className:"login__box-container",children:[s.jsxs("div",{className:"login__box",children:[s.jsx("img",{src:w,alt:"Alares Logo",className:"login__logo"}),s.jsxs("div",{className:"login__square",children:[s.jsxs("div",{className:"login__titles",children:[s.jsx("p",{className:"login__title",children:"LOGIN"}),s.jsx("p",{className:"login__title",children:"SIGNUP"})]}),s.jsxs("form",{className:"login__form",onSubmit:h(f),children:[s.jsxs("div",{className:"login__wrapper",children:[s.jsxs("div",{className:"login__input-wrapper",children:[s.jsx("label",{htmlFor:i,children:"Email"}),s.jsx("input",{type:"text",id:i,...t("email",{pattern:I,required:!0,minLength:8}),placeholder:"email"})]}),((c=e.email)==null?void 0:c.type)==="required"&&s.jsx("p",{role:"alert",className:"form-error",children:"El mail es requerido"}),((d=e.email)==null?void 0:d.type)==="minLength"&&s.jsx("p",{role:"alert",className:"form-error",children:"El mail debe ser mas largo"}),((m=e.email)==null?void 0:m.type)==="pattern"&&s.jsx("p",{role:"alert",className:"form-error",children:"Formato de mail incorrecto"})]}),s.jsxs("div",{className:"login__wrapper",children:[s.jsxs("div",{className:"login__input-wrapper",children:[s.jsx("label",{htmlFor:n,children:"Password"}),s.jsx("input",{type:"password",id:n,...t("password",{minLength:8,required:!0,pattern:q}),placeholder:"password"})]}),((u=e.password)==null?void 0:u.type)==="required"&&s.jsx("p",{role:"alert",className:"form-error",children:"La contraseña es requerida"}),((p=e.password)==null?void 0:p.type)==="pattern"&&s.jsx("p",{role:"alert",className:"form-error",children:"La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial "}),((g=e.password)==null?void 0:g.type)==="minLength"&&s.jsx("p",{role:"alert",className:"form-error",children:"La contraseña debe ser de al menos 8 caracteres "})]}),s.jsx("div",{className:"login__button",children:s.jsx("button",{type:"submit",className:"button",children:"INICIAR SESION"})})]}),s.jsx("img",{src:R,alt:"Foto de comida",className:"login__decoration"})]})]}),s.jsxs("div",{className:"login__msgs",children:[s.jsx(x,{to:"/signup",children:s.jsxs("p",{className:"login__msg",children:["No tienes una cuenta? ",s.jsx("span",{children:"Registrate"})]})}),s.jsx(x,{to:"/forgot-password",children:s.jsxs("p",{className:"login__msg",children:["Olvidaste tu contraseña? ",s.jsx("span",{children:"Reestablecer"})]})})]})]}),s.jsx(P,{isSubmitted:a.isSubmitted,isGoodStatus:!a.existError,msg:a.msg,handleSubmit:b})]})}export{M as default};
