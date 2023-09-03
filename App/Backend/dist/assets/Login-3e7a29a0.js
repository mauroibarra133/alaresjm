import{b as v,r as o,e as y,u as w,j as s,P as I,l as q,E as R,f as A,h as P,N as h,i as F}from"./index-a2ffd1f7.js";import{M as G}from"./Modal-31f9f747.js";import{L as M}from"./LoaderComponent-2e6ae831.js";function X(){var d,m,u,p,g,x;const{register:i,handleSubmit:j,formState:_}=v({mode:"onBlur"}),{errors:e}=_,n=o.useId(),c=o.useId(),N=y(),{isLogued:b}=w(),[a,t]=o.useState({isSubmitted:!1,existError:!1,msg:""}),[f,l]=o.useState(!1);function L(){t({isSubmitted:!1,existError:!1,msg:""}),document.body.classList.remove("disable-scroll"),a.existError||N("/")}async function S(E){l(!0);try{const r=await F(E);r.status>=200&&r.status<300&&(b(),t({isSubmitted:!0,existError:!1,msg:"Ha sido logueado correctamente"}),document.body.classList.add("disable-scroll")),l(!1)}catch(r){t({isSubmitted:!0,existError:!0,msg:r.message}),console.log(r),document.body.classList.add("disable-scroll"),l(!1)}}return s.jsxs("div",{className:"login__container",children:[s.jsx(I,{pathPrev:"Home",pathActual:"Login",goTo:"Home"}),s.jsxs("div",{className:"login__box-container",children:[s.jsxs("div",{className:"login__box",children:[s.jsx("img",{src:q,alt:"Alares Logo",className:"login__logo"}),s.jsxs("div",{className:"login__square",children:[s.jsxs("div",{className:"login__titles",children:[s.jsx("p",{className:"login__title",children:"LOGIN"}),s.jsx("p",{className:"login__title",children:"SIGNUP"})]}),s.jsxs("form",{className:"login__form",onSubmit:j(S),children:[s.jsxs("div",{className:"login__wrapper",children:[s.jsxs("div",{className:"login__input-wrapper",children:[s.jsx("label",{htmlFor:n,children:"Email"}),s.jsx("input",{type:"text",id:n,...i("email",{pattern:R,required:!0,minLength:8}),placeholder:"email"})]}),((d=e.email)==null?void 0:d.type)==="required"&&s.jsx("p",{role:"alert",className:"form-error",children:"El mail es requerido"}),((m=e.email)==null?void 0:m.type)==="minLength"&&s.jsx("p",{role:"alert",className:"form-error",children:"El mail debe ser mas largo"}),((u=e.email)==null?void 0:u.type)==="pattern"&&s.jsx("p",{role:"alert",className:"form-error",children:"Formato de mail incorrecto"})]}),s.jsxs("div",{className:"login__wrapper",children:[s.jsxs("div",{className:"login__input-wrapper",children:[s.jsx("label",{htmlFor:c,children:"Password"}),s.jsx("input",{type:"password",id:c,...i("password",{minLength:8,required:!0,pattern:A}),placeholder:"password"})]}),((p=e.password)==null?void 0:p.type)==="required"&&s.jsx("p",{role:"alert",className:"form-error",children:"La contraseña es requerida"}),((g=e.password)==null?void 0:g.type)==="pattern"&&s.jsx("p",{role:"alert",className:"form-error",children:"La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial "}),((x=e.password)==null?void 0:x.type)==="minLength"&&s.jsx("p",{role:"alert",className:"form-error",children:"La contraseña debe ser de al menos 8 caracteres "})]}),s.jsx("div",{className:"login__button",children:s.jsx("button",{type:"submit",className:"button",children:f?s.jsx(M,{size:"small-button",color:"orange"}):"INICIAR SESION"})})]}),s.jsx("img",{src:P,alt:"Foto de comida",className:"login__decoration"})]})]}),s.jsxs("div",{className:"login__msgs",children:[s.jsx(h,{to:"/signup",children:s.jsxs("p",{className:"login__msg",children:["No tienes una cuenta? ",s.jsx("span",{children:"Registrate"})]})}),s.jsx(h,{to:"/forgot-password",children:s.jsxs("p",{className:"login__msg",children:["Olvidaste tu contraseña? ",s.jsx("span",{children:"Reestablecer"})]})})]})]}),s.jsx(G,{isSubmitted:a.isSubmitted,isGoodStatus:!a.existError,msg:a.msg,handleSubmit:L})]})}export{X as default};
